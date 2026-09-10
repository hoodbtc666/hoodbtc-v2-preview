(() => {
  const MOBILE_QUERY = '(max-width: 700px)';

  const initMobileFinal = () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return;

    const root = document.documentElement;
    root.classList.add('hoodMobileFinal');

    const hero = document.querySelector('.imageHeroV3');
    let heroNearViewport = true;
    let interactionActive = false;
    let resumeTimer = 0;

    const syncMotion = () => {
      if (!hero) return;
      hero.classList.toggle(
        'heroMotionPaused',
        document.hidden || !heroNearViewport || interactionActive
      );
    };

    const pauseForInteraction = () => {
      interactionActive = true;
      root.classList.add('hoodTouchActive');
      window.clearTimeout(resumeTimer);
      syncMotion();
    };

    const scheduleMotionResume = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        interactionActive = false;
        root.classList.remove('hoodTouchActive');
        syncMotion();
      }, 240);
    };

    if (hero) {
      /* Remove decorative DOM already hidden on phones. */
      hero.querySelectorAll(
        '.particleField,.techGearV3,.sparkV3,.rr4,.rr5,.br2,.br3'
      ).forEach((node) => node.remove());

      const heroArtwork = hero.querySelector('.heroArtworkV3');
      if (heroArtwork) {
        heroArtwork.decoding = 'async';
        heroArtwork.fetchPriority = 'high';
        heroArtwork.draggable = false;
      }

      if ('IntersectionObserver' in window) {
        const motionObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
          heroNearViewport = Boolean(entry && entry.isIntersecting);
          syncMotion();
        }, { rootMargin: '100px 0px 100px 0px', threshold: 0 });
        motionObserver.observe(hero);
      }

      document.addEventListener('visibilitychange', syncMotion, { passive: true });
      syncMotion();
    }

    /* Give Safari the scroll thread first priority: all decorative hero motion pauses
       while the finger is down and during momentum scrolling, then resumes at idle. */
    document.addEventListener('touchstart', pauseForInteraction, { passive: true });
    document.addEventListener('touchend', scheduleMotionResume, { passive: true });
    document.addEventListener('touchcancel', scheduleMotionResume, { passive: true });
    window.addEventListener('scroll', () => {
      pauseForInteraction();
      scheduleMotionResume();
    }, { passive: true });

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
    const heroSection = document.querySelector('.heroFocus');
    if (mobileCta) {
      mobileCta.setAttribute('aria-label', 'Quick actions');

      /* Replace the old per-scroll layout read with a composited visibility class. */
      if (heroSection && 'IntersectionObserver' in window) {
        const ctaObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
          const heroAboveViewport = Boolean(entry && !entry.isIntersecting && entry.boundingClientRect.bottom <= 120);
          mobileCta.classList.toggle('isVisible', heroAboveViewport);
        }, { rootMargin: '-120px 0px 0px 0px', threshold: 0 });
        ctaObserver.observe(heroSection);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileFinal, { once: true });
  } else {
    initMobileFinal();
  }
})();
