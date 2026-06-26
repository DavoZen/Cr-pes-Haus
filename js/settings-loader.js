// ============================================================
// SETTINGS LOADER
// Завантажує дані з settings/*.js файлів (GitHub)
// Завжди використовує актуальні дані з файлів
// ============================================================
(function () {
  'use strict';

  function readVar(name) {
    var v = window[name];
    if (v && typeof v === 'object') return v;
    return null;
  }

  function applyConfigToDOM(cfg) {
    if (!cfg || !cfg.site) return;
    var site = cfg.site;
    console.log('[settings] applyConfigToDOM →', site.name);
    var fontLink = document.querySelector('link[data-settings-font]');
    if (fontLink && site.fontsUrl) fontLink.href = site.fontsUrl;
    var heroBgs = document.querySelectorAll('.hero-bg');
    var path = window.location.pathname;
    var isAbout = path.indexOf('about.html') !== -1 || path.indexOf('about') !== -1;
    if (heroBgs.length > 0) {
      if (isAbout && site.aboutHeroImage) heroBgs[0].setAttribute('style', 'background-image: url(' + site.aboutHeroImage + ')');
      else if (site.heroImage) heroBgs[0].setAttribute('style', 'background-image: url(' + site.heroImage + ')');
    }
    var logos = document.querySelectorAll('.logo');
    logos.forEach(function (logo) {
      var name = site.name || 'Crêpes Haus';
      var lastSpace = name.lastIndexOf(' ');
      var lastWord = lastSpace !== -1 ? name.substring(lastSpace + 1) : name;
      var firstPart = lastSpace !== -1 ? name.substring(0, lastSpace) : '';
      logo.innerHTML = firstPart + ' <span style="color: var(--gold);">' + lastWord + '</span>';
    });
  }

  function syncContactFromConfig(cfg) {
    var contact = (cfg && cfg.contact) ? cfg.contact : {};
    ['de', 'en'].forEach(function (lang) {
      var i18n = (window.SITE_TEXT && window.SITE_TEXT[lang]) ? window.SITE_TEXT[lang] : {};
      if (!i18n || Object.keys(i18n).length === 0) return;
      if (contact.phone) i18n['contact_phone_value'] = contact.phone;
      if (contact.email) i18n['contact_email_value'] = contact.email;
      if (contact.address && contact.address.length > 0) {
        i18n['contact_address_value'] = contact.address.join('<br>');
      }
      if (!window.SITE_TEXT) window.SITE_TEXT = {};
      window.SITE_TEXT[lang] = i18n;
    });
    console.log('[settings] syncContactFromConfig → phone:', contact.phone, '| email:', contact.email);
  }

  function getSavedLang(cfg) {
    var saved = localStorage.getItem(cfg.storageKey);
    if (saved && cfg.langs.indexOf(saved) !== -1) return saved;
    return cfg.defaultLang || 'de';
  }

  function init() {
    console.groupCollapsed('[settings] INIT');

    var cfg = readVar('SETTINGS_CFG');
    if (!cfg || !cfg.site) {
      console.error('[settings] SETTINGS_CFG not loaded! settings/config.js missing?');
      console.groupEnd();
      return;
    }
    window.I18N_CONFIG = Object.assign({}, window.I18N_CONFIG, cfg);
    console.log('[settings] → config loaded →', Object.keys(cfg).length, 'keys');

    var deTexts = readVar('SITE_TEXT_DE');
    var enTexts = readVar('SITE_TEXT_EN');
    if (!deTexts || !deTexts.page_title) {
      console.error('[settings] SITE_TEXT_DE not loaded!');
    }
    if (!enTexts || !enTexts.page_title) {
      console.error('[settings] SITE_TEXT_EN not loaded!');
    }
    window.SITE_TEXT = {
      de: deTexts || {},
      en: enTexts || {}
    };
    console.log('[settings] → i18n loaded → de:', Object.keys(window.SITE_TEXT.de).length, '| en:', Object.keys(window.SITE_TEXT.en).length, 'keys');

    var menuData = readVar('MENU_DATA');
    if (!menuData || !menuData.categories) {
      console.error('[settings] MENU_DATA not loaded! settings/menu.js missing?');
      window.MENU_DATA = { categories: [] };
    } else {
      window.MENU_DATA = menuData;
    }
    console.log('[settings] → menu loaded → categories:', (window.MENU_DATA.categories || []).length);

    syncContactFromConfig(cfg);

    console.log('[settings] → applyConfigToDOM');
    applyConfigToDOM(cfg);

    console.log('[settings] → seedStorage');
    if (window.AppAPI && typeof window.AppAPI.seedStorage === 'function') {
      window.AppAPI.seedStorage();
    }

    var startLang = getSavedLang(cfg);
    console.log('[settings] → language:', startLang);

    console.log('[settings] → applyLang');
    if (window.I18N && typeof window.I18N.applyLang === 'function') {
      window.I18N.applyLang(startLang, true);
    }

    console.log('[settings] → renderMenu');
    if (typeof window.renderMenu === 'function') {
      window.renderMenu();
      var cards = document.querySelectorAll('.card');
      console.log('[settings] renderMenu → cards:', cards.length);
    }

    console.log('[settings] → renderAllergens');
    if (window.I18N && typeof window.I18N.renderAllergens === 'function') {
      window.I18N.renderAllergens(startLang);
    }

    console.log('[settings] → renderContact');
    if (window.I18N && typeof window.I18N.renderContact === 'function') {
      window.I18N.renderContact(startLang);
    }

    console.log('[settings] ✓ ready');
    console.groupEnd();
  }

  window.SettingsLoader = {
    init: init
  };
})();
