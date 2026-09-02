import HourlyHero from './HourlyHero'
import HourlyBookingWidget from './HourlyBookingWidget'
import HourlyBenefitsSection from './HourlyBenefitsSection'
import HourlyOccasionSection from './HourlyOccasionSection'
import HourlyFleetSection from './HourlyFleetSection'
import HourlyPackagesSection from './HourlyPackagesSection'
import HourlyCTASection from './HourlyCTASection'

export default function HourlyContent() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* 1. Dark Cinematic Hero */}
      <HourlyHero />

      {/* 2. Overlapping Booking Widget */}
      <HourlyBookingWidget />

      {/* 3. Benefits (Why Choose MOVAGO) */}
      <HourlyBenefitsSection />

      {/* 4. Ideal for Every Occasion */}
      <HourlyOccasionSection />

      {/* 5. Our Fleet */}
      <HourlyFleetSection />

      {/* 6. Flexible Packages */}
      <HourlyPackagesSection />

      {/* 7. Bottom CTA Banner */}
      <HourlyCTASection />
    </main>
  )
}
