'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/constants/navigation'

type NavbarProps = {
  open?: boolean
  onNavigate?: () => void
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar({ open = false, onNavigate }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className={`desktop-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={isActivePath(pathname, item.href) ? 'active' : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
