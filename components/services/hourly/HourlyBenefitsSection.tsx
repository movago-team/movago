import { HOURLY_BENEFITS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function HourlyBenefitsSection() {
  return (
    <section className="bg-[#F8F5EF] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
      <div className="page-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
            WHY CHOOSE MOVAGO
          </div>
          <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
            The Luxury of Time Well Spent
          </h2>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {HOURLY_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
            >
              <span className="flex size-12 sm:size-14 items-center justify-center rounded-full bg-[#FAF8F5] text-gold border border-gold/30 mb-4">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="m-0 font-sans text-sm sm:text-base font-bold text-[#111311] leading-snug">
                {item.title}
              </h3>
              <p className="m-0 mt-2 font-sans text-xs text-[#666860] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
