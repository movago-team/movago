import type { Metadata } from 'next'
import { CorporateContent } from '@/components/corporate'

export const metadata: Metadata = {
  title: 'Corporate Mobility Solutions — MOVAGO Executive Chauffeur & Transfers',
  description:
    'Reliable, professional, and seamless corporate mobility solutions for executives, clients, and organizations. Premium fleet, dedicated account management, and centralized billing.',
  openGraph: {
    title: 'Corporate Mobility Solutions — MOVAGO Executive Chauffeur & Transfers',
    description:
      'Reliable, professional, and seamless corporate transportation for your executives, clients, and teams.',
    url: 'https://movago.com/corporate',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CorporatePage() {
  return <CorporateContent />
}
