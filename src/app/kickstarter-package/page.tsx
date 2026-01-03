import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export default function KickstarterPackage() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>✓ Solo 5 espacios disponibles este mes</span>
            <h1>De invisible a encontrable en Google en 2 semanas</h1>
            <p>Para personas que quieren iniciar un negocio sin empezar mal</p>
            
            <div className={styles.painPoints}>
              <ul>
                <li>Los clientes lo encuentran sin pedirle el contacto</li>
                <li>Su sitio web explica su servicio por usted</li>
                <li>Da confianza desde el primer contacto</li>
                <li>Menos tiempo respondiendo lo mismo</li>
              </ul>
            </div>

            <div className={styles.heroCta}>
              <Link href="/apply" className={styles.ctaButton}>Aplicar ahora (2-3 min)</Link>
              <p className={styles.ctaMicrocopy}>Respuesta en 24-48 horas</p>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>De esto a esto en 14 días</h2>
            <p className={styles.sectionSubtitle}>La transformación que logran nuestros clientes</p>

            <div className={styles.transformationGrid}>
              <div className={`${styles.transformationCard} ${styles.before}`}>
                <h3>ANTES</h3>
                <ul>
                  <li>Explicando su negocio una y otra vez</li>
                  <li>Dando su número personal a todos</li>
                  <li>No aparece en búsquedas</li>
                  <li>¿Dónde lo encuentro?</li>
                </ul>
              </div>

              <div className={`${styles.transformationCard} ${styles.after}`}>
                <h3>DESPUÉS</h3>
                <ul>
                  <li>Su negocio se encuentra fácil</li>
                  <li>Reservaciones mientras duermes o trabajas</li>
                  <li>Tu sitio explica todo por ti 24/7</li>
                  <li>Una imagen profesional desde el inicio</li>
                </ul>
              </div>
            </div>
            <div className={styles.testimonial}>
  <p className={styles.testimonialText}>
    "Quería iniciar mi negocio, sabía que hacía bien mi trabajo, pero nadie me conocía.
    No tenía clientes ni recomendaciones.
    Decidí ordenar mi presencia en línea para que la gente pudiera encontrarme y entender qué hacía.
    Con el tiempo empezaron a llegar los primeros contactos.
    Sin presencia en línea, eso no habría pasado."
  </p>

  <div className={styles.testimonialAuthor}>
    <div className={styles.testimonialAvatar}>BM</div>
    <div className={styles.testimonialInfo}>
      <h4>Bryan Murgas</h4>
      <p>Fundador · Mutech Business</p>
    </div>
  </div>

  <div className={styles.testimonialResult}>
    <strong>Aprendizaje:</strong> la visibilidad no garantiza clientes, pero sin visibilidad no llega ninguno.
  </div>
</div>

          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>¿Por qué ahora?</h2>
            <p className={styles.sectionSubtitle}>Cada día que esperas cuesta dinero</p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>97%</div>
                <p className={styles.statLabel}>de las personas buscan negocios locales en Google</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>80%</div>
                <p className={styles.statLabel}>revisa en línea un negocio antes de contactarlo</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>70%</div>
                <p className={styles.statLabel}>prefieren ver información en línea antes de escribir o llamar</p>
              </div>
            </div>

            {/* <div className={styles.urgencyBanner}>
              <p>⚠️ Solo trabajamos con 5 negocios nuevos al mes. Quedan 2 espacios para enero 2026</p>
            </div> */}
          </div>
        </section>

      

        {/* What's Included Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Qué incluye exactamente</h2>
            <p className={styles.sectionSubtitle}>Todo lo que necesitas para empezar bien (y nada que no necesites)</p>

            <div className={styles.includesGrid}>
              <div className={styles.includeItem}>
                <h3>🎨 Logo profesional</h3>
                <p>3 opciones diseñadas específicamente para tu negocio. Tú eliges la mejor.</p>
              </div>

              <div className={styles.includeItem}>
                <h3>🌐 Sitio web funcional</h3>
                <p>Diseño limpio y profesional que explica tu negocio 24/7</p>
              </div>

              <div className={styles.includeItem}>
                <h3>📍 Google Business Profile</h3>
                <p>Aparece en Google Maps y búsquedas locales desde día 1</p>
              </div>

              <div className={styles.includeItem}>
                <h3>🔗 Dominio profesional</h3>
                <p>Tu dirección en internet (ejemplo: tunegocio.com)</p>
              </div>

              <div className={styles.includeItem}>
                <h3>📅 Sistema de reservas</h3>
                <p>Clientes pueden contactarte o agendar directamente</p>
              </div>

              <div className={styles.includeItem}>
                <h3>📖 Guía de marca</h3>
                <p>Cómo usar tu logo en camisas, tarjetas, stickers, etc.</p>
              </div>
            </div>

          </div>
        </section>

    

        {/* What You Need to Know */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.honestBox}>
              <h3>Lo que debe tener claro</h3>
              <ul>
                <li>No hacemos magia.</li>
                <li>No prometemos clientes inmediatos.</li>
                <li>No manejamos su negocio.</li>
                <li>No incluye marketing/anuncios.</li>
              </ul>
              <p className={styles.priceNote}>
                El precio es accesible porque el alcance es claro.
              </p>
            </div>
          </div>
        </section>

        {/* Is This For You? */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>¿Este paquete es para usted?</h2>
            
            <div className={styles.filterGrid}>
              <div className={`${styles.filterCard} ${styles.positive}`}>
                <h3>Sí, si…</h3>
                <ul>
                  <li>Quiere aparecer en Google sin complicarse</li>
                  <li>Quiere que los clientes puedan contactarlo o agendar fácil</li>
                  <li>Quiere empezar con algo bien hecho y necesita un poco de guía</li>
                </ul>
              </div>

              <div className={`${styles.filterCard} ${styles.negative}`}>
                <h3>No, si…</h3>
                <ul>
                  <li>Quiere resultados inmediatos sin hacer su parte</li>
                  <li>Quiere que alguien maneje su negocio por usted</li>
                  <li>Busca clientes de la noche a la mañana</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Empezar bien cambia todo.</h2>
            <p style={{ fontSize: '1.3rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: '1.6', marginTop: '2rem' }}>
              Si esto le hace sentido, aplique. Revisamos su caso y le decimos si este paquete es para usted.
            </p>
            <Link href="/apply" className={styles.ctaButton}>Aplicar ahora</Link>
          </div>
        </section>
      </main>
    </>
  )
}
