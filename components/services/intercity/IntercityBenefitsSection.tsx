import Link from 'next/link'
import { INTERCITY_BENEFITS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityBenefitsSection() {
  return (
    <section className="bg-[#F8F5EF] pt-6 sm:pt-8 lg:pt-8 pb-6 sm:pb-8 lg:pb-8">
      <div className="page-width">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10 xl:gap-12">
          {/* Left Column (Intro: ~24-25% width on desktop, aligned top-to-bottom) */}
          <div className="w-full lg:w-[25%] xl:w-[24%] shrink-0 flex flex-col justify-between items-start">
            <div>
              <div className={cn('text-[12.5px] sm:text-sm font-bold tracking-[0.08em] uppercase mb-2 sm:mb-2.5 font-sans', textGold)}>
                WHY CHOOSE MOVAGO
              </div>
              <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold tracking-tight text-[#111311] leading-[1.25] sm:leading-[1.22]">
                The Best Way to Travel Intercity
              </h2>
              <p className="m-0 mt-3.5 sm:mt-4 text-sm sm:text-[15px] leading-[1.7] text-[#555850] font-sans">
                We make long-distance travel easy, comfortable, and worry-free.
              </p>
            </div>

            <div className="mt-6 lg:mt-auto pt-0 lg:pt-3">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-solid border-gold/80 bg-transparent px-5 py-2.5 text-[13.5px] sm:text-sm font-semibold text-[#111311] hover:bg-gold/10 hover:border-gold transition-all duration-200 no-underline font-sans shadow-none"
              >
                <span>Learn More</span>
                <span className="text-gold flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <Icon name="arrow-right" size={15} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Single Shared White Bordered Panel with 4 Vertical Dividers */}
          <div className="flex-1 w-full rounded-xl sm:rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 lg:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-stretch h-full">
              {INTERCITY_BENEFITS.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center justify-center text-center min-w-0 px-2.5 sm:px-3 lg:px-2.5 py-3 lg:py-1"
                >
                  {/* Standalone Large Gold Outline Icon - Equalized Container */}
                  <span className="text-gold flex items-center justify-center mb-3 sm:mb-3.5 shrink-0 h-14">
                    <Icon name={item.icon} size={56} />
                  </span>

                  {/* Benefit Title - Equalized Baseline */}
                  <div className="min-h-[38px] flex items-center justify-center text-center">
                    <h3 className="m-0 font-sans text-xs sm:text-[13.5px] font-bold text-[#111311] leading-snug text-center max-w-[135px]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Benefit Description - Equalized Baseline */}
                  <div className="min-h-[42px] flex items-start justify-center text-center mt-2">
                    <p className="m-0 font-sans text-[11px] sm:text-xs text-[#555850] leading-relaxed text-center">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle, soft 1px Vertical Divider between columns on desktop */}
                  {idx < INTERCITY_BENEFITS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-[12%] bottom-[12%] hidden w-px bg-line/40 lg:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
