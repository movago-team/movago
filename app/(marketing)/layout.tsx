import { Footer, Header } from '@/components/layout'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
