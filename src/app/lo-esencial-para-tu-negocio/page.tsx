import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export default function LoEsencial() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.preHeadline}>FUNDAMENTOS</div>
            <h1 className={styles.title}>Lo esencial para empezar bien</h1>
            <p className={styles.subtitle}>
              Todo lo que debe saber antes de comenzar su primer negocio en Estados Unidos.
            </p>
          </div>
        </section>

        {/* Guides Grid Section */}
        <section className={styles.guidesSection}>
          <div className={styles.guidesGrid}>
            <Link href="/lo-esencial-para-tu-negocio/llc-velo-corporativo" className={styles.guideCard}>
              <h3>Por que todos me dicen que tengo que tener una LLC?</h3>
              <p>Qué es, como funciona y por que la gente no sabe lo que es el velo corporativo?</p>
              <span className={styles.badge}>12 min de lectura</span>
            </Link>
{/* 
            <Link href="/lo-esencial-para-tu-negocio/ein-cuenta-bancaria" className={styles.guideCard}>
              <h3>EIN + Cuenta Bancaria</h3>
              <p>Cómo separar tu negocio de tu vida personal</p>
              <span className={styles.badge}>10 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/seguro-coi" className={styles.guideCard}>
              <h3>Seguro + COI</h3>
              <p>Lo que necesitas para que empresas te digan 'sí'</p>
              <span className={styles.badge}>8 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/licencias-permisos" className={styles.guideCard}>
              <h3>Licencias y permisos</h3>
              <p>Lo que su negocio necesita para operar legalmente</p>
              <span className={styles.badge}>9 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/impuestos-negocio" className={styles.guideCard}>
              <h3>Impuestos del negocio</h3>
              <p>Lo mínimo para no meterse en problemas</p>
              <span className={styles.badge}>10 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/contratos-scope" className={styles.guideCard}>
              <h3>Contratos + Scope</h3>
              <p>Cómo evitar problemas con clientes</p>
              <span className={styles.badge}>9 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/cotizar-correctamente" className={styles.guideCard}>
              <h3>Cotizar correctamente</h3>
              <p>Sin regalar su trabajo</p>
              <span className={styles.badge}>10 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/comunicacion-atencion-al-cliente" className={styles.guideCard}>
              <h3>Comunicación y atención</h3>
              <p>Cómo trabajar sin conflictos</p>
              <span className={styles.badge}>9 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/conseguir-clientes" className={styles.guideCard}>
              <h3>Conseguir clientes</h3>
              <p>Sin ads, sin humo</p>
              <span className={styles.badge}>10 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/reputacion-reviews" className={styles.guideCard}>
              <h3>Reputación y reviews</h3>
              <p>Cómo ganar confianza y cerrar más trabajos</p>
              <span className={styles.badge}>9 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/marketing-local-sin-ads" className={styles.guideCard}>
              <h3>Marketing local sin ads</h3>
              <p>Cómo atraer clientes sin pagar publicidad</p>
              <span className={styles.badge}>10 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/cobrar-sin-miedo" className={styles.guideCard}>
              <h3>Cobrar sin miedo</h3>
              <p>Cómo poner precios y cobrar a tiempo</p>
              <span className={styles.badge}>8 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/presencia-online" className={styles.guideCard}>
              <h3>Presencia online</h3>
              <p>Website y contenido que sí genera llamadas</p>
              <span className={styles.badge}>7 min de lectura</span>
            </Link>

            <Link href="/lo-esencial-para-tu-negocio/google-business" className={styles.guideCard}>
              <h3>Google Business Profile</h3>
              <p>Cómo aparecer cuando buscan su servicio</p>
              <span className={styles.badge}>8 min de lectura</span>
            </Link> */}
          </div>
        </section>
      </main>
    </>
  )
}

