import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import z from 'zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Required: used for the meta description, OG/Twitter cards, and RSS -
      // every post needs one for the site to render correctly everywhere.
      description: z.string().min(1),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      author: z.string().optional(),
      draft: z.boolean().optional(),
      // Local image co-located with the post; validated and optimized at
      // build time (broken paths fail the build instead of 404ing in prod)
      heroImage: image().optional(),
      keywords: z.string().optional(),
    }),
})

export const collections = { blog }
