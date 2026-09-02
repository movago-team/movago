import { PRIVACY_INFO_CARDS } from '@/data/support'
import type { PolicySection } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type PrivacyContentSectionProps = {
  sections: PolicySection[]
}

export default function PrivacyContentSection({ sections }: PrivacyContentSectionProps) {
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

                {/* Special 6 Information Cards for Section 2 */}
                {section.id === 'information-we-collect' && (
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-4">
                    {PRIVACY_INFO_CARDS.map((card) => (
                      <div
                        key={card.id}
                        className="flex items-start gap-3.5 rounded-2xl border border-[#E5DFD5] bg-[#FAF8F5]/60 p-4 sm:p-4.5 transition-all hover:border-gold/50 hover:bg-white hover:shadow-sm"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/20 mt-0.5">
                          <Icon name={card.icon} size={18} />
                        </span>
                        <div className="min-w-0">
                          <div className="font-sans text-sm sm:text-[15px] font-medium text-[#111311] leading-snug">
                            {card.title}
                          </div>
                          <div className="text-xs text-[#666860] mt-1 leading-relaxed">
                            {card.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points with Gold Checked Circles for Section 3 or other sections */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5 pl-0 list-none">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-base text-[#4D5048] leading-relaxed">
                        <span className="text-gold shrink-0 mt-0.5">
                          <Icon name="check-circle" size={17} />
                        </span>
                        <div>
                          {bullet.term && (
                            <strong className="font-medium text-[#111311] mr-1.5">
                              {bullet.term}
                            </strong>
                          )}
                          <span>{bullet.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Main Content */}
                {section.content && (
                  <p className="m-0 mt-3.5 font-sans text-base text-[#4D5048] leading-relaxed">
                    {section.content}
                  </p>
                )}

                {/* Optional expand / action link */}
                {section.id === 'how-we-use-your-information' && (
                  <div className="mt-3">
                    <a
                      href="#how-we-share-your-information"
                      className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-hover transition-colors no-underline"
                    >
                      <span>View full policy details below</span>
                      <Icon name="chevron-down" size={15} />
                    </a>
                  </div>
                )}
              </article>

              {/* Divider Line between sections */}
              {idx < sections.length - 1 && (
                <div aria-hidden className="w-full h-[1px] bg-[#EBE6DC]" />
              )}
            </div>
          ))}
        </div>
      </div>
  )
}
