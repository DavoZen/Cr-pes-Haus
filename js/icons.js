// ============================================================
// SVG ІКОНКИ — мінімалістичні, з глибиною, серйозні
// ============================================================
window.SITE_ICONS = {
  waffle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waffleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.08"/>
      </linearGradient>
      <filter id="waffleShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="currentColor" flood-opacity="0.25"/>
      </filter>
    </defs>
    <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" stroke-width="1.6" fill="url(#waffleGrad)" filter="url(#waffleShadow)"/>
    <path d="M6.5 6.5v11M10.5 6.5v11M14.5 6.5v11M18.5 6.5v11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.85"/>
    <path d="M2.5 10h19M2.5 14h19" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity="0.6"/>
    <circle cx="6.5" cy="10" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="10.5" cy="13.5" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="14.5" cy="10" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="18.5" cy="13.5" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="6.5" cy="14.5" r="0.6" fill="currentColor" opacity="0.35"/>
    <circle cx="18.5" cy="10" r="0.6" fill="currentColor" opacity="0.35"/>
  </svg>`,

  crepe: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="crepeGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.22"/>
        <stop offset="60%" stop-color="currentColor" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02"/>
      </radialGradient>
      <filter id="crepeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6" fill="url(#crepeGrad)" filter="url(#crepeShadow)"/>
    <path d="M6 11.5c2-3.5 5.5-3.5 7.5 0s4 3.5 6.5 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.9"/>
    <path d="M8.5 9c1.2-1.8 3-1.8 4.2 0s2.2 1.8 3.8 0" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.5"/>
    <circle cx="10.5" cy="7.5" r="0.9" fill="currentColor" opacity="0.6"/>
    <circle cx="15.5" cy="15.5" r="0.9" fill="currentColor" opacity="0.6"/>
    <circle cx="8" cy="14" r="0.5" fill="currentColor" opacity="0.4"/>
    <circle cx="17" cy="9" r="0.5" fill="currentColor" opacity="0.4"/>
  </svg>`,

  cheese: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.3"/>
        <stop offset="50%" stop-color="currentColor" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
      </linearGradient>
      <filter id="cheeseShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M2 13.5l9-7.5L21 13.5v6.5H2z" stroke="currentColor" stroke-width="1.5" fill="url(#cheeseGrad)" stroke-linejoin="round" filter="url(#cheeseShadow)"/>
    <path d="M4 13.5c1.3-0.9 3.2-0.9 4.5 0s2.8 0.9 4.5 0 2.8-0.9 4.5 0" stroke="currentColor" stroke-width="0.9" fill="none" opacity="0.35" stroke-linecap="round"/>
    <circle cx="7" cy="12" r="1.4" fill="currentColor" opacity="0.7"/>
    <circle cx="11" cy="14.5" r="1.4" fill="currentColor" opacity="0.7"/>
    <circle cx="15.5" cy="11" r="1.4" fill="currentColor" opacity="0.7"/>
    <circle cx="9.5" cy="16.5" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="17" cy="15" r="0.9" fill="currentColor" opacity="0.45"/>
    <circle cx="13" cy="18" r="0.7" fill="currentColor" opacity="0.35"/>
  </svg>`,

  alert: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.25"/>
      </linearGradient>
      <filter id="alertShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M12 3L2.8 20.5h18.4L12 3z" stroke="currentColor" stroke-width="1.5" fill="url(#alertGrad)" stroke-linejoin="round" filter="url(#alertShadow)"/>
    <path d="M12 3v6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="12" cy="15.5" r="1.4" fill="currentColor" opacity="0.85"/>
    <path d="M12 10.5v3.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
  </svg>`,

  location: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="locGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.25"/>
        <stop offset="70%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02"/>
      </radialGradient>
      <filter id="locShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="currentColor" flood-opacity="0.18"/>
      </filter>
    </defs>
    <path d="M12 2C8.13 2 5 5 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-4-3.13-7-7-7z" stroke="currentColor" stroke-width="1.6" fill="url(#locGrad)" filter="url(#locShadow)"/>
    <circle cx="12" cy="9" r="3.2" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.25"/>
    <circle cx="12" cy="9" r="1.6" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="9" r="0.8" fill="currentColor" opacity="0.45"/>
  </svg>`,

  clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="clockGrad" cx="50%" cy="50%" r="50%">
        <stop offset="40%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02"/>
      </radialGradient>
      <filter id="clockShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.15"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.4" fill="url(#clockGrad)" filter="url(#clockShadow)"/>
    <path d="M12 7v5l3.5 2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="12" cy="12" r="1.3" fill="currentColor" opacity="0.75"/>
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.55"/>
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="0.4" fill="none" opacity="0.3" stroke-dasharray="2 3"/>
  </svg>`,

  phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
      </linearGradient>
      <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M21 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0121 16.92z" stroke="currentColor" stroke-width="1.5" fill="url(#phoneGrad)" stroke-linecap="round" stroke-linejoin="round" filter="url(#phoneShadow)"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" opacity="0.5"/>
    <path d="M21 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0121 16.92z" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.25" stroke-dasharray="2.5 2"/>
  </svg>`,

  email: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="emailShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.15"/>
      </filter>
    </defs>
    <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="currentColor" stroke-width="1.5" fill="url(#emailGrad)" filter="url(#emailShadow)"/>
    <path d="M22 4l-10 8L2 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2 4l10 8 10-8" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" opacity="0.3"/>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.2" stroke-dasharray="1 2"/>
  </svg>`,

  star: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="starGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="currentColor" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </radialGradient>
      <filter id="starShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.25"/>
      </filter>
    </defs>
    <polygon points="12 2 15 9 22 10 17 15 18.5 22 12 18.5 5.5 22 7 15 2 10 9 15 9 12 2" stroke="currentColor" stroke-width="1.4" fill="url(#starGrad)" stroke-linejoin="round" filter="url(#starShadow)"/>
    <polygon points="12 5 13.5 9 17 9.5 14.5 12.5 15.2 16 12 14 8.8 16 9.5 12.5 7 9.5 10.2 9 12 5" fill="currentColor" opacity="0.2"/>
  </svg>`,

  heart: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="heartGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.3"/>
        <stop offset="70%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02"/>
      </radialGradient>
      <filter id="heartShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z" stroke="currentColor" stroke-width="1.5" fill="url(#heartGrad)" stroke-linejoin="round" filter="url(#heartShadow)"/>
  </svg>`,

  arrowDown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.3" stroke-linejoin="round" transform="translate(2,2)"/>
  </svg>`,

  menu: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="menuShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <rect x="2.5" y="4.5" width="19" height="2.2" rx="1.1" fill="currentColor" opacity="0.9" filter="url(#menuShadow)"/>
    <rect x="2.5" y="10.9" width="19" height="2.2" rx="1.1" fill="currentColor" opacity="0.7" filter="url(#menuShadow)"/>
    <rect x="2.5" y="17.3" width="19" height="2.2" rx="1.1" fill="currentColor" opacity="0.5" filter="url(#menuShadow)"/>
  </svg>`,

  admin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="adminGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
      </radialGradient>
      <filter id="adminShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.2" fill="url(#adminGrad)" filter="url(#adminShadow)"/>
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.2"/>
    <path d="M12 4v3M12 17v3M5.5 5.5l2 2M16.5 16.5l2 2M4 12h3M17 12h3M5.5 18.5l2-2M16.5 7.5l2-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.85"/>
    <circle cx="12" cy="12" r="1.3" fill="currentColor" opacity="0.6"/>
  </svg>`,

  logOut: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
      </linearGradient>
      <filter id="logoutShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="1.4" fill="url(#logoutGrad)" stroke-linecap="round" stroke-linejoin="round" filter="url(#logoutShadow)"/>
    <polyline points="16 17 21 12 16 7" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M16 17l3-2.5M16 7l3 2.5" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" opacity="0.35"/>
  </svg>`,

  save: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="saveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="saveShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" stroke-width="1.4" fill="url(#saveGrad)" stroke-linejoin="round" filter="url(#saveShadow)"/>
    <polyline points="17 21 17 13 17 3 21 3 21 13 21 21" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linejoin="round" opacity="0.6"/>
    <path d="M5 3h3.5M5 7h3.5" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" opacity="0.4"/>
  </svg>`,

  trash: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="trashShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.08" stroke-linecap="round" stroke-linejoin="round" filter="url(#trashShadow)"/>
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  </svg>`,

  qr: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="qrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect x="2" y="2" width="7" height="7" rx="1.2" stroke="currentColor" stroke-width="1.3" fill="currentColor" fill-opacity="0.12" filter="url(#qrShadow)"/>
    <rect x="2.7" y="2.7" width="5.6" height="5.6" rx="0.8" fill="currentColor" opacity="0.5"/>
    <rect x="4" y="4" width="2" height="2" rx="0.3" fill="currentColor" opacity="0.35"/>
    <rect x="15" y="2" width="7" height="7" rx="1.2" stroke="currentColor" stroke-width="1.3" fill="currentColor" fill-opacity="0.12" filter="url(#qrShadow)"/>
    <rect x="15.7" y="2.7" width="5.6" height="5.6" rx="0.8" fill="currentColor" opacity="0.5"/>
    <rect x="17" y="4" width="2" height="2" rx="0.3" fill="currentColor" opacity="0.35"/>
    <rect x="2" y="15" width="7" height="7" rx="1.2" stroke="currentColor" stroke-width="1.3" fill="currentColor" fill-opacity="0.12" filter="url(#qrShadow)"/>
    <rect x="2.7" y="15.7" width="5.6" height="5.6" rx="0.8" fill="currentColor" opacity="0.5"/>
    <rect x="4" y="17" width="2" height="2" rx="0.3" fill="currentColor" opacity="0.35"/>
    <rect x="15" y="15" width="3.5" height="3.5" rx="0.7" fill="currentColor" opacity="0.55"/>
    <rect x="19.5" y="15" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.55"/>
    <rect x="15" y="19.5" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.55"/>
    <rect x="19.5" y="19.5" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.55"/>
  </svg>`,

  plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="plusGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </radialGradient>
      <filter id="plusShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="url(#plusGrad)" filter="url(#plusShadow)"/>
    <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.15"/>
  </svg>`,

  lock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="lockShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect x="4" y="10.5" width="16" height="11" rx="2.5" stroke="currentColor" stroke-width="1.5" fill="url(#lockGrad)" filter="url(#lockShadow)"/>
    <path d="M9 10.5V7.5a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="15.5" r="1.5" fill="currentColor" opacity="0.6"/>
    <path d="M12 14v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
    <rect x="4" y="10.5" width="16" height="11" rx="2.5" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.2" stroke-dasharray="1.5 2"/>
  </svg>`,

  logo: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="logoGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.28"/>
        <stop offset="60%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.03"/>
      </radialGradient>
      <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="currentColor" flood-opacity="0.25"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.3" fill="url(#logoGrad)" filter="url(#logoShadow)"/>
    <path d="M7.5 10c1.3-2.2 3.8-2.2 5 0s3.2 2.2 5 0" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.9"/>
    <path d="M8.5 8.5c0.6-1.2 1.8-1.2 2.4 0s1.2 1.2 2.4 0 1.4-1.2 2.6 0" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.45"/>
    <circle cx="10" cy="7" r="1.3" fill="currentColor" opacity="0.6"/>
    <circle cx="14.5" cy="15.5" r="1.3" fill="currentColor" opacity="0.55"/>
    <circle cx="8" cy="14.5" r="0.7" fill="currentColor" opacity="0.35"/>
    <path d="M12 7.5v1.3" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
  </svg>`,

  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="searchGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.05"/>
        <stop offset="70%" stop-color="currentColor" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.18"/>
      </radialGradient>
      <filter id="searchShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8" fill="url(#searchGrad)" filter="url(#searchShadow)"/>
    <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="10.5" cy="10.5" r="2.8" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.3" stroke-dasharray="2 2"/>
    <circle cx="10.5" cy="10.5" r="1.2" fill="currentColor" opacity="0.25"/>
  </svg>`,

  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="userGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.04"/>
      </radialGradient>
      <filter id="userShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.15"/>
      </filter>
    </defs>
    <circle cx="12" cy="8" r="4.5" stroke="currentColor" stroke-width="1.6" fill="url(#userGrad)" filter="url(#userShadow)"/>
    <path d="M4 20.5c0-4.5 4-8.5 8-8.5s8 4 8 8.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="12" cy="8" r="2.2" fill="currentColor" opacity="0.3"/>
    <path d="M4 20.5c0-4.5 4-8.5 8-8.5s8 4 8 8.5" stroke="currentColor" stroke-width="0.6" fill="none" opacity="0.25" stroke-dasharray="2 3"/>
  </svg>`,

  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.18"/>
      </linearGradient>
      <filter id="cartShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.18"/>
      </filter>
    </defs>
    <circle cx="9" cy="20" r="1.8" fill="currentColor" opacity="0.6"/>
    <circle cx="18" cy="20" r="1.8" fill="currentColor" opacity="0.6"/>
    <path d="M1 2h3l2.8 13.5A2 2 0 008.5 17h9a2 2 0 001.9-1.4L22 6H5.5" stroke="currentColor" stroke-width="1.4" fill="url(#cartGrad)" stroke-linecap="round" stroke-linejoin="round" filter="url(#cartShadow)"/>
  </svg>`,

  chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="9 18 15 12 9 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="9 18 15 12 9 6" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.3" stroke-linejoin="round" transform="translate(1.5,1.5)"/>
  </svg>`,

  chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.3" stroke-linejoin="round" transform="translate(1.5,1.5)"/>
  </svg>`,

  mapPin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pinGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.25"/>
        <stop offset="60%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.02"/>
      </radialGradient>
      <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="currentColor" flood-opacity="0.2"/>
      </filter>
    </defs>
    <path d="M12 2C8.13 2 5 5.58 5 10c0 5.25 7 12.5 7 12.5s7-7.25 7-12.5C19 5.58 15.87 2 12 2z" stroke="currentColor" stroke-width="1.5" fill="url(#pinGrad)" filter="url(#pinShadow)"/>
    <circle cx="12" cy="10" r="3.5" stroke="currentColor" stroke-width="1.3" fill="currentColor" fill-opacity="0.3"/>
    <circle cx="12" cy="10" r="1.7" fill="currentColor" opacity="0.8"/>
  </svg>`,

  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.18"/>
      </linearGradient>
      <filter id="calShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="currentColor" flood-opacity="0.15"/>
      </filter>
    </defs>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.4" fill="url(#calGrad)" filter="url(#calShadow)"/>
    <path d="M3 9h18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M8 3.5v4M16 3.5v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="8" cy="14" r="0.9" fill="currentColor" opacity="0.75"/>
    <circle cx="12" cy="14" r="0.9" fill="currentColor" opacity="0.75"/>
    <circle cx="16" cy="14" r="0.9" fill="currentColor" opacity="0.75"/>
  </svg>`,

  info: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="infoGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="infoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="currentColor" flood-opacity="0.15"/>
      </filter>
    </defs>
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.4" fill="url(#infoGrad)" filter="url(#infoShadow)"/>
    <path d="M12 11v5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="12" cy="8" r="1.4" fill="currentColor" opacity="0.7"/>
  </svg>`
};
