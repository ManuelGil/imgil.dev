// Utility functions for blog filtering, sorting, and formatting
import type { BlogPost } from "../types/blog"

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  )
}

export function filterFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => post.frontmatter.featured)
}

export function filterRegularPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => !post.frontmatter.featured)
}

export function filterPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter((post) => post.frontmatter.tags?.includes(tag))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}
