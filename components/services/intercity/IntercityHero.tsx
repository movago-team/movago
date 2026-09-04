import Image from 'next/image'
import { INTERCITY_HERO_DATA } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityHero() {
  const { eyebrow, title, description, features, bgImage } = INTERCITY_HERO_DATA

  return (
    <section className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] w-full overflow-hidden bg-[#07090A] pb-20 sm:pb-28 lg:pb-32 pt-[74px] max-[600px]:pt-[68px]">
      {/* Background Image & Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage || '/images/services/intercity-hero.png'}
          alt="MOVAGO Intercity Transfer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090A] via-[#07090A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090A]/95 via-[#07090A]/60 to-transparent" />
      </div>

      {/* Hero Content Container - Aligned with the MOVAGO Navbar logo grid */}
      <div className="page-width-full relative z-10 pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        {/* Content Box */}
        <div className="max-w-2xl">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-2.5 sm:mb-3 font-sans', textGold)}>
            {eyebrow}
          </div>
          <h1 className="m-0 font-sans text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.28] sm:leading-[1.25] lg:leading-[1.22] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {title}
          </h1>
          <p className="m-0 mt-3.5 sm:mt-4 max-w-xl font-sans text-sm sm:text-base leading-[1.7] sm:leading-[1.75] text-[#D6D9D0]">
            {description}
          </p>
        </div>

        {/* 4 Feature Badges - Refined icon size & responsive spacing */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3.5 sm:gap-y-4 max-w-lg md:max-w-2xl lg:max-w-none lg:flex lg:flex-wrap lg:items-center lg:gap-8 xl:gap-11">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-3 sm:gap-3.5 min-w-0">
              <span className="flex size-11 sm:size-12 lg:size-[50px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold/65 text-gold bg-gold/[0.08] shadow-[0_0_18px_rgba(197,160,115,0.12)]">
                <span className="sm:hidden flex items-center justify-center">
                  <Icon name={item.icon} size={24} />
                </span>
                <span className="hidden sm:inline-flex items-center justify-center">
                  <Icon name={item.icon} size={28} />
                </span>
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-[13.5px] lg:text-[14.5px] font-bold text-white leading-tight font-sans">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs lg:text-[12.5px] text-[#A6AAA0] leading-tight mt-0.5 sm:mt-1 font-sans">
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
