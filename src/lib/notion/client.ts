import { Client } from '@notionhq/client'

let notionClient: Client | null = null

/**
 * Normaliza y valida el Database ID de Notion.
 * 
 * IMPORTANTE: Cómo obtener el Database ID correcto:
 * - URL de Notion: https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=...
 * - database_id = parte ANTES de ?v= (2dd18e72616e80f8b04dfb7c29766c52)
 * - view_id = parte DESPUÉS de ?v= (NO usar para API)
 * 
 * La API de Notion requiere el database_id, NO el view_id.
 * 
 * @param databaseId - El ID de la base de datos (puede venir con guiones)
 * @returns El ID normalizado (sin guiones) o null si es inválido
 */
export function normalizeDatabaseId(databaseId: string | undefined): string | null {
  if (!databaseId) {
    return null
  }

  // Remover guiones (Notion IDs pueden venir con o sin guiones)
  const normalized = databaseId.replace(/-/g, '')

  // Validar formato: debe ser alfanumérico y tener al menos 20 caracteres
  // Los database IDs de Notion son típicamente 32 caracteres hexadecimales
  if (!/^[a-f0-9]{20,}$/i.test(normalized)) {
    return null
  }

  return normalized
}

/**
 * Valida que el Database ID no sea un View ID.
 * Los View IDs suelen ser más cortos o tienen un formato diferente.
 * 
 * @param databaseId - El ID normalizado a validar
 * @returns true si parece ser un database_id válido, false si parece ser un view_id
 */
export function validateDatabaseId(databaseId: string): { valid: boolean; error?: string } {
  // Los database IDs de Notion son típicamente 32 caracteres hexadecimales
  // Los view IDs suelen ser más cortos o diferentes
  if (databaseId.length < 20) {
    return {
      valid: false,
      error: `El ID parece ser muy corto (${databaseId.length} caracteres). Los Database IDs de Notion suelen tener 32 caracteres. Verifique que esté usando el ID ANTES de ?v= en la URL.`,
    }
  }

  // Si el ID tiene exactamente 32 caracteres, es probablemente un database_id válido
  if (databaseId.length === 32) {
    return { valid: true }
  }

  // Si tiene entre 20-31 caracteres, podría ser válido pero advertir
  if (databaseId.length >= 20 && databaseId.length < 32) {
    return {
      valid: true,
      error: `Advertencia: El ID tiene ${databaseId.length} caracteres. Los Database IDs suelen tener 32 caracteres. Asegúrese de usar el ID ANTES de ?v= en la URL.`,
    }
  }

  return { valid: true }
}

/**
 * Obtiene el Database ID normalizado y validado desde las variables de entorno.
 * 
 * @returns El Database ID normalizado o null si no está configurado
 * @throws Error si el ID parece ser un view_id o es inválido
 */
export function getDatabaseId(): string {
  const rawId = process.env.NOTION_DATABASE_ID

  if (!rawId) {
    throw new Error(
      'NOTION_DATABASE_ID is not set. Please add it to your environment variables.'
    )
  }

  const normalized = normalizeDatabaseId(rawId)

  if (!normalized) {
    throw new Error(
      `NOTION_DATABASE_ID tiene un formato inválido: "${rawId}". ` +
      `El Database ID debe ser alfanumérico y estar ANTES de ?v= en la URL de Notion. ` +
      `Ejemplo: https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=... ` +
      `→ Database ID: 2dd18e72616e80f8b04dfb7c29766c52`
    )
  }

  const validation = validateDatabaseId(normalized)

  if (!validation.valid) {
    throw new Error(
      `NOTION_DATABASE_ID parece ser incorrecto: ${validation.error} ` +
      `Asegúrese de usar el ID ANTES de ?v= en la URL de Notion, NO el valor después de ?v=.`
    )
  }

  if (validation.error) {
    console.warn(`⚠️  NOTION_DATABASE_ID: ${validation.error}`)
  }

  return normalized
}

export function getNotionClient(): Client {
  if (notionClient) {
    return notionClient
  }

  const token = process.env.NOTION_TOKEN

  if (!token) {
    throw new Error(
      'NOTION_TOKEN is not set. Please add it to your environment variables.'
    )
  }

  notionClient = new Client({
    auth: token,
  })

  return notionClient
}

