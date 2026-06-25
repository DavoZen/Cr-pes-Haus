// ============================================================
// SETTINGS LOADER
// Спочатку читає глобальні змінні з <script src="settings/*.js">
// Якщо їх немає — вбудований fallback
// Працює через file:// протокол
// ============================================================
(function () {
  'use strict';

  function readVar(name, fallback) {
    var v = window[name];
    if (v && typeof v === 'object' && !Array.isArray(v)) return v;
    return fallback || {};
  }

  var FALLBACK_CFG = {
    defaultLang: 'de',
    langs: ['de', 'en'],
    langNames: { de: 'Deutsch', en: 'English' },
    storageKey: 'siteLang',
    menuStorageKey: 'cafeMenuOverride',
    site: {
      name: 'Crêpes Haus',
      tagline: 'Frische Waffeln · Knusprige Crêpes · Hausgemachtes Eis',
      heroImage: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1920',
      aboutHeroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
      fontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    },
    contact: {
      address: ['Eisenbacher Tor', '36341 Lauterbach (Hessen)', 'Deutschland'],
      phone: '+47 (0) 6641 / 123459',
      email: 'info@crepes-haus.de'
    }
  };

  var FALLBACK_DE = {
    page_title: 'Crêpes Haus',
    nav_waffeln: 'Waffeln', nav_sweet: 'Süße Crêpes', nav_savory: 'Herzhaft',
    nav_allergens: 'Allergene', nav_contact: 'Kontakt', nav_menu: 'Menü',
    nav_about: 'Über uns', nav_close: 'Schließen',
    hero_badge: 'Frisch gemacht mit Liebe',
    hero_title: 'Crêpes <span class="gold">Haus</span>',
    hero_sub: 'Frische Waffeln · Knusprige Crêpes · Hausgemachtes Eis —<br>direkt aus Lauterbach, Hessen',
    hero_cta1: 'Karte ansehen', hero_cta2: 'Besuchen Sie uns',
    menu_title: 'Unsere Speisekarte',
    menu_sub: 'Vollendeter Genuss — jeden Tag frisch zubereitet',
    menu_cat_waffeln: 'Waffel Genuss', menu_cat_sweet: 'Süße Crêpes', menu_cat_savory: 'Herzhaft',
    menu_price_from: 'ab',
    allergens_title: 'Allergen- & Zusatzstoff-Liste',
    allergens_sub: 'Transparente Information — für Ihr Wohlbefinden',
    allergens_group_allergens: 'Allergene', allergens_group_additives: 'Zusatzstoffe',
    contact_title: 'Standort & Öffnungszeiten',
    contact_sub: 'Wir freuen uns auf Ihren Besuch — direkt am Eisenbacher Tor',
    contact_btn: 'Jetzt anrufen & reservieren',
    contact_phone_label: 'Telefon',
    contact_email_label: 'E-Mail',
    contact_address_label: 'Adresse',
    contact_hours_label: 'Öffnungszeiten',
    contact_hours_weekdays: 'Montag – Freitag',
    contact_hours_weekdays_time: '10:00 – 20:00',
    contact_hours_weekends: 'Samstag – Sonntag',
    contact_hours_weekends_time: '15:00 – 19:00',
    footer_slogan: 'Frische Waffels & Crêpes aus Lauterbach', footer_since: '© 2025',
    about_badge: 'Unsere Geschichte',
    about_hero_title: 'Leidenschaft für <span class="gold">Crêpes</span>',
    about_hero_sub: 'Seit Jahren zaubern wir die besten Crêpes und Waffeln in Lauterbach — mit Liebe und besten Zutaten.',
    about_who_title: 'Wer wir sind', about_who_sub: 'Mehr als nur ein Imbiss — ein Ort des Geschmacks',
    about_philo_title: 'Unsere Philosophie',
    about_philo_p1: 'Bei <strong>Crêpes Haus</strong> dreht sich alles um frische, handgemachte Crêpes und knusprige Waffeln.',
    about_philo_p2: 'Ob süß oder herzhaft — bei uns findet jeder seinen Favoriten.',
    about_philo_p3: 'Wir legen großen Wert auf Qualität, Geschmack und eine freundliche Atmosphäre.',
    about_location_title: 'Standort', about_location_sub: 'Besuchen Sie uns vor Ort',
    about_location_name: 'Hauptstandort', about_hours_title: 'Öffnungszeiten',
    about_hours_weekdays_label: 'Montag – Freitag', about_hours_weekdays_time: '10:00 – 20:00',
    about_hours_weekends_label: 'Samstag – Sonntag', about_hours_weekends_time: '15:00 – 19:00',
    about_contact_title: 'Kontakt', about_phone_label: 'Telefon', about_email_label: 'E-Mail',
    about_feedback_title: 'Feedback',
    about_feedback_sub: 'Haben Sie Fragen, Anregungen oder Wünsche? Wir freuen uns auf Ihre Nachricht!',
    about_feedback_btn: 'Kontakt aufnehmen', about_back_btn: '→ Zur Karte',
    allergen_1: 'GLUTEN', allergen_2: 'EIER', allergen_3: 'MILCH/LAKTOSE',
    allergen_4: 'NÜSSE (Hasel, Pistazie)', allergen_5: 'SOJA', allergen_6: 'SELLERIE',
    allergen_7: 'SENF', allergen_8: 'SESAM', allergen_9: 'SULFITE',
    add_A: 'GLUTENHALTIG', add_B: 'ENTHÄLT KIRSCHEN', add_C: 'ENTHÄLT EIER',
    add_D: 'ENTHÄLT FISCH', add_E: 'ENTHÄLT ERDNÜSSE', add_F: 'ENTHÄLT SOJA',
    add_G: 'ENTHÄLT MILCH', add_I: 'ENTHÄLT SELLERIE', add_J: 'ENTHÄLT SENF',
    add_K: 'ENTHÄLT SESAM', add_L: 'ENTHÄLT SULFITE', add_M: 'ENTHÄLT LUPINEN', add_N: 'ENTHÄLT WEICHTER',
    lang_de: 'DE', lang_en: 'EN',
    desc_favorite_waffel: 'Nutella, Vanillesauce, Erdbeeren, Bananen, Kirschen, Blaubeeren',
    desc_cherry_chocco: 'Nutella, saftige Kirschen', desc_blueberry_love: 'Nutella, Blaubeeren',
    desc_strawberry_dream: 'Nutella, Erdbeeren', desc_berry_vanilla: 'Vanillesauce, Himbeeren, Bueno Creme',
    desc_cherry_vanilla: 'Vanillesauce, fruchtige Kirschen', desc_banana_chocco: 'Nutella, Bananen',
    desc_blue_vanilla: 'Vanillesauce, Blaubeeren',
    desc_zucker_zimt: 'Mit Eis (Vanille / Schokolade / Erdbeere) +1,00 €',
    desc_sweet_favorite: 'Bueno Creme, Keks-Crunch, Erdbeeren',
    desc_chocco_dream: 'Kinder Schokolade, Blaubeeren', desc_marmelade: 'Aprikose / Erdbeere',
    desc_berry_bliss: 'Nutella, Keks-Crunch, Blaubeeren', desc_banana_heaven: 'Nutella, Keks-Crunch, Banane',
    desc_strawberry_love: 'Nutella, Keks-Crunch, Erdbeeren',
    desc_white_delight: 'Bueno Creme, Keks-Crunch, saure Kirschen',
    desc_pistachio_cream: 'Pistaziencreme, Himbeeren, Keks-Crunch',
    desc_kinder_magic: 'Nutella, Kinder Bueno, Keks-Crunch',
    desc_coco_white: 'Bueno Creme, Himbeeren, Kokosraspeln', desc_sweet_mix: "Nutella, M&M's",
    desc_cherry_kiss: 'Nutella, Keks-Crunch, Kirschen', desc_eis: 'Vanille · Schokolade · Erdbeere',
    desc_ham_cheese: 'Hähnchen/Puten-Schinken, Gouda, Tomate, saure Sahne',
    desc_cheese_crepe: 'Gouda, Mozzarella, Cheddar, Edammer, saure Sahne',
    desc_salami: 'Rind-Salami, Käse, saure Sahne'
  };

  var FALLBACK_EN = {
    page_title: 'Crêpes Haus',
    nav_waffeln: 'Waffles', nav_sweet: 'Sweet Crêpes', nav_savory: 'Savory',
    nav_allergens: 'Allergens', nav_contact: 'Contact', nav_menu: 'Menu',
    nav_about: 'About', nav_close: 'Close',
    hero_badge: 'Made fresh with love',
    hero_title: 'Crêpes <span class="gold">Haus</span>',
    hero_sub: 'Fresh waffles · Crispy crêpes · Homemade ice cream —<br>straight from Lauterbach, Germany',
    hero_cta1: 'View menu', hero_cta2: 'Visit us',
    menu_title: 'Our Menu', menu_sub: 'Pure pleasure — freshly prepared every day',
    menu_cat_waffeln: 'Waffle Pleasure', menu_cat_sweet: 'Sweet Crêpes', menu_cat_savory: 'Savory',
    menu_price_from: 'from',
    allergens_title: 'Allergen & Additive List',
    allergens_sub: 'Transparent information — for your wellbeing',
    allergens_group_allergens: 'Allergens', allergens_group_additives: 'Additives',
    contact_title: 'Location & Opening Hours',
    contact_sub: 'We look forward to your visit — at Eisenbacher Tor',
    contact_btn: 'Call & reserve now',
    contact_phone_label: 'Phone',
    contact_email_label: 'Email',
    contact_address_label: 'Address',
    contact_hours_label: 'Opening Hours',
    contact_hours_weekdays: 'Monday – Friday',
    contact_hours_weekdays_time: '10:00 – 20:00',
    contact_hours_weekends: 'Saturday – Sunday',
    contact_hours_weekends_time: '15:00 – 19:00',
    footer_slogan: 'Fresh waffels & crêpes from Lauterbach', footer_since: '© 2025',
    about_badge: 'Our Story',
    about_hero_title: 'Passion for <span class="gold">crêpes</span>',
    about_hero_sub: 'The best crêpes and waffles in Lauterbach for years — made with love and the finest ingredients.',
    about_who_title: 'Who we are', about_who_sub: 'More than a snack bar — a place of flavour',
    about_philo_title: 'Our Philosophy',
    about_philo_p1: 'At <strong>Crêpes Haus</strong>, everything revolves around fresh crêpes and crispy waffles.',
    about_philo_p2: 'Sweet or savoury — everyone finds their favourite. Our menu ranges from classic combinations to creative highlights.',
    about_philo_p3: 'We place great value on quality, taste, and a friendly atmosphere. Visit us at <strong>Eisenbacher Tor in Lauterbach</strong>!',
    about_location_title: 'Location', about_location_sub: 'Visit us on site',
    about_location_name: 'Main location', about_hours_title: 'Opening hours',
    about_hours_weekdays_label: 'Monday – Friday', about_hours_weekdays_time: '10:00 – 20:00',
    about_hours_weekends_label: 'Saturday – Sunday', about_hours_weekends_time: '15:00 – 19:00',
    about_contact_title: 'Contact', about_phone_label: 'Phone', about_email_label: 'Email',
    about_feedback_title: 'Feedback',
    about_feedback_sub: 'Questions, suggestions, or wishes? We look forward to your message!',
    about_feedback_btn: 'Get in touch', about_back_btn: '→ To menu',
    allergen_1: 'GLUTEN', allergen_2: 'EGGS', allergen_3: 'MILK/LACTOSE',
    allergen_4: 'NUTS (Hazelnut, Pistachio)', allergen_5: 'SOYA', allergen_6: 'CELERY',
    allergen_7: 'MUSTARD', allergen_8: 'SESAME', allergen_9: 'SULPHITES',
    add_A: 'CONTAINS GLUTEN', add_B: 'CONTAINS CHERRIES', add_C: 'CONTAINS EGGS',
    add_D: 'CONTAINS FISH', add_E: 'CONTAINS PEANUTS', add_F: 'CONTAINS SOYA',
    add_G: 'CONTAINS MILK', add_I: 'CONTAINS CELERY', add_J: 'CONTAINS MUSTARD',
    add_K: 'CONTAINS SESAME', add_L: 'CONTAINS SULPHITES', add_M: 'CONTAINS LUPINS', add_N: 'CONTAINS MUSTARD SEEDS',
    lang_de: 'DE', lang_en: 'EN',
    contact_phone_value: '+47 (0) 6641 / 123459',
    contact_email_value: 'info@crepes-haus.de',
    contact_address_value: 'Eisenbacher Tor<br>36341 Lauterbach (Hessen)<br><span style="color: var(--text-muted); font-size: 1rem;">Deutschland</span>',
    desc_favorite_waffel: 'Nutella, vanilla sauce, strawberries, bananas, cherries, blueberries',
    desc_cherry_chocco: 'Nutella, juicy cherries', desc_blueberry_love: 'Nutella, blueberries',
    desc_strawberry_dream: 'Nutella, strawberries', desc_berry_vanilla: 'Vanilla sauce, raspberries, Bueno cream',
    desc_cherry_vanilla: 'Vanilla sauce, sweet cherries', desc_banana_chocco: 'Nutella, bananas',
    desc_blue_vanilla: 'Vanilla sauce, blueberries',
    desc_zucker_zimt: 'With ice cream (vanilla / chocolate / strawberry) +1.00 €',
    desc_sweet_favorite: 'Bueno cream, biscuit crunch, strawberries',
    desc_chocco_dream: 'Kinder chocolate, blueberries', desc_marmelade: 'Apricot / Strawberry',
    desc_berry_bliss: 'Nutella, biscuit crunch, blueberries', desc_banana_heaven: 'Nutella, biscuit crunch, banana',
    desc_strawberry_love: 'Nutella, biscuit crunch, strawberries',
    desc_white_delight: 'Bueno cream, biscuit crunch, sour cherries',
    desc_pistachio_cream: 'Pistachio cream, raspberries, biscuit crunch',
    desc_kinder_magic: 'Nutella, Kinder Bueno, biscuit crunch',
    desc_coco_white: 'Bueno cream, raspberries, coconut flakes', desc_sweet_mix: "Nutella, M&M's",
    desc_cherry_kiss: 'Nutella, biscuit crunch, cherries', desc_eis: 'Vanilla · Chocolate · Strawberry',
    desc_ham_cheese: 'Chicken/turkey ham, Gouda, tomato, sour cream',
    desc_cheese_crepe: 'Gouda, mozzarella, cheddar, edam, sour cream',
    desc_salami: 'Beef salami, cheese, sour cream'
  };

  var FALLBACK_MENU = {
    siteName: 'Crêpes Haus',
    tagline: 'Frische Waffeln · Knusprige Crêpes · Hausgemachtes Eis',
    contact: {
      address: ['Eisenbacher Tor', '36341 Lauterbach (Hessen)', 'Deutschland'],
      phone: '+47 (0) 6641 / 123459', email: 'info@crepes-haus.de'
    },
    categories: [
      {
        id: 'waffeln', name: 'Waffel Genuss', icon: 'waffle',
        items: [
          { id: 1, name: 'Favorite Waffel', desc: 'Nutella, Vanillesauce, Erdbeeren, Bananen, Kirschen, Blaubeeren', price: '8.50', allergens: 'A B C D E' },
          { id: 2, name: 'Cherry Chocco', desc: 'Nutella, saftige Kirschen', price: '6.20', allergens: '1 2 3 4 5 A B C D E' },
          { id: 3, name: 'Blueberry Love', desc: 'Nutella, Blaubeeren', price: '6.70', allergens: '1 2 3 4 5 A B C D E' },
          { id: 4, name: 'Strawberry Dream', desc: 'Nutella, Erdbeeren', price: '6.50', allergens: '1 2 3 4 5 A B C D E' },
          { id: 5, name: 'Berry Vanilla', desc: 'Vanillesauce, Himbeeren, Bueno Creme', price: '7.80', allergens: '1 2 3 A B C' },
          { id: 6, name: 'Cherry Vanilla', desc: 'Vanillesauce, fruchtige Kirschen', price: '6.20', allergens: '1 2 3 A B C' },
          { id: 7, name: 'Banana Chocco', desc: 'Nutella, Bananen', price: '5.10', allergens: '1 2 3 4 5 A B C D E' },
          { id: 8, name: 'Blue Vanilla', desc: 'Vanillesauce, Blaubeeren', price: '7.30', allergens: '1 2 3 A B C' },
          { id: 9, name: 'Zucker & Zimt', desc: '+ Eis (Vanille / Schokolade / Erdbeere) +1,00 €', price: '4.20', allergens: '1 8 A B' }
        ]
      },
      {
        id: 'sweet-crepes', name: 'Süsse Crêpes', icon: 'crepe',
        items: [
          { id: 10, name: 'Sweet Favorite', desc: 'Bueno Creme, Keks-Crunch, Erdbeeren', price: '8.50', allergens: '1 2 3 4 5 A B C D E' },
          { id: 11, name: 'Chocco Dream', desc: 'Kinder Schokolade, Blaubeeren', price: '8.50', allergens: '1 2 3 4 5 A B C D E' },
          { id: 12, name: 'Marmelade Crêpes', desc: 'Aprikose / Erdbeere', price: '4.00', allergens: '1 2 3 A B C' },
          { id: 13, name: 'Berry Bliss', desc: 'Nutella, Keks-Crunch, Blaubeeren', price: '6.50', allergens: '1 2 3 4 5 A B C D' },
          { id: 14, name: 'Banana Heaven', desc: 'Nutella, Keks-Crunch, Banane', price: '5.50', allergens: '1 2 3 4 5 A B C D E' },
          { id: 15, name: 'Strawberry Love', desc: 'Nutella, Keks-Crunch, Erdbeeren', price: '6.20', allergens: '1 2 3 4 5 A B C D E' },
          { id: 16, name: 'White Delight', desc: 'Bueno Creme, Keks-Crunch, saure Kirschen', price: '5.70', allergens: '1 2 3 4 A B C D' },
          { id: 17, name: 'Pistachio Cream', desc: 'Pistaziencreme, Himbeeren, Keks-Crunch', price: '8.20', allergens: '1 2 3 4 A B C D' },
          { id: 18, name: 'Kinder Magic', desc: 'Nutella, Kinder Bueno, Keks-Crunch', price: '7.50', allergens: '1 2 3 4 5 A B C D E' },
          { id: 19, name: 'Coco White', desc: 'Bueno Creme, Himbeeren, Kokosraspeln', price: '6.00', allergens: '1 2 3 A B C' },
          { id: 20, name: 'Sweet Mix', desc: "Nutella, M&M's", price: '7.00', allergens: '1 2 3 4 5 A B C D E' },
          { id: 21, name: 'Cherry Kiss', desc: 'Nutella, Keks-Crunch, Kirschen', price: '6.20', allergens: '1 2 3 4 5 A B C D E' },
          { id: 22, name: '+ Eis', desc: 'Vanille · Schokolade · Erdbeere', price: '1.00', allergens: '1 3 A B' }
        ]
      },
      {
        id: 'savory-crepes', name: 'Herzhaft', icon: 'cheese',
        items: [
          { id: 23, name: 'Ham – Cheese Crêpe', desc: 'Hähnchen/Puten-Schinken, Gouda, Tomate, saure Sahne', price: '7.00', allergens: '1 2 3 A B C' },
          { id: 24, name: 'Cheese Crêpe', desc: 'Gouda, Mozzarella, Cheddar, Edammer, saure Sahne', price: '6.50', allergens: 'A B C' },
          { id: 25, name: 'Savoury Salami', desc: 'Rind-Salami, Käse, saure Sahne', price: '7.00', allergens: '1 2 3 A B C' }
        ]
      }
    ],
    allergens: {
      groups: [
        { name: 'allergens_group_allergens', list: ['1. GLUTEN','2. EIER','3. MILCH/LAKTOSE','4. NÜSSE (Hasel, Pistazie)','5. SOJA','6. SELLERIE','7. SENF','8. SESAM','9. SULFITE'] },
        { name: 'allergens_group_additives', list: ['A. GLUTENHALTIG','B. ENTHÄLT KIRSCHEN','C. ENTHÄLT EIER','D. ENTHÄLT FISCH','E. ENTHÄLT ERDNÜSSE','F. ENTHÄLT SOJA','G. ENTHÄLT MILCH','I. ENTHÄLT SELLERIE','J. ENTHÄLT SENF','K. ENTHÄLT SESAM','L. ENTHÄLT SULFITE','M. ENTHÄLT LUPINEN','N. ENTHÄLT WEICHTER'] }
      ]
    }
  };

  function clearAllCachedData() {
    console.group('[settings] ОЧИЩЕННЯ КЕШУ');
    var cfg = readVar('SETTINGS_CFG', FALLBACK_CFG);
    var menuKey = cfg.menuStorageKey || 'cafeMenuOverride';
    localStorage.removeItem(menuKey);
    window.SITE_TEXT = {};
    window.MENU_DATA = {};
    console.log('[settings] localStorage і глобальні змінні очищені');
    console.groupEnd();
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

    console.log('[settings] → КРОК 0: очищення кешу');
    clearAllCachedData();

    var cfg = readVar('SETTINGS_CFG', FALLBACK_CFG);
    window.I18N_CONFIG = Object.assign({}, window.I18N_CONFIG, cfg);
    console.log('[settings] → КРОК 1: config →', Object.keys(cfg).length, 'ключів');

    var deTexts = readVar('SITE_TEXT_DE', FALLBACK_DE);
    var enTexts = readVar('SITE_TEXT_EN', FALLBACK_EN);
    window.SITE_TEXT = window.SITE_TEXT || {};
    window.SITE_TEXT.de = deTexts.hasOwnProperty('page_title') ? deTexts : FALLBACK_DE;
    window.SITE_TEXT.en = enTexts.hasOwnProperty('page_title') ? enTexts : FALLBACK_EN;
    console.log('[settings] → КРОК 2: i18n → de:', Object.keys(window.SITE_TEXT.de).length, '| en:', Object.keys(window.SITE_TEXT.en).length, 'ключів');

    var menuData = readVar('MENU_DATA', FALLBACK_MENU);
    window.MENU_DATA = menuData.hasOwnProperty('categories') ? menuData : FALLBACK_MENU;
    console.log('[settings] → КРОК 3: menu → категорій:', (window.MENU_DATA.categories || []).length);

    syncContactFromConfig(cfg);

    console.log('[settings] → КРОК 4: applyConfigToDOM');
    applyConfigToDOM(cfg);

    console.log('[settings] → КРОК 5: seedStorage');
    if (window.AppAPI && typeof window.AppAPI.seedStorage === 'function') {
      window.AppAPI.seedStorage();
    }

    var startLang = getSavedLang(cfg);
    console.log('[settings] → мова:', startLang);

    console.log('[settings] → КРОК 6: applyLang');
    if (window.I18N && typeof window.I18N.applyLang === 'function') {
      window.I18N.applyLang(startLang, true);
    }

    console.log('[settings] → КРОК 7: renderMenu');
    if (typeof window.renderMenu === 'function') {
      window.renderMenu();
      var cards = document.querySelectorAll('.card');
      console.log('[settings] renderMenu → карток:', cards.length);
    }

    console.log('[settings] → КРОК 8: renderAllergens');
    if (window.I18N && typeof window.I18N.renderAllergens === 'function') {
      window.I18N.renderAllergens(startLang);
    }

    console.log('[settings] → КРОК 9: renderContact');
    if (window.I18N && typeof window.I18N.renderContact === 'function') {
      window.I18N.renderContact(startLang);
    }

    console.log('[settings] ✓ готово');
    console.groupEnd();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
