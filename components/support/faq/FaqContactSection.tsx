import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/ui/icon'

export default function FaqContactSection() {
  return (
    <section className="pt-2 pb-16 sm:pb-20">
      <div className="page-width">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2DDD3] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Support Specialist Photo (4 cols on lg) */}
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[280px] lg:col-span-4 overflow-hidden bg-[#0A0D0F]">
              <Image
                src="/images/support/support-agent.jpg"
                alt="MOVAGO 24/7 Executive Customer Support Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="size-full object-cover object-[center_35%] brightness-[1.02]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.6)_100%)] lg:bg-[linear-gradient(90deg,transparent_70%,rgba(255,255,255,0.15)_100%)]"
              />
            </div>

            {/* Center: Help Copy & CTA Button (4 cols on lg) */}
            <div className="p-6 sm:p-8 lg:p-9 lg:col-span-4 flex flex-col justify-center">
              <h3 className="m-0 font-sans text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#111311] leading-snug">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="m-0 mt-3 font-sans text-sm sm:text-base text-[#666860] leading-relaxed">
                Our support team is here to help you 24/7. Reach out anytime and we will be happy to assist you.
              </p>

              <div className="mt-6 sm:mt-7">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-12.5 items-center justify-center gap-2 rounded-xl bg-gold px-7 text-sm sm:text-base font-bold text-black shadow-[0_4px_16px_rgba(197,160,115,0.25)] transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline active:scale-95"
                >
                  <span>Contact Support</span>
                  <Icon name="send" size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Quick Direct Contact Channels (4 cols on lg) with Vertical Divider */}
            <div className="relative p-6 sm:p-7 lg:p-8 lg:col-span-4 bg-[#FAF8F5]/50 lg:bg-transparent flex flex-col justify-center gap-3.5 sm:gap-4">
              {/* Vertical divider line | on desktop */}
              <div
                aria-hidden
                className="hidden lg:block absolute left-0 top-8 bottom-8 w-[1px] bg-[#E2DDD3]"
              />
              {/* Horizontal divider line on mobile/tablet */}
              <div
                aria-hidden
                className="lg:hidden absolute top-0 left-6 right-6 h-[1px] bg-[#E2DDD3]"
              />

              {/* Call Channel */}
              <a
                href="tel:+6620264699"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:bg-[#FAF8F5] hover:shadow-xs no-underline text-inherit cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <span className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gold/15 text-gold group-hover:scale-105 transition-transform">
                    <Icon name="phone" size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-[#111311] leading-snug">Call Us 24/7</div>
                    <div className="text-xs sm:text-sm text-[#555750] font-medium mt-0.5 truncate">+66 2 026 4699</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold group-hover:translate-x-0.5 transition-all ml-2 shrink-0">
                  <Icon name="chevron-right" size={18} />
                </span>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://wa.me/6620264699"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:bg-[#FAF8F5] hover:shadow-xs no-underline text-inherit cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <span className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#25D366]/15 text-[#25D366] group-hover:scale-105 transition-transform">
                    <Icon name="whatsapp" size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-[#111311] leading-snug">WhatsApp</div>
                    <div className="text-xs sm:text-sm text-[#555750] font-medium mt-0.5 truncate">+66 2 026 4699</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold group-hover:translate-x-0.5 transition-all ml-2 shrink-0">
                  <Icon name="chevron-right" size={18} />
                </span>
              </a>

              {/* Email Channel */}
              <a
                href="mailto:support@movago.co.th"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:bg-[#FAF8F5] hover:shadow-xs no-underline text-inherit cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <span className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gold/15 text-gold group-hover:scale-105 transition-transform">
                    <Icon name="mail" size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-[#111311] leading-snug">Email Us</div>
                    <div className="text-xs sm:text-sm text-[#555750] font-medium mt-0.5 truncate">support@movago.co.th</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold group-hover:translate-x-0.5 transition-all ml-2 shrink-0">
                  <Icon name="chevron-right" size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
