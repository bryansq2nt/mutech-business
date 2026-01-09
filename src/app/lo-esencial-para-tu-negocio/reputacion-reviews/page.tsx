import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Reputación y reviews: cómo ganar confianza y cerrar más trabajos | Mutech Business",
  description:
    "Guía clara para conseguir reviews reales, manejar reseñas negativas y construir reputación en negocios de servicios.",
  keywords:
    "reviews google negocios servicios, reputacion negocio local, reseñas clientes, google reviews español",
}

export default function ReputacionReviews() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Reputación y reviews
          </div>
          <div className={styles.preHeadline}>CRECER</div>
          <h1 className={styles.title}>
            Reputación y reviews: cómo ganar confianza y cerrar más trabajos
          </h1>
          <p className={styles.subtitle}>
            Antes de llamarlo, el cliente ya lo investigó. Esto es lo que ve.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 9 min de lectura</span>
            <span className={styles.badge}>⭐ Confianza y prueba social</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Reality */}
          <div className={styles.whyBox}>
            <p>
              <strong>El cliente no lo conoce.</strong> No sabe si hace buen trabajo. 
              No sabe si es confiable. No sabe si cumple lo que promete.
            </p>
            <p>
              <strong>El cliente no confía en promesas.</strong> No confía en lo que usted dice. 
              Confía en lo que otros dicen.
            </p>
            <p>
              Antes de llamarlo, el cliente ya lo investigó. Buscó su nombre en Google. 
              Vio sus reviews. Leyó lo que otros clientes dijeron.
            </p>
            <p>
              <strong>Frase clave:</strong> "Las reviews hablan cuando usted no está presente."
            </p>
            <p>
              Si tiene buenas reviews, el cliente confía. Si no tiene reviews, el cliente duda. 
              Si tiene malas reviews, el cliente busca a otro.
            </p>
            <p>
              <strong>Su reputación es su mejor vendedor.</strong> Y es gratis.
            </p>
          </div>

          {/* Section 2: What Reputation Is */}
          <h2>Qué es reputación (y qué no)</h2>
          <p>
            <strong>Reputación no es solo estrellas.</strong> No es solo tener 5 estrellas. 
            Es tener confianza real.
          </p>
          <p>
            <strong>Reputación incluye:</strong>
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>
                <strong>Consistencia:</strong> Hacer buen trabajo siempre, no solo a veces
              </li>
              <li>
                <strong>Comunicación:</strong> Responder rápido, ser claro, cerrar bien
              </li>
              <li>
                <strong>Respuestas:</strong> Responder todas las reviews (positivas y negativas)
              </li>
              <li>
                <strong>Fotos:</strong> Mostrar trabajo real, no stock photos
              </li>
              <li>
                <strong>Presencia activa:</strong> Actualizar Google Business, responder mensajes, estar presente
              </li>
            </ul>
          </div>
          <p>
            <strong>Frase clave:</strong> "Cinco estrellas sin contexto no generan confianza. Historias reales sí."
          </p>
          <p>
            Un cliente que lee "Excelente trabajo, llegó a tiempo, todo quedó perfecto" confía más 
            que si solo ve 5 estrellas sin comentario.
          </p>
          <p>
            <strong>La reputación es la suma de:</strong> Trabajo bien hecho + Comunicación clara + Reviews reales + Presencia activa.
          </p>

          {/* Section 3: When and How to Ask for Reviews */}
          <h2>Cuándo y cómo pedir reviews (sin incomodar)</h2>
          <p>
            <strong>El momento correcto es justo después de terminar, cuando el cliente está satisfecho.</strong>
          </p>
          <p>
            No pida reviews antes de terminar. No pida reviews si el cliente no está contento. 
            No pida reviews si hay algo pendiente.
          </p>
          <p>
            <strong>Cuándo pedir:</strong>
          </p>
          <ul>
            <li>Justo después de terminar el trabajo</li>
            <li>Cuando el cliente confirma que todo quedó bien</li>
            <li>En el follow-up (1-2 días después, si no pidió antes)</li>
          </ul>
          <p>
            <strong>Frases modelo (sin incomodar):</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Al terminar el trabajo:</strong><br />
              "Me alegra que haya quedado bien. Si le gustaría, una reseña en Google nos ayuda mucho. 
              Le envío el link por mensaje."
            </p>
            <p>
              <strong>En el follow-up:</strong><br />
              "¿Todo quedó bien? Si está contento con el trabajo, una reseña nos ayuda. 
              La mayoría de mis clientes me encuentran por reviews."
            </p>
            <p>
              <strong>Si el cliente está muy contento:</strong><br />
              "Me encanta que esté contento. Si tiene un minuto, una reseña en Google nos ayuda mucho. 
              Le envío el link directo."
            </p>
          </div>
          <p>
            <strong>Reglas importantes:</strong>
          </p>
          <ul>
            <li>
              <strong>Pida una vez:</strong> No insista. Si el cliente no quiere, no insista.
            </li>
            <li>
              <strong>Hágalo fácil:</strong> Envíe el link directo a su Google Business. 
              No pida que busquen manualmente.
            </li>
            <li>
              <strong>No ofrezca descuentos por reviews:</strong> Eso viola las políticas de Google 
              y puede hacer que eliminen sus reviews.
            </li>
            <li>
              <strong>Sea natural:</strong> No suene como robot. Sea humano.
            </li>
          </ul>
          <p>
            <strong>Frase clave:</strong> "Pedir reviews no es rogar. Es pedir feedback honesto."
          </p>

          {/* Section 4: Where Reviews Matter Most */}
          <h2>Dónde importan más las reviews</h2>
          <p>
            <strong>No todas las plataformas importan igual.</strong> Enfoque su energía donde realmente importa.
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Google Business Profile (prioridad #1)</strong><br />
              Es donde el cliente lo busca. Es donde aparece cuando buscan "electricista cerca de mí". 
              Es donde el cliente decide si llamarlo o no.
            </p>
            <p>
              <strong>2. Facebook (si el cliente lo usa)</strong><br />
              Algunos clientes buscan en Facebook. Si su cliente ideal usa Facebook, 
              tenga presencia ahí también.
            </p>
            <p>
              <strong>3. Plataformas locales (si aplica)</strong><br />
              Algunas ciudades tienen plataformas locales (ej: Nextdoor, Yelp en ciertas áreas). 
              Si su cliente busca ahí, esté presente.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Google no es una red social. Es una decisión de compra."
          </p>
          <p>
            El cliente que busca en Google ya decidió contratar. Solo está eligiendo a quién llamar. 
            Si usted tiene buenas reviews en Google, tiene ventaja.
          </p>
          <p>
            <strong>Recomendación:</strong> Enfoque 80% de su energía en Google Business. 
            El resto en otras plataformas solo si su cliente las usa.
          </p>

          {/* Section 5: How to Respond to Reviews */}
          <h2>Cómo responder reviews (positivas y negativas)</h2>
          <p>
            <strong>Responder reviews es parte de construir reputación.</strong> No es opcional. Es necesario.
          </p>
          <p>
            <strong>Reviews positivas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Agradecer</strong><br />
              "Gracias por su reseña. Me alegra que haya quedado contento."
            </p>
            <p>
              <strong>2. Mencionar el servicio</strong><br />
              "Fue un placer trabajar en [tipo de trabajo]. Si necesita algo más, estoy disponible."
            </p>
            <p>
              <strong>3. Ser humano</strong><br />
              No use respuestas genéricas. Sea específico. Sea humano.
            </p>
          </div>
          <p>
            <strong>Ejemplo de respuesta positiva:</strong><br />
            "Gracias, [Nombre]. Me alegra que la limpieza haya quedado bien. 
            Fue un placer trabajar en su casa. Si necesita algo más, estoy disponible."
          </p>
          <p>
            <strong>Reviews negativas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. No discutir</strong><br />
              No discuta en público. No culpe al cliente. No se justifique demasiado.
            </p>
            <p>
              <strong>2. Responder corto</strong><br />
              "Lamento que no haya quedado satisfecho. Me gustaría resolver esto. 
              Por favor contácteme directamente al [número]."
            </p>
            <p>
              <strong>3. Ofrecer solución offline</strong><br />
              Mueva la conversación fuera de las reviews. Resuelva el problema en privado.
            </p>
            <p>
              <strong>4. No borrar la review</strong><br />
              No puede borrar reviews. Pero puede responder y mostrar que se preocupa.
            </p>
          </div>
          <p>
            <strong>Ejemplo de respuesta negativa bien manejada:</strong><br />
            "Lamento que no haya quedado satisfecho con el trabajo. Me gustaría resolver esto. 
            Por favor contácteme al [número] para que podamos arreglarlo. Su satisfacción es importante."
          </p>
          <p>
            <strong>Frase clave:</strong> "Una mala review bien manejada genera más confianza que silencio."
          </p>
          <p>
            Si responde bien a una review negativa, otros clientes ven que usted se preocupa 
            y que resuelve problemas. Eso genera confianza.
          </p>

          {/* Section 6: What to Do If You Don't Have Reviews */}
          <h2>Qué hacer si no tiene reviews (o muy pocas)</h2>
          <p>
            <strong>Todos empiezan en cero.</strong> No se preocupe si no tiene reviews todavía.
          </p>
          <p>
            <strong>Lo que NO debe hacer:</strong>
          </p>
          <ul>
            <li>
              <strong>No comprar reviews:</strong> Google las detecta y las elimina. 
              Puede cerrar su cuenta.
            </li>
            <li>
              <strong>No pedir favores falsos:</strong> No pida a familiares que escriban reviews 
              si no trabajaron con usted.
            </li>
            <li>
              <strong>No desesperarse:</strong> Las reviews vienen con el tiempo. Sea paciente.
            </li>
          </ul>
          <p>
            <strong>Sistema simple para empezar:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. 10 trabajos bien cerrados</strong><br />
              Haga 10 trabajos bien. Cierre bien cada uno. Deje todo claro.
            </p>
            <p>
              <strong>2. 3-5 reviews reales</strong><br />
              De esos 10 trabajos, pida reviews a los 3-5 clientes más contentos. 
              No pida a todos. Solo a los que están realmente contentos.
            </p>
            <p>
              <strong>3. Fotos reales</strong><br />
              Suba fotos de su trabajo real a Google Business. No use stock photos.
            </p>
            <p>
              <strong>4. Consistencia</strong><br />
              Siga haciendo buen trabajo. Siga pidiendo reviews. Las reviews vienen con el tiempo.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Las primeras reviews son las más difíciles. Después se vuelve más fácil."
          </p>
          <p>
            Una vez que tenga 5-10 reviews, los clientes confían más. Y cuando confían más, 
            contratan más. Y cuando contratan más, puede pedir más reviews.
          </p>

          {/* Section 7: Common Mistakes */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores que dañan su reputación:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Comprar reviews</strong><br />
                Google detecta reviews falsas. Puede eliminar todas sus reviews y cerrar su cuenta. 
                No vale la pena el riesgo.
              </li>
              <li>
                <strong>Pelear con clientes en público</strong><br />
                Si un cliente deja una review negativa, no pelee en público. Responda con calma 
                y ofrezca resolver el problema offline.
              </li>
              <li>
                <strong>Responder con emoción</strong><br />
                Si está molesto por una review negativa, no responda inmediatamente. 
                Espere, calme, y responda con calma.
              </li>
              <li>
                <strong>Ignorar reviews negativas</strong><br />
                Si ignora una review negativa, otros clientes ven que no se preocupa. 
                Responda siempre, aunque sea corto.
              </li>
              <li>
                <strong>Mentir en el perfil</strong><br />
                No diga que tiene 10 años de experiencia si tiene 2. No diga que tiene licencia 
                si no la tiene. La verdad siempre sale.
              </li>
              <li>
                <strong>Prometer lo que no puede cumplir</strong><br />
                Si promete "llegar en 30 minutos" y siempre llega tarde, los clientes lo notan. 
                Sea honesto sobre tiempos y capacidades.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "Una review falsa puede destruir más que diez reales."
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>
              Si Google detecta reviews falsas, puede eliminar todas sus reviews, cerrar su cuenta, 
              y dañar su reputación permanentemente. No vale la pena.
            </p>
          </div>

          {/* Section 8: Minimum Reputation System */}
          <h2>Sistema mínimo de reputación (repetible)</h2>
          <p>
            No necesita complicarse. Este sistema mínimo funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Buen trabajo</strong><br />
              Haga el trabajo bien. Sin atajos. Sin excusas. El cliente contento recomienda.
            </p>
            <p>
              <strong>2. Cierre claro</strong><br />
              Al terminar, explique qué hizo, confirme que todo quedó bien, y deje todo claro.
            </p>
            <p>
              <strong>3. Pedido de review</strong><br />
              Si el cliente está contento, pida review. Envíe el link directo. No insista.
            </p>
            <p>
              <strong>4. Respuesta</strong><br />
              Responda todas las reviews (positivas y negativas). Sea humano. Sea específico.
            </p>
            <p>
              <strong>5. Seguimiento</strong><br />
              Mantenga presencia activa en Google Business. Actualice fotos. Responda mensajes.
            </p>
            <p>
              <strong>6. Repetición</strong><br />
              Haga esto consistentemente. No es una vez. Es siempre.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "La reputación no se acelera. Se construye."
          </p>
          <p>
            No puede construir reputación en una semana. Pero puede construirla en 3-6 meses 
            haciendo esto consistentemente.
          </p>
          <p>
            <strong>No necesita:</strong>
          </p>
          <ul>
            <li>Marketing complicado</li>
            <li>Estrategias de "growth hacking"</li>
            <li>Presupuesto grande</li>
            <li>Herramientas costosas</li>
          </ul>
          <p>
            <strong>Solo necesita:</strong> Buen trabajo + Comunicación clara + Pedir reviews + Responder reviews.
          </p>

          {/* Section 9: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Tengo Google Business activo</strong> (perfil completo, con fotos y horarios)</li>
              <li>□ <strong>Pido reviews en el momento correcto</strong> (justo después de terminar, cuando el cliente está contento)</li>
              <li>□ <strong>Respondo todas las reseñas</strong> (positivas y negativas, con calma y profesionalismo)</li>
              <li>□ <strong>Manejo críticas con calma</strong> (no discuto, ofrezco resolver offline)</li>
              <li>□ <strong>Uso reviews para generar confianza</strong> (comparto reviews en mi website o materiales)</li>
              <li>□ <strong>Mantengo presencia activa</strong> (actualizo fotos, respondo mensajes, estoy presente)</li>
              <li>□ <strong>No compro reviews</strong> (solo reviews reales de clientes reales)</li>
              <li>□ <strong>Soy honesto en mi perfil</strong> (no miento sobre experiencia, licencias, o capacidades)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene un sistema para construir reputación.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Scripts para pedir y responder reviews</h3>
            <p>
              <strong>"Mensajes listos para usar sin incomodar al cliente."</strong>
            </p>
            <p>
              Plantilla con scripts listos para pedir reviews (al terminar, en follow-up) y responder 
              reviews positivas y negativas. En español, claro y profesional.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar scripts
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere que su reputación trabaje por usted?</h3>
            <p>
              Le ayudamos a estructurar su presencia, reviews y comunicación para cerrar más trabajos. 
              Confianza real. Resultados reales.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Confianza real. Resultados reales.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/conseguir-clientes" className={styles.navButton}>
              ← Anterior: Conseguir clientes
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/marketing-local" className={styles.navButton}>
              Siguiente: Marketing local →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

