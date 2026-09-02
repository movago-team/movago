'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { OTHER_WAYS_CARDS, QUICK_ANSWERS_FAQS } from '@/data/contact'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'

export default function ContactManageBookingSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('qa-cancel-booking')

  return (
    <section className="bg-[#F8F5EF] pt-3 sm:pt-4 lg:pt-5 pb-3 sm:pb-4 lg:pb-5">
      <div className="page-width">
        {/* Outer Rounded Container Card matching the top section box */}
        <div className="rounded-[32px] border-2 border-[#C5BBA7] bg-[#F8F5EF] p-7 sm:p-9 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          {/* Centered Heading exactly as in Image 2 */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#111311] tracking-tight">
              Other Ways We Can Help
            </h2>
          </div>

          {/* 4 Cards Row matching user's reference image (Icon on left, content on right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {OTHER_WAYS_CARDS.map((card) => (
              <div
                key={card.id}
                className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-[#E5DFD5] bg-white p-5 sm:p-5.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-[0_8px_24px_rgba(197,160,115,0.15)]"
              >
                {/* Left: High-Clarity Gold Icon */}
                <div className="shrink-0 text-[#C5A073] mt-0.5">
                  {card.id === 'faq' ? (
                    <svg
                      className="size-8 sm:size-9 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      <path d="M21 16v2a3 3 0 0 1-3 3h-5" />
                    </svg>
                  ) : card.id === 'manage' ? (
                    <svg
                      className="size-8 sm:size-9 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h18" />
                      <path d="m14 15 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5Z" />
                    </svg>
                  ) : card.id === 'issue' ? (
                    <svg
                      className="size-8 sm:size-9 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ) : (
                    <svg
                      className="size-8 sm:size-9 text-[#C5A073]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L13 12" />
                      <path d="m13 7 1.6-1.6a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8L16.2 12" />
                      <path d="m3 14 3-3a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8L7 18.4a1 1 0 0 1-1.4 0L3 16a1.4 1.4 0 0 1 0-2Z" />
                      <path d="m6 11 1.4-1.4a2 2 0 0 1 2.8 0L12 11" />
                    </svg>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="m-0 font-sans text-sm sm:text-base font-bold text-[#111311] leading-snug">
                    {card.title}
                  </h3>

                  <p className="m-0 mt-1 text-xs text-[#767870] leading-relaxed">
                    {card.desc}
                  </p>

                  {/* View link aligned at baseline */}
                  <div className="mt-2.5 sm:mt-3">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A073] hover:text-[#B38F62] transition-colors no-underline"
                    >
                      <span>{card.linkText}</span>
                      <Icon name="arrow-right" size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 3-Column Grid: FAQ Quick Answers + Map + Office Hours matching Image 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Column (4 cols): Dark FAQ Quick Answers */}
            <div
              id="faq-quick-answers"
              className="lg:col-span-4 rounded-2xl bg-[#0E1012] p-6 sm:p-7 text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-gold mb-1">
                  FAQ
                </div>
                <h3 className="m-0 font-sans text-xl sm:text-2xl font-bold text-white mb-4">
                  Quick Answers
                </h3>

                {/* 5 Accordion Questions */}
                <div className="divide-y divide-white/10">
                  {QUICK_ANSWERS_FAQS.map((faq) => {
                    const isOpen = openFaqId === faq.id
                    return (
                      <div key={faq.id} className="py-3">
                        <button
                          type="button"
                          onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                          className="flex w-full items-center justify-between gap-3 text-left text-xs sm:text-[13.5px] font-semibold text-white/90 hover:text-gold transition-colors cursor-pointer border-0 bg-transparent p-0"
                        >
                          <span>{faq.question}</span>
                          <span
                            className={cn(
                              'text-[#A4A7A0] transition-transform duration-200 shrink-0',
                              isOpen && 'rotate-180 text-gold',
                            )}
                          >
                            <Icon name="chevron-down" size={15} />
                          </span>
                        </button>
                        {isOpen && (
                          <p className="mt-2 text-xs text-[#C5C8C0] leading-relaxed m-0">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-champagne transition-colors no-underline"
                >
                  <span>View All FAQs</span>
                  <Icon name="arrow-right" size={13} />
                </Link>
              </div>
            </div>

            {/* Center Column (4 cols): Map with MOVAGO Head Office Pin */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden relative border border-[#D5CDBD] shadow-[0_4px_16px_rgba(0,0,0,0.06)] min-h-[340px] sm:min-h-[380px] bg-[#E8EDEA]">
              <Image
                src="/images/contact/bangkok-map.jpg"
                alt="MOVAGO Bangkok Head Office Location Map"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />

              {/* Floating Head Office Pin Badge matching Image 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-[#0E1012] text-white px-4 py-2.5 rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-white/15">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#C5A073] text-[#111311] shadow-sm">
                  <Icon name="pin" size={16} />
                </span>
                <div className="text-left">
                  <div className="text-[12px] font-bold tracking-wide">MOVAGO</div>
                  <div className="text-[10px] text-[#A4A7A0]">Head Office</div>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Office Hours & Our Office - Clean White Card with Layered Inner Sub-cards */}
            <div className="lg:col-span-4 rounded-2xl bg-white p-6 sm:p-7 border border-[#D5CDBD] shadow-[0_6px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between">
              <div className="space-y-4">
                {/* Office Hours Sub-card - Elevated White Layer */}
                <div className="rounded-2xl border border-[#E2DBD0] bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-gold/40 transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-[#FAF5ED] text-[#C5A073] border border-gold/25">
                        <Icon name="clock" size={16} />
                      </span>
                      <h4 className="m-0 font-sans text-sm sm:text-base font-bold text-[#111311]">
                        Office Hours
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8EE] border border-[#C5ECD4] px-2.5 py-0.5 text-xs font-bold text-[#1B8348]">
                      <span className="size-1.5 rounded-full bg-[#1B8348] animate-pulse" />
                      Open
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between text-xs sm:text-[13.5px] pt-2.5 border-t border-[#F0ECE4]">
                    <span className="text-[#767870]">Monday – Sunday</span>
                    <span className="font-bold text-[#111311]">24 Hours</span>
                  </div>
                </div>

                {/* Our Office Sub-card - Elevated White Layer */}
                <div className="rounded-2xl border border-[#E2DBD0] bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-gold/40 transition-all duration-200">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-[#FAF5ED] text-[#C5A073] border border-gold/25">
                      <Icon name="pin" size={16} />
                    </span>
                    <h4 className="m-0 font-sans text-sm sm:text-base font-bold text-[#111311]">
                      Our Office
                    </h4>
                  </div>

                  <div className="text-xs sm:text-[13.5px] leading-relaxed pt-2.5 border-t border-[#F0ECE4]">
                    <p className="m-0 font-bold text-[#111311]">
                      MOVAGO Headquarters
                    </p>
                    <p className="m-0 mt-1 text-[#666860]">
                      Gaysorn Tower, 23rd Floor<br />
                      999 Phloen Chit Road, Lumphini<br />
                      Bangkok, Thailand 10330
                    </p>
                    <p className="m-0 mt-2 text-[11.5px] font-medium text-[#8C8F86]">
                      Direct BTS Chit Lom Skywalk Access
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Solid Gold Button */}
              <div className="pt-5 mt-4">
                <a
                  href="https://maps.google.com/?q=Gaysorn+Tower+Bangkok"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-gold hover:bg-gold-hover text-sm font-bold text-black shadow-[0_6px_20px_rgba(197,160,115,0.35)] transition-all no-underline cursor-pointer border-0"
                >
                  <span>Get Directions</span>
                  <Icon name="arrow-right" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
