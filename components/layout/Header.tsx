'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from '@/components/ui/icon'
import { BOOK_NOW_HREF } from '@/constants/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Navbar from './Navbar'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  return (
    <header className={`topbar${isHome ? ' topbar-overlay' : ' topbar-solid'}`}>
      <Link href="/" className="brand" aria-label="MOVAGO Home">
        <img src="/movago/logo.png" alt="MOVAGO" />
      </Link>

      <Navbar open={menuOpen} onNavigate={() => setMenuOpen(false)} />

      <div className="nav-actions">
        <LanguageSwitcher />

        <Link href={BOOK_NOW_HREF} className="gold-btn nav-book">
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
