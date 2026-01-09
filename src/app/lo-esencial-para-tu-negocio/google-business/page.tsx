import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Google Business Profile: Cómo aparecer cuando buscan su servicio | Mutech Business",
  description:
    "Guía clara para optimizar su Google Business Profile y aparecer cuando clientes buscan su servicio local.",
  keywords:
    "google business profile español, aparecer en google servicios, google business para hispanos, marketing local servicios",
}

export default function GoogleBusiness() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Google Business
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Google Business Profile: Cómo aparecer cuando buscan su servicio
          </h1>
          <p className={styles.subtitle}>
            Si alguien busca "electricista cerca de mí" y usted no aparece, ese cliente ya se fue.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 8 min de lectura</span>
            <span className={styles.badge}>📍 Búsquedas locales</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Key Moment */}
          <div className={styles.whyBox}>
            <p>
              Cuando alguien necesita un servicio (electricista, limpieza, plomería), 
              <strong> no navega redes sociales</strong>. Busca solución inmediata.
            </p>
            <p>
              Abre Google, escribe "electricista cerca de mí", y Google le muestra 3-5 opciones 
              en un mapa. Si usted no está ahí, ese cliente ya se fue.
            </p>
            <p>
              <strong>Google decide a quién mostrar</strong> basándose en qué tan claro y relevante 
              es su perfil. No es sobre ser el mejor técnicamente. Es sobre ser el más claro.
            </p>
            <p>
              <strong>Frase clave:</strong> "Google no recomienda al mejor. Recomienda al más claro."
            </p>
            <p>
              Si su Google Business Profile está optimizado, aparece cuando lo buscan. 
              Si no, simplemente no existe para esos clientes.
            </p>
          </div>

          {/* Section 2: What is Google Business Profile */}
          <h2>Qué es Google Business Profile</h2>
          <p>
            <strong>Google Business Profile</strong> (antes Google My Business) es su perfil 
            gratuito de Google que aparece cuando alguien busca su tipo de negocio.
          </p>
          <p>
            <strong>Dónde aparece:</strong>
          </p>
          <ul>
            <li>En <strong>Google Maps</strong> (el mapa que muestra negocios locales)</li>
            <li>En <strong>resultados locales</strong> (cuando buscan "servicio + ciudad")</li>
            <li>En <strong>búsquedas de voz</strong> ("Ok Google, encuentra un plomero cerca")</li>
          </ul>
          <p>
            Es básicamente la <strong>ficha de su negocio</strong> que Google muestra a los clientes.
          </p>
          <p>
            <strong>Aclaración importante:</strong>
          </p>
          <ul>
            <li><strong>NO es un website</strong> (aunque puede conectar su website)</li>
            <li><strong>NO es una red social</strong> (aunque puede publicar contenido)</li>
            <li><strong>ES su presencia en Google</strong> (gratis y esencial)</li>
          </ul>
          <p>
            Si no tiene Google Business Profile, no aparece en búsquedas locales. Punto.
          </p>

          {/* Section 3: How Google Thinks */}
          <h2>Cómo piensa Google (en simple)</h2>
          <p>
            Google decide a quién mostrar basándose en 3 factores principales:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Relevancia</strong><br />
              ¿Su perfil coincide con lo que busca el cliente?<br />
              Si alguien busca "electricista residencial" y su categoría es "electricista", 
              Google lo muestra. Si su categoría es "contratista general", puede que no.
            </p>
            <p>
              <strong>2. Distancia</strong><br />
              ¿Está cerca del cliente?<br />
              Google muestra negocios cercanos primero. Si define bien su área de servicio, 
              aparece cuando alguien busca en esa zona.
            </p>
            <p>
              <strong>3. Actividad</strong><br />
              ¿Su perfil está actualizado y activo?<br />
              Google prefiere mostrar negocios que responden mensajes, tienen fotos recientes, 
              y tienen reseñas. Un perfil abandonado no aparece tanto.
            </p>
          </div>
          <p>
            <strong>En lenguaje simple:</strong> Google muestra negocios que son relevantes, 
            están cerca, y están activos. Si optimiza estos 3 factores, aparece más.
          </p>
          <p>
            No necesita entender algoritmos complicados. Solo necesita ser claro, estar cerca, 
            y mantener su perfil activo.
          </p>

          {/* Section 4: Correct Setup */}
          <h2>Configuración correcta (Checklist)</h2>
          <p>
            La configuración correcta es la base. Si esto está mal, nada más importa.
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Checklist básico:</strong>
            </p>
            <ul>
              <li>□ <strong>Nombre real del negocio</strong> (como aparece en su LLC o documentos oficiales)</li>
              <li>□ <strong>Categoría principal correcta</strong> (ej: "Electricista", "Servicio de limpieza", "Contratista general")</li>
              <li>□ <strong>Área de servicio</strong> (ciudades o códigos postales donde realmente trabaja)</li>
              <li>□ <strong>Teléfono local</strong> (el mismo que usa para recibir llamadas, no un número genérico)</li>
              <li>□ <strong>Horario real</strong> (cuándo está disponible, no horarios que no cumple)</li>
              <li>□ <strong>Descripción clara</strong> (qué hace en 1-2 párrafos, sin palabras clave spam)</li>
              <li>□ <strong>Website conectado</strong> (si tiene website, conéctelo aquí)</li>
              <li>□ <strong>Dirección o área</strong> (dirección física si tiene oficina, o área de servicio si es móvil)</li>
            </ul>
          </div>
          <p>
            <strong>Errores comunes que lo sacan del mapa:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Categorías incorrectas:</strong><br />
              Si es electricista pero pone "contratista general", Google no lo muestra cuando 
              buscan "electricista". Sea específico.
            </p>
            <p>
              <strong>Nombres con spam:</strong><br />
              "Electricista #1 Charlotte Mejor Precio" es spam. Google prefiere "Juan Pérez Electricidad". 
              Use su nombre real.
            </p>
            <p>
              <strong>Áreas mal definidas:</strong><br />
              Si trabaja solo en Charlotte pero pone "todo Carolina del Norte", Google no sabe 
              dónde mostrarlo. Sea específico con su área real.
            </p>
            <p>
              <strong>Información inconsistente:</strong><br />
              Si su teléfono en Google Business es diferente al de su website, Google se confunde. 
              Use la misma información en todos lados.
            </p>
          </div>

          {/* Section 5: Photos That Help */}
          <h2>Fotos que sí ayudan</h2>
          <p>
            <strong>Las fotos le dicen a Google que usted es real.</strong>
          </p>
          <p>
            Google prefiere mostrar negocios con fotos reales, no stock photos. 
            Fotos reales = negocio real = más confianza = más apariciones.
          </p>
          <p>
            <strong>Qué subir:</strong>
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>
                <strong>Trabajos completados</strong><br />
                Antes/después, proyectos terminados, resultados reales.
              </li>
              <li>
                <strong>Equipo</strong><br />
                Sus herramientas, su vehículo, su espacio de trabajo.
              </li>
              <li>
                <strong>Vehículo</strong><br />
                Si tiene vehículo con logo o nombre del negocio, súbalo.
              </li>
              <li>
                <strong>Logo</strong><br />
                Si tiene logo, súbalo como foto de perfil.
              </li>
              <li>
                <strong>Usted trabajando</strong><br />
                Fotos de usted haciendo el trabajo (con permiso del cliente si aplica).
              </li>
            </ul>
          </div>
          <p>
            <strong>NO suba:</strong>
          </p>
          <ul>
            <li>Stock photos (fotos genéricas de internet)</li>
            <li>Fotos borrosas o de mala calidad</li>
            <li>Fotos que no tienen nada que ver con su servicio</li>
          </ul>
          <p>
            <strong>Frecuencia:</strong> Agregue fotos nuevas cada mes o cuando complete un proyecto. 
            Esto le dice a Google que está activo.
          </p>
          <p>
            <strong>Frase clave:</strong> "Las fotos le dicen a Google que usted es real."
          </p>

          {/* Section 6: Reviews */}
          <h2>Reseñas (el factor decisivo)</h2>
          <p>
            <strong>Las reseñas son el factor más importante</strong> después de la configuración básica.
          </p>
          <p>
            <strong>Por qué importan:</strong>
          </p>
          <ul>
            <li>Google muestra primero negocios con más y mejores reseñas</li>
            <li>Los clientes confían más en negocios con reseñas reales</li>
            <li>Las reseñas responden preguntas que el cliente tiene</li>
            <li>Muestran que usted es activo y confiable</li>
          </ul>
          <p>
            <strong>Cómo pedirlas sin incomodar:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Momentos correctos:</strong>
            </p>
            <ul>
              <li>Justo después de completar un trabajo (cuando el cliente está satisfecho)</li>
              <li>En persona, de forma natural: "Si está contento con el trabajo, me ayudaría mucho 
              si deja una reseña en Google"</li>
              <li>Por mensaje de texto, después del trabajo: "Gracias por confiar en nosotros. 
              Si puede, deje una reseña en Google Business"</li>
            </ul>
            <p>
              <strong>Frases recomendadas:</strong>
            </p>
            <ul>
              <li>"Si está contento con el trabajo, me ayudaría mucho si deja una reseña en Google"</li>
              <li>"Las reseñas nos ayudan a llegar a más clientes. Si puede, comparta su experiencia"</li>
              <li>"Si el trabajo cumplió sus expectativas, considere dejarnos una reseña"</li>
            </ul>
            <p>
              <strong>NO haga:</strong>
            </p>
            <ul>
              <li>Pedir reseñas antes de completar el trabajo</li>
              <li>Ofrecer descuentos a cambio de reseñas (viola reglas de Google)</li>
              <li>Pedir solo reseñas positivas (pida reseñas honestas)</li>
              <li>Crear reseñas falsas (Google las detecta y puede suspender su perfil)</li>
            </ul>
          </div>
          <p>
            <strong>Responder reseñas:</strong>
          </p>
          <p>
            Responda TODAS las reseñas (positivas y negativas). Esto muestra que está activo y 
            se preocupa por sus clientes.
          </p>
          <p>
            <strong>Para reseñas positivas:</strong> "Gracias por su confianza. Fue un placer trabajar con usted."
          </p>
          <p>
            <strong>Para reseñas negativas:</strong> Responda profesionalmente, ofrezca solucionar el problema, 
            y mantenga el tono respetuoso. Esto muestra profesionalismo.
          </p>

          {/* Section 7: Posts and Activity */}
          <h2>Publicaciones y actividad</h2>
          <p>
            <strong>No es para volverse influencer.</strong> Es para mostrar que su negocio está activo.
          </p>
          <p>
            Google prefiere mostrar negocios que publican contenido regularmente. No necesita publicar 
            todos los días. 1-2 veces por semana o incluso mensual es suficiente.
          </p>
          <p>
            <strong>Ejemplos de publicaciones que funcionan:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Trabajos recientes</strong><br />
              Foto de un proyecto completado + texto corto: "Proyecto de instalación eléctrica 
              completado en [área]. Gracias por confiar en nosotros."
            </p>
            <p>
              <strong>2. Avisos simples</strong><br />
              "Estamos disponibles esta semana para [servicio] en [área]. Llámenos para cotización."
            </p>
            <p>
              <strong>3. Fotos con texto corto</strong><br />
              Foto de su equipo o vehículo + "Listos para servirle en [área]."
            </p>
            <p>
              <strong>4. Tips útiles</strong><br />
              "Consejo: Si nota [problema común], puede ser señal de [solución]. Llámenos para revisión."
            </p>
          </div>
          <p>
            <strong>No necesita:</strong>
          </p>
          <ul>
            <li>Videos profesionales</li>
            <li>Diseños complicados</li>
            <li>Publicar todos los días</li>
            <li>Contenido viral</li>
          </ul>
          <p>
            <strong>Solo necesita:</strong> Mostrar que está activo. Una foto simple con texto 
            corto es suficiente.
          </p>

          {/* Section 8: Errors That Remove You */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores que lo sacan del mapa:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Perfiles abandonados</strong><br />
                Si crea el perfil y nunca lo actualiza, Google lo muestra menos. 
                Agregue fotos, responda mensajes, publique ocasionalmente.
              </li>
              <li>
                <strong>Información falsa</strong><br />
                Si pone información incorrecta (dirección falsa, teléfono que no funciona, 
                horarios que no cumple), Google puede suspender su perfil.
              </li>
              <li>
                <strong>Duplicados</strong><br />
                Si tiene múltiples perfiles para el mismo negocio, Google se confunde y puede 
                suspenderlos. Un negocio = un perfil.
              </li>
              <li>
                <strong>Violar reglas</strong><br />
                Comprar reseñas, usar spam en el nombre, o crear perfiles falsos puede resultar 
                en suspensión permanente.
              </li>
              <li>
                <strong>No responder mensajes</strong><br />
                Si los clientes le escriben por Google Business y no responde, Google lo muestra menos. 
                Responda en 24-48 horas.
              </li>
            </ul>
          </div>

          {/* Section 9: Minimum System */}
          <h2>Sistema mínimo Google Business</h2>
          <p>
            No necesita complicarse. Este es el sistema mínimo que funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Perfil optimizado</strong><br />
              Complete toda la información correctamente. Categoría, área, teléfono, horario, descripción.
            </p>
            <p>
              <strong>2. Fotos mensuales</strong><br />
              Agregue 2-3 fotos nuevas cada mes de trabajos completados o actividad del negocio.
            </p>
            <p>
              <strong>3. Reseñas constantes</strong><br />
              Pida reseñas a clientes satisfechos. Responda todas las reseñas (positivas y negativas).
            </p>
            <p>
              <strong>4. Respuestas activas</strong><br />
              Responda mensajes en 24-48 horas. Esto muestra que está activo.
            </p>
            <p>
              <strong>5. Publicaciones ocasionales</strong><br />
              1-2 publicaciones al mes son suficientes. Trabajos recientes, avisos, o tips simples.
            </p>
          </div>
          <p>
            <strong>Tiempo requerido:</strong> 30-60 minutos al mes para mantenerlo activo.
          </p>
          <p>
            <strong>Resultado:</strong> Aparece cuando lo buscan. Los clientes pueden llamarlo fácilmente. 
            Genera confianza antes de la llamada.
          </p>

          {/* Section 10: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Aparezco en Maps</strong> (cuando buscan mi servicio cerca de ellos)</li>
              <li>□ <strong>Me pueden llamar</strong> (teléfono visible y funciona)</li>
              <li>□ <strong>Mis datos son claros</strong> (categoría, área, horario correctos)</li>
              <li>□ <strong>Tengo reseñas</strong> (al menos 3-5 reseñas reales)</li>
              <li>□ <strong>Perfil activo</strong> (fotos recientes, respuestas a mensajes)</li>
              <li>□ <strong>Fotos reales</strong> (de mi trabajo, no stock photos)</li>
              <li>□ <strong>Descripción clara</strong> (se entiende qué hago en 10 segundos)</li>
              <li>□ <strong>Website conectado</strong> (si tengo website, está conectado)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene un Google Business Profile que funciona.
            </p>
          </div>

          {/* Section 11: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Checklist: Google Business que sí funciona</h3>
            <p>
              <strong>"Optimizado para servicios locales."</strong>
            </p>
            <p>
              Guía rápida de 1 página con checklist completo, frases para pedir reseñas, 
              y sistema mínimo de mantenimiento.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar checklist
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 12: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere aparecer cuando lo buscan?</h3>
            <p>
              Configuramos y optimizamos su Google Business Profile para generar llamadas reales. 
              Sin anuncios caros. Sin trucos. Solo optimización correcta.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin anuncios. Sin trucos.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/presencia-online" className={styles.navButton}>
              ← Anterior: Presencia online
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

