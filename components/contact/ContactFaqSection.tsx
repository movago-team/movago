'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SUPPORT_FAQS_COL1, SUPPORT_FAQS_COL2, SupportFaqItem } from '@/data/contact'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: SupportFaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E2DC] bg-white transition-colors hover:border-gold/50 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer border-0 bg-transparent"
      >
        <span className="font-sans text-sm sm:text-[15px] font-bold text-[#111311] leading-snug">
          {item.question}
        </span>
        <span
          className={cn(
            'flex size-6 shrink-0 items-center justify-center text-[#777a72] transition-transform duration-200',
            isOpen && 'rotate-180 text-gold',
          )}
        >
          <Icon name="chevron-down" size={16} />
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-0">
          <p className="m-0 text-xs sm:text-[13.5px] leading-relaxed text-[#666860] border-t border-black/6 pt-3.5">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function ContactFaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-cancel': true,
  })

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="bg-[#F8F5EF] py-10 sm:py-14 lg:py-16">
      <div className="page-width">
        {/* Top Header Row with View All FAQs button */}
        <div className="mb-7 sm:mb-9 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className={cn('text-xs font-bold uppercase tracking-[0.10em]', textGold)}>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl font-bold leading-tight text-[#111311] sm:text-3xl lg:text-[34px]">
              Quick Answers to Common Questions
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-[#D5D2CA] bg-white px-4 py-2 text-xs font-bold text-[#111311] transition-all hover:border-gold hover:text-gold no-underline shadow-sm"
          >
            <span>View All FAQs</span>
            <Icon name="arrow-right" size={13} />
          </Link>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2">
          {/* Column 1 */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {SUPPORT_FAQS_COL1.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={Boolean(openIds[item.id])}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {SUPPORT_FAQS_COL2.map((item) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={Boolean(openIds[item.id])}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
