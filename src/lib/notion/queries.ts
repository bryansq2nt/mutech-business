import { getNotionClient, getDatabaseId } from './client'
import { mapNotionPageToPost } from '../blog/mapper'
import { BlogPost } from '../blog/types'
import { getPostMarkdown } from '../blog/content'
import { BlogPostWithContent } from '../blog/types'

// Obtener Database ID normalizado y validado
let DATABASE_ID: string | null = null
try {
  DATABASE_ID = getDatabaseId()
} catch (error: any) {
  console.warn('NOTION_DATABASE_ID:', error.message)
}

export async function queryPublishedPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    return []
  }

  try {
    const notion = getNotionClient()

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

    const posts = response.results
      .map((page) => mapNotionPageToPost(page as any))
      .filter((post): post is BlogPost => post !== null)

    return posts
  } catch (error) {
    console.error('Error querying published posts from Notion:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!DATABASE_ID) {
    return null
  }

  try {
    const notion = getNotionClient()

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

    if (response.results.length === 0) {
      return null
    }

    const post = mapNotionPageToPost(response.results[0] as any)
    return post
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}" from Notion:`, error)
    return null
  }
}

export async function getPostWithContentBySlug(
  slug: string
): Promise<BlogPostWithContent | null> {
  const post = await getPostBySlug(slug)

  if (!post) {
    return null
  }

  try {
    const markdown = await getPostMarkdown(post.id)
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

