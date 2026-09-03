import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { FAQ_HERO_FEATURES } from '@/data/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'
import FaqSearchBar from './FaqSearchBar'

export default function FaqHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(640px,48vw,760px)] max-[600px]:min-h-[580px]',
        'pt-[78px] pb-12 sm:pb-14 max-[600px]:pt-[72px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Cinematic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/support/faq-hero.png"
          alt="MOVAGO Executive Airport Chauffeur Service FAQs"
          fill
          priority
          sizes="100vw"
          className="size-full object-cover object-[calc(50%+80px)_40%] brightness-[1.04] contrast-[1.02] max-[900px]:object-[calc(50%+40px)_38%] max-[600px]:hidden"
        />

        {/* Mobile background */}
        <div
          aria-hidden
          className="block sm:hidden absolute inset-0 z-0 bg-[url('/images/support/faq-hero.png')] bg-no-repeat bg-[length:140%_auto] bg-[position:80%_30%] [filter:brightness(1.14)_contrast(1.05)]"
        />

        {/* Left-to-right gradient for crisp text readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.96)_0%,rgba(5,7,7,0.90)_24%,rgba(5,7,7,0.55)_38%,rgba(5,7,7,0.15)_48%,transparent_60%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.92)_0%,rgba(5,7,7,0.60)_45%,transparent_80%)]"
        />

        {/* Top and bottom vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,transparent_20%,transparent_65%,rgba(5,7,7,0.85)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.85)_20%,transparent_35%,transparent_65%,rgba(5,7,7,0.95)_100%)]"
        />
      </div>

      {/* Top Content Area */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[840px]">
          {/* Eyebrow */}
          <div className={cn('mb-3 text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
            FREQUENTLY ASKED QUESTIONS
          </div>

          {/* Display Heading */}
          <h1 className="m-0 font-sans text-[clamp(32px,3.2vw,54px)] font-bold leading-[1.15] tracking-tight text-white max-[900px]:text-[clamp(34px,5.8vw,46px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            Everything You Need to
            <br />
            Know About MOVAGO
          </h1>

          {/* Description */}
          <p className="m-0 mt-3.5 max-w-[540px] font-sans text-base leading-relaxed text-[#d6d9d0]">
            Find answers to common questions about our services, bookings, payments, and more.
          </p>

          {/* Search Bar */}
          <Suspense fallback={<div className="h-[52px] mt-6 w-full max-w-[620px] rounded-xl bg-[#131518]/95 animate-pulse" style={{ border: '1px solid #383B3E' }} />}>
            <FaqSearchBar />
          </Suspense>
        </div>
      </div>

      {/* Bottom 4 Feature Cards Unified Container */}
      <div className="page-width relative z-[1] w-full mt-auto pt-10 sm:pt-12">
        <div className="overflow-hidden rounded-2xl border border-white/25 bg-[#090c0d]/85 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FAQ_HERO_FEATURES.map((feature, idx) => {
              const isNotLast = idx < FAQ_HERO_FEATURES.length - 1
              return (
                <div
                  key={feature.id}
                  className="relative flex items-center justify-start sm:justify-center gap-3.5 p-4 sm:p-5 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                    <Icon name={feature.icon} size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-sans text-sm sm:text-base font-bold text-white leading-snug">
                      {feature.title}
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#A6AAA0] mt-1 leading-tight line-clamp-2">
                      {feature.desc}
                    </div>
                  </div>

                  {/* Desktop Vertical Divider Bar */}
                  {isNotLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-[12px] hidden h-[74px] w-[1px] bg-white/20 lg:block"
                    />
                  )}

                  {/* Tablet 2-column Vertical Divider */}
                  {idx % 2 === 0 && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-[12px] hidden h-[74px] w-[1px] bg-white/20 sm:block lg:hidden"
                    />
                  )}

                  {/* Tablet Horizontal Divider */}
                  {idx < 2 && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute bottom-0 left-5 right-5 hidden h-[1px] bg-white/15 sm:block lg:hidden"
                    />
                  )}

                  {/* Mobile Horizontal Divider */}
                  {isNotLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute bottom-0 left-5 right-5 block h-[1px] bg-white/15 sm:hidden"
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
