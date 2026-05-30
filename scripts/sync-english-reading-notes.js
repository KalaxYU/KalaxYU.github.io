const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.resolve(__dirname, '..');
const POSTS_IN = path.join(BLOG_ROOT, 'source', '_posts', 'english-reading');
const VAULT_ROOT = path.resolve(process.env.OBSIDIAN_VAULT || 'D:\\obsidian\\11');
const NOTES_OUT = path.resolve(
  process.env.OBSIDIAN_TOEFL_READING_DIR || path.join(VAULT_ROOT, '英语', 'TOEFL Reading')
);

const GENERATED_MARKER = '<!-- kalax-source: english-reading -->';

function assertInside(parent, child) {
  const relative = path.relative(parent, child);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside target directory: ${child}`);
  }
}

function stripFrontmatter(text) {
  const raw = String(text || '').replace(/^\uFEFF/, '');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: raw };
  return { frontmatter: match[1], body: raw.slice(match[0].length) };
}

function frontmatterValue(frontmatter, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = frontmatter.match(new RegExp(`^${escaped}:\\s*(.+)$`, 'm'));
  if (!match) return '';
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

function yamlString(value) {
  return JSON.stringify(String(value || ''));
}

function noteFileName(postPath) {
  return `${path.basename(postPath, '.md')}.md`;
}

function blogRelativePath(postPath) {
  return path.relative(BLOG_ROOT, postPath).split(path.sep).join('/');
}

function renderNoteFromPost(postPath) {
  const raw = fs.readFileSync(postPath, 'utf8');
  const { frontmatter, body } = stripFrontmatter(raw);
  const title = frontmatterValue(frontmatter, 'title') || path.basename(postPath, '.md');
  const date = frontmatterValue(frontmatter, 'date').split(/\s+/)[0] || '';
  const permalink = frontmatterValue(frontmatter, 'permalink');
  const permalinkPath = permalink ? `/${permalink.replace(/^\/+/, '')}` : '';
  const blogUrl = permalinkPath ? `https://kalax524.com${permalinkPath}` : '';
  const sourcePath = blogRelativePath(postPath);

  return [
    '---',
    `title: ${yamlString(title)}`,
    date ? `date: ${yamlString(date)}` : '',
    'tags:',
    '  - TOEFL',
    '  - reading',
    '  - English',
    '  - TOEFL Reading',
    `source_post: ${yamlString(sourcePath)}`,
    permalinkPath ? `permalink: ${yamlString(permalinkPath)}` : '',
    blogUrl ? `blog_url: ${yamlString(blogUrl)}` : '',
    '---',
    '',
    GENERATED_MARKER,
    `<!-- source-post: ${sourcePath} -->`,
    '',
    `# ${title}`,
    '',
    blogUrl ? `Blog permalink: [${blogUrl}](${blogUrl})` : '',
    '',
    body.trim(),
    ''
  ].filter(line => line !== '').join('\n');
}

function writeGeneratedNote(targetPath, content) {
  if (fs.existsSync(targetPath)) {
    const current = fs.readFileSync(targetPath, 'utf8').replace(/^\uFEFF/, '');
    if (!current.includes(GENERATED_MARKER)) return 'skipped';
    if (current.replace(/\r\n/g, '\n') === content.replace(/\r\n/g, '\n')) return 'unchanged';
    fs.writeFileSync(targetPath, content, 'utf8');
    return 'updated';
  }

  fs.writeFileSync(targetPath, content, 'utf8');
  return 'created';
}

function listPostFiles(files) {
  if (files && files.length) return files.map(file => path.resolve(file));
  if (!fs.existsSync(POSTS_IN)) return [];
  return fs.readdirSync(POSTS_IN)
    .filter(name => /\.md$/i.test(name))
    .sort((left, right) => left.localeCompare(right))
    .map(name => path.join(POSTS_IN, name));
}

function syncEnglishReadingNotes(options = {}) {
  fs.mkdirSync(NOTES_OUT, { recursive: true });
  const result = { created: 0, updated: 0, unchanged: 0, skipped: 0, targetDir: NOTES_OUT };

  for (const postPath of listPostFiles(options.files)) {
    if (!fs.existsSync(postPath)) continue;
    const targetPath = path.join(NOTES_OUT, noteFileName(postPath));
    assertInside(NOTES_OUT, targetPath);
    const status = writeGeneratedNote(targetPath, renderNoteFromPost(postPath));
    result[status] += 1;
  }

  return result;
}

function formatResult(result) {
  return [
    `Synced English reading notes to ${result.targetDir}`,
    `created=${result.created}`,
    `updated=${result.updated}`,
    `unchanged=${result.unchanged}`,
    `skipped=${result.skipped}`
  ].join(' ');
}

function main() {
  const result = syncEnglishReadingNotes();
  console.log(formatResult(result));
}

if (require.main === module) {
  main();
}

module.exports = {
  GENERATED_MARKER,
  NOTES_OUT,
  formatResult,
  renderNoteFromPost,
  syncEnglishReadingNotes
};
