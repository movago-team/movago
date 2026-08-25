'use client'

import { useState } from 'react'
import {
  BookingSection,
  CorporateSection,
  HeroSection,
  RouteSection,
  VehicleSection,
  WhySection,
} from '@/components/home'

export default function HomePage() {
  const [vehicle, setVehicle] = useState('')

  const handleSelectVehicle = (vehicleName: string) => {
    setVehicle(vehicleName)
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <main>
      <HeroSection />
      <BookingSection vehicle={vehicle} onVehicleChange={setVehicle} />
      <WhySection />
      <VehicleSection onSelect={handleSelectVehicle} />
      <RouteSection />
      <CorporateSection />
    </main>
  )
}
