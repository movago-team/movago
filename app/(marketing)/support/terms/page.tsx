import type { Metadata } from 'next'
import { TermsContent, TermsHero } from '@/components/support/terms'

export const metadata: Metadata = {
  title: 'MOVAGO Terms & Conditions | Customer Support',
  description:
    'Read the MOVAGO Terms & Conditions governing executive airport transfers, hourly chauffeur services, and luxury bookings in Thailand.',
}

export default function TermsPage() {
  return (
    <main>
      <TermsHero />
      <TermsContent />
    </main>
  )
}
