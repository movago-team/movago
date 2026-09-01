'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { VEHICLE_CATEGORIES, vehicles } from '@/data/vehicles'
import { VehicleCategory } from '@/types/vehicle'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { bgGold, textGold } from '@/utils/ui/colors'

export default function VehicleFleetSection() {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('all')

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      if (activeCategory === 'all') return true
      if (activeCategory === 'executive') {
        return v.badge.includes('EXECUTIVE') || v.badge.includes('LOUNGE')
      }
      return v.category === activeCategory
    })
  }, [activeCategory])

  return (
    <section className="bg-[#f8f5ef] pt-14 pb-12 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-18" id="fleet">
      <div className="page-width">
        {/* Section Header */}
        <div className="text-center">
          <div className="eyebrow mx-auto justify-center">OUR FLEET</div>
          <h2 className="m-0 text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[clamp(32px,3vw,42px)]">
            Choose Your Perfect Ride
          </h2>
          <div className="mx-auto mt-3.5 h-[3px] w-12 rounded-full bg-gold" />
        </div>

        {/* Category Filter Controls */}
        <div
          className="mt-8 grid w-full max-w-[680px] grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-4 sm:gap-3 mx-auto"
          role="group"
          aria-label="Filter vehicles by category"
        >
          {VEHICLE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                style={{ border: 'none', outline: 'none' }}
                className={cn(
                  'group inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-0 border-none px-2.5 text-[13px] transition-all duration-200 ease-out sm:gap-2.5 sm:px-3.5 sm:text-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef]',
                  isActive
                    ? cn(bgGold, 'font-semibold text-[#0a0d0e] shadow-[0_4px_14px_rgba(197,160,115,0.25)]')
                    : 'bg-[#ede6d8] font-medium text-[#2b2e28] hover:bg-[#e4dcce] hover:text-[#0a0d0e]',
                )}
              >
                {cat.icon && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex shrink-0 items-center justify-center transition-colors duration-200',
                      isActive ? 'text-[#0a0d0e]' : 'text-[#6e685c] group-hover:text-[#0a0d0e]',
                    )}
                  >
                    <Icon name={cat.icon} size={20} />
                  </span>
                )}
                <span className="whitespace-nowrap">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {filteredVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className={cn(
                'group flex flex-col overflow-hidden rounded-2xl text-white',
                'border border-white/10 bg-[#0d1011]',
                'shadow-[0_16px_40px_rgba(0,0,0,0.25)]',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]',
                'p-5 sm:p-6',
              )}
            >
              {/* Top content */}
              <div className="flex flex-col">
                {/* Category Badge + Vehicle Title */}
                <div>
                  <span className={cn('text-[11px] font-bold uppercase tracking-wider', textGold)}>
                    {vehicle.badge}
                  </span>
                  <h3 className="m-0 mt-1 text-[22px] font-bold tracking-tight text-white sm:text-2xl">
                    {vehicle.name}
                  </h3>
                  <p className="m-0 mt-0.5 text-xs leading-snug text-[#9ea399] sm:text-[13px]">
                    {vehicle.subtitle}
                  </p>
                </div>

                {/* Vehicle Image */}
                <div
                  className={cn(
                    'relative my-2.5 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl sm:my-3 sm:h-56 lg:h-[224px]',
                    'bg-[radial-gradient(ellipse_60%_55%_at_50%_55%,rgba(197,160,115,0.08)_0%,rgba(255,255,255,0.04)_45%,transparent_75%)]',
                  )}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className={cn(
                      'h-full w-full object-contain transition-transform duration-500',
                      vehicle.id === 'toyota-bz4x'
                        ? 'scale-[1.28] group-hover:scale-[1.34]'
                        : 'scale-[1.08] group-hover:scale-[1.14]',
                    )}
                    loading="lazy"
                    draggable={false}
                  />
                  {/* Floor shadow blur */}
                  <div className="pointer-events-none absolute bottom-1.5 left-1/2 h-3.5 w-3/4 -translate-x-1/2 rounded-full bg-black/25 blur-md" />
                </div>

                {/* Feature Grid — 2 columns, equalized height across cards */}
                <div className="grid min-h-[124px] grid-cols-2 gap-x-3 gap-y-2 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 sm:min-h-[128px] sm:p-3.5">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex min-w-0 items-start gap-2">
                      <span
                        className={cn('mt-px shrink-0 leading-none', textGold)}
                        aria-hidden="true"
                      >
                        <Icon name={feature.icon} size={14} />
                      </span>
                      <span className="min-w-0 break-words text-[11.5px] font-medium leading-snug text-[#cdd2c8] sm:text-[12px]">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Short Description — equalized height across cards */}
                <p className="mt-3 min-h-[36px] text-[12px] leading-relaxed text-[#8e9488] sm:min-h-[38px] sm:text-[12.5px]">
                  {vehicle.description}
                </p>
              </div>

              {/* Card Footer: Price + CTA — tightened spacing to description */}
              <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-3.5 sm:mt-4">
                <div>
                  <span className="block text-[10.5px] uppercase tracking-wide text-[#6b7268]">
                    From
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[22px] font-bold leading-tight text-white sm:text-2xl">
                      {vehicle.priceFrom}
                    </span>
                    <span className="text-[11px] font-medium text-[#9ea399]">
                      {vehicle.currency}
                    </span>
                  </div>
                </div>

                <Link
                  href={vehicle.bookHref}
                  className={cn(
                    'inline-flex items-center justify-center rounded-lg',
                    bgGold,
                    'whitespace-nowrap px-4 py-2.5 text-xs font-bold text-black',
                    'shadow-md shadow-gold/20',
                    'transition-all duration-200',
                    'hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/25',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1011]',
                    'sm:px-5 sm:py-3 sm:text-sm',
                  )}
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
