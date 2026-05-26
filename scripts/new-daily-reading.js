const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.resolve(__dirname, '..');
const POSTS_OUT = path.join(BLOG_ROOT, 'source', '_posts', 'english-reading');
const INDEX_PAGE = path.join(BLOG_ROOT, 'source', 'english-reading', 'index.md');

const readings = [
  {
    title: 'Darwin: The Struggle for Existence',
    slug: 'darwin-struggle-for-existence',
    author: 'Charles Darwin',
    work: 'On the Origin of Species',
    source: 'Chapter III, public domain',
    passage: `Before entering on the subject of this chapter I must make a few preliminary remarks, to show how the struggle for existence bears on Natural Selection. It has been seen in the last chapter that amongst organic beings in a state of nature there is some individual variability; indeed I am not aware that this has ever been disputed. It is immaterial for us whether a multitude of doubtful forms be called species or sub-species or varieties; what rank, for instance, the two or three hundred doubtful forms of British plants are entitled to hold, if the existence of any well-marked varieties be admitted.

But the mere existence of individual variability and of some few well-marked varieties, though necessary as the foundation for the work, helps us but little in understanding how species arise in nature. How have all those exquisite adaptations of one part of the organization to another part, and to the conditions of life, and of one organic being to another being, been perfected? We see these beautiful co-adaptations most plainly in the woodpecker and the mistletoe; and only a little less plainly in the humblest parasite which clings to the hairs of a quadruped or feathers of a bird; in the structure of the beetle which dives through the water; in the plumed seed which is wafted by the gentlest breeze; in short, we see beautiful adaptations everywhere and in every part of the organic world.

Again, it may be asked, how is it that varieties, which I have called incipient species, become ultimately converted into good and distinct species, which in most cases obviously differ from each other far more than do the varieties of the same species? How do those groups of species, which constitute what are called distinct genera, and which differ from each other more than do the species of the same genus, arise? All these results, as we shall more fully see in the next chapter, follow from the struggle for life.`,
    vocabulary: [
      ['preliminary remarks', 'opening comments before the main argument', '学术文章开头常用，用来先界定问题。'],
      ['bears on', 'has relevance to', '比 relates to 更正式。'],
      ['variability', 'the tendency to differ among individuals', '生物学和社会科学文本都常见。'],
      ['immaterial', 'not important for the present purpose', '表示某细节不影响当前论证。'],
      ['incipient', 'beginning to appear or develop', '托福常见抽象形容词。']
    ],
    sentence: 'But the mere existence of individual variability and of some few well-marked varieties, though necessary as the foundation for the work, helps us but little in understanding how species arise in nature.',
    structure: 'known fact -> explanatory gap -> examples -> controlling concept',
    takeaway: '先承认一个基础事实，再指出它解释不了全部问题，然后用例子扩大问题重量。'
  }
];

function pad(value) {
  return String(value).padStart(2, '0');
}

function today() {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function dayIndex(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  return Math.floor(date.getTime() / 86400000) % readings.length;
}

function render(dateText, reading) {
  const wordRows = reading.vocabulary
    .map(([word, meaning, note]) => `| ${word} | ${meaning} | ${note} |`)
    .join('\n');

  return `---\ntitle: ${JSON.stringify(reading.title)}\ndate: ${dateText} 08:00:00\nupdated: ${dateText} 08:00:00\npermalink: readings/${dateText}-${reading.slug}/\ncategories:\n  - English\n  - TOEFL Reading\ntags:\n  - TOEFL\n  - public-domain\n  - reading\ndescription: ${JSON.stringify(`TOEFL-level close reading from ${reading.author}'s ${reading.work}.`)}\ncover: /img/bg.JPG\ntop_img: /img/bg.JPG\n---\n\n## Source\n\n${reading.author}, *${reading.work}*, ${reading.source}.\n\n## Passage\n\n${reading.passage}\n\n## Vocabulary\n\n| Word / Phrase | Meaning | TOEFL Note |\n| --- | --- | --- |\n${wordRows}\n\n## Sentence Work\n\n> ${reading.sentence}\n\n先抓主干，再处理插入语和修饰成分。TOEFL 阅读里，这类句子常考作者如何限定前一句的解释力。\n\n## Structure Notes\n\n${reading.structure}\n\n## Writing Takeaway\n\n${reading.takeaway}\n`;
}

function updateIndex(dateText, reading) {
  if (!fs.existsSync(INDEX_PAGE)) return;
  const link = `- [${reading.title}](/readings/${dateText}-${reading.slug}/)`;
  const content = fs.readFileSync(INDEX_PAGE, 'utf8');
  if (content.includes(link)) return;
  const updated = content.replace('## Readings\n\n', `## Readings\n\n${link}\n`);
  fs.writeFileSync(INDEX_PAGE, updated, 'utf8');
}

function main() {
  const dateArg = process.argv.find(arg => arg.startsWith('--date='));
  const dateText = dateArg ? dateArg.slice('--date='.length) : today();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText)) {
    throw new Error('Use --date=YYYY-MM-DD');
  }

  const reading = readings[dayIndex(dateText)];
  const output = path.join(POSTS_OUT, `${dateText}-${reading.slug}.md`);
  fs.mkdirSync(POSTS_OUT, { recursive: true });

  if (fs.existsSync(output)) {
    console.log(`Reading already exists: ${output}`);
    return;
  }

  fs.writeFileSync(output, render(dateText, reading), 'utf8');
  updateIndex(dateText, reading);
  console.log(`Created TOEFL reading post: ${output}`);
}

if (require.main === module) {
  main();
}
