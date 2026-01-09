import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "EIN + Cuenta Bancaria: Cómo separar tu negocio de tu vida personal | Mutech Business",
  description: "Guía paso a paso para sacar tu EIN gratis, abrir cuenta bancaria de negocio, y separar finanzas correctamente. Para emprendedores hispanos.",
  keywords: "cómo sacar EIN gratis, abrir cuenta banco negocio, separar finanzas personales negocio, EIN en español, owner draw"
}

export default function EINCuentaBancaria() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; EIN + Cuenta Bancaria
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            EIN + Cuenta Bancaria: El combo que separa tu negocio de tu vida personal
          </h1>
          <p className={styles.subtitle}>
            Tiene LLC pero sigue usando su cuenta personal. Esto es un problema—y aquí está 
            cómo arreglarlo en menos de 1 hora.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 10 min de lectura</span>
            <span className={styles.badge}>📥 Descargable</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: Why It Matters */}
          <div className={styles.whyBox}>
            <p>
              Mezclar su dinero personal con el del negocio es uno de los errores 
              más comunes—y más peligrosos—que cometen los emprendedores.
            </p>
            <p>
              No solo puede romper la protección de su LLC, también hace que:
            </p>
            <ul>
              <li>Sus taxes sean un desastre</li>
              <li>No pueda demostrar ingresos reales (para loans, rentas, etc.)</li>
              <li>No sepa cuánto está ganando realmente</li>
            </ul>
            <p>
              <strong>La solución: EIN + cuenta separada. Simple, pero crítico.</strong>
            </p>
          </div>

          {/* Section 2: What is an EIN */}
          <h2>Qué es un EIN (y por qué lo necesita)</h2>
          <p>
            EIN significa <strong>Employer Identification Number</strong>.
          </p>
          <p>
            Piense en esto como el "Social Security Number" de su negocio.
          </p>
          <p>
            Es un número de 9 dígitos (formato: 12-3456789) que identifica su 
            negocio ante el IRS.
          </p>
          <p>
            <strong>Para qué sirve:</strong>
          </p>
          <ul>
            <li>Abrir cuenta bancaria de negocio</li>
            <li>Contratar empleados (si algún día lo hace)</li>
            <li>Presentar taxes del negocio</li>
            <li>Aplicar a préstamos o crédito comercial</li>
            <li>Evitar dar su SSN a clientes/vendors</li>
          </ul>
          <p>
            <strong>Buena noticia:</strong> Es GRATIS y toma 10 minutos sacarlo online.
          </p>

          {/* Section 3: How to Get EIN Free */}
          <h2>Cómo sacar su EIN gratis (paso a paso)</h2>

          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Hay servicios que cobran $200-500 por "ayudarlo a sacar el EIN."
            </p>
            <p>
              <strong>NO les pague. El EIN es GRATIS directamente del IRS.</strong>
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Paso 1: Vaya al sitio oficial del IRS</h3>
            <p>
              <strong>Link directo:</strong>{' '}
              <a 
                href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                IRS.gov - Apply for EIN Online
              </a>
            </p>
            <p>
              ⚠️ <strong>Asegúrese de que dice "IRS.gov"</strong>—hay sitios falsos que cobran.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Paso 2: Tenga esta información lista</h3>
            <p>
              Antes de empezar, necesita:
            </p>
            <ul>
              <li><strong>Su SSN o ITIN</strong> (del dueño principal)</li>
              <li><strong>Nombre legal de la LLC</strong> (como aparece en los Articles of Organization)</li>
              <li><strong>Dirección del negocio</strong> (puede ser su casa si es home-based)</li>
              <li><strong>Razón para aplicar:</strong> Seleccione "Started new business"</li>
              <li><strong>Tipo de entidad:</strong> LLC</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Paso 3: Complete la aplicación online</h3>
            <p>
              El formulario del IRS se llama <strong>SS-4 (online version)</strong>.
            </p>
            <p>
              <strong>Preguntas comunes que hace:</strong>
            </p>
            <ol>
              <li>
                <strong>"¿Por qué está solicitando un EIN?"</strong><br />
                → Seleccione: "Started a new business"
              </li>
              <li>
                <strong>"¿Cuántos empleados espera tener en 12 meses?"</strong><br />
                → Ponga 0 si va a estar solo (puede cambiar después)
              </li>
              <li>
                <strong>"¿Cuál es la fecha de inicio del negocio?"</strong><br />
                → Ponga la fecha cuando formó la LLC (o una fecha reciente)
              </li>
              <li>
                <strong>"¿Cuál será el mes de cierre fiscal?"</strong><br />
                → La mayoría pone Diciembre (calendar year)
              </li>
              <li>
                <strong>"Principal activity of your business"</strong><br />
                → Sea específico: "Residential Cleaning Services", 
                "Landscaping Services", "Home Remodeling", etc.
              </li>
            </ol>
          </div>

          <div className={styles.checklistItem}>
            <h3>Paso 4: Reciba su EIN inmediatamente</h3>
            <p>
              Al terminar la aplicación, el IRS le da su EIN <strong>en pantalla inmediatamente</strong>.
            </p>
            <p>
              <strong>IMPORTANTE:</strong>
            </p>
            <ul>
              <li>Tome screenshot o imprima esa página</li>
              <li>Guarde el PDF que le mandan por email</li>
              <li>Anote el EIN en un lugar seguro</li>
            </ul>
            <p>
              <strong>Formato del EIN:</strong> 12-3456789
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Paso 5: Espere la confirmación oficial</h3>
            <p>
              En 2-4 semanas, el IRS le manda por correo postal el <strong>CP 575 Notice</strong>.
            </p>
            <p>
              Este es su documento oficial del EIN. Guárdelo—algunos bancos lo piden.
            </p>
            <p>
              <strong>¿Puede abrir cuenta antes de recibir el CP 575?</strong><br />
              Sí, la mayoría de bancos aceptan el screenshot o PDF de confirmación.
            </p>
          </div>

          {/* Section 4: When You Need New EIN */}
          <h2>Cuándo necesita un EIN nuevo (la confusión más común)</h2>
          <p>
            Muchos emprendedores se confunden con esto.
          </p>
          <p>
            <strong>Situaciones donde SÍ necesita un EIN nuevo:</strong>
          </p>
          <ul>
            <li>✓ Formó una LLC nueva (cada LLC tiene su propio EIN)</li>
            <li>✓ Cambió de Sole Proprietorship a LLC</li>
            <li>✓ Cambió de LLC a Corporation</li>
            <li>✓ La LLC cambió de Single-Member a Multi-Member</li>
          </ul>
          <p>
            <strong>Situaciones donde NO necesita un EIN nuevo:</strong>
          </p>
          <ul>
            <li>✗ Cambió el nombre del negocio (mismo EIN)</li>
            <li>✗ Cambió de dirección (mismo EIN)</li>
            <li>✗ Cambió su Registered Agent (mismo EIN)</li>
            <li>✗ Agregó DBAs / "Doing Business As" (mismo EIN)</li>
          </ul>
          <p>
            <strong>Regla simple:</strong> Si la <strong>estructura legal</strong> cambió, necesita EIN nuevo. 
            Si solo cambió detalles administrativos, mantiene el mismo.
          </p>

          {/* Section 5: Opening Bank Account */}
          <h2>Abrir cuenta bancaria del negocio</h2>
          <p>
            Ahora que tiene su EIN, el siguiente paso: cuenta separada.
          </p>

          <div className={styles.checklistItem}>
            <h3>Por qué importa (más allá de la LLC)</h3>
            <p>
              Ya mencionamos que mezclar cuentas rompe el velo corporativo.
            </p>
            <p>
              Pero también:
            </p>
            <p>
              <strong>Profesionalismo:</strong>
            </p>
            <ul>
              <li>Checks y pagos dicen el nombre de su negocio, no su nombre personal</li>
              <li>Los clientes lo toman más en serio</li>
            </ul>
            <p>
              <strong>Taxes más fáciles:</strong>
            </p>
            <ul>
              <li>Todos los ingresos/gastos del negocio en un solo lugar</li>
              <li>Su contador (o usted) no tiene que separar transacciones personales</li>
            </ul>
            <p>
              <strong>Historial de negocio:</strong>
            </p>
            <ul>
              <li>Construye crédito comercial (para préstamos futuros)</li>
              <li>Demuestra ingresos reales cuando aplica a financiamiento</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Qué necesita para abrir la cuenta</h3>
            <p>
              La mayoría de bancos piden:
            </p>
            <ul>
              <li>□ <strong>EIN</strong> (el número o el CP 575)</li>
              <li>□ <strong>Articles of Organization</strong> (documento de formación de la LLC)</li>
              <li>□ <strong>Operating Agreement</strong> (algunos bancos lo piden, otros no)</li>
              <li>□ <strong>Identificación personal</strong> (Driver's license o Passport)</li>
              <li>□ <strong>Depósito inicial</strong> (varía: $25-500 dependiendo del banco)</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Bancos recomendados para negocios pequeños</h3>
            <p>
              <strong>Chase Business Complete Banking</strong>
            </p>
            <ul>
              <li>Monthly fee: $15 (waived si mantiene $2,000 balance)</li>
              <li>Buena app, muchas sucursales</li>
              <li>Fácil de abrir online</li>
              <li>Bueno si ya tiene cuenta personal con Chase</li>
            </ul>
            <p>
              <strong>Bank of America Business Advantage</strong>
            </p>
            <ul>
              <li>Monthly fee: $16 (waived con $5,000 balance o $250 deposits mensuales)</li>
              <li>Red grande de ATMs</li>
              <li>Integración con QuickBooks</li>
            </ul>
            <p>
              <strong>Wells Fargo Business Choice Checking</strong>
            </p>
            <ul>
              <li>Monthly fee: $14 (waived con $7,500 balance o $1,000 deposits)</li>
              <li>Proceso simple para LLCs</li>
              <li>Buena atención en sucursal</li>
            </ul>
            <p>
              <strong>Credit Unions locales</strong>
            </p>
            <ul>
              <li>Fees más bajos (muchas $0-5/mes)</li>
              <li>Atención más personalizada</li>
              <li>Proceso puede ser más lento</li>
            </ul>
            <p>
              <strong>Novo o Relay (online banks)</strong>
            </p>
            <ul>
              <li>$0 monthly fees</li>
              <li>Todo online, no sucursales físicas</li>
              <li>Buenos para negocios 100% digitales</li>
              <li>Pueden pedir más documentación</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Cómo abrir la cuenta (proceso general)</h3>
            <ol>
              <li>
                <strong>Escoja su banco</strong> (de la lista arriba o uno local)
              </li>
              <li>
                <strong>Haga cita o aplique online</strong><br />
                • Algunos bancos dejan abrir 100% online<br />
                • Otros requieren ir en persona la primera vez
              </li>
              <li>
                <strong>Lleve sus documentos:</strong><br />
                • EIN confirmation<br />
                • Articles of Organization<br />
                • Operating Agreement (si lo tiene)<br />
                • ID personal<br />
                • Dinero para depósito inicial
              </li>
              <li>
                <strong>Complete la aplicación</strong><br />
                • Le van a hacer preguntas sobre el negocio<br />
                • Tipo de industria, revenue esperado, etc.
              </li>
              <li>
                <strong>Active la cuenta</strong><br />
                • Haga el depósito inicial<br />
                • Configure online banking<br />
                • Ordene debit card / checks
              </li>
            </ol>
            <p>
              <strong>Tiempo total:</strong> 30-60 minutos en persona, o 1-2 días si aplica online.
            </p>
          </div>

          {/* Section 6: How to Pay Yourself */}
          <h2>"¿Cómo me pago a mí mismo?"</h2>
          <p>
            Esta es una de las preguntas más comunes—y una de las más confusas.
          </p>

          <div className={styles.checklistItem}>
            <h3>Owner Draw vs Salary (la diferencia)</h3>
            <p>
              Hay dos formas de "pagarse" desde el negocio:
            </p>
            <p>
              <strong>Owner Draw (Distribution):</strong>
            </p>
            <ul>
              <li>Transfiere dinero de la cuenta del negocio a su cuenta personal</li>
              <li>No es "salario"—es distribución de ganancias</li>
              <li>No hay withholding de taxes</li>
              <li><strong>Para:</strong> LLCs taxed como partnerships o sole proprietorships</li>
            </ul>
            <p>
              <strong>Salary (Payroll):</strong>
            </p>
            <ul>
              <li>Se paga un salario fijo como empleado</li>
              <li>Hay withholding (taxes, Social Security, Medicare)</li>
              <li>Requiere setup de payroll</li>
              <li><strong>Para:</strong> LLCs taxed como S-Corp, o si tiene empleados</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Si su LLC es Single-Member (solo usted)</h3>
            <p>
              La mayoría de LLCs de 1 persona son <strong>disregarded entities</strong> para taxes.
            </p>
            <p>
              Esto significa: el IRS lo trata como <strong>sole proprietorship</strong> para taxes.
            </p>
            <p>
              <strong>Cómo pagarse:</strong>
            </p>
            <ol>
              <li><strong>Transfiera</strong> de la cuenta del negocio a su cuenta personal</li>
              <li><strong>Documente</strong> como "Owner Draw" o "Distribution"</li>
              <li>
                <strong>Aparte para taxes:</strong> Recuerde que el IRS espera que pague 
                quarterly estimated taxes (aprox 25-30% de ganancias)
              </li>
            </ol>
          </div>

          <div className={styles.checklistItem}>
            <h3>El sistema de 3 cuentas (recomendado)</h3>
            <p>
              Para mantener orden y no quedarse sin dinero para taxes:
            </p>
            <p>
              <strong>Cuenta 1: Operaciones (Business Checking)</strong><br />
              → Todo lo que entra y sale del negocio<br />
              → Pagos de clientes llegan aquí<br />
              → Gastos del negocio salen de aquí
            </p>
            <p>
              <strong>Cuenta 2: Taxes (Savings del negocio)</strong><br />
              → Cada vez que recibe un pago, mueva 25-30% aquí<br />
              → NO toque este dinero excepto para pagar taxes<br />
              → Quarterly estimated taxes salen de aquí
            </p>
            <p>
              <strong>Cuenta 3: Owner Pay (Su cuenta personal)</strong><br />
              → Su "salario" personal llega aquí<br />
              → Páguese de forma regular (semanal, quincenal, mensual)<br />
              → Monto fijo que sepa que puede sostener
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Ejemplo práctico</h3>
            <p>
              <strong>Situación:</strong><br />
              Tiene un negocio de limpieza. Esta semana ganó $2,000.
            </p>
            <p>
              <strong>Cómo distribuir:</strong>
            </p>
            <ol>
              <li>
                <strong>$2,000 llegan a:</strong> Cuenta de Operaciones
              </li>
              <li>
                <strong>Separe inmediatamente:</strong><br />
                • 30% para taxes = $600 → Cuenta de Taxes<br />
                • 20% para gastos/emergencias = $400 → Queda en Operaciones<br />
                • 50% para usted = $1,000 → Su cuenta personal (Owner Draw)
              </li>
              <li>
                <strong>Documente:</strong><br />
                En su tracking (QuickBooks, Excel, etc.):<br />
                "Owner Draw - Week of Jan 6: $1,000"
              </li>
            </ol>
          </div>

          <div className={styles.checklistItem}>
            <h3>¿Con qué frecuencia pagarse?</h3>
            <p>
              <strong>Recomendación:</strong> Páguese con <strong>frecuencia fija</strong>.
            </p>
            <p>
              Opciones:
            </p>
            <ul>
              <li>Semanal (si el negocio tiene cash flow estable)</li>
              <li>Quincenal (común, 2x al mes)</li>
              <li>Mensual (si el negocio es más irregular)</li>
            </ul>
            <p>
              <strong>NO haga:</strong> Sacar dinero "cuando necesite" sin documentar.
            </p>
            <p>
              Esto crea desorden y hace difícil saber cuánto está ganando realmente.
            </p>
          </div>

          {/* Section 7: Tools for Tracking */}
          <h2>Herramientas para mantener orden</h2>
          <p>
            <strong>Para tracking básico de ingresos/gastos:</strong>
          </p>
          <p>
            <strong>Wave (gratis)</strong>
          </p>
          <ul>
            <li>Perfecto para empezar</li>
            <li>Invoicing + expense tracking</li>
            <li>Conecta con cuenta de banco</li>
            <li>Reports básicos para taxes</li>
            <li>
              → <a 
                href="https://www.waveapps.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                https://www.waveapps.com
              </a>
            </li>
          </ul>
          <p>
            <strong>QuickBooks Self-Employed ($15/mes)</strong>
          </p>
          <ul>
            <li>Tracking de mileage (para taxes)</li>
            <li>Categoriza expenses automáticamente</li>
            <li>Estimación de quarterly taxes</li>
            <li>Más robusto que Wave</li>
          </ul>
          <p>
            <strong>Excel o Google Sheets (gratis)</strong>
          </p>
          <ul>
            <li>Si prefiere manual</li>
            <li>Template simple con columnas:<br />
            Fecha | Descripción | Ingreso | Gasto | Categoría | Balance</li>
          </ul>
          <p>
            <strong>Para pagarse (payroll si tiene empleados):</strong>
          </p>
          <p>
            <strong>Gusto ($40/mes + $6 por empleado)</strong>
          </p>
          <ul>
            <li>Maneja payroll completo</li>
            <li>Withholding automático</li>
            <li>File taxes por usted</li>
          </ul>
          <p>
            <strong>QuickBooks Payroll ($45/mes)</strong>
          </p>
          <ul>
            <li>Si ya usa QuickBooks</li>
            <li>Integración total</li>
          </ul>

          {/* Section 8: Golden Rule */}
          <h2>Regla de oro: Revisar cada viernes</h2>
          <div className={styles.whyBox}>
            <p>
              Cree un reminder cada <strong>viernes a las 4pm</strong>:
            </p>
            <ul>
              <li>□ <strong>Revisar balance</strong> de las 3 cuentas</li>
              <li>□ <strong>Categorizar expenses</strong> de la semana (5 min en Wave/QuickBooks)</li>
              <li>□ <strong>Mover dinero:</strong> Si hubo ingresos, separar para taxes</li>
              <li>□ <strong>Owner draw:</strong> Si es día de pago, transferir su parte</li>
              <li>□ <strong>Check rápido:</strong> ¿Mezclé algo esta semana? Si sí, arreglarlo YA</li>
            </ul>
            <p>
              <strong>Tiempo total:</strong> 10-15 minutos.
            </p>
            <p>
              Este hábito semanal evita que el desorden se acumule.
            </p>
          </div>

          {/* Section 9: FAQ */}
          <h2>Preguntas frecuentes</h2>

          <h3>¿Puedo tener múltiples cuentas de negocio?</h3>
          <p>
            Sí, y a veces ayuda.
          </p>
          <p>
            Ejemplo:
          </p>
          <ul>
            <li>Business Checking (operaciones diarias)</li>
            <li>Business Savings (taxes + emergencias)</li>
            <li>Otra checking (si tiene 2 líneas de negocio separadas)</li>
          </ul>
          <p>
            Solo asegúrese de que TODO esté bajo el EIN del negocio.
          </p>

          <h3>¿Qué pasa si necesito sacar dinero de emergencia?</h3>
          <p>
            Si necesita más dinero de lo planeado:
          </p>
          <ol>
            <li>Sáquelo de la cuenta del negocio (Owner Draw)</li>
            <li><strong>Documente</strong> inmediatamente: "Owner Draw - Emergency: $X"</li>
            <li>Ajuste su presupuesto personal para el próximo período</li>
          </ol>
          <p>
            Lo que NO debe hacer: sacar sin documentar.
          </p>

          <h3>¿Puedo usar Zelle/Venmo/CashApp para el negocio?</h3>
          <p>
            <strong>Mejor evitarlo</strong>, pero si lo hace:
          </p>
          <ul>
            <li>✓ Use una cuenta de Zelle/Venmo <strong>SOLO</strong> para el negocio</li>
            <li>✓ Vincúlela a la cuenta bancaria del negocio, no su personal</li>
            <li>✓ Documente cada transacción</li>
          </ul>
          <p>
            <strong>Problema con estas apps:</strong>
          </p>
          <ul>
            <li>No generan invoices profesionales</li>
            <li>Más difícil trackear para taxes</li>
            <li>Clientes serios prefieren check/ACH/card</li>
          </ul>
          <p>
            <strong>Mejor opción:</strong> Square, Stripe, o PayPal Business.
          </p>

          <h3>¿Cuándo necesito un contador?</h3>
          <p>
            <strong>Puede hacer todo solo si:</strong>
          </p>
          <ul>
            <li>Tiene pocos expenses</li>
            <li>No tiene empleados</li>
            <li>Su LLC es simple (single-member, disregarded entity)</li>
            <li>Se siente cómodo con taxes básicos</li>
          </ul>
          <p>
            <strong>Contrate un contador cuando:</strong>
          </p>
          <ul>
            <li>Sus ingresos pasan $75k/año</li>
            <li>Tiene empleados</li>
            <li>Quiere cambiar a S-Corp (para ahorrar taxes)</li>
            <li>Tiene muchos expenses complicados</li>
            <li>Simplemente no quiere lidiar con esto</li>
          </ul>
          <p>
            <strong>Costo típico:</strong> $300-800 para taxes anuales de negocio pequeño.
          </p>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Descarga el checklist completo</h3>
            <p>
              <strong>"EIN + Cuenta Bancaria: Setup en 1 Hora"</strong>
            </p>
            <p>
              Paso a paso con links directos y templates para organizar 
              sus finanzas desde el inicio.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar checklist gratis
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere que montemos todo esto por usted?</h3>
            <p>
              Le ayudamos con la estructura básica: presencia online profesional, 
              orden operativo, y sistema para recibir clientes—todo listo para que 
              usted se enfoque en hacer el trabajo.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin compromiso. Revisamos su caso y le decimos si realmente le conviene.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/llc-velo-corporativo" className={styles.navButton}>
              ← Anterior: LLC + Velo Corporativo
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/seguro-coi" className={styles.navButton}>
              Siguiente: Seguro + COI →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

