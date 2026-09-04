import Image from 'next/image'
import { HOURLY_HERO_DATA } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyHero() {
  const { eyebrow, title, description, features, bgImage } = HOURLY_HERO_DATA

  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] w-full overflow-hidden bg-[#07090A] pb-16 sm:pb-24 lg:pb-32 pt-[74px] max-[600px]:pt-[68px]">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage || '/images/services/hourly-hero.png'}
          alt="MOVAGO Hourly Chauffeur Service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        {/* Base dark backdrop for text contrast */}
        <div className="absolute inset-0 bg-[#07090A]/20 sm:bg-[#07090A]/35" />
        {/* Bottom gradient fade into booking widget section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090A] via-[#07090A]/70 via-30% to-transparent" />
        {/* Left side vignette to ensure headline, description, and badges pop sharply */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090A]/90 via-[#07090A]/75 via-45% to-transparent lg:via-[#07090A]/50" />
      </div>

      <div className="page-width-full relative z-10 pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        {/* Content Box */}
        <div className="max-w-2xl">
          <div className={cn('text-xs sm:text-sm font-bold tracking-[0.14em] uppercase mb-3.5 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]', textGold)}>
            {eyebrow}
          </div>
          <h1 className="m-0 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.28] sm:leading-[1.25] lg:leading-[1.22] whitespace-pre-line drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
          <p className="m-0 mt-4 sm:mt-5 max-w-xl font-sans text-sm sm:text-base leading-[1.7] sm:leading-[1.75] text-[#E6E8E1] drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            {description}
          </p>
        </div>

        {/* 4 Feature Badges: 2 Rows (2x2 Grid) on Mobile, Horizontal Flex on Desktop with comfortable spacing */}
        <div className="mt-8 sm:mt-11 lg:mt-14 grid grid-cols-2 gap-x-3.5 sm:gap-x-6 gap-y-3.5 sm:gap-y-4 max-w-lg lg:max-w-none lg:flex lg:flex-wrap lg:items-center lg:gap-8 xl:gap-10">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
              <span className="shrink-0 text-gold flex items-center justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <span className="sm:hidden flex items-center justify-center">
                  <Icon name={item.icon} size={28} />
                </span>
                <span className="hidden sm:inline-flex items-center justify-center">
                  <Icon name={item.icon} size={34} />
                </span>
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm lg:text-[15px] font-bold text-white leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] truncate">
                  {item.title}
                </span>
                <span className="text-[10.5px] sm:text-xs lg:text-[13px] text-[#C4C8BE] leading-tight mt-0.5 sm:mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] truncate">
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
