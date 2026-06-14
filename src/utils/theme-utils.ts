/**
 * Utilities for theme management
 * Provides functionality for theme preferences with minimal JavaScript
 *
 * Compatible with the design tokens system and optimized for performance
 */

/**
 * Available theme options
 */
export type ThemePreference = 'dark' | 'light' | 'system'

/**
 * Constants for theme storage and class names
 */
const THEME_STORAGE_KEY = 'theme-preference'
const LIGHT_THEME_CLASS = 'light-theme'
const DARK_THEME_CLASS = 'dark-theme'

/**
 * Gets the current theme preference from localStorage
 * Falls back to system preference if not set
 *
 * @returns The current theme preference
 */
export function getThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return 'dark' // Default for SSR

  const storedPreference = localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null

  // If preference is stored, return it
  if (storedPreference) {
    return storedPreference
  }

  // Otherwise, check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }

  // Default to dark theme
  return 'dark'
}

/**
 * Saves user theme preference to localStorage
 *
 * @param theme - Theme preference to save
 */
export function setThemePreference(theme: ThemePreference): void {
  if (typeof window === 'undefined') return

  localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}

/**
 * Applies the theme to the document by adding appropriate classes
 *
 * @param theme - Theme to apply
 */
export function applyTheme(theme: ThemePreference): void {
  if (typeof window === 'undefined') return

  // Remove existing theme classes
  document.documentElement.classList.remove(LIGHT_THEME_CLASS, DARK_THEME_CLASS)

  // Determine the theme to use
  const themeToApply =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
      : theme

  // Apply the theme class
  document.documentElement.classList.add(
    themeToApply === 'light' ? LIGHT_THEME_CLASS : DARK_THEME_CLASS,
  )

  // Update the meta theme-color tag for mobile devices
  updateMetaThemeColor(themeToApply)
}

/**
 * Updates the meta theme-color tag for mobile browsers
 * Improves the appearance in the browser UI
 *
 * @param theme - Current theme
 */
function updateMetaThemeColor(theme: 'light' | 'dark'): void {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')

  if (metaThemeColor) {
    // Use appropriate colors based on the theme
    metaThemeColor.setAttribute('content', theme === 'light' ? '#ffffff' : '#121212')
  }
}

/**
 * Initializes theme management
 * Should be called as early as possible in the page lifecycle
 */
export function initializeTheme(): void {
  if (typeof window === 'undefined') return

  const preference = getThemePreference()
  applyTheme(preference)

  // Listen for system preference changes if the user chose 'system'
  if (preference === 'system') {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      if (getThemePreference() === 'system') {
        applyTheme('system')
      }
    })
  }
}

/**
 * Creates and returns a theme toggle button component
 * Can be inserted into any part of the page
 *
 * @returns HTML button element for theme toggling
 */
export function createThemeToggle(): HTMLButtonElement {
  const button = document.createElement('button')
  button.setAttribute('aria-label', 'Toggle dark mode')
  button.setAttribute('title', 'Toggle dark mode')
  button.classList.add('theme-toggle')

  // Update button state
  const updateButtonState = () => {
    const currentTheme = getThemePreference()
    button.innerHTML =
      currentTheme === 'light'
        ? '🌙' // Moon icon for light mode (switch to dark)
        : '☀️' // Sun icon for dark mode (switch to light)
  }

  // Initial state
  updateButtonState()

  // Toggle theme on click
  button.addEventListener('click', () => {
    const currentTheme = getThemePreference()
    const newTheme: ThemePreference = currentTheme === 'light' ? 'dark' : 'light'
    setThemePreference(newTheme)
    updateButtonState()
  })

  return button
}
