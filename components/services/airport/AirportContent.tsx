import AirportHero from './AirportHero'
import AirportBookingWidget from './AirportBookingWidget'
import AirportHowItWorks from './AirportHowItWorks'
import AirportBenefitsSection from './AirportBenefitsSection'
import AirportFleetSection from './AirportFleetSection'
import AirportRoutesSection from './AirportRoutesSection'
import AirportCTASection from './AirportCTASection'

export default function AirportContent() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* 1. Dark Cinematic Hero */}
      <AirportHero />

      {/* 2. Overlapping Booking Widget */}
      <AirportBookingWidget />

      {/* 3. How It Works (3 Steps) */}
      <AirportHowItWorks />

      {/* 4. Why Choose MOVAGO (Benefits) */}
      <AirportBenefitsSection />

      {/* 5. Our Fleet */}
      <AirportFleetSection />

      {/* 6. Popular Airport Routes */}
      <AirportRoutesSection />

      {/* 7. Call To Action Banner */}
      <AirportCTASection />
    </main>
  )
}
