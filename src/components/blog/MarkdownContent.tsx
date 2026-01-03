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
          h1: ({ node, ...props }) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ...props }) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ...props }) => <h3 className={styles.heading3} {...props} />,
          h4: ({ node, ...props }) => <h4 className={styles.heading4} {...props} />,
          
          // Párrafos
          p: ({ node, ...props }) => <p className={styles.paragraph} {...props} />,
          
          // Listas
          ul: ({ node, ...props }) => <ul className={styles.list} {...props} />,
          ol: ({ node, ...props }) => <ol className={styles.list} {...props} />,
          li: ({ node, ...props }) => <li className={styles.listItem} {...props} />,
          
          // Links
          a: ({ node, ...props }) => (
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
          pre: ({ node, ...props }) => <pre className={styles.pre} {...props} />,
          
          // Blockquotes
          blockquote: ({ node, ...props }) => (
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
          table: ({ node, ...props }) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table} {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className={styles.tableHead} {...props} />,
          tbody: ({ node, ...props }) => <tbody className={styles.tableBody} {...props} />,
          tr: ({ node, ...props }) => <tr className={styles.tableRow} {...props} />,
          th: ({ node, ...props }) => <th className={styles.tableHeader} {...props} />,
          td: ({ node, ...props }) => <td className={styles.tableCell} {...props} />,
          
          // Horizontal rule
          hr: ({ node, ...props }) => <hr className={styles.hr} {...props} />,
          
          // Strong y em
          strong: ({ node, ...props }) => <strong className={styles.strong} {...props} />,
          em: ({ node, ...props }) => <em className={styles.em} {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

