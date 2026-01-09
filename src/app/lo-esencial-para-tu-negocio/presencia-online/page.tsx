import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Presencia online que sí genera llamadas | Mutech Business",
  description:
    "Website, Google Business y contenido básico para que su negocio aparezca y le llamen. Sin marketing complicado.",
  keywords:
    "presencia online negocio servicios, google business profile, website para servicios, marketing local hispanos",
}

export default function PresenciaOnline() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Presencia online
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Presencia online que sí genera llamadas
          </h1>
          <p className={styles.subtitle}>
            No necesita volverse influencer. Necesita que lo encuentren cuando lo buscan.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 7 min de lectura</span>
            <span className={styles.badge}>📞 Clientes locales</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: Common Error */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores piensan que "estar en redes sociales" es suficiente. 
              Publican fotos, esperan likes, y se preguntan por qué no llegan clientes.
            </p>
            <p>
              <strong>El problema:</strong>
            </p>
            <ul>
              <li>Solo redes sociales (sin website, sin Google Business)</li>
              <li>Fotos sin contexto (nadie sabe qué hace realmente)</li>
              <li>Nadie sabe: qué hace, dónde trabaja, cómo contactarlo</li>
              <li>No aparecen cuando alguien busca "electricista cerca de mí"</li>
            </ul>
            <p>
              <strong>Frase clave:</strong> "Si Google no entiende su negocio, sus clientes tampoco."
            </p>
            <p>
              La presencia online no es sobre likes. Es sobre aparecer cuando alguien necesita 
              su servicio y puede llamarlo fácilmente.
            </p>
          </div>

          {/* Section 2: What Actually Matters */}
          <h2>Qué SÍ importa para negocios de servicios</h2>
          <p>
            Para negocios de servicios locales, el orden correcto es:
          </p>
          <ol>
            <li>
              <strong>Google Business Profile</strong> (antes Google My Business)<br />
              Es donde aparecen cuando alguien busca su servicio cerca de ellos.
            </li>
            <li>
              <strong>Website claro</strong><br />
              Un lugar donde explican qué hacen y cómo contactarlos.
            </li>
            <li>
              <strong>Contenido básico con intención</strong><br />
              No publicar por publicar. Publicar lo que responde preguntas reales.
            </li>
          </ol>
          <p>
            <strong>Aclaración importante:</strong>
          </p>
          <p>
            <strong>Likes ≠ llamadas</strong><br />
            Puede tener 1,000 likes y cero clientes. O puede tener 50 seguidores y recibir 
            llamadas constantes. Lo que importa es que aparezca cuando lo buscan.
          </p>
          <p>
            <strong>Followers ≠ clientes</strong><br />
            Un seguidor en Instagram no es un cliente. Un cliente es alguien que busca su servicio, 
            lo encuentra, y lo llama.
          </p>
          <p>
            <strong>El objetivo no es ser famoso. Es ser encontrable.</strong>
          </p>

          {/* Section 3: Google Business Profile */}
          <h2>Google Business Profile (la base)</h2>
          <p>
            <strong>Qué es:</strong> Su perfil gratuito en Google que aparece cuando alguien busca 
            su tipo de negocio cerca de ellos.
          </p>
          <p>
            <strong>Por qué es crítico:</strong>
          </p>
          <p>
            Cuando alguien busca "electricista cerca de mí" o "limpieza en Charlotte", Google muestra 
            un mapa con negocios locales. Si usted no tiene Google Business Profile, no aparece ahí.
          </p>
          <p>
            <strong>Qué pasa cuando alguien busca:</strong>
          </p>
          <ul>
            <li>Ve su nombre y categoría</li>
            <li>Ve su teléfono (puede llamar con un click)</li>
            <li>Ve su dirección o área de servicio</li>
            <li>Ve sus fotos</li>
            <li>Ve sus reseñas</li>
            <li>Puede ver su website (si lo tiene)</li>
          </ul>
          <p>
            <strong>Checklist básico:</strong>
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Categoría correcta</strong> (ej: "Electricista", "Servicio de limpieza", "Contratista general")</li>
              <li>□ <strong>Área de servicio</strong> (ciudades o códigos postales donde trabaja)</li>
              <li>□ <strong>Teléfono</strong> (el mismo que usa para recibir llamadas)</li>
              <li>□ <strong>Horario</strong> (cuándo está disponible)</li>
              <li>□ <strong>Fotos reales</strong> (de su trabajo, no stock photos)</li>
              <li>□ <strong>Descripción clara</strong> (qué hace en 1-2 párrafos)</li>
              <li>□ <strong>Website</strong> (si tiene uno, conéctelo)</li>
              <li>□ <strong>Reseñas</strong> (pida a clientes satisfechos que dejen reseñas)</li>
            </ul>
          </div>
          <p>
            <strong>Tiempo de setup:</strong> 30-60 minutos. Es gratis. No hay excusa para no tenerlo.
          </p>

          {/* Section 4: The Website */}
          <h2>El website (no complicado)</h2>
          <p>
            <strong>El website no es para impresionar.</strong> Es para responder rápido:
          </p>
          <ul>
            <li>¿Quién es usted?</li>
            <li>¿Qué hace?</li>
            <li>¿Dónde trabaja?</li>
            <li>¿Cómo lo contacto?</li>
          </ul>
          <p>
            Si su website no responde estas preguntas en 10 segundos, está fallando.
          </p>
          <p>
            <strong>Secciones mínimas necesarias:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Home (Inicio)</strong><br />
              Título claro + qué hace + botón de contacto visible.
            </p>
            <p>
              <strong>2. Services (Servicios)</strong><br />
              Lista de servicios que ofrece. Simple, sin fluff.
            </p>
            <p>
              <strong>3. About (Sobre usted)</strong><br />
              Quién es, por qué hace lo que hace. Breve y humano.
            </p>
            <p>
              <strong>4. Contact (Contacto)</strong><br />
              Teléfono, email, o formulario. Múltiples formas de contacto.
            </p>
          </div>
          <p>
            <strong>No necesita:</strong>
          </p>
          <ul>
            <li>20 páginas</li>
            <li>Animaciones complicadas</li>
            <li>Videos profesionales</li>
            <li>Diseño caro</li>
          </ul>
          <p>
            <strong>Necesita:</strong> Claridad. Si alguien llega a su website y en 10 segundos 
            no sabe qué hace o cómo contactarlo, perdió un cliente potencial.
          </p>
          <p>
            <strong>Regla simple:</strong> Si su abuela puede entender qué hace y cómo contactarlo, 
            está bien. Si no, simplifique.
          </p>

          {/* Section 5: Content That Works */}
          <h2>Contenido que sí funciona</h2>
          <p>
            <strong>No publicar por publicar.</strong> Publicar contenido que responde preguntas reales.
          </p>
          <p>
            <strong>Contenido que funciona:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Antes / Después</strong><br />
              Muestre su trabajo. Fotos de proyectos completados. Esto genera confianza.
            </p>
            <p>
              <strong>2. Explicaciones simples</strong><br />
              "Por qué es importante [X]" o "Cómo saber si necesita [Y]". 
              Esto posiciona como experto.
            </p>
            <p>
              <strong>3. Casos reales</strong><br />
              "Resolvimos este problema para un cliente..." (sin nombres, solo el caso). 
              Esto muestra experiencia.
            </p>
            <p>
              <strong>4. Respuestas a preguntas comunes</strong><br />
              "¿Cuánto cuesta?" "¿Cuánto toma?" "¿Qué necesito?" 
              Esto reduce fricción.
            </p>
          </div>
          <p>
            <strong>Dónde publicar:</strong>
          </p>
          <ul>
            <li>En su Google Business Profile (posts semanales o mensuales)</li>
            <li>En su website (blog simple o sección de "casos")</li>
            <li>En redes sociales (si las usa, pero no es obligatorio)</li>
          </ul>
          <p>
            <strong>Frecuencia:</strong>
          </p>
          <p>
            No necesita publicar todos los días. 1-2 veces por semana es suficiente. 
            O incluso 1-2 veces al mes si el contenido es bueno.
          </p>
          <p>
            <strong>Calidad > cantidad.</strong> Un post que responde una pregunta real vale más 
            que 10 posts genéricos.
          </p>

          {/* Section 6: What You Don't Need */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Lo que NO necesita (y le pueden vender):
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Ads caros sin base</strong><br />
                Si no tiene Google Business optimizado ni website claro, los ads no van a funcionar. 
                Primero estructura, luego visibilidad.
              </li>
              <li>
                <strong>Videos virales</strong><br />
                No necesita videos profesionales ni contenido viral. Necesita aparecer cuando lo buscan.
              </li>
              <li>
                <strong>"Marketing mágico"</strong><br />
                Si alguien le promete "clientes garantizados" o "resultados en 24 horas", 
                probablemente es estafa. El marketing real toma tiempo y consistencia.
              </li>
              <li>
                <strong>Publicar todos los días</strong><br />
                No es necesario. Mejor publicar menos pero con intención. 
                Contenido que responde preguntas reales.
              </li>
              <li>
                <strong>Múltiples plataformas</strong><br />
                No necesita estar en Instagram, Facebook, TikTok, LinkedIn, y YouTube. 
                Elija 1-2 plataformas y hágalas bien.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase clave:</strong> "Primero estructura. Luego visibilidad."
            </p>
          </div>

          {/* Section 7: Minimum System */}
          <h2>Sistema mínimo de presencia online</h2>
          <p>
            No necesita complicarse. Este es el sistema mínimo que funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Perfil Google optimizado</strong><br />
              Complete toda la información. Agregue fotos reales. Pida reseñas a clientes.
            </p>
            <p>
              <strong>2. Website funcional</strong><br />
              4-5 páginas básicas. Claro, simple, con formas de contacto visibles.
            </p>
            <p>
              <strong>3. Contenido básico mensual</strong><br />
              1-2 posts al mes en Google Business o website. Antes/después, casos, o explicaciones.
            </p>
            <p>
              <strong>4. Reseñas reales</strong><br />
              Pida reseñas a clientes satisfechos. No compre reseñas falsas. 
              Las reseñas reales generan confianza.
            </p>
            <p>
              <strong>5. Mantenimiento simple</strong><br />
              Actualice horarios si cambian. Responda mensajes. Agregue fotos de trabajos nuevos.
            </p>
          </div>
          <p>
            <strong>Tiempo requerido:</strong> 2-3 horas al mes para mantenerlo actualizado.
          </p>
          <p>
            <strong>Resultado:</strong> Aparece cuando lo buscan. Los clientes pueden contactarlo fácilmente. 
            Genera confianza antes de la llamada.
          </p>

          {/* Section 8: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Aparezco en Google</strong> (cuando buscan mi servicio cerca de ellos)</li>
              <li>□ <strong>Tengo website</strong> (aunque sea simple, con información clara)</li>
              <li>□ <strong>Se entiende mi servicio</strong> (en 10 segundos alguien sabe qué hago)</li>
              <li>□ <strong>Hay forma fácil de contactarme</strong> (teléfono visible, botón de contacto)</li>
              <li>□ <strong>Tengo reseñas</strong> (al menos 3-5 reseñas reales)</li>
              <li>□ <strong>Fotos reales</strong> (de mi trabajo, no stock photos)</li>
              <li>□ <strong>Información actualizada</strong> (horarios, teléfono, área de servicio)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene presencia online que funciona.
            </p>
          </div>

          {/* Section 9: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Checklist: Presencia online mínima</h3>
            <p>
              <strong>"Lo esencial para que lo encuentren y lo llamen."</strong>
            </p>
            <p>
              Guía rápida de 1 página con checklist de Google Business, estructura de website, 
              y contenido que sí genera llamadas.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar checklist
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 10: Final CTA (Stronger than previous guides) */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere que todo esto funcione como un sistema?</h3>
            <p>
              Hasta aquí, hemos cubierto lo esencial: estructura legal, finanzas, contratos, 
              cobro, y presencia online.
            </p>
            <p>
              <strong>Pero esto no es solo información.</strong> Es un sistema completo que, 
              cuando funciona junto, transforma su negocio de "trabajo por trabajo" a 
              "negocio establecido".
            </p>
            <p>
              Nosotros le ayudamos a montar todo esto: presencia online profesional, estructura 
              legal clara, contratos listos, sistema de cobro ordenado, y clientes que lo encuentran.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin marketing innecesario. Sin humo.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/cobrar-sin-miedo" className={styles.navButton}>
              ← Anterior: Cobrar sin miedo
            </Link>
            <Link href="/apply" className={styles.navButton}>
              Solicitar paquete →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

