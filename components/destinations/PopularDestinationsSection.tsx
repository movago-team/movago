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
    <section className="bg-[#f8f5ef] pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8" id="popular-destinations">
      <div className="page-width">
        {/* Section Header with Category Filters */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">POPULAR DESTINATIONS</div>
            <h2 className="m-0 text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[clamp(30px,2.8vw,40px)]">
              Explore Our Top Destinations
            </h2>
          </div>

          {/* Category Filters (Mobile: 2x2 Grid, Desktop: Single Horizontal Row) */}
          <div className="grid w-full grid-cols-2 gap-2 md:flex md:w-auto md:flex-nowrap md:items-center md:gap-2.5">
            {DESTINATION_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-medium leading-none transition-all duration-200 cursor-pointer sm:gap-2 sm:px-4 sm:text-[13px] md:w-auto md:shrink-0',
                    isActive
                      ? 'border border-gold bg-[#0e0f10] text-gold shadow-md font-semibold [&_svg]:text-gold'
                      : 'border border-black/10 bg-white text-[#555] hover:border-black/25 hover:text-ink hover:bg-[#faf8f5] [&_svg]:text-[#888] hover:[&_svg]:text-ink',
                  )}
                >
                  {cat.icon && (
                    <span className="flex size-4 shrink-0 items-center justify-center translate-y-[0.5px]">
                      <Icon name={cat.icon} size={14} />
                    </span>
                  )}
                  <span className="inline-block leading-none truncate">{cat.label}</span>
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
                {/* Destination Photo with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e5e0d8]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Pill (Top Left) */}
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-white uppercase backdrop-blur-md">
                    {dest.categoryLabel}
                  </span>

                  {/* Popular Pill (Top Right) */}
                  {dest.isPopular && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#E5C198] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#3a2810] uppercase shadow-xs">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-5.5">
                  {/* Title & Subtitle */}
                  <h3 className="m-0 text-lg font-bold tracking-tight text-ink sm:text-[19px]">
                    {dest.name}
                  </h3>
                  <p className="m-0 mt-0.5 text-xs text-[#777] line-clamp-1 sm:text-[12.5px]">
                    {dest.subtitle}
                  </p>

                  {/* Trip Specs Box (Ivory Container) */}
                  <div className="mt-3.5 space-y-1.5 rounded-xl bg-[#FAF7F2] p-3 text-[11.5px] text-[#555] sm:text-xs">
                    {/* Row 1: Origin */}
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-[#9C8265]">
                        <Icon name="pin" size={13} />
                      </span>
                      <span className="truncate">{dest.originDetail || dest.startingPoint}</span>
                    </div>

                    {/* Row 2: Duration */}
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-[#9C8265]">
                        <Icon name="clock" size={13} />
                      </span>
                      <span>{dest.durationDetail || dest.duration}</span>
                    </div>

                    {/* Row 3: Available Vehicles */}
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-[#9C8265]">
                        <Icon name="car" size={13} />
                      </span>
                      <span className="truncate">{dest.vehiclesDetail || 'Sedan, Luxury Van, SUV'}</span>
                    </div>
                  </div>

                  {/* Footer Row: Starting From Price & View Details Black Pill Button */}
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    {/* Starting Price */}
                    <div>
                      <span className="block text-[9.5px] font-semibold tracking-wider text-[#888] uppercase">
                        STARTING FROM
                      </span>
                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-lg font-bold text-ink sm:text-xl">
                          ฿{dest.startingPrice}
                        </span>
                        <span className="text-[10.5px] font-medium text-[#777]">
                          THB
                        </span>
                      </div>
                    </div>

                    {/* View Details Soft Light Gold Pill Button */}
                    <Link
                      href={`/book?destination=${dest.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#E5C198] px-4 py-2 text-xs font-bold text-[#2c1e0f] shadow-[0_2px_10px_rgba(229,193,152,0.35)] transition-all duration-200 hover:bg-[#d9b386] hover:scale-[1.02] active:scale-95"
                    >
                      <span>View Details</span>
                      <Icon name="arrow-right" size={12} />
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
