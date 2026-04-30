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

**The Repository** — navigated by structure, not time. The systems index page lists all 19 systems grouped by category, with each linking to its own page. Each system has its own page built from a standard template. Pages go live at any depth and grow over time. Never feels incomplete. Content is built natively into pages, never uploaded PDFs. Future: interactive network diagram on the systems page.

**The Blog** — navigated by time. Three post types: Mode 3 conceptual pieces, repository update signposts, data/trend analysis.

## System page template

Every system page has:

- Frontmatter: `name`, `category` ("offensive" | "defensive" | "general"), `complexity` (1-5), `coreProblem`, `summary`, `order`
- Conceptual Introduction
- Core Problem (one sentence)
- Founding Principles
- Decision Framework (flowchart for more bounded systems, sub-system breakdown for more open ones)
- System Relationships (connections to other systems, with transition types)
- Key Athletes / Sources
- Recommended Resources
- Snipable Submissions
- Embedded Content (videos, diagrams)

In-development stub pages show only: page header, "In development" message, and a placeholder list of primary athlete/coach sources informing the system.

Personal development notes, honest skill ratings, and teaching observations are NOT on the public site. They live in a private log.

## Brand tone — always

- Analytical, calm, intelligent
- No guru language, no martial arts mysticism, no hype
- Clear, structured, direct
- First-person singular where natural ("I've broken no-gi into 19 systems")
- Never condescending
- Never uses words like "unlock", "master", "secret", "elite"
- British English spelling (analyse not analyze, colour not color)

## Technical stack — and critical constraints

- Framework: Astro, **static output only**
- Hosting: Cloudflare Pages (free tier), `fractal-bjj.com`
- Repo: public on GitHub
- Styling: minimal, clean, no bloat
- Content: Markdown/MDX in `src/content/systems/` and `src/content/blog/`
- Images: `public/images/`, referenced as `/images/filename.jpg`

**Do NOT:**

- Install the `@astrojs/cloudflare` adapter. The site has no server-side needs. It is a static site deployed to Cloudflare Pages, not a Worker. Installing the adapter switches it to server mode and breaks the deployment.
- Import Node.js built-in modules (`child_process`, `fs`, `path`, etc.) from any file that renders at page load — `src/layouts/`, `src/pages/`, or `src/components/`. These only work at build time, not in the deployed runtime, and Cloudflare's build will fail with `No such module` errors. If you need build-time data (e.g. Git-history timestamps), compute it in a separate build-time script or Astro integration that writes a JSON file, and import that JSON in layouts/pages.
- Install new dependencies without telling me first. Always flag: "I'm about to install X because Y" and wait for confirmation before running `npm install`.

## Workflow conventions

- Website content lives as Markdown in `src/content/`
- Site-wide layout in `src/layouts/Layout.astro`
- Reference material in `docs/` — gitignored, never published, for context only
- Always run `npm run build` locally before pushing. If the build fails locally, it will fail on Cloudflare. If it succeeds locally with no warnings about Node imports in the prerender environment, it should succeed on Cloudflare.
- Push often. Small commits are cheap. Cloudflare rebuilds in 30 seconds. If something breaks, roll back.
- Commit messages: imperative mood, lowercase, concise ("add back attack founding principles", "fix toc overlay on mobile")
- Single-file components by default; split only with a clear reason

## Reference files

The `docs/` folder contains the full project architecture doc, the systems spreadsheet (including complexity ratings and system relationships), and existing instructional notes (Back Attack System, Passing). These are source material for generating website content — read them when relevant but do not reproduce their contents verbatim into public pages, and never commit them.

## Current status and priorities

Phase 1 deliverables in progress:

- Homepage, Approach page, Systems index — live
- 19 system stub pages with "In development" placeholder + sources list — in progress
- Blog placeholder — in progress
- Favicon — in progress
- Last-updated timestamps site-wide — implementation ongoing (must be build-time only, see constraints above)
- First full system page (Back Attack System) — next priority after stubs are live
