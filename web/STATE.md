# STATE — Křižovatky mimo úroveň Prahy (web)

Tento soubor sleduje postup. Po obnovení sezení Claude přečte tento soubor a pokračuje od první nehotové fáze.

## Shrnutí projektu

Statický web (HTML/CSS/JS) o pražských mimoúrovňových křižovatkách.

**Záložky:**
- 🏠 Domů
- 🎓 Akademie (typologie 16 typů)
- 🎮 Hra (Typolog / Geolog / Detektiv)
- 🗺️ Katalog (split-screen mapa + karty)
- 📜 Historie (placeholder)
- 🔮 Plánované (placeholder)

**Design:** modro-bílá, primární barva `#1E3D7C` (ze schémat), čtvercové obrázky, mobil-first.

**Data:**
- `databaze/krizovatky.json` (47 záznamů, již existuje)
- `databaze/typologie.json` (16 typů, již existuje)
- `databaze/typologie/typ_*.jpg` (16 schémat typů, již existují)
- `krizovatky_v2/{cislo}/{cislo}_*.jpg` (zdrojové obrázky křižovatek)

## Fáze

### ✅ Fáze 0 — Příprava dat
- [x] Databáze 47 křižovatek (JSON + XLSX)
- [x] Geokódování GPS souřadnic
- [x] Extrakce 16 typologických schémat z PDF
- [x] Typologie.json s popisy

### ✅ Fáze 1 — Skelet projektu + assety (HOTOVO)
- `web/css/style.css` — design system, navigace, karty, mřížky
- `web/js/nav.js` — sdílená navigace (injektuje se do `<div id="nav">`)
- `web/js/data.js` — loader pro JSON + cesty k obrázkům
- `web/data/krizovatky.json` (47 záznamů)
- `web/data/typologie.json` (16 typů)
- `web/img/typologie/` — 16 schémat typů
- `web/img/krizovatky/{tsk}/` — pro každou křižovatku 3 jpg (schema, 2 ortofoto)
- HTML kostry: `index.html`, `akademie.html`, `hra.html`, `katalog.html`, `historie.html`, `planovane.html`

### ✅ Fáze 2 — Domů (HOTOVO)
- Hero sekce s titulem, popisem, 2 CTA tlačítky
- Statistiky: 47 křižovatek, 16 typů, 60+ let
- 3 sekce s odkazy na Akademie / Hra / Katalog
- Footer
- Responsive (mobil, tablet, desktop)

### ✅ Fáze 3 — Akademie (HOTOVO)
- Mřížka 16 karet — auto-fill, min 220px
- Karta: čtvercové schéma + kategorie + název
- Filtr-pills nahoře: „Vše" + 4 kategorie (S křižnými body 5, S průpletovými úseky 4, Bez průpletových úseků 3, Útvarové 4)
- Modal detail: schéma vlevo, popis + pražské příklady vpravo
- Escape / klik na pozadí zavírá modal
- Příklady seřazené s pill (doba výstavby) + ulice + TSK
- Pokud nejsou příklady, text „Žádný zástupce v naší databázi"

### ✅ Fáze 4 — Katalog (HOTOVO)
- Split-screen: levá strana 56% (karty), pravá strana mapa (Leaflet z CDN)
- Karty: čtvercové schéma, ulice jako titul, TSK v rohu, pill s typem a dobou
- Filtry: select typ, select doba výstavby
- Vyhledávání: input pro fulltext přes ulice
- Hover na kartě → zvýrazněný marker; hover na markeru → karta zvýrazněna a scroll na ni
- Klik na kartu/marker → modal s 3 obrázky (schema + obě ortofoto) + tabulkou parametrů
- Filtrování skrývá markery mimo aktivní set
- Mobil: vertikální stack (karty nahoře, mapa pod nimi)

### ✅ Fáze 5 — Hra → Typolog (HOTOVO)
- Výběr charakteru: 3 karty (Typolog aktivní, Geolog/Detektiv s badge „Připravujeme")
- Typolog: 10 otázek, ortofoto novější verze + 4 možnosti
- Distractory: 3 náhodné typy z 16 typologií
- Progress dots (zelená správně, růžová špatně, modrá current)
- XP +1 za správnou, streak counter s reset
- Feedback po každé odpovědi (správný typ zvýrazněn zeleně)
- Závěrečné shrnutí: skóre X/10, nejdelší streak, hodnotící text podle %
- CTAs: „Hrát znovu" / „Vybrat jiný charakter"

### ✅ Fáze 6 — Placeholdery + polish (HOTOVO)
- Historie: téma + náhled timeline preview (4 dekády s počty)
- Plánované: téma + placeholder seznam (Pražský okruh, Radlická radiála, Vestec-Jesenice)
- Favicon (modrá křižovatka, SVG) přidaný do všech 6 HTML
- Geolog / Detektiv: stávají se badge „Připravujeme" na hra.html
- Mobile-friendly napříč všemi stránkami
- Build validation: všech 47 složek, 141 obrázků, 16 typologií

### ✅ Fáze 7 — Návod na publikaci (HOTOVO)
- `web/PUBLIKACE.md` — krok za krokem návod (GitHub → Cloudflare Pages → vlastní doména)
- Doporučené registrátory pro `.cz`: Wedos, Subreg, Cloudflare, Forpsi
- Alternativy: Netlify, GitHub Pages, Vercel
- Náklady: ~200 Kč/rok (jen doména, hosting zdarma)
- Postup aktualizace přes GitHub Desktop

## 🎉 MVP HOTOVO

Všech 7 fází dokončeno. Web je hratelný a publikovatelný.

**Co je nutné otestovat na živo:**
- Otevři `web/index.html` v prohlížeči
- Vyzkoušej navigaci mezi všemi 6 záložkami
- Akademie: klikni na karty, otevři detaily
- Katalog: filtry, vyhledávání, hover sync mapa ↔ karty, klik na detail
- Hra: vyber Typolog, projdi 10 otázek, zkontroluj shrnutí

**Možná vylepšení do dalších fází:**
- Geolog (Hra) — najdi křižovatku na mapě
- Detektiv (Hra) — odhadni dobu výstavby
- Historie — interaktivní timeline
- Plánované — reálná data
- Sdílení výsledku ze hry
- Tmavý režim
- Optimalizace velikosti obrázků (WebP)

## Klíčové designové rozhodnutí

- Barva: primární `#1E3D7C` (modrá ze schémat), pozadí bílá
- Karty pojmenované podle ulic (TSK číslo malé, v rohu)
- Header název: „Křižovatky mimo úroveň Prahy"
- Typografie: sans-serif (system stack)
- Bez backendu / DB; všechno statické
- Bez build tools; čisté HTML/CSS/JS
- Leaflet z CDN

## Datový kontext

**TYP coverage v databázi (kolik křižovatek na typ):**
- Osmičková: 12, Deltová: 8, Rozštěpná: 7, Jednovětvová: 7, Dvojl. s vystř. dvojl.: 5
- Kosodélná: 2, Trubkovitá: 2, Sdružená trubkovitá: 1, Srdcová: 1
- Bez příkladu (jen v Akademii): Prstencovitá, Čtyřlístková, Trojlístková, Dvojlístková, Spirálová, Turbínová, Hvězdicová
- Nezatříděné (X): 2 (4079, 4093) — vyloučit z Typologa
