'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS, SERVICES_SUBMENU } from '@/constants/navigation'

type NavbarProps = {
  open?: boolean
  onNavigate?: () => void
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  const cleanHref = href.split('#')[0]
  if (!cleanHref) return false
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`)
}

export default function Navbar({ open = false, onNavigate }: NavbarProps) {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside or escape key
  useEffect(() => {
    if (!servicesOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesOpen])

  // Close dropdown when mobile menu closes
  useEffect(() => {
    if (!open) {
      setServicesOpen(false)
    }
  }, [open])

  const isServicesActive = pathname === '/services' || pathname.startsWith('/services/')

  const handleSubItemClick = () => {
    setServicesOpen(false)
    onNavigate?.()
  }

  return (
    <nav className={`desktop-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      {NAV_LINKS.map((item) => {
        if (item.label === 'Our Services') {
          return (
            <div
              key={item.href}
              className={`nav-dropdown-item-wrap ${servicesOpen ? 'is-open' : ''}`}
              ref={dropdownRef}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Our Services menu"
              >
                <span>{item.label}</span>
                <span className={`nav-chevron ${servicesOpen ? 'is-open' : ''}`} aria-hidden="true" />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="nav-dropdown-menu" role="menu">
                  {SERVICES_SUBMENU.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      role="menuitem"
                      className={`nav-dropdown-link ${isActivePath(pathname, sub.href) ? 'active' : ''}`}
                      onClick={handleSubItemClick}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActivePath(pathname, item.href) ? 'active' : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
