'use client'

import ContactHero from './ContactHero'
import ContactFormSection from './ContactFormSection'
import ContactManageBookingSection from './ContactManageBookingSection'
import ContactFaqSection from './ContactFaqSection'
import ContactCtaSection from './ContactCtaSection'

export default function ContactContent() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactManageBookingSection />
      <ContactCtaSection />
    </>
  )
}
