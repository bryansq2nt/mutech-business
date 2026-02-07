'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navigation from '@/components/Navigation';

const TiposNegocioVirginia = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.blogContainer}>
      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>Lo esencial para tu negocio / Primeros pasos</div>
          <h1 className={styles.heroTitle}>¿Qué tipo de negocio estás creando en Virginia?</h1>
          <p className={styles.heroSubtitle}>Sole Proprietor, Partnership, LLC y S-Corp — explicado sin rodeos</p>
          <div className={styles.heroFeatures}>
            <span className={styles.featureTag}>Sin abogados</span>
            <span className={styles.featureTag}>Sin miedo</span>
            <span className={styles.featureTag}>Sin cuentos</span>
          </div>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        {/* Table of Contents */}
        <aside className={styles.tocCard}>
          <h3 className={styles.tocTitle}>Contenido</h3>
          <nav className={styles.tocNav}>
            <a href="#seccion-1" className={`${styles.tocLink} ${activeSection === 'seccion-1' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-1'); }}>1. El error que casi todos cometen</a>
            <a href="#seccion-2" className={`${styles.tocLink} ${activeSection === 'seccion-2' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-2'); }}>2. Sole Proprietor</a>
            <a href="#seccion-3" className={`${styles.tocLink} ${activeSection === 'seccion-3' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-3'); }}>3. Partnership</a>
            <a href="#seccion-4" className={`${styles.tocLink} ${activeSection === 'seccion-4' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-4'); }}>4. LLC (Single y Multi-Member)</a>
            <a href="#seccion-5" className={`${styles.tocLink} ${activeSection === 'seccion-5' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-5'); }}>5. S-Corp</a>
            <a href="#seccion-6" className={`${styles.tocLink} ${activeSection === 'seccion-6' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-6'); }}>6. Resumen rápido</a>
            <a href="#seccion-7" className={`${styles.tocLink} ${activeSection === 'seccion-7' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('seccion-7'); }}>7. El orden correcto</a>
          </nav>
        </aside>

        <main className={styles.mainContent}>
          <p className={styles.sectionIntro}>
            Si usted vive en Virginia y quiere emprender, estas cuatro palabras van a aparecer sí o sí. El problema es que casi nadie se las explica bien.
          </p>
          <div className={styles.quoteBlock}>
            <div className={styles.quoteIcon}>&quot;</div>
            <p className={styles.quoteText}>Este blog existe para una sola cosa: que usted salga entendiendo exactamente qué significa cada una, sin abogados, sin miedo y sin cuentos.</p>
            <div className={styles.quoteAuthor}>Eso es todo.</div>
          </div>

          {/* Sección 1 */}
          <section id="seccion-1" data-section="seccion-1" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>01 </span> El error que casi todos cometen al empezar</h2>
            </div>

            <div className={styles.mythBox}>
              <h3 className={styles.mythTitle}>A muchos hispanos les dicen esto:</h3>
              <div className={styles.mythQuote}>&quot;Abre una LLC y ya estás protegido.&quot;</div>
              <div className={styles.mythSteps}>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>1</span>
                  <p>La abren. Pagan. Guardan el papel.</p>
                </div>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>2</span>
                  <p>Y creen que ya todo está resuelto.</p>
                </div>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>3</span>
                  <p>No.</p>
                </div>
              </div>
              <div className={styles.mythReality}>
                <span className={styles.realityBadge}>ANTES DE TODO</span>
                <p className={styles.realityText}>Antes de hablar de LLC o S-Corp, hay que entender tres cosas distintas que casi todos mezclan:</p>
              </div>
            </div>

            <div className={styles.clarificationBox}>
              <h4>Separe esto en su cabeza:</h4>
              <ul className={styles.clarificationList}>
                <li><strong>Tu negocio</strong> → lo que haces para ganar dinero</li>
                <li><strong>La estructura legal</strong> → cómo te registra el estado de Virginia</li>
                <li><strong>Los impuestos</strong> → cómo el IRS te cobra</li>
              </ul>
              <p className={styles.clarificationNote}>Si no separa esto, todo lo demás se vuelve confusión.</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section id="seccion-2" data-section="seccion-2" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>02 </span> Sole Proprietor (Dueño único)</h2>
            </div>

            <div className={styles.quoteBlock}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.quoteText}>Usted y el negocio son la misma persona.</p>
              <div className={styles.quoteAuthor}>Qué significa en una frase.</div>
            </div>
            <p className={styles.sectionIntro}>Esto pasa automáticamente cuando usted empieza a trabajar por su cuenta sin registrar una empresa.</p>

            <div className={styles.clarificationBox}>
              <h4>Ejemplos comunes</h4>
              <ul className={styles.clarificationList}>
                <li>Limpieza</li>
                <li>Jardinería</li>
                <li>Construcción pequeña</li>
                <li>Servicios por su cuenta</li>
              </ul>
              <p className={styles.clarificationNote}>Si cobra a su nombre personal, ya es Sole Proprietor, aunque nunca haya llenado un formulario.</p>
            </div>

            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.successContent}>
                <h3>Lo bueno</h3>
                <ul className={styles.successList}>
                  <li>Es simple</li>
                  <li>No hay trámites</li>
                  <li>Todo se declara en su declaración personal</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <div className={styles.warningBadge}>El riesgo real</div>
              <p className={styles.warningText}>No existe ninguna pared entre: el negocio, su casa, su carro, sus ahorros. Si algo sale mal, todo está en riesgo.</p>
              <p className={styles.sectionClose}>Es común para empezar, pero no es buena idea quedarse ahí si el negocio crece.</p>
            </div>
          </section>

          {/* Sección 3 */}
          <section id="seccion-3" data-section="seccion-3" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>03 </span> Partnership (Sociedad sin protección)</h2>
            </div>

            <div className={styles.quoteBlock}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.quoteText}>Dos o más personas trabajando juntas sin estructura legal.</p>
              <div className={styles.quoteAuthor}>Qué significa.</div>
            </div>
            <p className={styles.sectionIntro}>Muchos negocios familiares empiezan así: hermanos, primos, amigos, pareja.</p>

            <div className={styles.warningBox}>
              <div className={styles.warningBadge}>El problema grande</div>
              <p className={styles.warningText}>Cada socio responde por los errores del otro. Si su socio firma mal, causa un accidente o crea una deuda, usted también responde, aunque no haya hecho nada.</p>
              <p className={styles.sectionClose}>Fiscalmente funciona como Partnership, pero sin protección legal. Es la estructura más riesgosa cuando hay más de una persona.</p>
            </div>
          </section>

          {/* Sección 4 */}
          <section id="seccion-4" data-section="seccion-4" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>04 </span> LLC (Single-Member y Multi-Member)</h2>
            </div>

            <div className={styles.quoteBlock}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.quoteText}>Una pared legal que separa su vida personal del negocio.</p>
              <div className={styles.quoteAuthor}>Qué es una LLC en realidad.</div>
            </div>

            <div className={styles.diagramBox}>
              <div className={styles.diagramGrid}>
                <div className={`${styles.diagramCard} ${styles.diagramCardStructure}`}>
                  <div className={styles.diagramIcon}>1</div>
                  <h4>Single-Member LLC</h4>
                  <p className={styles.diagramLabel}>Un solo dueño</p>
                  <p className={styles.diagramDesc}>Legalmente hay protección. Fiscalmente el IRS la trata como Sole Proprietor (por default).</p>
                </div>
                <div className={styles.diagramSeparator}>+</div>
                <div className={`${styles.diagramCard} ${styles.diagramCardBusiness}`}>
                  <div className={styles.diagramIcon}>2+</div>
                  <h4>Multi-Member LLC</h4>
                  <p className={styles.diagramLabel}>Dos o más dueños</p>
                  <p className={styles.diagramDesc}>Legalmente todos están protegidos. Fiscalmente el IRS la trata como Partnership (por default).</p>
                </div>
              </div>
            </div>

            <div className={styles.checklistBox}>
              <h4>Qué SÍ hace una LLC</h4>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>✓</span><p>Protege su casa, carro y bienes personales</p></div>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>✓</span><p>Le da orden legal al negocio</p></div>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>✓</span><p>Permite crecer con estructura</p></div>
            </div>

            <div className={styles.clarificationBox}>
              <h4>Qué NO hace</h4>
              <ul className={styles.clarificationList}>
                <li>No lo protege si mezcla dinero personal y del negocio</li>
                <li>No reduce impuestos automáticamente</li>
                <li>No arregla problemas entre socios si no hay acuerdos claros</li>
              </ul>
              <p className={styles.clarificationNote}>Para la mayoría de los emprendedores, la LLC es la base correcta.</p>
            </div>
          </section>

          {/* Sección 5 */}
          <section id="seccion-5" data-section="seccion-5" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>05 </span> S-Corp (donde casi todos se confunden)</h2>
            </div>

            <div className={styles.warningBox}>
              <div className={styles.warningBadge}>Muy importante</div>
              <p className={styles.warningText}>S-Corp NO es un tipo de empresa que se registra en Virginia.</p>
            </div>

            <div className={styles.clarificationBox}>
              <h4>Qué es realmente</h4>
              <ul className={styles.clarificationList}>
                <li>Es una elección fiscal con el IRS</li>
                <li>Se hace después de tener una LLC</li>
                <li>Para qué sirve: ahorrar impuestos cuando el negocio ya gana bien</li>
              </ul>
            </div>

            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.successContent}>
                <h3>Cómo funciona (simple)</h3>
                <ul className={styles.successList}>
                  <li>Usted se paga un salario</li>
                  <li>El resto se paga como distribución</li>
                  <li>Esa parte no paga self-employment tax</li>
                </ul>
                <h4 style={{ marginTop: '1rem', color: '#94a3b8' }}>Cuándo tiene sentido</h4>
                <ul className={styles.successList}>
                  <li>Ganancias netas estables</li>
                  <li>Contabilidad ordenada</li>
                  <li>Capacidad de manejar payroll y contador</li>
                </ul>
                <p className={styles.sectionClose}>No es para empezar. Es para optimizar cuando el negocio ya está funcionando.</p>
              </div>
            </div>
          </section>

          {/* Sección 6 */}
          <section id="seccion-6" data-section="seccion-6" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>06 </span> Resumen rápido</h2>
            </div>

            <div className={styles.checklistBox}>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>1</span><p><strong>Sole Proprietor</strong> → fácil, sin protección</p></div>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>2</span><p><strong>Partnership</strong> → fácil, pero peligrosa</p></div>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>✓</span><p><strong>LLC</strong> → protección legal real</p></div>
              <div className={styles.checklistItem}><span className={styles.checkIcon}>✓</span><p><strong>S-Corp</strong> → estrategia fiscal (no estructura)</p></div>
            </div>
            <p className={`${styles.sectionClose} ${styles.sectionCloseHighlight}`}>La LLC es la base. La S-Corp es una decisión posterior.</p>
          </section>

          {/* Sección 7 */}
          <section id="seccion-7" data-section="seccion-7" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>07 </span> El orden correcto para no equivocarse</h2>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>1</div>
                <div className={styles.timelineContent}>
                  <h4>Entienda cómo está operando hoy</h4>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>2</div>
                <div className={styles.timelineContent}>
                  <h4>Defina si trabaja solo o con socios</h4>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>3</div>
                <div className={styles.timelineContent}>
                  <h4>Forme una LLC si necesita protección</h4>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>4</div>
                <div className={styles.timelineContent}>
                  <h4>Mantenga cuentas separadas</h4>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>5</div>
                <div className={styles.timelineContent}>
                  <h4>Después, evalúe S-Corp con un contador</h4>
                </div>
              </div>
            </div>
          </section>

          {/* Cierre */}
          <section className={styles.closingSection}>
            <div className={styles.closingBox}>
              <h3>Este blog no es para asustarlo.</h3>
              <p>Es para que no empiece mal.</p>
              <p className={styles.closingHighlight}>Cuando usted entiende qué es su negocio, qué es la estructura legal y cómo funcionan los impuestos, tomar buenas decisiones se vuelve sencillo.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TiposNegocioVirginia;
