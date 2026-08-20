(() => {
  const init = () => {
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

    /* Header: use the newly supplied H artwork, cropped around the mark. */
    const headerLogo = document.querySelector('.brand img');
    if (headerLogo) {
      headerLogo.src = '/IMG_8612.jpeg';
      headerLogo.alt = 'HOODBTC';
      headerLogo.classList.add('newHeaderLogo');
    }

    /* New full-artwork hero. Every circular layer around/below the H rotates. */
    const heroUniverse = document.querySelector('.logoUniverse');
    if (heroUniverse) {
      heroUniverse.className = 'logoUniverse imageHeroV3';
      heroUniverse.innerHTML = `
        <img class="heroArtworkV3" src="/IMG_8612.jpeg" alt="" aria-hidden="true">

        <span class="rotorRing rr1"><i></i><b></b></span>
        <span class="rotorRing rr2"><i></i><b></b></span>
        <span class="rotorRing rr3"><i></i><b></b></span>
        <span class="rotorRing rr4"><i></i><b></b></span>
        <span class="rotorRing rr5"><i></i><b></b></span>

        <span class="particleField pf1"></span>
        <span class="particleField pf2"></span>
        <span class="particleField pf3"></span>

        <span class="techGearV3 tg1"></span>
        <span class="techGearV3 tg2"></span>
        <span class="techGearV3 tg3"></span>
        <span class="techGearV3 tg4"></span>

        <span class="baseRotor br1"><i></i></span>
        <span class="baseRotor br2"><i></i></span>
        <span class="baseRotor br3"><i></i></span>

        <span class="sparkV3 sp1"></span>
        <span class="sparkV3 sp2"></span>
        <span class="sparkV3 sp3"></span>
        <span class="sparkV3 sp4"></span>
      `;

      const fields = [
        { selector: '.pf1', count: 38, radiusX: 46, radiusY: 39, offset: 0 },
        { selector: '.pf2', count: 31, radiusX: 39, radiusY: 33, offset: 7 },
        { selector: '.pf3', count: 24, radiusX: 32, radiusY: 27, offset: 14 }
      ];

      fields.forEach((config, layerIndex) => {
        const field = heroUniverse.querySelector(config.selector);
        if (!field) return;
        for (let i = 0; i < config.count; i += 1) {
          const dot = document.createElement('i');
          const angle = ((360 / config.count) * i + config.offset) * Math.PI / 180;
          const jitter = ((i * 7 + layerIndex * 5) % 7) - 3;
          const x = 50 + Math.cos(angle) * (config.radiusX + jitter * .34);
          const y = 42 + Math.sin(angle) * (config.radiusY + jitter * .29);
          const size = 2 + ((i + layerIndex) % 4);
          dot.style.left = `${x}%`;
          dot.style.top = `${y}%`;
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.animationDelay = `${(i * .035 + layerIndex * .08).toFixed(2)}s`;
          field.appendChild(dot);
        }
      });
    }

    if (!document.getElementById('hoodbtc-v3-style')) {
      const style = document.createElement('style');
      style.id = 'hoodbtc-v3-style';
      style.textContent = `
        .newHeaderLogo{
          width:42px!important;height:42px!important;object-fit:cover!important;object-position:50% 43%!important;
          border-radius:12px!important;filter:drop-shadow(0 0 9px rgba(76,243,122,.42))!important;
          transform:scale(1.08)
        }

        .imageHeroV3.logoUniverse{
          width:360px!important;height:426px!important;max-width:90vw!important;margin:0 auto -6px!important;
          position:relative!important;display:block!important;overflow:visible!important;isolation:isolate!important
        }
        .imageHeroV3::before{
          content:"";position:absolute;left:3%;right:3%;top:2%;height:78%;border-radius:50%;z-index:0;
          background:radial-gradient(circle,rgba(76,243,122,.15),rgba(76,243,122,.045) 48%,transparent 72%);
          filter:blur(14px);animation:v3Pulse 2.5s ease-in-out infinite
        }
        .imageHeroV3 .heroArtworkV3{
          position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;
          object-position:center!important;display:block!important;z-index:1!important;border-radius:0!important;
          filter:drop-shadow(0 0 14px rgba(76,243,122,.18));animation:v3Float 4.8s ease-in-out infinite!important
        }

        .imageHeroV3 .rotorRing{
          position:absolute;left:50%;top:42%;border-radius:50%;z-index:3;pointer-events:none;transform-origin:50% 50%;
          border:1px solid rgba(94,255,126,.27);box-shadow:0 0 8px rgba(76,243,122,.11),inset 0 0 10px rgba(76,243,122,.05)
        }
        .imageHeroV3 .rotorRing::before{
          content:"";position:absolute;inset:-1px;border-radius:50%;
          background:repeating-conic-gradient(from 0deg,rgba(112,255,139,.92) 0 .7deg,transparent .7deg 4.1deg);
          -webkit-mask:radial-gradient(circle,transparent 0 91%,#000 91.5% 100%);mask:radial-gradient(circle,transparent 0 91%,#000 91.5% 100%);
          filter:drop-shadow(0 0 3px rgba(76,243,122,.65))
        }
        .imageHeroV3 .rotorRing i,.imageHeroV3 .rotorRing b{
          position:absolute;border-radius:50%;background:#58ff7c;box-shadow:0 0 8px #4cf37a,0 0 17px rgba(76,243,122,.62)
        }
        .imageHeroV3 .rotorRing i{width:6px;height:6px;left:-3px;top:48%}
        .imageHeroV3 .rotorRing b{width:4px;height:4px;right:15%;top:2%}
        .imageHeroV3 .rr1{width:316px;height:316px;margin:-158px 0 0 -158px;animation:v3CW 4.1s linear infinite}
        .imageHeroV3 .rr2{width:280px;height:280px;margin:-140px 0 0 -140px;animation:v3CCW 2.8s linear infinite}
        .imageHeroV3 .rr3{width:244px;height:244px;margin:-122px 0 0 -122px;animation:v3CW 1.9s linear infinite}
        .imageHeroV3 .rr4{width:208px;height:208px;margin:-104px 0 0 -104px;animation:v3CCW 1.25s linear infinite}
        .imageHeroV3 .rr5{width:174px;height:174px;margin:-87px 0 0 -87px;animation:v3CW .95s linear infinite}

        .imageHeroV3 .particleField{position:absolute;inset:0;z-index:5;pointer-events:none;transform-origin:50% 42%;will-change:transform}
        .imageHeroV3 .particleField i{
          position:absolute;display:block;border-radius:50%;background:#59ff7e;transform:translate(-50%,-50%);
          box-shadow:0 0 7px #4cf37a,0 0 15px rgba(76,243,122,.78);animation:v3Twinkle .55s ease-in-out infinite alternate
        }
        .imageHeroV3 .pf1{animation:v3CW 1.48s linear infinite}
        .imageHeroV3 .pf2{animation:v3CCW 1.02s linear infinite}
        .imageHeroV3 .pf3{animation:v3CW .77s linear infinite}

        .imageHeroV3 .techGearV3{
          position:absolute;z-index:6;border-radius:50%;background:repeating-conic-gradient(#79ff94 0 4deg,#0c1d11 4deg 10deg);
          -webkit-mask:radial-gradient(circle,transparent 0 27%,#000 29% 48%,transparent 50% 57%,#000 59% 100%);
          mask:radial-gradient(circle,transparent 0 27%,#000 29% 48%,transparent 50% 57%,#000 59% 100%);
          filter:drop-shadow(0 0 6px rgba(76,243,122,.65));animation:v3CW .75s linear infinite
        }
        .imageHeroV3 .tg1{width:35px;height:35px;left:7%;top:13%}
        .imageHeroV3 .tg2{width:44px;height:44px;right:5%;top:17%;animation-name:v3CCW;animation-duration:.62s}
        .imageHeroV3 .tg3{width:32px;height:32px;left:5%;top:62%;animation-duration:.88s}
        .imageHeroV3 .tg4{width:29px;height:29px;right:11%;top:61%;animation-name:v3CCW;animation-duration:.7s}

        /* Rotating platform beneath the H artwork. */
        .imageHeroV3 .baseRotor{
          position:absolute;left:50%;z-index:8;border-radius:50%;pointer-events:none;transform-origin:50% 50%;
          border:1px solid rgba(91,255,126,.58);box-shadow:0 0 8px rgba(76,243,122,.35),inset 0 0 11px rgba(76,243,122,.11)
        }
        .imageHeroV3 .baseRotor::before{
          content:"";position:absolute;inset:8%;border-radius:50%;border:1px dashed rgba(123,255,147,.75)
        }
        .imageHeroV3 .baseRotor i{
          position:absolute;width:7px;height:7px;border-radius:50%;background:#70ff8c;top:47%;left:-4px;
          box-shadow:0 0 9px #4cf37a,0 0 18px rgba(76,243,122,.75)
        }
        .imageHeroV3 .br1{width:270px;height:72px;bottom:23px;margin-left:-135px;animation:v3CW 1.55s linear infinite}
        .imageHeroV3 .br2{width:224px;height:55px;bottom:31px;margin-left:-112px;animation:v3CCW 1.02s linear infinite}
        .imageHeroV3 .br3{width:176px;height:40px;bottom:38px;margin-left:-88px;animation:v3CW .72s linear infinite}

        .imageHeroV3 .sparkV3{position:absolute;z-index:9;width:4px;height:4px;border-radius:50%;background:#66ff85;box-shadow:0 0 11px #4cf37a,0 0 24px rgba(76,243,122,.7);animation:v3Spark .6s ease-in-out infinite alternate}
        .imageHeroV3 .sp1{left:16%;top:28%}.imageHeroV3 .sp2{right:15%;top:31%;animation-delay:.14s}.imageHeroV3 .sp3{left:27%;top:64%;animation-delay:.28s}.imageHeroV3 .sp4{right:25%;top:65%;animation-delay:.42s}

        @keyframes v3CW{to{transform:rotate(360deg)}}
        @keyframes v3CCW{to{transform:rotate(-360deg)}}
        @keyframes v3Float{0%,100%{transform:translate3d(0,-3px,0)}50%{transform:translate3d(0,6px,0)}}
        @keyframes v3Pulse{0%,100%{opacity:.55;transform:scale(.985)}50%{opacity:1;transform:scale(1.025)}}
        @keyframes v3Twinkle{from{opacity:.38;filter:brightness(.9)}to{opacity:1;filter:brightness(1.45)}}
        @keyframes v3Spark{from{opacity:.32;transform:scale(.75)}to{opacity:1;transform:scale(1.55)}}

        @media(max-width:900px){
          body{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
          main,header,footer,section{max-width:100%!important}
          .shell{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important}
          .topbar{height:72px!important;background:#020403!important;border-bottom:1px solid #102418!important;backdrop-filter:none!important}
          .nav{height:72px!important;padding:0!important}.brand{gap:9px!important;font-size:18px!important;letter-spacing:-.8px!important}
          .brand img.newHeaderLogo{width:42px!important;height:42px!important}
          .menu-btn{display:block!important;margin-left:auto!important;font-size:28px!important;line-height:1!important;padding:3px 0 3px 10px!important}.mobilePanel{top:72px!important}
          .heroFocus{width:calc(100% - 28px)!important;max-width:none!important;margin-left:14px!important;margin-right:14px!important;padding:24px 0 22px!important;min-height:0!important}
          .heroCenter{width:100%!important;max-width:430px!important;margin:0 auto!important;text-align:center!important}.status{display:block!important;margin:0 0 3px!important;font-size:9px!important;letter-spacing:3.15px!important;line-height:1.2!important}.status i{width:8px!important;height:8px!important;margin-right:10px!important}
          .imageHeroV3.logoUniverse{width:320px!important;height:379px!important;max-width:88vw!important;margin:0 auto -3px!important}
          .imageHeroV3 .rr1{width:282px;height:282px;margin:-141px 0 0 -141px}.imageHeroV3 .rr2{width:250px;height:250px;margin:-125px 0 0 -125px}.imageHeroV3 .rr3{width:218px;height:218px;margin:-109px 0 0 -109px}.imageHeroV3 .rr4{width:186px;height:186px;margin:-93px 0 0 -93px}.imageHeroV3 .rr5{width:155px;height:155px;margin:-77.5px 0 0 -77.5px}
          .imageHeroV3 .br1{width:242px;height:64px;bottom:20px;margin-left:-121px}.imageHeroV3 .br2{width:200px;height:49px;bottom:27px;margin-left:-100px}.imageHeroV3 .br3{width:158px;height:36px;bottom:33px;margin-left:-79px}
          .heroEyebrow{margin:0 0 14px!important;font-size:7.3px!important;letter-spacing:2.25px!important;line-height:1.15!important;color:#6f7b73!important}
          .heroCenter h1{font-size:48px!important;line-height:.95!important;letter-spacing:-3.5px!important;max-width:410px!important;margin:0 auto 18px!important;overflow-wrap:normal!important;word-break:normal!important}
          .heroLead{font-size:14px!important;line-height:1.58!important;max-width:370px!important;color:#8f9992!important;margin-left:auto!important;margin-right:auto!important}
          .heroActions{width:100%!important;display:flex!important;flex-direction:column!important;gap:10px!important;margin-top:22px!important}.heroActions>a{width:100%!important;max-width:100%!important;height:56px!important;padding:0 18px!important;border-radius:999px!important;justify-content:center!important;font-size:15px!important;font-weight:800!important}.heroActions .mainTrade{background:var(--green)!important;color:#041008!important;border:1px solid var(--green)!important}.heroActions .ghost{background:#030604!important;color:#f5f7f5!important;border:1px solid #334039!important}.heroActions .ghost:last-child{background:var(--green)!important;color:#041008!important;border-color:var(--green)!important}
          .trustLine{margin-top:20px!important;padding-bottom:2px!important;font-size:6.2px!important;letter-spacing:.52px!important;gap:7px!important;color:#59625c!important;justify-content:center!important;white-space:nowrap!important;flex-wrap:nowrap!important}.trustLine i{width:3px!important;height:3px!important;flex:0 0 3px!important}.heroFootnote{display:none!important}
        }
        @media(max-width:430px){
          .imageHeroV3.logoUniverse{width:300px!important;height:355px!important;max-width:86vw!important}
          .imageHeroV3 .rr1{width:264px;height:264px;margin:-132px 0 0 -132px}.imageHeroV3 .rr2{width:234px;height:234px;margin:-117px 0 0 -117px}.imageHeroV3 .rr3{width:204px;height:204px;margin:-102px 0 0 -102px}.imageHeroV3 .rr4{width:174px;height:174px;margin:-87px 0 0 -87px}.imageHeroV3 .rr5{width:145px;height:145px;margin:-72.5px 0 0 -72.5px}
          .imageHeroV3 .br1{width:225px;height:59px;bottom:19px;margin-left:-112.5px}.imageHeroV3 .br2{width:187px;height:46px;bottom:25px;margin-left:-93.5px}.imageHeroV3 .br3{width:147px;height:33px;bottom:31px;margin-left:-73.5px}
          .heroCenter h1{font-size:44px!important;max-width:370px!important}.heroLead{font-size:13.5px!important;max-width:350px!important}
        }
        @media(prefers-reduced-motion:reduce){
          .imageHeroV3 .heroArtworkV3,.imageHeroV3 .rotorRing,.imageHeroV3 .particleField,.imageHeroV3 .particleField i,.imageHeroV3 .techGearV3,.imageHeroV3 .baseRotor,.imageHeroV3 .sparkV3,.imageHeroV3::before{animation:none!important}
        }
      `;
      document.head.appendChild(style);
    }

    /* Sticky mobile CTA stays hidden while hero is visible. */
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

    /* Official brand marks for the existing community cards only. */
    const socialBrandIcons = {
      x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
      tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
      whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.144 1.588 5.945L.056 24l6.3-1.652a11.87 11.87 0 005.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
      snapchat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>`
    };

    document.querySelectorAll('.communityGrid a').forEach((card) => {
      const mark = card.querySelector('.socialMark');
      if (!mark) return;
      const href = card.getAttribute('href') || '';
      let brand = '';
      if (href.includes('x.com/')) brand = 'x';
      else if (href.includes('tiktok.com/')) brand = 'tiktok';
      else if (href.includes('whatsapp.com/')) brand = 'whatsapp';
      else if (href.includes('snapchat.com/')) brand = 'snapchat';
      if (!socialBrandIcons[brand]) return;
      mark.innerHTML = socialBrandIcons[brand];
      mark.classList.add(`social-${brand}`);
      mark.setAttribute('aria-hidden', 'true');
    });

    if (!document.getElementById('hoodbtc-social-v3-style')) {
      const socialStyle = document.createElement('style');
      socialStyle.id = 'hoodbtc-social-v3-style';
      socialStyle.textContent = `
        .socialMark{width:38px!important;height:38px!important;border-radius:11px!important;display:grid!important;place-items:center!important;background:#070b08!important}
        .socialMark svg{width:21px;height:21px;display:block;fill:currentColor}
        .social-x{color:#fff!important;border-color:#343b36!important}
        .social-tiktok{color:#fff!important;border-color:#2f3e35!important;filter:drop-shadow(-1px 0 0 #25f4ee) drop-shadow(1px 0 0 #fe2c55)}
        .social-whatsapp{color:#25D366!important;border-color:rgba(37,211,102,.38)!important}
        .social-snapchat{color:#FFFC00!important;border-color:rgba(255,252,0,.34)!important}
      `;
      document.head.appendChild(socialStyle);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
