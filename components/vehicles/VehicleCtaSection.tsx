'use client'

import Link from 'next/link'
import { CTA_BENEFITS } from '@/data/vehicles'
import { Icon } from '@/ui'
import { BOOK_NOW_HREF } from '@/constants/navigation'

export default function VehicleCtaSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-10 sm:pb-14 lg:pb-16">
      <div className="page-width">
        <div className="relative isolate flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090c0d] shadow-[0_16px_40px_rgba(0,0,0,0.3)] lg:flex-row lg:items-stretch">
          {/* Left: Full-bleed Chauffeur & Executive Passenger Photo */}
          <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-60 lg:h-auto lg:w-[28%] xl:w-[28%]">
            <img
              src="/images/vehicles/vehicle-cta-chauffeur-v2.jpg"
              alt="MOVAGO Professional Chauffeur and Luxury Executive Cabin"
              className="size-full object-cover object-center"
            />
            {/* Subtle dark gradient overlay blending into the card on desktop */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-r from-transparent to-[#090c0d] lg:block" />
          </div>

          {/* Center: Copy & Action CTA (50% of content area) */}
          <div className="flex flex-1 flex-col justify-center py-6 px-6 sm:py-7 sm:px-8 lg:py-6 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">
            <div className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-gold">
              EXPERIENCE THE DIFFERENCE
            </div>
            <h2 className="m-0 mt-1.5 font-sans text-2xl font-bold leading-snug text-white sm:text-[26px] lg:text-[28px] tracking-tight">
              More Than Just a Ride
            </h2>
            <p className="m-0 mt-2 max-w-[420px] font-sans text-xs leading-relaxed text-[#c4c8bf] sm:text-[13px]">
              Every detail of our vehicles and services is designed to deliver safety, punctuality
              and comfort at the highest standard.
            </p>

            <div className="mt-4 sm:mt-5">
              <Link
                href={BOOK_NOW_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-[#111311] transition-all hover:bg-gold-hover hover:shadow-lg sm:text-[13.5px]"
              >
                <span>Book Your Ride Now</span>
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>

          {/* 1px Vertical Divider in the EXACT CENTER between Center and Right columns */}
          <div
            aria-hidden
            className="hidden self-center h-28 w-[1px] bg-white/20 lg:block shrink-0"
          />

          {/* Right: 4 Value Guarantee Checkmarks (50% of content area) */}
          <div className="flex flex-1 flex-col justify-center gap-3.5 border-t border-white/10 py-5 px-6 sm:py-6 sm:px-8 lg:border-t-0 lg:py-6 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">
            {CTA_BENEFITS.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <span className="flex shrink-0 items-center justify-center text-gold">
                  <Icon name="check-circle" size={20} />
                </span>
                <span className="font-sans text-xs font-medium text-white/95 sm:text-[13.5px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
