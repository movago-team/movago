import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/data/vehicles'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover, textGold } from '@/utils/ui/colors'

export default function HourlyFleetSection() {
  // Use existing top 3 luxury vehicles from data/vehicles.ts (ZEEKR 009, ZEEKR 7X, TOYOTA bZ4X)
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section className="bg-[#F8F5EF] pt-1 sm:pt-2 lg:pt-2.5 pb-3 sm:pb-3.5 lg:pb-4">
      <div className="page-width">
        {/* Enclosing Outer Section Frame: Transparent Background with Subtle 1px Light Gray Border */}
        <div className="rounded-2xl sm:rounded-3xl border border-solid border-[#E5E1D9] bg-transparent p-3.5 sm:p-5 lg:p-5.5 xl:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Desktop Responsive Grid: Compact Left Intro Column + 3 Expanded Vehicle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[195px_repeat(3,minmax(0,1fr))] xl:grid-cols-[215px_repeat(3,minmax(0,1fr))] gap-3 sm:gap-3.5 lg:gap-3 xl:gap-3.5 items-stretch">
            {/* Column 1: Left Info Box (OUR FLEET Eyebrow, Heading, and Bordered View All Button) */}
            <div className="flex flex-col justify-center items-start pr-1 sm:pr-2 md:col-span-2 lg:col-span-1">
              <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-1.5 sm:mb-2', textGold)}>
                OUR FLEET
              </div>
              <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[23px] xl:text-[26px] font-bold tracking-tight text-[#111311] leading-[1.2] mb-4 sm:mb-5">
                Premium Vehicles for Your Hourly Service
              </h2>
              <Link
                href="/vehicles"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-solid border-gold/80 bg-transparent px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-gold hover:bg-gold/10 hover:border-gold transition-colors no-underline shadow-none shrink-0 whitespace-nowrap"
              >
                <span>View All Vehicles</span>
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            {/* Columns 2, 3, 4: 3 Luxury Vehicle Cards (ZEEKR 009, ZEEKR 7X, TOYOTA bZ4X) */}
            {displayVehicles.map((vehicle) => {
              const classFeature =
                vehicle.features?.find((f) => f.label.toLowerCase().includes('class'))?.label ||
                (vehicle.id === 'zeekr-009'
                  ? 'VIP Class'
                  : vehicle.id === 'zeekr-7x'
                  ? 'Executive Class'
                  : 'Premium Class')

              return (
                <div
                  key={vehicle.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1011] p-4 sm:p-5 lg:p-4 xl:p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)] min-h-[460px] sm:min-h-[490px]"
                >
                  {/* 1. Card Header: Brand Logo & Vehicle Name on Left, Category Pill Badge on Right, Subtitle below */}
                  <div>
                    <div className="flex items-center justify-between gap-2 sm:gap-2.5">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                        {vehicle.brandLogo && (
                          <img
                            src={vehicle.brandLogo}
                            alt={`${vehicle.brand || vehicle.name} logo`}
                            className="h-4.5 w-auto sm:h-[22px] max-w-[26px] sm:max-w-[28px] object-contain shrink-0"
                          />
                        )}
                        <h3 className="m-0 font-sans text-base sm:text-xl xl:text-2xl font-bold tracking-tight text-white leading-tight truncate">
                          {vehicle.name}
                        </h3>
                      </div>

                      <span
                        className={cn(
                          'shrink-0 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] xl:text-[10.5px] font-bold uppercase tracking-wider text-[#0d1011] shadow-sm',
                          bgGold,
                        )}
                      >
                        {vehicle.badge}
                      </span>
                    </div>

                    <p className="m-0 mt-1 sm:mt-1.5 text-xs text-white/80 sm:text-[13px] font-normal leading-relaxed h-[18px] sm:h-[20px] flex items-center truncate">
                      {vehicle.subtitle}
                    </p>
                  </div>

                  {/* 2. Vehicle Image - Centered, scaled, and consistently positioned */}
                  <div className="relative my-2.5 sm:my-3.5 h-[155px] sm:h-[185px] lg:h-[195px] xl:h-[205px] w-full overflow-hidden rounded-xl bg-transparent flex items-center justify-center px-1">
                    <div
                      className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      style={{
                        transform: vehicle.imageScale ? `scale(${vehicle.imageScale})` : undefined,
                      }}
                    >
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain [filter:drop-shadow(0_14px_22px_rgba(0,0,0,0.65))]"
                        priority={vehicle.id === 'zeekr-009'}
                      />
                    </div>
                  </div>

                  {/* 3. Specification Row - Fully Responsive & Aligned */}
                  <div className="grid grid-cols-[31.5%_31.5%_37%] items-start border-b border-white/10 pt-1 pb-2.5 sm:pb-3.5 text-white min-h-[42px] sm:min-h-[44px]">
                    <div className="flex items-start gap-1 sm:gap-1.5 xl:gap-2 min-w-0">
                      <span className="text-[#C5A073] shrink-0 mt-[-1px]">
                        <Icon name="users" size={19} />
                      </span>
                      <span className="text-[11px] sm:text-xs xl:text-[12.5px] text-white font-semibold whitespace-nowrap leading-tight">
                        {vehicle.seats} Seats
                      </span>
                    </div>

                    <div className="flex items-start gap-1 sm:gap-1.5 xl:gap-2 min-w-0">
                      <span className="text-[#C5A073] shrink-0 mt-[-1px]">
                        <Icon name="bag" size={19} />
                      </span>
                      <div className="flex flex-col text-[10.5px] sm:text-[11px] xl:text-[11.5px] text-white font-semibold leading-tight">
                        <span className="whitespace-nowrap leading-tight">{vehicle.luggage} Large</span>
                        <span className="whitespace-nowrap leading-tight mt-0.5">Luggage</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1 sm:gap-1.5 xl:gap-2 min-w-0">
                      <span className="text-[#C5A073] shrink-0 mt-[-1px]">
                        <Icon name="shield-check" size={19} />
                      </span>
                      <span className="text-[11px] sm:text-xs xl:text-[12.5px] text-white font-semibold whitespace-nowrap leading-tight">
                        {classFeature}
                      </span>
                    </div>
                  </div>

                  {/* 4. Bottom Row: Pricing & Book Now CTA */}
                  <div className="mt-3 sm:mt-4 flex items-center justify-between pt-0">
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400">
                        From
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-sans text-lg sm:text-xl xl:text-2xl font-bold text-white">
                          {vehicle.priceFrom}
                        </span>
                        <span className="text-[11px] sm:text-xs text-neutral-400">
                          {vehicle.currency} / hr
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/book?service=hourly&vehicle=${vehicle.id}`}
                      className={cn(
                        'inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm font-semibold text-black transition-all no-underline shadow-none shrink-0',
                        bgGold,
                        bgGoldHover,
                      )}
                    >
                      <span>Book Now</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
