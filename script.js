(() => {
  const runBrandPatch = () => {
    const latestLogo = '/IMG_8612.jpeg';

    /* Replace every legacy HOODBTC logo instance with the latest artwork. */
    document.querySelectorAll('img[src="/hoodbtc-logo.png"], img[src="/hoodbtc-logo.webp"]').forEach((img) => {
      img.src = latestLogo;
      img.classList.add('latestHoodbtcLogo');
    });

    /* Add Telegram to Community once. */
    const grid = document.querySelector('.communityGrid');
    if (grid && !grid.querySelector('a[href="https://t.me/hoodbtc2"]')) {
      const telegram = document.createElement('a');
      telegram.href = 'https://t.me/hoodbtc2';
      telegram.target = '_blank';
      telegram.rel = 'noopener noreferrer';
      telegram.innerHTML = `
        <strong class="socialMark social-telegram" aria-hidden="true">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.91 3.79 20.3 20.83c-.27 1.2-.98 1.49-1.99.93l-5.5-4.05-2.65 2.55c-.29.29-.54.54-1.1.54l.39-5.6L19.65 6c.44-.39-.1-.61-.68-.22L6.36 13.72.93 12.02c-1.18-.37-1.2-1.18.25-1.75L22.4 2.09c.98-.36 1.84.22 1.51 1.7Z"/>
          </svg>
        </strong>
        <span>Join Telegram</span><i>↗</i>`;
      grid.appendChild(telegram);
    }

    if (!document.getElementById('hoodbtc-brand-patch-style')) {
      const style = document.createElement('style');
      style.id = 'hoodbtc-brand-patch-style';
      style.textContent = `
        .latestHoodbtcLogo{object-fit:cover!important;object-position:50% 43%!important}
        .brand .latestHoodbtcLogo{border-radius:12px!important;filter:drop-shadow(0 0 9px rgba(76,243,122,.42))!important}
        .flowNode .latestHoodbtcLogo,.connectCard>.latestHoodbtcLogo{border-radius:50%!important}
        .social-telegram{color:#2AABEE!important;border-color:rgba(42,171,238,.42)!important;box-shadow:inset 0 0 18px rgba(42,171,238,.05)}
        .social-telegram svg{width:21px;height:21px;display:block;fill:currentColor}
      `;
      document.head.appendChild(style);
    }
  };

  const addOnchainOrbits = () => {
    const hero = document.querySelector('.imageHeroV3');
    if (!hero || hero.querySelector('.chainOrbit')) return;

    const makeOrbit = (className, count) => {
      const orbit = document.createElement('span');
      orbit.className = `chainOrbit ${className}`;
      orbit.setAttribute('aria-hidden', 'true');
      for (let i = 0; i < count; i += 1) {
        const link = document.createElement('i');
        link.style.setProperty('--n', i);
        orbit.appendChild(link);
      }
      return orbit;
    };

    hero.appendChild(makeOrbit('chainOuter', 12));
    hero.appendChild(makeOrbit('chainInner', 10));
  };

  const addHCoreSpin = () => {
    const hero = document.querySelector('.imageHeroV3');
    if (!hero || hero.querySelector('.heroHCore')) return;

    const stage = document.createElement('span');
    stage.className = 'heroHCore';
    stage.setAttribute('aria-hidden', 'true');

    const rotor = document.createElement('span');
    rotor.className = 'heroHCoreRotor';
    stage.appendChild(rotor);
    hero.appendChild(stage);
  };

  const loadStylesheet = (id, href) => {
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  const loadMobileFinal = () => {
    loadStylesheet('hoodbtc-mobile-final-style', '/mobile-final.css');
    if (document.getElementById('hoodbtc-mobile-final-script')) return;
    const mobileFinal = document.createElement('script');
    mobileFinal.id = 'hoodbtc-mobile-final-script';
    mobileFinal.src = '/mobile-final.js';
    document.head.appendChild(mobileFinal);
  };

  const loadPolish = () => {
    if (document.getElementById('hoodbtc-polish-script')) {
      loadMobileFinal();
      return;
    }
    const polish = document.createElement('script');
    polish.id = 'hoodbtc-polish-script';
    polish.src = '/polish.js';
    polish.onload = () => requestAnimationFrame(loadMobileFinal);
    polish.onerror = loadMobileFinal;
    document.head.appendChild(polish);
  };

  const loadCore = () => {
    loadStylesheet('hoodbtc-polish-style', '/polish.css');
    loadStylesheet('hoodbtc-seo-style', '/seo.css');
    loadStylesheet('hoodbtc-mobile-smooth-style', '/mobile-smooth.css');
    loadStylesheet('hoodbtc-chain-orbits-style', '/chain-orbits.css');
    loadStylesheet('hoodbtc-h-core-spin-style', '/h-core-spin.css');

    const core = document.createElement('script');
    core.src = '/script-v3.js';
    core.onload = () => {
      runBrandPatch();
      addOnchainOrbits();
      addHCoreSpin();
      requestAnimationFrame(() => {
        runBrandPatch();
        addOnchainOrbits();
        addHCoreSpin();
        loadPolish();
      });
    };
    core.onerror = () => {
      runBrandPatch();
      addOnchainOrbits();
      addHCoreSpin();
      loadPolish();
    };
    document.head.appendChild(core);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCore, { once: true });
  } else {
    loadCore();
  }
})();
