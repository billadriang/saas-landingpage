import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PostCard } from '@/components/insights/post-card'
import Typography from '@/components/ui/typography'
import { getAllPosts } from '@/lib/posts'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Articulos sobre Shopify, integraciones, desarrollo web y flujos de trabajo con IA escritos por Bill Gaize.',
  alternates: {
    canonical: '/insights'
  },
  openGraph: {
    title: 'Insights | Bill Gaize',
    description:
      'Articulos sobre Shopify, integraciones, desarrollo web y flujos de trabajo con IA escritos por Bill Gaize.',
    url: `${siteConfig.url}/insights`,
    type: 'website'
  }
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <div className="flex w-full justify-center px-6 py-12 md:px-12 md:py-24">
      <div className="w-full max-w-5xl space-y-12">
        <div
          className="space-y-6 rounded-[2rem] border border-border/70
            bg-gradient-to-br from-card via-card to-background p-8
            md:p-12"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Insights
            </p>
            <Typography variant="h1" className="max-w-3xl">
              Articulos largos sobre Shopify, desarrollo web
              y flujos con IA.
            </Typography>
            <Typography
              variant="p"
              className="max-w-2xl text-muted-foreground"
            >
              Esta seccion funciona como tu hub editorial:
              posts indexables, con URL propia, metadata
              fuerte y una estructura limpia para Google.
            </Typography>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/">
              <Button size="tiny" variant="ghost">
                Volver al inicio
              </Button>
            </Link>
            <Link href="mailto:me@billgaize.com">
              <Button size="tiny" variant="outline">
                Hablemos
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
