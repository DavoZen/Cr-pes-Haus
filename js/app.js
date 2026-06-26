// ============================================================
// APP — меню, без локального кешу, завжди з GitHub
// Динамічно створює секції для всіх категорій
// ============================================================
(function () {
  'use strict';

  function getMenu() {
    if (window.MENU_DATA && Array.isArray(window.MENU_DATA.categories)) {
      return window.MENU_DATA.categories;
    }
    return [];
  }

  function saveMenu(data) {
    console.log('[app] saveMenu is disabled - data comes from GitHub');
  }

  function seedStorage() {
    console.log('[app] seedStorage is disabled - using GitHub data only');
  }

  function createCategorySection(cat) {
    const main = document.getElementById('menu');
    if (!main) return;

    let section = document.getElementById('section-' + cat.id);
    if (!section) {
      section = document.createElement('div');
      section.className = 'menu-category';
      section.id = 'section-' + cat.id;
      section.innerHTML = '<h3 class="menu-category-title" id="title-' + cat.id + '"></h3>' +
        '<div class="menu-grid" id="grid-' + cat.id + '"></div>';
      main.appendChild(section);
    }

    const grid = document.getElementById('grid-' + cat.id);
    const title = document.getElementById('title-' + cat.id);

    if (title) title.textContent = cat.name;

    if (grid) {
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
    }
  }

  function removeOldSections(categories) {
    const main = document.getElementById('menu');
    if (!main) return;

    const validIds = categories.map(function (c) { return 'section-' + c.id; });
    const sections = main.querySelectorAll('.menu-category');

    sections.forEach(function (section) {
      if (validIds.indexOf(section.id) === -1) {
        section.remove();
      }
    });
  }

  function renderMenu() {
    const categories = getMenu();
    categories.forEach(function (cat) {
      createCategorySection(cat);
    });
    removeOldSections(categories);
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
