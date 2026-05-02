# Fractal BJJ — Project Context

## What this is

Fractal BJJ is a brand, knowledge repository, and long-term business project built around one core idea: BJJ is infinitely complex. The goal is to make the sport more understandable through systems thinking, pattern recognition, and analytical frameworks — not technique cataloguing. The long-term vision is a physical gym called Fractal BJJ, built on a curriculum and teaching philosophy developed through this project. This repo builds the website, which is the primary destination for the brand. YouTube drives traffic to it.

## Who owns this

UK-based, brown belt in BJJ, aerospace engineer, 24. Trains regularly, competes at national level, teaches 3x per week. Analytical background shapes how he thinks about the sport.

## Architecture — 19 interconnected systems

High-level no-gi grappling is divided into 19 systems, organised on the site into three categories:

**Offensive systems (10).** Passing System, Pinning System, Pin Submissions, Front Headlock System, Top Turtle System, Back Attack System, Offensive Guard System, Offensive Leg Lock System, Offensive Wrestling System, Wrestle Up System.

**Defensive counterpart systems (8).** Guard Retention, Pin Escapes, Pin Submission Escapes, Front Headlock Defence, Bottom Turtle Defence, Back Control Defence, Leg Lock Defence, Defensive Wrestling. Defensive Wrestling is the counterpart to both Offensive Wrestling System and Wrestle Up System — it pairs with both. Offensive Guard System has no direct defensive counterpart.

**General systems (1).** Scrambling.

Every system has a **complexity rating** from 1 (most bounded) to 5 (most open), sourced from `docs/Fractal_BJJ.xlsx`. No system is "closed" in the absolute sense — all are too dynamic to fully flowchart — but some are considerably more bounded than others, which is what the rating reflects. **Do not reintroduce the old "Track A / Track B" framing. It was rejected for overstating how closed the more-bounded systems are.**

## The three content modes

- **Mode 1 — System Documentation.** Deep breakdown of a system. Long-form YouTube video + companion diagram + website system page.
- **Mode 2 — Framework Exploration.** Series-based breakdown of a more open system. Ongoing, never finished.
- **Mode 3 — Meta / Conceptual.** How to think about BJJ itself. Brand differentiator.

## Website structure

Two distinct areas:

