import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import PageTransition from '@/components/PageTransition'
import Terminal from '@/components/Terminal'

export const metadata: Metadata = {
  title: 'Yugam Arora — IT Portfolio',
  description:
    "Portfolio of Yugam Arora — IT Administrator specializing in cybersecurity, cloud infrastructure, and software development. 6× UFV Dean's List honoree.",
  keywords: ['Yugam Arora', 'IT Administrator', 'Cybersecurity', 'UFV', 'Portfolio', 'Cloud'],
  authors: [{ name: 'Yugam Arora' }],
  openGraph: {
    title: 'Yugam Arora — IT Portfolio',
    description: 'IT Administrator & Security Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#06060c] text-[#efefef] antialiased">
        <Providers>
          <CustomCursor />
          <ScrollProgress />
          <Terminal />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  )
}
