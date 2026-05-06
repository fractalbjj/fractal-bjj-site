import { existsSync } from 'fs';
import { execSync } from 'child_process';

// When wrangler deploys with @astrojs/cloudflare, astro outputs static assets
// to dist/client/ rather than dist/. Detect this and target the right directory
// so pagefind files land where wrangler will pick them up.
const clientDir = 'dist/client';
if (existsSync(clientDir)) {
  execSync(`pagefind --site ${clientDir} --output-path ${clientDir}/pagefind`, { stdio: 'inherit' });
} else {
  execSync('pagefind --site dist', { stdio: 'inherit' });
}
