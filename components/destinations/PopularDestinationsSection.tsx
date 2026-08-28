'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { DESTINATION_CATEGORIES, destinations } from '@/data/destinations'
import { DestinationCategory } from '@/types/destination'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

interface PopularDestinationsSectionProps {
  selectedTarget?: string
}

export default function PopularDestinationsSection({
  selectedTarget = 'all',
}: PopularDestinationsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('all')

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      // If a specific target was searched via the hero panel and it's not 'all'
      if (selectedTarget && selectedTarget !== 'all') {
        if (dest.id !== selectedTarget) {
          return false
        }
      }

      if (activeCategory === 'all') return true
      return dest.category === activeCategory
    })
  }, [activeCategory, selectedTarget])

  return (
    <section className="bg-[#f8f5ef] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8" id="popular-destinations">
      <div className="page-width">
        {/* Section Header with Category Filters */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">POPULAR DESTINATIONS</div>
            <h2 className="m-0 text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[clamp(30px,2.8vw,40px)]">
              Explore Our Top Destinations
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 max-md:overflow-x-auto max-md:pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2.5">
            {DESTINATION_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 cursor-pointer sm:px-5 sm:py-2.5 sm:text-sm',
                    isActive
                      ? 'border border-gold bg-[#0e0f10] text-gold shadow-md font-semibold'
                      : 'border border-black/10 bg-white text-[#555] hover:border-black/25 hover:text-ink',
                  )}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white p-12 text-center shadow-sm">
            <p className="text-base text-muted">No destinations found for this selection.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="mt-3 text-sm font-semibold text-gold underline hover:text-gold-hover cursor-pointer"
            >
              Show all destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                {/* Destination Photo (Clean, unobstructed) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e5e0d8]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-5.5">
                  {/* Title & Subtitle */}
                  <h3 className="m-0 text-xl font-bold tracking-tight text-ink sm:text-[22px]">
                    {dest.name}
                  </h3>
                  <p className="m-0 mt-0.5 text-xs text-[#777] sm:text-[13px]">
                    {dest.subtitle}
                  </p>

                  {/* Metadata Row: Duration & Starting Point */}
                  <div className="mt-2.5 flex items-center gap-3.5 text-xs text-[#666] sm:text-[12.5px]">
                    <div className="flex items-center gap-1.5">
                      <span className={cn('shrink-0', textGold)}>
                        <Icon name="clock" size={13} />
                      </span>
                      <span>{dest.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={cn('shrink-0', textGold)}>
                        <Icon name="pin" size={13} />
                      </span>
                      <span>{dest.startingPoint}</span>
                    </div>
                  </div>

                  {/* Dual Vehicle Pricing: ZEEKR 7X vs ZEEKR 009 (Tightened spacing under metadata) */}
                  <div className="mt-2.5 grid grid-cols-2 gap-3">
                    {/* ZEEKR 7X Column */}
                    <div>
                      <span className="block text-[11px] font-bold tracking-wider text-ink uppercase">
                        ZEEKR 7X
                      </span>
                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-lg font-bold text-ink sm:text-[19px]">
                          {dest.priceZeekr7X}
                        </span>
                        <span className="text-[11px] font-medium text-[#777]">
                          THB{dest.hasAsterisk ? '*' : ''}
                        </span>
                      </div>
                    </div>

                    {/* ZEEKR 009 Column */}
                    <div>
                      <span className="block text-[11px] font-bold tracking-wider text-ink uppercase">
                        ZEEKR 009
                      </span>
                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-lg font-bold text-ink sm:text-[19px]">
                          {dest.priceZeekr009}
                        </span>
                        <span className="text-[11px] font-medium text-[#777]">
                          THB{dest.hasAsterisk ? '*' : ''}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-auto pt-3.5">
                    <Link
                      href={`/book?destination=${dest.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-all duration-200 hover:text-gold-hover group-hover:gap-2 sm:text-[13px]"
                    >
                      <span>View Details</span>
                      <Icon name="arrow-right" size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Airport Pickup Note */}
        <p className="mt-6 text-center text-xs text-[#777] sm:mt-7 sm:text-[13px]">
          *Airport pickup included. Prices may vary depending on time, traffic and additional stops.
        </p>
      </div>
    </section>
  )
}
