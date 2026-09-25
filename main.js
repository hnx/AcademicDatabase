(function () {
  const links = document.querySelectorAll('nav a');
  const path  = location.pathname;

  links.forEach(a => {
    const href = a.getAttribute('href');
    if (path.endsWith(href) || path.endsWith(href.replace('../', ''))) {
      a.classList.add('active');
    }
  });
})();
