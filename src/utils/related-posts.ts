// Utility to get related blog posts by tag and date
import type { BlogPost } from '../types/blog'

/**
 * Obtiene posts relacionados por tags y fecha. Usa 'url' como identificador único.
 * @param posts Lista de posts
 * @param currentUrl URL del post actual (en vez de slug)
 * @param tags Tags del post actual
 * @param limit Máximo de posts relacionados a devolver
 */
export function getRelatedPosts(
  posts: BlogPost[],
  currentUrl: string,
  tags: string[],
  limit: number = 3,
): BlogPost[] {
  const otherPosts = posts.filter((post) => post.url !== currentUrl && post.frontmatter.date)
  const relatedPosts = otherPosts
    .map((post) => {
      const matchCount = post.frontmatter.tags?.filter((tag) => tags.includes(tag)).length || 0
      return { post, matchCount }
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => {
      if (b.matchCount !== a.matchCount) {
        return b.matchCount - a.matchCount
      }
      return (
        new Date(b.post.frontmatter.date).getTime() - new Date(a.post.frontmatter.date).getTime()
      )
    })
    .slice(0, limit)
    .map((item) => item.post)

  // If not enough related, add recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = otherPosts
      .filter((post) => !relatedPosts.some((rp) => rp.url === post.url))
      .sort(
        (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
      )
      .slice(0, limit - relatedPosts.length)
    return [...relatedPosts, ...recentPosts]
  }
  return relatedPosts
}
