// ============================================================
// APP — меню, зберігання правок користувача
// ============================================================
(function () {
  'use strict';

  const STORAGE_KEY = (window.I18N_CONFIG && window.I18N_CONFIG.menuStorageKey)
    ? window.I18N_CONFIG.menuStorageKey
    : 'cafeMenuOverride';

  function getMenu() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    if (window.MENU_DATA && Array.isArray(window.MENU_DATA.categories)) return window.MENU_DATA.categories;
    return [];
  }

  function saveMenu(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('menuUpdated'));
  }

  function seedStorage() {
    if (!localStorage.getItem(STORAGE_KEY) && window.MENU_DATA && Array.isArray(window.MENU_DATA.categories)) {
      saveMenu(window.MENU_DATA.categories);
    }
  }

  // ─── Menu ──────────────────────────────────────────────────
  function renderMenu() {
    const categories = getMenu();
    categories.forEach(function (cat) {
      const grid = document.getElementById('grid-' + cat.id);
      const title = document.getElementById('title-' + cat.id);
      if (!grid) return;

      if (title) title.textContent = cat.name;

      grid.innerHTML = cat.items.map(function (item) {
        return '<div class="card" data-cat="' + cat.id + '" data-id="' + item.id + '">' +
          '<div class="card-header">' +
            '<h3>' + escapeHtml(item.name) + '</h3>' +
            '<span class="num">№' + item.id + '</span>' +
          '</div>' +
          '<p class="desc">' + escapeHtml(item.desc) + '</p>' +
          '<span class="price">' + formatPrice(item.price) + '</span>' +
          '<div class="allergen">' +
            item.allergens.split(' ').map(function (a) { return '<span>' + escapeHtml(a) + '</span>'; }).join('') +
          '</div>' +
        '</div>';
      }).join('');
    });
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function formatPrice(p) {
    const val = parseFloat(p);
    if (isNaN(val)) return escapeHtml(p);
    return val.toFixed(2).replace('.', ',');
  }

  // ─── Public API ────────────────────────────────────────────
  window.AppAPI = {
    getMenu: getMenu,
    saveMenu: saveMenu,
    seedStorage: seedStorage,
    formatPrice: formatPrice,
    escapeHtml: escapeHtml,
    renderMenu: renderMenu
  };

  window.renderMenu = renderMenu;
})();
