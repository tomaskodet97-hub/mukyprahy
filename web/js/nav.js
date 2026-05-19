// Shared navigation — inject into <div id="nav"></div>
(function () {
  const pages = [
    { href: "index.html",     label: "Domů",      key: "domu" },
    { href: "akademie.html",  label: "Typologie", key: "akademie" },
    { href: "hra.html",       label: "Hra",       key: "hra" },
    { href: "katalog.html",   label: "Katalog",   key: "katalog" },
    { href: "historie.html",  label: "Historie",  key: "historie" },
    { href: "planovane.html", label: "Plánované", key: "planovane" },
  ];

  const logoSvg = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 4 14 L 24 14 M 14 4 L 14 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="14" cy="14" r="4" stroke="currentColor" stroke-width="2" fill="transparent"/>
    </svg>`;

  const active = document.body.dataset.page || "";

  const linksHtml = pages.map(p =>
    `<li><a href="${p.href}"${p.key === active ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join("");

  const html = `
    <nav class="nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">
          <span class="logo-mark">${logoSvg}</span>
          <span>pražské mimoúrovňové křižovatky</span>
        </a>
        <ul class="nav-links">${linksHtml}</ul>
      </div>
    </nav>`;

  const slot = document.getElementById("nav");
  if (slot) slot.outerHTML = html;
})();
