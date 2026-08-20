const menuBtn = document.querySelector('.menu-btn');
const mobilePanel = document.querySelector('.mobilePanel');

function setMenu(open) {
  if (!menuBtn || !mobilePanel) return;
  mobilePanel.classList.toggle('mobile-open', open);
  menuBtn.textContent = open ? '×' : '☰';
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

if (menuBtn && mobilePanel) {
  menuBtn.addEventListener('click', () => {
    setMenu(!mobilePanel.classList.contains('mobile-open'));
  });

  mobilePanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobilePanel.classList.contains('mobile-open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  });
}
