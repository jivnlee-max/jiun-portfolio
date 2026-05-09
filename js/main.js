/* main.js — shared utilities */

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// Home grid — inject project data into data-* slots
document.addEventListener('DOMContentLoaded', () => {
  // Count label
  const countEl = document.getElementById('project-count');
  if (countEl && typeof PROJECTS !== 'undefined') {
    countEl.textContent = `${PROJECTS.length} projects`;
  }

  // Home grid media injection
  if (typeof PROJECTS !== 'undefined') {
    document.querySelectorAll('[data-media]').forEach(el => {
      const i = parseInt(el.dataset.media);
      const p = PROJECTS[i];
      if (!p) return;
      el.innerHTML = buildThumb(p);
    });
    document.querySelectorAll('[data-cat]').forEach(el => {
      const p = PROJECTS[parseInt(el.dataset.cat)];
      if (p) el.textContent = p.category;
    });
    document.querySelectorAll('[data-title]').forEach(el => {
      const p = PROJECTS[parseInt(el.dataset.title)];
      if (p) el.textContent = p.title;
    });
    // 연도 표시
    document.querySelectorAll('[data-year]').forEach(el => {
      const p = PROJECTS[parseInt(el.dataset.year)];
      if (p) el.textContent = p.year || '';
    });
  }

  initReveal();
});
