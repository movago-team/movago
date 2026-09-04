'use client'

import { useEffect, useState } from 'react'
import type { FAQItem } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type FaqListSectionProps = {
  items: FAQItem[]
  selectedCategory?: string
}

export default function FaqListSection({ items, selectedCategory }: FaqListSectionProps) {
  // Store single active FAQ item ID - default first item open
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null)

  // When selected category or items change, automatically open first item (or lone item)
  useEffect(() => {
    setOpenId(items[0]?.id || null)
  }, [selectedCategory, items])

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="pt-2 pb-12 sm:pb-16">
      <div className="page-width">
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
          /* Unified Single Container Card with clean accordion items */
          <div className="rounded-2xl border border-[#EBE6DC] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] divide-y divide-[#F0ECE4] overflow-hidden">
            {items.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id} className="transition-colors">
                  {/* Accordion Row Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 sm:px-7 sm:py-5 text-left transition-colors cursor-pointer bg-transparent border-0 outline-none group hover:bg-[#FAF9F6]/60"
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
                      <span className="font-sans text-[14.5px] sm:text-[15.5px] font-medium text-[#1A1C1E] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <span className="text-[#111311] shrink-0 ml-2 transition-transform duration-200">
                      <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={18} />
                    </span>
                  </button>

                  {/* Accordion Content in a styled luxury tinted container */}
                  {isOpen && (
                    <div className="pb-5 sm:pb-6 pl-[48px] sm:pl-[58px] pr-5 sm:pr-7 pt-1">
                      <div className="rounded-xl sm:rounded-2xl border border-gold/25 bg-[#FAF8F5] p-4 sm:p-4.5 text-[14px] sm:text-[14.5px] font-sans text-[#4A4E54] leading-relaxed shadow-xs">
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
