const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.resolve(__dirname, '..');
const VAULT_ROOT = path.resolve(process.env.OBSIDIAN_VAULT || 'D:\\obsidian\\11');
const POSTS_OUT = path.join(BLOG_ROOT, 'source', '_posts', 'obsidian');
const NOTES_PAGE = path.join(BLOG_ROOT, 'source', 'notes', 'index.md');
const ASSETS_OUT = path.join(BLOG_ROOT, 'source', 'notes-assets');

const ASSET_EXTS = new Set(['.avif', '.css', '.gif', '.jpeg', '.jpg', '.js', '.json', '.png', '.svg', '.webp']);
const SKIP_DIRS = new Set(['.obsidian', '.git', '.trash', 'node_modules']);
const SKIP_EMPTY_NOTES = true;
const SKIP_DEFAULT_NOTES = new Set(['Welcome.md']);

function assertInside(parent, child) {
  const relative = path.relative(parent, child);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside blog root: ${child}`);
  }
}

function walk(dir, predicate, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, predicate, files);
    else if (!predicate || predicate(fullPath)) files.push(fullPath);
  }
  return files;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function hash(value) {
  return crypto.createHash('sha1').update(value).digest('hex').slice(0, 8);
}

function slugify(value) {
  const normalized = value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\\/:*?"<>|#%{}^~[\]`]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return normalized || `note-${hash(value)}`;
}

function formatDate(date) {
  const pad = number => String(number).padStart(2, '0');
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate())
  ].join('-') + ' ' + [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join(':');
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

function yamlList(name, values) {
  const unique = [...new Set(values.filter(Boolean).map(value => String(value).trim()).filter(Boolean))];
  if (!unique.length) return `${name}: []`;
  return [`${name}:`, ...unique.map(value => `  - ${yamlString(value)}`)].join('\n');
}

function stripFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: text };
  return { frontmatter: match[1], body: text.slice(match[0].length) };
}

