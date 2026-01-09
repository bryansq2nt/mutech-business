import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cobrar bien sin miedo: precios claros y pagos a tiempo | Mutech Business",
  description:
    "Cómo poner precios, pedir depósitos y cobrar sin culpa ni retrasos. Guía práctica para emprendedores de servicios.",
  keywords:
    "cómo cobrar servicios, precios para negocios, pedir depósito clientes, cobrar sin miedo, pagos a tiempo",
}

export default function CobrarSinMiedo() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Cobrar sin miedo
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Cobrar bien sin miedo: cómo poner precios y cobrar a tiempo
          </h1>
          <p className={styles.subtitle}>
            El problema no es el cliente. Es no tener reglas claras desde el inicio.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 8 min de lectura</span>
            <span className={styles.badge}>💰 Flujo de efectivo</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Real Problem */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores tienen miedo a cobrar. Miedo a decir el precio. 
              Miedo a pedir el depósito. Miedo a "perder el cliente".
            </p>
            <p>
              Entonces cobran barato "para no perder el trabajo". O aceptan que el cliente 
              pague después. O no ponen límites claros.
            </p>
            <p>
              <strong>Resultado:</strong>
            </p>
            <ul>
              <li>Estrés constante (¿cuándo me van a pagar?)</li>
              <li>Flujo de efectivo inestable (no sabe cuándo va a recibir dinero)</li>
              <li>Resentimiento con el cliente (siente que lo están aprovechando)</li>
              <li>Trabajos que no valen la pena (gasta más de lo que gana)</li>
            </ul>
            <p>
              <strong>La solución no es trabajar más barato. Es tener reglas claras.</strong>
            </p>
          </div>

          {/* Section 2: The Myth */}
          <h2>El mito que sabotea</h2>
          <p>
            <strong>Mito:</strong> "Si cobro más, no me van a contratar."
          </p>
          <p>
            <strong>Realidad:</strong> Los clientes correctos pagan por claridad y profesionalismo. 
            Los clientes que solo buscan lo más barato no son los clientes que usted quiere.
          </p>
          <p>
            Piense en esto: cuando usted compra algo importante (un carro, un servicio profesional), 
            ¿elige siempre lo más barato? Probablemente no. Elige lo que le da confianza, claridad y valor.
          </p>
          <p>
            Sus clientes piensan igual. Si usted se presenta como profesional, con precios claros, 
            contratos y sistema de cobro ordenado, los clientes serios <strong>prefieren</strong> trabajar con usted.
          </p>
          <p>
            <strong>Frase clave:</strong> "El problema no es el precio. Es la falta de estructura."
          </p>
          <p>
            Un precio claro con estructura profesional vale más que un precio bajo sin orden. 
            Los clientes lo saben.
          </p>

          {/* Section 3: How to Think About Pricing */}
          <h2>Cómo pensar el precio (en simple)</h2>
          <p>
            El precio no es solo "lo que usted necesita ganar". Es más complejo—pero no complicado.
          </p>
          <p>
            <strong>Precio = Valor + Costos + Riesgo + Tiempo</strong>
          </p>
          <p>
            <strong>Estructura simple:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Materiales / Suministros</strong><br />
              Todo lo que tiene que comprar para hacer el trabajo.
            </p>
            <p>
              <strong>2. Tiempo</strong><br />
              Cuántas horas va a trabajar × su tarifa por hora (o tarifa por proyecto).
            </p>
            <p>
              <strong>3. Riesgo</strong><br />
              ¿Es un trabajo complicado? ¿Hay posibilidad de que algo salga mal? 
              El riesgo se cobra en el precio.
            </p>
            <p>
              <strong>4. Margen</strong><br />
              Su ganancia. Lo que queda después de cubrir costos y tiempo.
            </p>
          </div>
          <p>
            <strong>Ejemplo mental (no números rígidos):</strong>
          </p>
          <p>
            Si un trabajo le toma 8 horas, y su tarifa es razonable para su experiencia, 
            y tiene $200 en materiales, y hay algo de riesgo... el precio debe reflejar todo eso.
          </p>
          <p>
            <strong>No cobre solo por "lo que necesita".</strong> Cobre por el valor que entrega, 
            el tiempo que invierte, y el riesgo que asume.
          </p>

          {/* Section 4: Deposits */}
          <h2>Depósitos: por qué siempre pedirlos</h2>
          <p>
            El depósito no es solo dinero. Es una herramienta de filtrado y protección.
          </p>
          <p>
            <strong>Por qué el depósito importa:</strong>
          </p>
          <ul>
            <li>
              <strong>Filtra clientes:</strong> Los clientes serios no tienen problema con el depósito. 
              Los que se resisten mucho probablemente no van a pagar bien después.
            </li>
            <li>
              <strong>Protege su tiempo:</strong> Si el cliente cancela o cambia de opinión, 
              usted ya tiene algo por el tiempo que invirtió en planear.
            </li>
            <li>
              <strong>Muestra compromiso:</strong> El cliente que paga depósito está comprometido. 
              No va a cancelar fácilmente.
            </li>
            <li>
              <strong>Cubre materiales iniciales:</strong> Puede comprar lo que necesita sin 
              usar su propio dinero.
            </li>
          </ul>
          <p>
            <strong>Recomendaciones generales:</strong>
          </p>
          <p>
            Para trabajos pequeños ($500-2,000): un depósito del 30-50% es común.
          </p>
          <p>
            Para trabajos medianos ($2,000-10,000): 30-40% es razonable.
          </p>
          <p>
            Para trabajos grandes ($10,000+): puede estructurar pagos por hitos 
            (30% inicio, 30% mitad, 40% final, por ejemplo).
          </p>
          <p>
            <strong>Cuándo NO empezar sin depósito:</strong>
          </p>
          <ul>
            <li>Trabajos que requieren compra de materiales costosos</li>
            <li>Clientes nuevos que no conoce</li>
            <li>Trabajos que ocupan mucho tiempo de su agenda</li>
            <li>Cualquier trabajo donde el riesgo de cancelación es alto</li>
          </ul>
          <p>
            <strong>Frase firme:</strong> "Sin depósito, no hay agenda."
          </p>
          <p>
            Esto no es ser rudo. Es ser profesional. Los clientes serios lo entienden.
          </p>

          {/* Section 5: When and How to Collect Payment */}
          <h2>Cuándo y cómo cobrar</h2>
          <p>
            El cuándo y el cómo son igual de importantes que el cuánto.
          </p>
          <p>
            <strong>Cobro por hitos (para trabajos grandes):</strong>
          </p>
          <p>
            Divida el trabajo en etapas claras. Ejemplo:
          </p>
          <ul>
            <li>30% al inicio (depósito)</li>
            <li>30% cuando se completa la mitad del trabajo</li>
            <li>40% al finalizar</li>
          </ul>
          <p>
            Esto mantiene el flujo de efectivo constante y reduce el riesgo de no cobrar.
          </p>
          <p>
            <strong>Cobro final (para trabajos pequeños):</strong>
          </p>
          <p>
            Para trabajos de $500 o menos, puede ser razonable cobrar al final. 
            Pero siempre con invoice clara y fecha específica.
          </p>
          <p>
            <strong>Formas de pago aceptadas:</strong>
          </p>
          <ul>
            <li>Cash (efectivo) — aceptable, pero documente siempre</li>
            <li>Check — común y seguro</li>
            <li>Zelle / Venmo / CashApp — rápido, pero documente</li>
            <li>ACH / Transferencia bancaria — ideal para pagos grandes</li>
            <li>Tarjeta de crédito — si usa Square, Stripe, etc.</li>
          </ul>
          <p>
            <strong>Recomendaciones:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Invoice clara:</strong> Siempre envíe un invoice (factura) con:
            </p>
            <ul>
              <li>Descripción del trabajo</li>
              <li>Fecha del invoice</li>
              <li>Fecha de vencimiento (cuándo espera el pago)</li>
              <li>Forma de pago aceptada</li>
              <li>Información de contacto</li>
            </ul>
            <p>
              <strong>Fechas específicas:</strong> No diga "pago en 30 días". Diga "pago vence el 15 de enero". 
              Sea específico.
            </p>
            <p>
              <strong>Métodos simples:</strong> No complique. Ofrezca 2-3 formas de pago que sean fáciles 
              para usted y el cliente.
            </p>
          </div>

          {/* Section 6: What to Say When Client Hesitates */}
          <h2>Qué decir cuando el cliente duda</h2>
          <p>
            Cuando un cliente duda del precio o del depósito, no se ponga a la defensiva. 
            Mantenga el tono profesional y claro.
          </p>
          <p>
            <strong>Frases recomendadas:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Si duda del precio:</strong><br />
              "Este es el precio por el alcance que acordamos. Si desea algo distinto o más simple, 
              puedo cotizarlo por separado."
            </p>
            <p>
              <strong>Si pregunta "¿puede ser más barato?":</strong><br />
              "Puedo ajustar el scope para reducir el precio. Por ejemplo, podemos hacer [X] en vez de [Y]. 
              ¿Quiere que le envíe una cotización alternativa?"
            </p>
            <p>
              <strong>Si duda del depósito:</strong><br />
              "El depósito asegura su lugar en mi agenda y cubre los materiales iniciales. 
              Es una práctica estándar en la industria."
            </p>
            <p>
              <strong>Si dice "le pago después":</strong><br />
              "Entiendo. Para trabajos nuevos, necesito el depósito para agendar. Una vez que 
              trabajemos juntos, podemos discutir términos diferentes."
            </p>
            <p>
              <strong>Si insiste en negociar:</strong><br />
              "Mi precio refleja el valor y la calidad que entrego. Si necesita algo más económico, 
              puedo ajustar el scope, pero mantengo mis estándares de calidad."
            </p>
          </div>
          <p>
            <strong>Evitar tono defensivo:</strong>
          </p>
          <p>
            No se justifique demasiado. No explique por qué "necesita" el dinero. 
            Simplemente presente el precio y los términos como algo normal y profesional.
          </p>
          <p>
            Los clientes correctos respetan esto. Los que no, probablemente no son los clientes que quiere.
          </p>

          {/* Section 7: Common Errors */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes que causan problemas de cobro:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Cobrar al final sin acuerdo</strong><br />
                Si no acordó cuándo se cobra, el cliente puede pensar que puede pagar "cuando pueda". 
                Siempre ponga la fecha de pago en el contrato o invoice.
              </li>
              <li>
                <strong>Aceptar "le pago luego"</strong><br />
                "Luego" nunca llega. Si acepta esto, establezca una fecha específica: 
                "Perfecto, el pago vence el [fecha]."
              </li>
              <li>
                <strong>No usar invoices</strong><br />
                Sin invoice, no hay documento oficial. El cliente puede "olvidar" o decir que 
                no acordó ese precio. Siempre envíe invoice.
              </li>
              <li>
                <strong>Bajar el precio sin cambiar el scope</strong><br />
                Si baja el precio, debe reducir el scope. No haga el mismo trabajo por menos dinero. 
                Eso no es negociar—es regalar su tiempo.
              </li>
              <li>
                <strong>No tener política de retrasos</strong><br />
                Si el cliente paga tarde, ¿qué pasa? Sin política clara, no puede hacer nada. 
                Establezca términos: "Pagos después de 15 días incurren en interés del X%."
              </li>
            </ul>
          </div>

          {/* Section 8: Simple Collection System */}
          <h2>Sistema simple de cobro</h2>
          <p>
            Un sistema claro evita problemas. Aquí está el flujo recomendado:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Cotización clara</strong><br />
              Envíe una cotización por escrito con precio, scope y términos de pago.
            </p>
            <p>
              <strong>2. Contrato + Scope</strong><br />
              Una vez que el cliente acepta, firme el contrato con el scope detallado.
            </p>
            <p>
              <strong>3. Depósito</strong><br />
              Reciba el depósito antes de empezar. No comience sin él.
            </p>
            <p>
              <strong>4. Ejecución</strong><br />
              Haga el trabajo según el scope acordado.
            </p>
            <p>
              <strong>5. Invoice final</strong><br />
              Al terminar, envíe el invoice con el balance restante y fecha de vencimiento.
            </p>
            <p>
              <strong>6. Seguimiento</strong><br />
              Si el pago se retrasa, envíe un recordatorio amable pero firme. 
              No espere semanas sin decir nada.
            </p>
          </div>
          <p>
            <strong>Para trabajos grandes (con hitos):</strong>
          </p>
          <p>
            Agregue invoices por cada hito. Ejemplo: "Hito 1 completado → Invoice por 30%". 
            Esto mantiene el flujo constante.
          </p>
          <p>
            <strong>Regla simple:</strong> Documente todo. Invoice todo. Siga el sistema siempre.
          </p>

          {/* Section 9: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Precio definido</strong> (antes de empezar el trabajo)</li>
              <li>□ <strong>Depósito claro</strong> (porcentaje y cuándo se requiere)</li>
              <li>□ <strong>Invoice enviada</strong> (con fecha de vencimiento específica)</li>
              <li>□ <strong>Fecha de pago escrita</strong> (en contrato o invoice)</li>
              <li>□ <strong>Política de retrasos</strong> (qué pasa si se paga tarde)</li>
              <li>□ <strong>Formas de pago claras</strong> (qué métodos acepta)</li>
              <li>□ <strong>Sistema de seguimiento</strong> (cómo recordará pagos pendientes)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene un sistema profesional de cobro.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Checklist: Cobrar bien sin miedo</h3>
            <p>
              <strong>"Precios, depósitos y cobros claros."</strong>
            </p>
            <p>
              Guía rápida de 1 página con frases recomendadas, estructura de precios, 
              y sistema de cobro paso a paso.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar checklist
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere cobrar como un negocio profesional?</h3>
            <p>
              Nosotros le ayudamos con la estructura completa: presencia online profesional, 
              contratos claros, y sistema de cobro ordenado—todo listo para que usted se enfoque 
              en hacer el trabajo.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin presión. Sin letras pequeñas.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/contratos-scope" className={styles.navButton}>
              ← Anterior: Contratos + Scope
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/presencia-online" className={styles.navButton}>
              Siguiente: Presencia Online →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

