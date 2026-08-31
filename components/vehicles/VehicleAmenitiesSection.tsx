'use client'

import { VEHICLE_AMENITIES } from '@/data/vehicles'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'

export default function VehicleAmenitiesSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-12 sm:pb-16 lg:pb-18">
      <div className="page-width">
        <div
          style={{ border: '1px solid rgba(197, 160, 115, 0.45)' }}
          className="rounded-2xl border border-solid border-gold/45 bg-white p-6 shadow-[0_10px_35px_rgba(197,160,115,0.06)] sm:p-8 lg:p-10"
        >
          {/* Card Title — Inter font */}
          <div className="text-center">
            <h2 className="m-0 font-sans text-2xl font-bold tracking-tight text-ink sm:text-[28px] lg:text-[32px]">
              Always Travel in Comfort
            </h2>
          </div>

          {/* 6 Amenity Features Row — horizontal layout (icon on left + 2-line text) matching reference */}
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-9 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-0 lg:gap-y-0">
            {VEHICLE_AMENITIES.map((amenity, idx) => {
              const isNotLast = idx < VEHICLE_AMENITIES.length - 1
              return (
                <div
                  key={amenity.id}
                  className="relative flex items-center justify-start gap-2.5 px-3 text-left sm:gap-3 sm:px-3.5 lg:justify-center lg:px-2 xl:px-3"
                >
                  {/* Icon on left */}
                  <span className="flex shrink-0 items-center justify-center text-[#111311]">
                    <Icon name={amenity.icon} size={38} />
                  </span>

                  {/* 2-line text on right */}
                  <div className="text-[12px] font-medium leading-[1.25] text-[#111311] sm:text-[12.5px] xl:text-[13px]">
                    <div>{amenity.line1 || amenity.title}</div>
                    {amenity.line2 && <div>{amenity.line2}</div>}
                  </div>

                  {/* 1px Vertical Divider between columns on desktop — aligned with Complimentary */}
                  {isNotLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1 hidden h-8 w-[1px] bg-black/10 lg:block"
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
