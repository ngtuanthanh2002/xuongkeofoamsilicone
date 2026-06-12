/**
 * AOFENG Landing Page - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initCounterAnimation();
  initSmoothScroll();
  initDecorParallax();
  initPromoLinks();
  initPromoPreview();
  initUseCases();
  initVideoHub();
});

/* Header scroll effect */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Mobile menu toggle */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* Scroll reveal with Intersection Observer */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* Counter animation */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = current.toLocaleString('vi-VN') + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

/* Scroll to AL2 / AM2 promo column from product cards */
function initPromoLinks() {
  document.querySelectorAll('[data-switch-promo]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.dataset.switchPromo;
      if (!target) return;

      const column = document.getElementById(`promo-${target}`);
      if (!column) return;

      e.preventDefault();
      const headerHeight = document.getElementById('header')?.offsetHeight || 64;
      const top = column.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* Combo preview — show N cans beside options */
function renderPromoCans(container, count, src) {
  if (!container) return;

  const grid = document.createElement('div');
  const capped = Math.min(count, 6);
  grid.className = `promo-cans-grid promo-cans-${capped}`;

  for (let i = 0; i < capped; i++) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(img);
  }

  if (count > 6) {
    const more = document.createElement('span');
    more.className = 'promo-cans-more';
    more.textContent = `×${count}`;
    grid.appendChild(more);
  }

  container.innerHTML = '';
  container.appendChild(grid);
}

function selectPromoOption(optionBtn) {
  const interactive = optionBtn.closest('.promo-interactive');
  if (!interactive) return;

  const qty = parseInt(optionBtn.dataset.qty, 10) || 1;
  const src = interactive.dataset.canSrc;
  const caption = optionBtn.dataset.caption;
  const price = optionBtn.dataset.price;
  const packageId = optionBtn.dataset.package;

  interactive.querySelectorAll('.promo-option-card').forEach(btn => {
    btn.classList.toggle('active', btn === optionBtn);
  });

  renderPromoCans(interactive.querySelector('[data-cans-display]'), qty, src);

  const captionEl = interactive.querySelector('[data-preview-caption]');
  const priceEl = interactive.querySelector('[data-preview-price]');
  const ctaEl = interactive.querySelector('[data-promo-cta]');

  if (captionEl) captionEl.textContent = caption || `Combo ${qty} chai`;
  if (priceEl) priceEl.textContent = price || '';
  if (ctaEl) ctaEl.textContent = `Đặt combo này — ${price || ''}`;

  if (packageId) {
    const formRadio = document.querySelector(`input[name="package"][value="${packageId}"]`);
    if (formRadio) formRadio.checked = true;
  }
}

function initPromoPreview() {
  document.querySelectorAll('.promo-interactive').forEach(interactive => {
    const options = interactive.querySelectorAll('.promo-option-card');
    const active = interactive.querySelector('.promo-option-card.active') || options[0];

    options.forEach(btn => {
      btn.addEventListener('click', () => selectPromoOption(btn));
    });

    if (active) selectPromoOption(active);
  });
}

/* Subtle parallax for decorative PNG cans */
function initDecorParallax() {
  const decorCans = document.querySelectorAll('[data-parallax]');
  if (!decorCans.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  const onMove = (e) => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      decorCans.forEach((can) => {
        const strength = parseFloat(can.dataset.parallax) || 12;
        can.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });

      ticking = false;
    });
  };

  window.addEventListener('mousemove', onMove, { passive: true });
}

/* Use cases — tab nav + scroll spy */
function initUseCases() {
  const navBtns = document.querySelectorAll('.use-case-nav-btn');
  const panels = document.querySelectorAll('.use-case-panel');
  if (!navBtns.length || !panels.length) return;

  const setActive = (id) => {
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.useCase === id);
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.useCase === id);
    });
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.useCase;
      const panel = document.getElementById(`use-case-${id}`);
      if (!panel) return;

      setActive(id);

      const headerHeight = document.getElementById('header')?.offsetHeight || 64;
      const top = panel.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.dataset.useCase);
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-20% 0px -45% 0px',
    }
  );

  panels.forEach(panel => observer.observe(panel));
}

/* Local video hub — player + playlist */
function initVideoHub() {
  const player = document.getElementById('video-hub-player');
  const titleEl = document.getElementById('video-hub-title');
  const items = document.querySelectorAll('.video-hub-item');
  if (!player || !items.length) return;

  const loadVideo = (src, title, poster, autoplay = false) => {
    player.pause();
    player.poster = poster || '';
    player.querySelector('source').src = src;
    player.load();
    if (titleEl) titleEl.textContent = title || '';

    if (autoplay) {
      player.play().catch(() => {});
    }
  };

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      loadVideo(item.dataset.src, item.dataset.title, item.dataset.poster, true);
    });
  });

  document.querySelectorAll('[data-play-video]').forEach(link => {
    link.addEventListener('click', (e) => {
      const src = link.dataset.playVideo;
      const match = [...items].find(i => i.dataset.src === src);
      if (!match) return;

      e.preventDefault();
      items.forEach(i => i.classList.remove('active'));
      match.classList.add('active');
      loadVideo(match.dataset.src, match.dataset.title, match.dataset.poster, true);

      const videoSection = document.getElementById('video');
      if (videoSection) {
        const headerHeight = document.getElementById('header')?.offsetHeight || 64;
        const top = videoSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* Smooth scroll for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.getElementById('header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
