'use client'

import { useState, useRef, useEffect } from 'react'
import type { PolicySection } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type PrivacySidebarProps = {
  sections: PolicySection[]
  activeSectionId: string
  onSectionClick: (id: string) => void
}

export default function PrivacySidebar({
  sections,
  activeSectionId,
  onSectionClick,
}: PrivacySidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const activeSection =
    sections.find((s) => s.id === activeSectionId) || sections[0]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSelect = (id: string) => {
    onSectionClick(id)
    setIsOpen(false)
  }

  return (
    <div className="w-full">
      {/* Mobile Custom Luxury Section Selector (< lg) */}
      <div className="lg:hidden relative" ref={dropdownRef}>
        <div className="rounded-2xl border border-[#D5CDBD] bg-white p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
              Policy Section
            </span>
            <span className="text-[11px] font-medium text-[#8C8F86] bg-[#F5F2EC] px-2 py-0.5 rounded-full">
              {activeSection.number} of {sections.length}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-[#FAF6F0]/80 py-2.5 px-3.5 text-left transition-all hover:border-gold hover:bg-[#FAF6F0] focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-gold text-black text-xs font-bold font-sans">
                {activeSection.number}
              </span>
              <span className="truncate font-sans text-sm font-semibold text-[#111311]">
                {activeSection.title}
              </span>
            </div>
            <span
              className={cn(
                'text-[#8C8F86] transition-transform duration-200 shrink-0',
                isOpen && 'rotate-180 text-gold',
              )}
            >
              <Icon name="chevron-down" size={16} />
            </span>
          </button>
        </div>

        {/* Custom Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-30 mt-2 max-h-[340px] overflow-y-auto rounded-2xl border border-[#D5CDBD] bg-white p-2 shadow-[0_12px_36px_rgba(0,0,0,0.12)] space-y-1">
            {sections.map((section) => {
              const isActive = activeSectionId === section.id
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSelect(section.id)}
                  className={cn(
                    'flex w-full items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl text-left font-sans text-sm transition-all cursor-pointer border-0',
                    isActive
                      ? 'bg-[#FAF5ED] font-semibold text-[#A37C44] border-l-4 border-solid border-gold shadow-xs'
                      : 'bg-transparent text-[#555850] hover:bg-[#FAF8F5] hover:text-[#111311]',
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={cn(
                        'shrink-0 text-xs font-semibold',
                        isActive ? 'text-[#A37C44]' : 'text-[#8C8F86]',
                      )}
                    >
                      {section.number}.
                    </span>
                    <span className="truncate">{section.title}</span>
                  </div>
                  {isActive && (
                    <span className="text-gold shrink-0">
                      <Icon name="check" size={15} />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (>= lg) */}
      <aside className="hidden lg:block lg:sticky lg:top-28 space-y-5">
        {/* Navigation Card */}
        <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 xl:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0ECE4]">
            <h3 className="m-0 font-sans text-lg font-medium text-gold leading-7">
              Policy Contents
            </h3>
            <span className="text-xs font-medium text-[#8C8F86] bg-[#F5F2EC] px-2.5 py-0.5 rounded-full">
              {sections.length} Sections
            </span>
          </div>

          <nav aria-label="Privacy sections" className="space-y-1">
            {sections.map((section) => {
              const isActive = activeSectionId === section.id
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSectionClick(section.id)}
                  className={cn(
                    'flex w-full items-center gap-2.5 px-3 py-2 rounded-xl text-left font-sans text-sm transition-all cursor-pointer border-0',
                    isActive
                      ? 'bg-[#FAF5ED] font-semibold text-[#A37C44] border-l-4 border-solid border-gold shadow-xs'
                      : 'bg-transparent text-[#555850] hover:bg-[#FAF8F5] hover:text-[#111311]',
                  )}
                >
                  <span
                    className={cn(
                      'shrink-0 text-xs font-semibold',
                      isActive ? 'text-[#A37C44]' : 'text-[#8C8F86]',
                    )}
                  >
                    {section.number}.
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Existing Privacy Commitment Card */}
        <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 xl:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex items-start gap-3.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/25 mt-0.5">
            <Icon name="shield-check" size={20} />
          </span>
          <p className="m-0 font-sans text-xs sm:text-[13px] text-[#666860] leading-relaxed">
            We respect your privacy and are committed to keeping your information safe and secure.
          </p>
        </div>
      </aside>
    </div>
  )
}

