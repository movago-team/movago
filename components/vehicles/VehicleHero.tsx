'use client'

import Link from 'next/link'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

export default function VehicleHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(560px,44vw,700px)] max-[600px]:min-h-[520px]',
        'pt-[74px] pb-8 sm:pb-10 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Overlays - identical position & scale to Home/Destination heroes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          aria-hidden
          className="size-full bg-[url('/images/heroes/hero-temp.png')] bg-cover bg-no-repeat bg-[position:calc(50%+75px)_40%] [filter:brightness(1.02)_contrast(1.02)] max-[900px]:bg-[position:calc(50%+42px)_38%] max-[900px]:opacity-[0.92] max-[600px]:bg-[position:calc(50%+20px)_35%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.96)_0%,rgba(5,7,7,0.90)_20%,rgba(5,7,7,0.60)_34%,rgba(5,7,7,0.15)_48%,transparent_62%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.90)_0%,rgba(5,7,7,0.60)_50%,transparent_80%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_20%,transparent_60%,rgba(5,7,7,0.7)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.88)_0%,rgba(5,7,7,0.72)_28%,rgba(5,7,7,0.28)_52%,rgba(5,7,7,0.08)_70%,rgba(5,7,7,0.65)_100%)]"
        />
      </div>

      {/* Top Header Content - aligned with logo via page-width-full */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,46px)] max-[900px]:pt-10 max-[600px]:pt-5">
        <div className="max-w-[580px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-[#a4a7a0] sm:text-sm">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-[#777]">&gt;</span>
            <span className="text-[#a4a7a0]">Vehicles</span>
          </nav>

          {/* Main Heading in Inter Font */}
          <h1 className="m-0 text-[clamp(38px,4vw,60px)] font-bold leading-[1.12] tracking-[-0.02em] text-white max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(30px,8vw,38px)]">
            Our Vehicles
          </h1>

          {/* Gold Accent Subtitle with 2-line break */}
          <div className={cn('mt-3 text-xl font-semibold leading-[1.28] sm:text-[22px] lg:text-[25px]', textGold)}>
            Luxury, Comfort, and Safety
            <br />
            in Every Journey
          </div>

          {/* Supporting Description */}
          <p className="mt-4 mb-0 max-w-[480px] text-sm sm:text-base leading-relaxed text-[#d6d9d0]">
            Handpicked premium vehicles and professional chauffeurs to deliver an exceptional travel
            experience from start to finish.
          </p>
        </div>
      </div>

      {/* Bottom Highlights Row - Direct on background without container box matching Reference 2 */}
      <div className="page-width-full relative z-[1] mt-auto pt-10 sm:pt-14 pb-2">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Item 1: Premium Vehicles */}
          <div className="flex items-center gap-3">
            <span className={cn('shrink-0', textGold)}>
              <Icon name="car" size={24} />
            </span>
            <div className="text-xs sm:text-[13px] font-medium leading-tight text-white">
              <div>Premium</div>
              <div>Vehicles</div>
            </div>
          </div>

          {/* Item 2: Professional Chauffeurs */}
          <div className="flex items-center gap-3">
            <span className={cn('shrink-0', textGold)}>
              <Icon name="user" size={24} />
            </span>
            <div className="text-xs sm:text-[13px] font-medium leading-tight text-white">
              <div>Professional</div>
              <div>Chauffeurs</div>
            </div>
          </div>

          {/* Item 3: Well-Maintained & Clean */}
          <div className="flex items-center gap-3">
            <span className={cn('shrink-0', textGold)}>
              <Icon name="shield-check" size={24} />
            </span>
            <div className="text-xs sm:text-[13px] font-medium leading-tight text-white">
              <div>Well-Maintained</div>
              <div>& Clean</div>
            </div>
          </div>

          {/* Item 4: Safety First */}
          <div className="flex items-center gap-3">
            <span className={cn('shrink-0', textGold)}>
              <Icon name="shield" size={24} />
            </span>
            <div className="text-xs sm:text-[13px] font-medium leading-tight text-white">
              <div>Safety</div>
              <div>First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
