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
          h1: ({ node, ref, ...props }: any) => <h1 className={styles.heading1} {...props} />,
          h2: ({ node, ref, ...props }: any) => <h2 className={styles.heading2} {...props} />,
          h3: ({ node, ref, ...props }: any) => <h3 className={styles.heading3} {...props} />,
          p: ({ node, ref, ...props }: any) => <p className={styles.paragraph} {...props} />,
          ul: ({ node, ref, ...props }: any) => <ul className={styles.list} {...props} />,
          ol: ({ node, ref, ...props }: any) => <ol className={styles.list} {...props} />,
          li: ({ node, ref, ...props }: any) => <li className={styles.listItem} {...props} />,
          a: ({ node, ref, ...props }: any) => <a className={styles.link} {...props} />,
          code: ({ node, ref, inline, ...props }: any) =>
            inline ? (
              <code className={styles.inlineCode} {...props} />
            ) : (
              <code className={styles.codeBlock} {...props} />
            ),
          pre: ({ node, ref, ...props }: any) => <pre className={styles.pre} {...props} />,
          blockquote: ({ node, ref, ...props }: any) => (
            <blockquote className={styles.blockquote} {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}