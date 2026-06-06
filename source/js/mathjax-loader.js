(function () {
  const scriptUrl = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';

  function hasMath() {
    return Boolean(document.querySelector('.kalax-inline-math, .kalax-display-math'));
  }

  function typesetMath() {
    if (!hasMath() || !window.MathJax || !window.MathJax.typesetPromise) return;
    prepareMathDelimiters();
    window.MathJax.typesetPromise();
  }

  function prepareMathDelimiters() {
    document.querySelectorAll('.kalax-inline-math').forEach(function (node) {
      if (node.dataset.mathPrepared === 'true') return;
      node.textContent = '\\(' + node.textContent.trim() + '\\)';
      node.dataset.mathPrepared = 'true';
    });

    document.querySelectorAll('.kalax-display-math').forEach(function (node) {
      if (node.dataset.mathPrepared === 'true') return;
      node.textContent = '\\[' + node.textContent.trim() + '\\]';
      node.dataset.mathPrepared = 'true';
    });
  }

  function loadMathJax() {
    if (!hasMath()) return;
    if (window.MathJax && window.MathJax.typesetPromise) {
      typesetMath();
      return;
    }

    prepareMathDelimiters();

    window.MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
        processEscapes: true
      },
      svg: {
        fontCache: 'global'
      },
      startup: {
        pageReady: function () {
          return window.MathJax.startup.defaultPageReady().then(typesetMath);
        }
      }
    };

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMathJax, { once: true });
  } else {
    loadMathJax();
  }

  document.addEventListener('pjax:complete', loadMathJax);
}());
