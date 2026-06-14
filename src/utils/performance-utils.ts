/**
 * Utilities for improving site performance
 * Implements best practices for loading and rendering optimization
 *
 * These utilities complement the existing optimizations:
 * - content-visibility: auto
 * - will-change: transform
 * - preconnect for external resources
 * - optimized SVG attributes
 */

/**
 * Configures lazy loading for images that support it
 * Falls back gracefully for browsers without native support
 *
 * @example
 * // In a component
 * import { setupImageLazyLoading } from '../utils/performance-utils';
 *
 * // In the component's script section
 * setupImageLazyLoading();
 */
export function setupImageLazyLoading() {
  // Check if IntersectionObserver is available
  if ('IntersectionObserver' in window && 'loading' in HTMLImageElement.prototype) {
    // Modern browsers with native lazy loading - nothing to do
    return
  }

  // Fallback for browsers without native lazy loading
  const lazyImages = document.querySelectorAll('img[loading="lazy"]')

  if (lazyImages.length === 0) return

  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target as HTMLImageElement
        const src = lazyImage.dataset.src

        if (src) {
          lazyImage.src = src
          lazyImage.removeAttribute('data-src')
        }

        lazyImageObserver.unobserve(lazyImage)
      }
    })
  })

  lazyImages.forEach((image) => {
    lazyImageObserver.observe(image)
  })
}

/**
 * Defers non-critical JavaScript execution
 * Helps improve initial page load performance
 *
 * @param fn - Function to execute after the page has loaded
 * @param timeout - Optional timeout in ms (defaults to 0 which means next event loop)
 */
export function deferScript(fn: () => void, timeout = 0) {
  if (document.readyState !== 'loading') {
    setTimeout(fn, timeout)
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(fn, timeout)
    })
  }
}

/**
 * Optimizes Core Web Vitals by reducing Cumulative Layout Shift (CLS)
 * Sets explicit width and height on elements to reserve space
 *
 * @param selector - CSS selector for elements to optimize
 * @param dimensions - Object with width and height to apply
 */
export function reserveSpaceForElement(
  selector: string,
  dimensions: { width: string; height: string },
) {
  deferScript(() => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      ;(el as HTMLElement).style.width = dimensions.width
      ;(el as HTMLElement).style.height = dimensions.height
    })
  })
}

/**
 * Applies content-visibility: auto to elements that are not in the viewport
 * Reduces initial rendering cost and improves performance
 *
 * @param selector - CSS selector for elements to optimize
 */
export function applyContentVisibility(selector: string) {
  deferScript(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement

        // Apply content-visibility: auto when element is not in viewport
        if (!entry.isIntersecting) {
          element.style.contentVisibility = 'auto'
          element.style.containIntrinsicSize = '0 500px' // Provide size hint
        } else {
          element.style.contentVisibility = 'visible'
        }
      })
    })

    elements.forEach((element) => {
      observer.observe(element)
    })
  })
}
