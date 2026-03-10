// app/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Link from 'next/link'
import InteractiveCube from '@/components/ui/InteractiveCube'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import { getFeaturedPosts } from '@/lib/posts'
import { PostCard } from '@/components/insights/post-card'

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  }
}

export default function Home() {
  const featuredPosts = getFeaturedPosts()

  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Hello there 👨🏻
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          I am Bill Gaize, Full Stack MERN Developer
          experienced in API Integrations with a weirdly
          helpful background in Medical Lab Science.
        </Typography>
        <Link
          href="https://www.linkedin.com/in/billgaize/"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Take a look`}
          </Button>
        </Link>
        <InteractiveCube />

        {/* PDF Link Added Here */}
        <div className="mt-12">
          {' '}
          {/* Adjust margin-top as needed */}
          <Link
            href="/properties_dayana.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="tiny" variant="ghost">
              View My Proposal (PDF)
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Ready to help you in that app/website idea you
            have in mind
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Quick Web Solutions"
              description="Build your online presence in no time! With my extensive web development background, I craft high-quality sites and lightning-fast web solutions."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Adaptable & Responsive"
              description="Fully responsive designs that fit any tech platform! Specializing in e-commerce and Shopify, I will get you selling online like a pro within hours."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Seamless Integration"
              description="Leverage my expertise in system and API integration to connect your tech stack effortlessly, delivering secure and efficient solutions for your organization."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Fast and Professional Solutions
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Got a vision for your online idea? Lets bring it
            to life! Reach out now, and together we will
            transform your idea into a thriving e-commerce
            success story. 💬
          </Typography>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a slot, or email me</div>
          <Link
            href="https://calendly.com/me--52uo/30min"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
        <div className="flex w-full max-w-5xl flex-col gap-8 items-center">
          <div className="flex flex-col gap-4 items-center">
            <Typography className="max-w-3xl" variant="h1">
              Insights that let visitors read your thinking,
              not just scan your services
            </Typography>
            <Typography className="max-w-2xl" variant="p">
              Publish long-form posts directly inside the
              site, with clean article pages that are easy
              to expand later into a full content hub.
            </Typography>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 text-left">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/insights">
            <Button size="tiny" variant="outline">
              Browse all posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
