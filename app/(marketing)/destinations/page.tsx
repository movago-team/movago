import type { Metadata } from 'next'
import { DestinationsContent } from '@/components/destinations'

export const metadata: Metadata = {
  title: 'Destinations — MOVAGO Executive Airport Transfer & Chauffeur',
  description:
    'Discover premium airport and intercity transfers to Thailand’s top destinations: Pattaya, Hua Hin, Khao Yai, Chiang Mai, Phuket, and Ayutthaya with MOVAGO executive chauffeur service.',
  openGraph: {
    title: 'Destinations — MOVAGO Executive Airport Transfer & Chauffeur',
    description:
      'Explore luxury chauffeur-driven transfers to Thailand’s leading resorts, business hubs, and coastal retreats.',
    url: 'https://movago.com/destinations',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function DestinationsPage() {
  return <DestinationsContent />
}
