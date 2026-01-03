# Cómo Probar la Conexión con Notion

## Método 1: Ruta de API de Prueba (Recomendado)

He creado una ruta de API que verifica la conexión con Notion. Puedes probarla de varias formas:

### Opción A: Desde el Navegador

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre en tu navegador:

   ```
   http://localhost:3000/api/blog/test
   ```

3. Deberías ver un JSON con el estado de la conexión:
   ```json
   {
     "timestamp": "2024-01-03T...",
     "envCheck": {
       "notionToken": true,
       "databaseId": true
     },
     "connectionTest": {
       "success": true
     },
     "databaseQuery": {
       "success": true,
       "postCount": 2
     },
     "samplePosts": [...]
   }
   ```

### Opción B: Desde la Terminal (curl)

```bash
curl http://localhost:3000/api/blog/test
```

**Importante:** Asegúrate de usar la ruta `/api/blog/test` (con `/api/` al inicio)

### Opción C: Desde PowerShell (Windows)

```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/blog/test | Select-Object -ExpandProperty Content
```

## Método 2: Probar Manualmente en el Navegador

1. Asegúrate de tener las variables de entorno configuradas en `.env.local`
2. Inicia el servidor: `npm run dev`
3. Visita `/blog` - Si la conexión funciona, verás la lista de posts (o un mensaje si no hay posts)
4. Si hay errores, revisa la consola del servidor (terminal donde corre `npm run dev`)

## Método 3: Script de Prueba (Node.js)

Crea un archivo temporal `test-notion.js` en la raíz:

```javascript
require("dotenv").config({ path: ".env.local" });
const { getNotionClient } = require("./src/lib/notion/client");
const { queryPublishedPosts } = require("./src/lib/notion/queries");

async function test() {
  try {
    console.log("🔍 Verificando variables de entorno...");
    console.log(
      "NOTION_TOKEN:",
      process.env.NOTION_TOKEN ? "✅ Configurado" : "❌ Faltante"
    );
    console.log(
      "NOTION_DATABASE_ID:",
      process.env.NOTION_DATABASE_ID ? "✅ Configurado" : "❌ Faltante"
    );

    console.log("\n🔌 Probando conexión con Notion...");
    const notion = getNotionClient();
    const db = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    console.log("✅ Conexión exitosa!");
    console.log("Base de datos:", db.title[0]?.plain_text || "Sin título");

    console.log("\n📝 Consultando posts publicados...");
    const posts = await queryPublishedPosts();
    console.log(`✅ Encontrados ${posts.length} posts publicados`);

    if (posts.length > 0) {
      console.log("\n📄 Primeros posts:");
      posts.slice(0, 3).forEach((post) => {
        console.log(`  - ${post.title} (${post.slug})`);
      });
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

test();
```

Luego ejecuta:

```bash
node test-notion.js
```

## Interpretación de Resultados

### ✅ Conexión Exitosa

Si ves:

- `connectionTest.success: true`
- `databaseQuery.success: true`
- `postCount` con un número (puede ser 0 si no hay posts publicados)

**Significa:** Todo está funcionando correctamente.

### ❌ Errores Comunes

#### 1. "Missing environment variables"

- **Problema:** Faltan `NOTION_TOKEN` o `NOTION_DATABASE_ID`
- **Solución:** Verifica que `.env.local` exista y tenga las variables correctas

#### 2. "Failed to connect to Notion" o "object_not_found"

- **Problema:** Database ID incorrecto o integración sin permisos
- **Solución:**
  - **Verifica el Database ID:** Debe ser el ID ANTES de `?v=` en la URL de Notion
    - URL: `https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=...`
    - ✅ Database ID correcto: `2dd18e72616e80f8b04dfb7c29766c52`
    - ❌ NO usar: el valor después de `?v=` (ese es el view_id)
  - Verifica que el token empiece con `secret_`
  - Asegúrate de que la integración esté conectada a la base de datos:
    - Abre la base de datos en Notion
    - Connections → Add connections → selecciona tu integración

#### 3. "Failed to query posts"

- **Problema:** La base de datos no tiene las propiedades correctas
- **Solución:** Verifica que la base de datos tenga:
  - `Title` (Title)
  - `Slug` (Text/Rich Text)
  - `Status` (Select con opciones: Draft, Published)
  - `PublishedAt` (Date)
  - `Excerpt` (Rich Text)

#### 4. "postCount: 0"

- **Problema:** No hay posts con `Status = "Published"`
- **Solución:** Crea un post de prueba y asegúrate de que `Status` esté en "Published"

## Verificación Rápida en Producción (Vercel)

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Verifica que `NOTION_TOKEN` y `NOTION_DATABASE_ID` estén configuradas
4. Visita: `https://tudominio.com/api/blog/test`
5. Revisa los logs en Vercel si hay errores

## Troubleshooting Avanzado

### Ver logs detallados

En desarrollo, los errores aparecen en la terminal donde corre `npm run dev`.

En producción (Vercel):

1. Ve a Deployments → [último deployment] → Functions
2. Revisa los logs de la función

### Probar queries específicas

Puedes modificar temporalmente `src/app/api/blog/test/route.ts` para probar queries específicas o agregar más información de debug.

### Verificar permisos de la integración

1. Ve a [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Abre tu integración
3. Verifica que tenga acceso a "Read content" y "Read databases"
4. Asegúrate de que esté conectada a tu base de datos
