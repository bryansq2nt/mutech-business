# Contexto del proyecto: Mutech Business

Documento para dar contexto a una IA sobre la intención del proyecto, lo que se ha hecho y por qué.

---

## 1. Intención del proyecto

**Mutech Business** es un sitio web de negocio en español para **Bryan Murgas**. La idea es:

- **Ofrecer un servicio concreto**: ayudar a pequeños negocios (especialmente en EE.UU.) a tener **presencia en línea desde el inicio**: sitio web, aparecer en Google, sistema de contacto/agenda.
- **Ser claro y honesto**: explicar qué incluye y qué no (no es “hacer magia”, no es atender clientes por ellos). El copy va dirigido a alguien que quiere “empezar bien” y evitar la etapa de “no sé por dónde empezar”.
- **Generar leads**: el objetivo de conversión es que el visitante complete el formulario **Aplicar** para que Bryan pueda responder y ofrecer el paquete “Kickstarter” (sitio + Google + contacto en ~2 semanas).
- **Dar valor y autoridad**: además del servicio, el sitio incluye contenido educativo: **“Lo esencial para tu negocio”** (guías sobre LLC, EIN, impuestos, contratos, etc.) y un **Blog** (artículos desde Notion). Esto posiciona a Mutech como recurso útil y serio.

**Frase de posicionamiento** (en metadata): *“Claridad para decidir. Estructura para empezar bien.”*

---

## 2. Stack técnico

- **Framework**: Next.js 14 (App Router), React 18, TypeScript.
- **Estilos**: CSS Modules (`.module.css`) en cada página/componente. **No se usa Tailwind**.
- **Tipografía**: IBM Plex Sans (Next.js `next/font/google`), variable `--font-ibm-plex-sans`.
- **Tema visual**: fondo oscuro (slate: `#0f172a`, `#1e293b`), texto claro (`#E5E7EB`), acentos en grises/teal según sección. Gradientes lineales en `main`.
- **Analytics**: Vercel Analytics.
- **Idioma**: todo el contenido y la UI están en **español**.

---

## 3. Estructura de rutas y qué hace cada parte

| Ruta | Qué es | Por qué existe |
|------|--------|----------------|
| `/` | Home | Presentar el servicio, “qué hacemos”, “para quién es”, mensaje honesto (clientes no llegan solos si no contestas/atiendes bien), filtros y CTA principal a “Aplicar”. |
| `/kickstarter-package` | Página del paquete | Explicar el paquete “De invisible a encontrable en Google en 2 semanas”: alcance, límites, entregables, testimonial de Bryan, CTA a “Aplicar”. |
| `/apply` | Formulario de aplicación | Wizard de varias preguntas (tipo de negocio, qué vende, zona, oferta, si tiene clientes, cliente ideal, metas, datos de contacto). Envía los datos por email vía API. Es el **conversión principal**. |
| `/lo-esencial-para-tu-negocio` | Hub de guías | Listado de guías (LLC, EIN, seguro, licencias, impuestos, contratos, cotizar, comunicación, clientes, reputación, Google Business, etc.). Solo “LLC y velo corporativo” está enlazado y con contenido; el resto están en comentarios o por desarrollar. |
| `/lo-esencial-para-tu-negocio/[slug]` | Guía individual | Páginas largas de contenido (ej. `llc-velo-corporativo`). Contenido en el propio `page.tsx` (no CMS). Sirven para SEO y para demostrar expertise. |
| `/blog` | Listado del blog | Lista de entradas publicadas. Los datos vienen de **Notion** (base de datos como CMS). |
| `/blog/[slug]` | Post individual | Contenido del post: título, excerpt, fecha, imagen de portada, cuerpo en **Markdown** (convertido desde Notion). |
| `/api/apply` | API del formulario | Recibe el JSON del formulario, valida (nombre, teléfono obligatorios), honeypot anti-bot, envía email con **Nodemailer** (SMTP en env). |
| `/api/blog/test` | API de prueba | Comprueba conexión a Notion y que el ID de la base de datos del blog sea válido (útil para debugging). |

---

## 4. Blog y Notion (CMS)

- **CMS**: Notion. Una base de datos contiene las entradas del blog (título, slug, excerpt, fecha, portada, etc.).
- **Flujo**:  
  - En el listado (`/blog`): se consultan solo metadatos (título, slug, excerpt, fecha, cover) con `queryPublishedPosts()` (desde `lib/notion/queries.ts`).  
  - En el post (`/blog/[slug]`): se obtiene la página por slug, se traen los bloques de Notion, se convierten a **Markdown** con `notion-to-md`, y se renderiza con `react-markdown` + `rehype-sanitize` + `remark-gfm`.
