import { Page } from '@notionhq/client/build/src/api-types'
import { BlogPost } from './types'

export function mapNotionPageToPost(page: Page): BlogPost | null {
  try {
    const properties = page.properties as any

    // Extract Title
    const titleProperty = properties.Title
    if (
      !titleProperty ||
      titleProperty.type !== 'title' ||
      !titleProperty.title ||
      titleProperty.title.length === 0
    ) {
      return null
    }
    const title = titleProperty.title[0].plain_text

    // Extract Slug (can be rich_text or title type)
    const slugProperty = properties.Slug
    let slug = ''
    
    if (slugProperty?.type === 'rich_text' && slugProperty.rich_text?.length > 0) {
      slug = slugProperty.rich_text[0].plain_text
    } else if (slugProperty?.type === 'title' && slugProperty.title?.length > 0) {
      slug = slugProperty.title[0].plain_text
    } else {
      return null
    }

    // Extract Excerpt
    const excerptProperty = properties.Excerpt
    let excerpt = ''
    if (
      excerptProperty &&
      excerptProperty.type === 'rich_text' &&
      excerptProperty.rich_text &&
      Array.isArray(excerptProperty.rich_text) &&
      excerptProperty.rich_text.length > 0
    ) {
      excerpt = excerptProperty.rich_text
        .map((text: any) => text.plain_text || '')
        .join('')
    }

    // Extract PublishedAt
    const publishedAtProperty = properties.PublishedAt
    let publishedAt = ''
    if (
      publishedAtProperty &&
      publishedAtProperty.type === 'date' &&
      publishedAtProperty.date
    ) {
      publishedAt = publishedAtProperty.date.start
    } else {
      // Fallback to page created time if PublishedAt is not set
      publishedAt = page.created_time
    }

    // Extract CoverImage (optional)
    // Preferir page.cover si está seteado, sino buscar propiedad CoverImage
    let coverImage: string | undefined
    if (page.cover) {
      if (page.cover.type === 'external') {
        coverImage = page.cover.external.url
      } else if (page.cover.type === 'file') {
        coverImage = page.cover.file.url
      }
    } else {
      // Fallback: buscar propiedad CoverImage (Files & media)
      const coverImageProperty = properties.CoverImage
      if (
        coverImageProperty &&
        coverImageProperty.type === 'files' &&
        coverImageProperty.files &&
        coverImageProperty.files.length > 0
      ) {
        const file = coverImageProperty.files[0]
        if (file.type === 'external') {
          coverImage = file.external.url
        } else if (file.type === 'file') {
          coverImage = file.file.url
        }
      }
    }

    return {
      id: page.id,
      pageId: page.id, // ID real de la página para obtener bloques
      title,
      slug,
      excerpt,
      publishedAt,
      coverImage,
    }
  } catch (error) {
    console.error('Error mapping Notion page to post:', error)
    return null
  }
}

