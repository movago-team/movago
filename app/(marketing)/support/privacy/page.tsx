import type { Metadata } from 'next'
import { PrivacyContent, PrivacyHero } from '@/components/support/privacy'

export const metadata: Metadata = {
  title: 'MOVAGO Privacy Policy | Customer Support',
  description:
    'Learn how MOVAGO collects, protects, and handles personal data with enterprise security for executive chauffeur and airport transfers in Thailand.',
}

export default function PrivacyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
