/**
 * Systems metadata — single source of truth for the 19 systems.
 *
 * Once the build-time spreadsheet → JSON pipeline (P1 backlog #3) is
 * in place, this file becomes the output of that script rather than
 * a manually-maintained TS module.
 *
 * The slug here MUST match the filename of the .md file under
 * src/content/systems/, e.g. `back-attack-system` → `back-attack-system.md`
 */

export type Category = 'offensive' | 'defensive' | 'general';
export type Status = 'stub' | 'in-dev' | 'live';

export interface SystemMeta {
  number: number;          // 01-19, sequential across all categories
  slug: string;            // matches /src/content/systems/<slug>.md
  name: string;
  category: Category;
  complexity: 1 | 2 | 3 | 4 | 5;
  counterpart?: number | number[]; // counterpart system number(s); undefined = no counterpart
  status: Status;
}

export const systems: SystemMeta[] = [
  // OFFENSIVE — 01-10
  { number: 1,  slug: 'passing-system',           name: 'Passing System',            category: 'offensive', complexity: 5, counterpart: 11, status: 'stub' },
  { number: 2,  slug: 'pinning-system',           name: 'Pinning System',            category: 'offensive', complexity: 2, counterpart: 12, status: 'stub' },
  { number: 3,  slug: 'pin-submissions',          name: 'Pin Submissions',           category: 'offensive', complexity: 2, counterpart: 13, status: 'stub' },
  { number: 4,  slug: 'front-headlock-system',    name: 'Front Headlock System',     category: 'offensive', complexity: 3, counterpart: 14, status: 'stub' },
  { number: 5,  slug: 'top-turtle-system',        name: 'Top Turtle System',         category: 'offensive', complexity: 2, counterpart: 15, status: 'stub' },
  { number: 6,  slug: 'back-attack-system',       name: 'Back Attack System',        category: 'offensive', complexity: 2, counterpart: 16, status: 'in-dev' },
  { number: 7,  slug: 'offensive-guard-system',   name: 'Offensive Guard System',    category: 'offensive', complexity: 5,                  status: 'stub' },
  { number: 8,  slug: 'offensive-leg-lock-system',name: 'Offensive Leg Lock System', category: 'offensive', complexity: 4, counterpart: 17, status: 'stub' },
  { number: 9,  slug: 'offensive-wrestling-system',name:'Offensive Wrestling System',category: 'offensive', complexity: 5, counterpart: 18, status: 'stub' },
  { number: 10, slug: 'wrestle-up-system',        name: 'Wrestle Up System',         category: 'offensive', complexity: 2, counterpart: 18, status: 'stub' },

  // DEFENSIVE — 11-18
  { number: 11, slug: 'guard-retention',          name: 'Guard Retention',           category: 'defensive', complexity: 3, counterpart: 1,  status: 'stub' },
  { number: 12, slug: 'pin-escapes',              name: 'Pin Escapes',               category: 'defensive', complexity: 2, counterpart: 2,  status: 'stub' },
  { number: 13, slug: 'pin-submission-escapes',   name: 'Pin Submission Escapes',    category: 'defensive', complexity: 2, counterpart: 3,  status: 'stub' },
  { number: 14, slug: 'front-headlock-defence',   name: 'Front Headlock Defence',    category: 'defensive', complexity: 2, counterpart: 4,  status: 'stub' },
  { number: 15, slug: 'bottom-turtle-defence',    name: 'Bottom Turtle Defence',     category: 'defensive', complexity: 1, counterpart: 5,  status: 'stub' },
  { number: 16, slug: 'back-control-defence',     name: 'Back Control Defence',      category: 'defensive', complexity: 2, counterpart: 6,  status: 'stub' },
  { number: 17, slug: 'leg-lock-defence',         name: 'Leg Lock Defence',          category: 'defensive', complexity: 3, counterpart: 8,  status: 'stub' },
  { number: 18, slug: 'defensive-wrestling',      name: 'Defensive Wrestling',       category: 'defensive', complexity: 3, counterpart: [9, 10], status: 'stub' },

  // GENERAL — 19
  { number: 19, slug: 'scrambling',               name: 'Scrambling',                category: 'general',   complexity: 3,                   status: 'stub' },
];

// --- Lookup helpers ---

export const getSystemBySlug = (slug: string): SystemMeta | undefined =>
  systems.find((s) => s.slug === slug);

export const getSystemByNumber = (n: number): SystemMeta | undefined =>
  systems.find((s) => s.number === n);

export const getSystemsByCategory = (cat: Category): SystemMeta[] =>
  systems.filter((s) => s.category === cat);

// Format a counterpart for display: "↔ 11" or "↔ 09, 10" or "—"
export const formatCounterpart = (counterpart: SystemMeta['counterpart']): string => {
  if (counterpart === undefined) return '—';
  const arr = Array.isArray(counterpart) ? counterpart : [counterpart];
  return arr.map((n) => String(n).padStart(2, '0')).join(', ');
};

// Returns 0-padded number, e.g. 6 → "06"
export const formatNumber = (n: number): string => String(n).padStart(2, '0');
