'use client'

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
  return (
    <aside className="lg:sticky lg:top-24 space-y-5">
      {/* Navigation Card */}
      <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <h3 className="m-0 font-sans text-lg font-medium text-gold pb-3 mb-3 border-b border-[#F0ECE4] leading-7">
          Policy Contents
        </h3>

        <nav aria-label="Privacy sections" className="space-y-1 max-h-[520px] overflow-y-auto pr-1">
          {sections.map((section) => {
            const isActive = activeSectionId === section.id
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSectionClick(section.id)}
                className={cn(
                  'flex w-full items-center gap-2.5 px-3 py-2 rounded-xl text-left font-sans text-sm sm:text-[14.5px] transition-all cursor-pointer border-0',
                  isActive
                    ? 'bg-[#FAF5ED] font-medium text-[#A37C44] border-l-4 border-solid border-gold shadow-sm'
                    : 'bg-transparent text-[#555850] hover:bg-[#FAF8F5] hover:text-[#111311]',
                )}
              >
                <span className="shrink-0 text-xs font-semibold text-[#8C8F86]">
                  {section.number}.
                </span>
                <span className="truncate">{section.title}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Commitment Card */}
      <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex items-center gap-3.5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/25">
          <Icon name="shield-check" size={20} />
        </span>
        <p className="m-0 font-sans text-xs sm:text-[13px] text-[#666860] leading-relaxed">
          We respect your privacy and are committed to keeping your information safe and secure.
        </p>
      </div>
    </aside>
  )
}
