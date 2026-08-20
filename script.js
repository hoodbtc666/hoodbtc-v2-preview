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

/* Hero-only visual upgrade: neon H + independently rotating technical layers. */
const heroUniverse = document.querySelector('.logoUniverse');

if (heroUniverse) {
  heroUniverse.classList.add('hero-tech');
  heroUniverse.innerHTML = `
    <span class="techRing ringOuter">
      <i class="gear gearA"></i>
      <i class="gear gearB"></i>
      <i class="gear gearC"></i>
    </span>
    <span class="techRing ringMid">
      <i class="gear gearD"></i>
      <i class="gear gearE"></i>
    </span>
    <span class="techRing ringInner"></span>
    <span class="particleField fieldA"></span>
    <span class="particleField fieldB"></span>
    <span class="orbit orbitA"><i></i></span>
    <span class="orbit orbitB"><i></i></span>
    <span class="orbit orbitC"><i></i></span>
    <span class="spark s1"></span>
    <span class="spark s2"></span>
    <span class="spark s3"></span>
    <span class="spark s4"></span>
    <span class="spark s5"></span>
    <span class="spark s6"></span>
    <span class="spark s7"></span>
    <span class="spark s8"></span>
    <div class="logoCore">
      <svg class="heroHMark" viewBox="0 0 420 432" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <defs>
          <linearGradient id="heroHFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#07130a"/>
            <stop offset=".48" stop-color="#102e16"/>
            <stop offset="1" stop-color="#061008"/>
          </linearGradient>
          <linearGradient id="heroHEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#d2ff86"/>
            <stop offset=".25" stop-color="#84ff36"/>
            <stop offset=".58" stop-color="#36f35f"/>
            <stop offset="1" stop-color="#0fbf45"/>
          </linearGradient>
          <filter id="heroHGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="heroHClip">
            <polygon points="72,82 170,36 170,212 72,305"/>
            <polygon points="72,305 170,213 170,394 112,374 72,345"/>
            <polygon points="258,238 352,180 352,398 258,398"/>
            <path d="M82 332 L208 204 L252 245 L327 166" fill="none" stroke="#fff" stroke-width="62" stroke-linejoin="miter" stroke-linecap="square"/>
            <polygon points="283,118 374,86 350,177 326,151 286,194 249,157"/>
          </clipPath>
        </defs>

        <g filter="url(#heroHGlow)">
          <g fill="url(#heroHFill)" stroke="#0a5e28" stroke-width="18" stroke-linejoin="miter">
            <polygon points="72,82 170,36 170,212 72,305"/>
            <polygon points="72,305 170,213 170,394 112,374 72,345"/>
            <polygon points="258,238 352,180 352,398 258,398"/>
          </g>
          <g fill="url(#heroHFill)" stroke="url(#heroHEdge)" stroke-width="7" stroke-linejoin="miter">
            <polygon points="72,82 170,36 170,212 72,305"/>
            <polygon points="72,305 170,213 170,394 112,374 72,345"/>
            <polygon points="258,238 352,180 352,398 258,398"/>
          </g>

          <path d="M82 332 L208 204 L252 245 L327 166" fill="none" stroke="#08250f" stroke-width="74" stroke-linejoin="miter" stroke-linecap="square"/>
          <path d="M82 332 L208 204 L252 245 L327 166" fill="none" stroke="url(#heroHEdge)" stroke-width="58" stroke-linejoin="miter" stroke-linecap="square"/>
          <path d="M82 332 L208 204 L252 245 L327 166" fill="none" stroke="#d8ff9a" stroke-width="5" stroke-linejoin="miter" stroke-linecap="square"/>

          <polygon points="283,118 374,86 350,177 326,151 286,194 249,157" fill="#08250f" stroke="#08250f" stroke-width="20" stroke-linejoin="miter"/>
          <polygon points="283,118 374,86 350,177 326,151 286,194 249,157" fill="url(#heroHFill)" stroke="url(#heroHEdge)" stroke-width="7" stroke-linejoin="miter"/>
        </g>

        <g clip-path="url(#heroHClip)" opacity=".62" stroke="#61ff78" stroke-width="1">
          <path d="M88 110 V292 M102 104 V282 M118 95 V268 M136 86 V250 M151 78 V230"/>
          <path d="M275 255 V382 M291 246 V380 M309 235 V375 M327 224 V368 M341 213 V350"/>
          <path d="M65 349 H154 M96 320 H186 M135 286 H218 M182 245 H263 M229 207 H306 M269 174 H346"/>
          <path d="M88 160 H132 V132 H155 M94 227 H120 V207 H151 M283 296 H315 V274 H342 M277 340 H306 V321 H338"/>
          <circle cx="132" cy="132" r="3" fill="#b7ff79" stroke="none"/>
          <circle cx="120" cy="207" r="3" fill="#b7ff79" stroke="none"/>
          <circle cx="315" cy="274" r="3" fill="#b7ff79" stroke="none"/>
          <circle cx="306" cy="321" r="3" fill="#b7ff79" stroke="none"/>
        </g>
      </svg>
    </div>`;

  if (!document.getElementById('hoodbtc-hero-tech-style')) {
    const heroStyle = document.createElement('style');
    heroStyle.id = 'hoodbtc-hero-tech-style';
    heroStyle.textContent = `
      .hero-tech.logoUniverse{
        width:min(420px,92vw);aspect-ratio:1;margin:10px auto 2px;
        position:relative;display:grid;place-items:center;isolation:isolate;
        filter:drop-shadow(0 0 22px rgba(76,243,122,.10));overflow:visible
      }
      .hero-tech.logoUniverse::before{
        content:"";position:absolute;inset:-8%;border-radius:50%;
        background:radial-gradient(circle,rgba(76,243,122,.13) 0 26%,rgba(76,243,122,.055) 45%,transparent 72%);
        filter:blur(10px);z-index:-2
      }
      .hero-tech.logoUniverse::after{
        content:"";position:absolute;inset:25%;border-radius:50%;
        background:radial-gradient(circle,rgba(8,18,11,.98) 0 42%,rgba(7,14,9,.78) 60%,transparent 72%);
        box-shadow:0 0 60px rgba(76,243,122,.10);z-index:1
      }

      .hero-tech .techRing{position:absolute;inset:0;border-radius:50%;transform-origin:50% 50%;will-change:transform;z-index:1}
      .hero-tech .techRing::before{
        content:"";position:absolute;inset:0;border-radius:50%;
        background:
          repeating-conic-gradient(from 8deg,rgba(118,255,145,.92) 0 .7deg,rgba(76,243,122,.22) .7deg 1.35deg,transparent 1.35deg 3.8deg),
          repeating-conic-gradient(from 71deg,transparent 0 7deg,rgba(144,255,165,.52) 7deg 8deg,transparent 8deg 15deg),
          radial-gradient(circle,transparent 0 54%,rgba(76,243,122,.30) 54.4% 55%,transparent 55.5% 61%,rgba(76,243,122,.16) 61.3% 62%,transparent 62.4% 70%,rgba(76,243,122,.42) 70.2% 70.8%,transparent 71.2%);
        -webkit-mask:radial-gradient(circle,transparent 0 48%,#000 49% 76%,transparent 77%);
        mask:radial-gradient(circle,transparent 0 48%,#000 49% 76%,transparent 77%);
        filter:drop-shadow(0 0 5px rgba(76,243,122,.78));opacity:.84
      }
      .hero-tech .techRing::after{content:"";position:absolute;inset:6%;border:1px solid rgba(76,243,122,.34);border-radius:50%;box-shadow:inset 0 0 18px rgba(76,243,122,.08),0 0 9px rgba(76,243,122,.08)}
      .hero-tech .ringOuter{inset:-1%;animation:heroTechSpin 4.2s linear infinite}
      .hero-tech .ringOuter::before{opacity:.90}
      .hero-tech .ringMid{inset:7.5%;animation:heroTechSpinReverse 2.65s linear infinite}
      .hero-tech .ringMid::before{opacity:.72;transform:rotate(19deg)}
      .hero-tech .ringInner{inset:16%;animation:heroTechSpin 1.55s linear infinite}
      .hero-tech .ringInner::before{opacity:.84;transform:rotate(41deg)}

      .hero-tech .gear{
        position:absolute;width:11%;aspect-ratio:1;border-radius:50%;
        background:repeating-conic-gradient(from 0deg,#77ff90 0 3deg,#0b1b0f 3deg 9deg);
        border:1px solid rgba(118,255,145,.64);box-shadow:0 0 15px rgba(76,243,122,.34);
        animation:heroGearSpin .82s linear infinite;z-index:2
      }
      .hero-tech .gear::before{
        content:"";position:absolute;inset:20%;border-radius:50%;
        background:radial-gradient(circle,#071009 0 24%,#57ff78 25% 30%,#0b1a0e 31% 55%,rgba(76,243,122,.55) 56% 60%,#071009 61%);
        box-shadow:inset 0 0 8px rgba(76,243,122,.42)
      }
      .hero-tech .gearA{left:11%;top:7%}
      .hero-tech .gearB{right:3%;top:18%;animation-direction:reverse;animation-duration:.66s}
      .hero-tech .gearC{left:2%;bottom:12%;animation-duration:.94s}
      .hero-tech .gearD{right:9%;bottom:5%;width:9%;animation-direction:reverse;animation-duration:.72s}
      .hero-tech .gearE{left:6%;top:34%;width:8%;animation-duration:.60s}

      .hero-tech .particleField{
        position:absolute;inset:1%;border-radius:50%;z-index:3;will-change:transform;
        background:
          radial-gradient(circle at 50% 1%,#63ff82 0 2px,transparent 3px),
          radial-gradient(circle at 66% 4%,#50ff78 0 2px,transparent 3px),
          radial-gradient(circle at 81% 13%,#84ff9b 0 3px,transparent 4px),
          radial-gradient(circle at 94% 27%,#48ff70 0 2px,transparent 3px),
          radial-gradient(circle at 99% 45%,#7cff96 0 3px,transparent 4px),
          radial-gradient(circle at 95% 67%,#52ff78 0 2px,transparent 3px),
          radial-gradient(circle at 84% 84%,#7dff98 0 3px,transparent 4px),
          radial-gradient(circle at 66% 96%,#4cff7a 0 2px,transparent 3px),
          radial-gradient(circle at 46% 100%,#6dff8c 0 3px,transparent 4px),
          radial-gradient(circle at 27% 94%,#48ff72 0 2px,transparent 3px),
          radial-gradient(circle at 11% 81%,#7cff96 0 3px,transparent 4px),
          radial-gradient(circle at 2% 61%,#4dff76 0 2px,transparent 3px),
          radial-gradient(circle at 4% 39%,#84ff9b 0 3px,transparent 4px),
          radial-gradient(circle at 15% 19%,#50ff78 0 2px,transparent 3px),
          radial-gradient(circle at 31% 6%,#76ff92 0 3px,transparent 4px);
        filter:drop-shadow(0 0 7px rgba(76,243,122,.88));animation:heroParticleSpin 1.08s linear infinite
      }
      .hero-tech .fieldB{inset:11%;opacity:.72;animation:heroParticleSpinReverse 1.72s linear infinite}

      .hero-tech .orbit{position:absolute;border:1px solid rgba(76,243,122,.25);border-radius:50%;will-change:transform;z-index:3}
      .hero-tech .orbit::before{content:"";position:absolute;inset:-1px;border-radius:50%;border-top:1px solid rgba(126,255,151,.92);border-right:1px dashed rgba(76,243,122,.44);border-bottom:1px solid transparent;filter:drop-shadow(0 0 5px rgba(76,243,122,.78))}
      .hero-tech .orbit i{position:absolute;width:8px;height:8px;background:var(--green);border-radius:50%;box-shadow:0 0 17px var(--green),0 0 32px rgba(76,243,122,.65);top:50%;left:-4px}
      .hero-tech .orbitA{inset:23%;animation:heroOrbitSpin .92s linear infinite}
      .hero-tech .orbitB{inset:12%;animation:heroOrbitSpinReverse 1.32s linear infinite;border-style:dashed}
      .hero-tech .orbitC{inset:2%;animation:heroOrbitSpin 1.95s linear infinite}
      .hero-tech .orbitB i{left:auto;right:-4px}
      .hero-tech .orbitC i{top:18%;left:auto;right:14%}

      .hero-tech .spark{position:absolute;width:4px;height:4px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green),0 0 24px rgba(76,243,122,.55);animation:heroSparkPulse .72s ease-in-out infinite alternate;z-index:4}
      .hero-tech .s1{left:12%;top:27%}.hero-tech .s2{right:13%;top:33%;animation-delay:.08s}.hero-tech .s3{left:20%;bottom:18%;animation-delay:.16s}.hero-tech .s4{right:22%;bottom:8%;animation-delay:.24s}.hero-tech .s5{top:6%;left:52%;animation-delay:.32s}.hero-tech .s6{left:5%;top:55%;animation-delay:.40s}.hero-tech .s7{right:4%;top:56%;animation-delay:.48s}.hero-tech .s8{left:48%;bottom:3%;animation-delay:.56s}

      .hero-tech .logoCore{
        width:64%;height:auto;aspect-ratio:auto;border:0;border-radius:0;background:none;box-shadow:none;overflow:visible;
        position:relative;display:grid;place-items:center;z-index:6;animation:heroHFloat 4.8s ease-in-out infinite;
        will-change:transform;filter:drop-shadow(0 0 9px rgba(105,255,126,.32)) drop-shadow(0 0 24px rgba(76,243,122,.18))
      }
      .hero-tech .logoCore::before{content:"";position:absolute;inset:12% 9%;background:radial-gradient(circle,rgba(76,243,122,.14),transparent 68%);filter:blur(18px);z-index:-1}
      .hero-tech .heroHMark{width:100%;height:auto;display:block;overflow:visible}

      @keyframes heroTechSpin{to{transform:rotate(360deg)}}
      @keyframes heroTechSpinReverse{to{transform:rotate(-360deg)}}
      @keyframes heroOrbitSpin{to{transform:rotate(360deg)}}
      @keyframes heroOrbitSpinReverse{to{transform:rotate(-360deg)}}
      @keyframes heroParticleSpin{to{transform:rotate(360deg)}}
      @keyframes heroParticleSpinReverse{to{transform:rotate(-360deg)}}
      @keyframes heroGearSpin{to{transform:rotate(360deg)}}
      @keyframes heroHFloat{0%,100%{transform:translate3d(0,-5px,0)}50%{transform:translate3d(0,10px,0)}}
      @keyframes heroSparkPulse{from{opacity:.35;transform:scale(.78)}to{opacity:1;transform:scale(1.4)}}

      @media(max-width:640px){
        .hero-tech.logoUniverse{width:min(360px,92vw);margin:2px auto 0}
        .hero-tech .logoCore{width:66%}
        .hero-tech .gear{width:10.5%}
      }
      @media(max-width:390px){.hero-tech.logoUniverse{width:min(342px,94vw)}}
      @media(prefers-reduced-motion:reduce){
        .hero-tech .techRing,.hero-tech .gear,.hero-tech .particleField,.hero-tech .orbit,.hero-tech .spark,.hero-tech .logoCore{animation:none!important}
      }
    `;
    document.head.appendChild(heroStyle);
  }
}

/* Never cover the hero buttons with the sticky mobile Trade CTA. */
const mobileCta = document.querySelector('.mobileCta');
const heroSection = document.querySelector('.heroFocus');

function updateMobileCtaVisibility() {
  if (!mobileCta || !heroSection) return;
  const shouldShow = window.innerWidth <= 640 && heroSection.getBoundingClientRect().bottom < 120;
  mobileCta.style.display = shouldShow ? 'block' : 'none';
}

if (mobileCta && heroSection) {
  updateMobileCtaVisibility();
  window.addEventListener('scroll', updateMobileCtaVisibility, { passive: true });
  window.addEventListener('resize', updateMobileCtaVisibility);
}
