'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from '@/ui/icon'
import { BOOK_NOW_HREF, isOverlayHeaderPath } from '@/constants/navigation'
import { cn } from '@/utils/cn'
import { btnNavBook } from '@/utils/ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import Navbar from './Navbar'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isOverlay = isOverlayHeaderPath(pathname)

  return (
    <header className={`topbar${isOverlay ? ' topbar-overlay' : ' topbar-solid'}`}>
      <Link href="/" className="brand" aria-label="MOVAGO — Executive Airport Transfer">
        <img src="/images/brand/logo.png" alt="MOVAGO" className="brand-logo" />
        <div className="brand-text">
          <span className="brand-name">MOVAGO</span>
          <span className="brand-tagline">EXECUTIVE AIRPORT TRANSFER</span>
        </div>
      </Link>

      <Navbar open={menuOpen} onNavigate={() => setMenuOpen(false)} />

      <div className="nav-actions">
        <LanguageSwitcher />

        <Link href={BOOK_NOW_HREF} className={cn(btnNavBook, 'nav-book')}>
          Book Now
        </Link>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  )
}
