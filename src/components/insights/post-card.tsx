import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full flex-col justify-between rounded-3xl
        border border-border/80 bg-card/70 p-6 transition-all
        duration-200 hover:-translate-y-1 hover:border-primary/40
        hover:bg-card"
    >
      <div className="space-y-4">
        <div
          className="flex items-center gap-3 text-xs uppercase tracking-[0.24em]
            text-muted-foreground"
        >
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>{post.readingTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {post.title}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">
            {post.description}
          </p>
        </div>
      </div>
      <div
        className="mt-8 flex items-center justify-between text-sm
          text-foreground"
      >
        <span>
          {new Date(post.publishedAt).toLocaleDateString(
            'es-CL',
            {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }
          )}
        </span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          Leer articulo
        </span>
      </div>
    </Link>
  )
}
