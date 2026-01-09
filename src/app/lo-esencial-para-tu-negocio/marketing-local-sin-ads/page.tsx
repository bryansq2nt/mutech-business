import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Marketing local sin ads: atraer clientes sin pagar anuncios | Mutech Business",
  description:
    "Guía práctica de marketing local para negocios de servicios: visibilidad, confianza y presencia sin gastar en publicidad.",
  keywords:
    "marketing local sin ads, marketing negocios servicios, atraer clientes local, marketing para hispanos",
}

export default function MarketingLocalSinAds() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Marketing local sin ads
          </div>
          <div className={styles.preHeadline}>CRECER</div>
          <h1 className={styles.title}>
            Marketing local sin ads: cómo atraer clientes sin pagar publicidad
          </h1>
          <p className={styles.subtitle}>
            No se trata de gritar más fuerte. Se trata de estar donde el cliente ya está.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 10 min de lectura</span>
            <span className={styles.badge}>📍 Visibilidad local</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Marketing Myth */}
          <div className={styles.whyBox}>
            <p>
              <strong>Muchos creen que marketing = anuncios.</strong> Que necesita gastar dinero 
              en Facebook Ads, Google Ads, o volantes en cada buzón.
            </p>
            <p>
              <strong>Para servicios locales, eso suele quemar dinero.</strong> Los anuncios funcionan 
              para algunos negocios, pero para servicios locales (limpieza, electricidad, landscaping), 
              hay formas más efectivas y más baratas.
            </p>
            <p>
              <strong>El cliente local compra por confianza y repetición.</strong> No compra porque 
              vio un anuncio. Compra porque:
            </p>
            <ul>
              <li>Vio su camioneta varias veces</li>
              <li>Un vecino lo recomendó</li>
              <li>Lo encontró en Google con buenas reviews</li>
              <li>Lo reconoce de algún lugar</li>
            </ul>
            <p>
              <strong>Frase clave:</strong> "El mejor marketing local es el que parece normal, 
              no el que parece publicidad."
            </p>
            <p>
              Si hace buen trabajo, está presente, y la gente lo reconoce, el marketing se hace solo. 
              Sin anuncios. Sin gastar dinero.
            </p>
          </div>

          {/* Section 2: How Local Clients Decide */}
          <h2>Cómo decide un cliente local (en la vida real)</h2>
          <p>
            <strong>El proceso real no es complicado:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Ve algo</strong><br />
              Ve su camioneta. Ve un vecino trabajando. Ve un flyer. Ve su nombre en algún lugar.
            </p>
            <p>
              <strong>2. Reconoce el nombre</strong><br />
              "Ah, ese nombre lo he visto antes." La repetición genera reconocimiento.
            </p>
            <p>
              <strong>3. Busca en Google</strong><br />
              Cuando necesita el servicio, busca su nombre o "electricista cerca de mí".
            </p>
            <p>
              <strong>4. Ve reviews</strong><br />
              Si tiene buenas reviews, confía. Si no tiene reviews, duda.
            </p>
            <p>
              <strong>5. Llama</strong><br />
              Si todo coincide (reconocimiento + reviews + disponibilidad), llama.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "El marketing local no busca clics. Busca reconocimiento."
          </p>
          <p>
            No necesita que el cliente haga clic en un anuncio. Necesita que el cliente reconozca 
            su nombre cuando lo necesite.
          </p>
          <p>
            <strong>Eso se logra con:</strong> Presencia física + Presencia digital + Repetición + Confianza.
          </p>

          {/* Section 3: Physical Presence That Works */}
          <h2>Presencia física que sí funciona</h2>
          <p>
            <strong>Su presencia física es su mejor marketing.</strong> Cada vez que alguien lo ve, 
            es publicidad gratuita.
          </p>
          <p>
            <strong>Ideas prácticas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Camioneta rotulada (simple, clara)</strong><br />
              Si tiene vehículo de trabajo, rótelo. Nombre, número, servicio. Simple. Claro. 
              No necesita diseño complicado. Solo que se lea bien.
            </p>
            <p>
              <strong>2. Uniforme limpio / logo visible</strong><br />
              Si usa uniforme, que esté limpio y con su nombre/logo visible. 
              Si no usa uniforme, que su ropa esté limpia y profesional.
            </p>
            <p>
              <strong>3. Tarjetas simples</strong><br />
              Tarjetas de presentación simples. Nombre, número, servicio, email (opcional). 
              No necesita diseño caro. Solo que sea clara.
            </p>
            <p>
              <strong>4. Yard signs (donde sea permitido)</strong><br />
              Si trabaja en un vecindario, un letrero pequeño en el jardín del cliente (con permiso) 
              puede generar más llamadas. Solo si está permitido y el cliente acepta.
            </p>
            <p>
              <strong>5. Dejar el lugar limpio y ordenado</strong><br />
              Cuando termina un trabajo, deje todo limpio y ordenado. Los vecinos lo ven. 
              Eso genera confianza.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Cada trabajo es un anuncio silencioso."
          </p>
          <p>
            Si hace buen trabajo, deja todo limpio, y está presente, los vecinos lo notan. 
            Y cuando necesitan el servicio, lo recuerdan.
          </p>
          <p>
            <strong>No necesita:</strong> Diseños caros, logos complicados, o materiales costosos. 
            Solo necesita estar presente y hacer buen trabajo.
          </p>

          {/* Section 4: Minimal Digital Presence */}
          <h2>Presencia digital mínima (pero bien hecha)</h2>
          <p>
            <strong>No necesita redes sociales complicadas.</strong> Necesita coherencia.
          </p>
          <p>
            <strong>Lo mínimo que necesita:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Google Business activo</strong><br />
              Perfil completo, con fotos, horarios, y reviews (ver guía de 
              <Link href="/lo-esencial-para-tu-negocio/google-business" className={styles.externalLink}> Google Business</Link>).
            </p>
            <p>
              <strong>2. Website claro</strong><br />
              Un website simple con su información, servicios, y cómo contactarlo 
              (ver guía de <Link href="/lo-esencial-para-tu-negocio/presencia-online" className={styles.externalLink}>Presencia online</Link>).
            </p>
            <p>
              <strong>3. Información consistente</strong><br />
              Mismo nombre, mismo número, misma información en todos lados. 
              Google Business, website, tarjetas, camioneta—todo debe coincidir.
            </p>
            <p>
              <strong>4. Fotos reales</strong><br />
              Fotos de su trabajo real, no stock photos. Los clientes quieren ver lo que hace.
            </p>
          </div>
          <p>
            <strong>Aclaración importante:</strong>
          </p>
          <p>
            <strong>No necesita:</strong> Instagram activo, Facebook activo, TikTok, o redes complicadas. 
            Para servicios locales, eso no es prioridad.
          </p>
          <p>
            <strong>Necesita:</strong> Google Business + Website simple + Información consistente.
          </p>
          <p>
            <strong>Frase clave:</strong> "No necesita redes complejas. Necesita coherencia."
          </p>
          <p>
            Si su información es consistente en Google, website, y materiales físicos, 
            el cliente confía. Si cambia en cada lugar, el cliente duda.
          </p>

          {/* Section 5: Strategic Local Relationships */}
          <h2>Relaciones locales estratégicas</h2>
          <p>
            <strong>Una buena relación local vale más que cien posts.</strong>
          </p>
          <p>
            Si un property manager, realtor, o contractor lo recomienda, consigue más clientes 
            que con cualquier anuncio.
          </p>
          <p>
            <strong>Alianzas reales que funcionan:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Property managers</strong><br />
              Si trabaja en mantenimiento o remodelación, los property managers siempre necesitan 
              contratistas confiables. Haga buen trabajo, cobre justo, y ellos lo recomiendan.
            </p>
            <p>
              <strong>2. Realtors</strong><br />
              Los agentes de bienes raíces siempre necesitan referencias de electricistas, 
              plomeros, y handymen para sus clientes. Déjeles tarjetas. Haga buen trabajo.
            </p>
            <p>
              <strong>3. HOAs (Homeowners Associations)</strong><br />
              Si trabaja en condominios, las HOAs necesitan contratistas para mantenimiento. 
              Contacte la oficina de administración.
            </p>
            <p>
              <strong>4. Contractors</strong><br />
              Si es especialista (ej: electricista), trabaje con contractors generales. 
              Ellos subcontratan especialistas.
            </p>
            <p>
              <strong>5. Administradores de edificios</strong><br />
              Si trabaja en edificios, los administradores necesitan contratistas confiables. 
              Haga buen trabajo y ellos lo llaman de nuevo.
            </p>
            <p>
              <strong>6. Negocios complementarios</strong><br />
              Si es electricista, trabaje con plomeros. Si es landscaper, trabaje con limpieza. 
              Se recomiendan mutuamente.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Una buena relación local vale más que cien posts."
          </p>
          <p>
            <strong>Cómo construir relaciones:</strong>
          </p>
          <ul>
            <li>Haga buen trabajo siempre</li>
            <li>Cobre precios justos</li>
            <li>Responda rápido</li>
            <li>Sea confiable</li>
            <li>Déjeles tarjetas</li>
            <li>Mantenga contacto (sin ser molesto)</li>
          </ul>
          <p>
            <strong>No es networking complicado.</strong> Es hacer buen trabajo y estar disponible.
          </p>

          {/* Section 6: Repetition Marketing */}
          <h2>Marketing de repetición (el que nadie valora)</h2>
          <p>
            <strong>El marketing más efectivo es el que nadie nota.</strong> Es la repetición.
          </p>
          <p>
            <strong>Marketing de repetición incluye:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Follow-up</strong><br />
              Después de cada trabajo, un mensaje simple: "¿Todo quedó bien? Si necesita algo más, avíseme."
            </p>
            <p>
              <strong>2. Mantenimiento</strong><br />
              Ofrezca servicios de mantenimiento. Limpieza recurrente, landscaping mensual, 
              revisiones anuales. El cliente que contrata mantenimiento es un cliente estable.
            </p>
            <p>
              <strong>3. Recordatorios</strong><br />
              Si hace limpieza de alfombras, recuerde al cliente cada 6 meses. 
              Si hace landscaping, recuerde cuando toque el siguiente corte.
            </p>
            <p>
              <strong>4. Servicios recurrentes</strong><br />
              Convierta trabajos de una vez en servicios recurrentes. Es más fácil mantener 
              un cliente que conseguir uno nuevo.
            </p>
          </div>
          <p>
            <strong>Ejemplos por industria:</strong>
          </p>
          <ul>
            <li>
              <strong>Limpieza:</strong> Limpieza recurrente (semanal, quincenal, mensual)
            </li>
            <li>
              <strong>Landscaping:</strong> Mantenimiento mensual de jardines
            </li>
            <li>
              <strong>Mantenimiento eléctrico:</strong> Revisiones anuales, mantenimiento preventivo
            </li>
            <li>
              <strong>Handyman:</strong> Lista de trabajos pequeños que se hacen en diferentes visitas
            </li>
          </ul>
          <p>
            <strong>Frase clave:</strong> "El cliente recurrente es marketing gratis."
          </p>
          <p>
            Si tiene clientes recurrentes, no necesita buscar clientes nuevos constantemente. 
            Y esos clientes recurrentes recomiendan a otros.
          </p>

          {/* Section 7: Common Mistakes */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes de marketing local:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Volantes sin identidad</strong><br />
                Si reparte volantes sin nombre claro, número visible, o servicio definido, 
                es perder tiempo y dinero. El volante debe ser claro y profesional.
              </li>
              <li>
                <strong>Publicar sin objetivo</strong><br />
                Si publica en redes sociales sin saber por qué, es perder tiempo. 
                Para servicios locales, Google Business es más importante que Instagram.
              </li>
              <li>
                <strong>Copiar tácticas de negocios grandes</strong><br />
                Si copia tácticas de empresas grandes (ej: campañas de email masivas), 
                probablemente no funcionen para su negocio local. Use tácticas locales.
              </li>
              <li>
                <strong>Bajar precios como marketing</strong><br />
                Si baja precios para atraer clientes, atrae clientes que solo buscan precio. 
                Esos clientes no son leales y no recomiendan. Mejor: precio justo + buen trabajo.
              </li>
              <li>
                <strong>Cambiar mensajes cada semana</strong><br />
                Si cambia su mensaje, logo, o identidad constantemente, el cliente no lo reconoce. 
                Sea consistente. La repetición genera reconocimiento.
              </li>
              <li>
                <strong>Ignorar relaciones locales</strong><br />
                Si solo se enfoca en anuncios y no construye relaciones con property managers, 
                realtors, o contractors, está perdiendo oportunidades. Las relaciones locales 
                generan más clientes que los anuncios.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "El marketing sin sistema se siente como perder el tiempo."
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5e1' }}>
              Si hace marketing sin sistema (publica sin objetivo, cambia mensajes, no mide nada), 
              se siente como perder el tiempo. Mejor: tenga un sistema simple y repítalo consistentemente.
            </p>
          </div>

          {/* Section 8: Minimum Local Marketing System */}
          <h2>El sistema mínimo de marketing local</h2>
          <p>
            No necesita marketing complicado. Este sistema mínimo funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Identidad clara</strong><br />
              Mismo nombre, mismo número, mismo mensaje en todos lados. 
              Google Business, website, tarjetas, camioneta—todo coincide.
            </p>
            <p>
              <strong>2. Presencia visible</strong><br />
              Camioneta rotulada (si aplica), uniforme limpio, tarjetas simples. 
              Que la gente lo vea y lo reconozca.
            </p>
            <p>
              <strong>3. Google activo</strong><br />
              Google Business optimizado, con fotos, reviews, e información actualizada. 
              Es donde el cliente lo busca.
            </p>
            <p>
              <strong>4. Reviews constantes</strong><br />
              Pida reviews a clientes contentos. Las reviews generan confianza y visibilidad 
              (ver guía de <Link href="/lo-esencial-para-tu-negocio/reputacion-reviews" className={styles.externalLink}>Reputación y reviews</Link>).
            </p>
            <p>
              <strong>5. Repetición</strong><br />
              Esté presente consistentemente. No es una vez. Es siempre. 
              La repetición genera reconocimiento.
            </p>
            <p>
              <strong>6. Relaciones</strong><br />
              Construya relaciones con property managers, realtors, contractors. 
              Las relaciones locales generan más clientes que los anuncios.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "No es creatividad. Es consistencia."
          </p>
          <p>
            No necesita ideas creativas complicadas. Necesita hacer esto bien, consistentemente, 
            y los clientes vienen.
          </p>
          <p>
            <strong>No necesita:</strong>
          </p>
          <ul>
            <li>Presupuesto grande de marketing</li>
            <li>Herramientas complicadas</li>
            <li>Estrategias de "growth hacking"</li>
            <li>Anuncios pagados</li>
          </ul>
          <p>
            <strong>Solo necesita:</strong> Identidad clara + Presencia visible + Google activo + 
            Reviews constantes + Repetición + Relaciones.
          </p>

          {/* Section 9: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Me reconocen localmente</strong> (mi nombre, mi camioneta, mi servicio)</li>
              <li>□ <strong>Mi información es consistente</strong> (mismo nombre, número, mensaje en todos lados)</li>
              <li>□ <strong>Mi trabajo deja huella</strong> (dejo todo limpio, ordenado, profesional)</li>
              <li>□ <strong>Me buscan en Google</strong> (Google Business activo, con reviews y fotos)</li>
              <li>□ <strong>Mantengo relaciones locales</strong> (property managers, realtors, contractors)</li>
              <li>□ <strong>No dependo de ads</strong> (mi marketing es presencia + relaciones + repetición)</li>
              <li>□ <strong>Tengo clientes recurrentes</strong> (servicios de mantenimiento, follow-ups)</li>
              <li>□ <strong>Soy consistente</strong> (no cambio mensajes, logos, o identidad constantemente)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene un sistema de marketing local.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Plan de marketing local sin ads</h3>
            <p>
              <strong>"Estrategia simple para negocios de servicios."</strong>
            </p>
            <p>
              Plan completo con acciones prácticas, checklist, y sistema mínimo para atraer clientes 
              sin gastar en publicidad. Enfoque local, humano y realista.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar plan
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere visibilidad constante sin pagar anuncios?</h3>
            <p>
              Le ayudamos a construir presencia local, reputación y sistemas que atraen clientes 
              de forma constante. Marketing real. Negocios reales.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Marketing real. Negocios reales.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/reputacion-reviews" className={styles.navButton}>
              ← Anterior: Reputación y reviews
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/escalar-negocio" className={styles.navButton}>
              Siguiente: Escalar negocio →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

