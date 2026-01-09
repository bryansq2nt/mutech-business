import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Seguro Comercial + COI: El requisito que bloquea o libera su negocio | Mutech Business",
  description:
    "Qué es el seguro comercial, qué es un COI y cómo obtenerlo sin miedo ni costos exagerados. Guía clara para emprendedores hispanos.",
  keywords:
    "seguro comercial negocio, COI certificate of insurance, general liability en español, seguro para contratistas",
}

export default function SeguroCOI() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Seguro + COI
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Seguro Comercial + COI: El requisito que bloquea o libera su negocio
          </h1>
          <p className={styles.subtitle}>
            Muchos emprendedores pierden trabajos no por falta de talento, sino por no tener este documento.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 8 min de lectura</span>
            <span className={styles.badge}>🛡️ Protección legal</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: Common Error */}
          <div className={styles.whyBox}>
            <p>
              <strong>"Tengo LLC, no necesito seguro"</strong> → FALSO
            </p>
            <p>
              La LLC protege sus activos personales, pero <strong>NO cubre:</strong>
            </p>
            <ul>
              <li>Daños a terceros (si rompe algo del cliente)</li>
              <li>Accidentes (si alguien se lastima en el trabajo)</li>
              <li>Reclamos del cliente (si algo sale mal con su servicio)</li>
            </ul>
            <p>
              <strong>El seguro no es gasto, es permiso para crecer.</strong>
            </p>
            <p>
              Sin seguro comercial, su negocio se queda limitado a trabajos pequeños. 
              Con seguro + COI, puede trabajar con empresas grandes, property managers, 
              y contratos comerciales.
            </p>
          </div>

          {/* Section 2: What is Commercial Insurance */}
          <h2>Qué es el seguro comercial (en español real)</h2>
          <p>
            <strong>Seguro comercial ≠ seguro personal</strong>
          </p>
          <p>
            Su seguro de carro o casa cubre cosas personales. El seguro comercial cubre 
            lo que pasa <strong>en el trabajo</strong>.
          </p>
          <p>
            <strong>General Liability</strong> (la póliza más común) explica simple:
          </p>
          <ul>
            <li>
              <strong>Daños:</strong> Si usted o su equipo rompe algo del cliente 
              (ej: raya el piso, rompe una ventana, daña muebles)
            </li>
            <li>
              <strong>Lesiones:</strong> Si alguien se lastima en el trabajo 
              (ej: un cliente se resbala, un empleado se cae)
            </li>
            <li>
              <strong>Propiedad del cliente:</strong> Si daña la propiedad donde trabaja
            </li>
          </ul>
          <p>
            <strong>Quién lo necesita:</strong>
          </p>
          <ul>
            <li>Limpieza (residencial o comercial)</li>
            <li>Remodelación / construcción</li>
            <li>Electricidad / plomería</li>
            <li>Landscaping / jardinería</li>
            <li>Cualquier servicio donde vaya a la casa o negocio del cliente</li>
          </ul>

          {/* Section 3: The Fear */}
          <h2>El miedo más grande: "el seguro es carísimo"</h2>
          <p>
            Este es el mito que más bloquea a los emprendedores.
          </p>
          <p>
            <strong>La verdad:</strong> El costo del seguro depende de:
          </p>
          <ul>
            <li>Tipo de trabajo (limpieza es más barato que construcción)</li>
            <li>Nivel de riesgo (trabajar en alturas = más caro)</li>
            <li>Volumen de trabajo (más ingresos = más cobertura necesaria)</li>
            <li>Historial (si nunca ha tenido reclamos, es más barato)</li>
          </ul>
          <p>
            <strong>Comparación mental:</strong>
          </p>
          <p>
            Piense en el costo del seguro como un porcentaje pequeño de lo que gana. 
            Si gana $5,000/mes y el seguro cuesta $100/mes, eso es 2% de sus ingresos.
          </p>
          <p>
            Ahora piense: ¿cuánto cuesta UNA demanda? $10,000, $50,000, $100,000+.
          </p>
          <p>
            <strong>Frase clara:</strong> "El seguro no es caro. Caro es no tenerlo."
          </p>
          <p>
            Además, muchos clientes grandes <strong>requieren</strong> seguro. Sin él, 
            simplemente no puede trabajar con ellos. Eso sí es caro—perder trabajos.
          </p>

          {/* Section 4: What is COI */}
          <h2>Qué es un COI (Certificate of Insurance)</h2>
          <p>
            COI significa <strong>Certificate of Insurance</strong> (Certificado de Seguro).
          </p>
          <p>
            Es un documento de <strong>1-2 páginas</strong> que comprueba que usted tiene seguro activo.
          </p>
          <p>
            <strong>NO es la póliza completa</strong> (esa tiene 20-30 páginas). El COI es el resumen 
            que los clientes necesitan ver.
          </p>
          <p>
            <strong>Qué información contiene:</strong>
          </p>
          <ul>
            <li>Nombre del asegurado (su negocio o su nombre)</li>
            <li>Tipo de cobertura (General Liability, Workers Comp, etc.)</li>
            <li>Límites de cobertura (ej: $1M/$2M)</li>
            <li>Fechas de vigencia (cuándo empieza y termina)</li>
            <li>Nombre de la aseguradora</li>
            <li>Número de póliza</li>
          </ul>
          <p>
            <strong>Quién se lo va a pedir:</strong>
          </p>
            <ul>
              <li>Property managers (administradores de propiedades)</li>
              <li>General contractors (contratistas generales)</li>
              <li>Empresas grandes (corporaciones que contratan servicios)</li>
              <li>Landlords (dueños de propiedades comerciales)</li>
              <li>Cualquier cliente que quiere protegerse</li>
            </ul>
          <p>
            <strong>Regla simple:</strong> Si el trabajo es más de $1,000 o es para una empresa, 
            probablemente le van a pedir COI.
          </p>

          {/* Section 5: Why COI Matters */}
          <h2>Por qué sin COI su negocio se queda pequeño</h2>
          <p>
            Sin un COI actualizado, su negocio enfrenta estas limitaciones:
          </p>
          <ul>
            <li>
              <strong>No puede trabajar con empresas grandes</strong><br />
              La mayoría de corporaciones requieren COI antes de firmar contrato.
            </li>
            <li>
              <strong>No puede entrar a contratos comerciales</strong><br />
              Property managers y general contractors no trabajan sin COI.
            </li>
            <li>
              <strong>No puede escalar</strong><br />
              Se queda limitado a clientes individuales que no piden requisitos.
            </li>
            <li>
              <strong>Queda limitado a trabajos pequeños</strong><br />
              Los trabajos grandes ($5k, $10k, $50k+) casi siempre requieren seguro.
            </li>
            <li>
              <strong>Pierde credibilidad</strong><br />
              Clientes serios ven la falta de seguro como señal de negocio no establecido.
            </li>
          </ul>
          <p>
            <strong>Cierre:</strong> "El COI es el pase de entrada al juego grande."
          </p>
          <p>
            No es opcional si quiere crecer. Es requisito.
          </p>

          {/* Section 6: How to Get Insurance + COI */}
          <h2>Cómo obtener seguro + COI (paso a paso)</h2>

          <div className={styles.checklistItem}>
            <h3>1. Identificar su tipo de negocio</h3>
            <p>
              Antes de buscar seguro, sepa exactamente qué hace:
            </p>
            <ul>
              <li>¿Es limpieza residencial o comercial?</li>
              <li>¿Es construcción, remodelación, o solo reparaciones?</li>
              <li>¿Trabaja en alturas o solo en el piso?</li>
              <li>¿Tiene empleados o trabaja solo?</li>
            </ul>
            <p>
              Esto determina qué tipo de cobertura necesita y cuánto puede costar.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>2. Contactar broker o plataforma online</h3>
            <p>
              Tiene dos opciones:
            </p>
            <p>
              <strong>Opción A: Broker local</strong><br />
              Busque "insurance broker" en su ciudad. Muchos hablan español.<br />
              Ventaja: atención personalizada, pueden explicar todo.<br />
              Desventaja: puede ser más lento.
            </p>
            <p>
              <strong>Opción B: Plataforma online</strong><br />
              NEXT, Hiscox, Thimble, etc. (ver sección siguiente).<br />
              Ventaja: rápido, puede comprar en minutos.<br />
              Desventaja: menos personalizado.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>3. Comprar póliza básica (General Liability)</h3>
            <p>
              Para empezar, necesita <strong>General Liability</strong>.
            </p>
            <p>
              <strong>Límites comunes:</strong>
            </p>
            <ul>
              <li>$500,000 / $1,000,000 (mínimo para la mayoría)</li>
              <li>$1,000,000 / $2,000,000 (recomendado para escalar)</li>
            </ul>
            <p>
              El primer número es por incidente. El segundo es el total anual.
            </p>
            <p>
              <strong>Ejemplo:</strong> $1M/$2M significa hasta $1 millón por cada 
              reclamo, hasta $2 millones en total por año.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>4. Pedir el COI (normalmente GRATIS)</h3>
            <p>
              Una vez que tiene la póliza activa, pida el COI.
            </p>
            <p>
              <strong>Cómo pedirlo:</strong>
            </p>
            <ul>
              <li>Llame a su broker o aseguradora</li>
              <li>Diga: "Necesito un Certificate of Insurance"</li>
              <li>Pueden enviarlo por email en minutos</li>
            </ul>
            <p>
              <strong>IMPORTANTE:</strong> El COI es <strong>GRATIS</strong>. 
              Si alguien le cobra por dárselo, cambie de broker.
            </p>
            <p>
              Algunas plataformas online le dan acceso al COI automáticamente 
              en su portal.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>5. Guardarlo y reenviarlo cuando se lo pidan</h3>
            <p>
              Guarde el PDF del COI en un lugar fácil de encontrar:
            </p>
            <ul>
              <li>En su teléfono (carpeta "Negocio")</li>
              <li>En Google Drive o Dropbox</li>
              <li>En su email (búsquelo fácilmente)</li>
            </ul>
            <p>
              <strong>Cuando un cliente lo pida:</strong>
            </p>
            <ul>
              <li>Envíelo inmediatamente (muestra profesionalismo)</li>
              <li>Si el cliente quiere que agregue su nombre como "additional insured", 
              pida un COI actualizado (también gratis)</li>
              <li>Mantenga el COI actualizado (renueve antes de que expire)</li>
            </ul>
          </div>

          {/* Section 7: Where to Get Insurance */}
          <h2>Dónde conseguir seguro (opciones)</h2>

          <div className={styles.checklistItem}>
            <h3>Brokers locales</h3>
            <p>
              Busque en Google: "commercial insurance broker [su ciudad]"
            </p>
            <p>
              <strong>Ventajas:</strong>
            </p>
            <ul>
              <li>Atención personalizada</li>
              <li>Muchos hablan español</li>
              <li>Pueden explicar todo en detalle</li>
              <li>Ayudan a comparar opciones</li>
            </ul>
            <p>
              <strong>Recomendación:</strong>
            </p>
            <ul>
              <li>Pida que le expliquen en español</li>
              <li>Pregunte por COI ilimitados (poder pedir cuantos necesite)</li>
              <li>Pregunte sobre renovación automática</li>
            </ul>
          </div>

          <div className={styles.checklistItem}>
            <h3>Plataformas online</h3>
            <p>
              <strong>NEXT Insurance</strong>
            </p>
            <ul>
              <li>Todo online, rápido</li>
              <li>COI disponible inmediatamente</li>
              <li>Buena para negocios pequeños</li>
              <li>
                → <a 
                  href="https://www.nextinsurance.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  nextinsurance.com
                </a>
              </li>
            </ul>
            <p>
              <strong>Hiscox</strong>
            </p>
            <ul>
              <li>Establecido, confiable</li>
              <li>Buena cobertura para servicios</li>
              <li>Proceso online simple</li>
              <li>
                → <a 
                  href="https://www.hiscox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  hiscox.com
                </a>
              </li>
            </ul>
            <p>
              <strong>Thimble</strong>
            </p>
            <ul>
              <li>Seguro por hora, día, o mes</li>
              <li>Perfecto si trabaja por proyectos</li>
              <li>Flexible y económico</li>
              <li>
                → <a 
                  href="https://www.thimble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  thimble.com
                </a>
              </li>
            </ul>
            <p>
              <strong>Recomendación:</strong> Compare al menos 2-3 opciones antes de decidir.
            </p>
          </div>

          {/* Section 8: Common Errors */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes que pueden costarle caro:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Trabajar "mientras después saco el seguro"</strong><br />
                Si algo pasa antes de tener seguro, usted paga TODO de su bolsillo. 
                No espere—sáquelo antes del primer trabajo.
              </li>
              <li>
                <strong>Pensar que el cliente nunca reclamará</strong><br />
                Un accidente puede pasar en cualquier momento. Un cliente puede 
                reclamar meses después. El seguro debe estar activo siempre.
              </li>
              <li>
                <strong>Usar seguro personal</strong><br />
                Su seguro de casa o carro NO cubre trabajo comercial. Si usa 
                herramientas del negocio y algo pasa, no está cubierto.
              </li>
              <li>
                <strong>No renovar</strong><br />
                Si el seguro expira y algo pasa, no está cubierto. Configure 
                renovación automática o ponga recordatorios.
              </li>
              <li>
                <strong>No pedir COI actualizado</strong><br />
                Si un cliente le pide COI y el suyo está vencido, pierde el trabajo. 
                Mantenga siempre un COI vigente a mano.
              </li>
            </ul>
          </div>

          {/* Section 9: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ Tengo seguro activo</li>
              <li>□ Sé qué cubre mi póliza</li>
              <li>□ Sé cómo pedir mi COI</li>
              <li>□ Tengo el PDF del COI guardado</li>
              <li>□ Puedo enviarlo en minutos cuando me lo pidan</li>
              <li>□ Sé cuándo expira mi seguro</li>
              <li>□ Tengo recordatorio para renovar</li>
            </ul>
            <p>
              Si marcó todas las casillas: está listo para trabajar con clientes serios.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Checklist: Seguro + COI sin estrés</h3>
            <p>
              <strong>"Todo lo que necesita para cumplir requisitos y no perder trabajos."</strong>
            </p>
            <p>
              Guía rápida de 1 página con pasos exactos, qué preguntar, y cómo mantener 
              todo actualizado sin complicaciones.
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
            <h3>¿Quiere trabajar con clientes serios sin trabas?</h3>
            <p>
              Nosotros le ayudamos con la estructura completa: presencia online profesional, 
              orden operativo, y requisitos legales claros—todo listo para que usted se 
              enfoque en hacer el trabajo.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Le explicamos todo sin letras pequeñas.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/ein-cuenta-bancaria" className={styles.navButton}>
              ← Anterior: EIN + Cuenta Bancaria
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/google-my-business" className={styles.navButton}>
              Siguiente: Google My Business →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

