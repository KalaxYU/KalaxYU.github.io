const fs = require('fs');
const path = require('path');
const { formatResult, syncFrenchReadingNotes } = require('./sync-french-reading-notes');

const BLOG_ROOT = path.resolve(__dirname, '..');
const POSTS_OUT = path.join(BLOG_ROOT, 'source', '_posts', 'french-reading');
const INDEX_PAGE = path.join(BLOG_ROOT, 'source', 'french-reading', 'index.md');

const readings = [
  {
    title: 'Une matinée à la bibliothèque',
    slug: 'matinee-bibliotheque',
    level: 'A1-A2',
    topic: 'library and study routine',
    lines: [
      ['Ce matin, Lina va à la bibliothèque de son quartier.', '今天早上，Lina 去她社区的图书馆。'],
      ['Elle porte un petit sac avec un cahier, un stylo et une bouteille d’eau.', '她背着一个小包，里面有一本笔记本、一支笔和一瓶水。'],
      ['Dans la salle, il y a beaucoup de tables, mais il n’y a pas beaucoup de bruit.', '大厅里有很多桌子，但是没有很多噪音。'],
      ['Lina choisit une place près de la fenêtre, parce que la lumière est douce.', 'Lina 选择靠窗的位置，因为光线很柔和。'],
      ['Elle lit une page de français et souligne les mots nouveaux.', '她读一页法语，并划出生词。'],
      ['Ensuite, elle écrit ces mots sur une carte blanche.', '然后，她把这些词写在一张白色卡片上。'],
      ['D’un côté, elle met le mot français; de l’autre côté, elle met le sens en chinois.', '在一面，她写法语单词；在另一面，她写中文意思。'],
      ['Elle ne veut pas apprendre dix pages en une seule fois.', '她不想一次学习十页。'],
      ['Elle préfère comprendre une petite partie et l’utiliser dans une phrase.', '她更愿意理解一小部分，并把它用在一个句子里。'],
      ['Quand elle ne comprend pas une phrase, elle la relit lentement.', '当她不理解一个句子时，她会慢慢重读。'],
      ['Parfois, elle demande aussi à un dictionnaire en ligne.', '有时，她也会查在线词典。'],
      ['Après trente minutes, elle ferme le livre et écrit trois phrases dans son cahier.', '三十分钟后，她合上书，在笔记本里写三句话。'],
      ['Ces phrases parlent de sa journée, de sa famille et de son cours.', '这些句子写她的一天、她的家人和她的课程。'],
      ['Elle n’étudie pas longtemps, mais elle revient souvent.', '她学习的时间不长，但是她经常回来。'],
      ['À la fin, elle range ses cartes dans une enveloppe bleue.', '最后，她把卡片收进一个蓝色信封里。'],
      ['Pour elle, apprendre une langue, c’est garder un petit rendez-vous chaque jour.', '对她来说，学习一门语言，就是每天保留一个小小的约定。']
    ],
    vocabulary: [
      ['quartier', '街区；社区', 'un quartier calme = 一个安静的街区'],
      ['cahier', '笔记本', '常用于课堂和学习场景'],
      ['bruit', '噪音', 'Il y a du bruit. = 有噪音。'],
      ['près de', '在……附近', 'près de la fenêtre = 靠近窗户'],
      ['souligner', '划线；强调', 'souligne les mots = 划出单词'],
      ['relire', '重读', 're- 表示“再次”']
    ],
    grammar: [
      ['il y a', '表示“有”。否定形式是 il n y a pas。'],
      ['parce que', '表示原因，相当于“因为”。'],
      ['quand', '表示时间条件，相当于“当……的时候”。'],
      ['ne ... pas', '基本否定结构：Elle n etudie pas longtemps.']
    ],
    useful: [
      ['Elle choisit une place pres de la fenetre.', '她选择靠窗的位置。'],
      ['Elle relit lentement.', '她慢慢重读。'],
      ['Elle revient souvent.', '她经常回来。']
    ]
  },
  {
    title: 'Le marché du samedi',
    slug: 'marche-samedi',
    level: 'A1-A2',
    topic: 'shopping and daily life',
    lines: [
      ['Le samedi matin, Paul va au marché avec sa mère.', '星期六早上，Paul 和他的妈妈去市场。'],
      ['Il fait beau, et les rues sont pleines de couleurs.', '天气很好，街道充满颜色。'],
      ['Paul prend une petite liste dans sa poche.', 'Paul 从口袋里拿出一张小清单。'],
      ['Sur la liste, il y a du pain, des fruits, du fromage et du lait.', '清单上有面包、水果、奶酪和牛奶。'],
      ['Sur une table, il voit des tomates rouges, des pommes vertes et du pain chaud.', '在一张桌子上，他看见红色的番茄、绿色的苹果和热面包。'],
      ['Sa mère demande deux kilos de pommes et un morceau de fromage.', '他的妈妈要两公斤苹果和一块奶酪。'],
      ['Le vendeur sourit et met les pommes dans un sac en papier.', '摊主微笑着把苹果放进一个纸袋里。'],
      ['Paul écoute le vendeur, puis il répète les prix dans sa tête.', 'Paul 听摊主说话，然后在脑子里重复价格。'],
      ['Il aime ce petit exercice, parce qu’il apprend les nombres sans ouvrir un livre.', '他喜欢这个小练习，因为他不用打开书也能学习数字。'],
      ['Quand il ne comprend pas, sa mère parle plus lentement.', '当他不理解时，他的妈妈说得更慢。'],
      ['Paul note un mot nouveau: la monnaie.', 'Paul 记下一个新词：零钱。'],
      ['Il voit les pièces dans la main du vendeur.', '他看见摊主手里的硬币。'],
      ['Avant de partir, ils achètent aussi des fleurs pour la maison.', '离开之前，他们也为家里买了花。'],
      ['Dans le bus, Paul regarde le sac et nomme chaque chose en français.', '在公交车上，Paul 看着袋子，并用法语说出每样东西的名字。'],
      ['Il dit les mots doucement pour ne pas déranger les autres personnes.', '他轻声说这些词，以免打扰别人。'],
      ['À la maison, il colle la liste sur la porte du réfrigérateur.', '回到家后，他把清单贴在冰箱门上。'],
      ['Le soir, il relit les mots et écrit une phrase avec chacun.', '晚上，他重读这些词，并用每个词写一个句子。'],
      ['Le marché devient une classe simple, vivante et très utile.', '市场变成了一间简单、生动而且很有用的课堂。']
    ],
    vocabulary: [
      ['marché', '市场', 'au marché = 去市场'],
      ['vendeur', '卖家；摊主', 'vendeuse 是阴性形式'],
      ['prix', '价格', '单复数拼写相同'],
      ['morceau', '一块；一片', 'un morceau de fromage'],
      ['partir', '离开；出发', 'avant de partir = 离开前'],
      ['vivant', '生动的；有生命力的', 'une classe vivante'],
      ['monnaie', '零钱；货币', 'la monnaie 在市场、商店里很常见'],
      ['déranger', '打扰', 'ne pas déranger les autres personnes'],
      ['réfrigérateur', '冰箱', '常用口语可说 frigo']
    ],
    grammar: [
      ['aller à / au', 'à + le 合并为 au：va au marché。'],
      ['des', '不定冠词复数：des tomates, des pommes。'],
      ['avant de + infinitif', '表示“在做某事之前”。'],
      ['chaque', '表示“每一个”，后接单数名词。']
    ],
    useful: [
      ['Les rues sont pleines de couleurs.', '街道充满颜色。'],
      ['Il répète les prix dans sa tête.', '他在脑子里重复价格。'],
      ['Le marché devient une classe.', '市场变成了一间课堂。']
    ]
  },
  {
    title: 'Un message après le cours',
    slug: 'message-apres-cours',
    level: 'A1-A2',
    topic: 'school and communication',
    lines: [
      ['Après le cours de français, Mei reste quelques minutes dans la salle.', '法语课后，Mei 在教室里多待了几分钟。'],
      ['Elle veut poser une question, mais le professeur parle déjà avec un autre étudiant.', '她想问一个问题，但是老师已经在和另一个学生说话。'],
      ['Mei ouvre son téléphone et écrit un message très simple.', 'Mei 打开手机，写了一条很简单的信息。'],
      ['Elle dit bonjour, explique la question et remercie le professeur.', '她问好，说明问题，并感谢老师。'],
      ['La question porte sur la différence entre “à” et “de”.', '这个问题关于“à”和“de”的区别。'],
      ['Puis elle relit le message pour vérifier les accents et les verbes.', '然后她重读信息，检查重音符号和动词。'],
      ['Elle change deux mots, parce qu’elle veut être claire.', '她改了两个词，因为她想表达清楚。'],
      ['Elle ajoute aussi une phrase courte: “Pouvez-vous donner un exemple?”', '她也加了一个短句：“您可以给一个例子吗？”'],
      ['Le soir, le professeur répond avec trois exemples.', '晚上，老师用三个例子回复了她。'],
      ['Les exemples sont simples, mais ils montrent bien la règle.', '这些例子很简单，但是它们清楚地展示了规则。'],
      ['Mei copie les exemples dans son cahier et fait une petite liste.', 'Mei 把例子抄到笔记本里，并做了一个小清单。'],
      ['Elle écrit aussi une phrase personnelle avec chaque exemple.', '她还用每个例子写了一个自己的句子。'],
      ['Le lendemain, elle relit la liste avant le petit déjeuner.', '第二天，她在早餐前重读这个清单。'],
      ['Elle comprend que bien poser une question est déjà une partie de l’apprentissage.', '她明白，好好提问本身已经是学习的一部分。']
    ],
    vocabulary: [
      ['poser une question', '提问', '比 dire une question 更自然'],
      ['déjà', '已经', 'Il parle déjà. = 他已经在说话。'],
      ['remercier', '感谢', 'remercier quelqu un'],
      ['vérifier', '检查；核对', 'vérifier les accents'],
      ['clair', '清楚的', 'etre clair / claire'],
      ['apprentissage', '学习过程', '来自 apprendre']
    ],
    grammar: [
      ['vouloir + infinitif', 'veut poser = 想要提问。'],
      ['avec + nom', 'avec un autre étudiant = 和另一个学生。'],
      ['pour + infinitif', 'pour vérifier = 为了检查。'],
      ['que 引导宾语从句', 'Elle comprend que... = 她明白……']
    ],
    useful: [
      ['Elle veut poser une question.', '她想问一个问题。'],
      ['Elle relit le message.', '她重读信息。'],
      ['Bien poser une question est déjà une partie de l’apprentissage.', '好好提问本身已经是学习的一部分。']
    ]
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
  const date = new Date(`${dateText}T00:00:00+08:00`);
  return Math.floor(date.getTime() / 86400000) % readings.length;
}

function renderIndex(links) {
  const items = links
    .map(link => `- [${link.title}](${link.href})`)
    .join('\n');

  return `---\ntitle: French Reading\ndate: 2026-05-30 08:10:00\ncomments: false\n---\n\n**Français A1-A2**\n\n## French Daily Reading\n\n> 每天一篇 A1-A2 法语短文，包含逐句中文翻译、词汇和语法分析。选中页面上的法语单词或句子，也会自动弹出中文翻译。\n\n## Readings\n\n${items}\n`;
}

function extractIndexLinks(content) {
  const links = [];
  const seen = new Set();
  const add = (title, href) => {
    if (!title || !href || seen.has(href)) return;
    seen.add(href);
    links.push({ title, href });
  };

  for (const match of content.matchAll(/- \[([^\]]+)]\(([^)]+)\)/g)) {
    add(match[1], match[2]);
  }

  for (const match of content.matchAll(/<li><a href="([^"]+)">([^<]+)<\/a><\/li>/g)) {
    add(match[2], match[1]);
  }

  return links;
}

