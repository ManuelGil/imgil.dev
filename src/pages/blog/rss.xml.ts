import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '../../config/site'

export async function GET() {
  const posts = await getCollection('blog')
  const site = siteConfig.baseUrl || 'https://imgil.dev'

  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())

  return rss({
    title: `${siteConfig.name} Blog`,
    description: siteConfig.description,
    site,
    // Match the site's clean-URL convention (no trailing slash)
    trailingSlash: false,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      '<language>en-us</language>',
      `<atom:link href="${site}/blog/rss.xml" rel="self" type="application/rss+xml"/>`,
    ].join(''),
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      // Full rendered post content so feed readers and LLM ingestion
      // don't need a second fetch to get the actual article
      content: post.rendered?.html,
      author: `support@imgil.dev (${post.data.author ?? siteConfig.name})`,
      categories: post.data.tags,
    })),
  })
}
