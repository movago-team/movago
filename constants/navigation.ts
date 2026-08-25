export type NavLink = {
  label: string
  href: string
}

export const SERVICES_SUBMENU: NavLink[] = [
  { label: 'Airport Transfer', href: '/services#airport' },
  { label: 'Hourly Service', href: '/services#hourly' },
  { label: 'Intercity Transfer', href: '/services#intercity' },
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

export const BOOK_NOW_HREF = '/book'
