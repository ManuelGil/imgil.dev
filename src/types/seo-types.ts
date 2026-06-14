/**
 * Type definitions for SEO-related functionality
 *
 * This file centralizes types related to SEO, Open Graph, and social media sharing
 * to ensure consistency throughout the application.
 */

/**
 * SEO metadata for the application
 */
export type SeoMetadata = {
  /** Page title */
  title: string
  /** Page description */
  description: string
  /** Open Graph metadata */
  openGraph: OpenGraphMetadata
  /** Twitter Card metadata */
  twitter: TwitterCardMetadata
}

/**
 * Open Graph metadata for social sharing
 */
export type OpenGraphMetadata = {
  /** OG title (usually same as page title) */
  title: string
  /** OG description (usually same as page description) */
  description: string
  /** OG content type (website, article, etc.) */
  type: string
  /** Canonical URL for the page */
  url: string
  /** Image URL for social sharing */
  image: string
  /** Publication date (for articles) */
  publishedTime?: string
  /** Last modified date (for articles) */
  modifiedTime?: string
  /** Author name (for articles) */
  author?: string
}

/**
 * Twitter Card metadata
 */
export type TwitterCardMetadata = {
  /** Twitter card type */
  card: 'summary' | 'summary_large_image'
  /** Twitter card title */
  title: string
  /** Twitter card description */
  description: string
  /** Twitter card image URL */
  image: string
}

/**
 * Blog post frontmatter schema
 *
 * This type aligns with the Astro Content Collections schema
 * defined in src/content/config.ts
 */
export type BlogFrontmatter = {
  /** Post title */
  title: string
  /** Post description or excerpt */
  description: string
  /** Publication date (ISO string) */
  pubDate: Date
  /** Last updated date (ISO string) */
  updatedDate?: Date
  /** Blog post tags */
  tags?: string[]
  /** Post image (relative path from public directory) */
  image?: string
  /** Whether the post is featured */
  featured?: boolean
  /** Author information */
  author?: string
}
