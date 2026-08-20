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
  menuBtn.addEventListener('click', () => setMenu(!mobilePanel.classList.contains('mobile-open')));
  mobilePanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
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

const connectHeroButton = document.querySelector('.heroActions .ghost');
if (connectHeroButton) connectHeroButton.textContent = 'Connect Wallet ↓';

const trustItems = document.querySelectorAll('.trustLine span');
if (trustItems.length >= 3) trustItems[2].textContent = '24/7 MARKETS';

/* New hero: use the supplied full HOODBTC artwork as the visual base,
   then animate transparent technical layers over it. */
const heroUniverse = document.querySelector('.logoUniverse');
if (heroUniverse) {
  heroUniverse.className = 'logoUniverse imageHero';
  heroUniverse.innerHTML = `
    <img class="heroArtwork" src="/hoodbtc-hero-new.webp" alt="" aria-hidden="true">
    <span class="imageHalo haloA"></span>
    <span class="imageHalo haloB"></span>
    <span class="imageHalo haloC"></span>
    <span class="imageParticles particlesA"></span>
    <span class="imageParticles particlesB"></span>
    <span class="imageGear ig1"></span>
    <span class="imageGear ig2"></span>
    <span class="imageGear ig3"></span>
    <span class="imageSpark is1"></span>
    <span class="imageSpark is2"></span>
    <span class="imageSpark is3"></span>
    <span class="imageSpark is4"></span>
  `;

  const particleLayers = [
    { selector: '.particlesA', count: 34, radius: 46, offset: 0 },
    { selector: '.particlesB', count: 26, radius: 38, offset: 7 }
  ];

  particleLayers.forEach((config, layerIndex) => {
    const layer = heroUniverse.querySelector(config.selector);
    if (!layer) return;
    for (let i = 0; i < config.count; i += 1) {
      const dot = document.createElement('i');
      const angle = ((360 / config.count) * i + config.offset) * Math.PI / 180;
      const jitter = ((i * 5 + layerIndex * 3) % 7) - 3;
      const radius = config.radius + jitter * 0.42;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      const size = 2 + ((i + layerIndex) % 4);
      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.animationDelay = `${(i * 0.045).toFixed(2)}s`;
      layer.appendChild(dot);
    }
  });
}

