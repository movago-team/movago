import { AIRPORT_STEPS } from '@/data/services'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function AirportHowItWorks() {
  return (
    <section className="bg-[#F8F5EF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 [text-shadow:none]">
      <div className="page-width">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-2 [text-shadow:none]', textGold)}>
            HOW IT WORKS
          </div>
          <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111311] [text-shadow:none]">
            Your Journey in 3 Simple Steps
          </h2>
        </div>

        {/* 3 Step Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 relative">
          {AIRPORT_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="relative flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-md"
            >
              {/* Step Number Badge */}
              <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-[#C5A073] text-white font-bold text-base sm:text-lg shadow-sm [text-shadow:none]">
                {step.stepNumber}
              </div>

              {/* Large Gold Outlined Icon Frame */}
              <div className="flex size-12 sm:size-13 shrink-0 items-center justify-center rounded-full border border-[#C5A073]/40 bg-[#FAF8F5] p-2.5 text-[#C5A073]">
                {idx === 0 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="12" cy="15" r="2" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16l1.5-5.5a2 2 0 0 1 1.9-1.5h7.2a2 2 0 0 1 1.9 1.5L19 16" />
                    <path d="M3 16h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
                    <circle cx="6.5" cy="19.5" r="1.5" />
                    <circle cx="17.5" cy="19.5" r="1.5" />
                  </svg>
                )}
              </div>

              {/* Title & Description */}
              <div className="min-w-0">
                <h3 className="m-0 font-sans text-sm sm:text-base font-semibold text-[#111311] mb-1 [text-shadow:none]">
                  {step.title}
                </h3>
                <p className="m-0 font-sans text-xs sm:text-[13px] leading-relaxed text-[#555850] [text-shadow:none]">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Dotted Arrow Line between steps 1->2 and 2->3 */}
              {idx < 2 && (
                <div
                  aria-hidden
                  className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 items-center pointer-events-none"
                >
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path
                      d="M0 6H20M20 6L15 1M20 6L15 11"
                      stroke="#C5A073"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
