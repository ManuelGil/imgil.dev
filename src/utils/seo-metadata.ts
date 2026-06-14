/**
 * SEO metadata configuration parameters
 */
export type SeoMetadataParams = {
  /** Page title */
  title: string
  /** Page description */
  description: string
  /** Content type (article, website, etc) */
  type?: string
  /** URL for the canonical link */
  url?: string
  /** Image URL for social sharing */
  image?: string
  /** Article publish date (for blog posts) */
  publishDate?: string
  /** Article modification date (for blog posts) */
  modifiedDate?: string
  /** Article author name (for blog posts) */
  author?: string
  /** Keywords for SEO (optional) */
  keywords?: string
}

/**
 * Generates complete SEO metadata including Open Graph and Twitter Card
 *
 * @param params - SEO metadata parameters
 * @returns Object containing all SEO metadata
 */
export function generateSeoMetadata(params: SeoMetadataParams) {
  const {
    title,
    description,
    type = 'website',
    url,
    image,
    publishDate,
    modifiedDate,
    author,
    keywords,
  } = params

  // Generate Open Graph metadata
  const openGraph = {
    title,
    description,
    type,
    url: url || '',
    image: image || '/images/og-image.jpg',
    ...(publishDate && { publishedTime: publishDate }),
    ...(modifiedDate && { modifiedTime: modifiedDate }),
    ...(author && { author }),
  }

  // Twitter Card metadata
  const twitter = {
    card: 'summary_large_image',
    title,
    description,
    image: image || '/images/og-image.jpg',
  }

  return {
    title,
    description,
    openGraph,
    twitter,
    keywords,
  }
}
