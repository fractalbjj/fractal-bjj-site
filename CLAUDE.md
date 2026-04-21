# Fractal BJJ — Project Context

## What this is

Fractal BJJ is a brand, knowledge repository, and long-term business project built around one core idea: BJJ is infinitely complex. The goal is to make the sport more understandable through systems thinking, pattern recognition, and analytical frameworks — not technique cataloguing. The long-term vision is a physical gym called Fractal BJJ, built on a curriculum and teaching philosophy developed through this project. This repo builds the website, which is the primary destination for the brand. YouTube drives traffic to it.

## Who owns this

UK-based, brown belt in BJJ, aerospace engineer, 24. Trains regularly, competes at national level, teaches 3x per week. Analytical background shapes how he thinks about the sport.

## Architecture — the two tracks

Every BJJ system sits on a spectrum from fully definable to permanently open. The track determines how a system gets documented.

**Track A — Definable Systems.** Closed enough to document near completely. Finite decision trees exist. Can be flowcharted.
- Back Attack System, Back Control Defence, Front Headlock System, Front Headlock Defence, Top Turtle System, Bottom Turtle Defence, Pinning System, Pin Escapes, Pin Submissions, Pin Submission Escapes.

**Track B — Framework Systems.** Too large and dynamic to close. Require principles and sub-system frameworks, not single flowcharts.
- Passing System, Guard Retention, Offensive Guard System, Offensive Leg Lock System, Leg Lock Defence, Offensive Wrestling System, Defensive Wrestling, Wrestle Up System, Scrambling.

Total: 19 systems.

## The three content modes

- **Mode 1 — System Documentation.** Deep breakdown of a Track A system. Long-form YouTube + companion diagram + website System Page.
- **Mode 2 — Framework Exploration.** Series-based breakdown of a Track B system. Ongoing, never finished.
- **Mode 3 — Meta / Conceptual.** How to think about BJJ itself. Brand differentiator.

## Website structure

Two distinct areas:

**The Repository** — navigated by structure, not time. System map on homepage (static image initially, interactive network diagram later), each system has its own page from a standard template. Pages go live at any depth and grow over time. Never feels incomplete. Content is built natively into pages, never uploaded PDFs.

**The Blog** — navigated by time. Three post types: Mode 3 conceptual pieces, repository update signposts, data/trend analysis.

## System page template

Every system page has:
- Frontmatter: `name`, `track` (A or B), `coreProblem`, `summary`, `order`
- Conceptual Introduction
- Core Problem (one sentence)
- Founding Principles
- Decision Framework (flowchart for Track A, sub-system breakdown for Track B)
- System Relationships (connections to other systems, with transition types)
- Key Athletes
- Recommended Resources
- Snipable Submissions
- Embedded Content (videos, diagrams)

Personal development notes, honest skill ratings, and teaching observations are NOT on the public site. They live in a private log.

## Brand tone — always

- Analytical, calm, intelligent
- No guru language, no martial arts mysticism, no hype
- Clear, structured, direct
- First-person singular where natural ("I've broken no-gi into 19 systems")
- Never condescending
- Never uses words like "unlock", "master", "secret", "elite"
- British English spelling (analyse not analyze, colour not color)

## Technical stack

- Framework: Astro (static site generator)
- Styling: keep minimal and clean, no bloat
- Content: Markdown files in `src/content/systems/`
- Hosting: Cloudflare Pages (free tier)
- Domain: fractal-bjj.com
- Repo: public on GitHub

## Workflow conventions

- Website content lives as Markdown in `src/content/`
- Site-wide layout in `src/layouts/Layout.astro`
- Images in `public/images/` (reference as `/images/filename.jpg`)
- Reference material in `docs/` — gitignored, never published, for context only
- Always preview with `npm run dev` before pushing
- Commit messages: imperative mood, lowercase, concise ("add back attack founding principles")
- Single-file artifacts: keep components self-contained unless there's a clear reason to split

## Reference files

The `docs/` folder contains the full project architecture doc, the systems spreadsheet, and existing instructional notes. These are source material for generating website content — read them when relevant but do not reproduce their contents verbatim into public pages, and never commit them.
