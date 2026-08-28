'use client'

import { useState } from 'react'
import DestinationCtaSection from './DestinationCtaSection'
import DestinationHero from './DestinationHero'
import JourneyBenefitsSection from './JourneyBenefitsSection'
import PopularDestinationsSection from './PopularDestinationsSection'

export default function DestinationsContent() {
  const [selectedTarget, setSelectedTarget] = useState<string>('all')

  const handleSearch = (target: string) => {
    setSelectedTarget(target)
  }

  return (
    <main>
      <DestinationHero onSearch={handleSearch} />
      <PopularDestinationsSection selectedTarget={selectedTarget} />
      <JourneyBenefitsSection />
      <DestinationCtaSection />
    </main>
  )
}
