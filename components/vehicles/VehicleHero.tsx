'use client'

import Image from 'next/image'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

const HIGHLIGHTS = [
  { icon: 'car', line1: 'Premium', line2: 'Vehicles' },
  { icon: 'user', line1: 'Professional', line2: 'Chauffeurs' },
  { icon: 'shield-check', line1: 'Well-Maintained', line2: '& Clean' },
  { icon: 'shield', line1: 'Safety', line2: 'First' },
] as const

export default function VehicleHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col overflow-visible text-white',
        'min-h-[clamp(560px,44vw,700px)] max-[600px]:min-h-[520px]',
        'pt-[74px] pb-10 sm:pb-12 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/heroes/vehicles-hero.jpg"
          alt="MOVAGO Premium Luxury Vehicle Fleet — Executive Airport Transfer"
          fill
          priority
          sizes="100vw"
          className={cn(
            // v5: car faces RIGHT matching Home hero, dark left zone, VIP terminal right
            'object-cover object-[50%_50%]',
            '[filter:brightness(1.14)_contrast(1.04)_saturate(1.06)]',
            'max-[900px]:object-[48%_50%] max-[900px]:opacity-[0.95]',
            'max-[600px]:object-[45%_48%]',
          )}
        />

        {/* Left-to-right: lighter gradient since new image has natural dark left zone */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.82)_0%,rgba(5,7,7,0.65)_15%,rgba(5,7,7,0.30)_28%,rgba(5,7,7,0.05)_40%,transparent_52%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.85)_0%,rgba(5,7,7,0.50)_45%,transparent_75%)]"
        />

        {/* Top-to-bottom: navbar blend at top, light bottom fade so car stays visible */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,7,0.88)_0%,rgba(5,7,7,0.60)_8%,rgba(5,7,7,0.22)_18%,transparent_30%,transparent_65%,rgba(5,7,7,0.35)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.75)_12%,rgba(5,7,7,0.35)_28%,rgba(5,7,7,0.08)_50%,transparent_70%,rgba(5,7,7,0.50)_100%)]"
        />
      </div>

      {/* Content — top-aligned, matching original VehicleHero positioning */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[520px]">
          {/* Eyebrow */}
          <div className={cn('mb-3 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em]', textGold)}>
            OUR VEHICLES
          </div>

          {/* Main Heading */}
          <h1 className="m-0 text-[clamp(34px,3.4vw,56px)] font-bold leading-[1.15] tracking-[-0.02em] text-white max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            Our Vehicles
          </h1>

          {/* Gold Accent Subtitle */}
          <div className={cn('mt-2 text-lg font-semibold leading-snug sm:text-xl lg:text-[22px]', textGold)}>
            Luxury, Comfort, and Safety
            <br />
            in Every Journey
          </div>

          {/* Supporting Description */}
          <p className="mt-4 mb-0 max-w-[420px] text-base leading-relaxed text-[#d6d9d0]">
            Handpicked premium vehicles and professional chauffeurs to deliver an exceptional travel
            experience from start to finish.
          </p>
        </div>

        {/* Highlights — outside max-w constraint, single row desktop, 2×2 mobile */}
        <div className="mt-16 sm:mt-24 lg:mt-36 flex flex-nowrap items-center gap-x-7 sm:gap-x-8 max-[600px]:mt-8 max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-3.5">
          {HIGHLIGHTS.map(({ icon, line1, line2 }) => (
            <div key={line1} className="flex shrink-0 items-center gap-3">
              <span className={cn('shrink-0', textGold)}>
                <Icon name={icon} size={26} />
              </span>
              <div className="text-[13px] sm:text-[14px] font-medium leading-[1.25] text-[#e0e4db]">
                <div>{line1}</div>
                <div>{line2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
