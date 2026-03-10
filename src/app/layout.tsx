import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'Bill Gaize | Shopify Integrations, Web Development, and AI Workflows',
    template: '%s | Bill Gaize'
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title:
      'Bill Gaize | Shopify Integrations, Web Development, and AI Workflows',
    description: siteConfig.description,
    siteName: 'Bill Gaize',
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Bill Gaize | Shopify Integrations, Web Development, and AI Workflows',
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
