import { existsSync } from 'fs';
import { execSync } from 'child_process';

// Astro's static build rearranges assets and may leave a dist/client/ directory
// in Cloudflare Pages' build environment even with output: "static". Detect it
// and target the right directory so pagefind lands where Cloudflare will serve it.
const clientDir = 'dist/client';
if (existsSync(clientDir)) {
  execSync(`pagefind --site ${clientDir} --output-path ${clientDir}/pagefind`, { stdio: 'inherit' });
} else {
  execSync('pagefind --site dist', { stdio: 'inherit' });
}
