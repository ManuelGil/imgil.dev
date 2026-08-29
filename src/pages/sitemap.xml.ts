import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET() {
  const baseUrl = siteConfig.baseUrl || 'https://imgil.dev';

  // Static pages
  const staticRoutes = [
    '/',
    '/about',
    '/open-source-projects',
    '/support',
    '/talks-communities',
    '/blog',
  ];

  // Blog posts
  const blogPosts = await getCollection('blog');
  const publishedPosts = blogPosts.filter(post => !post.data.draft);

  const blogUrls = publishedPosts.map(post => ({
    loc: `/blog/${post.id}`,
    lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
  }));

  const urls = [...staticRoutes.map(loc => ({ loc, lastmod: undefined as string | undefined })), ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${baseUrl}${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
