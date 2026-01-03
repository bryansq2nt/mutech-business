import { getNotionClient } from '../notion/client'
import { NotionToMarkdown } from 'notion-to-md'

export async function getPostMarkdown(pageId: string): Promise<string> {
  try {
    const notionClient = getNotionClient()
    const n2m = new NotionToMarkdown({ notionClient })

    const mdBlocks = await n2m.pageToMarkdown(pageId)
    const markdown = n2m.toMarkdownString(mdBlocks)

    return markdown.parent || ''
  } catch (error) {
    console.error(`Error converting Notion page ${pageId} to markdown:`, error)
    throw error
  }
}

