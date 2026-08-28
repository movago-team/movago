'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { VEHICLE_CATEGORIES, vehicles } from '@/data/vehicles'
import { VehicleCategory } from '@/types/vehicle'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

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

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3.5">
          {VEHICLE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer sm:px-6 sm:py-3 sm:text-sm',
                  isActive
                    ? 'bg-gold text-black shadow-md shadow-gold/20 font-bold scale-[1.02]'
                    : 'border border-black/10 bg-white text-[#444] hover:border-black/25 hover:text-black',
                )}
              >
                {cat.icon && <Icon name={cat.icon} size={16} />}
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Vehicle Cards Grid (3 Dark Luxury Cards) */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 sm:mt-12">
          {filteredVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1011] p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)] sm:p-7"
            >
              <div>
                {/* Header: Category Badge & Title */}
                <div>
                  <span className={cn('text-[11px] font-bold tracking-wider uppercase', textGold)}>
                    {vehicle.badge}
                  </span>
                  <h3 className="m-0 mt-1 text-2xl font-bold tracking-tight text-white sm:text-[26px]">
                    {vehicle.name}
                  </h3>
                  <p className="m-0 mt-0.5 text-xs text-[#9ea399] sm:text-[13px]">
                    {vehicle.subtitle}
                  </p>
                </div>

                {/* Vehicle Visual */}
                <div className="relative my-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] sm:h-52">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Spec Features Grid (2 columns x 3 rows) */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 sm:p-4">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={cn('shrink-0', textGold)}>
                        <Icon name={feature.icon} size={15} />
                      </span>
                      <span className="truncate text-xs font-medium text-[#d6dad1] sm:text-[12.5px]">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Short Description */}
                <p className="mt-4 text-xs leading-relaxed text-[#9ea399] sm:text-[13px]">
                  {vehicle.description}
                </p>
              </div>

              {/* Card Footer: Price & CTA Button */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <span className="block text-[11px] text-[#8e9488]">From</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-white sm:text-[26px]">
                      {vehicle.priceFrom}
                    </span>
                    <span className="text-xs font-medium text-[#9ea399]">
                      {vehicle.currency}
                    </span>
                  </div>
                </div>

                <Link
                  href={vehicle.bookHref}
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-5 py-2.5 text-xs font-bold text-black shadow-md shadow-gold/20 transition-all duration-200 hover:bg-gold-hover hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <span>View Details</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
