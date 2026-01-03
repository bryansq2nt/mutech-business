import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { unstable_cache } from 'next/cache'
import { getPostWithContentBySlug, getAllPublishedSlugs } from '@/lib/notion/queries'
import Navigation from '@/components/Navigation'
import PostBody from '@/components/blog/PostBody'
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
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              {post.excerpt && (
                <p className={styles.excerpt}>{post.excerpt}</p>
              )}
              <time className={styles.date}>{publishedDate}</time>
            </header>

            <div className={styles.content}>
              <PostBody markdown={post.markdown} />
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

