import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function BlogNotFound() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        <section style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}>
          <div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 800,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Artículo no encontrado
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              marginBottom: '2rem',
            }}>
              El artículo que busca no existe o ha sido eliminado.
            </p>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              Volver al blog
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

