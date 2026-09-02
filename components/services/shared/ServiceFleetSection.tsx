import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/data/vehicles'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover, textGold } from '@/utils/ui/colors'

export interface ServiceFleetSectionProps {
  eyebrow?: string
  title: string
  priceSuffix?: string
  buttonLabel?: string
  buttonHrefBase?: string
  className?: string
}

export default function ServiceFleetSection({
  eyebrow = 'OUR FLEET',
  title,
  priceSuffix = '',
  buttonLabel = 'View Details',
  buttonHrefBase = '/book?vehicle=',
  className,
}: ServiceFleetSectionProps) {
  // Show the top 3 luxury vehicles (ZEEKR 009, ZEEKR 7X, TOYOTA bZ4X)
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section className={cn('bg-[#F8F5EF] pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10', className)}>
      <div className="page-width">
        {/* Header with Title and "View All Vehicles" link */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
              {eyebrow}
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
              {title}
            </h2>
          </div>

          <Link
            href="/vehicles"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111311] hover:text-gold transition-colors no-underline"
          >
            <span>View All Vehicles</span>
            <Icon
              name="arrow-right"
              size={16}
            />
          </Link>
        </div>

        {/* 3 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {displayVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1011] p-6 sm:p-7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
            >
              {/* Badge & Title */}
              <div>
                <span className={cn('text-[11px] font-bold uppercase tracking-wider', textGold)}>
                  {vehicle.badge}
                </span>
                <h3 className="m-0 mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {vehicle.name}
                </h3>
                <p className="m-0 mt-0.5 text-xs text-[#9ea399] sm:text-[13px]">
                  {vehicle.subtitle}
                </p>
              </div>

              {/* Vehicle Image */}
              <div className="relative my-5 sm:my-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-transparent">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority={vehicle.id === 'zeekr-009'}
                />
              </div>

              {/* Key Specs Row - Gold & Enlarged Icons */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-5 text-xs sm:text-[13px] text-[#A6AAA0]">
                <span className="flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#C5A073] shrink-0">
                    <Icon name="users" size={22} />
                  </span>
                  <span>{vehicle.seats} Seats</span>
                </span>
                <span className="flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#C5A073] shrink-0">
                    <Icon name="bag" size={22} />
                  </span>
                  <span>{vehicle.luggage} Large Luggage</span>
                </span>
                <span className="flex items-center gap-2 sm:gap-2.5">
                  <span className="text-[#C5A073] shrink-0">
                    <Icon name="shield-check" size={22} />
                  </span>
                  <span>VIP Class</span>
                </span>
              </div>

              {/* Price & Action Button */}
              <div className="mt-5 sm:mt-6 flex items-center justify-between pt-1">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#8A8E85]">
                    From
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {vehicle.priceFrom}
                    </span>
                    <span className="text-xs text-[#8A8E85]">
                      {vehicle.currency} {priceSuffix}
                    </span>
                  </div>
                </div>

                <Link
                  href={`${buttonHrefBase}${vehicle.id}`}
                  className={cn(
                    'inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-xs sm:text-sm font-semibold text-black transition-all no-underline shadow-none',
                    bgGold,
                    bgGoldHover,
                  )}
                >
                  <span>{buttonLabel}</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
