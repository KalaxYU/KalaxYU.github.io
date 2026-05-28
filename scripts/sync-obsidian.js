const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.resolve(__dirname, '..');
const VAULT_ROOT = path.resolve(process.env.OBSIDIAN_VAULT || 'D:\\obsidian\\11');
const POSTS_OUT = path.join(BLOG_ROOT, 'source', '_posts', 'obsidian');
const NOTES_PAGE = path.join(BLOG_ROOT, 'source', 'notes', 'index.md');
const HOME_PAGE = path.join(BLOG_ROOT, 'source', 'index.md');
const MODULE_PAGE_DIR = path.join(BLOG_ROOT, 'source');
const ASSETS_OUT = path.join(BLOG_ROOT, 'source', 'notes-assets');

const ASSET_EXTS = new Set(['.avif', '.css', '.gif', '.jpeg', '.jpg', '.js', '.json', '.png', '.svg', '.webp']);
const SKIP_DIRS = new Set(['.obsidian', '.git', '.trash', 'node_modules']);
const SKIP_EMPTY_NOTES = true;
const SKIP_DEFAULT_NOTES = new Set(['Welcome.md']);

const MODULES = [
  {
    key: 'math',
    title: 'Mathematics',
    cn: '数学',
    href: '/math/',
    icon: 'fas fa-square-root-variable',
    accent: '#2b7a78',
    description: '线性代数、抽象代数、数学符号、证明题和作业整理。',
    empty: '数学笔记：定义、定理、证明、例题和作业。',
    matcher: text => /(abstract algebra|linear algebra|数学|代数|rings|groups|作业|符号|theorem|exercise)/i.test(text)
  },
  {
    key: 'english',
    title: 'English',
    cn: '英语',
    href: '/english/',
    icon: 'fas fa-feather-pointed',
    accent: '#4666a5',
    description: 'TOEFL Reading、原版文本精读、词汇、长难句和写作表达。',
    empty: '英语笔记：阅读、词汇、句法、写作和备考材料。',
    matcher: text => /(english|gatsby|toefl|reading|vocabulary|cet|晨读|美文)/i.test(text)
  },
  {
    key: 'french',
    title: 'French',
    cn: '法语',
    href: '/french/',
    icon: 'fas fa-language',
    accent: '#d96c4f',
    description: '法语词汇、动词变位、介词、冠词、句式和练习。',
    empty: '法语笔记：语法、词汇、听写、句型和练习。',
    matcher: text => /(法语|fraçais|français|french|verbe|préposition|personne|vocabulaire|interrogative|négative)/i.test(text)
  },
  {
    key: 'cs',
    title: 'Computer Science',
    cn: 'CS',
    href: '/cs/',
    icon: 'fas fa-code',
    accent: '#7b5aa6',
    description: '算法、数据结构、系统、工具和项目记录。',
    empty: 'CS 笔记：算法、系统、编程工具和项目记录。',
    matcher: text => /(computer science|cs|algorithm|data structure|programming|code|计算机|算法|系统)/i.test(text)
  },
  {
    key: 'journal',
    title: 'Journal',
    cn: '札记',
    href: '/journal/',
    icon: 'fas fa-compass',
    accent: '#c99a35',
    description: '读书记录、日常札记、课程记录和未分类文本。',
    empty: '札记：读书记录、日常记录、课程记录和未分类文本。',
    matcher: text => /(journal|daily|music|hope|gatsby|日记|札记|随笔|阅读)/i.test(text)
  }
];

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

function readExistingDate(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    const match = raw.match(/^date:\s*(.+)$/m);
    return match ? match[1].trim() : fallback;
  } catch {
    return fallback;
  }
}

