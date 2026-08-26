import Link from 'next/link'
import Icon from '@/components/ui/icon'
import { BOOK_NOW_HREF } from '@/constants/navigation'

export default function AboutCtaSection() {
  return (
    <section className="about-cta bg-[#f7f4ed] pb-14 lg:pb-20">
      <div className="page-width">
        <div className="about-cta-banner bg-[#080b0b] border border-white/12 rounded-xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.2)] grid grid-cols-1 md:grid-cols-[180px_1fr_auto] lg:grid-cols-[240px_1fr_auto] items-center gap-0 md:gap-5 lg:gap-7 md:pr-5.5 lg:pr-8">
          {/* Left: Luxury Interior Visual */}
          <div className="about-cta-media w-full md:w-[180px] lg:w-[240px] h-40 md:h-[118px] overflow-hidden flex-shrink-0">
            <img
              src="/images/about/cta-interior.jpg"
              alt="MOVAGO Luxury First-Class Cabin Interior"
              className="about-cta-img w-full h-full object-cover"
            />
          </div>

          {/* Center: Headline & Subtitle */}
          <div className="about-cta-body p-[22px_18px_14px] md:p-0">
            <h2 className="about-cta-heading text-lg sm:text-[clamp(19px,1.8vw,23px)] font-bold text-white m-0 mb-1.5 leading-snug">
              Let&apos;s Move Forward, Together
            </h2>
            <p className="about-cta-subtext text-[13.5px] leading-[1.5] text-[#a4a7a0] m-0">
              Whether it&apos;s for business or leisure, MOVAGO is here to make every journey exceptional.
            </p>
          </div>

          {/* Right: Gold CTA Button */}
          <div className="about-cta-action px-[18px] pb-[22px] md:p-0 flex-shrink-0">
            <Link
              href={BOOK_NOW_HREF}
              className="gold-btn about-btn-cta w-full md:w-auto justify-center md:justify-start inline-flex items-center gap-2 px-6 py-3 text-[14.5px] font-semibold no-underline rounded-md whitespace-nowrap hover:-translate-y-0.5 transition-transform"
            >
              Book Your Journey
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
