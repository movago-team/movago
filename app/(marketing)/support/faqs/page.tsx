import type { Metadata } from 'next'
import { Suspense } from 'react'
import { FaqContent, FaqHero } from '@/components/support/faq'

export const metadata: Metadata = {
  title: 'MOVAGO FAQs | Customer Support',
  description:
    'Find answers about MOVAGO airport transfer, booking, payment and chauffeur services in Bangkok and Thailand.',
}

export default function FaqsPage() {
  return (
    <main>
      <FaqHero />
      <Suspense fallback={<div className="min-h-[400px] bg-[#F8F5EF]" />}>
        <FaqContent />
      </Suspense>
    </main>
  )
}
