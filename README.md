# Fractal BJJ — Site implementation files

A drop-in `src/` directory implementing the locked v3 design across the homepage, systems index, individual system pages, the approach page, the writing index, and individual blog posts.

Everything is static. No `@astrojs/cloudflare` adapter, no Node built-ins in runtime files.

---

## File map

```
src/
├── styles/
│   └── global.css                    Single source of truth for all styling.
│                                     Design tokens at the top, component
│                                     styles below, organised by section.
│
├── layouts/
│   └── Layout.astro                  Used by every page. Renders the head,
│                                     header, status strip, and footer.
│                                     Pages provide their content via <slot/>.
│
├── components/
│   ├── SystemsList.astro             The 19-system table. Used on homepage
│   │                                 and /systems. Driven entirely by
│   │                                 src/data/systems.ts.
│   └── SystemsLegend.astro           Small legend explaining the dots,
│                                     status flags, and counterpart numbers.
│
├── pages/
│   ├── index.astro                   Homepage. 1:1 with the v3 mockup.
│   ├── approach.astro                The Approach page (the manifesto).
│   ├── systems/
│   │   ├── index.astro               /systems — the system map entry page.
│   │   └── [...slug].astro           Individual system page. Renders the
│   │                                 system header from systems.ts metadata,
│   │                                 then the markdown body of the .md file.
│   └── writing/
│       ├── index.astro               /writing — the article index.
│       └── [...slug].astro           Individual blog post.
│
├── content/
│   ├── config.ts                     Zod schemas for the systems and blog
│   │                                 collections. Body is markdown; only
│   │                                 simple frontmatter required per post.
│   ├── systems/
│   │   ├── back-attack-system.md     Partial content (the in-dev page).
│   │   └── ... 18 stub files          Each: name, coreProblem, summary,
│   │                                 plus an "in development" message.
│   └── blog/
│       └── ... 3 sample posts        Three placeholder posts demonstrating
│                                     the conceptual / update / analysis
│                                     categories.
│
└── data/
    ├── site.ts                       Site-wide config (last-updated date,
    │                                 default title/description).
    └── systems.ts                    Single source of truth for the 19
                                      systems' numbers, complexity ratings,
                                      counterparts, and statuses.
                                      Will be replaced by build-time output
                                      from the spreadsheet pipeline (P1
                                      backlog #3) once that lands.
```

## Where to put each file

These files map directly into the existing repo's `src/` directory. The structure is identical to a standard Astro project. Drop them in, run `npm install` (no new dependencies needed beyond what `npm create astro@latest` already provides for content collections), then `npm run dev` to preview.

## Things to verify after dropping in

1. **Content collections work.** Astro 4+ ships content collections by default. If the existing project predates it or has a different `src/content/config.ts`, merge rather than overwrite — the schemas in here for `systems` and `blog` collections need to be present.
2. **Fonts load.** All three fonts (Source Serif 4, Manrope, IBM Plex Mono) are loaded from Google Fonts in `Layout.astro`. No self-hosting yet — that's a P2 task if performance matters.
3. **Routes resolve.** Hitting `/systems/back-attack-system` should render the in-dev page; the other 18 should render as stubs with the in-development notice. `/writing/cardio-over-technique` should render an article.
4. **Last-updated bar.** The date currently comes from `src/data/site.ts` as a hardcoded string. Once the build-time git-history script is in place, that becomes the source of truth instead.

## How styling works

All styles live in `src/styles/global.css`. There are **no** scoped `<style>` blocks anywhere else. To retune the look:

- **Colours / fonts / spacing** → edit the CSS custom properties in `:root` at the top of `global.css`. They cascade everywhere.
- **A specific component** → edit the relevant section in `global.css` (sections are clearly headed and numbered).

This is deliberately one file. Easier to reason about, easier to update, no surprises about which selector wins.

## How to add a new system page (turning a stub into a real page)

The path from stub → in-dev → live for a system is:

1. **Edit the markdown body** of the `.md` file in `src/content/systems/`. Replace the "in development" placeholder with real content. Use `## H2` and `### H3` headings — these are styled by the `.prose` rules in `global.css`.
2. **Update the `status` field** in `src/data/systems.ts` for that system: `'stub'` → `'in-dev'` → `'live'`. The status flag on the homepage and systems index updates automatically.
3. The page header (number, complexity, counterpart) reads from `systems.ts` automatically — no per-page edits needed.

## How to add a new blog post

1. Create a new `.md` file in `src/content/blog/`. Filename becomes the URL slug.
2. Frontmatter: `title`, `description`, `category` (one of `conceptual` / `update` / `analysis`), `pubDate`.
3. That's it. It'll appear on `/writing` and the homepage's "Recent writing" automatically (sorted by `pubDate`, most recent first).

## What's still placeholder

The bits that are visibly placeholder, intentionally:

- **Network figure on the homepage.** Currently a static decorative SVG. The real version (force-directed layout from the 167 relationships in the spreadsheet) is P2 backlog #4.
- **Three blog posts.** Two of them have lorem ipsum as the body text. The metadata, layout, and routing all work — just the body is filler.
- **Stub system pages.** All 18 of them have the same minimal "in development" body. They'll be filled in over time.

## What is not placeholder

- The homepage. 1:1 with the v3 mockup.
- The system page header / meta / linking. Fully wired up to systems.ts.
- The Back Attack System page body — using your uploaded content, lightly tidied.
- The Approach page — using the existing manifesto content from `fractal_bjj_homepage.md`.
- The styling. Locked.
