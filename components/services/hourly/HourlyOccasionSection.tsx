import Image from 'next/image'
import { HOURLY_OCCASIONS } from '@/data/services'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyOccasionSection() {
  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-20 lg:py-24">
      <div className="page-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
            PERFECT FOR
          </div>
          <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
            Ideal for Every Occasion
          </h2>
        </div>

        {/* 6 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {HOURLY_OCCASIONS.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

              {/* Card Text Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <h3 className="m-0 font-sans text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="m-0 mt-1.5 text-xs sm:text-sm text-[#D5D8CF] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Line */}
        <div className="mt-10 text-center text-xs sm:text-sm font-medium text-[#7A7E75] flex items-center justify-center gap-2 flex-wrap">
          <span className="text-gold">✦</span>
          <span>Minimum booking 2 hours</span>
          <span>•</span>
          <span>Extended hours available</span>
          <span>•</span>
          <span>Overnight service available</span>
        </div>
      </div>
    </section>
  )
}
