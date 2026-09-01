import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Us — MOVAGO Executive Airport Transfer & VIP Concierge',
  description:
    'Connect with MOVAGO executive concierge for private airport transfers, chauffeur reservations, corporate accounts, and 24/7 VIP mobility support in Bangkok and Thailand.',
  openGraph: {
    title: 'Contact Us — MOVAGO Executive Airport Transfer & VIP Concierge',
    description:
      'Connect with MOVAGO executive concierge for private airport transfers, chauffeur reservations, corporate accounts, and 24/7 VIP mobility support in Bangkok and Thailand.',
    url: 'https://movago.com/contact',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
