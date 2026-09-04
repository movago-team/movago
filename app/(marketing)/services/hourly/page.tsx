import type { Metadata } from 'next'
import { HourlyContent } from '@/components/services/hourly'

export const metadata: Metadata = {
  title: 'Hourly Chauffeur Service — MOVAGO Luxury Chauffeur',
  description:
    'Enjoy the freedom of movement with a dedicated professional chauffeur by the hour in Bangkok. Perfect for business meetings, events, shopping, and VIP tours.',
  openGraph: {
    title: 'Hourly Chauffeur Service — MOVAGO Luxury Chauffeur',
    description:
      'Your Time. Your Plan. Your Chauffeur. Transparent hourly rates starting from 2 hours with premium luxury vehicles.',
    url: 'https://movago.co.th/services/hourly',
    siteName: 'MOVAGO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HourlyPage() {
  return <HourlyContent />
}
