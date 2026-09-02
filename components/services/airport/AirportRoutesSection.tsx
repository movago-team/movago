import Link from 'next/link'
import { AIRPORT_ROUTES } from '@/data/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function AirportRoutesSection() {
  return (
    <section className="bg-[#F8F5EF] pt-2 sm:pt-4 pb-14 sm:pb-18 [text-shadow:none]">
      <div className="page-width">
        {/* Outer Framed Card Container matching Reference Image 2 */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#E5DFD5] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Header Inside Card */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-7">
            <div>
              <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-1.5 [text-shadow:none]', textGold)}>
                POPULAR ROUTES
              </div>
              <h2 className="m-0 font-sans text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#111311] [text-shadow:none]">
                Most Popular Airport Transfers
              </h2>
            </div>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#111311] hover:border-gold hover:text-gold transition-all no-underline shadow-sm"
            >
              <span>View All Routes</span>
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>

          {/* 6 Routes in 1 Single Horizontal Row matching Reference 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {AIRPORT_ROUTES.map((route) => (
              <Link
                key={route.id}
                href={`/book?service=airport&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
                className="group flex flex-col justify-between rounded-xl border border-[#EBE6DF] bg-[#FCFBFA] px-3.5 sm:px-4 py-5 sm:py-6 min-h-[155px] sm:min-h-[165px] transition-all hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-md no-underline [text-shadow:none] h-full"
              >
                <div className="flex items-start gap-2.5">
                  {/* Left: Gold Framed Airplane Icon */}
                  <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-lg border border-[#C5A073]/30 bg-[#FAF8F5] text-[#C5A073]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                  </span>

                  {/* Right Column: All text & arrow vertically aligned in one clean column */}
                  <div className="min-w-0 flex-1">
                    {/* Airport code & name */}
                    <div className="h-10 flex flex-col justify-center">
                      <div className="font-sans text-sm sm:text-base font-bold text-[#111311] leading-tight">
                        {route.from}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#8A8E85] truncate leading-tight mt-0.5">
                        {route.fromSub}
                      </div>
                    </div>

                    {/* Connecting Gold Arrow directly aligned with text */}
                    <div className="my-3.5 sm:my-4 flex items-center h-4">
                      <span className="text-[#C5A073]">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                          <path d="M0 6H16M16 6L11 1M16 6L11 11" stroke="#C5A073" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    {/* Destination & Starting Price directly aligned with text */}
                    <div>
                      <div className="font-sans text-xs sm:text-[13.5px] font-semibold text-[#111311] group-hover:text-gold transition-colors leading-tight truncate h-5 flex items-center">
                        {route.to}
                      </div>
                      <div className="flex items-baseline gap-1 mt-1 text-xs sm:text-[13px] text-[#64748B] leading-none">
                        <span>From</span>
                        <span className="font-sans text-sm sm:text-base font-bold text-[#111311]">
                          {route.priceFrom}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium text-[#64748B]">
                          {route.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
