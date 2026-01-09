import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Licencias y permisos: lo que su negocio necesita para operar legalmente | Mutech Business",
  description:
    "Guía clara para entender licencias y permisos según su tipo de negocio y ubicación en EE.UU.",
  keywords:
    "licencias para negocios servicios, permisos negocio estados unidos, contractor license, handyman license español",
}

export default function LicenciasPermisos() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Licencias y permisos
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Licencias y permisos: lo que su negocio necesita para operar legalmente
          </h1>
          <p className={styles.subtitle}>
            Trabajar bien no siempre significa trabajar legal. Aquí está la diferencia.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 9 min de lectura</span>
            <span className={styles.badge}>📄 Cumplimiento legal</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Silent Problem */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores trabajan bien. Hacen buen trabajo. Sus clientes están contentos. 
              Pero trabajan <strong>sin licencia</strong>.
            </p>
            <p>
              <strong>Por qué pasa:</strong> Nadie les explicó. Pensaron que tener LLC era suficiente. 
              O simplemente no sabían que necesitaban algo más.
            </p>
            <p>
              <strong>El problema aparece cuando:</strong>
            </p>
            <ul>
              <li>Un cliente serio le pide ver su licencia</li>
              <li>Una empresa grande exige licencia para contratarlo</li>
              <li>La ciudad lo multa por trabajar sin permiso</li>
              <li>Un proyecto grande requiere licencia y no puede tomarlo</li>
            </ul>
            <p>
              <strong>Frase clave:</strong> "El problema no es el trabajo. Es no tener los permisos correctos."
            </p>
            <p>
              Puede ser el mejor en su oficio, pero sin licencia, muchos trabajos simplemente no puede tomarlos. 
              Y eso limita su crecimiento.
            </p>
          </div>

          {/* Section 2: License vs Permit */}
          <h2>Licencia ≠ Permiso (confusión común)</h2>
          <p>
            Muchos emprendedores confunden estos términos. Son diferentes:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Licencia:</strong><br />
              Autorización para <strong>ejercer un tipo de trabajo</strong>.<br />
              Ejemplos: Contractor License, Electrician License, Plumber License.<br />
              La otorga el <strong>estado</strong> (o a veces el county).
            </p>
            <p>
              <strong>Permiso:</strong><br />
              Autorización para <strong>operar en una ciudad o proyecto específico</strong>.<br />
              Ejemplos: Business License (permiso de la ciudad), Building Permit (permiso de construcción).<br />
              Los otorgan <strong>ciudades o counties</strong>.
            </p>
          </div>
          <p>
            <strong>Ejemplo simple:</strong>
          </p>
          <p>
            Si es electricista:
          </p>
          <ul>
            <li><strong>Licencia:</strong> Electrician License del estado (le permite ejercer como electricista)</li>
            <li><strong>Permiso:</strong> Business License de la ciudad (le permite operar su negocio en esa ciudad)</li>
            <li><strong>Permiso de proyecto:</strong> Building Permit para trabajos mayores (lo pide el cliente o usted)</li>
          </ul>
          <p>
            <strong>Puede necesitar ambos.</strong> O solo uno. Depende de su servicio y ubicación.
          </p>

          {/* Section 3: Depends on Service */}
          <h2>Depende del servicio (no todos necesitan lo mismo)</h2>
          <p>
            <strong>No existe "una licencia universal".</strong> Lo que necesita depende de:
          </p>
          <ul>
            <li>Tipo de servicio que ofrece</li>
            <li>Estado donde opera</li>
            <li>Ciudad o county donde trabaja</li>
            <li>Complejidad del trabajo</li>
          </ul>
          <p>
            <strong>Lo que es legal en un estado puede no serlo en otro.</strong>
          </p>
          <p>
            <strong>Ejemplos por tipo de servicio:</strong>
          </p>

          <div className={styles.checklistItem}>
            <h3>Limpieza</h3>
            <p>
              <strong>Generalmente:</strong> No necesita licencia estatal de oficio, pero puede necesitar:
            </p>
            <ul>
              <li>Business License de la ciudad</li>
              <li>Permiso si usa químicos especiales</li>
              <li>Bonding (seguro de fidelidad) si trabaja en propiedades comerciales</li>
            </ul>
            <p>
              <strong>Varia por estado/ciudad.</strong> Algunas ciudades requieren registro especial.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Handyman / Reparaciones menores</h3>
            <p>
              <strong>Generalmente:</strong> Depende del valor del trabajo:
            </p>
            <ul>
              <li>Trabajos pequeños ($500-1,000): Puede no necesitar licencia</li>
              <li>Trabajos mayores ($1,000+): Puede necesitar Contractor License</li>
              <li>Si toca electricidad/plomería: Puede necesitar licencia de ese oficio</li>
            </ul>
            <p>
              <strong>Muchos estados tienen límites de valor.</strong> Trabajos bajo cierto monto no requieren licencia.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Remodelación / Construcción</h3>
            <p>
              <strong>Generalmente:</strong> Requiere Contractor License:
            </p>
            <ul>
              <li>General Contractor License (para proyectos completos)</li>
              <li>O Specialty Contractor License (solo para su especialidad)</li>
              <li>Business License de la ciudad</li>
              <li>Building Permits para cada proyecto (lo pide el cliente o usted)</li>
            </ul>
            <p>
              <strong>La mayoría de estados requieren esto.</strong> No puede hacer remodelaciones mayores sin licencia.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Electricidad</h3>
            <p>
              <strong>Generalmente:</strong> Requiere Electrician License:
            </p>
            <ul>
              <li>Journeyman Electrician (para trabajar bajo supervisión)</li>
              <li>Master Electrician (para trabajar independiente)</li>
              <li>Business License de la ciudad</li>
              <li>Permits para trabajos mayores</li>
            </ul>
            <p>
              <strong>La mayoría de estados requieren esto.</strong> Trabajar sin licencia es ilegal y peligroso.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>Landscaping / Jardinería</h3>
            <p>
              <strong>Generalmente:</strong> Puede no necesitar licencia estatal, pero:
            </p>
            <ul>
              <li>Business License de la ciudad</li>
              <li>Si aplica pesticidas: Pesticide Applicator License</li>
              <li>Si instala sistemas de riego: Puede necesitar permiso</li>
            </ul>
            <p>
              <strong>Varia mucho por estado.</strong> Algunos estados requieren licencia, otros no.
            </p>
          </div>

          <p>
            <strong>Regla simple:</strong> No asuma. Verifique qué necesita según su servicio y ubicación.
          </p>

          {/* Section 4: State vs Local */}
          <h2>Licencias estatales vs locales</h2>
          <p>
            Las licencias y permisos vienen de diferentes niveles:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Estados con Licensing Boards</strong><br />
              Muchos estados tienen "Licensing Boards" o "Contractors State License Board" que regulan oficios específicos.
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>California: Contractors State License Board (CSLB)</li>
              <li>Florida: Department of Business and Professional Regulation</li>
              <li>Texas: Texas Department of Licensing and Regulation</li>
              <li>Virginia: Department of Professional and Occupational Regulation</li>
            </ul>
            <p>
              <strong>Estos otorgan:</strong> Contractor License, Trade License (electricista, plomero, etc.)
            </p>
            <p>
              <strong>2. Ciudades con Business License</strong><br />
              Muchas ciudades requieren un "Business License" o "Business Tax Certificate" para operar dentro de sus límites.
            </p>
            <p>
              <strong>Esto es independiente de la licencia estatal.</strong> Puede tener licencia estatal pero aún necesitar 
              permiso de la ciudad.
            </p>
            <p>
              <strong>3. Counties con permisos adicionales</strong><br />
              Algunos counties (condados) tienen requisitos adicionales, especialmente para trabajos en áreas no incorporadas.
            </p>
          </div>
          <p>
            <strong>Puede necesitar los tres:</strong> Licencia estatal + Business License de ciudad + Permisos del county.
          </p>
          <p>
            <strong>O solo uno.</strong> Depende de su servicio y ubicación.
          </p>

          {/* Section 5: What Happens Without License */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Qué pasa si trabaja sin licencia:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>Multas</strong><br />
                La ciudad o estado puede multarlo. Las multas pueden ser de cientos a miles de dólares.
              </li>
              <li>
                <strong>Trabajos cancelados</strong><br />
                Si un cliente descubre que no tiene licencia, puede cancelar el contrato y no pagarle.
              </li>
              <li>
                <strong>Demandas</strong><br />
                Si algo sale mal y no tiene licencia, es más vulnerable a demandas. 
                La falta de licencia puede usarse en su contra.
              </li>
              <li>
                <strong>Imposibilidad de cobrar</strong><br />
                En algunos estados, si trabaja sin licencia, no puede demandar para cobrar. 
                El cliente puede simplemente no pagarle y usted no tiene recurso legal.
              </li>
              <li>
                <strong>Pérdida de contratos grandes</strong><br />
                Empresas grandes, property managers, y contratos comerciales requieren licencia. 
                Sin ella, simplemente no puede trabajar con ellos.
              </li>
              <li>
                <strong>Problemas con seguros</strong><br />
                Su seguro comercial puede no cubrir trabajos hechos sin licencia. 
                Si algo pasa, puede quedar sin protección.
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase clara:</strong> "No tener licencia no lo ahorra dinero. Lo expone."
            </p>
          </div>

          {/* Section 6: How to Know What You Need */}
          <h2>Cómo saber qué necesita (paso a paso)</h2>
          <p>
            No necesita un abogado para esto. Puede verificar usted mismo:
          </p>

          <div className={styles.checklistItem}>
            <h3>1. Definir exactamente su servicio</h3>
            <p>
              Sea específico. No diga "hago de todo". Defina:
            </p>
            <ul>
              <li>¿Qué tipo de trabajo hace? (limpieza, electricidad, remodelación, etc.)</li>
              <li>¿Qué valor tienen sus trabajos típicos? ($500, $2,000, $10,000?)</li>
              <li>¿Toca sistemas eléctricos, plomería, o estructuras?</li>
            </ul>
            <p>
              Esto determina qué tipo de licencia necesita.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>2. Buscar Licensing Board del estado</h3>
            <p>
              Busque en Google: "[Su estado] contractor license" o "[Su estado] [su oficio] license".
            </p>
            <p>
              <strong>Ejemplos:</strong>
            </p>
            <ul>
              <li>"California contractor license"</li>
              <li>"Florida electrician license"</li>
              <li>"Texas handyman license"</li>
            </ul>
            <p>
              Busque el sitio <strong>oficial del estado</strong> (termina en .gov). 
              Ahí encontrará los requisitos exactos.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>3. Revisar requisitos de ciudad/county</h3>
            <p>
              Además de la licencia estatal, verifique:
            </p>
            <ul>
              <li>Business License de su ciudad (busque "[Su ciudad] business license")</li>
              <li>Requisitos del county si trabaja en áreas no incorporadas</li>
              <li>Permisos especiales si aplica (ej: si usa químicos, si trabaja en propiedades comerciales)</li>
            </ul>
            <p>
              <strong>Muchas ciudades tienen sitios web</strong> donde explican qué necesitan.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>4. Ver si necesita examen</h3>
            <p>
              Algunas licencias requieren examen:
            </p>
            <ul>
              <li>Contractor License generalmente requiere examen</li>
              <li>Electrician License requiere examen</li>
              <li>Business License generalmente NO requiere examen (solo registro)</li>
            </ul>
            <p>
              <strong>Si requiere examen:</strong> Prepárese. Hay cursos y materiales de estudio disponibles.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>5. Confirmar renovaciones</h3>
            <p>
              Las licencias generalmente se renuevan:
            </p>
            <ul>
              <li>Anualmente (la mayoría)</li>
              <li>Bianualmente (cada 2 años, algunos estados)</li>
              <li>Con educación continua (algunas licencias requieren horas de educación para renovar)</li>
            </ul>
            <p>
              <strong>Ponga recordatorios.</strong> Si su licencia expira, no puede trabajar legalmente.
            </p>
          </div>

          <p>
            <strong>Tiempo estimado:</strong> 1-2 horas de investigación para saber qué necesita. 
            Vale la pena hacerlo bien desde el inicio.
          </p>

          {/* Section 7: Common Errors */}
          <h2>Errores comunes</h2>
          <p>
            Estos errores causan problemas:
          </p>
          <div className={styles.checklistItem}>
            <ul>
              <li>
                <strong>Asumir que la LLC es suficiente</strong><br />
                La LLC protege sus activos personales, pero NO es una licencia para trabajar. 
                Son cosas diferentes.
              </li>
              <li>
                <strong>Copiar lo que otro hace</strong><br />
                "Mi amigo trabaja sin licencia" no es excusa legal. Además, puede que su amigo 
                también esté trabajando ilegalmente sin saberlo.
              </li>
              <li>
                <strong>Trabajar "mientras después"</strong><br />
                "Voy a trabajar mientras saco la licencia" es arriesgado. Si algo pasa antes de tenerla, 
                está expuesto a todos los problemas mencionados.
              </li>
              <li>
                <strong>No renovar</strong><br />
                Si su licencia expira y sigue trabajando, está trabajando ilegalmente. 
                Ponga recordatorios para renovar a tiempo.
              </li>
              <li>
                <strong>No verificar cambios</strong><br />
                Las leyes cambian. Lo que no requería licencia antes puede requerirla ahora. 
                Verifique periódicamente.
              </li>
            </ul>
          </div>

          {/* Section 8: Quick Checklist */}
          <h2>Checklist rápido</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Sé si mi servicio requiere licencia</strong> (verifiqué con el estado)</li>
              <li>□ <strong>Sé si mi ciudad exige permiso</strong> (verifiqué con la ciudad)</li>
              <li>□ <strong>Tengo licencia activa</strong> (si aplica, la tengo y está vigente)</li>
              <li>□ <strong>Sé cuándo renovar</strong> (tengo recordatorio para la fecha de renovación)</li>
              <li>□ <strong>Puedo mostrarla si me la piden</strong> (tengo copia digital o física)</li>
              <li>□ <strong>Entiendo las consecuencias</strong> (sé qué pasa si trabajo sin licencia)</li>
            </ul>
            <p>
              Si marcó todas las casillas: está operando legalmente.
            </p>
          </div>

          {/* Section 9: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Checklist: Licencias y permisos</h3>
            <p>
              <strong>"Lo mínimo para operar sin problemas."</strong>
            </p>
            <p>
              Guía rápida de 1 página con pasos para verificar qué necesita, 
              cómo obtenerlo, y cómo mantenerlo actualizado.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar checklist
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 10: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿No está seguro qué necesita su negocio?</h3>
            <p>
              Le ayudamos a identificar licencias, permisos y estructura correcta para su tipo de negocio 
              y ubicación. Sin rodeos. Sin suposiciones.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Sin rodeos. Sin suposiciones.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/google-business" className={styles.navButton}>
              ← Anterior: Google Business Profile
            </Link>
            <Link href="/lo-esencial-para-tu-negocio/impuestos-negocio" className={styles.navButton}>
              Siguiente: Impuestos del negocio →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

