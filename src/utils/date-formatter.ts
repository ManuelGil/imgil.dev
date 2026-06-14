/**
 * Date formatting utilities for consistent date display throughout the application
 *
 * These functions handle various date formatting needs for blog posts,
 * comments, and other time-sensitive content.
 */

/**
 * Formats a date into a readable string
 *
 * @param date - Date object to format
 * @param locale - Locale string (defaults to 'en-US')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Creates a relative time string (e.g., "2 days ago")
 *
 * @param dateString - ISO date string to format
 * @returns Relative time string
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return 'Today'
  } else if (diffInDays === 1) {
    return 'Yesterday'
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7)
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  } else {
    const years = Math.floor(diffInDays / 365)
    return `${years} ${years === 1 ? 'year' : 'years'} ago`
  }
}

/**
 * Formats a date for datetime HTML attribute
 *
 * @param date - Date to format
 * @returns ISO date string
 */
export function formatDateTimeAttribute(date: Date): string {
  return date.toISOString()
}
