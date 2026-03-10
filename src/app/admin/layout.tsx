import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Bill Gaize',
  robots: {
    index: false,
    follow: false
  }
}

export default async function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return await Promise.resolve(children)
}
