export type NavLink = {
  label: string
  href: string
}

export const SERVICES_SUBMENU: NavLink[] = [
  { label: 'Airport Transfer', href: '/services/airport-transfer' },
  { label: 'Hourly Service', href: '/services/hourly-service' },
  { label: 'Intercity Transfer', href: '/services/intercity-transfer' },
  { label: 'Corporate Solutions', href: '/corporate' },
]

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'About Us', href: '/about' },
]

export const CONTACT_NAV_LINK: NavLink = {
  label: 'Contact Us',
  href: '/contact',
}

export function isContactPath(pathname: string): boolean {
  return pathname === '/contact' || pathname.startsWith('/contact/')
}

export const SUPPORT_NAV_LINK: NavLink = {
  label: 'Customer Support',
  href: '/support/faqs',
}

export const SUPPORT_PATHS = [
  '/support/faqs',
  '/support/terms',
  '/support/privacy',
] as const

export function isSupportPath(pathname: string): boolean {
  return (
    pathname === '/support' ||
    pathname.startsWith('/support/') ||
    (SUPPORT_PATHS as readonly string[]).includes(pathname)
  )
}

export const BOOK_NOW_HREF = '/book'

/** Routes where the header floats transparently over a dark hero (like Home, About, Destinations, Corporate, Vehicles, Contact, Support, Services). */
export const OVERLAY_HEADER_PATHS = [
  '/',
  '/about',
  '/destinations',
  '/vehicles',
  '/corporate',
  '/contact',
  '/support',
  '/services',
] as const

export function isOverlayHeaderPath(pathname: string): boolean {
  return (OVERLAY_HEADER_PATHS as readonly string[]).some(
    (path) => pathname === path || (path !== '/' && pathname.startsWith(`${path}/`)),
  )
}

