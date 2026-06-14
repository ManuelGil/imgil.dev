import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET() {
  const baseUrl = siteConfig.baseUrl || 'https://imgil.dev';

  // Static pages
  const staticRoutes = [
    '/',
    '/about/',
    '/open-source-projects/',
    '/support/',
    '/talks-communities/',
    '/blog/',
    '/blog/rss.xml',
  ];

  // Blog posts
  const blogPosts = await getCollection('blog');
  const blogRoutes = blogPosts
    .filter(post => !post.data.draft)
    .map(post => `/blog/${post.slug}/`);

  const urls = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      url => `  <sitemap>\n    <loc>${baseUrl}${url}</loc>\n  </sitemap>`
    )
    .join('\n')}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
