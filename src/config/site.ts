/**
 * Central configuration for site information
 *
 * @property name - The site author's name
 * @property title - The author's professional title
 * @property description - Short description for meta tags and SEO
 * @property baseUrl - The production URL of the website
 * @property social - Social media handles for the author
 */
export const siteConfig = {
  name: 'Manuel Gil',
  title: 'Software Developer & Open Source Maintainer',
  description:
    'Building and carrying open source tools over time. Some are active, some are quiet, all are published with responsibility.',
  baseUrl: 'https://imgil.dev',
  social: {
    github: 'ManuelGil',
    twitter: 'imgildev',
    linkedin: 'imgildev',
  },
  emoji: {
    home: '🦊',
    blog: '📝',
  },

  /**
   * Default Open Graph image to use for pages that don't specify one
   */
  ogImage:
    'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
}
