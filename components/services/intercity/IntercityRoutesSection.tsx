import Link from 'next/link'
import Image from 'next/image'
import { INTERCITY_ROUTES } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityRoutesSection() {
  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-20 lg:py-24">
      <div className="page-width">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div>
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
              POPULAR ROUTES
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
              Most Popular Intercity Routes
            </h2>
          </div>

          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111311] hover:text-gold transition-colors no-underline"
          >
            <span>View All Routes</span>
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        {/* 6 Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERCITY_ROUTES.map((route) => (
            <Link
              key={route.id}
              href={`/book?service=intercity&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D5CDBD] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md no-underline"
            >
              {/* Route Image */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0a0d0e]">
                <Image
                  src={route.image || '/images/destinations/pattaya.jpg'}
                  alt={`${route.from} to ${route.to}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Duration Badge */}
                {route.duration && (
                  <span className="absolute bottom-3 left-3.5 inline-flex items-center gap-1.5 rounded-lg bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <span className="text-gold">
                      <Icon name="clock" size={12} />
                    </span>
                    <span>{route.duration}</span>
                  </span>
                )}
              </div>

              {/* Route Details */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                    <span>{route.from}</span>
                    <span>→</span>
                  </div>
                  <h3 className="m-0 mt-0.5 font-sans text-lg sm:text-xl font-bold text-[#111311] group-hover:text-gold transition-colors">
                    {route.to}
                  </h3>
                </div>

                {/* Price & Action */}
                <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8E85]">
                      From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans text-xl font-bold text-[#111311]">
                        {route.priceFrom}
                      </span>
                      <span className="text-xs text-[#8A8E85]">{route.currency}</span>
                    </div>
                  </div>

                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#FAF8F5] text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon name="arrow-right" size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
