import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { BlogContent } from 'app/components/blog-content'

// Force dynamic rendering - fetch fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let posts = await getBlogPosts()
  let post = posts.find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let posts = await getBlogPosts()
  let post = posts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? post.metadata.image
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: post.author?.name || 'Mir Tauhidul Islam',
            },
          }),
        }}
      />
      
      <article>
      
      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full mb-6 sm:mb-8 rounded-lg h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]">
          <img 
            src={post.coverImage} 
            alt={post.metadata.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.2] text-white break-words">
        {post.metadata.title}
      </h1>

      {/* Subtitle/Brief */}
      {post.metadata.summary && post.metadata.summary.trim() && (
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#909090] mb-0 leading-relaxed break-words tracking-normal">
          {post.metadata.summary}
        </p>
      )}

      {/* Author & Meta Information */}
      {post.author && (
        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-neutral-800">
          {post.author.profilePicture && (
            <img 
              src={post.author.profilePicture} 
              alt={post.author.name}
              className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full ring-1 sm:ring-2 ring-neutral-800 grayscale flex-shrink-0 object-cover"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1 leading-tight">
              {post.author.name}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#909090] leading-tight">
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt)}
              </time>
              {post.readTimeInMinutes > 0 && (
                <>
                  <span className="text-neutral-700">•</span>
                  <span>{post.readTimeInMinutes} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <BlogContent content={post.content} />

      {/* Tags at Bottom */}
      {post.tags && post.tags.length > 0 && (
        <div className="pt-4 sm:pt-6 border-t border-neutral-800">
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">Topics</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {post.tags.map((tag: any) => (
              <span 
                key={tag.slug}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-neutral-900 text-[#909090] rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      )}
      </article>
    </>
  )
}
