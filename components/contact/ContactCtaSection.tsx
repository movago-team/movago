'use client'

import Image from 'next/image'
import { FOOTER_CONTACT } from '@/constants/footer'
import { Icon } from '@/ui'

const CTA_TRUST_BADGES = [
  {
    id: 'support',
    label: '24/7 Customer Support',
  },
  {
    id: 'response',
    label: 'Fast Response Time',
  },
  {
    id: 'team',
    label: 'Professional & Friendly Team',
  },
]

export default function ContactCtaSection() {
  return (
    <section className="bg-[#F8F5EF] pt-0 pb-12 sm:pb-16 lg:pb-20">
      <div className="page-width">
        <div className="relative isolate flex min-h-[140px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#0E1012] shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:flex-row lg:items-center">
          {/* Left: Cinematic Chauffeur & Vehicle Image */}
          <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-56 lg:h-[140px] lg:w-[22%] xl:w-[24%]">
            <Image
              src="/images/contact/chauffeur-banner.jpg"
              alt="MOVAGO Professional Private Chauffeur & Luxury Fleet"
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover object-[70%_25%]"
            />
            {/* Feathery edge gradient blending into the dark card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-[#0E1012] lg:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 block h-16 bg-gradient-to-t from-[#0E1012] to-transparent lg:hidden"
            />
          </div>

          {/* Center: Call to Action */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-5 sm:px-8 lg:py-4 lg:px-6 shrink-0">
            <h3 className="m-0 font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
              Need Personal Assistance?
            </h3>
            <p className="m-0 mt-1.5 text-xs sm:text-[13px] text-[#A4A7A0]">
              Our team is ready to help you 24/7.
            </p>

            <div className="mt-3.5">
              <a
                href={FOOTER_CONTACT.phoneHref}
                style={{ backgroundColor: '#C5A073' }}
                className="inline-flex items-center gap-2 rounded-xl !bg-[#C5A073] hover:!bg-[#B38F62] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#111311] shadow-[0_4px_16px_rgba(197,160,115,0.35)] transition-all hover:-translate-y-0.5 no-underline border-0 cursor-pointer"
              >
                <Icon name="phone" size={15} />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>

          {/* Right: 3 Trust Badges with Dark Rounded Squares and Gold Icons matching Reference */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-4.5 xl:gap-6 px-6 pb-6 pt-2 sm:px-8 lg:py-4 lg:pl-3 lg:pr-10 xl:pr-14 shrink-0">
            {CTA_TRUST_BADGES.map((item) => (
              <div key={item.id} className="flex items-center gap-2.5 sm:gap-3">
                {/* Dark Rounded Square Container */}
                <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-[#C5A073] shadow-sm">
                  {item.id === 'support' ? (
                    /* 24/7 Support Clock / Alarm Icon */
                    <svg
                      className="size-5 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="13" r="7" />
                      <polyline points="12 10 12 13 14 14.5" />
                      <path d="M16.5 4 19 6.5" />
                      <path d="M7.5 4 5 6.5" />
                    </svg>
                  ) : item.id === 'response' ? (
                    /* Fast Response Stopwatch Icon */
                    <svg
                      className="size-5 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="13" r="8" />
                      <path d="M12 9v4l2.5 2.5" />
                      <path d="M12 2v3" />
                      <path d="M10 2h4" />
                    </svg>
                  ) : (
                    /* Professional Team / User in Circle Icon */
                    <svg
                      className="size-5 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M7 18a5 5 0 0 1 10 0" />
                    </svg>
                  )}
                </div>

                <span className="font-sans text-xs xl:text-[13px] font-medium text-white/90 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
