import Image from 'next/image'
import { HOURLY_OCCASIONS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

const OCCASION_ICONS: Record<string, string> = {
  'business-meetings': 'briefcase',
  'events-conferences': 'users',
  'shopping-trips': 'bag',
  'private-tours': 'camera',
  'airport-layovers': 'plane',
  'special-occasions': 'gift',
}

export default function HourlyOccasionSection() {
  return (
    <section className="bg-[#F8F5EF] pt-2 sm:pt-4 lg:pt-5 pb-3 sm:pb-3.5 lg:pb-4">
      <div className="page-width">
        {/* Enclosing Outer Section Frame: Transparent Background with Subtle 1px Light Gray Border matching Our Fleet */}
        <div className="rounded-2xl sm:rounded-3xl border border-solid border-[#E5E1D9] bg-transparent px-3.5 sm:px-4.5 lg:px-5 xl:px-6 py-5 sm:py-6 lg:py-7 xl:py-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
              PERFECT FOR
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
              Ideal for Every Occasion
            </h2>
          </div>

          {/* 6 Image Cards Grid - Single Row on Desktop with Compact Premium Gaps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5">
            {HOURLY_OCCASIONS.map((item) => {
              const iconName = OCCASION_ICONS[item.id] || 'car'
              return (
                <div
                  key={item.id}
                  className="group relative h-[260px] sm:h-[280px] lg:h-[290px] xl:h-[305px] w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Base tint & Dark Bottom Gradient for maximum legibility */}
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-50% to-transparent" />

                  {/* Card Content at bottom with exact identical alignment across all cards */}
                  <div className="absolute inset-x-0 bottom-0 h-[125px] sm:h-[132px] p-3 sm:p-3.5 text-white flex flex-col justify-between">
                    {/* 1. Icon Container - Fixed Top Position */}
                    <div className="text-[#F3CA8A] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                      <Icon name={iconName} size={28} />
                    </div>

                    {/* 2. Text Content Block - Exact Same Baseline */}
                    <div className="flex flex-col gap-1">
                      <h3 className="m-0 font-sans text-[13px] sm:text-[13.5px] font-bold tracking-tight text-white leading-tight group-hover:text-[#F3CA8A] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,1)] truncate">
                        {item.title}
                      </h3>
                      <p className="m-0 text-[10.5px] sm:text-[11px] text-[#E5E7EB] font-normal leading-snug line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] h-[30px] sm:h-[32px] flex items-start">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Feature Line */}
          <div className="mt-6 sm:mt-7 text-center text-xs sm:text-[13px] font-medium text-[#7A7E75] flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
            <span className="text-gold">✦</span>
            <span>Minimum booking 2 hours</span>
            <span className="text-[#C5A073]/40">•</span>
            <span>Extended hours available</span>
            <span className="text-[#C5A073]/40">•</span>
            <span>Overnight service available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
