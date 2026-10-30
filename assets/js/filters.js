function initializeZhuygFilters(scope, saved = {}) {
  function setup(container) {
    if (container.dataset.filtersReady) return;
    container.dataset.filtersReady = 'true';
    const items = Array.from(container.querySelectorAll('[data-filter-item]'));
    const buttons = Array.from(container.querySelectorAll('button[data-filter-key]'));
    const selected = {};
    buttons.forEach(button => { selected[button.dataset.filterKey] = 'all'; });
    const previous = saved[container.dataset.filterList] || {};
    Object.entries(previous).forEach(([key, value]) => {
      if (buttons.some(button => button.dataset.filterKey === key && button.dataset.filterValue === value)) selected[key] = value;
    });
    const matches = (item, selections) => Object.entries(selections).every(([key, value]) => value === 'all' || item.dataset[key] === value);
    function render(announce) {
      let count = 0;
      items.forEach(item => {
        item.hidden = !matches(item, selected);
        if (!item.hidden) count += 1;
      });
      container.querySelectorAll('[data-filter-section]').forEach(section => {
        section.hidden = !Array.from(section.querySelectorAll('[data-filter-item]')).some(item => !item.hidden);
      });
      buttons.forEach(button => {
        const { filterKey: key, filterValue: value } = button.dataset;
        const active = selected[key] === value;
        button.setAttribute('aria-pressed', String(active));
        button.disabled = !active && !items.some(item => matches(item, { ...selected, [key]: value }));
      });
      const empty = container.querySelector('[data-filter-empty]');
      if (empty) empty.hidden = count !== 0;
      const status = container.querySelector('[data-filter-status]');
      if (announce && status) {
        const languageRoot = container.closest('[data-language]');
        status.textContent = languageRoot && languageRoot.dataset.language === 'zh' ? `显示 ${count} 项内容` : `${count} entries shown`;
      }
    }
    container.querySelectorAll('[data-filter-controls]').forEach(group => { group.hidden = false; });
    container.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter-key]');
      if (!button || !container.contains(button) || button.disabled) return;
      selected[button.dataset.filterKey] = button.dataset.filterValue;
      render(true);
      container.dispatchEvent(new CustomEvent('zhuyg:filter-change', { bubbles: true, detail: { list: container.dataset.filterList, selected: { ...selected } } }));
    });
    container.addEventListener('zhuyg:filter-language', () => render(true));
    render(false);
  }
  scope.querySelectorAll('[data-filter-list]').forEach(setup);
}
initializeZhuygFilters(document);
