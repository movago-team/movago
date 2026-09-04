import Link from 'next/link'
import { HOURLY_PACKAGES } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyPackagesSection() {
  return (
    <section className="bg-[#F8F5EF] pt-2 sm:pt-4 lg:pt-5 pb-8 sm:pb-12 lg:pb-14">
      <div className="page-width">
        {/* Enclosing Outer Section Frame: Transparent Background with Subtle 1px Light Gray Border matching other sections */}
        <div className="rounded-2xl sm:rounded-3xl border border-solid border-[#E5E1D9] bg-transparent p-4 sm:p-5 lg:p-5.5 xl:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Desktop 5-Column Layout: Evenly Distributed [ Intro ] [ Package 1 ] [ Package 2 ] [ Package 3 ] [ Custom Plan ] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1fr_0.85fr] xl:grid-cols-[1.2fr_1fr_1fr_1fr_0.88fr] gap-3 sm:gap-3.5 lg:gap-3 xl:gap-3.5 items-stretch">
            {/* Column 1: Left Info Area (Eyebrow, Heading, and Bordered View Full Pricing Button) */}
            <div className="flex flex-col justify-center items-start md:col-span-2 lg:col-span-1 p-1 sm:p-2 lg:p-0 lg:pr-3">
              <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase mb-2', textGold)}>
                FLEXIBLE PACKAGES
              </div>
              <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[23px] xl:text-[26px] font-bold tracking-tight text-[#111311] leading-[1.25] mb-4 sm:mb-5">
                Choose the Right Plan for Your Needs
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-solid border-gold/80 bg-transparent px-4 py-2.5 text-xs sm:text-sm font-semibold text-gold hover:bg-gold/10 hover:border-gold transition-colors no-underline shadow-none shrink-0 whitespace-nowrap mb-1 lg:mb-0"
              >
                <span>View Full Pricing</span>
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            {/* Columns 2, 3, 4, 5: 3 Balanced Pricing Cards + 1 Custom Plan Card */}
            {HOURLY_PACKAGES.map((pkg) => {
              if (pkg.isCustom) {
                return (
                  <div
                    key={pkg.id}
                    className="flex flex-col justify-between rounded-2xl border border-dashed border-[#D5CDBD] bg-[#FAF8F5]/60 p-4 sm:p-5 lg:p-4 xl:p-4.5 shadow-sm transition-all hover:border-gold"
                  >
                    <div>
                      <span className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 mb-3">
                        <Icon name="phone" size={17} />
                      </span>
                      <h3 className="m-0 font-sans text-base sm:text-[17px] lg:text-base xl:text-[17px] font-bold text-[#111311] leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="m-0 mt-2 text-xs sm:text-[12.5px] text-[#666860] leading-relaxed">
                        {pkg.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-auto pt-3.5 sm:pt-4 border-t border-[#E5DFD5]">
                      <Link
                        href={pkg.href || '/contact'}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold hover:text-gold-hover transition-colors no-underline"
                      >
                        <span>Contact Us</span>
                        <Icon name="arrow-right" size={14} />
                      </Link>
                    </div>
                  </div>
                )
              }

              const eyebrowLabel =
                pkg.id === 'full-day'
                  ? 'FULL DAY PACKAGE'
                  : pkg.badge || 'HOURLY SERVICE'

              return (
                <Link
                  key={pkg.id}
                  href={pkg.href || '/book?service=hourly'}
                  className={cn(
                    'group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-4 sm:p-5 lg:p-4 xl:p-4.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md no-underline text-inherit',
                    pkg.isPopular
                      ? 'border-[#E5E1D9] hover:border-gold'
                      : 'border-[#E5E1D9] hover:border-gold',
                  )}
                >
                  {/* Top-Right Corner Badge for Best Value / Popular */}
                  {pkg.isPopular && (
                    <span className="absolute top-0 right-0 rounded-bl-xl rounded-tr-2xl bg-gold px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-black shadow-md">
                      BEST VALUE
                    </span>
                  )}

                  <div>
                    {/* Eyebrow */}
                    <div className={cn('text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5', textGold)}>
                      {eyebrowLabel}
                    </div>

                    {/* Hours / Title */}
                    <h3 className="m-0 font-sans text-base sm:text-lg lg:text-[17px] xl:text-lg font-bold text-[#111311] leading-tight">
                      {pkg.hours}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="m-0 mt-1.5 text-xs sm:text-[12.5px] text-[#666860] leading-relaxed line-clamp-2">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Bottom Block (Price + Features) - Aligned to bottom across all cards */}
                  <div className="mt-4 sm:mt-auto">
                    {/* Price Block */}
                    <div className="pt-3 sm:pt-3.5 border-t border-[#F0EBE1]">
                      <span className="text-[10px] sm:text-[10.5px] uppercase tracking-wider text-neutral-400 font-semibold block">
                        From
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5 sm:mt-1">
                        <span className="font-sans text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] font-bold text-[#111311]">
                          {pkg.pricePerHour}
                        </span>
                        <span className="text-xs sm:text-[13px] text-neutral-500 font-medium">
                          {pkg.currency}
                        </span>
                      </div>
                    </div>

                    {/* Feature Checkmark at Bottom */}
                    {pkg.features && pkg.features.length > 0 && (
                      <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#F0EBE1]">
                        {pkg.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-xs sm:text-[12.5px] text-[#444640] font-medium">
                            <span className="text-gold font-bold text-sm">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

