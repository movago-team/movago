'use client'

import Image from 'next/image'
import { HERO_PILLARS } from '@/data/contact'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

export default function ContactHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(620px,46vw,740px)] max-[600px]:min-h-[560px]',
        'pt-[74px] pb-24 sm:pb-28 lg:pb-32 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Cinematic Overlays - Full height prominent image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop & Tablet: Large prominent hero image positioned on the right with full headroom & crystal clarity */}
        <Image
          src="/images/contact/support-agent.jpg"
          alt="MOVAGO Executive Customer Support Specialist"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="size-full object-cover object-[calc(50%+180px)_46%] brightness-[1.04] contrast-[1.04] max-[1280px]:object-[calc(50%+130px)_46%] max-[1024px]:object-[calc(50%+80px)_46%] max-[800px]:object-[calc(50%+40px)_46%] max-[600px]:hidden"
        />

        {/* Mobile: CSS background positioned so agent is clearly visible with headroom */}
        <div
          aria-hidden
          className="block sm:hidden absolute inset-0 z-0 bg-[url('/images/contact/support-agent.jpg')] bg-no-repeat bg-[length:220%_auto] bg-[position:58%_42%] [filter:brightness(1.08)_contrast(1.04)]"
        />

        {/* Left-to-right gradient for crisp text contrast - transparent on the right so face is crystal clear */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.98)_0%,rgba(5,7,7,0.90)_28%,rgba(5,7,7,0.40)_44%,transparent_56%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.90)_0%,rgba(5,7,7,0.45)_45%,transparent_75%)]"
        />

        {/* Subtle top and bottom vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,transparent_18%,transparent_70%,rgba(5,7,7,0.85)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.85)_20%,transparent_35%,transparent_65%,rgba(5,7,7,0.95)_100%)]"
        />
      </div>

      {/* Top Header Content - aligned with logo via page-width-full matching AboutHero */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[560px]">

          {/* Eyebrow */}
          <div
            className={cn(
              'mb-3 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em] uppercase',
              textGold,
            )}
          >
            WE&apos;RE HERE TO HELP
          </div>

          {/* Main Heading in Inter Font */}
          <h1 className="m-0 font-sans text-[clamp(34px,3.4vw,56px)] font-bold leading-[1.15] tracking-[-0.02em] text-white max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            Customer Support
            <br />
            That Moves With You
          </h1>

          {/* Supporting Copy */}
          <p className="m-0 mt-4 max-w-[520px] font-sans text-sm leading-relaxed text-[#d6d9d0] sm:text-[15.5px]">
            Our support team is available 24/7 to ensure your journey is smooth, safe, and stress-free.
          </p>
        </div>
      </div>

      {/* Bottom 4 Highlight Cards matching reference mockup exactly */}
      <div className="page-width relative z-[1] w-full mt-auto pt-8">
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {HERO_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-[#0a0d0f]/80 p-4 sm:p-4.5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-gold/50"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                <Icon name={pillar.icon} size={22} />
              </span>
              <div className="min-w-0">
                <div className="font-sans text-xs font-bold text-white sm:text-[14px] leading-snug">
                  {pillar.title}
                </div>
                <div className="text-[11.5px] text-[#b8bcb0] mt-1 leading-tight sm:text-xs">
                  {pillar.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
