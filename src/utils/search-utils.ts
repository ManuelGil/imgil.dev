/**
 * Search utilities for finding blog posts and content
 * Optimized for performance with debouncing and memoization
 */

import type { BlogPost } from '../types/blog'

/**
 * Performs a search on blog posts based on a search term
 * Uses multiple criteria for better matching (title, description, tags)
 *
 * @example
 * // Returns posts matching "astro"
 * searchPosts(allPosts, "astro")
 *
 * @param posts - Array of blog posts to search through
 * @param searchTerm - The search term to look for
 * @returns Filtered array of posts that match the search term
 */
export function searchPosts(posts: BlogPost[], searchTerm: string): BlogPost[] {
  if (!searchTerm || searchTerm.trim() === '') {
    return posts
  }

  const normalizedTerm = searchTerm.toLowerCase().trim()

  return posts.filter((post) => {
    // Search in title (highest priority)
    if (post.frontmatter.title.toLowerCase().includes(normalizedTerm)) {
      return true
    }

    // Search in description
    if (post.frontmatter.description.toLowerCase().includes(normalizedTerm)) {
      return true
    }

    // Search in tags
    if (post.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(normalizedTerm))) {
      return true
    }

    return false
  })
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation
 *
 * @example
 * // Create a debounced search function that only executes 300ms after last call
 * const debouncedSearch = debounce((term) => searchPosts(allPosts, term), 300);
 *
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the original function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: number | undefined

  return function (...args: Parameters<T>): void {
    const later = () => {
      timeout = undefined
      func(...args)
    }

    clearTimeout(timeout)
    timeout = window.setTimeout(later, wait)
  }
}

/**
 * Extracts and ranks relevant search terms from the content
 * Useful for generating search suggestions or related content
 *
 * @example
 * // Returns ['astro', 'performance', 'optimization']
 * extractKeywords("Astro Performance Optimization Guide")
 *
 * @param content - The text content to analyze
 * @param maxKeywords - Maximum number of keywords to return
 * @returns Array of extracted keywords
 */
export function extractKeywords(content: string, maxKeywords: number = 5): string[] {
  // Simple implementation - in a real app, this would be more sophisticated
  const stopWords = new Set([
    'a',
    'an',
    'the',
    'and',
    'or',
    'but',
    'for',
    'nor',
    'on',
    'at',
    'to',
    'by',
    'from',
    'in',
    'with',
    'about',
    'as',
    'is',
    'was',
    'were',
    'be',
    'been',
    'being',
    'that',
    'this',
    'these',
    'those',
    'it',
    'its',
  ])

  // Normalize and split content
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(/\s+/) // Split by whitespace

  // Filter out stop words and count occurrences
  const wordCount = words
    .filter((word) => word.length > 2 && !stopWords.has(word))
    .reduce(
      (acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word)
}

/**
 * Finds related posts based on shared tags or content similarity
 *
 * @example
 * // Returns posts related to the current post
 * findRelatedPosts(allPosts, currentPost, 3)
 *
 * @param allPosts - All available blog posts
 * @param currentPost - The current post to find relations for
 * @param limit - Maximum number of related posts to return
 * @returns Array of related blog posts
 */
export function findRelatedPosts(
  allPosts: BlogPost[],
  currentPost: BlogPost,
  limit: number = 3,
): BlogPost[] {
  // Don't include the current post in results
  const otherPosts = allPosts.filter((post) => post.url !== currentPost.url)

  // Calculate relevance score based on shared tags
  const currentTags = new Set(currentPost.frontmatter.tags || [])

  const scoredPosts = otherPosts.map((post) => {
    const postTags = post.frontmatter.tags || []

    // Count matching tags
    const sharedTags = postTags.filter((tag) => currentTags.has(tag)).length

    return {
      post,
      score: sharedTags,
    }
  })

  // Sort by score (highest first) and return the top matches
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}
