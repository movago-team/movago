import { SiteShell } from '@/components/layout'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteShell>{children}</SiteShell>
}
