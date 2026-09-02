import { AIRPORT_BENEFITS } from '@/data/services'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

export default function AirportBenefitsSection() {
  return (
    <section className="bg-[#F8F5EF] pt-2 sm:pt-4 pb-4 sm:pb-6 [text-shadow:none]">
      <div className="page-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className={cn('text-xs sm:text-[13px] font-bold tracking-[0.1em] uppercase mb-2 [text-shadow:none]', textGold)}>
            WHY CHOOSE MOVAGO
          </div>
          <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111311] [text-shadow:none]">
            Designed for Your Peace of Mind
          </h2>
        </div>

        {/* 6 Benefit Cards Grid - Fits exactly page-width container with tightened gaps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
          {AIRPORT_BENEFITS.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-[#E5E7EB] bg-white px-3.5 py-6 sm:py-7 min-h-[195px] sm:min-h-[205px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Enlarged Prominent Gold Line Icon (44px) */}
              <div className="mb-3.5 text-[#C5A073] flex items-center justify-center">
                {idx === 0 && (
                  /* 1. Professional Chauffeur with Uniform Cap */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9a6 6 0 0 1 12 0" />
                    <path d="M3 10h18c0 1-2 2-9 2s-9-1-9-2z" />
                    <circle cx="12" cy="14" r="3" />
                    <path d="M7 21v-1a5 5 0 0 1 10 0v1" />
                  </svg>
                )}

                {idx === 1 && (
                  /* 2. Premium Luxury Vehicle */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16l1.5-5.5a2 2 0 0 1 1.9-1.5h7.2a2 2 0 0 1 1.9 1.5L19 16" />
                    <path d="M3 16h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H8a2 2 0 0 1-4 0H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
                    <circle cx="6.5" cy="19.5" r="1.5" />
                    <circle cx="17.5" cy="19.5" r="1.5" />
                  </svg>
                )}

                {idx === 2 && (
                  /* 3. Flight Monitoring (Airplane in radar circle with check) */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M15.5 8.5l-6 2.5 2 1.5-1 2 2-1 1.5 2 1.5-7z" />
                    <path d="M8 14.5l1.5 1.5 3-3" />
                  </svg>
                )}

                {idx === 3 && (
                  /* 4. Fixed & Transparent Price */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 3.09L19.5 6l.91 4.41L22 12l-1.59 1.59L20 18l-4.41.91L12 22l-3.59-3.09L4 18l-.91-4.41L1.5 12l1.59-1.59L4 6l4.41-.91L12 2z" />
                    <path d="M12 8v8" />
                    <path d="M14.5 10a2 2 0 0 0-2-2h-1a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-1a2 2 0 0 1-2-2" />
                  </svg>
                )}

                {idx === 4 && (
                  /* 5. 24/7 Customer Support (Two chat bubbles) */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-3 3V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4z" />
                    <path d="M18 9h1a2 2 0 0 1 2 2v7l-3-3h-4a2 2 0 0 1-2-2v-1" />
                  </svg>
                )}

                {idx === 5 && (
                  /* 6. Safety First (Shield with checkmark) */
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="m-0 font-sans text-xs sm:text-[13.5px] font-semibold text-[#111311] leading-snug mb-1.5 [text-shadow:none]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="m-0 font-sans text-[11px] sm:text-xs text-[#666860] leading-relaxed [text-shadow:none]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
