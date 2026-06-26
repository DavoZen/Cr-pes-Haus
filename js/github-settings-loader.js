// ============================================================
// GITHUB SETTINGS LOADER
// Завантажує всі налаштування з GitHub (raw.githubusercontent.com)
// ============================================================
(function () {
  'use strict';

  const GITHUB_RAW = 'https://raw.githubusercontent.com/DavoZen/Cr-pes-Haus/main/settings';

  async function fetchFile(filename) {
    const url = GITHUB_RAW + '/' + filename;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to load ' + filename + ': ' + response.status);
    }
    return await response.text();
  }

  function executeScript(content, filename) {
    try {
      const func = new Function(content);
      func();
      console.log('[github-loader] executed:', filename);
    } catch (e) {
      console.error('[github-loader] error executing', filename, ':', e);
    }
  }

  async function loadAllSettings() {
    const files = ['config.js', 'i18n-de.js', 'i18n-en.js', 'menu.js'];
    const contents = {};

    for (const file of files) {
      try {
        contents[file] = await fetchFile(file);
      } catch (e) {
        console.error('[github-loader]', e.message);
      }
    }

    if (contents['i18n-de.js']) executeScript(contents['i18n-de.js'], 'i18n-de.js');
    if (contents['i18n-en.js']) executeScript(contents['i18n-en.js'], 'i18n-en.js');
    if (contents['config.js']) executeScript(contents['config.js'], 'config.js');
    if (contents['menu.js']) executeScript(contents['menu.js'], 'menu.js');

    if (window.SETTINGS_CFG) {
      window.I18N_CONFIG = Object.assign({}, window.I18N_CONFIG, window.SETTINGS_CFG);
    }

    return contents;
  }

  window.GITHUB_LOADER = {
    loadAll: loadAllSettings,
    fetchFile: fetchFile
  };

  async function init() {
    console.log('[github-loader] loading settings from GitHub...');
    await loadAllSettings();
    if (typeof window.SettingsLoader !== 'undefined' && window.SettingsLoader.init) {
      window.SettingsLoader.init();
    }
    console.log('[github-loader] settings loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('focus', function () {
    if (document.visibilityState === 'visible') {
      init();
    }
  });
})();
