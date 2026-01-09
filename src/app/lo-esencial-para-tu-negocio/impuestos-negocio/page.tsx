import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Impuestos del negocio: lo mínimo para no meterse en problemas | Mutech Business",
  description:
    "Guía clara para entender impuestos básicos en negocios de servicios: estimated taxes, deducciones y errores comunes.",
  keywords:
    "impuestos negocio servicios, estimated taxes, self employment tax, deducciones negocio, impuestos LLC español",
}

export default function ImpuestosNegocio() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Impuestos del negocio
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Impuestos del negocio: lo mínimo que debe entender para no meterse en problemas
          </h1>
          <p className={styles.subtitle}>
            Si usted no decide cómo manejar impuestos, el sistema lo decide por usted.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 10 min de lectura</span>
            <span className={styles.badge}>🧾 Finanzas y cumplimiento</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Real Problem */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores creen que <strong>"si entra dinero, es ganancia"</strong>.
            </p>
            <p>
              Ven $5,000 en la cuenta y piensan: "Tengo $5,000". Pero no es así.
            </p>
            <p>
              <strong>El error:</strong> Gastan todo. Y cuando llega tax season (temporada de impuestos), 
              no hay nada. Entonces se endeudan, piden préstamos, o simplemente no pagan—y eso trae problemas.
            </p>
            <p>
              <strong>La verdad:</strong> Impuestos no son "algo después". Son parte del precio. 
              Si cobra $100, una parte no es suya—es del sistema.
            </p>
            <p>
              <strong>Frase clave:</strong> "No es que usted no gane. Es que no separó lo que no era suyo."
            </p>
            <p>
              Esta guía no lo convierte en contador. Pero le da la estructura mínima para no meterse 
              en problemas y entender qué está pasando con su dinero.
            </p>
          </div>

          {/* Section 2: The 3 Most Confusing Taxes */}
          <h2>Los 3 impuestos que más confunden (explicación simple)</h2>
          <p>
            No necesita entender todo el sistema fiscal. Pero sí necesita entender estos 3:
          </p>

          <div className={styles.checklistItem}>
            <h3>1. Income Tax (Impuesto sobre ingresos)</h3>
            <p>
              <strong>Qué es:</strong> Impuesto por su ganancia (ingreso menos gastos del negocio).
            </p>
            <p>
              <strong>Cómo funciona:</strong>
            </p>
            <ul>
              <li>Usted reporta cuánto ganó (ingresos del negocio)</li>
              <li>Resta sus gastos del negocio (herramientas, gasolina, etc.)</li>
              <li>Lo que queda es su "ganancia"</li>
              <li>Paga impuesto sobre esa ganancia</li>
            </ul>
            <p>
              <strong>Depende de su situación:</strong> Si su LLC es "disregarded entity" (la mayoría de 
              LLCs de 1 persona), el ingreso del negocio se reporta en su tax return personal. 
              No es un impuesto separado del negocio.
            </p>
            <p>
              <strong>En simple:</strong> Gana dinero → reporta ganancia → paga impuesto sobre esa ganancia.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>2. Self-Employment Tax (Impuesto de autoempleo)</h3>
            <p>
              <strong>Qué es:</strong> Es como "lo que sería payroll" cuando usted trabaja por cuenta propia.
            </p>
            <p>
              <strong>Cómo funciona:</strong>
            </p>
            <ul>
              <li>Cuando trabaja para alguien (W-2), su empleador retiene Social Security y Medicare</li>
              <li>Cuando trabaja por cuenta propia, nadie retiene—usted paga ambos lados</li>
              <li>Eso es el Self-Employment Tax</li>
            </ul>
            <p>
              <strong>Suele sorprender</strong> porque es adicional al Income Tax. Muchos emprendedores 
              no saben que existe hasta que llega el momento de pagar.
            </p>
            <p>
              <strong>En simple:</strong> Es su "contribución" a Social Security y Medicare como trabajador independiente.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>3. Sales Tax (Impuesto sobre ventas) - Solo si aplica</h3>
            <p>
              <strong>Qué es:</strong> Impuesto que se cobra al cliente y se paga al estado/ciudad.
            </p>
            <p>
              <strong>Cómo funciona:</strong>
            </p>
            <ul>
              <li>Algunos servicios/ventas requieren cobrar Sales Tax</li>
              <li>Usted lo cobra al cliente (lo agrega al precio)</li>
              <li>Lo reporta y paga al estado periódicamente</li>
            </ul>
            <p>
              <strong>Aclaración importante:</strong> No todos los negocios de servicios pagan Sales Tax. 
              Depende del estado y del tipo de servicio.
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>Servicios profesionales (limpieza, electricidad, plomería): Generalmente NO cobran Sales Tax</li>
              <li>Venta de productos: Generalmente SÍ cobran Sales Tax</li>
              <li>Algunos estados tienen reglas específicas</li>
            </ul>
            <p>
              <strong>En simple:</strong> Verifique con su estado si su servicio requiere cobrar Sales Tax. 
              La mayoría de servicios no lo requieren.
            </p>
          </div>

          {/* Section 3: Estimated Taxes */}
          <h2>"Estimated Taxes": por qué existe y cuándo importa</h2>
          <p>
            <strong>El problema:</strong> Si usted no tiene W-2 (no trabaja para un empleador), nadie retiene 
            impuestos por usted durante el año.
          </p>
          <p>
            <strong>La solución del sistema:</strong> Estimated Taxes. Usted paga impuestos por adelantado 
            durante el año (quarterly, cada 3 meses).
          </p>
          <p>
            <strong>Cómo funciona:</strong>
          </p>
          <ul>
            <li>Usted estima cuánto va a ganar este año</li>
            <li>Calcula cuánto impuesto debería pagar</li>
            <li>Lo divide en 4 pagos (cada 3 meses)</li>
            <li>Paga antes de las fechas límite</li>
          </ul>
          <p>
            <strong>Fechas típicas:</strong>
          </p>
          <ul>
            <li>15 de abril (Q1: enero-marzo)</li>
            <li>15 de junio (Q2: abril-mayo)</li>
            <li>15 de septiembre (Q3: junio-agosto)</li>
            <li>15 de enero del siguiente año (Q4: septiembre-diciembre)</li>
          </ul>
          <p>
            <strong>Si no paga:</strong> Pueden venir penalidades. El IRS espera que pague durante el año, 
            no todo al final.
          </p>
          <p>
            <strong>Frase clave:</strong> "Si usted cobra semanal, el sistema también espera pagos durante el año."
          </p>
          <p>
            <strong>Excepción:</strong> Si sus ingresos son muy bajos o su situación es simple, puede que no 
            necesite pagar estimated taxes. Pero verifique con un contador o el IRS.
          </p>

          {/* Section 4: Separate Finances */}
          <h2>Separar finanzas: la regla que le salva la vida</h2>
          <p>
            Si no separa las finanzas del negocio de las personales, los impuestos se vuelven un desastre.
          </p>
          <p>
            <strong>La estructura mínima:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Cuenta bancaria del negocio</strong><br />
              Una cuenta separada solo para el negocio. Todo lo que entra y sale del negocio pasa por ahí.
            </p>
            <p>
              <strong>2. Tarjeta del negocio</strong><br />
              Una tarjeta de crédito o débito solo para gastos del negocio. No use su tarjeta personal.
            </p>
            <p>
              <strong>3. No mezclar gastos personales</strong><br />
              Si compra algo personal, no lo pague con la cuenta del negocio. Si compra algo del negocio, 
              no lo pague con su cuenta personal.
            </p>
          </div>
          <p>
            <strong>Por qué esto facilita impuestos:</strong>
          </p>
          <ul>
            <li>Todo está en un solo lugar (fácil de trackear)</li>
            <li>No tiene que adivinar qué fue personal y qué fue del negocio</li>
            <li>Su contador (o usted) puede ver claramente ingresos y gastos</li>
            <li>Reduce errores y problemas con el IRS</li>
          </ul>
          <p>
            <strong>Por qué esto lo protege:</strong>
          </p>
          <ul>
            <li>Mantiene el "velo corporativo" de su LLC (ver guía de LLC)</li>
            <li>Demuestra que el negocio es separado de usted</li>
            <li>Facilita defensa si hay problemas legales</li>
          </ul>
          <p>
            <strong>Si aún no tiene esto:</strong> Revise la guía <Link href="/lo-esencial-para-tu-negocio/ein-cuenta-bancaria" className={styles.externalLink}>"EIN + Cuenta Bancaria"</Link> para ver cómo hacerlo.
          </p>

          {/* Section 5: Deductions */}
          <h2>Deducciones: qué sí, qué no (sin inventar reglas)</h2>
          <p>
            <strong>Deducible no significa gratis.</strong> Significa que puede restar ese gasto de sus ingresos 
            antes de calcular impuestos.
          </p>
          <div className={styles.whyBox}>
            <p>
              <strong>Qué suele ser deducible (ejemplos comunes):</strong>
            </p>
            <ul>
              <li>
                <strong>Herramientas/equipo relacionado al trabajo</strong><br />
                Si compra herramientas, equipo, o materiales que usa para el negocio.
              </li>
              <li>
                <strong>Gasolina/millas si se documenta</strong><br />
                Si usa su carro para el negocio, puede deducir millas o gasolina—pero debe documentarlo.
              </li>
              <li>
                <strong>Software, teléfono (porción de trabajo)</strong><br />
                Si usa software para el negocio o su teléfono para trabajo, puede deducir la porción de uso comercial.
              </li>
              <li>
                <strong>Publicidad</strong><br />
                Gastos en marketing, anuncios, Google Business, etc.
              </li>
              <li>
                <strong>Seguros del negocio</strong><br />
                Seguro comercial, seguro de vehículo del negocio, etc.
              </li>
              <li>
                <strong>Parte de home office (si aplica)</strong><br />
                Si usa parte de su casa exclusivamente para el negocio, puede deducir una porción de renta/utilidades.
              </li>
            </ul>
            <p>
              <strong>Qué suele ser error:</strong>
            </p>
            <ul>
              <li>
                <strong>"Todo lo que gasto"</strong><br />
                No todo gasto es deducible. Solo gastos legítimos del negocio.
              </li>
              <li>
                <strong>Compras personales disfrazadas</strong><br />
                Comprar algo personal y decir "es del negocio" es fraude. No lo haga.
              </li>
              <li>
                <strong>No guardar recibos</strong><br />
                Si no tiene recibo, no puede deducir. Guarde todo.
              </li>
              <li>
                <strong>No documentar millaje</strong><br />
                Si quiere deducir millas, debe tener registro (fecha, destino, propósito, millas).
              </li>
            </ul>
            <p>
              <strong>Aclaración importante:</strong> "Deducible no significa gratis. Significa documentado."
            </p>
            <p>
              Si gasta $100 en herramientas y es deducible, no "ahorra" $100. Reduce su ingreso gravable 
              en $100, lo que reduce su impuesto en una fracción de eso (depende de su tasa).
            </p>
          </div>

          {/* Section 6: Minimum System */}
          <h2>El sistema mínimo (simple) para no perderse</h2>
          <p>
            No necesita un sistema complicado. Esto es lo mínimo que funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Tener cuenta bancaria del negocio</strong><br />
              Todo ingreso y gasto del negocio pasa por ahí. No mezcle con personal.
            </p>
            <p>
              <strong>2. Guardar recibos</strong><br />
              Tome foto o use una app (Wave, QuickBooks, o incluso Google Drive). 
              Guarde todo recibo de gastos del negocio.
            </p>
            <p>
              <strong>3. Registrar ingresos y gastos semanalmente (15 min)</strong><br />
              Cada viernes, revise su cuenta del negocio. Anote qué entró y qué salió. 
              Categorice (herramientas, gasolina, publicidad, etc.). Esto toma 15 minutos.
            </p>
            <p>
              <strong>4. Separar una parte del ingreso para impuestos</strong><br />
              Cada vez que recibe un pago, separe un porcentaje (comúnmente 25-30%) y póngalo en una 
              cuenta de ahorros separada. NO lo toque excepto para pagar impuestos.
            </p>
            <p>
              <strong>5. Consultar contador cuando el negocio crece o se complica</strong><br />
              Si sus ingresos pasan $75k/año, tiene empleados, o su situación se complica, 
              contrate un contador. Vale la pena.
            </p>
          </div>
          <p>
            <strong>Tiempo requerido:</strong> 15 minutos semanales para mantener orden. 
            Vale la pena para evitar problemas después.
          </p>

          {/* Section 7: Common Errors */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes que causan problemas:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Esperar hasta abril</strong><br />
                Si espera hasta tax season para organizar todo, va a tener problemas. 
                Los impuestos se manejan durante el año, no al final.
              </li>
              <li>
                <strong>No separar dinero</strong><br />
                Si gasta todo lo que entra y no separa para impuestos, cuando llegue el momento de pagar 
                no tendrá nada. Separe desde el primer día.
              </li>
              <li>
                <strong>No saber si tiene Sales Tax</strong><br />
                Si su servicio requiere cobrar Sales Tax y no lo hace, puede tener problemas con el estado. 
                Verifique qué aplica a su negocio.
              </li>
              <li>
                <strong>No reportar ingresos de plataformas</strong><br />
                Si recibe pagos por Zelle, Venmo, CashApp, PayPal, etc., esos ingresos también se reportan. 
                El IRS puede rastrearlos. No asuma que "nadie se da cuenta".
              </li>
              <li>
                <strong>Pagar empleados como "cash" sin estructura</strong><br />
                Si tiene empleados y los paga en efectivo sin documentar, está violando leyes laborales y fiscales. 
                Necesita estructura de payroll.
              </li>
              <li>
                <strong>Creer que "nadie se da cuenta"</strong><br />
                El IRS tiene sistemas para rastrear ingresos. Bancos reportan transacciones grandes. 
                No asuma que puede esconder ingresos.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "El problema no es el IRS. El problema es la improvisación."
            </p>
          </div>

          {/* Section 8: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Tengo cuenta bancaria del negocio</strong> (separada de personal)</li>
              <li>□ <strong>Registro ingresos/gastos semanalmente</strong> (15 min cada viernes)</li>
              <li>□ <strong>Guardo recibos</strong> (fotos o app, todo documentado)</li>
              <li>□ <strong>Sé qué impuestos me aplican</strong> (Income Tax, Self-Employment Tax, Sales Tax si aplica)</li>
              <li>□ <strong>Separo dinero para impuestos</strong> (25-30% de cada ingreso en cuenta separada)</li>
              <li>□ <strong>Tengo plan</strong> (aunque sea simple, sé cómo voy a manejar esto)</li>
              <li>□ <strong>Sé cuándo pagar estimated taxes</strong> (si aplica, tengo las fechas)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene estructura mínima para manejar impuestos sin problemas.
            </p>
          </div>

          {/* Section 9: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Plantilla: Control simple de impuestos</h3>
            <p>
              <strong>"Una estructura mínima para que usted no ande a ciegas."</strong>
            </p>
            <p>
              Plantilla simple de Excel/Google Sheets para registrar ingresos, gastos, y separar dinero 
              para impuestos. Sin complicaciones.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar plantilla
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 10: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere ordenar esto sin volverse contador?</h3>
            <p>
              Le ayudamos a estructurar su negocio para que cobre, se proteja y no se desordene con impuestos. 
              Sin complicaciones. Sin tecnicismos innecesarios.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Claro. Directo. Sin ruido.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/licencias-permisos" className={styles.navButton}>
              ← Anterior: Licencias y permisos
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/cotizar-precios" className={styles.navButton}>
              Siguiente: Cotizar precios →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

