import { Metadata } from 'next'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { queryPublishedPosts } from '@/lib/notion/queries'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export const revalidate = 300 // 5 minutes

const getCachedPosts = unstable_cache(
  async () => {
    try {
      return await queryPublishedPosts()
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }
  },
  ['blog-posts'],
  { revalidate: 300 }
)

export const metadata: Metadata = {
  title: 'Blog | Mutech Business',
  description: 'Artículos sobre cómo iniciar un negocio correctamente, evitar errores comunes y construir una presencia en línea profesional.',
  alternates: {
    canonical: process.env.SITE_URL ? `${process.env.SITE_URL}/blog` : undefined,
  },
}

export default async function BlogPage() {
  const posts = await getCachedPosts()

  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Blog</h1>
            <p>Pensamiento estructurado para iniciar bien</p>
          </div>
        </section>

        <section className={styles.postsSection}>
          <div className="container">
            {posts.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No hay artículos publicados en este momento.</p>
              </div>
            ) : (
              <div className={styles.postsGrid}>
                {posts.map((post) => (
                  <article key={post.id} className={styles.postCard}>
                    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      {post.excerpt && (
                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                      )}
                      <time className={styles.postDate}>
                        {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

