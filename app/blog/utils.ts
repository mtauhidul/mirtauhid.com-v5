import { getHashnodePosts } from '../../lib/hashnode'

// Ensure fresh data in production
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function getBlogPosts() {
  const hashnodePosts = await getHashnodePosts()
  const formattedHashnodePosts = hashnodePosts.map(post => ({
    metadata: {
      title: post.title,
      publishedAt: post.publishedAt,
      summary: post.subtitle || post.brief,
      image: post.coverImage,
    },
    slug: post.slug,
    content: post.content,
    tags: post.tags,
    readTimeInMinutes: post.readTimeInMinutes,
    author: post.author,
    coverImage: post.coverImage,
    subtitle: post.subtitle,
    source: 'hashnode' as const,
  }))

  return formattedHashnodePosts
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
