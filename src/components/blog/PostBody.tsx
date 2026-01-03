import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import styles from './PostBody.module.css'

interface PostBodyProps {
  markdown: string
}

export default function PostBody({ markdown }: PostBodyProps) {
  return (
    <div className={styles.postBody}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ...props }) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ...props }) => <h3 className={styles.heading3} {...props} />,
          p: ({ node, ...props }) => <p className={styles.paragraph} {...props} />,
          ul: ({ node, ...props }) => <ul className={styles.list} {...props} />,
          ol: ({ node, ...props }) => <ol className={styles.list} {...props} />,
          li: ({ node, ...props }) => <li className={styles.listItem} {...props} />,
          a: ({ node, ...props }) => <a className={styles.link} {...props} />,
          code: ({ node, inline, ...props }: any) =>
            inline ? (
              <code className={styles.inlineCode} {...props} />
            ) : (
              <code className={styles.codeBlock} {...props} />
            ),
          pre: ({ node, ...props }) => <pre className={styles.pre} {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className={styles.blockquote} {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