**The Repository** — navigated by structure, not time. The systems index page lists all 19 systems grouped by category, with each linking to its own page. Each system has its own page built from a standard layout. Pages go live at any depth and grow over time. Never feels incomplete. Content is built natively into pages, never uploaded PDFs. A future feature (P3 in the Working Plan, item #16) will add **sub-block pages** below each system page's main content — finer-grained pages for specific mechanics, sub-systems, sub-positions, or dilemmas, organised into colour-coded category tags. The future interactive network diagram on the systems index is also planned.

**The Blog** — rendered on the site as "Writing". Navigated by time. Three post types: Mode 3 conceptual pieces, repository update signposts, data/trend analysis.

## System page template

The Astro layout is structurally fixed:

- Header: system number, name, tagline
- Status meta block: complexity dots, status badge (`stub` / `in dev` / `live`), counterpart number
- Prose body: rendered from markdown
- (Future) sub-block panel below the prose body — see Working Plan P3 item #16

**Frontmatter schema** for each system markdown file contains *only prose-adjacent fields*:

- `name` — display name of the system
- `coreProblem` — one-sentence framing of what the system solves
- `summary?` — optional short summary

**Structural metadata** (`category`, `complexity`, `counterpart`, `order`, `status`) lives in `src/data/systems.ts`, **not** in markdown frontmatter. This separation is deliberate — putting structural metadata in frontmatter caused a schema mismatch class of bug that's now resolved. Don't reintroduce it.

**Section composition of the prose body is intentionally flexible.** Different systems benefit from different shapes. The standard *menu* of possible sections — pick the subset that fits each system, in the order that makes sense for that system:

- Intro tagline (one-line framing of the problem)
- Brief explanation of the system and aims
- Founding principles (more relevant to bounded systems)
- Sub-system breakdown (more relevant to open systems)
- Decision framework or flowchart (where the material allows)
- Mechanics breakdowns (often promoted to sub-blocks once #16 lands)
- Commonly linked systems and transitions
- Notable athletes, coaches, and the lineage of ideas
- Recommended external sources / instructionals
- Snipable submissions (where applicable)

Visual consistency comes from the locked layout, design tokens, prose styling, and the sub-block panel — not from a rigid section list. Imposing a fixed section list across all 19 systems would force the material into shapes it doesn't fit.

In-development stub pages show only: page header, "in development" notice, and a placeholder list of primary athlete/coach sources informing the system.

Personal development notes, honest skill ratings, and teaching observations are NOT on the public site. They live in a private log.

**In-prose system references** (e.g. inside a "Primary network transitions" list) use plain markdown links: `[Pin Submissions](/systems/pin-submissions)`. This is the interim convention until the auto-cross-linking pipeline (Working Plan P2 #5) replaces it.

## Brand tone — always

- Analytical, calm, intelligent
- No guru language, no martial arts mysticism, no hype
- Clear, structured, direct
- First-person singular where natural ("I've broken no-gi into 19 systems")
- Never condescending
- Never uses words like "unlock", "master", "secret", "elite"
- British English spelling (analyse not analyze, colour not color)

## Technical stack — and critical constraints

- Framework: Astro 6, **static output only**
- Hosting: Cloudflare Pages (free tier), `fractal-bjj.com`
- Repo: public on GitHub
- Styling: minimal, clean, no bloat — single source of truth in `src/styles/global.css`
- Content: Markdown/MDX in `src/content/systems/` and `src/content/blog/`
- Images: `public/images/`, referenced as `/images/filename.jpg`

**Do NOT:**

- Install the `@astrojs/cloudflare` adapter. The site has no server-side needs. It is a static site deployed to Cloudflare Pages, not a Worker. Installing the adapter switches it to server mode and breaks the deployment.
- Import Node.js built-in modules (`child_process`, `fs`, `path`, etc.) from any file that renders at page load — `src/layouts/`, `src/pages/`, or `src/components/`. These only work at build time, not in the deployed runtime, and Cloudflare's build will fail with `No such module` errors. If you need build-time data (e.g. Git-history timestamps), compute it in a separate build-time script or Astro integration that writes a JSON file, and import that JSON in layouts/pages.
- Install new dependencies without telling me first. Always flag: "I'm about to install X because Y" and wait for confirmation before running `npm install`.

## Astro 6 API gotchas

The project is on Astro 6, which has API differences from Astro 4 that older training data tends to default to:

- **Reading content collection entries.** Use `entry.id` for the slug, NOT `entry.slug`. The latter is from Astro 4 and will silently break.
- **Rendering markdown body.** Use `const { Content } = await render(entry)` (with `import { render } from 'astro:content'`) — NOT `await entry.render()`.
- **Linking between entries.** Use `entry.id` to construct hrefs (e.g. `/writing/${post.id}`).
- **Content config location.** `src/content.config.ts` (file at root of `src/`), NOT `src/content/config.ts`.

## Workflow conventions

- Website content lives as Markdown in `src/content/`
- Site-wide layout in `src/layouts/Layout.astro`
- Reference material in `docs/` — gitignored, never published, for context only
- Always run `npm run build` locally before pushing. If the build fails locally, it will fail on Cloudflare. If it succeeds locally with no warnings about Node imports in the prerender environment, it should succeed on Cloudflare.
- Push often. Small commits are cheap. Cloudflare rebuilds in 30 seconds. If something breaks, roll back.
- Commit messages: imperative mood, lowercase, concise ("add back attack founding principles", "fix toc overlay on mobile")
- Single-file components by default; split only with a clear reason

## Reference files

The `docs/` folder contains the systems spreadsheet (including complexity ratings and system relationships) and existing instructional notes (Back Attack System, Passing). These are source material for generating website content — read them when relevant but do not reproduce their contents verbatim into public pages, and never commit them.

`Fractal_BJJ_Working_Plan.md` is the operational source of truth — what's done, in progress, blocked, and what decisions are open. This file (`CLAUDE.md`) covers the rules and conventions; the Working Plan covers state. When the two appear to disagree about current state, the Working Plan is right; when they appear to disagree about a rule, this file is right.

## Current status and priorities

The live state of the site is tracked in `Fractal_BJJ_Working_Plan.md`. As of late April 2026, in broad terms:

- Site is live at fractal-bjj.com with the locked v3 design
- Homepage, approach page, writing index, all 19 individual system pages, and 3 sample blog posts render through the v3 design
- 18 system pages are stubs; the Back Attack page is in development with partial content (Opening, Primary Network Transitions, Notable Athletes — still to add: 10 founding principles, Straitjacket flowchart, deficit problem, side switch protocol, finishing mechanics)
- `/systems` index page is still on the older pre-v3 layout — highest-priority redesign target
- Spreadsheet → JSON build pipeline not yet built; interim hand-maintained `src/data/systems.ts` is the source of truth for system metadata
- Logo is currently a rough approximation of a Sierpiński triangle — flagged for revision to a mathematically correct 3-level recursion
- Favicon referenced in `Layout.astro` but the file doesn't exist yet — outstanding
- Last-updated date is currently a hand-bumped value in `src/data/site.ts`; build-time auto-generation is the eventual plan
