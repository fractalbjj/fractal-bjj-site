import buildMeta from './build-meta.json';
import { formatDate } from '../utils/format';

export const siteConfig = {
  defaultTitle: 'Fractal BJJ',
  defaultDescription:
    'A systems-thinking approach to high-level no-gi grappling. The full game broken into 19 interconnected systems.',
  lastUpdated: buildMeta.lastUpdated,
  lastUpdatedDisplay: formatDate(new Date(buildMeta.lastUpdated), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
};
