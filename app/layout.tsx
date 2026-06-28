import type { Metadata } from 'next'
import { Big_Shoulders_Display, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import PageTransition from '@/components/PageTransition'
import Terminal from '@/components/Terminal'

const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

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
    <html
      lang="en"
      className={`dark ${bigShoulders.variable} ${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
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
