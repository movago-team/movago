'use client'

import Link from 'next/link'
import { CTA_BENEFITS } from '@/data/vehicles'
import { Icon } from '@/ui'
import { BOOK_NOW_HREF } from '@/constants/navigation'
import { buttonClass } from '@/utils/ui/button'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function VehicleCtaSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-14 sm:pb-18 lg:pb-20">
      <div className="page-width">
        <div className="relative isolate flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090c0d] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:flex-row lg:items-center lg:p-8">
          {/* Left: Chauffeur & Executive Passenger Photo */}
          <div className="relative h-60 w-full shrink-0 overflow-hidden rounded-xl bg-black/40 sm:h-72 lg:h-[220px] lg:w-[320px]">
            <img
              src="/images/vehicles/vehicle-cta-chauffeur.jpg"
              alt="MOVAGO Professional Chauffeur and Luxury Executive Cabin"
              className="size-full object-cover [filter:brightness(1.02)_contrast(1.02)]"
            />
          </div>

          {/* Center: Copy & Action CTA */}
          <div className="mt-6 flex-1 lg:mt-0 lg:px-8">
            <div className={cn('text-xs font-bold tracking-[0.08em] uppercase', textGold)}>
              EXPERIENCE THE DIFFERENCE
            </div>
            <h2 className="m-0 mt-1 text-2xl font-bold leading-snug text-white sm:text-[28px] lg:text-[32px] tracking-tight">
              More Than Just a Ride
            </h2>
            <p className="m-0 mt-2 max-w-[420px] text-xs leading-relaxed text-[#a4a89e] sm:text-sm">
              Every detail of our vehicles and services is designed to deliver safety, punctuality
              and comfort at the highest standard.
            </p>

            <div className="mt-5">
              <Link
                href={BOOK_NOW_HREF}
                className={cn(
                  buttonClass({ variant: 'primary', size: 'lg' }),
                  'inline-flex items-center gap-2 font-semibold shadow-[0_4px_16px_rgba(197,160,115,0.25)] hover:-translate-y-0.5 px-6 py-3',
                )}
              >
                <span>Book Your Ride Now</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>

          {/* Right: 4 Value Guarantee Checkmarks */}
          <div className="mt-6 flex flex-col justify-center gap-3.5 border-t border-white/10 pt-5 lg:mt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            {CTA_BENEFITS.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15', textGold)}>
                  <Icon name="check" size={13} />
                </span>
                <span className="text-xs font-semibold text-white sm:text-sm">
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
