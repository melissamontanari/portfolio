
window.addEventListener('DOMContentLoaded', () => {
  const navbarTarget = document.getElementById('navbar-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');

  const load = (url, target) => {
    if (!target) return Promise.resolve(); // if element doesn't exist, skip
    return fetch(url)
      .then(res => res.ok ? res.text() : '')
      .then(html => { target.innerHTML = html; })
      .catch(err => console.error(`Failed to load ${url}`, err));
  };

  Promise.all([
    load('partials/navbar.html', navbarTarget),
    load('partials/footer.html', footerTarget)
  ]).finally(() => {
    // always load main.js after trying to load partials
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    document.body.appendChild(script);
  });
});
