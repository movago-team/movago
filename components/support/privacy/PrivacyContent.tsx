'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PRIVACY_SECTIONS } from '@/data/support'
import Icon from '@/ui/icon'
import PrivacyContentSection from './PrivacyContentSection'
import PrivacySidebar from './PrivacySidebar'

export default function PrivacyContent() {
  const [activeSectionId, setActiveSectionId] = useState<string>(PRIVACY_SECTIONS[0]?.id || '')

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

    PRIVACY_SECTIONS.forEach((section) => {
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
      <div className="page-width space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (4 cols): Sticky Sidebar */}
          <div className="lg:col-span-4">
            <PrivacySidebar
              sections={PRIVACY_SECTIONS}
              activeSectionId={activeSectionId}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Right Column (8 cols): Policy Article */}
          <div className="lg:col-span-8">
            <PrivacyContentSection sections={PRIVACY_SECTIONS} />
          </div>
        </div>

        {/* Bottom Trust & Contact Banner - 50/50 Grid (No Shadow on Box or Text) */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD] bg-white p-6 sm:p-7 lg:py-7 lg:px-8 shadow-none grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
          {/* Left Content (50%) */}
          <div className="lg:col-span-6 flex items-center gap-5 sm:gap-6 min-w-0 pr-0 lg:pr-6">
            <span className="flex size-14 sm:size-[60px] shrink-0 items-center justify-center rounded-full bg-[#111311] text-gold border border-gold/30">
              <Icon name="shield-check" size={26} />
            </span>
            <div className="min-w-0">
              <h3 className="m-0 font-sans text-lg sm:text-xl font-medium text-[#111311] tracking-tight [text-shadow:none]">
                Your trust is important to us.
              </h3>
              <p className="m-0 mt-1 font-sans text-xs sm:text-sm text-[#555850] leading-relaxed [text-shadow:none]">
                We are committed to protecting your personal information and being transparent about how we use it.
              </p>
            </div>
          </div>

          {/* Right Action Area (50%) - Divider at center, actions shifted further right */}
          <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap items-center gap-8 lg:gap-14 xl:gap-16 pl-0 lg:pl-6">
            {/* Center Vertical Divider */}
            <div aria-hidden className="hidden lg:block w-[1px] h-12 bg-[#E5DFD5] shrink-0" />

            <div className="flex items-center gap-5 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-gold px-6 text-sm sm:text-base font-medium text-black shadow-none [text-shadow:none] transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline whitespace-nowrap"
              >
                <span>Contact Us</span>
                <Icon name="send" size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#555850] hover:text-gold transition-colors no-underline whitespace-nowrap leading-snug [text-shadow:none]"
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
