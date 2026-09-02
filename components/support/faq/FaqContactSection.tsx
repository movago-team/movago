import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/ui/icon'

export default function FaqContactSection() {
  return (
    <section className="pt-2 pb-20">
      <div className="page-width max-w-[1040px]">
        <div className="overflow-hidden rounded-3xl border border-[#E2DDD3] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Support Specialist Photo (4 cols) */}
            <div className="relative h-64 sm:h-72 lg:h-full min-h-[280px] lg:col-span-4 overflow-hidden bg-[#0A0D0F]">
              <Image
                src="/images/support/support-agent.jpg"
                alt="MOVAGO 24/7 Executive Customer Support Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="size-full object-cover object-[center_35%] brightness-[1.02]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.6)_100%)] lg:bg-[linear-gradient(90deg,transparent_70%,rgba(255,255,255,0.2)_100%)]"
              />
            </div>

            {/* Center: Help Copy & CTA Button (5 cols) */}
            <div className="p-7 sm:p-8 lg:p-9 lg:col-span-5 flex flex-col justify-center">
              <h3 className="m-0 font-sans text-2xl sm:text-[26px] font-bold tracking-tight text-[#111311]">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="m-0 mt-2.5 font-sans text-base text-[#666860] leading-relaxed">
                Our support team is here to help you 24/7. Reach out anytime and we will be happy to assist you.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-base font-bold text-black shadow-[0_4px_16px_rgba(197,160,115,0.3)] transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline"
                >
                  <span>Contact Support</span>
                  <Icon name="send" size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Quick Direct Contact Channels (3 cols) with Vertical Divider */}
            <div className="relative p-6 sm:p-7 lg:col-span-3 bg-white flex flex-col justify-center gap-3">
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
                className="group flex items-center justify-between p-3 rounded-xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:shadow-sm no-underline text-inherit"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Icon name="phone" size={17} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#111311]">Call Us 24/7</div>
                    <div className="text-xs text-[#666860] truncate">+66 2 026 4699</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold transition-colors ml-2">
                  <Icon name="chevron-right" size={16} />
                </span>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://wa.me/6620264699"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:shadow-sm no-underline text-inherit"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                    <Icon name="whatsapp" size={17} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#111311]">WhatsApp</div>
                    <div className="text-xs text-[#666860] truncate">+66 2 026 4699</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold transition-colors ml-2">
                  <Icon name="chevron-right" size={16} />
                </span>
              </a>

              {/* Email Channel */}
              <a
                href="mailto:support@movago.co.th"
                className="group flex items-center justify-between p-3 rounded-xl border border-[#E5DFD5] bg-white transition-all hover:border-gold hover:shadow-sm no-underline text-inherit"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Icon name="mail" size={17} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#111311]">Email Us</div>
                    <div className="text-xs text-[#666860] truncate">support@movago.co.th</div>
                  </div>
                </div>
                <span className="text-[#8C8F86] group-hover:text-gold transition-colors ml-2">
                  <Icon name="chevron-right" size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