function ensureIndex() {
  fs.mkdirSync(path.dirname(INDEX_PAGE), { recursive: true });
  if (!fs.existsSync(INDEX_PAGE)) {
    fs.writeFileSync(INDEX_PAGE, renderIndex([]), 'utf8');
  }
}

function tableRows(rows) {
  return rows.map(row => `| ${row.map(cell => String(cell).replace(/\|/g, '\\|')).join(' | ')} |`).join('\n');
}

function render(dateText, reading) {
  const passage = reading.lines.map(([fr]) => fr).join(' ');
  const sentenceRows = tableRows(reading.lines);
  const vocabRows = tableRows(reading.vocabulary);
  const grammarRows = tableRows(reading.grammar);
  const usefulRows = tableRows(reading.useful);

  return `---\ntitle: ${JSON.stringify(reading.title)}\ndate: ${dateText} 08:10:00\nupdated: ${dateText} 08:10:00\npermalink: lectures-francaises/${dateText}-${reading.slug}/\ncategories:\n  - French\n  - Daily Reading\ntags:\n  - French\n  - A1-A2\n  - reading\ndescription: ${JSON.stringify(`A1-A2 French daily reading about ${reading.topic}.`)}\ncover: /img/bg.JPG\ntop_img: /img/bg.JPG\n---\n\n## Niveau\n\n${reading.level}. Texte original court pour lecture quotidienne.\n\n## Texte\n\n${passage}\n\n## Traduction phrase par phrase\n\n| Français | 中文 |\n| --- | --- |\n${sentenceRows}\n\n## Vocabulaire\n\n| Mot / Expression | 中文 | Note |\n| --- | --- | --- |\n${vocabRows}\n\n## Grammaire\n\n| Point | Explication |\n| --- | --- |\n${grammarRows}\n\n## Phrases utiles\n\n| Phrase | 中文 |\n| --- | --- |\n${usefulRows}\n`;
}

function updateIndex(dateText, reading) {
  ensureIndex();
  const href = `/lectures-francaises/${dateText}-${reading.slug}/`;
  const content = fs.readFileSync(INDEX_PAGE, 'utf8');
  const links = extractIndexLinks(content);
  if (!links.some(link => link.href === href)) {
    links.unshift({ title: reading.title, href });
  }
  fs.writeFileSync(INDEX_PAGE, renderIndex(links), 'utf8');
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

  const nextContent = render(dateText, reading);
  if (fs.existsSync(output) && fs.readFileSync(output, 'utf8') === nextContent) {
    console.log(`French reading already exists: ${output}`);
  } else {
    fs.writeFileSync(output, nextContent, 'utf8');
    console.log(`Created French reading post: ${output}`);
  }
  updateIndex(dateText, reading);
  console.log(formatResult(syncFrenchReadingNotes({ files: [output] })));
}

if (require.main === module) {
  main();
}
