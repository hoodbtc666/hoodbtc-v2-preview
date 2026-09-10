(() => {
  const MOBILE_QUERY = '(max-width: 700px)';

  const initMobileFinal = () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return;

    document.documentElement.classList.add('hoodMobileFinal');

    const hero = document.querySelector('.imageHeroV3');
    if (hero) {
      /* Remove decorative DOM that mobile CSS already hides.
         This cuts roughly one hundred unused nodes from the iPhone hero. */
      hero.querySelectorAll(
        '.particleField,.techGearV3,.sparkV3,.rr4,.rr5,.br2,.br3'
      ).forEach((node) => node.remove());

      const heroArtwork = hero.querySelector('.heroArtworkV3');
      if (heroArtwork) {
        heroArtwork.decoding = 'async';
        heroArtwork.fetchPriority = 'high';
        heroArtwork.draggable = false;
      }

      let heroNearViewport = true;
      const syncMotion = () => {
        hero.classList.toggle('heroMotionPaused', document.hidden || !heroNearViewport);
      };

      if ('IntersectionObserver' in window) {
        const motionObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
          heroNearViewport = Boolean(entry && entry.isIntersecting);
          syncMotion();
        }, { rootMargin: '140px 0px 140px 0px', threshold: 0 });
        motionObserver.observe(hero);
      }

      document.addEventListener('visibilitychange', syncMotion, { passive: true });
      syncMotion();
    }

    const menuBtn = document.querySelector('.menu-btn');
    const mobilePanel = document.querySelector('.mobilePanel');
    if (menuBtn && mobilePanel) {
      const syncMenuAccessibility = () => {
        const open = mobilePanel.classList.contains('mobile-open');
        mobilePanel.setAttribute('aria-hidden', String(!open));
      };

      syncMenuAccessibility();
      const menuObserver = new MutationObserver(syncMenuAccessibility);
      menuObserver.observe(mobilePanel, { attributes: true, attributeFilter: ['class'] });
    }

    const mobileCta = document.querySelector('.mobileCta');
    if (mobileCta) {
      mobileCta.setAttribute('aria-label', 'Quick actions');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileFinal, { once: true });
  } else {
    initMobileFinal();
  }
})();
