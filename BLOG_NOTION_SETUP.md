# Blog Setup con Notion CMS

Este proyecto usa Notion como Headless CMS para el blog. Los artículos se publican automáticamente desde una base de datos de Notion.

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Notion API Configuration
# Get your token from: https://www.notion.so/my-integrations
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Notion Database ID
# IMPORTANTE: Use el ID ANTES de ?v= en la URL de Notion
# Ejemplo: https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=...
# Database ID: 2dd18e72616e80f8b04dfb7c29766c52 (sin guiones, o con guiones - ambos funcionan)
NOTION_DATABASE_ID=2dd18e72616e80f8b04dfb7c29766c52

# Site URL (optional but recommended for SEO)
# Your production domain, e.g., https://mutechbusiness.com
SITE_URL=https://yourdomain.com
```

## Configuración en Notion

### 1. Crear una Integración de Notion

1. Ve a [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Haz clic en "+ New integration"
3. Dale un nombre (ej: "Mutech Business Blog")
4. Selecciona el workspace donde está tu base de datos
5. Haz clic en "Submit"
6. Copia el **Internal Integration Token** (empieza con `secret_`)
   - Este es tu `NOTION_TOKEN`

### 2. Crear la Base de Datos

1. Crea una nueva página en Notion
2. Escribe `/database` y selecciona "Table - Inline" o "Table - Full page"
3. Configura las siguientes propiedades (columnas):

#### Propiedades Requeridas:

| Nombre de Propiedad | Tipo                 | Descripción                          |
| ------------------- | -------------------- | ------------------------------------ |
| **Title**           | `Title`              | Título del artículo                  |
| **Slug**            | `Text` o `Rich Text` | URL única (ej: "mi-primer-articulo") |
| **Excerpt**         | `Rich Text`          | Resumen corto del artículo           |
| **Status**          | `Select`             | Opciones: `Draft`, `Published`       |
| **PublishedAt**     | `Date`               | Fecha de publicación                 |

#### Propiedades Opcionales:

| Nombre de Propiedad | Tipo            | Descripción                          |
| ------------------- | --------------- | ------------------------------------ |
| **CoverImage**      | `Files & media` | Imagen de portada (si se implementa) |

### 3. Conectar la Integración a la Base de Datos

1. Abre tu base de datos en Notion
2. Haz clic en "..." (tres puntos) en la esquina superior derecha
3. Selecciona "Connections" → "Add connections"
4. Busca y selecciona tu integración (ej: "Mutech Business Blog")
5. Confirma la conexión

### 4. Obtener el Database ID

**⚠️ IMPORTANTE: Cómo obtener el Database ID correcto**

1. Abre tu base de datos en Notion
2. Copia la URL completa de la página (botón "Copy link" o desde la barra de direcciones)
3. La URL tiene este formato:

   ```
   https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=2dd18e72616e809395d9000c25304905&source=copy_link
   ```

4. **Database ID = parte ANTES de `?v=`**

   - En el ejemplo: `2dd18e72616e80f8b04dfb7c29766c52`
   - Este es el ID que necesitas para `NOTION_DATABASE_ID`

5. **NO uses la parte después de `?v=`**
   - `2dd18e72616e809395d9000c25304905` es el **view_id** (solo para la vista, NO para la API)

**Ejemplo práctico:**

- URL: `https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=2dd18e72616e809395d9000c25304905`
- ✅ Database ID correcto: `2dd18e72616e80f8b04dfb7c29766c52`
- ❌ View ID (NO usar): `2dd18e72616e809395d9000c25304905`

**Nota:** El sistema normaliza automáticamente el ID (remueve guiones si los tiene), pero debe ser el ID correcto antes de `?v=`.

## Configuración en Vercel

### Variables de Entorno

Agrega estas variables en tu proyecto de Vercel:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega:

```
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
SITE_URL=https://tudominio.com
```

4. Haz clic en "Save"
5. **Redeploy** el proyecto para que las variables surtan efecto

## Cómo Funciona

### Publicación de Artículos

1. Crea una nueva página en tu base de datos de Notion
2. Completa las propiedades requeridas:
   - **Title**: Título del artículo
   - **Slug**: URL única (solo letras, números y guiones)
   - **Excerpt**: Resumen breve
   - **Status**: Selecciona "Published"
   - **PublishedAt**: Fecha de publicación
3. Escribe el contenido del artículo en el cuerpo de la página
4. El artículo aparecerá automáticamente en `/blog` en 5 minutos (ISR)

### ISR (Incremental Static Regeneration)

- Los artículos se actualizan automáticamente cada **5 minutos** (300 segundos)
- No necesitas redeployar manualmente
- Los cambios en Notion se reflejan automáticamente

### Filtrado

- Solo se muestran artículos con **Status = "Published"**
- Los artículos con **Status = "Draft"** no aparecen en el blog

## Estructura de Rutas

- `/blog` - Listado de todos los artículos publicados
- `/blog/[slug]` - Página individual del artículo

## SEO

Cada artículo incluye:

- Meta title y description
- Canonical URL
- Open Graph tags básicos
- Estructura semántica HTML

## Solución de Problemas

### El blog no muestra artículos

1. Verifica que `NOTION_TOKEN` y `NOTION_DATABASE_ID` estén configurados
2. Verifica que la integración esté conectada a la base de datos
3. Verifica que los artículos tengan `Status = "Published"`
4. Revisa los logs de Vercel para errores

### Error 404 en artículos

1. Verifica que el `Slug` esté correctamente escrito (sin espacios, solo letras, números y guiones)
2. Verifica que el artículo tenga `Status = "Published"`
3. Espera 5 minutos para que ISR actualice las rutas

### El contenido no se renderiza correctamente

- El contenido se convierte de Notion a Markdown
- Se sanitiza automáticamente para seguridad
- Soporta: headings, párrafos, listas, links, código, blockquotes

## Notas Importantes

- **Slug debe ser único**: No puede haber dos artículos con el mismo slug
- **Slug formato**: Solo letras minúsculas, números y guiones (ej: `mi-primer-articulo`)
- **Contenido**: Escribe el contenido directamente en el cuerpo de la página de Notion
- **Seguridad**: Todo el HTML se sanitiza automáticamente antes de renderizar
