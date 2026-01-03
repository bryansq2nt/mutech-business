'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import Image from 'next/image'
import styles from './MarkdownContent.module.css'

interface MarkdownContentProps {
  markdown: string
}

/**
 * Componente que renderiza Markdown usando react-markdown.
 * Convierte el contenido de Notion (ya en Markdown) a HTML renderizado.
 * 
 * Características:
 * - Sanitización automática de HTML (rehype-sanitize)
 * - Soporte para GitHub Flavored Markdown (remark-gfm)
 * - Estilos tipo "prose" para legibilidad
 * - Optimización de imágenes con next/image
 */
export default function MarkdownContent({ markdown }: MarkdownContentProps) {
  if (!markdown) {
    return null
  }

  return (
    <div className={styles.markdownContent}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          // Headings con estilos personalizados
          h1: ({ node, ref, ...props }: any) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ref, ...props }: any) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ref, ...props }: any) => <h3 className={styles.heading3} {...props} />,
          h4: ({ node, ref, ...props }: any) => <h4 className={styles.heading4} {...props} />,
          
          // Párrafos
          p: ({ node, ref, ...props }: any) => <p className={styles.paragraph} {...props} />,
          
          // Listas
          ul: ({ node, ref, ...props }: any) => <ul className={styles.list} {...props} />,
          ol: ({ node, ref, ...props }: any) => <ol className={styles.list} {...props} />,
          li: ({ node, ref, ...props }: any) => <li className={styles.listItem} {...props} />,
          
          // Links
          a: ({ node, ref, ...props }: any) => (
            <a className={styles.link} target="_blank" rel="noopener noreferrer" {...props} />
          ),
          
          // Código inline y bloques
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return <code className={styles.inlineCode} {...props}>{children}</code>
            }
            return (
              <code className={styles.codeBlock} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ node, ref, ...props }: any) => <pre className={styles.pre} {...props} />,
          
          // Blockquotes
          blockquote: ({ node, ref, ...props }: any) => (
            <blockquote className={styles.blockquote} {...props} />
          ),
          
          // Imágenes optimizadas con next/image
          img: ({ node, src, alt, ...props }: any) => {
            if (!src) return null
            
            // Detectar imágenes de Notion (S3 y otros dominios)
            // Las URLs de Notion suelen tener parámetros de autenticación temporales
            const isNotionImage = 
              src.includes('notion.so') ||
              src.includes('s3.us-west-2.amazonaws.com') ||
              src.includes('prod-files-secure.s3.us-west-2.amazonaws.com')
            
            return (
              <figure className={styles.imageFigure}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={alt || 'Imagen del artículo'}
                    width={1200}
                    height={675}
                    className={styles.image}
                    unoptimized={isNotionImage}
                    {...props}
                  />
                </div>
                {alt && <figcaption className={styles.imageCaption}>{alt}</figcaption>}
              </figure>
            )
          },
          
          // Tablas (soporte GFM)
          table: ({ node, ref, ...props }: any) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table} {...props} />
            </div>
          ),
          thead: ({ node, ref, ...props }: any) => <thead className={styles.tableHead} {...props} />,
          tbody: ({ node, ref, ...props }: any) => <tbody className={styles.tableBody} {...props} />,
          tr: ({ node, ref, ...props }: any) => <tr className={styles.tableRow} {...props} />,
          th: ({ node, ref, ...props }: any) => <th className={styles.tableHeader} {...props} />,
          td: ({ node, ref, ...props }: any) => <td className={styles.tableCell} {...props} />,
          
          // Horizontal rule
          hr: ({ node, ref, ...props }: any) => <hr className={styles.hr} {...props} />,
          
          // Strong y em
          strong: ({ node, ref, ...props }: any) => <strong className={styles.strong} {...props} />,
          em: ({ node, ref, ...props }: any) => <em className={styles.em} {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}