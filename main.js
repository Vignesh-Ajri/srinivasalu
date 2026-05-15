document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // PAGE LOADER
  // ============================================================

  const loader = document.getElementById('page-loader');

  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 900);
  }

  // ============================================================
  // MOBILE MENU / HAMBURGER
  // ============================================================

  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');
  const overlay     = document.getElementById('menu-overlay');
  const drawerClose = document.getElementById('drawer-close');

  if (hamburger && mobileMenu) {

    function openMenu() {
      requestAnimationFrame(() => {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        hamburger.classList.add('active');
      });
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('mobile-menu');
    }

    // HAMBURGER TOGGLE
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    // DRAWER CLOSE BUTTON
    if (drawerClose) {
      drawerClose.addEventListener('click', closeMenu);
    }

    // OVERLAY CLICK
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // CLOSE ON LINK CLICK
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // CLOSE ON ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }


  // ============================================================
  // ACTIVE NAV LINK
  // ============================================================
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document
    .querySelectorAll('.nav-links a, .mobile-menu a')
    .forEach(link => {
      const href = link.getAttribute('href');
      if (
        href === currentPage ||
        (currentPage === '' && href === 'index.html')
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });


  // ============================================================
  // SCROLL REVEAL
  // ============================================================

  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });
    reveals.forEach(el => observer.observe(el));
  }


  // ============================================================
  // NAVBAR SCROLL EFFECT
  // ============================================================
  const navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper) {
    window.addEventListener('scroll', () => {
      navWrapper.style.top = window.scrollY > 40 ? '0.5rem' : '1rem';
    }, { passive: true });
  }
  // ============================================================
  // TIMELINE SLIDER
  // ============================================================
  const tlScroll = document.getElementById('tl-scroll');
  const tlPrev = document.getElementById('tl-prev');
  const tlNext = document.getElementById('tl-next');
  
  if (tlScroll && tlPrev && tlNext) {
    let scrollInterval;
    let isHovered = false;
    
    const scrollNext = () => {
      const cardWidth = tlScroll.querySelector('.tl-card').offsetWidth + 24; // 24px is 1.5rem gap
      if (tlScroll.scrollLeft + tlScroll.clientWidth >= tlScroll.scrollWidth - 10) {
        tlScroll.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        tlScroll.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    const scrollPrev = () => {
      const cardWidth = tlScroll.querySelector('.tl-card').offsetWidth + 24;
      if (tlScroll.scrollLeft <= 0) {
        tlScroll.scrollTo({ left: tlScroll.scrollWidth, behavior: 'smooth' });
      } else {
        tlScroll.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    };

    tlNext.addEventListener('click', () => { scrollNext(); resetInterval(); });
    tlPrev.addEventListener('click', () => { scrollPrev(); resetInterval(); });

    const startInterval = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered) scrollNext();
      }, 3500);
    };

    const resetInterval = () => {
      clearInterval(scrollInterval);
      startInterval();
    };

    const wrapper = document.querySelector('.slider-wrapper');
    wrapper.addEventListener('mouseenter', () => { isHovered = true; });
    wrapper.addEventListener('mouseleave', () => { isHovered = false; });
    wrapper.addEventListener('touchstart', () => { isHovered = true; }, {passive: true});
    wrapper.addEventListener('touchend', () => { setTimeout(() => { isHovered = false; }, 2000); });

    startInterval();
  }

});