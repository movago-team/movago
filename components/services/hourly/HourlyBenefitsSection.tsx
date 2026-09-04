import { HOURLY_BENEFITS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyBenefitsSection() {
  return (
    <section className="bg-[#F8F5EF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14">
      <div className="page-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
            WHY CHOOSE MOVAGO
          </div>
          <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
            The Luxury of Time Well Spent
          </h2>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
          {HOURLY_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-[#D5CDBD] bg-white px-3 py-6 sm:py-7 lg:py-8 min-h-[225px] sm:min-h-[235px] lg:min-h-[245px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
            >
              <div className="mb-3.5 sm:mb-4 text-[#C5A073] flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={58} />
              </div>
              <h3 className="m-0 font-sans text-xs sm:text-[13.5px] font-bold text-[#111311] leading-snug mb-1.5">
                {item.title}
              </h3>
              <p className="m-0 font-sans text-[11px] sm:text-xs text-[#666860] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
