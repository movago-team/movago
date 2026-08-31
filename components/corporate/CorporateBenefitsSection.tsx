'use client'

import { Icon } from '@/ui'
import { CORPORATE_WHY_CARDS } from '@/data/corporate'
import { textGold } from '@/utils/ui/colors'
import { cn } from '@/utils/cn'

export default function CorporateBenefitsSection() {
  return (
    <section className="bg-[#fbf9f4] py-10 sm:py-12 lg:py-14 border-b border-[#ece6d9]">
      <div className="page-width">
        {/* Section Header — Left-aligned */}
        <div className="text-left mb-7 sm:mb-8">
          <div
            className={cn(
              'font-sans text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase mb-2',
              textGold,
            )}
          >
            WHY BUSINESSES CHOOSE MOVAGO
          </div>
          <h2 className="m-0 font-sans text-[clamp(26px,3vw,38px)] font-bold text-[#111311] leading-tight tracking-tight">
            Elevate Every Business Journey
          </h2>
        </div>

        {/* 5 Feature Cards — Proportional Vertical Cards on all breakpoints */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 xl:gap-5">
          {CORPORATE_WHY_CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex h-full flex-col items-start text-left rounded-2xl border border-solid border-[#e8e1d4] bg-white p-5 sm:py-7 sm:px-5.5 lg:py-8 lg:px-6 shadow-[0_4px_16px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_28px_rgba(197,160,115,0.12)]"
            >
              {/* Circular Icon Badge — Scaled proportionally across mobile, tablet, desktop */}
              <div className="flex size-14 sm:size-16 lg:size-[76px] shrink-0 items-center justify-center rounded-full border border-solid border-[#e6decf] bg-[#faf6ef] text-gold mb-3.5 sm:mb-4 lg:mb-5.5 shadow-[0_3px_10px_rgba(0,0,0,0.04)] transition-transform duration-300 group-hover:scale-105 group-hover:border-gold">
                <span className="block sm:hidden">
                  <Icon name={card.icon} size={26} />
                </span>
                <span className="hidden sm:block lg:hidden">
                  <Icon name={card.icon} size={30} />
                </span>
                <span className="hidden lg:block">
                  <Icon name={card.icon} size={34} />
                </span>
              </div>

              {/* Card Title — Natural height on mobile, baseline-locked on tablet & desktop */}
              <h3 className="m-0 font-sans text-[15.5px] sm:text-[16px] lg:text-[17px] font-bold leading-snug text-[#111311] mb-2 sm:mb-2.5 lg:mb-3 text-left min-h-0 sm:min-h-[46px] lg:min-h-[50px] flex items-start">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="m-0 font-sans text-[12.5px] sm:text-[12.5px] lg:text-[13px] leading-relaxed text-[#5c5f57] text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
