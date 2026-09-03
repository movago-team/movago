'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TERMS_SECTIONS } from '@/data/support'
import Icon from '@/ui/icon'
import TermsContentSection from './TermsContentSection'
import TermsSidebar from './TermsSidebar'

export default function TermsContent() {
  const [activeSectionId, setActiveSectionId] = useState<string>(TERMS_SECTIONS[0]?.id || '')

  const currentSection =
    TERMS_SECTIONS.find((s) => s.id === activeSectionId) || TERMS_SECTIONS[0]

  const handleSectionClick = (id: string) => {
    setActiveSectionId(id)
    const el = document.getElementById('terms-main-content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[#F8F5EF] py-6 sm:py-8 lg:py-10">
      <div className="page-width space-y-4 sm:space-y-5">
        {/* Top Row: Terms Overview (Left) & Active Article Card (Right) - Height Aligned on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch">
          {/* Left Column (4 cols on lg): Terms Overview */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            <TermsSidebar
              sections={TERMS_SECTIONS}
              activeSectionId={activeSectionId}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Right Column (8 cols on lg): Active Terms Section (Matches Left Height) */}
          <div id="terms-main-content" className="lg:col-span-8 xl:col-span-8 scroll-mt-28 flex flex-col">
            <TermsContentSection
              section={currentSection}
              allSections={TERMS_SECTIONS}
              onNavigate={handleSectionClick}
            />
          </div>
        </div>

        {/* Bottom Row: Need Help Support Card (Left) & Booking Acknowledgment (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch">
          {/* Left Column (4 cols on lg): Need Help Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-2xl border border-[#D5CDBD] bg-white p-4 sm:p-4.5 xl:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon name="headset" size={17} />
                  </span>
                  <h4 className="m-0 font-sans text-sm sm:text-base font-semibold text-[#111311]">
                    Need Help?
                  </h4>
                </div>
                <p className="m-0 font-sans text-xs sm:text-sm text-[#666860] leading-relaxed">
                  If you have any questions about these Terms &amp; Conditions, please contact our support team.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#F0ECE4]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-gold-hover transition-colors no-underline"
                >
                  <span>Contact Support</span>
                  <Icon name="arrow-right" size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols on lg): Booking Acknowledgment Banner */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col">
            <div className="h-full rounded-2xl sm:rounded-3xl border border-gold/30 bg-[#FAF6F0] p-4 sm:p-4.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-4 shadow-xs">
              <div className="flex items-start sm:items-center gap-3 min-w-0">
                <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/25 mt-0.5 sm:mt-0">
                  <Icon name="shield-check" size={19} />
                </span>
                <p className="m-0 font-sans text-xs sm:text-sm text-[#222420] font-normal leading-relaxed">
                  By making a booking with MOVAGO, you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.
                </p>
              </div>

              <Link
                href="/book"
                className="w-full sm:w-auto shrink-0 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-xs sm:text-sm font-medium text-black transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline whitespace-nowrap active:scale-95"
              >
                <span>Book Your Journey</span>
                <Icon name="send" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

