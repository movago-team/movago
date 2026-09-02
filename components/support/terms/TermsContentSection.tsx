import Link from 'next/link'
import type { PolicySection } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type TermsContentSectionProps = {
  sections: PolicySection[]
}

export default function TermsContentSection({ sections }: TermsContentSectionProps) {
  return (
    <div className="rounded-3xl bg-white pt-5 sm:pt-6 px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
      <div>
        {sections.map((section, idx) => (
          <div key={section.id}>
            <article
              id={section.id}
              className={cn(
                'pb-5 sm:pb-6 scroll-mt-28',
                idx === 0 ? 'pt-0' : 'pt-5 sm:pt-6',
              )}
            >
              {/* Section Header */}
              <h2 className="m-0 font-sans text-lg sm:text-xl font-medium text-[#111311] tracking-tight leading-7">
                {section.number}. {section.title}
              </h2>

            {/* Description if present */}
            {section.description && (
              <p className="m-0 mt-3 font-sans text-base text-[#4D5048] leading-relaxed">
                {section.description}
              </p>
            )}

            {/* Main Content */}
            {section.content && (
              <p className="m-0 mt-3 font-sans text-base text-[#4D5048] leading-relaxed">
                {section.content}
              </p>
            )}

            {/* Bullet Points */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 space-y-2.5 pl-0 list-none">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base text-[#4D5048] leading-relaxed">
                    <span className="size-2 rounded-full bg-gold shrink-0 mt-2" />
                    <div>
                      {bullet.term && (
                        <span className="font-medium text-[#111311] mr-1.5">
                          {bullet.term}
                        </span>
                      )}
                      <span>{bullet.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Action Link if present */}
            {section.actionLink && (
              <div className="mt-4">
                <Link
                  href={section.actionLink.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-hover transition-colors no-underline"
                >
                  <span>{section.actionLink.label}</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            )}
          </article>

          {idx < sections.length - 1 && (
            <div aria-hidden className="w-full h-[1px] bg-[#EBE6DC]" />
          )}
        </div>
      ))}
    </div>

      {/* Bottom Booking Acknowledgment CTA Banner */}
      <div className="mt-8 rounded-2xl border border-gold/30 bg-[#FAF6F0] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/25">
            <Icon name="shield-check" size={22} />
          </span>
          <p className="m-0 font-sans text-sm sm:text-base text-[#222420] font-normal leading-snug">
            By making a booking with MOVAGO, you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.
          </p>
        </div>

        <Link
          href="/book"
          className="shrink-0 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-base font-medium text-black transition-all hover:bg-gold-hover hover:-translate-y-0.5 no-underline whitespace-nowrap"
        >
          <span>Book Your Journey</span>
          <Icon name="send" size={16} />
        </Link>
      </div>
    </div>
  )
}
