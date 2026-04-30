/**
 * Site-wide configuration.
 * Single source of truth for values used across multiple pages.
 *
 * The lastUpdated date is currently a manual value. Once the
 * build-time pipeline is in place (P1 backlog item #3), this can be
 * computed from git history at build time.
 */

export const siteConfig = {
  defaultTitle: 'Fractal BJJ',
  defaultDescription:
    'A systems-thinking approach to high-level no-gi grappling. The full game broken into 19 interconnected systems.',
  lastUpdated: '2026-04-30',
  lastUpdatedDisplay: '30 April 2026',
} as const;
