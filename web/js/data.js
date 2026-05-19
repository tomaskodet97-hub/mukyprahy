// Shared data loader — works both via fetch (Live Server, hosted) AND via inline bundle (file://).
window.AppData = (function () {
  let _krizovatky = null;
  let _typologie = null;

  function _useBundle() {
    return typeof window.__DATA__ !== 'undefined';
  }

  async function loadKrizovatky() {
    if (_krizovatky) return _krizovatky;
    if (_useBundle()) { _krizovatky = window.__DATA__.krizovatky; return _krizovatky; }
    const res = await fetch('data/krizovatky.json');
    _krizovatky = await res.json();
    return _krizovatky;
  }

  async function loadTypologie() {
    if (_typologie) return _typologie;
    if (_useBundle()) { _typologie = window.__DATA__.typologie; return _typologie; }
    const res = await fetch('data/typologie.json');
    _typologie = await res.json();
    return _typologie;
  }

  async function loadAll() {
    const [k, t] = await Promise.all([loadKrizovatky(), loadTypologie()]);
    return { krizovatky: k, typologie: t };
  }

  function shortName(ulice) { return ulice; }
  function schemaPath(tsk)          { return `img/krizovatky/${tsk}/schema.jpg`; }
  function ortofotoPath(tsk, year)  { return `img/krizovatky/${tsk}/ortofoto_${year}.jpg`; }
  function typologyPath(slug)       { return `img/typologie/typ_${slug}.jpg`; }

  const KATEGORIE_ORDER = [
    'S křižnými body',
    'S průpletovými úseky',
    'Bez průpletových úseků',
    'Útvarové',
  ];

  return {
    loadKrizovatky, loadTypologie, loadAll,
    shortName, schemaPath, ortofotoPath, typologyPath,
    KATEGORIE_ORDER,
  };
})();
