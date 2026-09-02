import Link from 'next/link'
import { INTERCITY_BENEFITS } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function IntercityBenefitsSection() {
  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-20 lg:py-24">
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase', textGold)}>
              WHY CHOOSE MOVAGO
            </div>
            <h2 className="m-0 mt-2 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111311]">
              The Best Way to Travel Intercity
            </h2>
            <p className="m-0 mt-4 text-sm sm:text-base leading-relaxed text-[#555850]">
              We make long-distance travel easy, comfortable, and worry-free. Experience the utmost reliability with Thailand&apos;s premier private chauffeur service.
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111311] hover:text-gold transition-colors no-underline"
              >
                <span>Learn More About Us</span>
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Benefit Cards */}
          <div className="lg:col-span-7 space-y-4">
            {INTERCITY_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 sm:gap-5 rounded-2xl border border-[#D5CDBD] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 className="m-0 font-sans text-base sm:text-lg font-bold text-[#111311]">
                    {item.title}
                  </h3>
                  <p className="m-0 mt-1.5 font-sans text-xs sm:text-sm text-[#555850] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
