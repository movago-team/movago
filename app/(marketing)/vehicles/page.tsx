import type { Metadata } from 'next'
import { VehiclesContent } from '@/components/vehicles'

export const metadata: Metadata = {
  title: 'Our Vehicles — MOVAGO Executive Airport Transfer & Chauffeur',
  description:
    'Explore our fleet of premium executive vehicles: ZEEKR 009 luxury MPV, ZEEKR 7X, and TOYOTA BZ4X electric SUVs for airport and intercity transfers across Thailand.',
  openGraph: {
    title: 'Our Vehicles — MOVAGO Executive Fleet & Luxury Transfers',
    description:
      'Discover Thailand’s premier executive electric vehicle fleet with dedicated professional chauffeurs.',
    url: 'https://movago.com/vehicles',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function VehiclesPage() {
  return <VehiclesContent />
}
