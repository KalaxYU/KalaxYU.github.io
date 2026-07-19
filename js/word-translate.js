(function () {
  const LOCAL_DICT = {
    chalk: '粉笔；白垩',
    evidence: '证据',
    forest: '森林',
    economy: '经济；运行方式',
    preserve: '保护；保存',
    scarcity: '稀缺',
    drought: '干旱',
    moisture: '水分；湿气',
    timber: '木材',
    sunlight: '阳光',
    sol: '太阳；阳光',
    livre: '书',
    matin: '早晨',
    soir: '晚上',
    ville: '城市',
    chemin: '路；道路',
    devoir: '作业；责任',
    apprendre: '学习',
    regarder: '看',
    penser: '想；思考',
    travailler: '工作；学习',
    doucement: '慢慢地；轻轻地',
    souvent: '经常',
    toujours: '总是',
    aujourd: '今天'
  };

  const API_URL = 'https://api.mymemory.translated.net/get';
  const CACHE_PREFIX = 'kalax-selection-zh:v2:';
  const MAX_SELECTION_LENGTH = 900;
  const LATIN_RE = /[A-Za-zÀ-ÖØ-öø-ÿ]/;
  const WORD_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’.-]*$/;
  const FRENCH_WORD_HINTS = new Set([
    'apprendre', 'aujourd', 'bonjour', 'cahier', 'chemin', 'cours',
    'devoir', 'doucement', 'eau', 'exemple', 'exemples', 'fenetre',
    'fleur', 'fleurs', 'fromage', 'fruit', 'fruits', 'grand', 'grande',
    'langue', 'lait', 'liste', 'livre', 'maison', 'marche', 'matin',
    'merci', 'mere', 'monnaie', 'mot', 'mots', 'nouveau', 'nouveaux',
    'pain', 'papier', 'penser', 'personne', 'personnes', 'petit',
    'petite', 'piece', 'pieces', 'poche', 'pomme', 'pommes', 'prix',
    'professeur', 'question', 'refrigerateur', 'regarder', 'soir',
    'souvent', 'stylo', 'table', 'tables', 'toujours', 'travailler',
    'vendeur', 'ville'
  ]);
  const memoryCache = new Map();
  let activeRequest = null;
  let hideTimer = null;
  let requestSeq = 0;

  const popover = document.createElement('div');
  popover.id = 'kalax-word-translate';
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-live', 'polite');
  popover.hidden = true;
  document.body.appendChild(popover);

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);
  }

  function decodeHtml(value) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
  }

  function normalizeSelection(text) {
    const normalized = String(text || '')
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^[\s"'“”‘’()[\]{}<>，。！？；：、,.!?;:]+|[\s"'“”‘’()[\]{}<>，。！？；：、,.!?;:]+$/g, '');

    if (!normalized || normalized.length > MAX_SELECTION_LENGTH) return null;
    if (!LATIN_RE.test(normalized)) return null;
    return normalized;
  }

  function isSingleWord(text) {
    return WORD_RE.test(text) && !/\s/.test(text);
  }

  function detectLanguage(text) {
    const lower = ` ${text.toLowerCase()} `;
    let score = 0;

    if (/[àâæçéèêëîïôœùûüÿ]/i.test(text)) score += 3;
    if (/\b(je|tu|il|elle|nous|vous|ils|elles|est|sont|etre|être|avoir|avec|dans|pour|mais|parce|quand|aujourd'hui)\b/i.test(text)) score += 2;
    if (/\b(le|la|les|un|une|des|du|de|d'|l'|au|aux|ce|cette|mon|ma|mes|son|sa|ses)\b/i.test(lower)) score += 1;
    if (/\b(ne|pas|plus|très|bien|petit|petite|grand|grande|bonjour|merci)\b/i.test(text)) score += 1;

    return score >= 2 ? 'fr' : 'en';
  }

  function stripMarks(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function safePathname() {
    const raw = window.location.pathname || '';
    try {
      return decodeURIComponent(raw).toLowerCase();
    } catch (error) {
      return raw.toLowerCase();
    }
  }

  function pageLanguageHint() {
    const path = safePathname();
    const isFrenchPath =
      /\/(?:french|french-reading|lectures-francaises)(?:\/|$)/.test(path) ||
      path.includes('/categories/french') ||
      path.includes('/tags/french') ||
      path.includes('/tags/a1-a2') ||
      path.includes('/categories/法语') ||
      path.includes('/tags/法语') ||
      path.includes('/notes/法语');

    if (isFrenchPath) return 'fr';

    const isEnglishPath =
      /\/(?:english|english-reading|readings)(?:\/|$)/.test(path) ||
      path.includes('/categories/english') ||
      path.includes('/tags/toefl');

    return isEnglishPath ? 'en' : '';
  }

  function detectLanguageForSelection(text) {
    const guessed = detectLanguage(text);
    if (guessed === 'fr') return 'fr';

    const hint = pageLanguageHint();
    if (hint) return hint;

    if (isSingleWord(text)) {
      const normalizedWord = stripMarks(text.toLowerCase()).replace(/[’']/g, '');
      if (FRENCH_WORD_HINTS.has(normalizedWord)) return 'fr';
    }

    return guessed;
  }

  function cacheKey(lang, text) {
    return `${lang}:${text.toLowerCase()}`;
  }

  function lookupLocal(lang, text) {
    if (!isSingleWord(text)) return '';
    const lower = text.toLowerCase().replace(/'s$/, '').replace(/[’']/g, '');
    if (LOCAL_DICT[lower]) return LOCAL_DICT[lower];

    const candidates = [
      lower.replace(/ies$/, 'y'),
      lower.replace(/ves$/, 'f'),
      lower.replace(/ches$/, 'ch'),
      lower.replace(/shes$/, 'sh'),
      lower.replace(/xes$/, 'x'),
      lower.replace(/ses$/, 's'),
      lower.replace(/s$/, ''),
      lower.replace(/ied$/, 'y'),
      lower.replace(/ed$/, ''),
      lower.replace(/ing$/, ''),
      lower.replace(/es$/, 'er'),
      lower.replace(/ons$/, 'er'),
      lower.replace(/ez$/, 'er'),
      lower.replace(/ent$/, 'er')
    ];

    return candidates.map(key => LOCAL_DICT[key]).find(Boolean) || '';
  }

  function getCached(lang, text) {
    const key = cacheKey(lang, text);
    if (memoryCache.has(key)) return memoryCache.get(key);

    try {
      const cached = localStorage.getItem(CACHE_PREFIX + key);
      if (!cached) return '';
      const parsed = JSON.parse(cached);
      if (!parsed || Date.now() - parsed.time > 1000 * 60 * 60 * 24 * 14) return '';
      memoryCache.set(key, parsed.text);
      return parsed.text;
    } catch (error) {
      return '';
    }
  }

  function setCached(lang, text, translated) {
    const key = cacheKey(lang, text);
    memoryCache.set(key, translated);
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ text: translated, time: Date.now() }));
    } catch (error) {
      // Some browsers disable localStorage in strict privacy modes.
    }
  }

  function languageLabel(lang) {
    return lang === 'fr' ? '法语' : '英语';
  }

  function externalLinks(text, lang, wordMode) {
    const encoded = encodeURIComponent(text);
    const google = `https://translate.google.com/?sl=${lang}&tl=zh-CN&text=${encoded}&op=translate`;
    const youdaoLang = lang === 'fr' ? 'fr' : 'en';
    const links = [
      `<a href="${google}" target="_blank" rel="noopener">Google</a>`,
      `<a href="https://www.youdao.com/result?word=${encoded}&lang=${youdaoLang}" target="_blank" rel="noopener">有道</a>`
    ];

    if (wordMode) {
      if (lang === 'fr') {
        links.push(`<a href="https://dictionary.cambridge.org/dictionary/french-english/${encoded}" target="_blank" rel="noopener">Cambridge</a>`);
      } else {
        links.push(`<a href="https://www.merriam-webster.com/dictionary/${encoded}" target="_blank" rel="noopener">Merriam</a>`);
        links.push(`<a href="https://dictionary.cambridge.org/dictionary/english/${encoded}" target="_blank" rel="noopener">Cambridge</a>`);
      }
    }

    return links.join('');
  }

  function render(info, body, state) {
    const safeText = escapeHtml(info.text);
    const safeBody = escapeHtml(body);
    const wordMode = isSingleWord(info.text);
    const links = externalLinks(info.text, info.lang, wordMode);

    popover.innerHTML = [
      '<div class="kalax-word-head">',
      `<span class="kalax-word-term">${wordMode ? safeText : '选中内容'}</span>`,
      '<button class="kalax-word-close" type="button" aria-label="关闭">&times;</button>',
      '</div>',
      wordMode ? '' : `<div class="kalax-word-source">${safeText}</div>`,
      `<div class="kalax-word-body ${state === 'loading' ? 'is-loading' : ''}">${safeBody}</div>`,
      `<div class="kalax-word-meta">自动翻译 · ${languageLabel(info.lang)} → 中文</div>`,
      '<div class="kalax-word-actions">',
      links,
      `<button type="button" data-copy="${safeBody}">复制译文</button>`,
      '</div>'
    ].join('');
  }

  function positionPopover(rect) {
    const gap = 10;
    popover.hidden = false;
    requestAnimationFrame(() => {
      const width = popover.offsetWidth;
      const height = popover.offsetHeight;
      const left = Math.min(
        window.innerWidth - width - 12,
        Math.max(12, rect.left + rect.width / 2 - width / 2)
      );
      let top = rect.bottom + gap;
      if (top + height > window.innerHeight - 12) {
        top = Math.max(12, rect.top - height - gap);
      }
      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
    });
  }

  function hidePopover(delay = 0) {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      popover.hidden = true;
    }, delay);
  }

  async function fetchTranslation(info) {
    const local = lookupLocal(info.lang, info.text);
    if (local) return local;

    const cached = getCached(info.lang, info.text);
    if (cached) return cached;

    if (activeRequest) activeRequest.abort();
    activeRequest = new AbortController();
    const timeout = setTimeout(() => activeRequest.abort(), 5500);

    try {
      const langpair = `${info.lang}|zh-CN`;
      const url = `${API_URL}?q=${encodeURIComponent(info.text)}&langpair=${encodeURIComponent(langpair)}`;
      const response = await fetch(url, { signal: activeRequest.signal });
      const data = await response.json();
      const translated = data && data.responseData && data.responseData.translatedText;
      if (!translated || translated.toLowerCase() === info.text.toLowerCase()) {
        throw new Error('empty translation');
      }
      const decoded = decodeHtml(translated);
      setCached(info.lang, info.text, decoded);
      return decoded;
    } finally {
      clearTimeout(timeout);
      activeRequest = null;
    }
  }

  function selectedRect(selection) {
    if (!selection.rangeCount) return null;
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect && (rect.width || rect.height)) return rect;
    const rects = range.getClientRects();
    return rects.length ? rects[0] : null;
  }

  async function handleSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      hidePopover(120);
      return;
    }

    const target = selection.anchorNode && selection.anchorNode.parentElement;
    if (target && target.closest('input, textarea, select, button, a, #kalax-word-translate')) return;

    const text = normalizeSelection(selection.toString());
    if (!text) {
      hidePopover(120);
      return;
    }

    const rect = selectedRect(selection);
    if (!rect) return;

    const info = { text, lang: detectLanguageForSelection(text) };
    const seq = ++requestSeq;
    render(info, '查询中...', 'loading');
    positionPopover(rect);

    try {
      const translated = await fetchTranslation(info);
      if (seq !== requestSeq) return;
      render(info, translated, 'success');
      positionPopover(rect);
    } catch (error) {
      if (seq !== requestSeq) return;
      render(info, '暂时没有查到译文，可以点 Google 或有道继续查看。', 'error');
      positionPopover(rect);
    }
  }

  popover.addEventListener('click', event => {
    const closeButton = event.target.closest('.kalax-word-close');
    if (closeButton) {
      hidePopover();
      return;
    }

    const copyButton = event.target.closest('[data-copy]');
    if (copyButton) {
      if (navigator.clipboard) navigator.clipboard.writeText(copyButton.dataset.copy);
      copyButton.textContent = '已复制';
    }
  });

  document.addEventListener('mouseup', () => setTimeout(handleSelection, 30));
  document.addEventListener('touchend', () => setTimeout(handleSelection, 260), { passive: true });
  document.addEventListener('keyup', event => {
    if (event.key === 'Shift' || event.key.startsWith('Arrow')) handleSelection();
    if (event.key === 'Escape') hidePopover();
  });
  document.addEventListener('scroll', () => hidePopover(80), { passive: true });
  window.addEventListener('resize', () => hidePopover());
})();
