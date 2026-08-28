import Link from 'next/link'
import { Icon } from '@/ui'
import { BOOK_NOW_HREF } from '@/constants/navigation'

export default function DestinationCtaSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-12 sm:pb-16 lg:pb-20">
      <div className="page-width">
        <div className="relative isolate flex min-h-[140px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#080808] px-7 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:min-h-[155px] md:min-h-[165px] md:flex-row md:items-center md:px-10 md:py-7 lg:px-12 lg:py-8">
          {/* Background Cinematic Vehicle Image */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/destinations/cta-vehicle-banner.jpg"
              alt="MOVAGO Luxury Zeekr 009 Transfer"
              className="size-full object-cover object-[52%_48%] opacity-90 [filter:brightness(0.92)_contrast(1.08)]"
            />
            {/* Soft Left and Right Edge Black Fades for clear text contrast */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,#080808_0%,#080808_18%,rgba(8,8,8,0.75)_30%,transparent_45%,transparent_65%,rgba(8,8,8,0.75)_80%,#080808_92%,#080808_100%)] max-md:bg-[linear-gradient(180deg,#080808_0%,rgba(8,8,8,0.85)_25%,rgba(8,8,8,0.3)_50%,rgba(8,8,8,0.85)_75%,#080808_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.3)_0%,transparent_30%,transparent_70%,rgba(8,8,8,0.4)_100%)]"
            />
          </div>

          {/* Left: Copy in Inter Font */}
          <div className="relative z-[1] max-w-[380px] max-md:mb-5">
            <h2 className="m-0 text-xl font-bold leading-snug text-white sm:text-[22px] lg:text-[24px] tracking-tight">
              Plan Your Journey in Style
            </h2>
            <p className="m-0 mt-1.5 text-xs leading-relaxed text-[#c5c8bf] sm:text-[13.5px]">
              Book your premium transfer to any destination across Thailand with MOVAGO.
            </p>
          </div>

          {/* Right: Gold CTA Action Button */}
          <div className="relative z-[1] shrink-0">
            <Link
              href={BOOK_NOW_HREF}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#C5A073] px-7 py-3 text-sm font-semibold text-black shadow-[0_4px_18px_rgba(197,160,115,0.25)] transition-all duration-200 hover:bg-[#b08d60] hover:shadow-[0_6px_22px_rgba(197,160,115,0.35)] hover:-translate-y-0.5 md:w-auto"
            >
              <span>Book Your Ride Now</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
