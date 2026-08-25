export type FooterLink = {
  label: string
  href: string
}

export type FooterSocialLink = {
  label: string
  href: string
  icon: string
  symbol?: string
}

export const FOOTER_BRAND = {
  name: 'MOVAGO',
  tagline: 'EXECUTIVE AIRPORT TRANSFER',
  description:
    'Premium airport transfer and chauffeur service in Thailand. Experience the journey beyond expectation.',
} as const

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Line', href: 'https://line.me', icon: 'line' },
]

export const FOOTER_SERVICE_LINKS: FooterLink[] = [
  { label: 'Airport Transfer', href: '/services' },
  { label: 'Hourly Service', href: '/services' },
  { label: 'Intercity Transfer', href: '/services' },
  { label: 'Corporate Solutions', href: '/corporate' },
]

export const FOOTER_INFO_LINKS: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Vehicles', href: '/vehicles' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'FAQs', href: '/about' },
  { label: 'Terms & Conditions', href: '/about' },
]

export const FOOTER_SUPPORT_LINKS: FooterLink[] = [
  { label: 'Contact Us', href: 'mailto:hello@movago.co.th' },
  { label: 'Customer Support', href: '/about' },
  { label: 'Privacy Policy', href: '/about' },
]

export const FOOTER_CONTACT = {
  phoneDisplay: '+66 2 026 4699',
  phoneHref: 'tel:+6620264699',
  email: 'hello@movago.co.th',
  emailHref: 'mailto:hello@movago.co.th',
} as const
