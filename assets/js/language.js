function initializeZhuygLanguage(root, options = {}) {
  if (!root) return null;
  const data = root.querySelector('[data-language-dictionary]');
  const dictionary = data ? JSON.parse(data.textContent) : {};
  const switchEnabled = Boolean(root.querySelector('[data-language-toggle]'));
  const persist = switchEnabled && options.persist !== false;
  let language = switchEnabled ? options.initialLanguage : 'en';
  if (!language && persist) {
    try { language = localStorage.getItem('zhuyg-language'); } catch (_) { /* Storage may be unavailable. */ }
  }
  language = language === 'zh' ? 'zh' : 'en';

  function refresh() {
    root.dataset.language = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    root.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = dictionary[element.dataset.i18n];
      if (!entry) return;
      element.textContent = entry[language] || entry.en;
      element.lang = language === 'zh' ? 'zh-CN' : 'en';
    });
    root.querySelectorAll('[data-content-language]').forEach(element => {
      element.hidden = element.dataset.contentLanguage !== language;
    });
    root.querySelectorAll('[data-language-toggle]').forEach(button => {
      button.hidden = false;
      button.textContent = language === 'en' ? '中文' : 'EN';
      button.lang = language === 'en' ? 'zh-CN' : 'en';
      button.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
    });
    if (root.id === 'zg-site') {
      document.documentElement.lang = root.lang;
      const title = language === 'zh' ? root.dataset.titleZh : root.dataset.titleEn;
      if (title) document.title = title;
    }
    root.querySelectorAll('[data-filter-list]').forEach(container => {
      container.dispatchEvent(new Event('zhuyg:filter-language'));
    });
  }

  function setLanguage(next, remember = true) {
    language = switchEnabled && next === 'zh' ? 'zh' : 'en';
    refresh();
    if (remember && persist) {
      try { localStorage.setItem('zhuyg-language', language); } catch (_) { /* The toggle still works without storage. */ }
    }
    root.dispatchEvent(new CustomEvent('zhuyg:language-change', { bubbles: true, detail: { language, userInitiated: remember } }));
  }

  root.addEventListener('click', event => {
    const button = event.target.closest('[data-language-toggle]');
    if (button && root.contains(button)) setLanguage(language === 'en' ? 'zh' : 'en');
  });
  refresh();
  return { refresh, setLanguage, getLanguage: () => language };
}
initializeZhuygLanguage(document.getElementById('zg-site'));
