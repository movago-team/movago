import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/data/vehicles'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover, textGold } from '@/utils/ui/colors'

export interface ServiceFleetSectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  description?: string
  priceSuffix?: string
  buttonLabel?: string
  buttonHrefBase?: string
  enableCustomImageScale?: boolean
  className?: string
}

export default function ServiceFleetSection({
  eyebrow,
  title = 'OUR FLEET',
  subtitle,
  description = 'Premium vehicles for every journey, crafted for first-class comfort, safety, and seamless airport transfers.',
  priceSuffix = '',
  buttonLabel = 'View Details',
  buttonHrefBase = '/book?vehicle=',
  enableCustomImageScale = false,
  className,
}: ServiceFleetSectionProps) {
  // Show the top 3 luxury vehicles (ZEEKR 009, ZEEKR 7X, TOYOTA bZ4X)
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section className={cn('bg-[#F8F5EF] pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10', className)}>
      <div className="page-width">
        {/* Header with Prominent Gold Title and Single-line Description */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
          <div className="w-full">
            {eyebrow && (
              <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-1.5', textGold)}>
                {eyebrow}
              </div>
            )}
            <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311] uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="m-0 mt-1.5 text-sm sm:text-base font-medium text-[#111311]">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="m-0 mt-1.5 text-sm sm:text-base text-[#555A50] leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {vehicles.length > 3 && (
            <Link
              href="/vehicles"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111311] hover:text-gold transition-colors no-underline shrink-0"
            >
              <span>View All Vehicles</span>
              <Icon
                name="arrow-right"
                size={16}
              />
            </Link>
          )}
        </div>

        {/* 3 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {displayVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1011] p-6 sm:p-7 py-6 sm:py-7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)] min-h-[510px] sm:min-h-[530px]"
            >
              {/* Card Header: Model & Brand Logo on Left, Category Pill Badge on Right, Subtitle aligned with Logo */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    {vehicle.brandLogo && (
                      <img
                        src={vehicle.brandLogo}
                        alt={`${vehicle.brand || vehicle.name} logo`}
                        className="h-6 w-auto sm:h-[26px] max-w-[34px] object-contain shrink-0"
                      />
                    )}
                    <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight truncate">
                      {vehicle.name}
                    </h3>
                  </div>

                  <span
                    className={cn(
                      'shrink-0 rounded-full px-2.5 py-1 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#0d1011] shadow-sm',
                      bgGold,
                    )}
                  >
                    {vehicle.badge}
                  </span>
                </div>

                <p className="m-0 mt-1.5 text-xs text-white sm:text-[13px] font-normal">
                  {vehicle.subtitle}
                </p>
              </div>

              {/* Vehicle Image - Balanced & Comfortably Sized */}
              <div className="relative my-3 sm:my-4 h-[195px] sm:h-[220px] lg:h-[235px] w-full overflow-hidden rounded-xl bg-transparent flex items-center justify-center px-1">
                <div
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={{
                    transform:
                      enableCustomImageScale && vehicle.imageScale
                        ? `scale(${vehicle.imageScale})`
                        : undefined,
                  }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain [filter:drop-shadow(0_14px_22px_rgba(0,0,0,0.6))]"
                    priority={vehicle.id === 'zeekr-009'}
                  />
                </div>
              </div>

              {/* Key Specs Row - Gold & Enlarged Icons, Crisp White Text */}
              <div className="flex items-center justify-between border-b border-white/10 pt-1 pb-3 sm:pb-3.5 text-xs sm:text-[13px] text-white">
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

              {/* Price & Action Button - Crisp White Text */}
              <div className="mt-3.5 sm:mt-4 flex items-center justify-between pt-0">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white">
                    From
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {vehicle.priceFrom}
                    </span>
                    <span className="text-xs text-white">
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
