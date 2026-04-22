import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
    }),
});

const systems = defineCollection({
  loader: glob({ base: './src/content/systems', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['offensive', 'defensive', 'general']),
    coreProblem: z.string(),
    summary: z.string(),
    order: z.number(),
    complexity: z.number().min(1).max(5),
  }),
});

export const collections = { blog, systems };
