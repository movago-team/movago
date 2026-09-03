import type { Metadata } from 'next'
import { AirportContent } from '@/components/services/airport'

export const metadata: Metadata = {
  title: 'Airport Transfer — MOVAGO Executive Chauffeur Service',
  description:
    'Enjoy a smooth, comfortable, and reliable airport transfer experience with professional chauffeurs and premium electric vehicles in Bangkok and Thailand.',
  openGraph: {
    title: 'Airport Transfer — MOVAGO Executive Chauffeur Service',
    description:
      'Fixed prices, flight tracking, meet & greet, and 24/7 support for Suvarnabhumi (BKK) and Don Mueang (DMK) airports.',
    url: 'https://movago.co.th/services/airport-transfer',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AirportTransferPage() {
  return <AirportContent />
}
