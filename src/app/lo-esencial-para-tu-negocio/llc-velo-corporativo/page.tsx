'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navigation from '@/components/Navigation';

const LLCBlogPost = () => {
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
          <h1 className={styles.heroTitle}>La famosa LLC.</h1>
          <p className={styles.heroSubtitle}>Qué es, para qué sirve y cómo no destruirla sin darse cuenta</p>
          <div className={styles.heroFeatures}>
            <span className={styles.featureTag}>Sin lenguaje complicado</span>
            <span className={styles.featureTag}>Ejemplos reales</span>
            <span className={styles.featureTag}>Pasos claros</span>
          </div>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        {/* Table of Contents */}
        <aside className={styles.tocCard}>
          <h3 className={styles.tocTitle}>Contenido</h3>
          <nav className={styles.tocNav}>
            <a 
              href="#seccion-1" 
              className={`${styles.tocLink} ${activeSection === 'seccion-1' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-1'); }}
            >
              1. No necesita ciudadanía
            </a>
            <a 
              href="#seccion-2" 
              className={`${styles.tocLink} ${activeSection === 'seccion-2' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-2'); }}
            >
              2. Qué es una LLC
            </a>
            <a 
              href="#seccion-3" 
              className={`${styles.tocLink} ${activeSection === 'seccion-3' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-3'); }}
            >
              3. El mito común
            </a>
            <a 
              href="#seccion-4" 
              className={`${styles.tocLink} ${activeSection === 'seccion-4' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-4'); }}
            >
              4. LLC ≠ Negocio
            </a>
            <a 
              href="#seccion-5" 
              className={`${styles.tocLink} ${activeSection === 'seccion-5' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-5'); }}
            >
              5. El velo corporativo
            </a>
            <a 
              href="#seccion-6" 
              className={`${styles.tocLink} ${activeSection === 'seccion-6' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-6'); }}
            >
              6. 4 errores que rompen protección
            </a>
            <a 
              href="#seccion-7" 
              className={`${styles.tocLink} ${activeSection === 'seccion-7' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-7'); }}
            >
              7. Orden correcto
            </a>
            <a 
              href="#seccion-8" 
              className={`${styles.tocLink} ${activeSection === 'seccion-8' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-8'); }}
            >
              8. Si cometió errores
            </a>
            <a 
              href="#seccion-9" 
              className={`${styles.tocLink} ${activeSection === 'seccion-9' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-9'); }}
            >
              9. Qué debe tener claro
            </a>
            <a 
              href="#seccion-10" 
              className={`${styles.tocLink} ${activeSection === 'seccion-10' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('seccion-10'); }}
            >
              10. Siguientes pasos
            </a>
          </nav>
        </aside>

        <main className={styles.mainContent}>
          {/* Sección 1 */}
          <section id="seccion-1" data-section="seccion-1" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>01 </span> No necesita ser ciudadano americano para abrir una LLC</h2>
            </div>

            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.successContent}>
                <h3>Para abrir una LLC en Estados Unidos NO necesita ser ciudadano americano.</h3>
                <ul className={styles.successList}>
                  <li>No necesita ciudadanía</li>
                  <li>No necesita green card</li>
                  <li>No necesita social (puede usar ITIN)</li>
                </ul>
                <p className={styles.sectionClose}>Este blog es para ayudarle a hacerlo bien desde el inicio.</p>

              </div>
            </div>
            <p className={styles.successNote}>Todos los años, miles de personas abren negocios en Estados Unidos y comienzan así.<br></br> Si usted sabe hacer su trabajo y generar ingresos, también puede proteger su negocio.</p>

          </section>

          {/* Sección 2 */}
          <section id="seccion-2" data-section="seccion-2" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>02 </span> Qué es una LLC (en una frase útil)</h2>
            </div>

            <div className={styles.quoteBlock}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>Una LLC es una estructura legal que separa su vida personal de su negocio.</p>
              <div className={styles.quoteAuthor}>Eso es todo.</div>
            </div>

            <div className={styles.clarificationBox}>
              <h4>Lo que NO es:</h4>
              <ul className={styles.clarificationList}>
                <li>No es el negocio</li>
                <li>No es cómo trabaja</li>
                <li>No es cómo cobra</li>
              </ul>
              <p className={styles.clarificationNote}>Es solo la estructura legal.</p>
            </div>
          </section>

          {/* Sección 3 */}
          <section id="seccion-3" data-section="seccion-3" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>03 </span> El mito que confunde a casi todos</h2>
            </div>

            <div className={styles.mythBox}>
              <h3 className={styles.mythTitle}>A la mayoría solo les dicen esto:</h3>
              <div className={styles.mythQuote}>"Para comenzar un negocio tienes que tener una LLC."</div>
              
              <div className={styles.mythSteps}>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>1</span>
                  <p>Pagan $300, $400 o $500</p>
                </div>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>2</span>
                  <p>Alguien se la crea</p>
                </div>
                <div className={styles.mythStep}>
                  <span className={styles.stepNumber}>3</span>
                  <p>Y creen que ya tienen todo listo</p>
                </div>
              </div>

              <div className={styles.mythReality}>
                <span className={styles.realityBadge}>PERO NO.</span>
                <p className={styles.realityText}>Tener una LLC no significa que su negocio esté protegido. Es solo el primer paso.</p>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section id="seccion-4" data-section="seccion-4" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>04 </span> La LLC NO es el negocio</h2>
            </div>

            <div className={styles.diagramBox}>
              <div className={styles.diagramGrid}>
                <div className={`${styles.diagramCard} ${styles.diagramCardStructure}`}>
                  <div className={styles.diagramIcon}>📄</div>
                  <h4>LLC</h4>
                  <p className={styles.diagramLabel}>Estructura legal</p>
                  <p className={styles.diagramDesc}>Existe en papel</p>
                </div>

                <div className={styles.diagramSeparator}>≠</div>

                <div className={`${styles.diagramCard} ${styles.diagramCardBusiness}`}>
                  <div className={styles.diagramIcon}>💼</div>
                  <h4>Negocio</h4>
                  <p className={styles.diagramLabel}>Operación diaria</p>
                  <p className={styles.diagramDesc}>Cómo cobra, paga, firma, guarda recibos</p>
                </div>
              </div>

              <div className={styles.diagramNote}>
                <p className={styles.highlightText}>La protección se gana con buenos hábitos al manejar su negocio.</p>

              </div>
            </div>
            <p><strong>La operación del negocio</strong> es lo que mantiene viva la protección de la estructura legal.</p>

          </section>

          {/* Sección 5 */}
          <section id="seccion-5" data-section="seccion-5" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>05 </span> El velo corporativo explicado como una pared</h2>
            </div>

            <div className={styles.metaphorDiagram}>
              <p className={styles.metaphorIntro}>Imagine una pared invisible entre:</p>
              
              <div className={styles.wallDiagram}>
                <div className={`${styles.wallSide} ${styles.wallSideBusiness}`}>
                  <h4>Los problemas del negocio</h4>
                  <ul>
                  <li>Deudas comerciales</li>

                  <li>Responsabilidades</li>

                    <li>Demandas</li>
                  </ul>
                </div>

                <div className={styles.wall}>
                  <div className={styles.wallLabel}>VELO CORPORATIVO</div>
                  <div className={styles.bricks}>
                    <div className={styles.brick}></div>
                    <div className={styles.brick}></div>
                    <div className={styles.brick}></div>
                    <div className={styles.brick}></div>
                    <div className={styles.brick}></div>
                    <div className={styles.brick}></div>
                  </div>
                </div>

                <div className={`${styles.wallSide} ${styles.wallSidePersonal}`}>
                  <h4>Sus cosas personales</h4>
                  <ul>
                    <li>Casa</li>
                    <li>Carro</li>
                    <li>Ahorros</li>
                  </ul>
                </div>
              </div>

              <div className={styles.metaphorExplanation}>
                <div className={`${styles.explanationPoint} ${styles.explanationPointGood}`}>
                  <span className={styles.pointIcon}>✓</span>
                  <p><strong>Mientras esa pared esté firme,</strong> los problemas del negocio no pasan a su vida personal.</p>
                </div>

                <div className={`${styles.explanationPoint} ${styles.explanationPointBad}`}>
                  <span className={styles.pointIcon}>✕</span>
                  <p><strong>Pero si usted trata su negocio como si fuera su billetera personal…</strong> la pared se cae.</p>
                </div>

                <div className={styles.warningInline}>
                  Y cuando la pared se cae, la LLC deja de protegerlo.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 6 */}
          <section id="seccion-6" data-section="seccion-6" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>06 </span> Las 4 cosas que rompen la protección</h2>
            </div>

            <p className={styles.sectionIntro}>Estas son las 4 formas más comunes de romper la protección de una LLC sin saberlo:</p>

            <div className={`${styles.errorsGrid} ${styles.errorsGridSix}`}>
              <div className={styles.errorCard}>
                <div className={styles.errorNumber}>1</div>
                
                <h3 className={styles.errorTitle}>Mezclar cuentas</h3>
                <div className={styles.errorContent}>
                  <p>Usar la cuenta del negocio para gastos personales o pagar gastos del negocio con su cuenta personal.</p>
                </div>
              </div>

              <div className={styles.errorCard}>
                <div className={styles.errorNumber}>2</div>
                <h3 className={styles.errorTitle}>Firmar contratos a título personal</h3>
                <div className={styles.errorContent}>
                  <div className={styles.comparisonMini}>
                    <div className={`${styles.comparisonItem} ${styles.comparisonItemWrong}`}>
                      <span className={styles.comparisonIcon}>✕</span>
                      <span>Juan Pérez</span>
                    </div>
                    <div className={`${styles.comparisonItem} ${styles.comparisonItemRight}`}>
                      <span className={styles.comparisonIcon}>✓</span>
                      <span>Juan Pérez, Dueño de Juan Painting Services LLC</span>
                    </div>
                  </div>
                  <p className={styles.errorNote}>Cuando firma mal, el contrato deja de proteger a la LLC.</p>
                </div>
              </div>

              <div className={styles.errorCard}>
                <div className={styles.errorNumber}>3</div>
                <h3 className={styles.errorTitle}>Cobrar y pagar sin documentar 💸</h3>
                <div className={styles.errorContent}>
                  <ul className={styles.errorList}>
                    <li>Cobrar por Zelle personal</li>
                    <li>Aceptar cash sin recibos</li>
                    <li>No usar invoices</li>
                    <li>No dejar rastro de los pagos</li>
                  </ul>
                  <p className={styles.errorNote}>Eso debilita la estructura legal.</p>
                </div>
              </div>

              <div className={`${styles.errorCard} ${styles.errorCardWide}`}>
                <div className={styles.errorNumber}>4</div>
                <h3 className={styles.errorTitle}>No separar activos ni procesos del negocio</h3>

                <div className={styles.errorContent}>
                  <p>
                    Este error pasa así:
                  </p>

                  <div className={styles.assetProcessGrid}>
                    <div className={styles.assetProcessCol}>
                      <p><strong>Activos (deben estar a nombre y pagados por la LLC):</strong></p>
                      <ul className={styles.errorList}>
                        <li>El carro, truck o van está a su nombre personal, no a nombre de la LLC = error</li>
                        <li>Las herramientas se compran con su tarjeta personal = error</li>
                        <li>El equipo del negocio no tiene ningún registro = error</li>
                        <li>No existe una cuenta bancaria exclusiva del negocio = error</li>
                      </ul>
                      <p className={styles.errorNote}>
                        En papel dice "LLC", pero en la práctica todo sigue siendo personal.
                      </p>
                    </div>

                    <div className={styles.assetProcessCol}>
                      <p><strong>Procesos (para que el negocio tenga orden legal y contable):</strong></p>
                      <ul className={styles.errorList}>
                        <li>Se cobra, pero no se entrega recibo ni se guarda copia</li>
                        <li>Se paga a ayudantes sin dejar notas de los pagos</li>
                        <li>No hay un proceso claro para cotizar o facturar</li>
                      </ul>
                      <p className={styles.errorNote}>
                        Cuando no hay orden, para un juez el negocio y la persona son lo mismo.
                      </p>
                    </div>
                  </div>

                  <p>
                    Y si no hay separación clara, <strong>la protección de la LLC se debilita</strong>.
                  </p>
                </div>
              </div>

            </div>

            <div className={styles.reassuranceInline}>
              <p><strong>No es ser irresponsable.</strong> Simplemente nadie nos enseña a hacer estas cosas.</p>
            </div>
          </section>

          {/* Sección 7 */}
          <section id="seccion-7" data-section="seccion-7" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>07 </span> El orden correcto para que la LLC sí funcione</h2>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>1</div>
                <div className={styles.timelineContent}>
                  <h4>Crear la LLC</h4>
                  <p>Establezca la estructura legal</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>2</div>
                <div className={styles.timelineContent}>
                  <h4>Sacar el EIN</h4>
                  <p>Número de identificación fiscal del negocio</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>3</div>
                <div className={styles.timelineContent}>
                  <h4>Abrir cuenta bancaria del negocio</h4>
                  <p>Separación clara desde el inicio</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>4</div>
                <div className={styles.timelineContent}>
                  <h4>Cobrar TODO en la cuenta del negocio</h4>
                  <p>Sin excepciones, sin mezclas</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>5</div>
                <div className={styles.timelineContent}>
                  <h4>Pagar gastos del negocio desde esa cuenta</h4>
                  <p>Mantener todo documentado</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineMarker}>6</div>
                <div className={styles.timelineContent}>
                  <h4>Pagarse usted mismo con transferencias documentadas</h4>
                  <p>Distribution o salary, siempre con registro</p>
                </div>
              </div>
            </div>

            <div className={styles.warningBox}>
              <div className={styles.warningBadge}>IMPORTANTE</div>
              <p className={styles.warningText}>Si rompe este orden, el velo corporativo de su LLC deja de funcionar.</p>
            </div>
          </section>

          {/* Sección 8 */}
          <section id="seccion-8" data-section="seccion-8" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>08 </span> Si ya cometió algún error, no todo está perdido</h2>
            </div>

            <div className={styles.reassuranceBox}>
              <div className={styles.reassuranceIcon}>💡</div>
              <div className={styles.reassuranceContent}>
                <h3>Si ya:</h3>
                <ul className={styles.reassuranceList}>
                  <li>mezcló cuentas</li>
                  <li>cobró mal</li>
                  <li>firmó incorrectamente</li>
                </ul>
                <p className={styles.reassuranceMain}>No está todo perdido.</p>
                <div className={styles.reassuranceAction}>
                  <h4>Lo importante es esto:</h4>
                  <p className={styles.highlightText}>Empiece a hacerlo bien desde hoy.</p>
                  <p>Separar ahora siempre es mejor que seguir mal por miedo.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 9 */}
          <section id="seccion-9" data-section="seccion-9" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>09 </span> ¿Qué debe tener claro después de hoy?</h2>
            </div>

            <div className={`${styles.quoteBlock} ${styles.quoteBlockPrimary}`}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>La LLC no protege por sí sola. Usted protege la LLC con buenos habitos al manejar su negocio.</p>
            </div>

            <div className={styles.checklistBox}>
              <h4>Por ejemplo:</h4>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <p>Separar cuentas y activos</p>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <p>Cobrar y pagar con documentación</p>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <p>Tener procesos claros en su negocio</p>
              </div>
              <div className={styles.checklistItem}>
                <span className={styles.checkIcon}>✓</span>
                <p>Firmar contratos correctamente</p>
              </div>

            </div>

            <p className={`${styles.sectionClose} ${styles.sectionCloseHighlight}`}>Eso es lo que mantiene viva la protección.</p>
          </section>

          {/* Sección 10 */}
          <section id="seccion-10" data-section="seccion-10" className={styles.section}>
            <div className={styles.sectionHeader}>
              
              <h2 className={styles.sectionTitle}><span className={styles.sectionNumber}>10 </span> Siguientes pasos recomendados</h2>
            </div>

            <p className={styles.sectionIntro}>Ahora que ya entiende qué es una LLC y cómo protegerla, el siguiente paso es:</p>

            <div className={styles.actionCardsGrid}>
              <div className={`${styles.actionCard} ${styles.actionCardPrimary}`}>
                <div className={styles.actionIcon}>📄</div>
                <h3>Crear una LLC facilmente</h3>
                <p>Aqui le enseñamos a crear una LLC usted mismo sin complicaciones</p>
                <div className={styles.actionBadge}>Comenzar ahora</div>
              </div>

             

              <div className={`${styles.actionCard} ${styles.actionCardSecondary}`}>
                <div className={styles.actionIcon}>🏦</div>
                <h3>Abrir la cuenta bancaria del negocio</h3>
                <p>En ese proceso hablaremos del EIN y cómo usarlo correctamente.</p>
                <div className={styles.actionBadge}>Siguiente paso</div>
              </div>

              <div className={`${styles.actionCard} ${styles.actionCardSecondary}`}>
                <h3>✅ Revisar su estructura actual</h3>
                <p>Verifique si está haciendo las cosas correctamente.</p>
                <div className={styles.actionLink}>Agendar revisión →</div>
              </div>
            </div>
          </section>

          {/* Cierre */}
          <section className={styles.closingSection}>
            <div className={styles.closingBox}>
              <h3>Este blog no es para asustarlo.</h3>
              <p>Es para que no le vendan medias verdades.</p>
              <p className={styles.closingHighlight}>Cuando uno entiende esto, hacer las cosas bien se vuelve mucho más sencillo.</p>
            </div>
          </section>

         
        </main>
      </div>
    </div>
  );
};

export default LLCBlogPost;
