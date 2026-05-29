import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['ko', 'en']),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    order: z.number(),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = {
  news: newsCollection,
  docs: docsCollection,
};

