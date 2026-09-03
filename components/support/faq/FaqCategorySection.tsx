'use client'

import { FAQ_CATEGORIES } from '@/data/support'
import type { FAQCategory } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

type FaqCategorySectionProps = {
  selectedCategory: string
  onSelectCategory: (id: string) => void
}

export default function FaqCategorySection({
  selectedCategory,
  onSelectCategory,
}: FaqCategorySectionProps) {
  return (
    <section className="pt-16 pb-8">
      <div className="page-width">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <div className={cn('text-xs sm:text-[13px] font-medium tracking-[0.06em] uppercase mb-2', textGold)}>
            BROWSE BY TOPIC
          </div>
          <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#111311] tracking-tight">
            What would you like to know?
          </h2>
        </div>

        {/* 6 Topic Cards Grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {FAQ_CATEGORIES.map((cat: FAQCategory) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  'group flex items-center gap-3 px-3.5 py-3 sm:px-4 sm:py-3.5 lg:px-4 lg:py-4 rounded-2xl text-left transition-all duration-200 cursor-pointer h-[90px] sm:h-[96px] w-full',
                  'bg-white outline-none border-solid transition-all hover:-translate-y-0.5',
                  isActive
                    ? 'shadow-[0_1px_4px_rgba(197,160,115,0.06)]'
                    : 'shadow-none hover:border-[#C5A073]/60 hover:shadow-[0_2px_8px_rgba(197,160,115,0.05)]',
                )}
                style={{
                  borderStyle: 'solid',
                  borderColor: isActive ? '#C5A073' : '#EBE6DC',
                  borderWidth: isActive ? '1.5px' : '1px',
                }}
              >
                {/* Icon on Left (Enlarged) */}
                <span className="shrink-0 text-gold w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
                  <Icon name={cat.icon} size={38} />
                </span>

                {/* Title & Subtitle on Right (Uniform Size & Spacing) */}
                <div className="min-w-0 flex-1">
                  <div className="font-sans text-[14px] sm:text-[15px] font-medium text-[#1A1C1E] leading-snug truncate">
                    {cat.title}
                  </div>
                  <div className="font-sans text-[11.5px] sm:text-xs text-[#6B7280] mt-1 leading-tight truncate">
                    {cat.description}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
