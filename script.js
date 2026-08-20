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

/* Animated HUD hero based on the supplied reference video. */
const heroUniverse = document.querySelector('.logoUniverse');
if (heroUniverse) {
  heroUniverse.classList.add('referenceHud');
  heroUniverse.innerHTML = `
    <span class="hudHalo"></span>
    <span class="hudCross crossH"></span>
    <span class="hudCross crossV"></span>

    <span class="hudRing ring01"><i></i><b></b></span>
    <span class="hudRing ring02"><i></i><b></b></span>
    <span class="hudRing ring03"><i></i><b></b></span>
    <span class="hudRing ring04"><i></i><b></b></span>
    <span class="hudRing ring05"><i></i><b></b></span>
    <span class="hudRing ring06"><i></i><b></b></span>

    <span class="particleCloud cloudA"></span>
    <span class="particleCloud cloudB"></span>
    <span class="particleCloud cloudC"></span>

    <span class="techGear gear1"></span>
    <span class="techGear gear2"></span>
    <span class="techGear gear3"></span>
    <span class="techGear gear4"></span>

    <span class="hudNode n1"></span><span class="hudNode n2"></span>
    <span class="hudNode n3"></span><span class="hudNode n4"></span>
    <span class="hudNode n5"></span><span class="hudNode n6"></span>
    <span class="hudNode n7"></span><span class="hudNode n8"></span>

    <span class="platformDisc disc1"></span>
    <span class="platformDisc disc2"></span>

    <div class="logoCore hudLogoCore"><img src="/hoodbtc-logo.webp" alt=""></div>
  `;

  const particleClouds = [
    { selector: '.cloudA', count: 28, radius: 47, offset: 0 },
    { selector: '.cloudB', count: 22, radius: 39, offset: 8 },
    { selector: '.cloudC', count: 18, radius: 31, offset: 15 }
  ];

  particleClouds.forEach((config, layerIndex) => {
    const cloud = heroUniverse.querySelector(config.selector);
    if (!cloud) return;
    for (let i = 0; i < config.count; i += 1) {
      const dot = document.createElement('i');
      const angle = ((360 / config.count) * i + config.offset + ((i % 3) - 1) * 1.8) * Math.PI / 180;
      const jitter = ((i * 7 + layerIndex * 5) % 7) - 3;
      const radius = config.radius + jitter * .45;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      const size = 2 + ((i + layerIndex) % 4);
      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.animationDelay = `${((i * 0.037) + layerIndex * 0.11).toFixed(2)}s`;
      cloud.appendChild(dot);
    }
  });
}

