'use client'

import Image from 'next/image'
import { Icon } from '@/ui'
import { CORPORATE_HERO_BENEFITS } from '@/data/corporate'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

export default function CorporateHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(580px,44vw,700px)] max-[600px]:min-h-[520px]',
        'pt-[74px] pb-8 sm:pb-10 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Cinematic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/heroes/corporate-hero.jpg"
          alt="MOVAGO Corporate Mobility Solutions — Executive Transportation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_30%] max-[1024px]:object-[70%_35%] max-[640px]:object-[76%_30%]"
        />

        {/* Left-to-right dark gradient for text readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.92)_0%,rgba(5,7,7,0.82)_28%,rgba(5,7,7,0.48)_55%,rgba(5,7,7,0.15)_75%,transparent_100%)] max-[768px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.85)_50%,rgba(5,7,7,0.50)_100%)]"
        />

        {/* Top-to-bottom dark gradient for header and bottom blending */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,7,0.90)_0%,rgba(5,7,7,0.45)_15%,transparent_35%,rgba(5,7,7,0.45)_75%,rgba(5,7,7,0.92)_100%)]"
        />
      </div>

      {/* Main Hero Content — aligned with header logo via page-width-full matching AboutHero */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[580px]">
          {/* Eyebrow */}
          <div
            className={cn(
              'mb-3 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em] uppercase',
              textGold,
            )}
          >
            TAILORED FOR YOUR BUSINESS
          </div>

          {/* Heading — Inter font matching AboutHero scale */}
          <h1 className="m-0 font-sans text-[clamp(34px,3.4vw,56px)] font-bold leading-[1.15] tracking-[-0.02em] text-white max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            Corporate Mobility
            <br />
            Solutions
          </h1>

          {/* Supporting Headline */}
          <p className="m-0 mt-3 text-base sm:text-lg lg:text-[19px] font-medium leading-snug text-white/95">
            Reliable, professional, and seamless transportation for your executives, clients, and
            teams.
          </p>

          {/* Supporting Paragraph */}
          <p className="m-0 mt-3 max-w-[540px] text-xs sm:text-sm leading-relaxed text-[#c4c8bf]">
            MOVAGO delivers premium airport transfers and chauffeur services with exceptional
            standards, advanced technology, and dedicated support — so you can focus on what
            matters most.
          </p>
        </div>
      </div>

      {/* Hero Benefit Bar (Bottom) — styled exactly like user reference */}
      <div className="page-width relative z-[1] w-full mt-auto pt-8">
        <div className="relative overflow-hidden rounded-2xl border border-solid border-[rgba(197,160,115,0.38)] border-b-[rgba(197,160,115,0.12)] bg-[#0a0c0d]/85 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center px-6 py-7 sm:px-8 sm:py-8 lg:py-8.5 gap-4 sm:gap-6 lg:gap-4">
            {CORPORATE_HERO_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
              >
                <span className="flex shrink-0 items-center justify-center text-gold">
                  <Icon name={item.icon} size={38} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-[13px] sm:text-[13.5px] font-bold text-white leading-tight">
                    {item.line1}
                  </span>
                  <span className="font-sans text-[11.5px] sm:text-[12px] text-[#b0b4ab] leading-tight mt-0.5">
                    {item.line2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
