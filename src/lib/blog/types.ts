export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string // ISO date string
  coverImage?: string
}

export type BlogPostWithContent = BlogPost & {
  markdown: string
}