function parseFrontmatterTags(frontmatter) {
  const tags = [];
  const lines = frontmatter.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const tagLine = line.match(/^tags:\s*(.*)$/);
    if (!tagLine) continue;
    const inline = tagLine[1].trim();
    if (inline.startsWith('[') && inline.endsWith(']')) {
      tags.push(...inline.slice(1, -1).split(',').map(item => item.trim().replace(/^['"]|['"]$/g, '')));
    } else if (inline) {
      tags.push(...inline.split(',').map(item => item.trim().replace(/^['"]|['"]$/g, '')));
    } else {
      for (let child = index + 1; child < lines.length; child += 1) {
        const childLine = lines[child];
        const item = childLine.match(/^\s*-\s*(.+)$/);
        if (item) tags.push(item[1].trim().replace(/^['"]|['"]$/g, ''));
        else if (childLine.trim()) break;
      }
    }
  }
  return tags;
}

function collectInlineTags(body) {
  const tags = [];
  const matcher = /(^|\s)#([A-Za-z][\w/-]*)/g;
  let match;
  while ((match = matcher.exec(body))) tags.push(match[2]);
  return tags;
}

function inferTitle(relativePath, body) {
  const basename = path.basename(relativePath, '.md');
  const heading = body.match(/^#{1,3}\s+(.+)$/m);
  if (heading) {
    const clean = heading[1].replace(/[*_`[\]]/g, '').trim();
    if (clean && !/^\d+$/.test(clean)) return clean.slice(0, 90);
  }
  return basename;
}

function excerpt(body) {
  return body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?]]/g, (match, target, alias) => alias || target)
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, '')
    .replace(/\[[^\]]+]\([^)]+\)/g, match => match.replace(/^\[|\]\([^)]+\)$/g, ''))
    .replace(/[#>*_`|$\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150);
}

function buildAssetMap() {
  const assets = new Map();
  for (const file of walk(VAULT_ROOT, item => ASSET_EXTS.has(path.extname(item).toLowerCase()))) {
    assets.set(path.basename(file).toLowerCase(), file);
  }
  return assets;
}

function copyAsset(assetMap, rawTarget) {
  const cleaned = decodeURIComponent(rawTarget)
    .split('|')[0]
    .split('#')[0]
    .trim();
  const assetPath = assetMap.get(path.basename(cleaned).toLowerCase());
  if (!assetPath) return null;
  const extension = path.extname(assetPath).toLowerCase();
  const base = path.basename(assetPath, extension);
  const outputName = `${slugify(base)}-${hash(assetPath)}${extension}`;
  const outputPath = path.join(ASSETS_OUT, outputName);
  assertInside(BLOG_ROOT, outputPath);
  fs.mkdirSync(ASSETS_OUT, { recursive: true });
  if (!fs.existsSync(outputPath)) fs.copyFileSync(assetPath, outputPath);
  return `/notes-assets/${outputName}`;
}

function normalizeLinkTarget(value) {
  return toPosix(value)
    .replace(/\.md$/i, '')
    .replace(/^\/+/, '')
    .toLowerCase();
}

function transformLinks(body, currentRelative, noteMaps, assetMap) {
  const currentDir = path.posix.dirname(toPosix(currentRelative).replace(/\.md$/i, ''));

  const resolveNote = raw => {
    const targetWithoutAnchor = raw.split('#')[0].trim();
    const normalized = normalizeLinkTarget(targetWithoutAnchor);
    const relativeCandidate = normalizeLinkTarget(path.posix.join(currentDir, targetWithoutAnchor));
    return noteMaps.byRelative.get(normalized)
      || noteMaps.byRelative.get(relativeCandidate)
      || noteMaps.byName.get(path.posix.basename(normalized));
  };

  let transformed = body.replace(/!\[\[([^\]]+)]]/g, (match, inner) => {
    const assetUrl = copyAsset(assetMap, inner);
    if (!assetUrl) return match;
    const alt = path.basename(inner.split('|')[0].split('#')[0].trim(), path.extname(inner));
    return `![${alt}](${assetUrl})`;
  });

  transformed = transformed.replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?]]/g, (match, rawTarget, alias) => {
    const note = resolveNote(rawTarget);
    const label = alias || path.basename(rawTarget);
    return note ? `[${label}](/notes/${note.slug}/)` : label;
  });

  transformed = transformed.replace(/!\[([^\]]*)]\((?!https?:\/\/|\/|#)([^)]+)\)/g, (match, alt, rawTarget) => {
    const assetUrl = copyAsset(assetMap, rawTarget);
    return assetUrl ? `![${alt || path.basename(rawTarget)}](${assetUrl})` : match;
  });

  transformed = transformed.replace(/\[([^\]]+)]\((?!https?:\/\/|\/|#|mailto:)([^)]+\.md)\)/g, (match, label, rawTarget) => {
    const note = resolveNote(rawTarget);
    return note ? `[${label}](/notes/${note.slug}/)` : match;
  });

  transformed = transformed.replace(/\b(href|src|data-data-url)="(?!https?:\/\/|\/|#|mailto:)([^"]+)"/g, (match, attribute, rawTarget) => {
    const assetUrl = copyAsset(assetMap, rawTarget);
    return assetUrl ? `${attribute}="${assetUrl}"` : match;
  });

  return transformed.trim();
}

function buildNoteRecords() {
  const records = [];
  const markdownFiles = walk(VAULT_ROOT, file => path.extname(file).toLowerCase() === '.md');

  for (const file of markdownFiles) {
    const relative = toPosix(path.relative(VAULT_ROOT, file));
    if (SKIP_DEFAULT_NOTES.has(path.basename(file))) continue;
    const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
    const { frontmatter, body } = stripFrontmatter(raw);
    if (SKIP_EMPTY_NOTES && !body.trim()) continue;
    const stat = fs.statSync(file);
    const title = inferTitle(relative, body);
    const withoutExtension = relative.replace(/\.md$/i, '');
    const slug = `${slugify(withoutExtension)}-${hash(relative)}`;
    const folders = toPosix(path.dirname(relative)).split('/').filter(part => part && part !== '.');
    const tags = [
      'obsidian',
      ...folders,
      ...parseFrontmatterTags(frontmatter),
      ...collectInlineTags(body)
    ];

    records.push({
      file,
      relative,
      title,
      slug,
      folders,
      frontmatter,
      body,
      tags,
      date: formatDate(stat.mtime),
      updated: formatDate(stat.mtime),
      description: excerpt(body)
    });
  }

  return records.sort((left, right) => left.relative.localeCompare(right.relative, 'zh-Hans-CN'));
}

function buildMaps(records) {
  const byRelative = new Map();
  const byName = new Map();
  for (const record of records) {
    const relativeKey = normalizeLinkTarget(record.relative);
    const nameKey = normalizeLinkTarget(path.basename(record.relative, '.md'));
    byRelative.set(relativeKey, record);
    if (!byName.has(nameKey)) byName.set(nameKey, record);
  }
  return { byRelative, byName };
}

function renderPost(record, body) {
  const categories = ['Notes', ...record.folders];
  const hasMath = /(\$\$|\\begin\{|\\\(|\\\[|\$[^$\n]+\$)/.test(body);
  const description = excerpt(body) || `Obsidian note: ${record.title}`;
  return [
    '---',
    `title: ${yamlString(record.title)}`,
    `date: ${record.date}`,
    `updated: ${record.updated}`,
    `permalink: notes/${record.slug}/`,
    yamlList('categories', categories),
    yamlList('tags', record.tags),
    `description: ${yamlString(description)}`,
    hasMath ? 'mathjax: true' : '',
    '---',
    '',
    body,
    ''
  ].filter(line => line !== '').join('\n');
}

function renderIndex(records) {
  const groups = new Map();
  for (const record of records) {
    const group = record.folders[0] || 'Root';
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(record);
  }

  const lines = [
    '---',
    'title: Notes',
    `date: ${formatDate(new Date())}`,
    'comments: false',
    '---',
    '',
    '<div class="note-map">',
    '',
    '这里自动同步了 Obsidian 中适合发布的 Markdown 笔记。空白笔记和 Obsidian 默认欢迎页会被跳过；每次运行 `npm run sync:notes` 都会重新生成这个索引。',
    '',
    `当前同步：${records.length} 篇。`,
    ''
  ];

  for (const [group, items] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-Hans-CN'))) {
    lines.push(`## ${group}`, '');
    for (const record of items.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))) {
      lines.push(`- [${record.title}](/notes/${record.slug}/)`);
    }
    lines.push('');
  }

  lines.push('</div>', '');
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(VAULT_ROOT)) {
    throw new Error(`Obsidian vault not found: ${VAULT_ROOT}`);
  }

  assertInside(BLOG_ROOT, POSTS_OUT);
  assertInside(BLOG_ROOT, NOTES_PAGE);
  assertInside(BLOG_ROOT, ASSETS_OUT);

  fs.rmSync(POSTS_OUT, { recursive: true, force: true });
  fs.mkdirSync(POSTS_OUT, { recursive: true });
  fs.mkdirSync(path.dirname(NOTES_PAGE), { recursive: true });
  fs.mkdirSync(ASSETS_OUT, { recursive: true });

  const records = buildNoteRecords();
  const maps = buildMaps(records);
  const assetMap = buildAssetMap();

  for (const record of records) {
    const body = transformLinks(record.body, record.relative, maps, assetMap);
    const outputPath = path.join(POSTS_OUT, `${record.slug}.md`);
    assertInside(BLOG_ROOT, outputPath);
    fs.writeFileSync(outputPath, renderPost(record, body), 'utf8');
  }

  fs.writeFileSync(NOTES_PAGE, renderIndex(records), 'utf8');
  console.log(`Synced ${records.length} Obsidian notes from ${VAULT_ROOT}`);
}

if (require.main === module) {
  main();
}
