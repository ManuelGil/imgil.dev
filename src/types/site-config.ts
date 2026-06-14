/**
 * Type definitions for site configuration
 *
 * This file centralizes all type definitions related to site configuration,
 * navigation, and global settings to ensure consistency throughout the application.
 */

/**
 * Site configuration type
 */
export type SiteConfig = {
  /** Site name */
  name: string
  /** Site title for SEO */
  title: string
  /** Site description for SEO */
  description: string
  /** Base URL for the website */
  baseUrl: string
  /** Social media links */
  social: {
    github: string
    twitter: string
    linkedin: string
    twitch: string
    youtube: string
  }
  /** Emoji icons for different sections */
  emoji: {
    home: string
    projects: string
    talks: string
    aboutMe: string
    support: string
    blog: string
  }
  /** Default Open Graph image */
  ogImage: string
  /** Author information */
  author: {
    name: string
    url?: string
    email?: string
  }
}

/**
 * Navigation item type
 */
export type NavItem = {
  /** Navigation link text */
  text: string
  /** Navigation link URL */
  href: string
  /** Optional icon name */
  icon?: string
  /** Whether this item should only appear on mobile */
  mobileOnly?: boolean
  /** Whether this item should only appear on desktop */
  desktopOnly?: boolean
}
