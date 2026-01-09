import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contratos + Scope de Trabajo: Cómo evitar problemas con clientes | Mutech Business",
  description:
    "Cómo usar contratos simples y definir el scope de trabajo para evitar malentendidos, trabajos extra y conflictos con clientes.",
  keywords:
    "contratos para servicios, scope de trabajo, contratos simples negocio, límites con clientes, agreement servicios",
}

export default function ContratosScope() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Contratos + Scope
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Contratos + Scope de Trabajo: Cómo evitar problemas con clientes
          </h1>
          <p className={styles.subtitle}>
            La mayoría de los conflictos no pasan por mala intención, sino por falta de claridad.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 9 min de lectura</span>
            <span className={styles.badge}>📄 Protección contractual</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Real Problem */}
          <div className={styles.whyBox}>
            <p>
              <strong>"Yo pensé que eso estaba incluido"</strong>
            </p>
            <p>
              <strong>"Pero usted no dijo nada"</strong>
            </p>
            <p>
              Estas frases son el resultado de trabajar sin claridad.
            </p>
            <p>
              <strong>El cliente no adivina.</strong> Si no está escrito, cada uno interpreta 
              diferente. Y cuando hay malentendido:
            </p>
            <ul>
              <li>Trabajos extra no pagados</li>
              <li>Discusiones incómodas</li>
              <li>Desgaste emocional</li>
              <li>Mala reputación</li>
            </ul>
            <p>
              <strong>Sin contrato, todo es interpretación.</strong> Con contrato claro, 
              ambos saben exactamente qué esperar.
            </p>
          </div>

          {/* Section 2: Fear of Contracts */}
          <h2>El miedo al contrato (y por qué es un error)</h2>
          <p>
            Muchos emprendedores evitan los contratos porque piensan: <strong>"el contrato espanta clientes"</strong>.
          </p>
          <p>
            <strong>Realidad:</strong> El contrato protege a ambos—a usted y al cliente.
          </p>
          <p>
            <strong>Clientes serios esperan claridad.</strong> Si un cliente se molesta porque 
            quiere un contrato, probablemente no es el tipo de cliente que usted quiere.
          </p>
          <p>
            Los clientes profesionales <strong>prefieren</strong> trabajar con contratos porque:
          </p>
          <ul>
            <li>Saben exactamente qué van a recibir</li>
            <li>Entienden cuánto van a pagar</li>
            <li>Se sienten protegidos también</li>
            <li>Ven que usted es profesional</li>
          </ul>
          <p>
            <strong>Frase clave:</strong> "El contrato no es desconfianza. Es respeto."
          </p>
          <p>
            Usted respeta su trabajo lo suficiente para documentarlo. Y respeta al cliente 
            lo suficiente para ser claro desde el inicio.
          </p>

          {/* Section 3: What is a Contract */}
          <h2>Qué es un contrato (en lenguaje simple)</h2>
          <p>
            Un contrato es simplemente un <strong>acuerdo por escrito</strong>.
          </p>
          <p>
            No tiene que ser largo ni legalista. No necesita 20 páginas de letras pequeñas.
          </p>
          <p>
            Un contrato simple debe responder estas preguntas:
          </p>
          <ul>
            <li><strong>Qué se hace:</strong> Descripción clara del servicio</li>
            <li><strong>Cuánto cuesta:</strong> Precio total y forma de pago</li>
            <li><strong>Cuándo se hace:</strong> Fechas de inicio y finalización</li>
            <li><strong>Qué NO se hace:</strong> Límites claros (scope)</li>
          </ul>
          <p>
            Eso es. Simple, claro, profesional.
          </p>
          <p>
            Puede ser un documento de Word, un PDF, o incluso un email bien estructurado 
            que ambos acepten. Lo importante es que <strong>esté escrito</strong>.
          </p>

          {/* Section 4: What is Scope */}
          <h2>Qué es el Scope de Trabajo (la pieza clave)</h2>
          <p>
            <strong>Scope</strong> = exactamente qué incluye el servicio.
          </p>
          <p>
            Es la parte <strong>MÁS importante</strong> del contrato porque define los límites.
          </p>
          <p>
            <strong>Ejemplos claros:</strong>
          </p>
          <p>
            <strong>Limpieza residencial:</strong>
          </p>
          <ul>
            <li>✓ Incluye: limpieza de baños, cocina, pisos, polvo</li>
            <li>✗ NO incluye: limpieza de ventanas exteriores, organización de closets, 
            limpieza de garaje</li>
          </ul>
          <p>
            <strong>Remodelación de baño:</strong>
          </p>
          <ul>
            <li>✓ Incluye: instalación de azulejos, grifería, iluminación, pintura</li>
            <li>✗ NO incluye: plomería mayor, electricidad nueva, permisos</li>
          </ul>
          <p>
            <strong>Frase importante:</strong> "Lo que no está escrito, no existe."
          </p>
          <p>
            Si no está en el scope, no está incluido. Punto. Esto evita el "yo pensé que..."
          </p>

          {/* Section 5: Real Examples by Service Type */}
          <h2>Ejemplos reales por tipo de servicio</h2>

          <div className={styles.checklistItem}>
            <h3>Limpieza</h3>
            <p>
              <strong>✓ Qué SÍ incluye:</strong>
            </p>
            <ul>
              <li>Limpieza de baños (sanitarios, espejos, duchas)</li>
              <li>Limpieza de cocina (superficies, estufa, fregadero)</li>
              <li>Aspirado y trapeado de pisos</li>
              <li>Quitar polvo de muebles y superficies</li>
              <li>Vaciar basura</li>
            </ul>
            <p>
              <strong>✗ Qué NO incluye:</strong>
            </p>
            <ul>
              <li>Limpieza de ventanas exteriores</li>
              <li>Limpieza de garaje o sótano</li>
              <li>Organización de closets o armarios</li>
              <li>Lavado de ropa o platos</li>
              <li>Limpieza profunda de alfombras</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Remodelación</h3>
            <p>
              <strong>✓ Qué SÍ incluye:</strong>
            </p>
            <ul>
              <li>Instalación de materiales especificados</li>
              <li>Pintura de áreas trabajadas</li>
              <li>Limpieza básica post-trabajo</li>
              <li>Disposición de materiales viejos (si se acordó)</li>
            </ul>
            <p>
              <strong>✗ Qué NO incluye:</strong>
            </p>
            <ul>
              <li>Permisos de construcción</li>
              <li>Plomería o electricidad nueva (a menos que se especifique)</li>
              <li>Materiales adicionales no cotizados</li>
              <li>Reparaciones de problemas pre-existentes</li>
              <li>Limpieza profunda de toda la casa</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Electricidad</h3>
            <p>
              <strong>✓ Qué SÍ incluye:</strong>
            </p>
            <ul>
              <li>Instalación de outlets/luces especificadas</li>
              <li>Cableado necesario para el trabajo</li>
              <li>Pruebas de funcionamiento</li>
              <li>Reparación de problemas causados por el trabajo</li>
            </ul>
            <p>
              <strong>✗ Qué NO incluye:</strong>
            </p>
            <ul>
              <li>Actualización de panel eléctrico completo</li>
              <li>Reparación de problemas eléctricos pre-existentes</li>
              <li>Permisos o inspecciones</li>
              <li>Materiales adicionales no especificados</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Landscaping / Jardinería</h3>
            <p>
              <strong>✓ Qué SÍ incluye:</strong>
            </p>
            <ul>
              <li>Corte de césped en áreas acordadas</li>
              <li>Podar arbustos especificados</li>
              <li>Mantenimiento básico de jardín</li>
              <li>Recolección de hojas (si es temporada)</li>
            </ul>
            <p>
              <strong>✗ Qué NO incluye:</strong>
            </p>
            <ul>
              <li>Plantación de árboles nuevos</li>
              <li>Instalación de sistemas de riego</li>
              <li>Diseño de jardín completo</li>
              <li>Mantenimiento de áreas no acordadas</li>
            </ul>
          </div>

          {/* Section 6: Changes and Extra Work */}
          <h2>Cambios y trabajos extra</h2>
          <p>
            Los cambios son normales. Lo que NO es normal es hacerlos sin documentar.
          </p>
          <p>
            <strong>Qué es un Change Order:</strong>
          </p>
          <p>
            Un "Change Order" (orden de cambio) es un documento que dice: "El cliente pidió 
            esto adicional, cuesta $X, y ambos estamos de acuerdo."
          </p>
          <p>
            <strong>Por qué NUNCA hacer extras sin aprobar:</strong>
          </p>
          <ul>
            <li>El cliente puede decir "yo no pedí eso"</li>
            <li>Puede no tener presupuesto para el extra</li>
            <li>Usted termina trabajando gratis</li>
            <li>Crea conflicto y desconfianza</li>
          </ul>
          <p>
            <strong>Flujo simple:</strong>
          </p>
          <ol>
            <li>Cliente pide cambio o trabajo adicional</li>
            <li>Usted cotiza el cambio (precio y tiempo)</li>
            <li>Cliente aprueba (por escrito o email)</li>
            <li>Usted ejecuta el trabajo</li>
            <li>Factura el cambio por separado o lo agrega a la factura final</li>
          </ol>
          <p>
            <strong>Frase firme:</strong> "Trabajo sin aprobar = trabajo no pagado."
          </p>
          <p>
            Si el cliente insiste en que haga algo sin aprobar primero, puede hacerlo, 
            pero documente el cambio antes de empezar. Un simple email: "Como discutimos, 
            voy a hacer [X] por $Y adicional. ¿Confirma?"
          </p>

          {/* Section 7: What a Simple Contract Should Have */}
          <h2>Qué debe tener un contrato simple (Checklist)</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Nombre del cliente</strong> (y dirección si aplica)</li>
              <li>□ <strong>Descripción del servicio</strong> (qué se va a hacer)</li>
              <li>□ <strong>Scope claro</strong> (qué SÍ y qué NO está incluido)</li>
              <li>□ <strong>Precio</strong> (total y desglose si aplica)</li>
              <li>□ <strong>Forma de pago</strong> (anticipo, pagos parciales, final)</li>
              <li>□ <strong>Fechas</strong> (inicio, hitos importantes, finalización)</li>
              <li>□ <strong>Cambios</strong> (cómo se manejan trabajos extra)</li>
              <li>□ <strong>Firma</strong> (digital o escrita de ambas partes)</li>
            </ul>
            <p>
              <strong>Opcional pero recomendado:</strong>
            </p>
            <ul>
              <li>Política de cancelación</li>
              <li>Garantía del trabajo (si aplica)</li>
              <li>Contacto de emergencia</li>
            </ul>
          </div>

          {/* Section 8: Common Errors */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes que causan problemas:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Acuerdos solo verbales</strong><br />
                "Nos entendimos por teléfono" no cuenta. Si no está escrito, 
                cada uno recuerda diferente. Siempre ponga por escrito.
              </li>
              <li>
                <strong>Mensajes de texto sin resumen</strong><br />
                Si acuerda por texto, envíe un email resumen después: 
                "Como acordamos por texto, el trabajo incluye X, Y, Z por $ABC."
              </li>
              <li>
                <strong>"Yo confío"</strong><br />
                La confianza es buena, pero la claridad es mejor. Un contrato 
                no significa que no confíe—significa que ambos están claros.
              </li>
              <li>
                <strong>No documentar cambios</strong><br />
                Si el cliente pide algo diferente a mitad del trabajo, 
                documente el cambio antes de hacerlo. Un email rápido es suficiente.
              </li>
              <li>
                <strong>Empezar sin anticipo (si aplica)</strong><br />
                Para trabajos grandes ($1,000+), es normal pedir un anticipo. 
                Esto protege a ambos: usted tiene garantía, el cliente tiene compromiso.
              </li>
            </ul>
          </div>

          {/* Section 9: How to Communicate Limits */}
          <h2>Cómo comunicar límites sin perder clientes</h2>
          <p>
            Poner límites no significa ser rudo. Significa ser profesional y claro.
          </p>
          <p>
            <strong>Tono firme y profesional:</strong>
          </p>
          <p>
            No pida disculpas por tener límites. Los límites son normales y necesarios.
          </p>
          <p>
            <strong>Frases recomendadas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Cuando algo no está incluido:</strong><br />
              "Eso no está incluido en el scope original, pero puedo cotizarlo por separado. 
              ¿Quiere que le envíe una cotización?"
            </p>
            <p>
              <strong>Para evitar malentendidos:</strong><br />
              "Para evitar malentendidos, el contrato incluye [X, Y, Z]. Cualquier cosa 
              adicional la cotizamos por separado."
            </p>
            <p>
              <strong>Cuando piden cambio:</strong><br />
              "Entiendo que quiere [cambio]. Eso es un trabajo adicional. Le cotizo el 
              cambio y si está de acuerdo, lo agregamos al proyecto."
            </p>
            <p>
              <strong>Si insisten en algo gratis:</strong><br />
              "Entiendo su necesidad, pero ese trabajo está fuera del scope acordado. 
              Puedo hacerlo, pero necesito cotizarlo primero para darle el precio exacto."
            </p>
          </div>
          <p>
            <strong>Clientes correctos respetan límites.</strong>
          </p>
          <p>
            Si un cliente se molesta porque usted quiere claridad, probablemente no es 
            el tipo de cliente que quiere. Los clientes serios <strong>prefieren</strong> 
            trabajar con alguien profesional que pone límites claros.
          </p>
          <p>
            Los clientes problemáticos son los que quieren todo gratis y se molestan 
            cuando usted dice "no". Esos clientes no valen la pena.
          </p>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Plantilla: Contrato + Scope simple</h3>
            <p>
              <strong>"Diseñado para servicios. Claro, corto y profesional."</strong>
            </p>
            <p>
              Plantilla lista para usar con todas las secciones necesarias. Solo complete 
              los espacios en blanco y ajuste según su tipo de servicio.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar plantilla
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere clientes claros y menos problemas?</h3>
            <p>
              Nosotros le ayudamos con la estructura completa: presencia online profesional, 
              contratos claros, y sistema para recibir clientes—todo ordenado desde la base.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Le ayudamos a ordenar su negocio desde la base.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/seguro-coi" className={styles.navButton}>
              ← Anterior: Seguro + COI
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/cobrar-sin-miedo" className={styles.navButton}>
              Siguiente: Cobrar sin miedo →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

