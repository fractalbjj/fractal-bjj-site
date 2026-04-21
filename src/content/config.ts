import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const systems = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    track: z.enum(['A', 'B']),
    coreProblem: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog, systems };