function writeFileIfChanged(filePath, nextContent) {
  const normalizedNext = nextContent.replace(/\r\n/g, '\n');
  if (fs.existsSync(filePath)) {
    try {
      const current = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
      if (current === normalizedNext) return false;
    } catch {
      // Fall through and attempt the write below.
    }
  }
  fs.writeFileSync(filePath, nextContent, 'utf8');
  return true;
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

function moduleFor(relativePath, title, body) {
  const haystack = `${relativePath}\n${title}\n${body}`.toLowerCase();
  if (/(^|\/)(se3|daily conclusions)(\/|$)|journal|jounals|日记|札记|随笔/i.test(`${relativePath}\n${title}`)) {
    return MODULES.find(module => module.key === 'journal');
  }
  if (/(法语|fraçais|français|french|verbe|préposition|personne|vocabulaire|interrogative|négative)/i.test(haystack)) {
    return MODULES.find(module => module.key === 'french');
  }
  if (/(abstract algebra|linear algebra|高等代数|数学|代数|rings|groups|作业|符号|theorem|exercise)/i.test(haystack)) {
    return MODULES.find(module => module.key === 'math');
  }
  if (/(english|gatsby|toefl|reading|vocabulary|cet|晨读|美文)/i.test(haystack)) {
    return MODULES.find(module => module.key === 'english');
  }
  if (/(computer science|cs|algorithm|data structure|programming|code|计算机|算法|系统)/i.test(haystack)) {
    return MODULES.find(module => module.key === 'cs');
  }
  return MODULES.find(module => module.key === 'journal');
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

  return normalizeMath(transformed.trim());
}

function normalizeMath(body) {
  const displays = [];
  let next = body.replace(/\$\$\s*([\s\S]*?)\s*\$\$/g, (match, content) => {
    const clean = content.trim();
    if (!clean) return '';
    const token = `@@KALAX_DISPLAY_MATH_${displays.length}@@`;
    displays.push(`{% mathjax '{"conversion":{"display":true}}' %}\n${clean}\n{% endmathjax %}`);
    return token;
  });

  next = next.replace(/(^|[^\\])\$([^$\n]+?)\$/g, (match, prefix, content) => {
    const clean = content.trim();
    if (!clean) return match;
    return `${prefix}{% mathjax '{"conversion":{"display":false}}' %}${clean}{% endmathjax %}`;
  });

  return next.replace(/@@KALAX_DISPLAY_MATH_(\d+)@@/g, (match, index) => displays[Number(index)] || match);
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
    const module = moduleFor(relative, title, body);
    const tags = [
      'obsidian',
      module.cn,
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
      module,
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
  const categories = [record.module.cn, ...record.folders.filter(folder => folder !== record.module.cn)];
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
  const byModule = groupByModule(records);

  const lines = [
    '---',
    'title: Notes',
    `date: ${formatDate(new Date())}`,
    'comments: false',
    '---',
    '',
    '<div class="note-map">',
    '',
    '<p class="hub-kicker">Knowledge Index</p>',
    '<h2>Notes by Subject</h2>',
    '<p class="hub-intro">Obsidian 笔记按学科和用途索引，包含数学、英语、法语、CS 和札记。</p>',
    '',
    '<div class="module-grid">',
    ...MODULES.map(module => renderModuleCard(module, byModule.get(module.key) || [])),
    '</div>',
    ''
  ];

  lines.push('## 最近更新', '');
  for (const record of [...records].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 8)) {
    lines.push(`- [${record.title}](/notes/${record.slug}/) · ${record.module.cn}`);
  }

  lines.push('</div>', '');
  return lines.join('\n');
}

function groupByModule(records) {
  const groups = new Map(MODULES.map(module => [module.key, []]));
  for (const record of records) groups.get(record.module.key).push(record);
  return groups;
}

function renderModuleCard(module, items) {
  const count = module.key === 'english'
    ? (items.length ? `${items.length} notes + TOEFL` : 'TOEFL series')
    : (module.key === 'cs' && items.length === 0 ? 'planned' : `${items.length} ${items.length === 1 ? 'note' : 'notes'}`);
  return [
    `<a class="module-card" style="--module-accent: ${module.accent}" href="${module.href}">`,
    `<span class="module-icon"><i class="${module.icon}"></i></span>`,
    `<span class="module-count">${count}</span>`,
    `<strong>${module.cn}</strong>`,
    `<span>${module.title}</span>`,
    `<p>${module.description}</p>`,
    '</a>'
  ].join('\n');
}

function renderHome(records) {
  const homeDate = readExistingDate(HOME_PAGE, formatDate(new Date()));
  const byModule = groupByModule(records);
  const lines = [
    '---',
    'title: Kalax524',
    `date: ${homeDate}`,
    'comments: false',
    'top_img: /img/bg.JPG',
    '---',
    '',
    '<div class="home-lab">',
    '<p class="hub-kicker">Kalax524</p>',
    '<h2>Subject Index</h2>',
    '<p class="hub-intro">数学、英语、法语、CS 和札记五个区域。每个区域收录对应的笔记、阅读和课程材料。</p>',
    '<div class="module-grid">',
    ...MODULES.map(module => renderModuleCard(module, byModule.get(module.key) || [])),
    '</div>',
    '<div class="home-actions">',
    '<a class="text-link" href="/english-reading/">TOEFL Reading</a>',
    '<a class="text-link" href="/articles/">All Articles</a>',
    '<a class="text-link" href="https://notes.kalax524.com" target="_blank" rel="noopener">notes.kalax524.com</a>',
    '</div>',
    '</div>',
    ''
  ];
  return lines.join('\n');
}

function renderModulePage(module, items) {
  const pagePath = path.join(MODULE_PAGE_DIR, module.key, 'index.md');
  const pageDate = readExistingDate(pagePath, formatDate(new Date()));
  const lines = [
    '---',
    `title: ${module.title}`,
    `date: ${pageDate}`,
    'comments: false',
    '---',
    '',
    '<div class="module-page">',
    `<p class="hub-kicker">${module.cn}</p>`,
    `<h2>${module.title}</h2>`,
    `<p class="hub-intro">${module.description}</p>`,
    ''
  ];

  if (module.key === 'english') {
    lines.push('<p><a class="text-link" href="/english-reading/">进入 TOEFL Reading 精读专栏</a></p>', '');
  }

  if (!items.length) {
    lines.push(`<p class="empty-note">${module.empty}</p>`);
  } else {
    lines.push('<div class="note-list">');
    for (const record of [...items].sort((a, b) => b.updated.localeCompare(a.updated))) {
      lines.push([
        `<a class="note-row" href="/notes/${record.slug}/">`,
        `<strong>${record.title}</strong>`,
        `<span>${record.description || record.relative}</span>`,
        '</a>'
      ].join('\n'));
    }
    lines.push('</div>');
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
  assertInside(BLOG_ROOT, HOME_PAGE);
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

  writeFileIfChanged(NOTES_PAGE, renderIndex(records));
  writeFileIfChanged(HOME_PAGE, renderHome(records));
  const byModule = groupByModule(records);
  for (const module of MODULES) {
    const pagePath = path.join(MODULE_PAGE_DIR, module.key, 'index.md');
    assertInside(BLOG_ROOT, pagePath);
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    writeFileIfChanged(pagePath, renderModulePage(module, byModule.get(module.key) || []));
  }
  console.log(`Synced ${records.length} Obsidian notes from ${VAULT_ROOT}`);
}

if (require.main === module) {
  main();
}
