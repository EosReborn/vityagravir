// =========================================
// VITYA GRAVÍR — Shared JS (main.js)
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- CUSTOM CURSOR ----
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function animateCursor() {
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .card, .gallery-item, .option-label').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '18px';
        cursor.style.height = '18px';
        ring.style.width    = '52px';
        ring.style.height   = '52px';
        ring.style.opacity  = '0.8';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '10px';
        cursor.style.height = '10px';
        ring.style.width    = '36px';
        ring.style.height   = '36px';
        ring.style.opacity  = '0.5';
      });
    });
  }

  // ---- MOBILE NAV ----
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = burger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // ---- ACTIVE NAV LINK ----
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ---- NAV SCROLL BG ----
  const navEl = document.querySelector('nav');
  if (navEl) {
    window.addEventListener('scroll', () => {
      navEl.style.background = window.scrollY > 30
        ? 'rgba(11,12,14,0.97)'
        : 'rgba(11,12,14,0.85)';
    });
  }

  // ---- TOAST HELPER (global) ----
  window.showToast = function(msg, type = 'success') {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.className = 'toast ' + type;
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => t.classList.remove('show'), 4500);
  };

  // ---- OPTION BUTTONS (megrendelés) ----
  document.querySelectorAll('.option-group').forEach(group => {
    const type = group.dataset.type;
    const name = group.dataset.name;
    const hidden = document.getElementById(name + '_val');
    const labels = group.querySelectorAll('.option-label');
    labels.forEach(lbl => {
      lbl.addEventListener('click', () => {
        if (type === 'radio') {
          labels.forEach(l => l.classList.remove('selected'));
          lbl.classList.add('selected');
          if (hidden) hidden.value = lbl.querySelector('input').value;
        } else {
          lbl.classList.toggle('selected');
          const checked = [...labels]
            .filter(l => l.classList.contains('selected'))
            .map(l => l.querySelector('input').value);
          if (hidden) hidden.value = checked.join(', ');
        }
      });
    });
  });

});
