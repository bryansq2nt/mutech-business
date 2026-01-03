import { getNotionClient, getDatabaseId } from './client'
import { mapNotionPageToPost } from '../blog/mapper'
import { BlogPost } from '../blog/types'
import { BlogPostWithContent } from '../blog/types'
import { getPostMarkdown } from '../blog/content'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// Obtener Database ID normalizado y validado
let DATABASE_ID: string | null = null
try {
  DATABASE_ID = getDatabaseId()
} catch (error: any) {
  console.warn('NOTION_DATABASE_ID:', error.message)
}

export async function queryPublishedPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    console.error('❌ DATABASE_ID is not configured')
    return []
  }

  try {
    const notion = getNotionClient()
    //console.log('🔍 Querying Notion database:', DATABASE_ID)

    const response = await notion.databases.query({
      database_id: DATABASE_ID as string,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'PublishedAt',
          direction: 'descending',
        },
      ],
    })

    //console.log('✅ Notion response received:', response.results.length, 'pages')

    const posts = response.results
      .map((page: any) => {
        const post = mapNotionPageToPost(page)
        if (!post) {
          console.log('⚠️ Could not map page:', page.id)
        }
        return post
      })
      .filter((post: BlogPost | null): post is BlogPost => post !== null)

   // console.log('📝 Mapped posts:', posts.length)
    //console.log('Posts:', posts.map(p => ({ title: p.title, slug: p.slug })))

    return posts
  } catch (error) {
    console.error('❌ Error querying published posts from Notion:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!DATABASE_ID) {
    console.error('❌ DATABASE_ID is not configured')
    return null
  }

  try {
    const notion = getNotionClient()
   // console.log('🔍 Searching for post with slug:', slug)

    const response = await notion.databases.query({
      database_id: DATABASE_ID as string,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published',
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    //console.log('✅ Query results:', response.results.length, 'pages found')

    if (response.results.length === 0) {
      console.log('❌ No post found with slug:', slug)
      return null
    }

    const post = mapNotionPageToPost(response.results[0] as PageObjectResponse)
   // console.log('📝 Mapped post:', post ? post.title : 'null')
    return post
  } catch (error) {
    console.error(`❌ Error fetching post with slug "${slug}" from Notion:`, error)
    return null
  }
}

/**
 * Obtiene el contenido de un post convertido a Markdown.
 * Usa notion-to-md para convertir los bloques de Notion a Markdown.
 * 
 * @param slug - Slug del post
 * @returns Post con contenido en Markdown o null si no existe
 */
export async function getPostWithContentBySlug(
  slug: string
): Promise<BlogPostWithContent | null> {
  const post = await getPostBySlug(slug)

  if (!post) {
    return null
  }

  try {
    // Convertir bloques de Notion a Markdown usando notion-to-md
    const markdown = await getPostMarkdown(post.pageId)
    return {
      ...post,
      markdown,
    }
  } catch (error) {
    console.error(`Error fetching content for post "${slug}":`, error)
    return null
  }
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  if (!DATABASE_ID) {
    return []
  }

  try {
    const posts = await queryPublishedPosts()
    return posts.map((post) => post.slug)
  } catch (error) {
    console.error('Error fetching all published slugs:', error)
    return []
  }
}