import IntercityHero from './IntercityHero'
import IntercityBookingWidget from './IntercityBookingWidget'
import IntercityRoutesSection from './IntercityRoutesSection'
import IntercityBenefitsSection from './IntercityBenefitsSection'
import IntercityFleetSection from './IntercityFleetSection'
import IntercityIncludedSection from './IntercityIncludedSection'
import IntercityCTASection from './IntercityCTASection'

export default function IntercityContent() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* 1. Dark Cinematic Hero */}
      <IntercityHero />

      {/* 2. Overlapping Booking Widget */}
      <IntercityBookingWidget />

      {/* 3. Popular Intercity Routes */}
      <IntercityRoutesSection />

      {/* 4. Why Choose MOVAGO (Benefits) */}
      <IntercityBenefitsSection />

      {/* 5. Our Fleet */}
      <IntercityFleetSection />

      {/* 6. What's Included */}
      <IntercityIncludedSection />

      {/* 7. Bottom CTA Banner */}
      <IntercityCTASection />
    </main>
  )
}
