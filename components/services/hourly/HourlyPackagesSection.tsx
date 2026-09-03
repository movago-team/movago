import Link from 'next/link'
import { HOURLY_PACKAGES } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyPackagesSection() {
  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-20 lg:py-24">
      <div className="page-width">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
              FLEXIBLE PACKAGES
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
              Choose the Right Plan for Your Needs
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111311] hover:text-gold transition-colors no-underline"
          >
            <span>View Full Pricing</span>
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {HOURLY_PACKAGES.map((pkg) => {
            if (pkg.isCustom) {
              return (
                <div
                  key={pkg.id}
                  className="flex flex-col justify-between rounded-2xl border border-dashed border-[#D5CDBD] bg-[#FAF8F5] p-6 sm:p-7 shadow-sm transition-all hover:border-gold"
                >
                  <div>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30 mb-4">
                      <Icon name="phone" size={20} />
                    </span>
                    <h3 className="m-0 font-sans text-lg sm:text-xl font-bold text-[#111311]">
                      {pkg.title}
                    </h3>
                    <p className="m-0 mt-2 text-xs sm:text-sm text-[#666860] leading-relaxed">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5DFD5]">
                    <Link
                      href={pkg.href || '/contact'}
                      className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-hover transition-colors no-underline"
                    >
                      <span>Contact Us</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={pkg.id}
                className={cn(
                  'relative flex flex-col justify-between rounded-2xl border bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:shadow-md',
                  pkg.isPopular ? 'border-gold shadow-[0_6px_24px_rgba(197,160,115,0.15)]' : 'border-[#D5CDBD]',
                )}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase',
                        pkg.isPopular
                          ? 'bg-gold text-black'
                          : 'bg-[#FAF8F5] text-[#8A8E85] border border-[#E5DFD5]',
                      )}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="m-0 font-sans text-lg sm:text-xl font-bold text-[#111311]">
                    {pkg.hours}
                  </h3>
                  <p className="m-0 mt-1.5 text-xs sm:text-sm text-[#666860] leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pt-4 border-t border-[#F0EBE1]">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8E85]">
                      From
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-sans text-2xl sm:text-3xl font-bold text-[#111311]">
                        {pkg.pricePerHour}
                      </span>
                      <span className="text-xs text-[#8A8E85]">{pkg.currency}</span>
                    </div>
                  </div>

                  {/* Feature Checkmark */}
                  {pkg.features && pkg.features.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#555850]">
                          <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
                            <Icon name="check" size={10} />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EBE1]">
                  <Link
                    href={pkg.href || '/book?service=hourly'}
                    className={cn(
                      'flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-semibold transition-all no-underline shadow-none',
                      pkg.isPopular
                        ? 'bg-gold text-black hover:bg-gold-hover'
                        : 'bg-[#FAF8F5] text-[#111311] border border-[#D5CDBD] hover:border-gold hover:bg-white',
                    )}
                  >
                    <span>Book Package</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
