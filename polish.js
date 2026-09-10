(() => {
  const TRADE_URL = 'https://trade.hoodbtc.com';
  const FACTORY_URL = 'https://tokenfactory.hoodbtc.com';
  const DEX_INFO_URL = '/dex-trading/';
  const FACTORY_INFO_URL = '/token-factory/';

  const externalLink = (href, label, className = '') =>
    `<a${className ? ` class="${className}"` : ''} href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

  function addStructuredData() {
    if (document.getElementById('hoodbtc-seo-graph')) return;
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'hoodbtc-seo-graph';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://hoodbtc.com/#organization',
          name: 'HOODBTC',
          url: 'https://hoodbtc.com/',
          logo: 'https://hoodbtc.com/IMG_8612.jpeg',
          description: 'An onchain product ecosystem for wallet-first decentralized trading and self-custodial multi-chain token creation.',
          sameAs: [
            'https://x.com/peterhazimcrypt',
            'https://www.tiktok.com/@hoodbtc666k',
            'https://t.me/hoodbtc2'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://hoodbtc.com/#website',
          name: 'HOODBTC',
          url: 'https://hoodbtc.com/',
          publisher: { '@id': 'https://hoodbtc.com/#organization' }
        },
        {
          '@type': 'ItemList',
          '@id': 'https://hoodbtc.com/#products',
          name: 'HOODBTC live products',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: 'https://hoodbtc.com/dex-trading/',
              item: {
                '@type': 'SoftwareApplication',
                name: 'HOODBTC Trade',
                applicationCategory: 'FinanceApplication',
                operatingSystem: 'Web',
                url: TRADE_URL,
                description: 'A wallet-first non-custodial trading interface for supported onchain markets and shared decentralized liquidity.'
              }
            },
            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://hoodbtc.com/token-factory/',
              item: {
                '@type': 'SoftwareApplication',
                name: 'HOODBTC Token Factory',
                applicationCategory: 'DeveloperApplication',
                operatingSystem: 'Web',
                url: FACTORY_URL,
                description: 'A self-custodial multi-chain token creation platform for Solana and supported EVM networks.'
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schema);
  }

  function replaceNavigation() {
    const desktop = document.querySelector('.links');
    if (desktop) {
      desktop.innerHTML = `
        <a href="#ecosystem">Ecosystem</a>
        <a href="${DEX_INFO_URL}">DEX Trading</a>
        <a href="${FACTORY_INFO_URL}">Token Factory</a>
        <a href="#security">Security</a>
        <a href="#faq">FAQ</a>
        <a href="#community">Community</a>`;
    }

    const mobile = document.querySelector('.mobilePanel');
    if (mobile) {
      mobile.innerHTML = `
        <a href="#ecosystem">Ecosystem</a>
        <a href="${DEX_INFO_URL}">DEX Trading</a>
        <a href="${FACTORY_INFO_URL}">Token Factory</a>
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
    if (lead) lead.textContent = 'HOODBTC connects professional onchain trading with self-custodial multi-chain token creation under one focused ecosystem.';

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
  }

  function polishSignalStrip() {
    const grid = document.querySelector('.signalGrid');
    if (!grid) return;
    grid.innerHTML = `
      <div><small>LIVE PRODUCTS</small><b>2</b></div>
      <div><small>TRADING</small><b>DEX / Onchain</b></div>
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
        <p>Use HOODBTC Trade for wallet-first DEX trading and supported onchain markets, or HOODBTC Token Factory to create and deploy tokens from your own wallet.</p>
      </div>

      <div class="ecosystemProducts" aria-label="HOODBTC live products">
        <article class="productPanel tradePanel">
          <div class="productTop"><span>01 / TRADE</span><b><i></i> LIVE</b></div>
          <div class="productIcon" aria-hidden="true">↗</div>
          <h3>HOODBTC Trade</h3>
          <p class="productLead">A professional wallet-first DEX trading interface for supported onchain markets and shared decentralized liquidity.</p>
          <div class="productFeatures">
            <span>DEX market access</span>
            <span>Orders & positions</span>
            <span>Non-custodial workflow</span>
            <span>Shared liquidity</span>
          </div>
          <a class="seoTextLink" href="${DEX_INFO_URL}">Learn about DEX trading →</a>
          <div class="productFooter">
            <small>trade.hoodbtc.com</small>
            ${externalLink(TRADE_URL, 'Open Trade ↗', 'productButton')}
          </div>
        </article>

        <article class="productPanel factoryPanel">
          <div class="productTop"><span>02 / BUILD</span><b><i></i> LIVE</b></div>
          <div class="productIcon" aria-hidden="true">＋</div>
          <h3>HOODBTC Token Factory</h3>
          <p class="productLead">A self-custodial multi-chain token creator. Connect your wallet, configure a token, review permissions, and deploy onchain.</p>
          <div class="productFeatures">
            <span>Solana token creator</span>
            <span>EVM token deployment</span>
            <span>Wallet-approved deployment</span>
            <span>No seed phrase custody</span>
          </div>
          <a class="seoTextLink" href="${FACTORY_INFO_URL}">Explore the Token Factory guide →</a>
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
      if (label) label.textContent = 'WHY HOODBTC DEX TRADING';
      if (heading) heading.textContent = 'Trading should feel connected — not fragmented.';
      if (copy) copy.textContent = 'HOODBTC Trade simplifies the journey between a trader, a wallet, and supported onchain markets through one focused decentralized trading access layer.';
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
    if (footerBrand) footerBrand.textContent = 'One HOODBTC ecosystem for wallet-first DEX trading and self-custodial multi-chain token creation.';

    const columns = document.querySelectorAll('.foot > div');
    if (columns[1]) {
      columns[1].innerHTML = `
        <h4>Products</h4>
        <a href="${DEX_INFO_URL}">DEX Trading</a>
        <a href="${FACTORY_INFO_URL}">Token Factory</a>
        ${externalLink(TRADE_URL, 'Open Trade ↗')}
        ${externalLink(FACTORY_URL, 'Create Token ↗')}`;
    }
  }

  function applyPolish() {
    if (document.documentElement.dataset.hoodbtcPolished === 'true') return;
    document.documentElement.dataset.hoodbtcPolished = 'true';
    document.body.classList.add('hoodbtcPolished');
    addStructuredData();
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