- **Tipos**: `BlogPost` (id, pageId, title, slug, excerpt, publishedAt, coverImage?) y `BlogPostWithContent = BlogPost & { markdown }`. El `pageId` es el ID real de la página en Notion (para fetchear bloques). El mapper en `lib/blog/mapper.ts` normaliza el ID de la DB (quita `?v=...`) y mapea `coverImage` desde `page.cover` o propiedad “CoverImage”.
- **Caché**: listado de posts con `unstable_cache` (revalidate 300 s). Las imágenes de Notion se sirven con `unoptimized` donde haga falta (config en `next.config.js` con `images.remotePatterns` para Notion y S3).
- **Objetivo**: poder escribir y publicar desde Notion sin tocar código; el sitio solo consume la API y muestra el contenido de forma segura (sanitizado).

---

## 5. Navegación y layout

- **Header**: componente fijo `Navigation` (`src/components/Navigation.tsx`). En desktop: logo “Mutech Business”, enlaces (Inicio, Paquete Starter, Lo esencial, Blog, Aplicar). En móvil: menú hamburguesa que abre un panel con los mismos enlaces.
- **Comportamiento**: `position: fixed`, `z-index: 1000`. Clase `scrolled` al hacer scroll para cambiar estilo si se desea. Al abrir el menú móvil se bloquea el scroll del `body`.
- **Layout global**: `layout.tsx` solo aplica fuente IBM Plex Sans, metadata (title, description), `globals.css` y Vercel Analytics. No hay un “layout con sidebar”; cada página incluye `<Navigation />` y su propio `<main>` con estilos inline o clases de módulo.

---

## 6. Formulario “Aplicar” y email

- **Formulario**: cliente (`'use client'`), wizard de 7 preguntas (tipo negocio, qué vende, zona, qué ofrece, si tiene clientes, cliente ideal, metas, datos de contacto). Incluye campo honeypot (`company_website`) para bots.
- **Envío**: POST a `/api/apply` con el JSON del formulario. La API valida campos requeridos, comprueba honeypot, configura Nodemailer con variables de entorno (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`) y envía un email con el resumen de respuestas a Bryan.
- **Por qué**: captar leads cualificados y responder en 24–48 h según el copy del sitio.

---

## 7. Decisiones de diseño y UX ya tomadas

- **Sin Tailwind**: se usa solo CSS Modules y `globals.css` para mantener control total del diseño y evitar dependencias de utilidades.
- **Español en todo**: copy, placeholders, mensajes de error y metadata en español para el público objetivo.
- **Tono de Bryan**: mensaje directo, honesto (“la presencia en línea es una herramienta, no el negocio”), testimonial del fundador en la página del paquete.
- **Blog en post individual**: en móvil/pantallas pequeñas el contenido del post no debe quedar tapado por el header fijo; para eso se añadió `padding-top` en el `main` del post (`blog/[slug]/page.module.css`) con breakpoints (ej. 5rem desktop, 5.5rem ≤768px, 6rem ≤480px) para evitar overlap con el nav.

---

## 8. Archivos clave para una IA

- **Rutas y páginas**: `src/app/page.tsx`, `src/app/apply/page.tsx`, `src/app/kickstarter-package/page.tsx`, `src/app/lo-esencial-para-tu-negocio/page.tsx`, `src/app/lo-esencial-para-tu-negocio/[slug]/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`.
- **API**: `src/app/api/apply/route.ts`, `src/app/api/blog/test/route.ts`.
- **Notion y blog**: `src/lib/notion/client.ts`, `src/lib/notion/queries.ts`, `src/lib/blog/types.ts`, `src/lib/blog/mapper.ts`, `src/lib/blog/content.ts`.
- **Componentes**: `src/components/Navigation.tsx`, `src/components/blog/MarkdownContent.tsx` (render del Markdown del blog), `src/components/notion/NotionRenderer.tsx` si se usa en algún flujo.
- **Estilos globales**: `src/app/globals.css`. Colores/tipografía también en `src/constants/colors.ts` y `src/typography.ts` si se usan.
- **Config**: `next.config.js` (dominios de imágenes para Notion/S3).

---

## 9. Resumen en una frase

**Mutech Business** es un sitio en Next.js (español, tema oscuro, CSS Modules, sin Tailwind) que ofrece un paquete de “presencia en línea” para pequeños negocios, capta leads con un formulario “Aplicar” (email vía Nodemailer), y apoya con contenido educativo (guías “Lo esencial” y blog desde Notion como CMS) para dar claridad y estructura a quien quiere empezar bien.
