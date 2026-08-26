import { SiteShell } from '@/components/layout'

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteShell>{children}</SiteShell>
}
