import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getAllPosts, getPostBySlug } from '@/content/posts'

interface PostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }))
}

export function generateMetadata({
  params
}: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Bill Gaize`,
    description: post.description
  }
}

export default function PostPage({
  params
}: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex w-full justify-center px-6 py-12 md:px-12 md:py-24">
      <article className="w-full max-w-3xl space-y-10">
        <div className="space-y-6">
          <Link
            href="/insights"
            className="inline-flex text-sm text-muted-foreground transition-colors
              hover:text-foreground"
          >
            Back to insights
          </Link>
          <div className="space-y-4">
            <div
              className="flex flex-wrap items-center gap-3 text-xs uppercase
                tracking-[0.24em] text-muted-foreground"
            >
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{post.readingTime}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>
                {new Date(
                  post.publishedAt
                ).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h1
              className="text-4xl font-extrabold tracking-tight text-foreground
                md:text-6xl"
            >
              {post.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {post.description}
            </p>
          </div>
        </div>

        <div
          className="rounded-[2rem] border border-border/70 bg-gradient-to-br
            from-card via-card to-background p-8 text-xl font-medium
            leading-9 text-foreground md:p-10"
        >
          {post.hero}
        </div>

        <div className="post-body">
          {post.sections.map((section, index) => {
            if (section.type === 'heading') {
              return (
                <h2 key={`${post.slug}-${index}`}>
                  {section.content}
                </h2>
              )
            }

            if (section.type === 'list') {
              return (
                <ul key={`${post.slug}-${index}`}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }

            if (section.type === 'quote') {
              return (
                <blockquote key={`${post.slug}-${index}`}>
                  {section.content}
                </blockquote>
              )
            }

            return (
              <p key={`${post.slug}-${index}`}>
                {section.content}
              </p>
            )
          })}
        </div>

        <div className="rounded-[2rem] border border-border/70 bg-card/60 p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want this kind of content system on your site?
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              I can wire this into a landing page, a proper
              blog index, or a CMS-backed publishing flow
              depending on how far you want to take it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="mailto:me@billgaize.com">
                <Button size="tiny" variant="ghost">
                  Email me
                </Button>
              </Link>
              <Link
                href="https://calendly.com/me--52uo/30min"
                target="_blank"
              >
                <Button size="tiny" variant="outline">
                  Book a slot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
