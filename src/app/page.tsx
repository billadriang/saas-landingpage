import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
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
          Im Bill Gaize, Full Stack MERN Developer
          experienced in API Integrations and with a weirdly
          helupful background in Medical Lab Science.
        </Typography>
        <Link
          href="https://www.linkedin.com/in/billgaize/"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Take a look`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Ready to help you in that app/website idea
            you have in mind
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
              description="Fully responsive designs that fit any tech platform! Specializing in e-commerce and Shopify, I'll get you selling online like a pro within hours."
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
          Got a vision for your online idea?
          Let's bring it to life! Reach out now, and together we'll transform your idea into a thriving e-commerce success story. 💬
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://calendly.com/me--52uo/30min"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
