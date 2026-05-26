const fs = require('fs');
const path = require('path');

const BLOG_ROOT = path.resolve(__dirname, '..');
const POSTS_OUT = path.join(BLOG_ROOT, 'source', '_posts', 'english-reading');
const INDEX_PAGE = path.join(BLOG_ROOT, 'source', 'english-reading', 'index.md');

const topics = [
  {
    title: 'The Discipline of Small Revisions',
    passage: [
      'A strong essay is rarely produced by inspiration alone. More often, it is built through small revisions: a vague word is replaced, a sentence is shortened, and an example is moved closer to the claim it supports.',
      'Revision teaches patience because it separates pride from progress. The first draft proves that an idea exists; the second draft asks whether the idea can be understood by someone else.'
    ],
    words: [
      ['revision', '修改；修订', 'Every revision made the argument clearer.'],
      ['vague', '模糊的', 'A vague claim is hard to defend.'],
      ['claim', '论点；主张', 'The example supports the main claim.'],
      ['patience', '耐心', 'Patience is part of serious writing.'],
      ['draft', '草稿', 'The first draft does not need to be perfect.']
    ],
    sentence: 'The first draft proves that an idea exists; the second draft asks whether the idea can be understood by someone else.',
    reflection: '今天可以拿一段旧笔记做一次小修改：只改一个词、一句话或一个例子。'
  },
  {
    title: 'Attention Is a Limited Budget',
    passage: [
      'Attention behaves like a limited budget. If it is spent on every notification, comment, and recommendation, little remains for the work that requires continuity.',
      'This does not mean that a person should reject technology. It means that tools should be arranged around intention, rather than intention being pulled apart by tools.'
    ],
    words: [
      ['limited', '有限的', 'Attention is a limited resource.'],
      ['budget', '预算', 'Treat your time as a budget.'],
      ['continuity', '连续性', 'Deep work requires continuity.'],
      ['reject', '拒绝', 'The point is not to reject technology.'],
      ['intention', '意图；目的', 'Arrange tools around intention.']
    ],
    sentence: 'Tools should be arranged around intention, rather than intention being pulled apart by tools.',
    reflection: '今天关掉一个不必要的提醒，给一件事保留完整的二十分钟。'
  },
  {
    title: 'Why Difficult Books Matter',
    passage: [
      'A difficult book slows the reader down. At first this feels inefficient, but the slower pace can become a form of training. The reader must hold several ideas in mind and compare them with care.',
      'Easy reading gives information quickly; difficult reading changes the reader more slowly. Both are useful, but only the second teaches the mind to stay with uncertainty.'
    ],
    words: [
      ['inefficient', '低效的', 'Slow reading may feel inefficient.'],
      ['pace', '速度；节奏', 'The pace of reading changes the experience.'],
      ['compare', '比较', 'Compare the ideas with care.'],
      ['uncertainty', '不确定性', 'Learning often begins with uncertainty.'],
      ['training', '训练', 'Reading can be a form of training.']
    ],
    sentence: 'Easy reading gives information quickly; difficult reading changes the reader more slowly.',
    reflection: '今天读一段难读的文字，不急着懂完，只标出一个真正的问题。'
  },
  {
    title: 'Learning a Language Twice',
    passage: [
      'When we learn a foreign language, we also learn our native language again. Grammar, which once felt automatic, becomes visible. Ordinary words begin to show their hidden structure.',
      'This second learning is valuable because it makes expression less accidental. A learner starts to ask not only what a sentence means, but why it is shaped in that particular way.'
    ],
    words: [
      ['native', '本族的；本国的', 'Your native language can become visible again.'],
      ['automatic', '自动的；无意识的', 'Grammar once felt automatic.'],
      ['structure', '结构', 'Words have hidden structure.'],
      ['accidental', '偶然的', 'Expression becomes less accidental.'],
      ['particular', '特定的', 'Why is it shaped in that particular way?']
    ],
    sentence: 'A learner starts to ask not only what a sentence means, but why it is shaped in that particular way.',
    reflection: '今天选一个法语或英语句子，问自己：它为什么这样排列？'
  },
  {
    title: 'The Value of Unfinished Notes',
    passage: [
      'Unfinished notes may look messy, but they often contain the most honest traces of thinking. A polished article shows the result; a note shows the movement.',
      'Instead of deleting every fragment, we can return to it later. Some fragments become questions, some become outlines, and a few become the beginning of a larger project.'
    ],
    words: [
      ['unfinished', '未完成的', 'Unfinished notes are still useful.'],
      ['messy', '凌乱的', 'A messy note can hold a good question.'],
      ['trace', '痕迹', 'Notes preserve traces of thinking.'],
      ['fragment', '碎片', 'A fragment may become an outline.'],
      ['outline', '提纲', 'Turn the fragment into an outline.']
    ],
    sentence: 'A polished article shows the result; a note shows the movement.',
    reflection: '今天翻一条旧碎片，给它补一个标题或者一个问题。'
  }
];

function pad(value) {
  return String(value).padStart(2, '0');
}

function today() {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function dayIndex(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  return Math.floor(date.getTime() / 86400000) % topics.length;
}

function render(dateText, topic) {
  const slug = slugify(topic.title);
  const wordRows = topic.words
    .map(([word, meaning, example]) => `| ${word} | ${meaning} | ${example} |`)
    .join('\n');

  return `---\ntitle: ${JSON.stringify(topic.title)}\ndate: ${dateText} 08:00:00\nupdated: ${dateText} 08:00:00\npermalink: readings/${dateText}-${slug}/\ncategories:\n  - Daily English\ntags:\n  - CET-6\n  - reading\n  - vocabulary\n  - original\ndescription: ${JSON.stringify(`Daily English reading note: ${topic.title}`)}\n---\n\n## Reading\n\n${topic.passage.join('\n\n')}\n\n## Word Bank\n\n| Word | Meaning | Example |\n| --- | --- | --- |\n${wordRows}\n\n## Sentence Lab\n\n> ${topic.sentence}\n\n这个句子适合晨读时反复读两遍：第一遍抓主干，第二遍看连接词如何组织逻辑。\n\n## Reflection\n\n${topic.reflection}\n`;
}

function updateIndex(dateText, title) {
  if (!fs.existsSync(INDEX_PAGE)) return;
  const slug = slugify(title);
  const link = `- [${title}](/readings/${dateText}-${slug}/)`;
  const content = fs.readFileSync(INDEX_PAGE, 'utf8');
  if (content.includes(link)) return;
  const updated = content.replace('## Start Here\n\n', `## Start Here\n\n${link}\n`);
  fs.writeFileSync(INDEX_PAGE, updated, 'utf8');
}

function main() {
  const dateArg = process.argv.find(arg => arg.startsWith('--date='));
  const dateText = dateArg ? dateArg.slice('--date='.length) : today();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText)) {
    throw new Error('Use --date=YYYY-MM-DD');
  }

  const topic = topics[dayIndex(dateText)];
  const slug = slugify(topic.title);
  const output = path.join(POSTS_OUT, `${dateText}-${slug}.md`);
  fs.mkdirSync(POSTS_OUT, { recursive: true });

  if (fs.existsSync(output)) {
    console.log(`Reading already exists: ${output}`);
    return;
  }

  fs.writeFileSync(output, render(dateText, topic), 'utf8');
  updateIndex(dateText, topic.title);
  console.log(`Created Daily English post: ${output}`);
}

if (require.main === module) {
  main();
}
