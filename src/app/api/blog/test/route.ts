import { NextResponse } from 'next/server'
import { getNotionClient, getDatabaseId, normalizeDatabaseId } from '@/lib/notion/client'
import { queryPublishedPosts, getAllPublishedSlugs } from '@/lib/notion/queries'

export async function GET() {
  const results: {
    timestamp: string
    envCheck: {
      notionToken: boolean
      databaseId: boolean
      databaseIdRaw?: string
      databaseIdNormalized?: string
    }
    connectionTest: {
      success: boolean
      error?: string
      hint?: string
    }
    databaseQuery: {
      success: boolean
      postCount?: number
      error?: string
    }
    samplePosts?: Array<{
      id: string
      title: string
      slug: string
      publishedAt: string
    }>
  } = {
    timestamp: new Date().toISOString(),
    envCheck: {
      notionToken: !!process.env.NOTION_TOKEN,
      databaseId: !!process.env.NOTION_DATABASE_ID,
      databaseIdRaw: process.env.NOTION_DATABASE_ID,
      databaseIdNormalized: process.env.NOTION_DATABASE_ID
        ? normalizeDatabaseId(process.env.NOTION_DATABASE_ID) || undefined
        : undefined,
    },
    connectionTest: {
      success: false,
    },
    databaseQuery: {
      success: false,
    },
  }

  // Check environment variables
  if (!results.envCheck.notionToken || !results.envCheck.databaseId) {
    return NextResponse.json(
      {
        ...results,
        error: 'Missing environment variables. Check NOTION_TOKEN and NOTION_DATABASE_ID.',
      },
      { status: 400 }
    )
  }

  // Validate and normalize database ID
  let databaseId: string
  try {
    databaseId = getDatabaseId()
  } catch (error: any) {
    return NextResponse.json(
      {
        ...results,
        connectionTest: {
          success: false,
          error: error.message,
          hint: 'Verifique que NOTION_DATABASE_ID sea el ID ANTES de ?v= en la URL de Notion. Ejemplo: https://www.notion.so/2dd18e72616e80f8b04dfb7c29766c52?v=... → Database ID: 2dd18e72616e80f8b04dfb7c29766c52',
        },
      },
      { status: 400 }
    )
  }

  // Test Notion client connection and database retrieval
  try {
    const notion = getNotionClient()
    await notion.databases.retrieve({
      database_id: databaseId,
    })
    results.connectionTest = {
      success: true,
    }
  } catch (error: any) {
    let hint = ''
    
    // Detectar errores específicos de Notion API
    if (error.code === 'object_not_found' || error.message?.includes('object_not_found')) {
      hint =
        'Verifique que NOTION_DATABASE_ID sea el ID ANTES de ?v= en la URL de Notion y que haya compartido la base de datos con la integración (Connections → Add connections).'
    } else if (error.code === 'unauthorized' || error.message?.includes('unauthorized')) {
      hint =
        'Verifique que la integración tenga acceso a la base de datos. En Notion: abra la base de datos → Connections → Add connections → seleccione su integración.'
    } else if (error.message?.includes('Invalid database ID')) {
      hint =
        'El Database ID parece ser inválido. Asegúrese de usar el ID ANTES de ?v= en la URL, NO el valor después de ?v=.'
    }

    results.connectionTest = {
      success: false,
      error: error.message || 'Failed to connect to Notion',
      hint: hint || undefined,
    }
    
    return NextResponse.json(results, { status: 500 })
  }

  // Test database query
  try {
    const posts = await queryPublishedPosts()
    results.databaseQuery = {
      success: true,
      postCount: posts.length,
    }
    results.samplePosts = posts.slice(0, 5).map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      publishedAt: post.publishedAt,
    }))
  } catch (error: any) {
    results.databaseQuery = {
      success: false,
      error: error.message || 'Failed to query posts',
    }
  }

  return NextResponse.json(results, {
    status: results.connectionTest.success ? 200 : 500,
  })
}

