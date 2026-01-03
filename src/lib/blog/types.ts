export type BlogPost = {
  id: string
  pageId: string // ID real de la página para obtener bloques
  title: string
  slug: string
  excerpt: string
  publishedAt: string // ISO date string
  coverImage?: string
}

export type BlogPostWithContent = BlogPost & {
  markdown: string // Markdown convertido desde bloques de Notion
}

