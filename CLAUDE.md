# CLAUDE.md — Dom-Picker-LandingPage

## Project purpose

This repo is the **marketing landing page** for the **Dom-Map** product (sibling repo at `../Dom-Map`). It is not the product itself.

Dom-Map is a click-to-component developer tool: a browser extension plus a VS Code extension that communicate over a local WebSocket (port `51234`) and use `ts-morph` AST parsing to jump from a DOM element in the browser to the exact JSX in the editor. It supports React 16–19 via a 3-strategy fallback (direct fiber mapping → component hierarchy search → fuzzy matching).

The marketing name surfaced on this site is **react-dompicker**.

## Design direction

Intentionally plain. The page reads like a well-written README, not a SaaS marketing site.

- Warm paper palette (`#f4efe4` background, `#1a1714` ink) — not the product's blue-heavy chrome
- **Google Sans Code** mono everywhere — loaded from Google Fonts in [index.html](index.html)
- Single narrow column (`max-w-column` = 42rem) centered on the page
- Section dividers are a small uppercase label + a thin rule (no decorative boxes, no cards)
- No Framer Motion, no Three.js, no Lenis, no custom cursor, no Lucide icons — they were stripped during the redesign so future edits should stay in that spirit
- The only accent color is `#1d4ed8` on links (see [tailwind.config.js](tailwind.config.js))

Keep the tone terse and specific. Prefer "alt-click any element" over "seamlessly connect your workflow". Avoid exclamation points, "powerful", "blazing", "seamless", sparkle emojis.

## Tech stack

- **React 19.2** + **Vite 7.2** (JSX only, no TypeScript)
- **Tailwind CSS 3.4** — theme extends `colors` (paper / ink / muted / rule / accent), `fontFamily.mono`, and a `maxWidth.column` token (see [tailwind.config.js](tailwind.config.js))
- **ESLint 9** with `react-hooks` and `react-refresh` plugins

No other runtime dependencies. If a new dep is tempting, prefer CSS / plain React first.

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint across the repo
- `npm run preview` — serve the built `dist/` locally

## Directory layout

- [index.html](index.html) — page title, meta description, Google Sans Code font link
- [src/main.jsx](src/main.jsx) — React 19 root render
- [src/App.jsx](src/App.jsx) — the entire page. All sections (`Nav`, `Hero`, `Problem`, `HowItWorks`, `Install`, `Footer`) live in this file as local components, plus a shared `Divider` and an `INSTALL_LINKS` constant at the top
- [src/index.css](src/index.css) — Tailwind directives + base styles (font, selection, link color, `.label` and `.rule` helpers)
- [public/](public/) — static assets served as-is
- [legacy/](legacy/) — archived pre-React HTML version; **do not edit**
- [dist/](dist/) — build output (git-ignored)

There is intentionally no `src/components/` folder. If a section grows large enough to split out, create `src/components/<Name>.jsx` — but prefer keeping everything in `App.jsx` while the page stays small.

## Landing-page section map

- **Nav** — `react—dompicker` brand + `install` / `source` links
- **Hero** — "Click an element. Open the file." + one paragraph + two CTAs (install, view source)
- **Problem** (`— the usual workflow`) — narrative paragraph on the grep-and-pray debugging loop
- **How it works** (`— what this does` + `— how it finds things`) — what the tool does, an ASCII flow diagram (`<pre>` block), and a 3-item numbered list of the fallback strategies
- **Install** (`— install`) — one row per platform (VS Code, Chrome, Firefox, Edge) linking out to the stores
- **Footer** — name, source link, Product Hunt, version, year

The install links and external URLs are centralized in the `INSTALL_LINKS` object at the top of [src/App.jsx](src/App.jsx) — update there, not inline.

## Conventions

- Functional components, no state beyond what's needed — this page currently uses no `useState` / `useEffect`
- Tailwind utilities at the call site — do **not** introduce CSS modules, styled-components, CSS-in-JS, or Framer Motion
- Single page, no router — navigation is anchor-link scroll (`#install`, `#top`)
- Use `label` + `rule` classes (defined in [src/index.css](src/index.css)) for section dividers; don't invent a new divider style
- Copy is lowercase-leaning and terse; headings use weights (400–700) and size, not color, for emphasis
- Keep the column narrow — no element should exceed `max-w-column` unless there's a specific reason

## Related product context

- Product repo: `../Dom-Map/` — contains the two extensions (`React-DomPicker` browser ext, `React-CodeBridge` VS Code ext)
- Current product version referenced on this site: **v1.2.3**
- Before changing feature copy or install steps, cross-check `../Dom-Map/`'s README / CHANGELOG so the landing page doesn't misrepresent capabilities

## What not to do

- Don't edit [legacy/](legacy/) — archived
- Don't reintroduce Framer Motion, Three.js, Lenis, or Lucide — the redesign deliberately removed them
- Don't add routing, TypeScript, or CSS-in-JS — out of scope for this landing page
- Don't invent product features — source them from `../Dom-Map/`
- Don't let the copy drift toward generic marketing voice ("powerful", "seamless", "blazing", emojis)
