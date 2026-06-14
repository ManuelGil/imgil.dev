/**
 * Custom navigation handler for better cross-browser compatibility
 *
 * This module provides a custom navigation solution that works consistently
 * across all browsers, including Chrome. It replaces Astro's ClientRouter
 * which was causing navigation issues specifically in Chrome.
 *
 * @remarks
 * The original issue was that using Astro's ClientRouter with fallback="none"
 * caused navigation problems in Chrome but worked fine in Firefox. This custom
 * solution provides a consistent experience across all browsers.
 */

/**
 * Initializes the custom navigation handler
 *
 * This function:
 * 1. Intercepts clicks on internal links (starting with "/")
 * 2. Checks for modifier keys (Ctrl, Meta/Command)
 * 3. Uses window.location.href for standard navigation
 *
 * @param rootSelector - CSS selector for the container element (defaults to 'body')
 */
export function initCustomNavigation(rootSelector = 'body'): void {
  // Wait for DOM content to be loaded
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector(rootSelector)

    if (!root) {
      console.error('Custom navigation: Root element not found')
      return
    }

    // Add event listener to intercept link clicks
    root.addEventListener('click', (event) => {
      // Type assertion for TypeScript
      const e = event as MouseEvent
      const target = e.target as HTMLElement

      // Find closest anchor element
      const anchor = target.closest('a')

      if (!anchor || !anchor.href) return

      // Skip if the link is external or has target="_blank"
      const href = anchor.getAttribute('href') || ''
      if (!href.startsWith('/') || anchor.target === '_blank') return

      // Skip if modifier keys are pressed (allow default browser behavior)
      if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return

      // Prevent default link behavior
      e.preventDefault()

      // Navigate using standard browser navigation
      window.location.href = href
    })
  })
}
