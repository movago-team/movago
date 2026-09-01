import Image from 'next/image'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

const PILLARS = [
  {
    icon: 'shield',
    title: 'Our Mission',
    desc: 'To provide world-class mobility solutions that exceed expectations and create memorable experiences.',
  },
  {
    icon: 'eye',
    title: 'Our Vision',
    desc: "To be Southeast Asia's most trusted premium mobility brand, setting the standard for safety, service, and sustainability.",
  },
  {
    icon: 'diamond',
    title: 'Our Promise',
    desc: 'We are committed to punctuality, discretion, and excellence in every detail of your journey.',
  },
  {
    icon: 'leaf',
    title: 'Our Values',
    desc: 'Safety First, Customer Focused, Integrity, Innovation, and Sustainability.',
  },
]

export default function AboutHero() {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(580px,44vw,700px)] max-[600px]:min-h-[520px]',
        'pt-[74px] pb-8 sm:pb-10 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Overlays - identical position, scale & lighting to Home */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/heroes/hero-temp.png"
          alt="MOVAGO Executive Airport Chauffeur Service"
          fill
          priority
          sizes="100vw"
          className="size-full object-cover object-[calc(50%+75px)_40%] brightness-[1.04] contrast-[1.02] max-[900px]:object-[calc(50%+42px)_38%] max-[900px]:opacity-[0.92] max-[600px]:hidden"
        />

        {/* Mobile: CSS bg — 140% scale, 80% horiz shows full van + chauffeur + exec, 30% vert positions car in middle zone */}
        <div
          aria-hidden
          className="block sm:hidden absolute inset-0 z-0 bg-[url('/images/heroes/hero-temp.png')] bg-no-repeat bg-[length:140%_auto] bg-[position:80%_30%] [filter:brightness(1.14)_contrast(1.05)_saturate(1.06)]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.88)_18%,rgba(5,7,7,0.52)_28%,rgba(5,7,7,0.10)_38%,transparent_50%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.82)_0%,rgba(5,7,7,0.45)_45%,transparent_75%)]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_22%,transparent_70%,rgba(5,7,7,0.5)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.96)_0%,rgba(5,7,7,0.92)_22%,rgba(5,7,7,0.45)_30%,rgba(5,7,7,0.06)_43%,rgba(5,7,7,0.30)_55%,rgba(5,7,7,0.93)_68%,rgba(5,7,7,0.98)_100%)]"
        />
      </div>

      {/* Top Header Content - aligned with logo via page-width-full */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[540px]">
          {/* Eyebrow */}
          <div className={cn('mb-3 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em]', textGold)}>
            ABOUT MOVAGO
          </div>

          {/* Main Heading in Inter Font */}
          <h1 className="m-0 text-[clamp(34px,3.4vw,56px)] font-bold leading-[1.15] tracking-[-0.02em] text-white max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            About MOVAGO
          </h1>

          {/* Gold Accent Subtitle */}
          <div className={cn('mt-2 text-lg font-semibold leading-snug sm:text-xl lg:text-[22px]', textGold)}>
            Redefining Premium Mobility
            <br />
            with Purpose and Passion
          </div>

          {/* Supporting Copy */}
          <div className="mt-4 space-y-2.5 text-sm sm:text-[15px] leading-relaxed text-[#d6d9d0]">
            <p className="m-0">
              MOVAGO was born from a simple belief — every journey deserves to be safe, comfortable, and
              exceptional.
            </p>
            <p className="m-0">
              We combine luxury vehicles, professional chauffeurs, and advanced technology to deliver premium
              airport transfer and executive chauffeur services across Thailand and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Pillars Card - In page-width to align with Our Story section below */}
      <div className="page-width relative z-[1] mt-auto pt-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/25 bg-[#090c0d]/85 shadow-[0_24px_55px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item, idx) => {
            const isNotLast = idx < PILLARS.length - 1
            return (
              <div
                key={item.title}
                className={cn(
                  'relative flex items-start gap-4 p-5 sm:p-6 lg:py-6',
                  'max-md:border-b max-md:last:border-b-0 max-md:border-white/10',
                  idx % 2 === 0 && 'md:border-r lg:border-r-0 md:border-white/10',
                  idx < 2 && 'md:border-b lg:border-b-0 md:border-white/10',
                )}
              >
                {/* Left: Large Gold Icon */}
                <span className={cn('flex size-9 shrink-0 items-center justify-center pt-0.5', textGold)}>
                  <Icon name={item.icon} size={36} />
                </span>

                {/* Right: Title & Description starting at the exact same left alignment */}
                <div className="min-w-0 flex-1">
                  <h2 className="m-0 text-base font-bold leading-tight text-white sm:text-[17px] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="m-0 mt-2 text-xs sm:text-[13px] leading-relaxed text-[#b4b8af]">
                    {item.desc}
                  </p>
                </div>

                {/* 1px Vertical Divider between columns on desktop */}
                {isNotLast && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-6 bottom-6 hidden w-[1px] bg-white/20 lg:block"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
