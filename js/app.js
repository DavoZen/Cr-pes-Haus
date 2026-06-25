// ============================================================
// APP.JS — меню, алергени, контакти, CTA, статистика
// i18n замість locale із localStorage — дивись js/i18n.js
// ============================================================
(function () {
  const STORAGE_KEY = 'cafeMenuOverride';

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

  // ─── Меню ──────────────────────────────────────────────────
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

  // ─── Алергени ──────────────────────────────────────────────
  function renderAllergens() {
    const t = window.I18N && window.I18N.t ? window.I18N : { t: function (k) { return k; } };
    const menuData = window.MENU_DATA || {};
    const groups = (menuData.allergens && menuData.allergens.groups) ? menuData.allergens.groups : [];
    const container = document.getElementById('allergeneContent');
    if (!container) return;

    function translateItem(item, isHeader) {
      var dotIdx = item.indexOf('.');
      if (dotIdx === -1) return escapeHtml(item);
      var prefix = item.substring(0, dotIdx + 1);
      var rest   = item.substring(dotIdx + 1);
      var key = (isHeader ? 'allergen_' : 'add_') + prefix.trim();
      var translated = t.t(key);
      if (translated && translated !== key) {
        return '<strong>' + escapeHtml(translated) + '.</strong>' + escapeHtml(rest);
      }
      return '<strong>' + escapeHtml(prefix.trim()) + '.</strong>' + escapeHtml(rest);
    }

    container.innerHTML = groups.map(function (group) {
      var groupName = t.t(group.name) || group.name;
      return '<div class="info-box">' +
        '<h3>' + escapeHtml(groupName) + '</h3>' +
        '<p>' + group.list.map(function (item) { return translateItem(item, true); }).join('<br>') + '</p>' +
      '</div>';
    }).join('');
  }

  // ─── Контакти ──────────────────────────────────────────────
  function renderContact() {
    const t = window.I18N && window.I18N.t ? window.I18N : { t: function (k) { return k; } };
    const menuContact = (window.MENU_DATA && window.MENU_DATA.contact) || {};
    const container = document.getElementById('contactContent');
    if (!container) return;

    container.innerHTML =
      '<div class="info-box">' +
        '<h3>' + escapeHtml(t.t('contact_address_label')) + '</h3>' +
        '<p>' + (menuContact.address || ['Eisenbacher Tor', '36341 Lauterbach (Hessen)', 'Deutschland']).map(escapeHtml).join('<br>') + '</p>' +
      '</div>' +
      '<div class="info-box">' +
        '<h3>' + escapeHtml(t.t('contact_hours_label')) + '</h3>' +
        '<p>' +
          '<strong>' + escapeHtml(t.t('contact_hours_weekdays')) + ':</strong> ' + escapeHtml(t.t('contact_hours_weekdays_time')) + '<br><br>' +
          '<strong>' + escapeHtml(t.t('contact_hours_weekends')) + ':</strong> ' + escapeHtml(t.t('contact_hours_weekends_time')) +
        '</p>' +
      '</div>' +
      '<div class="info-box">' +
        '<h3>Kontakt</h3>' +
        '<p>' +
          '<strong>' + escapeHtml(t.t('contact_phone_label')) + ':</strong><br>' + escapeHtml(menuContact.phone || '+49 (0) 6641 / 123456') + '<br><br>' +
          '<strong>' + escapeHtml(t.t('contact_email_label')) + ':</strong><br>' + escapeHtml(menuContact.email || 'info@crepes-haus.de') +
        '</p>' +
      '</div>';
  }

  // ─── Вспомогательные ───────────────────────────────────────
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function formatPrice(p) {
    const val = parseFloat(p);
    if (isNaN(val)) return escapeHtml(p);
    return val.toFixed(2).replace('.', ',');
  }

  // ─── Ініціалізація ─────────────────────────────────────────
  function init() {
    seedStorage();
    renderMenu();
    renderAllergens();
    renderContact();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AppAPI = {
    getMenu: getMenu,
    saveMenu: saveMenu,
    seedStorage: seedStorage,
    formatPrice: formatPrice,
    escapeHtml: escapeHtml
  };
})();