if (!document.getElementById('hoodbtc-image-hero-style')) {
  const style = document.createElement('style');
  style.id = 'hoodbtc-image-hero-style';
  style.textContent = `
    .imageHero.logoUniverse{
      width:380px!important;height:380px!important;max-width:90vw!important;aspect-ratio:1!important;
      margin:4px auto -4px!important;position:relative!important;display:grid!important;place-items:center!important;
      overflow:visible!important;isolation:isolate!important
    }
    .imageHero .heroArtwork{
      position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:cover!important;
      border-radius:50%!important;display:block!important;z-index:1!important;
      box-shadow:0 0 34px rgba(76,243,122,.18),0 0 80px rgba(76,243,122,.07)!important;
      animation:heroImageFloat 4.8s ease-in-out infinite!important
    }
    .imageHero::before{
      content:"";position:absolute;inset:-7%;border-radius:50%;z-index:0;
      background:radial-gradient(circle,rgba(76,243,122,.17) 0 25%,rgba(76,243,122,.055) 47%,transparent 73%);
      filter:blur(13px);animation:heroImagePulse 2.9s ease-in-out infinite
    }
    .imageHero .imageHalo{position:absolute;border-radius:50%;z-index:3;pointer-events:none;will-change:transform}
    .imageHero .imageHalo::before{content:"";position:absolute;inset:0;border-radius:50%;border:1px solid rgba(99,255,127,.34);border-top-color:rgba(137,255,158,.95);border-right-style:dashed;filter:drop-shadow(0 0 6px rgba(76,243,122,.7))}
    .imageHero .haloA{inset:1%;animation:heroRingCW 4.4s linear infinite}
    .imageHero .haloB{inset:8%;animation:heroRingCCW 2.7s linear infinite}
    .imageHero .haloC{inset:15%;animation:heroRingCW 1.7s linear infinite}

    .imageHero .imageParticles{position:absolute;inset:0;border-radius:50%;z-index:5;pointer-events:none;will-change:transform}
    .imageHero .imageParticles i{position:absolute;display:block;border-radius:50%;background:#54ff78;transform:translate(-50%,-50%);box-shadow:0 0 8px #4cf37a,0 0 17px rgba(76,243,122,.82);animation:heroDotTwinkle .55s ease-in-out infinite alternate}
    .imageHero .particlesA{animation:heroRingCW 1.45s linear infinite}
    .imageHero .particlesB{animation:heroRingCCW .95s linear infinite}

    .imageHero .imageGear{position:absolute;z-index:6;border-radius:50%;background:repeating-conic-gradient(#83ff98 0 4deg,#102514 4deg 10deg);-webkit-mask:radial-gradient(circle,transparent 0 28%,#000 30% 49%,transparent 51% 58%,#000 60% 100%);mask:radial-gradient(circle,transparent 0 28%,#000 30% 49%,transparent 51% 58%,#000 60% 100%);filter:drop-shadow(0 0 7px rgba(76,243,122,.65));animation:heroGear .75s linear infinite}
    .imageHero .ig1{width:34px;height:34px;left:7%;top:11%}
    .imageHero .ig2{width:43px;height:43px;right:4%;top:15%;animation-direction:reverse;animation-duration:.6s}
    .imageHero .ig3{width:31px;height:31px;left:4%;bottom:15%;animation-duration:.9s}

    .imageHero .imageSpark{position:absolute;z-index:7;width:4px;height:4px;border-radius:50%;background:#63ff83;box-shadow:0 0 12px #4cf37a,0 0 25px rgba(76,243,122,.65);animation:heroSpark .6s ease-in-out infinite alternate}
    .imageHero .is1{left:18%;top:27%}.imageHero .is2{right:17%;top:32%;animation-delay:.15s}.imageHero .is3{left:25%;bottom:18%;animation-delay:.3s}.imageHero .is4{right:24%;bottom:14%;animation-delay:.45s}

    @keyframes heroRingCW{to{transform:rotate(360deg)}}
    @keyframes heroRingCCW{to{transform:rotate(-360deg)}}
    @keyframes heroGear{to{transform:rotate(360deg)}}
    @keyframes heroImageFloat{0%,100%{transform:translate3d(0,-4px,0)}50%{transform:translate3d(0,7px,0)}}
    @keyframes heroImagePulse{0%,100%{opacity:.65;transform:scale(.985)}50%{opacity:1;transform:scale(1.025)}}
    @keyframes heroDotTwinkle{from{opacity:.4;filter:brightness(.9)}to{opacity:1;filter:brightness(1.45)}}
    @keyframes heroSpark{from{opacity:.35;transform:scale(.8)}to{opacity:1;transform:scale(1.5)}}

    @media(max-width:900px){
      body{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
      main,header,footer,section{max-width:100%!important}
      .shell{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important}
      .topbar{height:72px!important;background:#020403!important;border-bottom:1px solid #102418!important;backdrop-filter:none!important}
      .nav{height:72px!important;padding:0!important}.brand{gap:9px!important;font-size:18px!important;letter-spacing:-.8px!important}.brand img{width:42px!important;height:42px!important}
      .menu-btn{display:block!important;margin-left:auto!important;font-size:28px!important;line-height:1!important;padding:3px 0 3px 10px!important}.mobilePanel{top:72px!important}
      .heroFocus{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important;padding:24px 0 22px!important;min-height:0!important}
      .heroCenter{width:100%!important;max-width:430px!important;margin:0 auto!important;text-align:center!important}.status{display:block!important;margin:0 0 3px!important;font-size:9px!important;letter-spacing:3.15px!important;line-height:1.2!important}.status i{width:8px!important;height:8px!important;margin-right:10px!important}
      .imageHero.logoUniverse{width:340px!important;height:340px!important;max-width:88vw!important;margin:0 auto -2px!important}
      .heroEyebrow{margin:0 0 14px!important;font-size:7.3px!important;letter-spacing:2.25px!important;line-height:1.15!important;color:#6f7b73!important}
      .heroCenter h1{font-size:48px!important;line-height:.95!important;letter-spacing:-3.5px!important;max-width:410px!important;margin:0 auto 18px!important;overflow-wrap:normal!important;word-break:normal!important}
      .heroLead{font-size:14px!important;line-height:1.58!important;max-width:370px!important;color:#8f9992!important;margin-left:auto!important;margin-right:auto!important}
      .heroActions{width:100%!important;display:flex!important;flex-direction:column!important;gap:10px!important;margin-top:22px!important}.heroActions>a{width:100%!important;max-width:100%!important;height:56px!important;padding:0 18px!important;border-radius:999px!important;justify-content:center!important;font-size:15px!important;font-weight:800!important}.heroActions .mainTrade{background:var(--green)!important;color:#041008!important;border:1px solid var(--green)!important}.heroActions .ghost{background:#030604!important;color:#f5f7f5!important;border:1px solid #334039!important}.heroActions .ghost:last-child{background:var(--green)!important;color:#041008!important;border-color:var(--green)!important}
      .trustLine{margin-top:20px!important;padding-bottom:2px!important;font-size:6.2px!important;letter-spacing:.52px!important;gap:7px!important;color:#59625c!important;justify-content:center!important;white-space:nowrap!important;flex-wrap:nowrap!important}.trustLine i{width:3px!important;height:3px!important;flex:0 0 3px!important}.heroFootnote{display:none!important}
    }
    @media(max-width:430px){
      .imageHero.logoUniverse{width:306px!important;height:306px!important;max-width:86vw!important}
      .heroCenter h1{font-size:44px!important;max-width:370px!important}.heroLead{font-size:13.5px!important;max-width:350px!important}
    }
    @media(prefers-reduced-motion:reduce){
      .imageHero .heroArtwork,.imageHero .imageHalo,.imageHero .imageParticles,.imageHero .imageParticles i,.imageHero .imageGear,.imageHero .imageSpark,.imageHero::before{animation:none!important}
    }
  `;
  document.head.appendChild(style);
}

