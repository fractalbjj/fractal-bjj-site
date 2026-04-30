import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const systems = defineCollection({
  loader: glob({ base: './src/content/systems', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    coreProblem: z.string(),
    summary: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['conceptual', 'update', 'analysis']),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { systems, blog };
