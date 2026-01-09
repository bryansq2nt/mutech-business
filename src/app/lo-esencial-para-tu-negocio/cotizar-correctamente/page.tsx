import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cómo cotizar correctamente un servicio | Mutech Business",
  description:
    "Guía práctica para calcular precios sin improvisar: costos, tiempo, margen, alcance y cómo presentar una cotización profesional.",
  keywords:
    "como cotizar servicios, calcular precios, cotizacion profesional, margen de ganancia, negocios de servicios",
}

export default function CotizarCorrectamente() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Cotizar correctamente
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Cómo cotizar correctamente (sin regalar su trabajo)
          </h1>
          <p className={styles.subtitle}>
            Una cotización no es un número. Es una decisión: o usted gana, o usted paga el trabajo con su vida.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 10 min de lectura</span>
            <span className={styles.badge}>💰 Precios con estructura</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Error That Ruins Businesses */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores cotizan por miedo. Tienen miedo a perder el trabajo. 
              Entonces ponen un número bajo "para asegurar el cliente".
            </p>
            <p>
              <strong>El patrón real:</strong>
            </p>
            <ul>
              <li>Cotizan por miedo (no por cálculo)</li>
              <li>Comparan con "lo que cobra la competencia" (sin saber si la competencia gana o pierde)</li>
              <li>Ponen un número sin calcular nada (improvisan)</li>
              <li>Terminan trabajando más de lo que cobraron (regalan tiempo)</li>
            </ul>
            <p>
              <strong>Resultado:</strong> Trabajan mucho, cobran poco, y al final no saben si ganaron o perdieron.
            </p>
            <p>
              <strong>Frase clave:</strong> "Si usted no calcula, usted apuesta."
            </p>
            <p>
              Una cotización bien hecha no es un número al azar. Es un cálculo que le dice: 
              "Si hago este trabajo a este precio, gano X. Si no, no lo hago."
            </p>
          </div>

          {/* Section 2: What a Good Quote Includes */}
          <h2>Qué incluye una cotización bien hecha</h2>
          <p>
            Una cotización profesional no es solo un precio. Es un documento que incluye:
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>
                <strong>Alcance (scope)</strong><br />
                Qué trabajo se va a hacer exactamente. Sin ambigüedades.
              </li>
              <li>
                <strong>Materiales (si aplica)</strong><br />
                Si necesita comprar materiales, herramientas, o suministros, debe estar incluido.
              </li>
              <li>
                <strong>Mano de obra / tiempo</strong><br />
                Cuántas horas va a trabajar. Incluyendo tiempo de manejo, preparación, y limpieza.
              </li>
              <li>
                <strong>Overhead (gastos del negocio)</strong><br />
                Gasolina, seguro, herramientas, software, taxes—todo lo que cuesta mantener el negocio.
              </li>
              <li>
                <strong>Margen / ganancia</strong><br />
                Su ganancia. Lo que queda después de cubrir costos y overhead.
              </li>
              <li>
                <strong>Riesgo / complejidad</strong><br />
                Si el trabajo es complicado o tiene incertidumbre, debe reflejarse en el precio.
              </li>
              <li>
                <strong>Términos y validez</strong><br />
                Cómo se paga, cuándo, y por cuánto tiempo es válida la cotización.
              </li>
            </ul>
          </div>
          <p>
            <strong>Si su cotización no incluye esto, está improvisando.</strong>
          </p>

          {/* Section 3: The Simple Formula */}
          <h2>La fórmula simple (sin Excel complicado)</h2>
          <p>
            No necesita un sistema complicado. Esta fórmula funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Tiempo estimado (horas)</strong><br />
              Cuántas horas va a trabajar. Incluya:
            </p>
            <ul>
              <li>Tiempo de trabajo directo</li>
              <li>Tiempo de manejo (ida y vuelta)</li>
              <li>Tiempo de preparación</li>
              <li>Tiempo de limpieza</li>
              <li>Tiempo de administración (cotización, invoice, etc.)</li>
            </ul>
            <p>
              <strong>2. Costo por hora real</strong><br />
              No es "lo que quiere ganar". Es lo que su negocio necesita cobrar para cubrir costos y ganar.
            </p>
            <p>
              <strong>3. Materiales / herramientas (si aplica)</strong><br />
              Todo lo que tiene que comprar para hacer el trabajo.
            </p>
            <p>
              <strong>4. Overhead %</strong><br />
              Un porcentaje para cubrir gastos del negocio (ver sección siguiente).
            </p>
            <p>
              <strong>5. Ganancia %</strong><br />
              Su margen. Lo que queda para usted después de todo.
            </p>
            <p>
              <strong>6. Contingencia (10-20%)</strong><br />
              Si hay incertidumbre o el trabajo puede complicarse, agregue un buffer.
            </p>
          </div>
          <p>
            <strong>Ejemplo simple (sin números rígidos):</strong>
          </p>
          <p>
            Trabajo de limpieza residencial:
          </p>
          <ul>
            <li>Tiempo: 4 horas (3 horas trabajo + 1 hora manejo/preparación)</li>
            <li>Costo por hora: $X (incluye overhead)</li>
            <li>Materiales: $Y (productos de limpieza)</li>
            <li>Ganancia: Z% del total</li>
            <li>Contingencia: 10% (por si hay más trabajo del esperado)</li>
          </ul>
          <p>
            <strong>Frase clave:</strong> "Usted no cobra por horas. Usted cobra por resultado, pero calcula con tiempo."
          </p>
          <p>
            El cliente paga por el resultado (casa limpia, trabajo completado). Pero usted calcula 
            el precio basándose en tiempo, costos y margen.
          </p>

          {/* Section 4: Real Hourly Cost */}
          <h2>Costo por hora real (la parte que nadie hace)</h2>
          <p>
            <strong>Su hora vale más que "lo que le gustaría ganar".</strong>
          </p>
          <p>
            Su negocio tiene gastos aunque no haya trabajo. Esos gastos deben estar incluidos en su precio.
          </p>
          <p>
            <strong>Overhead típico (gastos del negocio):</strong>
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>Gasolina / millas</li>
              <li>Seguro comercial</li>
              <li>Herramientas y equipo</li>
              <li>Software (tracking, invoicing)</li>
              <li>Taxes (estimated taxes)</li>
              <li>Tiempo de manejo (no cobrable directamente)</li>
              <li>Tiempo de cotización (no cobrable directamente)</li>
              <li>Llamadas y administración</li>
              <li>Marketing / publicidad</li>
              <li>Renovaciones (licencias, seguros, etc.)</li>
            </ul>
          </div>
          <p>
            <strong>Mini-ejercicio simple:</strong>
          </p>
          <p>
            Si sus gastos fijos mensuales del negocio son $500 (seguro, gasolina promedio, software, etc.) 
            y usted trabaja 80 horas cobrables al mes, su overhead por hora es aproximadamente $6.25.
          </p>
          <p>
            Eso significa que antes de ganar un centavo, cada hora debe cubrir $6.25 de gastos del negocio.
          </p>
          <p>
            <strong>Su costo por hora real =</strong> Lo que necesita para vivir + Overhead por hora + Ganancia.
          </p>
          <p>
            <strong>No es:</strong> "Quiero ganar $30/hora"<br />
            <strong>Es:</strong> "Mi negocio necesita cobrar $X/hora para cubrir todo y ganar Y."
          </p>

          {/* Section 5: Three Types of Pricing */}
          <h2>Tres tipos de precios (y cuándo usar cada uno)</h2>
          <p>
            No todos los trabajos se cotizan igual. Elija el método según el trabajo:
          </p>

          <div className={styles.checklistItem}>
            <h3>1. Precio fijo (flat)</h3>
            <p>
              <strong>Mejor cuando:</strong> El scope está claro y definido.
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>Limpieza residencial completa: $200</li>
              <li>Instalación de 10 outlets: $800</li>
              <li>Remodelación de baño (scope definido): $5,000</li>
            </ul>
            <p>
              <strong>Ventaja:</strong> Cliente sabe exactamente cuánto paga. Usted sabe exactamente cuánto gana.
            </p>
            <p>
              <strong>Desventaja:</strong> Si el scope cambia, necesita change order.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>2. Por hora</h3>
            <p>
              <strong>Mejor cuando:</strong> El trabajo es diagnóstico, incierto, o puede variar mucho.
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>Diagnóstico de problema eléctrico: $X/hora</li>
              <li>Reparaciones menores donde no sabe cuánto tomará</li>
              <li>Trabajos de consultoría</li>
            </ul>
            <p>
              <strong>Ventaja:</strong> Flexible. Si toma más tiempo, cobra más.
            </p>
            <p>
              <strong>Desventaja:</strong> Cliente no sabe el total final. Puede generar fricción.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>3. Por fase / por unidad</h3>
            <p>
              <strong>Mejor cuando:</strong> El trabajo se puede dividir en unidades claras.
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>Limpieza: $X por cuarto, $Y por baño</li>
              <li>Pintura: $X por panel, $Y por habitación</li>
              <li>Landscaping: $X por visita, $Y por corte</li>
            </ul>
            <p>
              <strong>Ventaja:</strong> Escalable. Cliente puede agregar o quitar unidades.
            </p>
            <p>
              <strong>Desventaja:</strong> Puede ser complicado si el trabajo no se divide fácilmente.
            </p>
          </div>

          <p>
            <strong>Recomendación:</strong> Para la mayoría de trabajos, precio fijo funciona mejor. 
            Es más claro para el cliente y más predecible para usted.
          </p>

          {/* Section 6: Avoiding Scope Creep */}
          <h2>Cómo evitar perder por scope creep</h2>
          <p>
            <strong>El scope mal definido destruye la cotización.</strong>
          </p>
          <p>
            Si no define claramente qué incluye y qué no, el cliente puede pedir más trabajo sin pagar más. 
            Eso es "scope creep" (expansión del alcance).
          </p>
          <p>
            <strong>La solución:</strong> Cambios = Change Order (ver guía de <Link href="/lo-esencial-para-tu-negocio/contratos-scope" className={styles.externalLink}>Contratos + Scope</Link>).
          </p>
          <p>
            <strong>Frases modelo para usar:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Si piden algo adicional:</strong><br />
              "Eso no está incluido en el scope original, pero le preparo un cambio de alcance con el precio adicional."
            </p>
            <p>
              <strong>Si insisten:</strong><br />
              "Podemos hacerlo, pero ajusta el precio. Le envío una cotización del cambio."
            </p>
            <p>
              <strong>Si dicen "es rápido":</strong><br />
              "Entiendo, pero cualquier trabajo adicional requiere cotización. Es para mantener todo claro."
            </p>
          </div>
          <p>
            <strong>Regla simple:</strong> Si no está en el scope original, es cambio. 
            Y los cambios se cotizan y aprueban por separado.
          </p>

          {/* Section 7: Warning Signs */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Señales de que usted está cotizando mal:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Usted siente pena al decir el precio</strong><br />
                Si tiene que "prepararse mentalmente" para decir el precio, probablemente está cotizando bajo.
              </li>
              <li>
                <strong>Usted siempre "baja" el precio sin razón</strong><br />
                Si el cliente duda y usted inmediatamente baja el precio, no tiene estructura. 
                Está negociando desde el miedo.
              </li>
              <li>
                <strong>Usted termina trabajando más horas de las que pensó</strong><br />
                Si siempre termina trabajando más de lo que cotizó, está calculando mal el tiempo.
              </li>
              <li>
                <strong>Usted no sabe cuánto ganó al final</strong><br />
                Si termina un trabajo y no sabe si ganó o perdió, no está trackeando costos reales.
              </li>
              <li>
                <strong>Usted cotiza diferente dependiendo del cliente</strong><br />
                Si cotiza $500 a un cliente y $300 a otro por el mismo trabajo, no tiene sistema. 
                Está improvisando.
              </li>
              <li>
                <strong>Usted no puede explicar su precio</strong><br />
                Si el cliente pregunta "¿por qué cuesta tanto?" y usted no sabe qué decir, 
                no calculó—improvisó.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "Si usted no puede explicar su precio, usted no controla su negocio."
            </p>
          </div>

          {/* Section 8: How to Present Quote */}
          <h2>Cómo presentar la cotización (para que suene profesional)</h2>
          <p>
            Una cotización bien presentada genera confianza y reduce preguntas. Esta es la estructura:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Resumen del trabajo</strong><br />
              "Limpieza residencial completa de casa de 3 habitaciones, 2 baños, cocina y sala."
            </p>
            <p>
              <strong>2. Qué incluye</strong><br />
              "Incluye: limpieza de baños, cocina, pisos, polvo, y vaciar basura. 
              Tiempo estimado: 4 horas."
            </p>
            <p>
              <strong>3. Qué NO incluye</strong><br />
              "No incluye: limpieza de ventanas exteriores, garaje, o organización de closets."
            </p>
            <p>
              <strong>4. Precio total</strong><br />
              "Precio total: $XXX (incluye materiales y mano de obra)"
            </p>
            <p>
              <strong>5. Forma de pago</strong><br />
              "Forma de pago: 50% depósito al aceptar, 50% al completar el trabajo."
            </p>
            <p>
              <strong>6. Tiempo estimado</strong><br />
              "Tiempo estimado de trabajo: 4 horas. Fecha propuesta: [fecha]."
            </p>
            <p>
              <strong>7. Validez (7-14 días)</strong><br />
              "Esta cotización es válida por 14 días."
            </p>
            <p>
              <strong>8. Próximo paso</strong><br />
              "Para aceptar esta cotización, confirme por email o teléfono. 
              Una vez aceptada, coordinamos depósito y fecha de trabajo."
            </p>
          </div>
          <p>
            <strong>Formato:</strong> Puede ser un email, un PDF, o un documento de Word. 
            Lo importante es que esté claro y profesional.
          </p>

          {/* Section 9: Checklist Before Sending */}
          <h2>Checklist antes de mandar una cotización</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Entendí el problema real del cliente</strong> (no solo lo que dijo, sino lo que necesita)</li>
              <li>□ <strong>El scope está claro</strong> (sé exactamente qué voy a hacer y qué NO voy a hacer)</li>
              <li>□ <strong>Calculé tiempo</strong> (incluyendo manejo, preparación, y administración)</li>
              <li>□ <strong>Consideré overhead</strong> (gastos del negocio están incluidos)</li>
              <li>□ <strong>Incluí margen</strong> (mi ganancia está en el precio)</li>
              <li>□ <strong>Definí qué NO incluye</strong> (está escrito claramente)</li>
              <li>□ <strong>Sé qué haré si piden cambios</strong> (tengo plan para change orders)</li>
              <li>□ <strong>Puedo explicar el precio</strong> (si me preguntan, sé qué decir)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene una cotización profesional.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Plantilla: Cotización profesional (lista para enviar)</h3>
            <p>
              <strong>"Formato simple en español para mandar cotizaciones claras."</strong>
            </p>
            <p>
              Plantilla lista para usar con todas las secciones necesarias. Solo complete los espacios 
              en blanco y ajuste según su tipo de servicio.
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
            <h3>¿Quiere un sistema para cotizar siempre igual y ganar con consistencia?</h3>
            <p>
              Le ayudamos a estructurar su pricing, scope y proceso para que deje de improvisar. 
              Cotice claro. Cobrar se vuelve fácil.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Cotice claro. Cobrar se vuelve fácil.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/contratos-scope" className={styles.navButton}>
              ← Anterior: Contratos + Scope
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/comunicacion-atencion-al-cliente" className={styles.navButton}>
              Siguiente: Comunicación y atención →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

