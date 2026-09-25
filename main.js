// highlight active nav link
(function () {
  const links = document.querySelectorAll('nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) {
      a.style.color = 'var(--bright)';
      a.style.borderColor = 'var(--dim)';
    }
  });
})();
