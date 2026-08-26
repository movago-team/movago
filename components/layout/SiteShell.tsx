import Footer from './Footer'
import Header from './Header'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
