'use client'

import CorporateHero from './CorporateHero'
import CorporateBenefitsSection from './CorporateBenefitsSection'
import CorporateSolutionsSection from './CorporateSolutionsSection'
import CorporateClientsSection from './CorporateClientsSection'
import CorporateCtaSection from './CorporateCtaSection'

export default function CorporateContent() {
  return (
    <>
      <CorporateHero />
      <CorporateBenefitsSection />
      <CorporateSolutionsSection />
      <CorporateClientsSection />
      <CorporateCtaSection />
    </>
  )
}
