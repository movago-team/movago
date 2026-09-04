import Link from 'next/link'
import Image from 'next/image'
import { INTERCITY_ROUTES } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityRoutesSection() {
  return (
    <section className="bg-[#F8F5EF] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-8">
      <div className="page-width">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase mb-1.5 font-sans', textGold)}>
              POPULAR ROUTES
            </div>
            <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#111311]">
              Most Popular Intercity Routes
            </h2>
          </div>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-xl border border-solid border-gold/80 bg-transparent px-4 py-2 text-xs sm:text-sm font-semibold text-[#111311] hover:bg-gold/10 hover:border-gold transition-colors no-underline shrink-0 font-sans shadow-none"
          >
            <span>View All Routes</span>
            <span className="text-gold flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <Icon name="arrow-right" size={15} />
            </span>
          </Link>
        </div>

        {/* 6 Routes Grid (1 col on mobile, 2 on sm, 3 on md, 6 on lg/xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {INTERCITY_ROUTES.map((route) => (
            <Link
              key={route.id}
              href={`/book?service=intercity&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D5CDBD] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md no-underline text-inherit"
            >
              {/* Route Image */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#0a0d0e]">
                <Image
                  src={route.image || '/images/destinations/pattaya.jpg'}
                  alt={`${route.from} to ${route.to}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Route Details */}
              <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Origin */}
                  <div className="text-xs sm:text-[13px] font-medium text-[#666860] font-sans">
                    <span>{route.from}</span>
                  </div>

                  {/* Destination with Arrow */}
                  <div className="flex items-center gap-2 mt-1 font-sans">
                    <span className="text-gold flex items-center justify-center shrink-0">
                      <Icon name="arrow-right" size={16} />
                    </span>
                    <h3 className="m-0 font-sans text-base sm:text-lg lg:text-[17px] xl:text-lg font-bold text-[#111311] group-hover:text-gold transition-colors truncate">
                      {route.to}
                    </h3>
                  </div>

                  {/* Duration with Clock Icon */}
                  {route.duration && (
                    <div className="mt-2.5 flex items-center gap-2 text-xs sm:text-[13px] text-[#555850] font-medium font-sans">
                      <span className="text-gold flex items-center justify-center shrink-0">
                        <Icon name="clock" size={17} />
                      </span>
                      <span>{route.duration}</span>
                    </div>
                  )}
                </div>

                {/* Price Block */}
                <div className="mt-3.5 pt-3 border-t border-[#F0EBE1] flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#777A70] font-semibold block font-sans">
                      From
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-sans text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-bold text-[#111311]">
                        {route.priceFrom}
                      </span>
                      <span className="text-xs sm:text-[13px] text-[#666860] font-semibold font-sans">{route.currency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
