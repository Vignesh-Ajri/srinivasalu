/* Shared chrome (utility bar, nav, footer) — injected on every page.
   Keeps the 8 pages in lockstep without a build step. */
(function(){
  // Alphabetized dropdowns
  const DEPTS_ALPHA = [
    { slug:'academics',                  name:'Academics' },
    { slug:'adcl',                       name:'ADCL' },
    { slug:'ayush',                      name:'AYUSH' },
    { slug:'chitradurga',                name:'Chitradurga' },
    { slug:'ecology-environment',        name:'Ecology & Environment' },
    { slug:'kalaburagi',                 name:'Kalaburagi' },
    { slug:'kali-tiger-reserve',         name:'Kali Tiger Reserve' },
    { slug:'karnataka-forest-department',name:'Karnataka Forest Department' },
    { slug:'kfcsc',                      name:'KFCSC' },
    { slug:'kspcb',                      name:'KSPCB' },
    { slug:'nagarhole-national-park',    name:'Nagarhole National Park' },
    { slug:'shimoga',                    name:'Shimoga' }
  ];
  window.SR_DEPTS_ALPHA = DEPTS_ALPHA;

  // CV chronological order — earliest
  window.SR_DEPTS_CV = [
    { slug:'chitradurga',                 name:'Chitradurga',                 code:'F-01', period:'1999-2002', kind:'District Forest' },
    { slug:'shimoga',                     name:'Shimoga',                     code:'F-02', period:'2002-2005', kind:'District Forest' },
    { slug:'kalaburagi',                  name:'Kalaburagi',                  code:'F-03', period:'2005-2008', kind:'District Forest' },
    { slug:'academics',                   name:'Academics',                   code:'F-04', period:'2008-2010', kind:'Research & Teaching' },
    { slug:'adcl',                        name:'ADCL',                        code:'F-05', period:'2010-2012', kind:'Welfare Corporation' },
    { slug:'kfcsc',                       name:'KFCSC',                       code:'F-06', period:'2012-2014', kind:'Cooperative Body' },
    { slug:'kspcb',                       name:'KSPCB',                       code:'F-07', period:'2014-2017', kind:'Pollution Board' },
    { slug:'kali-tiger-reserve',          name:'Kali Tiger Reserve',          code:'F-08', period:'2013-2015', kind:'Tiger Reserve' },
    { slug:'nagarhole-national-park',     name:'Nagarhole National Park',     code:'F-09', period:'2015-2017', kind:'National Park' },
    { slug:'karnataka-forest-department', name:'Karnataka Forest Department', code:'F-10', period:'2017-2020', kind:'Wildlife Wing' },
    { slug:'ayush',                       name:'AYUSH',                       code:'F-11', period:'2020-2022', kind:'Traditional Medicine' },
    { slug:'ecology-environment',         name:'Ecology & Environment',       code:'F-12', period:'2022-Present', kind:'Principal Secretary' }
  ];

  // Logo URLs (preserved from original site)
  window.SR_LOGOS = {
    'kspcb': 'https://static.wixstatic.com/media/f453f3_4ff3108d8f634e838fab62ca56fffc96~mv2.png',
    'ayush': 'https://static.wixstatic.com/media/f453f3_17e9ae17fcef4f208620014a703c4dd0~mv2.png',
    'kalaburagi': 'https://static.wixstatic.com/media/f453f3_1c1354dbeab64557bcc9d5d6ee0096e6~mv2.png',
    'shimoga': 'https://static.wixstatic.com/media/f453f3_441ae3bd6cdd4bf2a0e8842c7993c960~mv2.png',
    'academics': 'https://static.wixstatic.com/media/f453f3_8affe3ef7ad64ffea272c0980e8981e2~mv2.png',
    'chitradurga': 'https://static.wixstatic.com/media/f453f3_acd8279650af4b8088840c01285ff8a5~mv2.png',
    'kfcsc': 'https://static.wixstatic.com/media/f453f3_e08ab165d103428989198955bb9d62f3~mv2.png',
    'ecology-environment': 'https://static.wixstatic.com/media/f453f3_aca3d434c40c4d10b761d578c93bcade~mv2.png',
    'karnataka-forest-department': 'https://static.wixstatic.com/media/f453f3_aca3d434c40c4d10b761d578c93bcade~mv2.png',
    'adcl': 'https://static.wixstatic.com/media/f453f3_7f56d5d0a9664f56bc7c74743d1a0f55~mv2.png',
    'nagarhole-national-park': 'https://static.wixstatic.com/media/f453f3_c96fc0f36f1c41d5bf56dbcf33975446~mv2.jpeg',
    'kali-tiger-reserve': 'https://static.wixstatic.com/media/f453f3_c96fc0f36f1c41d5bf56dbcf33975446~mv2.jpeg'
  };

  function ddItems(href){
    return DEPTS_ALPHA.map(d => `<li><a href="${href}?dept=${d.slug}">${d.name}</a></li>`).join('')
      + `<li><a href="${href}" class="dd-all">View all departments →</a></li>`;
  }

  // active page
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  function active(name){ return path === name ? ' class="is-current"' : ''; }
  function mActive(name){ return path === name ? ' class="is-current"' : ''; }

  const navbar = `
    <header class="nav-bar" role="navigation" aria-label="Primary">
      <div class="container">
        <a href="index.html" class="brand">
          <span class="brand-mark">S</span>
          <span>
            <span class="brand-name">Srinivasulu IFS</span>
            <span class="brand-sub">Indian Forest Service</span>
          </span>
        </a>
        <ul class="nav-primary">
          <li${active('index.html')}><a href="index.html">Home</a></li>
          <li${active('cv.html')}><a href="cv.html">CV</a></li>
          <li${active('honours.html')}><a href="honours.html">Honours and awards</a></li>
          <li${active('accomplishments.html')}><a href="accomplishments.html">Accomplishments <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">${ddItems('accomplishments.html')}</ul>
          </li>
          <li${active('publications.html')}><a href="publications.html">Publications <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">${ddItems('publications.html')}</ul>
          </li>
          <li><a href="#">Media <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">
              <li><a href="photos.html">Photos</a></li>
              <li><a href="videos.html">Videos</a></li>
            </ul>
          </li>
          <li${active('blog.html')}><a href="blog.html">Blog</a></li>
        </ul>
        <div class="nav-tools">
          <a href="contact.html" class="btn btn-primary btn-sm ctxt">Contact</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileDrawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;

  const mobileDrawer = `
    <div class="scrim" id="mobileScrim" aria-hidden="true"></div>
    <aside class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="mobile-drawer-head">
        <a href="index.html" class="brand">
          <span class="brand-mark">S</span>
          <span><span class="brand-name">Srinivasulu IFS</span></span>
        </a>
        <button class="mobile-drawer-close" id="mobileClose" aria-label="Close menu"><i data-lucide="x"></i></button>
      </div>
      <nav class="mobile-nav">
        <span class="mobile-nav-section">Browse</span>
        <a href="index.html"${mActive('index.html')}><i data-lucide="home" class="icon-sm"></i>Home</a>
        <a href="cv.html"${mActive('cv.html')}><i data-lucide="user" class="icon-sm"></i>CV</a>
        <a href="honours.html"${mActive('honours.html')}><i data-lucide="award" class="icon-sm"></i>Honours and awards</a>
        <a href="accomplishments.html"${mActive('accomplishments.html')}><i data-lucide="briefcase" class="icon-sm"></i>Accomplishments</a>
        <a href="publications.html"${mActive('publications.html')}><i data-lucide="book-open" class="icon-sm"></i>Publications</a>
        <span class="mobile-nav-section">Media</span>
        <a href="photos.html"${mActive('photos.html')}><i data-lucide="image" class="icon-sm"></i>Photos</a>
        <a href="videos.html"${mActive('videos.html')}><i data-lucide="play-circle" class="icon-sm"></i>Videos</a>
        <span class="mobile-nav-section">More</span>
        <a href="blog.html"${mActive('blog.html')}><i data-lucide="newspaper" class="icon-sm"></i>Blog</a>
        <a href="contact.html"${mActive('contact.html')}><i data-lucide="mail" class="icon-sm"></i>Contact</a>
      </nav>
    </aside>`;

  const footer = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <span class="brand-mark">S</span>
              <span>
                <span class="brand-name">Srinivasulu IFS</span>
                <span class="brand-sub">Indian Forest Service · 1997 Batch</span>
              </span>
            </div>
            <p class="footer-tag">Principal Secretary, Ecology &amp; Environment, Government of Karnataka.</p>
            <div class="footer-social" aria-label="Social channels">
              <a href="https://www.youtube.com/@srinivasifs4051" aria-label="YouTube" target="_blank" rel="noopener"><i data-lucide="youtube" class="icon-sm"></i></a>
              <a href="https://www.facebook.com/srinivasulu.krishnamurthy" aria-label="Facebook" target="_blank" rel="noopener"><i data-lucide="facebook" class="icon-sm"></i></a>
              <a href="https://www.instagram.com/sriniforest/" aria-label="Instagram" target="_blank" rel="noopener"><i data-lucide="instagram" class="icon-sm"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin" class="icon-sm"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="cv.html">CV</a></li>
              <li><a href="honours.html">Honours and awards</a></li>
              <li><a href="accomplishments.html">Accomplishments</a></li>
              <li><a href="publications.html">Publications</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Media</h4>
            <ul>
              <li><a href="photos.html">Photos</a></li>
              <li><a href="videos.html">Videos</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Government</h4>
            <ul>
              <li><a href="contact.html#map">Sitemap</a></li>
              <li style="display:none;"><a href="#">Accessibility</a></li>
              <li style="display:none;"><a href="#">Privacy &amp; Disclaimer</a></li>
              <li style="display:none;"><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 Srinivasulu IFS · Maintained by Vanalok</span>
          <span>Last updated: <time datetime="2025-11-15">15 November 2025</time></span>
        </div>
      </div>
    </footer>`;

  // Inject
  function inject(){
    const host = document.getElementById('sr-chrome-top') || document.body;
    if (document.getElementById('sr-chrome-top')){
      host.innerHTML = navbar + mobileDrawer;
    } else {
      // Fallback: prepend at body start
      const wrap = document.createElement('div');
      wrap.innerHTML = navbar + mobileDrawer;
      document.body.insertBefore(wrap, document.body.firstChild);
    }
    const fHost = document.getElementById('sr-chrome-footer');
    if (fHost) fHost.innerHTML = footer; else {
      const f = document.createElement('div'); f.innerHTML = footer; document.body.appendChild(f);
    }
    if (window.SrIcons) window.SrIcons();
    if (window.bindMobileDrawer) {
      window.bindMobileDrawer();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
