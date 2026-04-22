import { execFileSync } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

export function gitDates() {
  return {
    name: 'git-dates',
    hooks: {
      'astro:config:setup': ({ config }) => {
        const root = fileURLToPath(config.root);
        const dates = {};

        try {
          const output = execFileSync(
            'git',
            ['log', '--format=COMMIT %aI', '--name-only', '--diff-filter=AM'],
            { cwd: root, encoding: 'utf8' }
          );

          let currentDate = null;
          for (const line of output.split('\n')) {
            const trimmed = line.trim();
            if (trimmed.startsWith('COMMIT ')) {
              currentDate = trimmed.slice(7);
            } else if (trimmed && currentDate && !dates[trimmed]) {
              // first occurrence = most recent commit for that file
              dates[trimmed] = currentDate;
            }
          }
        } catch {
          // git not available — dates will be empty
        }

        const dataDir = join(root, 'src', 'data');
        mkdirSync(dataDir, { recursive: true });
        writeFileSync(
          join(dataDir, 'git-dates.json'),
          JSON.stringify(dates, null, 2)
        );
      },
    },
  };
}
