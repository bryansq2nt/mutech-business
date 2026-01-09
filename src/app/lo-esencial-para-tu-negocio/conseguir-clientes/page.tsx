import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cómo conseguir clientes para su negocio de servicios | Mutech Business",
  description:
    "Guía clara y realista para conseguir clientes en negocios de servicios: Google, referencias, presencia local y sistemas simples.",
  keywords:
    "como conseguir clientes servicios, clientes negocio local, marketing servicios sin ads, conseguir clientes hispanos",
}

export default function ConseguirClientes() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Conseguir clientes
          </div>
          <div className={styles.preHeadline}>CRECER</div>
          <h1 className={styles.title}>
            Cómo conseguir clientes para su negocio de servicios
          </h1>
          <p className={styles.subtitle}>
            No necesita volverse influencer. Necesita que lo encuentren y confíen en usted.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 10 min de lectura</span>
            <span className={styles.badge}>📞 Clientes reales</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Uncomfortable Truth */}
          <div className={styles.whyBox}>
            <p>
              La mayoría de emprendedores no falla por falta de talento. Hacen buen trabajo. 
              Saben lo que hacen.
            </p>
            <p>
              <strong>Falla porque nadie los ve.</strong>
            </p>
            <p>
              El cliente no busca marcas. No busca logos bonitos. No busca influencers con muchos seguidores.
            </p>
            <p>
              <strong>El cliente busca soluciones.</strong> Busca alguien que le resuelva el problema, 
              que llegue a tiempo, que haga bien el trabajo, y que cobre un precio justo.
            </p>
            <p>
              <strong>Frase clave:</strong> "El cliente no quiere el mejor logo. Quiere que alguien le resuelva el problema."
            </p>
            <p>
              Si nadie lo encuentra, si nadie confía en usted, si nadie lo recomienda, 
              no importa qué tan bueno sea su trabajo. No tendrá clientes.
            </p>
          </div>

          {/* Section 2: Where Clients Come From */}
          <h2>De dónde vienen los clientes (en la vida real)</h2>
          <p>
            <strong>En negocios de servicios, los clientes vienen de 4 lugares reales:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Google</strong><br />
              Cuando alguien busca "electricista cerca de mí" o "limpieza de casas hoy", 
              está listo para contratar. Si usted aparece, puede conseguir el trabajo.
            </p>
            <p>
              <strong>2. Referencias</strong><br />
              Un cliente feliz le recomienda a otro. Es el canal más poderoso porque la gente 
              confía más en personas que en anuncios.
            </p>
            <p>
              <strong>3. Presencia local</strong><br />
              La gente lo ve en su vecindario, en su camioneta, en flyers bien hechos. 
              La repetición genera confianza.
            </p>
            <p>
              <strong>4. Clientes repetidos</strong><br />
              El cliente que ya trabajó con usted vuelve. Es más barato repetir que buscar nuevos.
            </p>
          </div>
          <p>
            <strong>Aclaración importante:</strong>
          </p>
          <p>
            Redes sociales (Instagram, Facebook, TikTok) <strong>NO son prioridad</strong> para negocios de servicios.
          </p>
          <p>
            Los likes no pagan facturas. Los seguidores no contratan servicios. 
            El cliente que necesita un electricista no busca en Instagram. Busca en Google.
          </p>
          <p>
            <strong>No pierda tiempo publicando en redes si no tiene presencia en Google.</strong>
          </p>

          {/* Section 3: Google */}
          <h2>Google: cuando el cliente ya está listo para pagar</h2>
          <p>
            <strong>El cliente que busca en Google ya decidió gastar dinero.</strong>
          </p>
          <p>
            Búsquedas como:
          </p>
          <ul>
            <li>"electricista cerca de mí"</li>
            <li>"limpieza de casas hoy"</li>
            <li>"plomero disponible ahora"</li>
            <li>"landscaping [ciudad]"</li>
          </ul>
          <p>
            <strong>Estas búsquedas tienen intención directa.</strong> El cliente no está "explorando". 
            Está buscando contratar.
          </p>
          <p>
            <strong>El cliente no compara 20 opciones.</strong> Llama a 2-3. Elige al que:
          </p>
          <ul>
            <li>Responde rápido</li>
            <li>Suena profesional</li>
            <li>Tiene buenas reviews</li>
            <li>Está disponible</li>
          </ul>
          <p>
            <strong>Si usted aparece en Google con:</strong>
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>Google Business Profile optimizado (ver guía de <Link href="/lo-esencial-para-tu-negocio/google-business" className={styles.externalLink}>Google Business</Link>)</li>
              <li>Buenas reviews</li>
              <li>Fotos del trabajo</li>
              <li>Información clara</li>
            </ul>
          </div>
          <p>
            <strong>Usted puede conseguir esos clientes.</strong>
          </p>
          <p>
            <strong>Frase clave:</strong> "El cliente que busca en Google ya decidió gastar dinero."
          </p>
          <p>
            No necesita ser el primero en aparecer. Solo necesita aparecer, tener buenas reviews, 
            y responder rápido cuando llamen.
          </p>

          {/* Section 4: Referrals */}
          <h2>Referencias: el canal más poderoso</h2>
          <p>
            <strong>La gente confía más en personas que en anuncios.</strong>
          </p>
          <p>
            Si un amigo le dice "contraté a este electricista y quedó perfecto", usted confía más 
            que si ve un anuncio en Facebook.
          </p>
          <p>
            <strong>Un cliente feliz trae otros.</strong> Pero no automáticamente. Usted tiene que activarlo.
          </p>
          <p>
            <strong>Cómo activar referencias:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Hacer buen trabajo</strong><br />
              Obvio, pero fundamental. Si el trabajo no está bien, nadie recomienda.
            </p>
            <p>
              <strong>2. Cerrar bien</strong><br />
              Al terminar, explique qué hizo, confirme que todo quedó bien, y deje todo claro.
            </p>
            <p>
              <strong>3. Pedir recomendación sin pena</strong><br />
              Si el cliente está contento, pida la recomendación. No es malo. Es normal.
            </p>
          </div>
          <p>
            <strong>Frases modelo para pedir referencias:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Al terminar el trabajo:</strong><br />
              "Me alegra que haya quedado bien. Si conoce a alguien que necesite este servicio, 
              con gusto le atiendo. La mayoría de mis clientes vienen por recomendación."
            </p>
            <p>
              <strong>En el follow-up:</strong><br />
              "¿Todo quedó bien? Si conoce a alguien más que necesite [servicio], estaré encantado de ayudarle."
            </p>
            <p>
              <strong>Si el cliente está muy contento:</strong><br />
              "Me encanta que esté contento. Si tiene amigos o familiares que necesiten [servicio], 
              con gusto les atiendo. Puede darles mi número."
            </p>
          </div>
          <p>
            <strong>No sea tímido.</strong> Pedir referencias es parte del negocio. 
            Los buenos clientes lo entienden y lo hacen.
          </p>
          <p>
            <strong>Bonus:</strong> Si puede, ofrezca un pequeño descuento o beneficio por referir. 
            No es obligatorio, pero ayuda.
          </p>

          {/* Section 5: Local Presence */}
          <h2>Presencia local (sin marketing complicado)</h2>
          <p>
            <strong>Los negocios locales crecen donde la gente los ve repetidamente.</strong>
          </p>
          <p>
            No necesita un presupuesto grande de marketing. Necesita estar presente donde su cliente está.
          </p>
          <p>
            <strong>Ideas prácticas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Vecindarios</strong><br />
              Si trabaja en limpieza o landscaping, enfoque en 2-3 vecindarios cercanos. 
              La repetición genera confianza.
            </p>
            <p>
              <strong>2. Condominios</strong><br />
              Si hay condominios en su área, deje flyers en las oficinas de administración 
              o en tableros de anuncios.
            </p>
            <p>
              <strong>3. Property managers</strong><br />
              Si trabaja en mantenimiento o remodelación, contacte property managers locales. 
              Ellos siempre necesitan contratistas confiables.
            </p>
            <p>
              <strong>4. Realtors</strong><br />
              Los agentes de bienes raíces siempre necesitan referencias de electricistas, 
              plomeros, y handymen para sus clientes.
            </p>
            <p>
              <strong>5. Contractors</strong><br />
              Si es especialista (ej: electricista), trabaje con contractors generales. 
              Ellos subcontratan especialistas.
            </p>
            <p>
              <strong>6. Flyers simples (bien hechos)</strong><br />
              Un flyer limpio, con su número, servicio claro, y un call-to-action simple. 
              Distribuya en vecindarios donde trabaja.
            </p>
            <p>
              <strong>7. Camioneta rotulada</strong><br />
              Si tiene vehículo de trabajo, rótelo con su nombre, número, y servicio. 
              Es publicidad móvil gratuita.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Los negocios locales crecen donde la gente los ve repetidamente."
          </p>
          <p>
            No necesita estar en todos lados. Necesita estar presente consistentemente en 2-3 lugares 
            donde su cliente está.
          </p>

          {/* Section 6: Repeat Clients */}
          <h2>Clientes repetidos (el dinero silencioso)</h2>
          <p>
            <strong>Es más barato repetir que buscar nuevos.</strong>
          </p>
          <p>
            El cliente que ya trabajó con usted ya confía en usted. Ya sabe que hace buen trabajo. 
            Ya sabe cómo comunicarse con usted.
          </p>
          <p>
            <strong>Si usted hace buen trabajo y cierra bien, ese cliente vuelve.</strong>
          </p>
          <p>
            <strong>Ejemplos por industria:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Limpieza:</strong><br />
              Limpieza recurrente (semanal, quincenal, mensual). Un cliente recurrente vale más 
              que 10 clientes de una vez.
            </p>
            <p>
              <strong>Landscaping:</strong><br />
              Mantenimiento mensual de jardines. El cliente que contrata mantenimiento mensual 
              es un cliente estable.
            </p>
            <p>
              <strong>Mantenimiento eléctrico:</strong><br />
              Revisiones anuales, mantenimiento preventivo. El cliente que contrata mantenimiento 
              es un cliente de largo plazo.
            </p>
            <p>
              <strong>Handyman:</strong><br />
              El cliente que tiene una lista de trabajos pequeños. Usted puede hacerlos todos 
              en diferentes visitas.
            </p>
          </div>
          <p>
            <strong>Cómo activar clientes repetidos:</strong>
          </p>
          <ul>
            <li>
              <strong>Al terminar:</strong> "Si necesita algo más, avíseme. También hago [servicio relacionado]."
            </li>
            <li>
              <strong>Follow-up:</strong> "¿Todo quedó bien? Si necesita algo más, estoy disponible."
            </li>
            <li>
              <strong>Mantenimiento:</strong> "Para mantener [X] en buen estado, recomiendo revisión cada [tiempo]. 
              ¿Quiere que le avise cuando toque?"
            </li>
          </ul>
          <p>
            <strong>No es vender agresivo.</strong> Es ofrecer valor. Si el cliente necesita mantenimiento, 
            usted se lo ofrece. Es ganar-ganar.
          </p>

          {/* Section 7: Common Mistakes */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes al buscar clientes:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Publicar sin estrategia</strong><br />
                Publicar en redes sociales sin tener presencia en Google es perder tiempo. 
                El cliente no busca servicios en Instagram.
              </li>
              <li>
                <strong>Bajar precios para atraer clientes</strong><br />
                Si baja precios para conseguir clientes, atrae clientes que solo buscan precio. 
                Esos clientes no son leales y no recomiendan.
              </li>
              <li>
                <strong>Decir que sí a todo</strong><br />
                Si dice que sí a trabajos que no hace bien, genera malas reviews. 
                Es mejor decir "no" y mantener calidad.
              </li>
              <li>
                <strong>No responder rápido</strong><br />
                Si el cliente llama y no responde, llama a otro. Responda rápido (mismo día, idealmente en horas).
              </li>
              <li>
                <strong>No dar seguimiento</strong><br />
                Si termina un trabajo y desaparece, el cliente no vuelve. Haga follow-up simple: "¿Todo quedó bien?"
              </li>
              <li>
                <strong>No pedir reviews</strong><br />
                Si no pide reviews, no tiene reviews. Y sin reviews, no aparece en Google. 
                Pida reviews a clientes contentos.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "Buscar clientes desesperado atrae clientes problemáticos."
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>
              Si está desesperado por clientes, baja precios, dice que sí a todo, y acepta trabajos malos. 
              Eso atrae clientes problemáticos que no pagan bien, no recomiendan, y generan problemas.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>
              <strong>Mejor:</strong> Construya presencia, haga buen trabajo, cobre bien, y los clientes vienen solos.
            </p>
          </div>

          {/* Section 8: Minimum System */}
          <h2>El sistema mínimo para conseguir clientes</h2>
          <p>
            No necesita marketing complicado. Este sistema mínimo funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Google Business optimizado</strong><br />
              Aparezca cuando busquen su servicio. Tenga buenas reviews, fotos, e información clara.
            </p>
            <p>
              <strong>2. Comunicación profesional</strong><br />
              Responda rápido, sea claro, y cierre bien cada interacción (ver guía de 
              <Link href="/lo-esencial-para-tu-negocio/comunicacion-atencion-al-cliente" className={styles.externalLink}> Comunicación</Link>).
            </p>
            <p>
              <strong>3. Trabajo bien hecho</strong><br />
              Haga el trabajo bien. Sin atajos. Sin excusas. El cliente contento recomienda.
            </p>
            <p>
              <strong>4. Cierre correcto</strong><br />
              Al terminar, explique qué hizo, confirme que todo quedó bien, y deje todo claro.
            </p>
            <p>
              <strong>5. Review + referencia</strong><br />
              Si el cliente está contento, pida review y referencia. No es malo. Es normal.
            </p>
            <p>
              <strong>6. Repetición</strong><br />
              Haga esto consistentemente. No es una vez. Es siempre.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "No es magia. Es consistencia."
          </p>
          <p>
            No necesita tácticas complicadas. Necesita hacer esto bien, consistentemente, 
            y los clientes vienen.
          </p>

          {/* Section 9: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Aparezco en Google</strong> (Google Business optimizado, con reviews y fotos)</li>
              <li>□ <strong>Respondo rápido</strong> (mismo día, idealmente en horas)</li>
              <li>□ <strong>Mi servicio está claro</strong> (el cliente sabe qué hago y qué no hago)</li>
              <li>□ <strong>Cierro bien cada trabajo</strong> (explico qué hice, confirmo que quedó bien)</li>
              <li>□ <strong>Pido review</strong> (a clientes contentos, sin pena)</li>
              <li>□ <strong>Mantengo contacto</strong> (follow-up simple, ofrezco servicios relacionados)</li>
              <li>□ <strong>Pido referencias</strong> (sin pena, es parte del negocio)</li>
              <li>□ <strong>Estoy presente localmente</strong> (flyers, camioneta, vecindarios donde trabajo)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene un sistema para conseguir clientes.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Guía: Conseguir clientes sin ads</h3>
            <p>
              <strong>"Sistema simple y realista para servicios locales."</strong>
            </p>
            <p>
              Guía completa con estrategias prácticas, frases modelo, y checklist para conseguir 
              clientes sin depender de anuncios pagados.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar guía
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere un sistema real para conseguir clientes?</h3>
            <p>
              Le ayudamos a construir presencia, procesos y confianza para atraer clientes de forma constante. 
              Sin humo. Sin improvisar.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin humo. Sin improvisar.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/comunicacion-atencion-al-cliente" className={styles.navButton}>
              ← Anterior: Comunicación y atención
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/reputacion-reviews" className={styles.navButton}>
              Siguiente: Reputación y reviews →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

