'use client'

import { VEHICLE_AMENITIES } from '@/data/vehicles'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'

export default function VehicleAmenitiesSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-12 sm:pb-16 lg:pb-18">
      <div className="page-width">
        <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          {/* Card Title */}
          <div className="text-center">
            <h2 className="m-0 text-2xl font-bold tracking-tight text-ink sm:text-[28px] lg:text-[32px]">
              Always Travel in Comfort
            </h2>
            <div className="mx-auto mt-2.5 h-[2px] w-10 rounded-full bg-gold" />
          </div>

          {/* 6 Amenity Features Row with Dividers */}
          <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0 sm:mt-10">
            {VEHICLE_AMENITIES.map((amenity, idx) => {
              const isNotLast = idx < VEHICLE_AMENITIES.length - 1
              return (
                <div
                  key={amenity.id}
                  className={cn(
                    'relative flex flex-col items-center px-3 text-center sm:px-4',
                  )}
                >
                  {/* Icon */}
                  <span className="flex size-11 items-center justify-center text-ink">
                    <Icon name={amenity.icon} size={28} />
                  </span>

                  {/* Title */}
                  <span className="mt-2 text-xs font-semibold leading-snug text-ink sm:text-[13px]">
                    {amenity.title}
                  </span>

                  {/* 1px Vertical Divider between columns on desktop */}
                  {isNotLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 w-[1px] bg-black/[0.08] lg:block"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
