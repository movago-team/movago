export type NavLink = {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'About Us', href: '/about' },
]

export const BOOK_NOW_HREF = '/book'
