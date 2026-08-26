'use client'

import {
  BookingSection,
  CorporateSection,
  HeroSection,
  RouteSection,
  VehicleSection,
  WhySection,
} from '@/components/home'

export default function HomePage() {
  const handleSelectVehicle = () => {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <main>
      <HeroSection />
      <BookingSection />
      <WhySection />
      <VehicleSection onSelect={handleSelectVehicle} />
      <RouteSection />
      <CorporateSection />
    </main>
  )
}
