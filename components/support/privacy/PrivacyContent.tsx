'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PRIVACY_SECTIONS } from '@/data/support'
import Icon from '@/ui/icon'
import PrivacyContentSection from './PrivacyContentSection'
import PrivacySidebar from './PrivacySidebar'

export default function PrivacyContent() {
  const [activeSectionId, setActiveSectionId] = useState<string>(PRIVACY_SECTIONS[0]?.id || '')

  const currentSection =
    PRIVACY_SECTIONS.find((s) => s.id === activeSectionId) || PRIVACY_SECTIONS[0]

  const handleSectionClick = (id: string) => {
    setActiveSectionId(id)
    const el = document.getElementById('policy-main-content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[#F8F5EF] py-6 sm:py-10 lg:py-16">
      <div className="page-width space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left Column (4 cols on lg): Sticky Sidebar */}
          <div className="lg:col-span-4 xl:col-span-4">
            <PrivacySidebar
              sections={PRIVACY_SECTIONS}
              activeSectionId={activeSectionId}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Right Column (8 cols on lg): Active Policy Section (Natural Dynamic Height) */}
          <div id="policy-main-content" className="lg:col-span-8 xl:col-span-8 scroll-mt-28">
            <PrivacyContentSection
              section={currentSection}
              allSections={PRIVACY_SECTIONS}
              onNavigate={handleSectionClick}
            />
          </div>
        </div>

        {/* Bottom Trust & Contact Banner - Responsive Flex/Grid (No Overflow) */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD] bg-white p-5 sm:p-7 lg:py-7 lg:px-8 shadow-none grid grid-cols-1 lg:grid-cols-12 items-center gap-5 sm:gap-6 lg:gap-0">
          {/* Left Content */}
          <div className="lg:col-span-6 flex items-start sm:items-center gap-3.5 sm:gap-5 min-w-0 pr-0 lg:pr-6">
            <span className="flex size-11 sm:size-14 shrink-0 items-center justify-center rounded-full bg-[#111311] text-gold border border-gold/30 mt-0.5 sm:mt-0">
              <Icon name="shield-check" size={24} />
            </span>
            <div className="min-w-0">
              <h3 className="m-0 font-sans text-base sm:text-lg lg:text-xl font-medium text-[#111311] tracking-tight">
                Your trust is important to us.
              </h3>
              <p className="m-0 mt-1 font-sans text-xs sm:text-sm text-[#555850] leading-relaxed">
                We are committed to protecting your personal information and being transparent about how we use it.
              </p>
            </div>
          </div>

          {/* Right Action Area */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-10 pl-0 lg:pl-6 border-t lg:border-t-0 border-[#F0ECE4] pt-4 lg:pt-0">
            {/* Center Vertical Divider (Desktop Only) */}
            <div aria-hidden className="hidden lg:block w-[1px] h-12 bg-[#E5DFD5] shrink-0" />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm sm:text-base font-medium text-black shadow-none transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
                <Icon name="send" size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#555850] hover:text-gold transition-colors no-underline leading-snug"
              >
                <span>Learn more about our commitment to privacy.</span>
                <span className="shrink-0 text-[#8C8F86]">
                  <Icon name="chevron-right" size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
