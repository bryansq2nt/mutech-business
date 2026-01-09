import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'



export default function Home() {
  return (
    <>
    
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
          <div className={styles.heroPreHeadline}>Comenzar un negocio no es fácil.</div>
          <h1>Hacerlo bien desde el inicio<br /><span className={styles.heroEmphasis}>marca la diferencia.</span></h1>
            <p>Está aquí porque quiere hacer las cosas bien.</p>
            
            <div className={styles.heroFeatures}>
              <div className={styles.featureTag}>✓ Aparecer en Google</div>
              <div className={styles.featureTag}>✓ Llegar a mas clientes</div>
              <div className={styles.featureTag}>✓ Trabajos profesionales</div>
            </div>

            <Link href="/apply" className={styles.ctaButton}>Iniciar mi presencia en linea</Link>
            <p className={styles.ctaSubtitle}>Toma 2–3 minutos</p>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Qué hacemos</h2>
            <p className={styles.sectionSubtitle}>
              Piense en nosotros como un "empujón" para su negocio.<br />
              Le ayudamos a saltarse esa etapa frustrante de no saber qué hacer primero y empezar con algo bien hecho.
            </p>

            <div className={styles.cardsGrid}>
              <div className={`${styles.card} ${styles.includeCard}`}>
                <h3>Incluimos</h3>
                <ul className={styles.includeList}>
                  <li>Un sitio web donde los clientes entienden qué hace y cómo contactarlo</li>
                  <li>Presencia en Google para empezar a recibir visitas</li>
                  <li>Un sistema de contacto o agenda para que le escriban o reserven</li>
                  <li>Todo listo para que lleguen sus primeros clientes</li>
                </ul>
              </div>

              <div className={`${styles.card} ${styles.excludeCard}`}>
                <h3>No incluimos</h3>
                <ul className={styles.excludeList}>
                  <li>Atender clientes en su nombre</li>
                  <li>Soluciones mágicas</li>
                  <li>Manejo de su negocio</li>                  
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mensaje honesto */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.honestSection}>
              <h2 className={styles.sectionTitle}>Mensaje honesto</h2>
              <div className={styles.honestSubtitle}>
                La presencia en línea es una herramienta, no el negocio.
              </div>

              <div className={styles.warningBox}>
                <span className={styles.warningBadge}>IMPORTANTE</span>
                <p className={styles.warningTitle}>Los clientes no llegan si:</p>
                <ul className={styles.warningList}>
                  <li>No contesta llamadas</li>
                  <li>No atiende bien</li>
                  <li>No hace buen trabajo</li>
                  <li>Tiene malas reseñas</li>
                </ul>
              </div>

              <div className={styles.successBox}>
                <span className={styles.successIcon}>✓</span>
                <div className={styles.successContent}>
                  <span className={styles.successLinePrimary}>Nosotros ponemos la base.</span>
                  <span className={styles.successLineSecondary}>El negocio lo hace usted.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Para quién es */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Para quién es</h2>
            
            <div className={styles.audienceGrid}>
              <div className={`${styles.audienceCard} ${styles.positive}`}>
                <h3>Esto es para usted si</h3>
                <ul>
                  <li>
                    <span>✓</span>
                    Está buscando construir su cartera de clientes
                  </li>
                  <li>
                    <span>✓</span>
                    Entiende que un negocio requiere esfuerzo
                  </li>
                  <li>
                    <span>✓</span>
                    Sabe hacer bien su trabajo, pero aún no lo conocen
                  </li>
                  <li>
                    <span>✓</span>
                    Quiere iniciar su negocio con algo serio y funcional
                  </li>
                </ul>
              </div>

              <div className={`${styles.audienceCard} ${styles.negative}`}>
                <h3>Esto NO es para usted si</h3>
                <ul>
                  <li>
                    <span>✗</span>
                    No está dispuesto a responder llamadas o mensajes
                  </li>
                  <li>
                    <span>✗</span>
                    Cree que la atención al cliente no importa
                  </li>
                  <li>
                    <span>✗</span>
                    Cree que la presencia en línea reemplaza el trabajo diario
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.finalCta}>
          <div className="container">
            <p className={styles.finalCtaPrimary}>Si esto le hace sentido, está en el lugar correcto.</p>
            <p className={styles.finalCtaSecondary}>Revisamos su caso y le decimos si este paquete es para usted.</p>
            <div className={styles.finalCtaFeatures}>
              <span className={styles.finalCtaFeature}>
                <span className={styles.finalCtaCheck}>✔</span>
                Sin compromiso
              </span>
              <span className={styles.finalCtaFeature}>
                <span className={styles.finalCtaCheck}>✔</span>
                Respuesta en 24–48 horas
              </span>
              <span className={styles.finalCtaFeature}>
                <span className={styles.finalCtaCheck}>✔</span>
                Solo si realmente le conviene
              </span>
            </div>
            <Link href="/apply" className={styles.ctaButton}>Ver si este paquete es para mí</Link>
          </div>
        </section>
      </main>
    </>
  )
}
