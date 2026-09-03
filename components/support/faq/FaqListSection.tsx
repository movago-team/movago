'use client'

import { useState } from 'react'
import type { FAQItem } from '@/types/support'
import Icon from '@/ui/icon'

type FaqListSectionProps = {
  items: FAQItem[]
  categoryTitle: string
}

export default function FaqListSection({ items, categoryTitle }: FaqListSectionProps) {
  // Store set of open FAQ item IDs - default first open matching reference
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([items[0]?.id || '']))

  const allOpen = items.length > 0 && openIds.size === items.length

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const toggleAll = () => {
    if (allOpen) {
      setOpenIds(new Set())
    } else {
      setOpenIds(new Set(items.map((i) => i.id)))
    }
  }

  return (
    <section className="pt-2 pb-6">
      <div className="page-width">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-1">
          <div className="text-xs sm:text-[13px] font-medium tracking-[0.06em] uppercase text-[#C5A073]">
            {categoryTitle}
          </div>

          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-[#4A4E54] hover:text-[#C5A073] transition-colors cursor-pointer bg-transparent border-0 p-1"
          >
            <span>{allOpen ? 'Collapse All' : 'Expand All'}</span>
            <svg
              width={15}
              height={15}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              aria-hidden="true"
            >
              {allOpen ? (
                <>
                  <path d="M4 14h6v6" />
                  <path d="M20 10h-6V4" />
                  <path d="M14 10l7-7" />
                  <path d="M3 21l7-7" />
                </>
              ) : (
                <>
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="rounded-2xl border border-[#EBE6DC] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#F6F5F2] text-[#C5A073] mb-4">
              <Icon name="help-circle" size={28} />
            </span>
            <h3 className="m-0 font-sans text-lg font-medium text-[#111311]">No questions found</h3>
            <p className="m-0 mt-1 text-sm text-[#767870]">
              Try adjusting your search terms or browse another category.
            </p>
          </div>
        ) : (
          /* Unified Single Container Card Matching Reference Image 2 */
          <div className="rounded-2xl border border-[#EBE6DC] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] divide-y divide-[#F0ECE4] overflow-hidden">
            {items.map((item) => {
              const isOpen = openIds.has(item.id)
              return (
                <div key={item.id} className="transition-colors">
                  {/* Accordion Row Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 sm:px-7 sm:py-5 text-left transition-colors cursor-pointer bg-transparent border-0 outline-none group hover:bg-[#FAF9F6]/50"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      {/* Speech-bubble question icon in gold */}
                      <span className="shrink-0 text-[#C5A073] flex items-center justify-center">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="block shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </span>
                      <span className="font-sans text-[15px] sm:text-[15.5px] font-medium text-[#1A1C1E] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <span className="text-[#111311] shrink-0 ml-2">
                      <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={18} />
                    </span>
                  </button>

                  {/* Accordion Content in indented soft container matching Reference 2 */}
                  {isOpen && (
                    <div className="pb-5 sm:pb-6 pl-[44px] sm:pl-[54px] pr-6 sm:pr-7">
                      <div className="rounded-xl bg-[#F6F5F2] p-4 sm:p-5 text-[14px] sm:text-[14.5px] font-sans text-[#4A4E54] leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
