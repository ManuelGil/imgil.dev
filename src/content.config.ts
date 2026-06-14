import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import z from 'zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog }
