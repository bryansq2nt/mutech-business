import Link from 'next/link'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Comunicación y atención al cliente en negocios de servicios | Mutech Business",
  description:
    "Guía esencial para comunicarse con clientes de forma clara y profesional, evitar conflictos y generar confianza real.",
  keywords:
    "atencion al cliente negocios servicios, comunicacion con clientes, servicio al cliente hispanos, manejar clientes",
}

export default function ComunicacionAtencionCliente() {
  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.guideHero}>
          <div className={styles.breadcrumb}>
            <Link href="/lo-esencial-para-tu-negocio">Lo esencial</Link> &gt; Comunicación y atención al cliente
          </div>
          <div className={styles.preHeadline}>LO ESENCIAL</div>
          <h1 className={styles.title}>
            Comunicación y atención al cliente: cómo trabajar sin conflictos
          </h1>
          <p className={styles.subtitle}>
            La mayoría de los problemas no son por el trabajo. Son por lo que no se dijo a tiempo.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>⏱ 9 min de lectura</span>
            <span className={styles.badge}>🤝 Relaciones y reputación</span>
          </div>
        </section>

        {/* Content */}
        <div className={styles.content}>
          {/* Section 1: The Real Problem */}
          <div className={styles.whyBox}>
            <p>
              Muchos emprendedores hacen buen trabajo. Hacen el servicio bien. Cumplen con lo acordado.
            </p>
            <p>
              <strong>Pero comunican poco, tarde o mal.</strong>
            </p>
            <p>
              El cliente se queda con dudas. No sabe si llegó a tiempo. No sabe si el trabajo está completo. 
              No sabe cuándo va a pagar. No sabe qué hacer después.
            </p>
            <p>
              <strong>Las dudas se convierten en desconfianza.</strong> Y la desconfianza se convierte en 
              problemas, malas reviews, o simplemente clientes que no recomiendan.
            </p>
            <p>
              <strong>Frase clave:</strong> "El cliente no ve su esfuerzo. Solo ve lo que usted comunica."
            </p>
            <p>
              Puede hacer el mejor trabajo del mundo, pero si no lo comunica bien, el cliente no lo sabe. 
              Y si el cliente no lo sabe, no puede valorarlo.
            </p>
          </div>

          {/* Section 2: Communication ≠ Talking A Lot */}
          <h2>Comunicación ≠ hablar mucho</h2>
          <p>
            <strong>Buena comunicación no es hablar más.</strong> Es decir lo correcto, a tiempo.
          </p>
          <p>
            <strong>Buena comunicación es:</strong>
          </p>
          <ul>
            <li>
              <strong>Clara:</strong> El cliente entiende exactamente qué quiere decir
            </li>
            <li>
              <strong>Oportuna:</strong> Se dice cuando se necesita, no después
            </li>
            <li>
              <strong>Coherente:</strong> Lo que dice hoy coincide con lo que dijo ayer
            </li>
            <li>
              <strong>Predecible:</strong> El cliente sabe qué esperar de usted
            </li>
          </ul>
          <p>
            <strong>Buena comunicación NO es:</strong>
          </p>
          <ul>
            <li>Justificarse demasiado</li>
            <li>Explicarse de más (sin necesidad)</li>
            <li>Responder con emoción cuando hay problema</li>
            <li>Hablar mucho sin decir nada</li>
          </ul>
          <p>
            <strong>Frase clave:</strong> "Comunicar bien no es decir más. Es decir lo correcto, a tiempo."
          </p>
          <p>
            Un mensaje corto y claro vale más que un mensaje largo y confuso.
          </p>

          {/* Section 3: The 5 Moments */}
          <h2>Los 5 momentos donde se pierde (o gana) al cliente</h2>
          <p>
            Hay momentos críticos donde su comunicación define todo. Estos son:
          </p>

          <div className={styles.checklistItem}>
            <h3>1. Primer contacto</h3>
            <p>
              <strong>Momentos clave:</strong>
            </p>
            <ul>
              <li>
                <strong>Tiempo de respuesta:</strong> Responda rápido (mismo día, idealmente en 2-4 horas)
              </li>
              <li>
                <strong>Tono:</strong> Profesional pero humano. No robot, no demasiado casual
              </li>
              <li>
                <strong>Claridad:</strong> Responda la pregunta que le hicieron, no otra cosa
              </li>
            </ul>
            <p>
              <strong>Ejemplo bueno:</strong> "Gracias por contactarme. Sí, tengo disponibilidad esta semana. 
              ¿Qué día le funciona mejor para que vea el trabajo?"
            </p>
            <p>
              <strong>Ejemplo malo:</strong> "Hola" (y nada más) o responder 3 días después.
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>2. Antes de empezar el trabajo</h3>
            <p>
              <strong>Momentos clave:</strong>
            </p>
            <ul>
              <li>
                <strong>Confirmación de fecha y hora:</strong> Confirme por escrito 24-48 horas antes
              </li>
              <li>
                <strong>Qué se va a hacer:</strong> Recuerde brevemente el scope acordado
              </li>
              <li>
                <strong>Qué NO se va a hacer:</strong> Si hay límites, recuérdelos
              </li>
            </ul>
            <p>
              <strong>Ejemplo:</strong> "Confirmando: mañana a las 9am para limpieza completa de casa. 
              Incluye baños, cocina, pisos y polvo. No incluye garaje ni ventanas exteriores. ¿Correcto?"
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>3. Durante el trabajo</h3>
            <p>
              <strong>Momentos clave:</strong>
            </p>
            <ul>
              <li>
                <strong>Avisar si algo cambia:</strong> Si encuentra un problema o el trabajo tomará más tiempo, avise
              </li>
              <li>
                <strong>No desaparecer:</strong> Si el cliente pregunta algo, responda
              </li>
              <li>
                <strong>No improvisar sin avisar:</strong> Si va a hacer algo diferente, pregunte primero
              </li>
            </ul>
            <p>
              <strong>Ejemplo:</strong> "Encontré un problema con [X]. Necesito [Y] adicional. 
              ¿Quiere que lo haga? Sería $Z adicional."
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>4. Al terminar</h3>
            <p>
              <strong>Momentos clave:</strong>
            </p>
            <ul>
              <li>
                <strong>Explicar qué se hizo:</strong> Resuma brevemente lo que completó
              </li>
              <li>
                <strong>Confirmar que todo quedó claro:</strong> "¿Tiene alguna pregunta?"
              </li>
              <li>
                <strong>Próximo paso:</strong> "Le envío el invoice hoy. El pago vence el [fecha]."
              </li>
            </ul>
            <p>
              <strong>Ejemplo:</strong> "Terminé la limpieza completa. Todo quedó listo. 
              Le envío el invoice por email. ¿Alguna pregunta?"
            </p>
          </div>

          <div className={styles.checklistItem}>
            <h3>5. Después del trabajo</h3>
            <p>
              <strong>Momentos clave:</strong>
            </p>
            <ul>
              <li>
                <strong>Follow-up corto:</strong> Un mensaje simple 1-2 días después: "¿Todo quedó bien?"
              </li>
              <li>
                <strong>Review request:</strong> Si el cliente está contento, pida review (ver guía de Google Business)
              </li>
              <li>
                <strong>Mantener relación:</strong> No desaparezca. Si el cliente necesita algo más, esté disponible
              </li>
            </ul>
            <p>
              <strong>Frase clave:</strong> "El cliente tranquilo es el cliente que recomienda."
            </p>
          </div>

          {/* Section 4: Clear Expectations */}
          <h2>Expectativas claras = menos problemas</h2>
          <p>
            <strong>La mayoría de conflictos nacen por expectativas no alineadas.</strong>
          </p>
          <p>
            El cliente asume una cosa. Usted supone otra. Y cuando no coinciden, hay problema.
          </p>
          <p>
            <strong>Ejemplos comunes:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Horarios:</strong><br />
              Cliente asume: "Llega a las 9am exactas"<br />
              Usted supone: "Llego entre 9-10am"<br />
              <strong>Solución:</strong> "Llego entre 9-9:30am. Le aviso cuando salgo."
            </p>
            <p>
              <strong>Alcance:</strong><br />
              Cliente asume: "Limpieza incluye organizar closets"<br />
              Usted supone: "Solo limpieza, no organización"<br />
              <strong>Solución:</strong> "La limpieza incluye [X, Y, Z]. No incluye organización de closets."
            </p>
            <p>
              <strong>Limpieza:</strong><br />
              Cliente asume: "Queda perfecto, sin un polvo"<br />
              Usted supone: "Limpieza profesional, no perfecta"<br />
              <strong>Solución:</strong> "Limpieza profesional estándar. Si necesita algo más profundo, lo cotizo."
            </p>
            <p>
              <strong>Pagos:</strong><br />
              Cliente asume: "Pago cuando pueda"<br />
              Usted supone: "Pago al terminar"<br />
              <strong>Solución:</strong> "El pago vence el [fecha]. ¿Le funciona?"
            </p>
            <p>
              <strong>Cambios:</strong><br />
              Cliente asume: "Puedo pedir cambios sin costo"<br />
              Usted supone: "Cambios son adicionales"<br />
              <strong>Solución:</strong> "Cualquier cambio al scope original se cotiza por separado."
            </p>
          </div>
          <p>
            <strong>Frase fuerte:</strong> "Si usted no define expectativas, el cliente las inventa."
          </p>
          <p>
            Y cuando el cliente inventa expectativas, generalmente son más altas de lo que usted puede cumplir. 
            Eso genera problemas.
          </p>

          {/* Section 5: How to Say NO */}
          <h2>Cómo decir NO sin perder al cliente</h2>
          <p>
            Muchos emprendedores tienen miedo a decir "no" porque piensan que van a perder al cliente.
          </p>
          <p>
            <strong>La verdad:</strong> Decir "no" de forma profesional no pierde clientes. Lo que pierde clientes 
            es decir "sí" a todo y luego no cumplir, o cumplir resentido.
          </p>
          <p>
            <strong>Frases modelo (muy importante):</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>Si piden algo fuera del scope:</strong><br />
              "Eso no está incluido en el servicio acordado, pero con gusto lo hacemos. 
              Sería un costo adicional de $X. ¿Quiere que se lo agregue?"
            </p>
            <p>
              <strong>Si insisten en algo gratis:</strong><br />
              "Para mantener el precio acordado, eso no forma parte del trabajo. 
              Si lo quiere, le preparo una cotización del cambio."
            </p>
            <p>
              <strong>Si piden algo que no hace:</strong><br />
              "Eso no es parte de mi servicio, pero puedo recomendarle a alguien que sí lo hace."
            </p>
            <p>
              <strong>Si piden cambios de último minuto:</strong><br />
              "Prefiero aclararlo antes de continuar. Ese cambio ajusta el precio. 
              ¿Quiere que le envíe la cotización del cambio?"
            </p>
          </div>
          <p>
            <strong>Decir NO no es ser difícil.</strong> Es ser profesional. Y los buenos clientes lo respetan.
          </p>
          <p>
            Los clientes que se molestan porque usted dice "no" probablemente no son los clientes que quiere. 
            Los clientes serios prefieren trabajar con alguien que tiene límites claros.
          </p>

          {/* Section 6: Handling Problems */}
          <h2>Manejo de problemas y errores (cuando algo sale mal)</h2>
          <p>
            <strong>Todo negocio comete errores.</strong> Lo que importa no es si comete errores, 
            sino cómo los maneja.
          </p>
          <p>
            <strong>Pasos claros cuando algo sale mal:</strong>
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Reconocer el problema</strong><br />
              No se justifique. No se excuse. Simplemente reconozca: "Tiene razón, eso no quedó como debía."
            </p>
            <p>
              <strong>2. No discutir emociones</strong><br />
              Si el cliente está molesto, no discuta si tiene razón o no. Escuche. 
              El cliente tiene derecho a estar molesto.
            </p>
            <p>
              <strong>3. Proponer solución</strong><br />
              "Voy a arreglarlo. ¿Cuándo le funciona que vuelva?" o "Le devuelvo el dinero de esa parte."
            </p>
            <p>
              <strong>4. Documentar</strong><br />
              Si hay acuerdo, póngalo por escrito. "Como acordamos, voy a [X] el [fecha]."
            </p>
            <p>
              <strong>5. Cerrar el tema</strong><br />
              Una vez resuelto, no siga mencionándolo. Cierre el tema y siga adelante.
            </p>
          </div>
          <p>
            <strong>Frase clave:</strong> "Un problema bien manejado puede fortalecer la relación."
          </p>
          <p>
            Si maneja un problema bien, el cliente ve que usted es profesional y confiable. 
            Eso genera más confianza que si nunca hubiera habido problema.
          </p>

          {/* Section 7: Common Communication Errors */}
          <div className={styles.warningBox}>
            <span className={styles.warningBadge}>ATENCIÓN</span>
            <p className={styles.warningTitle}>
              Errores comunes de comunicación:
            </p>
            <ul className={styles.warningList}>
              <li>
                <strong>No responder mensajes</strong><br />
                Si el cliente le escribe y no responde, genera desconfianza. Responda siempre, 
                aunque sea para decir "Le respondo mañana con más detalle."
              </li>
              <li>
                <strong>Responder tarde</strong><br />
                Si tarda días en responder, el cliente asume que no le importa. 
                Responda en 24 horas máximo (idealmente el mismo día).
              </li>
              <li>
                <strong>Usar tono defensivo</strong><br />
                Si el cliente pregunta algo y usted se pone a la defensiva, genera conflicto. 
                Responda con calma y claridad.
              </li>
              <li>
                <strong>Discutir por WhatsApp</strong><br />
                Si hay un problema serio, no lo resuelva por mensaje. Llame o vea al cliente en persona. 
                Los mensajes se malinterpretan.
              </li>
              <li>
                <strong>Prometer cosas sin confirmarlas</strong><br />
                "Sí, puedo hacerlo" sin verificar primero puede generar problemas. 
                Confirme antes de prometer.
              </li>
              <li>
                <strong>No documentar acuerdos</strong><br />
                Si acuerda algo por teléfono, envíe un mensaje resumen: "Como acordamos por teléfono, 
                [resumen del acuerdo]."
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>
              <strong>Frase fuerte:</strong> "Un mensaje mal escrito cuesta más que un mal trabajo."
            </p>
          </div>

          {/* Section 8: Simple Communication System */}
          <h2>Sistema simple de comunicación (recomendado)</h2>
          <p>
            No necesita complicarse. Este sistema mínimo funciona:
          </p>
          <div className={styles.checklistItem}>
            <p>
              <strong>1. Un solo número / canal principal</strong><br />
              Use un número de teléfono para el negocio (no su personal). 
              O un email profesional. No mezcle canales.
            </p>
            <p>
              <strong>2. Confirmaciones escritas</strong><br />
              Todo acuerdo importante (fechas, precios, scope) debe estar por escrito. 
              Email o mensaje de texto es suficiente.
            </p>
            <p>
              <strong>3. Mensajes cortos y claros</strong><br />
              No escriba párrafos largos. Sea directo. "Confirmando: mañana 9am. ¿Correcto?"
            </p>
            <p>
              <strong>4. Respuestas dentro de horario definido</strong><br />
              Defina sus horarios de respuesta (ej: 8am-6pm, lunes a viernes). 
              No necesita responder a las 11pm.
            </p>
            <p>
              <strong>5. Follow-up al terminar</strong><br />
              Después de cada trabajo, un mensaje simple: "¿Todo quedó bien? Si necesita algo más, avíseme."
            </p>
          </div>
          <p>
            <strong>Aclaración importante:</strong> "No se trata de estar disponible siempre. 
            Se trata de ser claro."
          </p>
          <p>
            Puede tener horarios. Puede no responder fuera de horario. Pero cuando responda, 
            sea claro y profesional.
          </p>

          {/* Section 9: Communication Checklist */}
          <h2>Checklist de comunicación profesional</h2>
          <div className={styles.checklistItem}>
            <ul>
              <li>□ <strong>Respondo en tiempo razonable</strong> (mismo día o dentro de 24 horas)</li>
              <li>□ <strong>Confirmo citas por escrito</strong> (fecha, hora, scope)</li>
              <li>□ <strong>Explico cambios antes de hacerlos</strong> (no improviso sin avisar)</li>
              <li>□ <strong>Dejo todo claro al finalizar</strong> (qué se hizo, qué sigue, cuándo paga)</li>
              <li>□ <strong>Hago follow-up</strong> (mensaje simple después del trabajo)</li>
              <li>□ <strong>Pido review correctamente</strong> (solo si el cliente está contento)</li>
              <li>□ <strong>Mantengo tono profesional</strong> (claro, respetuoso, sin emoción)</li>
              <li>□ <strong>Documento acuerdos importantes</strong> (por escrito, aunque sea mensaje)</li>
            </ul>
            <p>
              Si marcó todas las casillas: tiene comunicación profesional.
            </p>
          </div>

          {/* Section 10: Download Box */}
          <div className={styles.downloadBox}>
            <h3>📥 Scripts de comunicación profesional</h3>
            <p>
              <strong>"Mensajes listos para confirmar citas, manejar cambios y pedir reviews."</strong>
            </p>
            <p>
              Plantilla con scripts listos para usar: confirmaciones, cambios de scope, follow-ups, 
              y manejo de problemas. En español, claro y profesional.
            </p>
            <button className={styles.ctaButton} disabled>
              Descargar scripts
            </button>
            <p className={styles.ctaSubtext} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
              (Próximamente)
            </p>
          </div>

          {/* Section 11: Final CTA */}
          <div className={styles.ctaBox}>
            <h3>¿Quiere clientes tranquilos y que lo recomienden?</h3>
            <p>
              Le ayudamos a estructurar su comunicación, presencia y procesos para que su negocio se vea 
              profesional desde el primer contacto hasta el follow-up.
            </p>
            <Link href="/apply" className={styles.ctaButton}>
              Ver si este paquete es para mí
            </Link>
            <p className={styles.ctaSubtext}>
              Menos conflictos. Más confianza.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className={styles.guideNav}>
            <Link href="/lo-esencial-para-tu-negocio/cotizar-correctamente" className={styles.navButton}>
              ← Anterior: Cotizar correctamente
            </Link>
            <Link href="/lo-esencial-para-tu-negocio" className={styles.navButton}>
              Volver a Lo esencial →
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

