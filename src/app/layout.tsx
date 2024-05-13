import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bill Gaize Dev, Tech Solutions, and Consulting',
  description:
    'Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.',
  openGraph: {
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bill Gaize Dev, Tech Solutions, and Consulting',
    description:
      'Got a vision for your online idea? Lets bring it to life! Reach out now, and together we will transform your idea into a thriving e-commerce success story. 💬',
    images: ['https://i.postimg.cc/T3v8TKB7/Capture.png']
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
