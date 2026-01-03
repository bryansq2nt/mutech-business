'use client'

import React from 'react'
import Image from 'next/image'
import styles from './NotionRenderer.module.css'

interface NotionRendererProps {
  blocks: any[]
}

export default function NotionRenderer({ blocks }: NotionRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  const renderBlock = (block: any, index: number) => {
    const { type, id } = block
    const value = block[type]

    switch (type) {
      case 'paragraph':
        const richText = value.rich_text || []
        if (richText.length === 0) {
          return <p key={id} className={styles.paragraph}><br /></p>
        }

        return (
          <p key={id} className={styles.paragraph}>
            {richText.map((text: any, i: number) => {
              const annotations = text.annotations || {}
              let content: React.ReactNode = text.plain_text || ''

              // Aplicar anotaciones en orden (code primero, luego bold/italic, luego link)
              if (annotations.code) {
                content = <code key={`code-${i}`} className={styles.inlineCode}>{content}</code>
              }
              if (annotations.bold && !annotations.code) {
                content = <strong key={`bold-${i}`}>{content}</strong>
              }
              if (annotations.italic && !annotations.code) {
                content = <em key={`italic-${i}`}>{content}</em>
              }
              if (annotations.strikethrough && !annotations.code) {
                content = <del key={`strike-${i}`}>{content}</del>
              }
              if (text.href) {
                content = (
                  <a
                    key={`link-${i}`}
                    href={text.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                )
              }

              return <span key={i}>{content}</span>
            })}
          </p>
        )

      case 'heading_1':
        return (
          <h1 key={id} className={styles.heading1}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </h1>
        )

      case 'heading_2':
        return (
          <h2 key={id} className={styles.heading2}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </h2>
        )

      case 'heading_3':
        return (
          <h3 key={id} className={styles.heading3}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </h3>
        )

      case 'bulleted_list_item':
        return (
          <li key={id} className={styles.listItem}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </li>
        )

      case 'numbered_list_item':
        return (
          <li key={id} className={styles.listItem}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </li>
        )

      case 'quote':
        return (
          <blockquote key={id} className={styles.quote}>
            {value.rich_text?.map((text: any) => text.plain_text).join('')}
          </blockquote>
        )

      case 'divider':
        return <hr key={id} className={styles.divider} />

      case 'callout':
        return (
          <div key={id} className={styles.callout}>
            {value.icon && (
              <span className={styles.calloutIcon}>
                {value.icon.emoji || '💡'}
              </span>
            )}
            <div className={styles.calloutContent}>
              {value.rich_text?.map((text: any) => text.plain_text).join('')}
            </div>
          </div>
        )

      case 'image':
        const imageUrl =
          value.type === 'external'
            ? value.external.url
            : value.type === 'file'
            ? value.file.url
            : null

        const caption = value.caption?.map((text: any) => text.plain_text).join('') || ''

        if (!imageUrl) return null

        return (
          <figure key={id} className={styles.imageFigure}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageUrl}
                alt={caption || 'Imagen del artículo'}
                width={1200}
                height={675}
                className={styles.image}
                unoptimized={imageUrl.startsWith('https://www.notion.so')}
              />
            </div>
            {caption && <figcaption className={styles.imageCaption}>{caption}</figcaption>}
          </figure>
        )

      default:
        // Ignorar tipos no soportados sin romper
        return null
    }
  }

  // Agrupar listas consecutivas
  const groupedBlocks: any[] = []
  let currentList: { type: 'bulleted' | 'numbered'; items: any[] } | null = null

  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item') {
      if (currentList?.type !== 'bulleted') {
        if (currentList) {
          groupedBlocks.push(currentList)
        }
        currentList = { type: 'bulleted', items: [] }
      }
      currentList.items.push(block)
    } else if (block.type === 'numbered_list_item') {
      if (currentList?.type !== 'numbered') {
        if (currentList) {
          groupedBlocks.push(currentList)
        }
        currentList = { type: 'numbered', items: [] }
      }
      currentList.items.push(block)
    } else {
      if (currentList) {
        groupedBlocks.push(currentList)
        currentList = null
      }
      groupedBlocks.push(block)
    }
  })

  if (currentList) {
    groupedBlocks.push(currentList)
  }

  return (
    <div className={styles.notionContent}>
      {groupedBlocks.map((item, index) => {
        if (item.type === 'bulleted' || item.type === 'numbered') {
          const Tag = item.type === 'bulleted' ? 'ul' : 'ol'
          return (
            <Tag key={`list-${index}`} className={styles.list}>
              {item.items.map((block: any) => renderBlock(block, index))}
            </Tag>
          )
        }
        return renderBlock(item, index)
      })}
    </div>
  )
}

