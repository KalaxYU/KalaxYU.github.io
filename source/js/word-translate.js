(function () {
  const LOCAL_DICT = {
    acid: '酸；酸性的',
    assert: '断言；明确主张',
    broad: '广泛的；概括性的',
    bubbling: '冒泡；起泡',
    carbonic: '碳酸的',
    carbonate: '碳酸盐',
    carpenter: '木匠',
    chalk: '粉笔；白垩',
    chapter: '章节；历史阶段',
    compound: '化合物；复合物',
    conception: '观念；构想',
    direct: '直接的',
    dissolve: '溶解',
    dissolved: '溶解的',
    enunciate: '阐明；清楚表达',
    essentially: '本质上；基本上',
    evidence: '证据',
    experiment: '实验',
    feature: '特征；特点',
    fragment: '片段；残片',
    globe: '地球；球体',
    humanity: '人类；人文学科',
    ignorant: '不了解的；无知的',
    indirect: '间接的',
    learned: '博学的',
    lime: '石灰',
    mass: '大量；块；质量',
    overwhelming: '压倒性的；巨大的',
    passage: '段落；通道',
    procedure: '过程；方法',
    profound: '深刻的',
    propose: '打算；提议',
    quicklime: '生石灰',
    relation: '关系；联系',
    significance: '意义；重要性',
    testify: '证明；作证',
    ultimate: '最终的；根本的',
    universe: '宇宙；万物',
    vanish: '消失',
    vinegar: '醋',
    weigh: '权衡；称重'
  };

  const API_URL = 'https://api.mymemory.translated.net/get';
  const CACHE_PREFIX = 'kalax-word-zh:';
  const memoryCache = new Map();
  let activeRequest = null;
  let hideTimer = null;

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

  function normalizeSelection(text) {
    const normalized = text
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '');

    if (!normalized || normalized.length > 72) return '';
    if (!/[A-Za-z]/.test(normalized)) return '';
    if (!/^[A-Za-z][A-Za-z'-]*(?:\s+[A-Za-z][A-Za-z'-]*){0,3}$/.test(normalized)) return '';
    return normalized;
  }

  function lookupLocal(term) {
    const lower = term.toLowerCase().replace(/'s$/, '');
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
      lower.replace(/ing$/, '')
    ];

    return candidates.map(key => LOCAL_DICT[key]).find(Boolean) || '';
  }

  function getCached(term) {
    const key = term.toLowerCase();
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

  function setCached(term, text) {
    const key = term.toLowerCase();
    memoryCache.set(key, text);
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ text, time: Date.now() }));
    } catch (error) {
      // Some browsers disable localStorage in strict privacy modes.
    }
  }

  function render(term, body, state) {
    const safeTerm = escapeHtml(term);
    const safeBody = escapeHtml(body);
    const searchUrl = `https://www.youdao.com/result?word=${encodeURIComponent(term)}&lang=en`;
    popover.innerHTML = [
      '<div class="kalax-word-head">',
      `<span class="kalax-word-term">${safeTerm}</span>`,
      '<button class="kalax-word-close" type="button" aria-label="关闭">×</button>',
      '</div>',
      `<div class="kalax-word-body ${state === 'loading' ? 'is-loading' : ''}">${safeBody}</div>`,
      '<div class="kalax-word-actions">',
      `<a href="${searchUrl}" target="_blank" rel="noopener">有道</a>`,
      `<button type="button" data-copy="${safeBody}">复制</button>`,
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

  async function fetchTranslation(term) {
    const local = lookupLocal(term);
    if (local) return local;

    const cached = getCached(term);
    if (cached) return cached;

    if (activeRequest) activeRequest.abort();
    activeRequest = new AbortController();
    const timeout = setTimeout(() => activeRequest.abort(), 4500);

    try {
      const url = `${API_URL}?q=${encodeURIComponent(term)}&langpair=en%7Czh-CN`;
      const response = await fetch(url, { signal: activeRequest.signal });
      const data = await response.json();
      const translated = data && data.responseData && data.responseData.translatedText;
      if (!translated || translated.toLowerCase() === term.toLowerCase()) {
        throw new Error('empty translation');
      }
      setCached(term, translated);
      return translated;
    } finally {
      clearTimeout(timeout);
      activeRequest = null;
    }
  }

  async function handleSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      hidePopover(120);
      return;
    }

    const target = selection.anchorNode && selection.anchorNode.parentElement;
    if (target && target.closest('input, textarea, select, button, a, #kalax-word-translate')) return;

    const term = normalizeSelection(selection.toString());
    if (!term) {
      hidePopover(120);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (!rect || (rect.width === 0 && rect.height === 0)) return;

    render(term, '查询中...', 'loading');
    positionPopover(rect);

    try {
      const translated = await fetchTranslation(term);
      render(term, translated, 'success');
      positionPopover(rect);
    } catch (error) {
      render(term, '暂时没有查到。可以点有道继续查词。', 'error');
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
