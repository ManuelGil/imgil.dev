import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '../../data/config/site'

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
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug ?? post.id}/`,
    })),
  })
}

