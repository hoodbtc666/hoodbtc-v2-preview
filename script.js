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

  const loadCore = () => {
    const core = document.createElement('script');
    core.src = '/script-v3.js';
    core.onload = () => {
      runBrandPatch();
      requestAnimationFrame(runBrandPatch);
    };
    core.onerror = runBrandPatch;
    document.head.appendChild(core);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCore, { once: true });
  } else {
    loadCore();
  }
})();
