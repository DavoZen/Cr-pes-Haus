// ============================================================
// I18N ENGINE
// ============================================================
(function () {
  'use strict';

  let currentLang = null;

  function init() {
    const cfg = window.I18N_CONFIG;
    if (!cfg || !window.SITE_TEXT) return;

    const saved = localStorage.getItem(cfg.storageKey);
    const startLang = (saved && cfg.langs.indexOf(saved) !== -1)
      ? saved
      : cfg.defaultLang;

    applyLang(startLang, true);
  }

  function applyLang(lang, isInit) {
    if (!window.SITE_TEXT || !window.SITE_TEXT[lang]) {
      console.warn('[i18n] language not found:', lang, '— fallback to DE');
      lang = 'de';
    }

    currentLang = lang;
    const cfg = window.I18N_CONFIG;
    if (!isInit && cfg) {
      localStorage.setItem(cfg.storageKey, lang);
    }

    const texts = window.SITE_TEXT[lang] || window.SITE_TEXT.de || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const rawValue = key.split('.').reduce(function (obj, k) {
        return obj && obj[k] !== undefined ? obj[k] : undefined;
      }, texts);

      if (rawValue === undefined) {
        console.warn('[i18n] key not found:', key);
        return;
      }

      const value = typeof rawValue === 'string' ? rawValue : String(rawValue);
      const targetAttr = el.getAttribute('data-i18n-attr');

      if (targetAttr) {
        el.setAttribute(targetAttr, value);
        return;
      }

      const tag = el.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        el.placeholder = value;
      } else if (tag === 'img') {
        el.alt = value;
      } else if (/<(span|a|strong|em|b|i|p|h[1-6]|div|li|label|button)/i.test(value)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === currentLang);
    });

    document.documentElement.lang = currentLang === 'en' ? 'en' : 'de';
  }

  function renderDynamicBlocks(lang) {
    renderAllergens(lang);
    renderContact(lang);
  }

  function getText(key) {
    const texts = (window.SITE_TEXT && window.SITE_TEXT[currentLang])
      ? window.SITE_TEXT[currentLang]
      : (window.SITE_TEXT && window.SITE_TEXT.de ? window.SITE_TEXT.de : {});
    if (texts[key] !== undefined) return texts[key];
    const de = (window.SITE_TEXT && window.SITE_TEXT.de) || {};
    return de[key] !== undefined ? de[key] : key;
  }

  function t(key) {
    return getText(key);
  }

  // ─── Allergens ─────────────────────────────────────────────
  function renderAllergens(lang) {
    var texts = (window.SITE_TEXT && window.SITE_TEXT[lang]) || window.SITE_TEXT.de || {};
    var menuData = window.MENU_DATA || {};
    var groups = (menuData.allergens && menuData.allergens.groups)
      ? menuData.allergens.groups
      : [];
    var container = document.getElementById('allergeneContent');
    if (!container) return;

    function translateItem(item, isHeader) {
      var dotIdx = item.indexOf('.');
      if (dotIdx === -1) return escapeHtml(item);
      var prefix = item.substring(0, dotIdx + 1);
      var rest   = item.substring(dotIdx + 1);
      var key = (isHeader ? 'allergen_' : 'add_') + prefix.trim();
      var translated = texts[key];
      if (translated !== undefined) {
        return '<strong>' + escapeHtml(translated) + '.</strong>' + escapeHtml(rest);
      }
      return '<strong>' + escapeHtml(prefix.trim()) + '.</strong>' + escapeHtml(rest);
    }

    container.innerHTML = groups.map(function (group) {
      var groupName = texts[group.name] || group.name;
      return '<div class="info-box">' +
        '<h3>' + escapeHtml(groupName) + '</h3>' +
        '<p>' + group.list.map(function (item) {
          return translateItem(item, true);
        }).join('<br>') + '</p>' +
      '</div>';
    }).join('');
  }

  // ─── Contact ───────────────────────────────────────────────
  function renderContact(lang) {
    var texts = (window.SITE_TEXT && window.SITE_TEXT[lang]) || window.SITE_TEXT.de || {};
    var menuData = window.MENU_DATA || {};
    var menuContact = (menuData.contact) || {};
    var container = document.getElementById('contactContent');
    if (!container) return;

    var cfg = window.I18N_CONFIG || {};
    var siteContact = cfg.contact || {};

    var c = {};
    c.address    = menuContact.address || siteContact.address || ['Eisenbacher Tor', '36341 Lauterbach (Hessen)', 'Deutschland'];
    c.phone      = (texts.contact_phone_value || menuContact.phone || siteContact.phone || '+49 (0) 6641 / 123456');
    c.email      = (texts.contact_email_value || menuContact.email || siteContact.email || 'info@crepes-haus.de');
    c.hoursLabel = texts.contact_hours_label || '';
    c.hoursWd    = texts.contact_hours_weekdays || '';
    c.hoursWdT   = texts.contact_hours_weekdays_time || '';
    c.hoursWe    = texts.contact_hours_weekends || '';
    c.hoursWeT   = texts.contact_hours_weekends_time || '';
    c.phoneLabel = texts.contact_phone_label || '';
    c.emailLabel = texts.contact_email_label || '';
    c.addrLabel  = texts.contact_address_label || '';

    container.innerHTML =
      '<div class="info-box">' +
        '<h3>' + escapeHtml(c.addrLabel) + '</h3>' +
        '<p style="font-size: 1.1rem; line-height: 1.7;">' + c.address.map(function (line) { return escapeHtml(line); }).join('<br>') + '</p>' +
      '</div>' +
      '<div class="info-box">' +
        '<h3>' + escapeHtml(c.hoursLabel) + '</h3>' +
        '<p>' +
          '<strong>' + escapeHtml(c.hoursWd) + ':</strong> ' + escapeHtml(c.hoursWdT) + '<br><br>' +
          '<strong>' + escapeHtml(c.hoursWe) + ':</strong> ' + escapeHtml(c.hoursWeT) +
        '</p>' +
      '</div>' +
      '<div class="info-box">' +
        '<h3>' + escapeHtml(texts.contact_title || 'Kontakt') + '</h3>' +
        '<p style="font-size: 1.1rem; line-height: 1.7;">' +
          '<strong style="font-size: 1.15rem;">' + escapeHtml(c.phoneLabel) + ':</strong><br>' +
          escapeHtml(c.phone) + '<br><br>' +
          '<strong style="font-size: 1.15rem;">' + escapeHtml(c.emailLabel) + ':</strong><br>' +
          escapeHtml(c.email) +
        '</p>' +
      '</div>';
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ─── Public API ────────────────────────────────────────────
  window.I18N = {
    init: init,
    applyLang: applyLang,
    getLang: function () { return currentLang; },
    setLang: function (lang) {
      const cfg = window.I18N_CONFIG;
      if (!cfg || cfg.langs.indexOf(lang) === -1) return;
      if (currentLang === lang) return;
      applyLang(lang, false);
      renderDynamicBlocks(lang);
      location.reload();
    },
    t: t,
    getText: getText,
    config: window.I18N_CONFIG || {},
    renderAllergens: renderAllergens,
    renderContact: renderContact,
    renderDynamicBlocks: renderDynamicBlocks
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
