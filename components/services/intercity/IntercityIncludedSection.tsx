import { INTERCITY_INCLUSIONS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityIncludedSection() {
  return (
    <section className="bg-[#F8F5EF] pt-6 sm:pt-8 lg:pt-8 pb-6 sm:pb-8 lg:pb-8">
      <div className="page-width">
        {/* Outer Framed Card Container: Transparent with Subtle Light Gray Border */}
        <div className="rounded-2xl sm:rounded-3xl border border-solid border-[#E5E1D9] bg-transparent p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Header Inside Card */}
          <div className="mb-6 sm:mb-7">
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase mb-1.5 font-sans', textGold)}>
              SERVICE INCLUSIONS
            </div>
            <h2 className="m-0 font-sans text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-[#111311]">
              What&apos;s Included in Your Intercity Transfer
            </h2>
          </div>

          {/* 7 Inclusions Grid: Transparent Sub-boxes with Light Gray Borders & 2x Larger Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 lg:gap-3.5">
            {INTERCITY_INCLUSIONS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2.5 sm:gap-3 rounded-xl border border-solid border-[#E5E1D9] bg-transparent p-3 sm:p-3.5 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/[0.03]"
              >
                <span className="text-gold flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={52} />
                </span>
                <span className="font-sans text-xs sm:text-[12.5px] font-bold text-[#111311] leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-5 text-center text-xs text-[#7A7E75] font-sans">
            *Flight monitoring is included for airport pickup services.
          </div>
        </div>
      </div>
    </section>
  )
}
