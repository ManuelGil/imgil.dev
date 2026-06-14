import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>

/**
 * Obtiene posts relacionados utilizando coincidencia de tags.
 * Si no existen suficientes coincidencias, completa con posts recientes.
 */
export function getRelatedPosts(
  posts: BlogPost[],
  currentSlug: string,
  tags: string[],
  limit = 3,
): BlogPost[] {
  const otherPosts = posts.filter(
    (post) => post.slug !== currentSlug && !post.data.draft,
  )

  const related = otherPosts
    .map((post) => ({
      post,
      score:
        post.data.tags?.filter((tag) => tags.includes(tag)).length ?? 0,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }

      return (
        (b.post.data.pubDate?.getTime() ?? 0) -
        (a.post.data.pubDate?.getTime() ?? 0)
      )
    })
    .map(({ post }) => post)

  if (related.length >= limit) {
    return related.slice(0, limit)
  }

  const recentPosts = otherPosts
    .filter((post) => !related.some((item) => item.slug === post.slug))
    .sort(
      (a, b) =>
        (b.data.pubDate?.getTime() ?? 0) -
        (a.data.pubDate?.getTime() ?? 0),
    )
    .slice(0, limit - related.length)

  return [...related, ...recentPosts]
}
