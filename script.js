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

    .referenceHud .techGear{position:absolute;z-index:3;border-radius:50%;width:38px;height:38px;
      background:repeating-conic-gradient(#75ff91 0 4deg,#102516 4deg 10deg);
      -webkit-mask:radial-gradient(circle,transparent 0 28%,#000 30% 46%,transparent 48% 57%,#000 59% 100%);
      mask:radial-gradient(circle,transparent 0 28%,#000 30% 46%,transparent 48% 57%,#000 59% 100%);
      filter:drop-shadow(0 0 6px rgba(76,243,122,.55));animation:gearSpin .9s linear infinite
    }
    .referenceHud .gear1{left:8%;top:9%}.referenceHud .gear2{right:5%;top:16%;width:45px;height:45px;animation-direction:reverse;animation-duration:.72s}
    .referenceHud .gear3{left:2%;bottom:17%;width:34px;height:34px;animation-duration:1.05s}.referenceHud .gear4{right:11%;bottom:9%;width:29px;height:29px;animation-direction:reverse;animation-duration:.64s}

    .referenceHud .hudNode{position:absolute;z-index:4;width:5px;height:5px;border-radius:50%;background:#4cf37a;box-shadow:0 0 9px #4cf37a,0 0 20px rgba(76,243,122,.5);animation:nodeBlink .72s ease-in-out infinite alternate}
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
      .referenceHud .hudRing,.referenceHud .techGear,.referenceHud .platformDisc,.referenceHud .hudNode,.referenceHud .hudLogoCore,.referenceHud::before,.referenceHud::after{animation:none!important}
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
