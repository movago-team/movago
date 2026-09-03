import Link from 'next/link'
import Image from 'next/image'
import { HOURLY_HERO_DATA } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyHero() {
  const { eyebrow, title, description, breadcrumb, features, bgImage } = HOURLY_HERO_DATA

  return (
    <section className="relative min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] w-full overflow-hidden bg-[#07090A] pb-24 sm:pb-32 pt-[74px] max-[600px]:pt-[68px]">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage || '/images/services/hourly-hero.png'}
          alt="MOVAGO Hourly Chauffeur Service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090A] via-[#07090A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090A]/95 via-[#07090A]/60 to-transparent" />
      </div>

      <div className="page-width-full relative z-10 pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#A6AAA0]">
          {breadcrumb.map((crumb, idx) => {
            const isLast = idx === breadcrumb.length - 1
            return (
              <span key={crumb.label} className="inline-flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors no-underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-white font-medium' : undefined}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <Icon name="chevron-right" size={12} />}
              </span>
            )
          })}
        </nav>

        {/* Content Box */}
        {/* Content Box */}
        <div className="max-w-2xl">
          <div className={cn('text-xs sm:text-sm font-bold tracking-[0.1em] uppercase mb-3', textGold)}>
            {eyebrow}
          </div>
          <h1 className="m-0 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] whitespace-pre-line">
            {title}
          </h1>
          <p className="m-0 mt-4 max-w-xl font-sans text-base leading-relaxed text-[#D6D9D0]">
            {description}
          </p>
        </div>

        {/* 4 Feature Badges - Single line & enlarged icons */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-6 sm:gap-8 lg:gap-9 xl:gap-11 max-[820px]:flex-wrap max-[820px]:gap-y-4">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-3.5 shrink-0">
              <span className="flex size-12 sm:size-[52px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold/65 text-gold bg-gold/[0.08] shadow-[0_0_20px_rgba(197,160,115,0.12)]">
                <Icon name={item.icon} size={30} />
              </span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-[15px] font-bold text-white leading-tight">
                  {item.title}
                </span>
                <span className="text-xs sm:text-[13px] text-[#A6AAA0] leading-tight mt-1 whitespace-nowrap">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
