import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStorySection from '@/components/about/AboutStorySection'
import AboutDifferenceSection from '@/components/about/AboutDifferenceSection'
import AboutLeadershipSection from '@/components/about/AboutLeadershipSection'
import AboutCtaSection from '@/components/about/AboutCtaSection'

export const metadata: Metadata = {
  title: 'About Us — MOVAGO Executive Airport Transfer',
  description:
    'Discover MOVAGO: Thailand’s premier executive mobility and private airport transfer service, combining sustainable luxury fleets with elite chauffeur hospitality.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStorySection />
      <AboutDifferenceSection />
      <AboutLeadershipSection />
      <AboutCtaSection />
    </main>
  )
}
