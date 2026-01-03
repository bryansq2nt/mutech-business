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
            <h1>Empezar un negocio no es fácil.<br />Empezarlo mal lo hace mucho más difícil.</h1>
            <p>Probablemente está aquí porque quiere iniciar un negocio, pero no sabe por dónde empezar.</p>
            
            <div className={styles.heroFeatures}>
              <div className={styles.featureTag}>✓ Qué es prioridad</div>
              <div className={styles.featureTag}>✓ Qué errores evitar</div>
              <div className={styles.featureTag}>✓ Un empujón claro y ordenado</div>
            </div>

            <Link href="/apply" className={styles.ctaButton}>Aplicar (toma 2–3 minutos)</Link>
            <p className={styles.ctaSubtitle}>Respuesta en 24–48 horas</p>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Qué hacemos</h2>
            <p className={styles.sectionSubtitle}>
              Piense en nosotros como un "empujón" para su negocio.<br />
              Le ayudamos a saltarse esa etapa frustrante de no saber qué hacer primero.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <h3>Incluimos</h3>
                <ul>
                  <li>Sitio web sencillo y limpio</li>
                  <li>Base para su presencia en línea</li>
                  <li>Estructura para continuar</li>
                  <li>Claridad sobre próximos pasos</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>No incluimos</h3>
                <ul>
                  <li>Manejo del negocio</li>
                  <li>Contenido constante</li>
                  <li>Promesas de resultados</li>
                  <li>Magia instantánea</li>
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
              <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem', color: '#e2e8f0' }}>
                Tener un sitio web no significa que los clientes le van a llover.
              </p>

              <div className={styles.warningBox}>
                <p>Esto también afecta:</p>
                <ul>
                  <li>• Si no contesta llamadas</li>
                  <li>• Si no mantiene activo su negocio</li>
                  <li>• Si hace mal trabajo</li>
                  <li>• Si recibe malos reviews</li>
                </ul>
              </div>

              <div className={styles.successBox}>
                Nosotros le ayudamos a empezar. El crecimiento depende de usted.
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
                    Quiere emprender, pero se siente perdido
                  </li>
                  <li>
                    <span>✓</span>
                    Entiende que un negocio requiere esfuerzo
                  </li>
                  <li>
                    <span>✓</span>
                    Quiere algo sencillo para comenzar
                  </li>
                  <li>
                    <span>✓</span>
                    Prefiere claridad antes que promesas
                  </li>
                </ul>
              </div>

              <div className={`${styles.audienceCard} ${styles.negative}`}>
                <h3>Esto NO es para usted si</h3>
                <ul>
                  <li>
                    <span>✗</span>
                    Quiere resultados inmediatos sin trabajo
                  </li>
                  <li>
                    <span>✗</span>
                    Busca algo "rápido y barato"
                  </li>
                  <li>
                    <span>✗</span>
                    Espera que alguien haga todo por usted
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.finalCta}>
          <div className="container">
            <p>Si esto le hace sentido, aplique.</p>
            <p>Revisamos su caso y le decimos si este paquete es para usted.</p>
            <Link href="/apply" className={styles.ctaButton}>Aplicar ahora</Link>
          </div>
        </section>
      </main>
    </>
  )
}
