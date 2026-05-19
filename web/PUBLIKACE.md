# Jak web publikovat na vlastní doménu

Web je čistě statický (HTML/CSS/JS) — jde nasadit kamkoliv. Tento návod popisuje **nejjednodušší a zdarma** cestu přes **Cloudflare Pages** + vlastní `.cz` doménu.

Celé zvládneš za jedno odpoledne. Měsíční náklady = jen doména (~200-400 Kč/rok).

## Co budeš potřebovat

1. **GitHub účet** (zdarma) — pro uložení kódu
2. **Cloudflare účet** (zdarma) — pro hosting
3. **Doménový registrátor** — Wedos, Subreg, Forpsi nebo Cloudflare Registrar

---

## Krok 1 — Nahrát kód na GitHub

1. Jdi na [github.com](https://github.com) a vytvoř si účet, pokud ještě nemáš.
2. Klikni na **New repository** → název třeba `krizovatky-praha` → veřejný (Public).
3. Nainstaluj si **GitHub Desktop** ([desktop.github.com](https://desktop.github.com)) — nejjednodušší způsob, jak nahrát soubory bez terminálu.
4. V GitHub Desktop:
   - File → Clone repository → vyber svůj nový repozitář
   - Otevři lokální složku, kterou ti Git vytvořil
   - Nakopíruj do ní **celý obsah složky `web/`** (HTML, CSS, JS, data, img, favicon)
   - Zpátky v GitHub Desktop: commit message „Initial commit" → **Commit to main** → **Push origin**

Hotovo — všechny soubory jsou na GitHubu.

## Krok 2 — Propojit s Cloudflare Pages

1. Jdi na [pages.cloudflare.com](https://pages.cloudflare.com), zaregistruj se / přihlas.
2. Klikni na **Create a project** → **Connect to Git** → autorizuj GitHub.
3. Vyber svůj repozitář `krizovatky-praha`.
4. **Build settings:**
   - Framework preset: `None`
   - Build command: (nechej prázdné)
   - Output directory: `/` (nebo prázdné)
5. **Save and Deploy**.

Za asi minutu ti Cloudflare vygeneruje URL ve tvaru `https://krizovatky-praha.pages.dev`. Klikni → web by měl jet.

> 💡 Od teď: kdykoliv pushneš změnu na GitHub, Cloudflare to automaticky nasadí. Měníš obsah a do 30 sekund je online.

## Krok 3 — Koupit doménu

**Doporučené registrátory** (pro `.cz` domény):

| Registrátor | Cena .cz | Poznámka |
|---|---|---|
| **Wedos** | ~150 Kč/rok | Český, levný, široká nabídka |
| **Subreg** | ~190 Kč/rok | Český, dobré rozhraní |
| **Cloudflare Registrar** | $9.15/rok (~210 Kč) | Bez prodejní marže, ale jen některé TLD |
| **Forpsi** | ~250 Kč/rok | Český, zavedený |

Postup u kteréhokoliv:

1. Otevři web registrátora, do vyhledávače napiš název domény, např. `krizovatky-praha.cz`.
2. Pokud volná → přidej do košíku → zaplať.
3. Po nákupu dostaneš přístup do administračního rozhraní domény.

## Krok 4 — Propojit doménu s Cloudflare

### Varianta A — Doména registrovaná u Cloudflare

Není co řešit, Cloudflare to udělá automaticky.

### Varianta B — Doména u jiného registrátora

1. V administraci registrátora najdi **DNS** nebo **nameservery**.
2. Změň nameservery na ty, které ti Cloudflare ukáže (např. `coral.ns.cloudflare.com` a `gary.ns.cloudflare.com`).
3. V Cloudflare otevři **Websites** → **Add site** → zadej svou doménu.
4. Po pár hodinách (změna DNS) bude doména pod správou Cloudflare.

## Krok 5 — Nasměrovat doménu na Pages

V Cloudflare Pages:

1. Otevři svůj projekt → **Custom domains** → **Set up a custom domain**.
2. Zadej svou doménu, např. `krizovatky-praha.cz`.
3. Cloudflare automaticky nastaví DNS záznamy.
4. Za pár minut by web měl fungovat na `https://krizovatky-praha.cz`.

HTTPS certifikát ti vystaví Cloudflare automaticky.

---

## Aktualizace webu

Když chceš něco změnit:

1. Otevři lokální složku v GitHub Desktop.
2. Otevři příslušný HTML/CSS soubor v editoru (např. **VS Code**, **Notepad++**).
3. Ulož změny.
4. V GitHub Desktop: napiš commit message → **Commit to main** → **Push origin**.
5. Cloudflare za ~30 s nasadí novou verzi.

## Náklady

| Položka | Cena |
|---|---|
| GitHub | zdarma |
| Cloudflare Pages | zdarma (do 500 buildů/měsíc) |
| Doména `.cz` | 150-250 Kč/rok |
| **Celkem** | **~200 Kč/rok** |

## Alternativy

Pokud Cloudflare nepasuje:

- **Netlify** ([netlify.com](https://netlify.com)) — podobně jednoduché, drag-and-drop nahrávání
- **GitHub Pages** ([pages.github.com](https://pages.github.com)) — přímo z GitHubu, ale méně funkcí
- **Vercel** ([vercel.com](https://vercel.com)) — moderní, hodně používané

Všechny tři jsou zdarma pro tvůj rozsah projektu.

## Doporučené domény k registraci

- `krizovatky-praha.cz`
- `mimourovne.cz`
- `mukpraha.cz`
- `krizovatky.cz` (pravděpodobně obsazeno)

---

**Tip:** Pokud chceš, můžu ti pomoct napsat README pro GitHub repozitář s popisem projektu. Jen řekni.
