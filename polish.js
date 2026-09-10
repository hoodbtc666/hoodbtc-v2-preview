(() => {
  const TRADE_URL = 'https://trade.hoodbtc.com';
  const FACTORY_URL = 'https://tokenfactory.hoodbtc.com';

  const externalLink = (href, label, className = '') =>
    `<a${className ? ` class="${className}"` : ''} href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

  function replaceNavigation() {
    const desktop = document.querySelector('.links');
    if (desktop) {
      desktop.innerHTML = `
        <a href="#ecosystem">Ecosystem</a>
        ${externalLink(TRADE_URL, 'Trade')}
        ${externalLink(FACTORY_URL, 'Token Factory')}
        <a href="#security">Security</a>
        <a href="#faq">FAQ</a>
        <a href="#community">Community</a>`;
    }

    const mobile = document.querySelector('.mobilePanel');
    if (mobile) {
      mobile.innerHTML = `
        <a href="#ecosystem">Ecosystem</a>
        ${externalLink(TRADE_URL, 'HOODBTC Trade ↗')}
        ${externalLink(FACTORY_URL, 'Token Factory ↗')}
        <a href="#connect">How to Connect</a>
        <a href="#security">Security</a>
        <a href="#faq">FAQ</a>
        <a href="#community">Community</a>
        ${externalLink(TRADE_URL, 'Trade Now ↗', 'mobileTrade')}`;

      const menuBtn = document.querySelector('.menu-btn');
      mobile.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobile.classList.remove('mobile-open');
          if (menuBtn) {
            menuBtn.textContent = '☰';
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Open navigation');
          }
        });
      });
    }
  }

  function polishHero() {
    const hero = document.querySelector('.heroFocus');
    if (!hero) return;
    hero.classList.add('ecosystemHero');

    const status = hero.querySelector('.status');
    if (status) status.innerHTML = '<i></i> 2 LIVE PRODUCTS';

    const eyebrow = hero.querySelector('.heroEyebrow');
    if (eyebrow) eyebrow.textContent = 'ONCHAIN PRODUCTS / ONE ECOSYSTEM';

    const title = hero.querySelector('h1');
    if (title) title.innerHTML = 'Trade. Build. <em>Stay onchain.</em>';

    const lead = hero.querySelector('.heroLead');
    if (lead) {
      lead.textContent = 'HOODBTC connects professional onchain trading with self-custodial multi-chain token creation under one focused ecosystem.';
    }

    const actions = hero.querySelector('.heroActions');
    if (actions) {
      actions.innerHTML = `
        ${externalLink(TRADE_URL, 'Open HOODBTC Trade ↗', 'primary mainTrade')}
        ${externalLink(FACTORY_URL, 'Create a Token ↗', 'ghost productAction')}
        <a class="ghost ecosystemAction" href="#ecosystem">Explore Ecosystem ↓</a>`;
    }

    const trust = hero.querySelector('.trustLine');
    if (trust) {
      trust.innerHTML = `
        <span>TRADE LIVE</span><i></i>
        <span>TOKEN FACTORY LIVE</span><i></i>
        <span>24/7 MARKETS*</span><i></i>
        <span>SELF-CUSTODIAL</span>`;
    }

    const footnote = hero.querySelector('.heroFootnote');
    if (footnote) {
      footnote.textContent = '*Market availability depends on the supported market, network, infrastructure, and jurisdiction.';
    }
  }

  function polishSignalStrip() {
    const grid = document.querySelector('.signalGrid');
    if (!grid) return;
    grid.innerHTML = `
      <div><small>LIVE PRODUCTS</small><b>2</b></div>
      <div><small>TRADING</small><b>Onchain Markets</b></div>
      <div><small>CREATION</small><b>Multi-chain Tokens</b></div>
      <div><small>CUSTODY MODEL</small><b>User Controlled</b></div>`;
  }

  function buildEcosystem() {
    const section = document.querySelector('#ecosystem');
    if (!section) return;
    section.classList.add('ecosystemSection');
    section.innerHTML = `
      <div class="sectionHead ecosystemHead">
        <span>HOODBTC ECOSYSTEM</span>
        <h2>Two live products. One focused ecosystem.</h2>
        <p>Use HOODBTC Trade to access supported onchain markets, or HOODBTC Token Factory to create and deploy tokens from your own wallet.</p>
      </div>

      <div class="ecosystemProducts" aria-label="HOODBTC live products">
        <article class="productPanel tradePanel">
          <div class="productTop"><span>01 / TRADE</span><b><i></i> LIVE</b></div>
          <div class="productIcon" aria-hidden="true">↗</div>
          <h3>HOODBTC Trade</h3>
          <p class="productLead">A professional wallet-first trading interface for supported onchain markets and shared decentralized liquidity.</p>
          <div class="productFeatures">
            <span>Market access</span>
            <span>Orders & positions</span>
            <span>Non-custodial workflow</span>
            <span>Shared liquidity</span>
          </div>
          <div class="productFooter">
            <small>trade.hoodbtc.com</small>
            ${externalLink(TRADE_URL, 'Open Trade ↗', 'productButton')}
          </div>
        </article>

        <article class="productPanel factoryPanel">
          <div class="productTop"><span>02 / BUILD</span><b><i></i> LIVE</b></div>
          <div class="productIcon" aria-hidden="true">＋</div>
          <h3>HOODBTC Token Factory</h3>
          <p class="productLead">A self-custodial multi-chain token creation platform. Connect your wallet, configure your token, review permissions, and deploy onchain.</p>
          <div class="productFeatures">
            <span>Solana + EVM</span>
            <span>Custom token settings</span>
            <span>Wallet-approved deployment</span>
            <span>No seed phrase custody</span>
          </div>
          <div class="productFooter">
            <small>tokenfactory.hoodbtc.com</small>
            ${externalLink(FACTORY_URL, 'Create Token ↗', 'productButton')}
          </div>
        </article>
      </div>

      <div class="ecosystemBridge">
        <div><small>ONE BRAND</small><b>HOODBTC</b></div>
        <span aria-hidden="true">→</span>
        <p><strong>Separate products, connected experience.</strong> Token creation does not automatically list a token on HOODBTC Trade. Each product keeps its own workflow and user approvals.</p>
      </div>`;
  }

  function clarifyTradingSections() {
    const why = document.querySelector('#why .sectionHead');
    if (why) {
      const label = why.querySelector('span');
      const heading = why.querySelector('h2');
      const copy = why.querySelector('p');
      if (label) label.textContent = 'WHY HOODBTC TRADE';
      if (heading) heading.textContent = 'Trading should feel connected — not fragmented.';
      if (copy) copy.textContent = 'HOODBTC Trade simplifies the journey between a trader, a wallet, and supported onchain markets through one focused access layer.';
    }

    const identity = document.querySelector('.identitySection');
    if (identity) {
      const headLabel = identity.querySelector('.sectionHead span');
      const headTitle = identity.querySelector('.sectionHead h2');
      if (headLabel) headLabel.textContent = 'WHAT HOODBTC TRADE IS';
      if (headTitle) headTitle.textContent = 'Understand the trading product — and its boundaries.';

      const columns = identity.querySelectorAll('.identityCol');
      if (columns[0]) {
        const small = columns[0].querySelector(':scope > small');
        if (small) small.textContent = 'HOODBTC TRADE IS';
      }
      if (columns[1]) {
        const small = columns[1].querySelector(':scope > small');
        if (small) small.textContent = 'HOODBTC TRADE IS NOT';
      }
    }

    const direction = document.querySelector('.visionPanel .status');
    if (direction) direction.textContent = 'TRADE PRODUCT DIRECTION';
  }

  function polishFinalCta() {
    const final = document.querySelector('.final');
    if (final) {
      final.classList.add('ecosystemFinal');
      final.innerHTML = `
        <div>
          <span>HOODBTC ECOSYSTEM</span>
          <h2>Choose what you want to do next.</h2>
          <p>Trade supported onchain markets or create a token from your own wallet.</p>
        </div>
        <div class="finalActions">
          ${externalLink(TRADE_URL, 'Open Trade ↗', 'primary')}
          ${externalLink(FACTORY_URL, 'Create Token ↗', 'ghost')}
        </div>`;
    }

    const mobileCta = document.querySelector('.mobileCta');
    if (mobileCta) {
      mobileCta.classList.add('ecosystemMobileCta');
      mobileCta.innerHTML = `
        ${externalLink(TRADE_URL, 'Trade ↗', 'mobileTradeQuick')}
        ${externalLink(FACTORY_URL, 'Create Token ↗', 'mobileFactoryQuick')}`;
    }
  }

  function polishFooter() {
    const footerBrand = document.querySelector('.footBrand p');
    if (footerBrand) {
      footerBrand.textContent = 'One HOODBTC ecosystem for wallet-first onchain trading and self-custodial multi-chain token creation.';
    }
  }

  function applyPolish() {
    if (document.documentElement.dataset.hoodbtcPolished === 'true') return;
    document.documentElement.dataset.hoodbtcPolished = 'true';
    document.body.classList.add('hoodbtcPolished');
    replaceNavigation();
    polishHero();
    polishSignalStrip();
    buildEcosystem();
    clarifyTradingSections();
    polishFinalCta();
    polishFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPolish, { once: true });
  } else {
    applyPolish();
  }
})();
