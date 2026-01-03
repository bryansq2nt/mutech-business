import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { unstable_cache } from 'next/cache'
import { getPostWithContentBySlug, getAllPublishedSlugs } from '@/lib/notion/queries'
import Navigation from '@/components/Navigation'
import MarkdownContent from '@/components/blog/MarkdownContent'
import styles from './page.module.css'

export const revalidate = 300 // 5 minutes

const getCachedPost = (slug: string) =>
  unstable_cache(
    async () => {
      try {
        return await getPostWithContentBySlug(slug)
      } catch (error) {
        console.error(`Error fetching post "${slug}":`, error)
        return null
      }
    },
    ['blog-post', slug],
    { revalidate: 300 }
  )

export async function generateStaticParams() {
  try {
    const slugs = await getAllPublishedSlugs()
    return slugs.map((slug) => ({
      slug,
    }))
  } catch (error) {
    console.error('Error generating static params for blog posts:', error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  // Validate slug format
  if (!/^[a-z0-9-]+$/i.test(params.slug)) {
    return {
      title: 'Post no encontrado',
    }
  }

  const getPost = getCachedPost(params.slug)
  const post = await getPost()

  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  const siteUrl = process.env.SITE_URL || ''

  return {
    title: `${post.title} | Mutech Business`,
    description: post.excerpt || `Artículo de Mutech Business sobre ${post.title}`,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${post.slug}`,
      ...(post.coverImage && {
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 675,
            alt: post.title,
          },
        ],
      }),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  // Validate slug format
  if (!/^[a-z0-9-]+$/i.test(params.slug)) {
    notFound()
  }

  const getPost = getCachedPost(params.slug)
  const post = await getPost()

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        <article className={styles.article}>
          <div className="container">
            {post.coverImage && (
              <div className={styles.coverImageWrapper}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className={styles.coverImage}
                  priority
                  unoptimized={
                    post.coverImage.includes('notion.so') ||
                    post.coverImage.includes('s3.us-west-2.amazonaws.com')
                  }
                />
              </div>
            )}

            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              {post.excerpt && (
                <p className={styles.excerpt}>{post.excerpt}</p>
              )}
              <time className={styles.date}>{publishedDate}</time>
            </header>

            <div className={styles.content}>
              <MarkdownContent markdown={post.markdown} />
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