/* Keep the sticky mobile Trade CTA away from the hero. */
const mobileCta = document.querySelector('.mobileCta');
const heroSection = document.querySelector('.heroFocus');
function updateMobileCtaVisibility() {
  if (!mobileCta || !heroSection) return;
  const show = window.innerWidth <= 640 && heroSection.getBoundingClientRect().bottom < 120;
  mobileCta.style.display = show ? 'block' : 'none';
}
if (mobileCta && heroSection) {
  updateMobileCtaVisibility();
  window.addEventListener('scroll', updateMobileCtaVisibility, { passive: true });
  window.addEventListener('resize', updateMobileCtaVisibility);
}

/* Official logos for the four existing community accounts. */
const socialBrandIcons = {
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.144 1.588 5.945L.056 24l6.3-1.652a11.87 11.87 0 005.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  snapchat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>`
};

const socialCards = document.querySelectorAll('.communityGrid a');
socialCards.forEach((card) => {
  const mark = card.querySelector('.socialMark');
  if (!mark) return;
  const href = card.getAttribute('href') || '';
  let brand = '';
  if (href.includes('x.com/')) brand = 'x';
  else if (href.includes('tiktok.com/')) brand = 'tiktok';
  else if (href.includes('whatsapp.com/')) brand = 'whatsapp';
  else if (href.includes('snapchat.com/')) brand = 'snapchat';
  if (!brand || !socialBrandIcons[brand]) return;
  mark.innerHTML = socialBrandIcons[brand];
  mark.classList.add(`social-${brand}`);
});

if (!document.getElementById('hoodbtc-social-style')) {
  const socialStyle = document.createElement('style');
  socialStyle.id = 'hoodbtc-social-style';
  socialStyle.textContent = `
    .socialMark{width:38px!important;height:38px!important;border-radius:11px!important;display:grid!important;place-items:center!important;background:#070b08!important}
    .socialMark svg{width:21px;height:21px;display:block;fill:currentColor}
    .social-x{color:#fff!important}.social-tiktok{color:#fff!important;filter:drop-shadow(-1px 0 0 #25f4ee) drop-shadow(1px 0 0 #fe2c55)}
    .social-whatsapp{color:#25D366!important;border-color:rgba(37,211,102,.38)!important}
    .social-snapchat{color:#FFFC00!important;border-color:rgba(255,252,0,.34)!important}
  `;
  document.head.appendChild(socialStyle);
}
