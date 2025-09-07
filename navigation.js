document.addEventListener('DOMContentLoaded', () => {
  const NAV_ITEMS = [
    { href: 'index.html', label: 'Home' },
    { href: 'units.html', label: 'Units & Notation' },
    { href: 'algebra.html', label: 'Core Algebra' },
    { href: 'trigonometry.html', label: 'Trigonometry' },
    { href: 'sine_wave_fundamentals.html', label: 'Sine Wave Fundamentals' },
    { href: 'vectors.html', label: 'Vectors' },
    { href: 'vectorsOldButBEST.html', label: 'VectorsAlt' },
    { href: 'calculus.html', label: 'Calculus' },
    { href: 'mechanics.html', label: 'Applied Mechanics' },
    { href: 'ac_circuits.html', label: 'AC Circuit Analysis' },
    { href: 'linear_methods.html', label: 'Linear Methods' },
    { href: 'advanced_calculus.html', label: 'Advanced Calculus' },
    { href: 'numerical_methods.html', label: 'Numerical Methods' },
    { href: 'economics.html', label: 'Financial Economics' },
    { href: 'statistics.html', label: 'Statistics' },
  ];

  const placeholder = document.getElementById('navigation-placeholder');
  if (!placeholder) return;

  const currentPath = normalizePath(location.pathname);

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Main');

  const h2 = document.createElement('h2');
  h2.textContent = 'Navigation';
  nav.appendChild(h2);

  const ul = document.createElement('ul');

  NAV_ITEMS.forEach(({ href, label }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;

    const itemPath = normalizePath(new URL(href, location.href).pathname);
    if (itemPath === currentPath) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  placeholder.replaceChildren(nav);

  function normalizePath(pathname) {
    let p = pathname.replace(/\/index\.html?$/i, '/');
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p;
  }
});