if (!document.getElementById('hoodbtc-reference-hud')) {
  const style = document.createElement('style');
  style.id = 'hoodbtc-reference-hud';
  style.textContent = `
    .referenceHud.logoUniverse{
      width:360px!important;height:360px!important;max-width:88vw!important;aspect-ratio:1!important;
      margin:2px auto -3px!important;position:relative!important;display:grid!important;place-items:center!important;
      overflow:visible!important;isolation:isolate!important;filter:drop-shadow(0 0 24px rgba(76,243,122,.12))
    }
    .referenceHud::before{
      content:"";position:absolute;inset:-7%;border-radius:50%;z-index:-3;
      background:radial-gradient(circle,rgba(75,255,105,.17) 0 16%,rgba(29,131,54,.07) 43%,transparent 72%);
      filter:blur(12px);animation:hudBreath 3.2s ease-in-out infinite
    }
    .referenceHud::after{
      content:"";position:absolute;left:8%;right:8%;bottom:0;height:16%;z-index:0;border-radius:50%;
      background:radial-gradient(ellipse,rgba(76,243,122,.22),rgba(76,243,122,.055) 45%,transparent 72%);
      filter:blur(8px);animation:platformPulse 2.4s ease-in-out infinite
    }

    .referenceHud .hudHalo{position:absolute;inset:22%;border-radius:50%;z-index:2;
      box-shadow:0 0 0 2px rgba(148,255,50,.92),0 0 16px rgba(135,255,35,.55),inset 0 0 26px rgba(76,243,122,.09);
      animation:hudBreath 2.8s ease-in-out infinite
    }

    .referenceHud .hudCross{position:absolute;z-index:1;opacity:.38;filter:drop-shadow(0 0 5px rgba(76,243,122,.55));pointer-events:none}
    .referenceHud .crossH{left:-2%;right:-2%;top:50%;height:1px;background:linear-gradient(90deg,transparent,rgba(76,243,122,.22) 17%,rgba(132,255,154,.88) 50%,rgba(76,243,122,.22) 83%,transparent)}
    .referenceHud .crossV{top:-5%;bottom:-2%;left:50%;width:1px;background:linear-gradient(180deg,transparent,rgba(76,243,122,.22) 20%,rgba(132,255,154,.85) 50%,rgba(76,243,122,.22) 80%,transparent)}

    .referenceHud .hudRing{position:absolute;border-radius:50%;z-index:1;will-change:transform;transform-origin:50% 50%;pointer-events:none}
    .referenceHud .hudRing::before,.referenceHud .hudRing::after{content:"";position:absolute;inset:0;border-radius:50%}
    .referenceHud .hudRing::before{
      background:
        repeating-conic-gradient(from 0deg,rgba(111,255,137,.88) 0 .65deg,transparent .65deg 2.7deg),
        repeating-conic-gradient(from 19deg,transparent 0 5.2deg,rgba(76,243,122,.30) 5.2deg 5.9deg,transparent 5.9deg 10.5deg),
        radial-gradient(circle,transparent 0 83%,rgba(76,243,122,.52) 83.3% 83.9%,transparent 84.3%);
      -webkit-mask:radial-gradient(circle,transparent 0 72%,#000 72.5% 91%,transparent 91.5%);
      mask:radial-gradient(circle,transparent 0 72%,#000 72.5% 91%,transparent 91.5%);
      filter:drop-shadow(0 0 4px rgba(76,243,122,.6))
    }
    .referenceHud .hudRing::after{border:1px solid rgba(76,243,122,.24);inset:4%;box-shadow:inset 0 0 12px rgba(76,243,122,.055)}
    .referenceHud .hudRing i,.referenceHud .hudRing b{position:absolute;border-radius:50%;background:#57ff7e;box-shadow:0 0 10px #4cf37a,0 0 22px rgba(76,243,122,.58)}
    .referenceHud .hudRing i{width:7px;height:7px;top:49%;left:-3px}
    .referenceHud .hudRing b{width:4px;height:4px;top:8%;right:21%}

    .referenceHud .ring01{inset:0;animation:spinCW 5.4s linear infinite}
    .referenceHud .ring02{inset:7%;animation:spinCCW 3.1s linear infinite}.referenceHud .ring02::before{transform:rotate(11deg);opacity:.82}
    .referenceHud .ring03{inset:14%;animation:spinCW 2.05s linear infinite}.referenceHud .ring03::before{transform:rotate(27deg)}
    .referenceHud .ring04{inset:22%;animation:spinCCW 1.35s linear infinite}.referenceHud .ring04::before{opacity:.88;transform:rotate(48deg)}
    .referenceHud .ring05{inset:30%;animation:spinCW 2.7s linear infinite}.referenceHud .ring05::before{opacity:.72;transform:rotate(73deg)}
    .referenceHud .ring06{inset:37%;animation:spinCCW 1.05s linear infinite}.referenceHud .ring06::before{opacity:.9;transform:rotate(101deg)}

    .referenceHud .particleCloud{position:absolute;inset:0;border-radius:50%;z-index:5;pointer-events:none;will-change:transform;transform-origin:50% 50%}
    .referenceHud .particleCloud i{position:absolute;display:block;border-radius:50%;background:#58ff7d;transform:translate(-50%,-50%);box-shadow:0 0 7px #4cf37a,0 0 15px rgba(76,243,122,.75),0 0 26px rgba(76,243,122,.28);animation:particleTwinkle .62s ease-in-out infinite alternate}
    .referenceHud .cloudA{animation:spinCW 1.55s linear infinite}
    .referenceHud .cloudB{animation:spinCCW 1.08s linear infinite}
    .referenceHud .cloudC{animation:spinCW .82s linear infinite}

    .referenceHud .techGear{position:absolute;z-index:3;border-radius:50%;width:38px;height:38px;
      background:repeating-conic-gradient(#75ff91 0 4deg,#102516 4deg 10deg);
      -webkit-mask:radial-gradient(circle,transparent 0 28%,#000 30% 46%,transparent 48% 57%,#000 59% 100%);
      mask:radial-gradient(circle,transparent 0 28%,#000 30% 46%,transparent 48% 57%,#000 59% 100%);
      filter:drop-shadow(0 0 6px rgba(76,243,122,.55));animation:gearSpin .9s linear infinite
    }
    .referenceHud .gear1{left:8%;top:9%}.referenceHud .gear2{right:5%;top:16%;width:45px;height:45px;animation-direction:reverse;animation-duration:.72s}
    .referenceHud .gear3{left:2%;bottom:17%;width:34px;height:34px;animation-duration:1.05s}.referenceHud .gear4{right:11%;bottom:9%;width:29px;height:29px;animation-direction:reverse;animation-duration:.64s}

    .referenceHud .hudNode{position:absolute;z-index:6;width:5px;height:5px;border-radius:50%;background:#4cf37a;box-shadow:0 0 9px #4cf37a,0 0 20px rgba(76,243,122,.5);animation:nodeBlink .72s ease-in-out infinite alternate}
    .referenceHud .n1{left:17%;top:26%}.referenceHud .n2{right:14%;top:28%;animation-delay:.1s}.referenceHud .n3{left:9%;top:51%;animation-delay:.2s}.referenceHud .n4{right:7%;top:55%;animation-delay:.3s}
    .referenceHud .n5{left:25%;bottom:18%;animation-delay:.4s}.referenceHud .n6{right:24%;bottom:17%;animation-delay:.5s}.referenceHud .n7{left:47%;top:4%;animation-delay:.6s}.referenceHud .n8{right:46%;bottom:4%;animation-delay:.7s}

    .referenceHud .platformDisc{position:absolute;z-index:1;left:18%;right:18%;bottom:2%;height:11%;border-radius:50%;border:1px solid rgba(76,243,122,.42);box-shadow:0 0 13px rgba(76,243,122,.12),inset 0 0 12px rgba(76,243,122,.08);animation:discSpin 1.5s linear infinite}
    .referenceHud .disc2{left:27%;right:27%;bottom:4.3%;height:6.5%;border-style:dashed;animation-direction:reverse;animation-duration:.85s}

    .referenceHud .hudLogoCore{
      width:46%!important;height:46%!important;aspect-ratio:1!important;position:relative!important;z-index:8!important;
      border-radius:50%!important;overflow:hidden!important;padding:0!important;background:#020403!important;
      border:0!important;box-shadow:none!important;animation:heroSlowFloat 4.6s ease-in-out infinite!important;
      will-change:transform!important;filter:drop-shadow(0 0 12px rgba(118,255,83,.45)) drop-shadow(0 0 28px rgba(76,243,122,.22))
    }
    .referenceHud .hudLogoCore img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;object-fit:cover!important;object-position:center!important;border-radius:50%!important;display:block!important;transform:none!important;animation:none!important}

    @keyframes spinCW{to{transform:rotate(360deg)}}
    @keyframes spinCCW{to{transform:rotate(-360deg)}}
    @keyframes gearSpin{to{transform:rotate(360deg)}}
    @keyframes discSpin{to{transform:rotate(360deg)}}
    @keyframes heroSlowFloat{0%,100%{transform:translate3d(0,-5px,0)}50%{transform:translate3d(0,9px,0)}}
    @keyframes hudBreath{0%,100%{opacity:.72;transform:scale(.985)}50%{opacity:1;transform:scale(1.025)}}
    @keyframes platformPulse{0%,100%{opacity:.45;transform:scaleX(.94)}50%{opacity:.9;transform:scaleX(1.05)}}
    @keyframes nodeBlink{from{opacity:.35;transform:scale(.8)}to{opacity:1;transform:scale(1.45)}}
    @keyframes particleTwinkle{from{opacity:.45;filter:brightness(.9)}to{opacity:1;filter:brightness(1.4)}}

    @media(max-width:900px){
      body{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
      main,header,footer,section{max-width:100%!important}
      .shell{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important}
      .topbar{height:72px!important;background:#020403!important;border-bottom:1px solid #102418!important;backdrop-filter:none!important}
      .nav{height:72px!important;padding:0!important}.brand{gap:9px!important;font-size:18px!important;letter-spacing:-.8px!important}.brand img{width:42px!important;height:42px!important}
      .menu-btn{display:block!important;margin-left:auto!important;font-size:28px!important;line-height:1!important;padding:3px 0 3px 10px!important}.mobilePanel{top:72px!important}
      .heroFocus{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important;padding:24px 0 22px!important;min-height:0!important}
      .heroCenter{width:100%!important;max-width:430px!important;margin:0 auto!important;text-align:center!important}.status{display:block!important;margin:0 0 3px!important;font-size:9px!important;letter-spacing:3.15px!important;line-height:1.2!important}.status i{width:8px!important;height:8px!important;margin-right:10px!important}
      .referenceHud.logoUniverse{width:342px!important;height:342px!important;max-width:88vw!important;margin:0 auto -2px!important}
      .heroEyebrow{margin:0 0 14px!important;font-size:7.3px!important;letter-spacing:2.25px!important;line-height:1.15!important;color:#6f7b73!important}
      .heroCenter h1{font-size:48px!important;line-height:.95!important;letter-spacing:-3.5px!important;max-width:410px!important;margin:0 auto 18px!important;overflow-wrap:normal!important;word-break:normal!important}
      .heroLead{font-size:14px!important;line-height:1.58!important;max-width:370px!important;color:#8f9992!important;margin-left:auto!important;margin-right:auto!important}
      .heroActions{width:100%!important;display:flex!important;flex-direction:column!important;gap:10px!important;margin-top:22px!important}.heroActions>a{width:100%!important;max-width:100%!important;height:56px!important;padding:0 18px!important;border-radius:999px!important;justify-content:center!important;font-size:15px!important;font-weight:800!important}.heroActions .mainTrade{background:var(--green)!important;color:#041008!important;border:1px solid var(--green)!important}.heroActions .ghost{background:#030604!important;color:#f5f7f5!important;border:1px solid #334039!important}.heroActions .ghost:last-child{background:var(--green)!important;color:#041008!important;border-color:var(--green)!important}
      .trustLine{margin-top:20px!important;padding-bottom:2px!important;font-size:6.2px!important;letter-spacing:.52px!important;gap:7px!important;color:#59625c!important;justify-content:center!important;white-space:nowrap!important;flex-wrap:nowrap!important}.trustLine i{width:3px!important;height:3px!important;flex:0 0 3px!important}.heroFootnote{display:none!important}
    }
    @media(max-width:430px){
      .referenceHud.logoUniverse{width:306px!important;height:306px!important;max-width:86vw!important}.referenceHud .techGear{transform:scale(.9)}
      .heroCenter h1{font-size:44px!important;max-width:370px!important}.heroLead{font-size:13.5px!important;max-width:350px!important}
    }
    @media(prefers-reduced-motion:reduce){
      .referenceHud .hudRing,.referenceHud .particleCloud,.referenceHud .particleCloud i,.referenceHud .techGear,.referenceHud .platformDisc,.referenceHud .hudNode,.referenceHud .hudLogoCore,.referenceHud::before,.referenceHud::after{animation:none!important}
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

/* Replace temporary community letters with the real brand marks for the existing accounts only. */
const socialBrandIcons = {
  x: `<svg viewBox="0 0 24 24" role="img" aria-label="X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" role="img" aria-label="TikTok"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.144 1.588 5.945L.056 24l6.3-1.652a11.87 11.87 0 005.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  snapchat: `<svg viewBox="0 0 24 24" role="img" aria-label="Snapchat"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>`
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
  mark.setAttribute('aria-hidden', 'true');
});

if (!document.getElementById('hoodbtc-social-brand-style')) {
  const socialStyle = document.createElement('style');
  socialStyle.id = 'hoodbtc-social-brand-style';
  socialStyle.textContent = `
    .socialMark{width:38px!important;height:38px!important;border-radius:11px!important;display:grid!important;place-items:center!important;background:#070b08!important}
    .socialMark svg{width:21px;height:21px;display:block;fill:currentColor}
    .social-x{color:#fff!important;border-color:#343b36!important}
    .social-tiktok{color:#fff!important;border-color:#2f3e35!important;filter:drop-shadow(-1px 0 0 #25f4ee) drop-shadow(1px 0 0 #fe2c55)}
    .social-whatsapp{color:#25D366!important;border-color:rgba(37,211,102,.38)!important;box-shadow:inset 0 0 18px rgba(37,211,102,.05)}
    .social-snapchat{color:#FFFC00!important;border-color:rgba(255,252,0,.34)!important;box-shadow:inset 0 0 18px rgba(255,252,0,.04)}
  `;
  document.head.appendChild(socialStyle);
}
