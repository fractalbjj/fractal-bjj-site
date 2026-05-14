import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputPath = fileURLToPath(
  new URL('../src/data/build-meta.json', import.meta.url),
);

function getLatestCommitDate() {
  try {
    const iso = execSync('git log -1 --format=%cI HEAD', {
      encoding: 'utf8',
    }).trim();
    if (iso) return iso;
  } catch (err) {
    console.warn(
      '[build-meta] git log failed, falling back to build time:',
      err.message,
    );
  }
  return new Date().toISOString();
}

const meta = { lastUpdated: getLatestCommitDate() };

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');

console.log(`[build-meta] wrote lastUpdated = ${meta.lastUpdated}`);
