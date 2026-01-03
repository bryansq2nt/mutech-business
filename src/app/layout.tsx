import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mutech Business',
  description: 'Claridad para decidir. Estructura para empezar bien.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
