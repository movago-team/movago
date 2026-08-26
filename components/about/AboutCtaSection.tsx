import Link from 'next/link'
import Icon from '@/ui/icon'
import { BOOK_NOW_HREF } from '@/constants/navigation'
import { buttonClass } from '@/utils/ui/button'
import { cn } from '@/utils/cn'

export default function AboutCtaSection() {
  return (
    <section className="bg-[#f7f4ed] pb-14 lg:pb-20">
      <div className="page-width">
        <div className="grid grid-cols-1 items-center gap-0 overflow-hidden rounded-xl border border-white/12 bg-[#080b0b] shadow-[0_16px_36px_rgba(0,0,0,0.2)] md:grid-cols-[180px_1fr_auto] md:gap-5 md:pr-5.5 lg:grid-cols-[240px_1fr_auto] lg:gap-7 lg:pr-8">
          <div className="h-40 w-full shrink-0 overflow-hidden md:h-[118px] md:w-[180px] lg:w-[240px]">
            <img
              src="/images/about/cta-interior.jpg"
              alt="MOVAGO Luxury First-Class Cabin Interior"
              className="size-full object-cover"
            />
          </div>

          <div className="px-[18px] pt-[22px] pb-3.5 md:p-0">
            <h2 className="mb-1.5 m-0 text-lg font-bold leading-snug text-white sm:text-[clamp(19px,1.8vw,23px)]">
              Let&apos;s Move Forward, Together
            </h2>
            <p className="m-0 text-[13.5px] leading-[1.5] text-[#a4a7a0]">
              Whether it&apos;s for business or leisure, MOVAGO is here to make every journey exceptional.
            </p>
          </div>

          <div className="shrink-0 px-[18px] pb-[22px] md:p-0">
            <Link
              href={BOOK_NOW_HREF}
              className={cn(
                buttonClass({ variant: 'primary', size: 'lg' }),
                'w-full justify-center font-semibold hover:-translate-y-0.5 md:w-auto',
              )}
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
