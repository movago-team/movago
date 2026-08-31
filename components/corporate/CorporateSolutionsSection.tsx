'use client'

import Image from 'next/image'
import { Icon } from '@/ui'
import { CORPORATE_SOLUTIONS_LIST, CORPORATE_STATISTICS } from '@/data/corporate'
import { textGold } from '@/utils/ui/colors'
import { cn } from '@/utils/cn'

export default function CorporateSolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#060707] text-white py-12 sm:py-14 lg:py-16 border-y border-white/[0.08]">
      <div className="page-width">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.2fr_345px] lg:items-stretch xl:grid-cols-[1.05fr_1.2fr_365px] xl:gap-10">
          {/* Left Column: Solutions Copy & Checklist */}
          <div className="relative z-10 flex flex-col justify-center">
            <div
              className={cn(
                'font-sans text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase mb-2',
                textGold,
              )}
            >
              OUR CORPORATE SOLUTIONS
            </div>
            <h2 className="m-0 font-sans text-[clamp(26px,2.8vw,38px)] font-bold leading-[1.15] tracking-tight text-white">
              Designed for Organizations
              <br />
              of Every Size
            </h2>
            <p className="m-0 mt-2.5 max-w-[420px] font-sans text-xs sm:text-[13px] leading-relaxed text-[#b4b7b0]">
              From small businesses to global enterprises, MOVAGO provides scalable mobility
              solutions to support your operations.
            </p>

            {/* Checklist */}
            <div className="mt-5 flex flex-col gap-2.5 sm:gap-3">
              {CORPORATE_SOLUTIONS_LIST.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <span className="flex shrink-0 items-center justify-center text-gold">
                    <Icon name="check-circle" size={18} />
                  </span>
                  <span className="font-sans text-[12.5px] sm:text-[13.5px] font-medium text-white/95">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Executive Meeting Image — Full Height matching Card Frame */}
          <div className="relative flex items-center justify-center w-full h-full min-h-[250px] sm:min-h-[320px] lg:min-h-0 overflow-hidden">
            <Image
              src="/images/corporate/corporate-solutions.jpg"
              alt="MOVAGO Corporate Meeting and Executive Strategic Planning"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center scale-102"
            />

            {/* 4-Edge Feathery Blur Overlays smoothly blending into #060707 */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#060707] via-[#060707]/75 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060707] via-[#060707]/75 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060707] via-[#060707]/80 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060707] via-[#060707]/80 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,transparent_30%,rgba(6,7,7,0.5)_70%,#060707_100%)] z-10"
            />
          </div>

          {/* Right Column: Statistics Panel — Centered on Mobile, Pinned Right on Desktop */}
          <div className="relative z-10 flex w-full max-w-[350px] xl:max-w-[370px] mx-auto lg:mx-0 lg:justify-self-end flex-col justify-center rounded-2xl border border-solid border-white/10 bg-[#0d1012]/90 p-7 sm:p-8 xl:p-8.5 shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col divide-y divide-white/10">
              {CORPORATE_STATISTICS.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={cn(
                    'flex flex-col py-4 first:pt-0 last:pb-0',
                    idx > 0 && 'pt-4',
                  )}
                >
                  <div className="font-sans text-[30px] sm:text-[34px] xl:text-[38px] font-bold leading-none text-gold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-sans text-xs sm:text-[13.5px] font-medium text-white/85">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
