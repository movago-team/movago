'use client'

import Link from 'next/link'
import type { PolicySection } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type TermsSidebarProps = {
  sections: PolicySection[]
  activeSectionId: string
  onSectionClick: (id: string) => void
}

export default function TermsSidebar({
  sections,
  activeSectionId,
  onSectionClick,
}: TermsSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-5">
      {/* Navigation Card */}
      <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <h3 className="m-0 font-sans text-lg font-medium text-gold pb-3 mb-3 border-b border-[#F0ECE4]">
          Terms Overview
        </h3>

        <nav aria-label="Terms sections" className="space-y-1 max-h-[520px] overflow-y-auto pr-1">
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

      {/* Need Help Card */}
      <div className="rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
            <Icon name="headset" size={18} />
          </span>
          <h4 className="m-0 font-sans text-base font-medium text-[#111311]">
            Need Help?
          </h4>
        </div>
        <p className="m-0 font-sans text-sm text-[#666860] leading-relaxed">
          If you have any questions about these Terms &amp; Conditions, please contact our support team.
        </p>
        <div className="mt-3.5 pt-3 border-t border-[#F0ECE4]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-hover transition-colors no-underline"
          >
            <span>Contact Support</span>
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </aside>
  )
}
