'use client'

import { useEffect, useState } from 'react'
import { TERMS_SECTIONS } from '@/data/support'
import TermsContentSection from './TermsContentSection'
import TermsSidebar from './TermsSidebar'

export default function TermsContent() {
  const [activeSectionId, setActiveSectionId] = useState<string>(TERMS_SECTIONS[0]?.id || '')

  // Scroll spy to update active section on page scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      },
    )

    TERMS_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionClick = (id: string) => {
    setActiveSectionId(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[#F8F5EF] py-14 sm:py-16">
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (4 cols): Sticky Sidebar */}
          <div className="lg:col-span-4">
            <TermsSidebar
              sections={TERMS_SECTIONS}
              activeSectionId={activeSectionId}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Right Column (8 cols): Policy Article */}
          <div className="lg:col-span-8">
            <TermsContentSection sections={TERMS_SECTIONS} />
          </div>
        </div>
      </div>
    </div>
  )
}
