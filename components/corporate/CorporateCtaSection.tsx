'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/ui'
import { CORPORATE_CONTACT_INFO } from '@/data/corporate'

export default function CorporateCtaSection() {
  return (
    <section className="bg-[#f8f5ef] pt-2 pb-14 sm:pt-3 sm:pb-16 lg:pt-4 lg:pb-20">
      <div className="page-width">
        <div className="relative isolate flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090c0d] shadow-[0_16px_40px_rgba(0,0,0,0.35)] lg:flex-row lg:items-stretch">
          {/* Left Column: Heading, Description & Action Button */}
          <div className="relative z-10 flex flex-col justify-center py-7 px-6 sm:py-8 sm:px-8 lg:py-8 lg:pl-9 lg:pr-6 lg:w-[42%] xl:w-[44%]">
            <h2 className="m-0 font-sans text-2xl font-bold leading-snug text-white sm:text-[26px] lg:text-[28px] tracking-tight">
              Let’s Drive Your Business Forward
            </h2>
            <p className="m-0 mt-2 max-w-[420px] font-sans text-xs leading-relaxed text-[#c4c8bf] sm:text-[13px]">
              Partner with MOVAGO for premium, reliable, and efficient corporate transportation
              solutions.
            </p>

            <div className="mt-5">
              <a
                href={CORPORATE_CONTACT_INFO.emailHref}
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-[#111311] transition-all hover:bg-gold-hover hover:shadow-lg sm:text-[13.5px]"
              >
                <span>Contact Our Corporate Team</span>
                <Icon name="arrow-right" size={15} />
              </a>
            </div>
          </div>

          {/* Center Column: Executive Vehicle Image Visual — Seamless Feathery Blur */}
          <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-auto lg:w-[35%] xl:w-[36%]">
            <Image
              src="/images/corporate/corporate-cta.jpg"
              alt="MOVAGO Corporate Executive Transportation Vehicle"
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-center scale-102"
            />
            {/* 4-Edge Feathery Blending Gradients */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090c0d] via-[#090c0d]/80 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#090c0d] via-[#090c0d]/80 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#090c0d] via-[#090c0d]/70 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090c0d] via-[#090c0d]/70 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,transparent_35%,rgba(9,12,13,0.5)_75%,#090c0d_100%)] z-10"
            />
          </div>

          {/* Right Column: Contact Details — Clean Icons (No Circle) */}
          <div className="relative z-10 flex flex-1 flex-col justify-center gap-4 border-t border-white/10 py-6 px-6 sm:py-7 sm:px-8 lg:border-t-0 lg:py-8 lg:pl-8 xl:pl-9 lg:pr-8">
            {/* Phone */}
            <a
              href={CORPORATE_CONTACT_INFO.phoneHref}
              className="group flex items-center gap-3.5 text-white/90 transition-colors hover:text-gold"
            >
              <span className="flex shrink-0 items-center justify-center text-gold transition-transform duration-200 group-hover:scale-110">
                <Icon name="phone" size={20} />
              </span>
              <span className="font-sans text-[13.5px] sm:text-[14.5px] font-medium tracking-wide">
                {CORPORATE_CONTACT_INFO.phone}
              </span>
            </a>

            {/* Email */}
            <a
              href={CORPORATE_CONTACT_INFO.emailHref}
              className="group flex items-center gap-3.5 text-white/90 transition-colors hover:text-gold"
            >
              <span className="flex shrink-0 items-center justify-center text-gold transition-transform duration-200 group-hover:scale-110">
                <Icon name="mail" size={20} />
              </span>
              <span className="font-sans text-[13.5px] sm:text-[14.5px] font-medium tracking-wide">
                {CORPORATE_CONTACT_INFO.email}
              </span>
            </a>

            {/* Website */}
            <Link
              href={CORPORATE_CONTACT_INFO.websiteHref}
              className="group flex items-center gap-3.5 text-white/90 transition-colors hover:text-gold"
            >
              <span className="flex shrink-0 items-center justify-center text-gold transition-transform duration-200 group-hover:scale-110">
                <Icon name="globe" size={20} />
              </span>
              <span className="font-sans text-[13.5px] sm:text-[14.5px] font-medium tracking-wide">
                {CORPORATE_CONTACT_INFO.website}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
