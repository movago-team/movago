import { INTERCITY_INCLUSIONS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityIncludedSection() {
  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-20">
      <div className="page-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
            SERVICE INCLUSIONS
          </div>
          <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
            What&apos;s Included in Your Intercity Transfer
          </h2>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5 sm:gap-4">
          {INTERCITY_INCLUSIONS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-[#D5CDBD] bg-white p-4 sm:p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <span className="flex size-11 sm:size-12 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30 mb-3">
                <Icon name={item.icon} size={20} />
              </span>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#111311] leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-[#7A7E75]">
          *Flight monitoring is included for airport pickup services.
        </div>
      </div>
    </section>
  )
}
