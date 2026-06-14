/**
 * Type definitions for blog-related functionality
 * Used throughout the blog components and utilities
 */

/**
 * Represents a blog post with its metadata and URL
 */
export interface BlogPost {
  /** URL path to the full blog post */
  url: string
  /** Frontmatter metadata */
  frontmatter: BlogPostFrontmatter
}

/**
 * Metadata for a blog post stored in frontmatter
 */
export interface BlogPostFrontmatter {
  /** Post title */
  title: string
  /** Post description or excerpt */
  description: string
  /** ISO date string for publication date */
  date: string
  /** Optional updated date (ISO string) */
  updatedDate?: string
  /** List of tag strings */
  tags?: string[]
  /** Featured image URL */
  image?: string
  /** Set to true for featured posts */
  featured?: boolean
  /** Author of the post */
  author?: string
}

/**
 * Configuration for pagination in blog listings
 */
export interface BlogPagination {
  /** Current page number */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Number of posts per page */
  postsPerPage: number
}

/**
 * Search result with highlighted matches
 */
export interface SearchResult {
  /** The post that matched the search */
  post: BlogPost
  /** Relevance score (higher = better match) */
  score: number
  /** Highlighted excerpt containing the match */
  excerpt?: string
}
