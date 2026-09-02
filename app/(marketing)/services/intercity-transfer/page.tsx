import type { Metadata } from 'next'
import { IntercityContent } from '@/components/services/intercity'

export const metadata: Metadata = {
  title: 'Intercity Transfer — MOVAGO Premium Travel Across Thailand',
  description:
    'Travel in comfort, arrive in style. Enjoy private, reliable intercity transfers between Bangkok, Pattaya, Hua Hin, Khao Yai, Rayong, and Phuket.',
  openGraph: {
    title: 'Intercity Transfer — MOVAGO Premium Travel Across Thailand',
    description:
      'Fixed prices, professional chauffeurs, fuel & tolls included. Experience luxury long-distance travel with MOVAGO.',
    url: 'https://movago.co.th/services/intercity-transfer',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function IntercityTransferPage() {
  return <IntercityContent />
}
