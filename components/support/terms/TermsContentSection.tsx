import Link from 'next/link'
import { TERMS_SECTIONS } from '@/data/support'
import type { PolicySection } from '@/types/support'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'

type TermsContentSectionProps = {
  section: PolicySection
  allSections?: PolicySection[]
  onNavigate?: (id: string) => void
}

export default function TermsContentSection({
  section,
  allSections = TERMS_SECTIONS,
  onNavigate = () => {},
}: TermsContentSectionProps) {
  const sectionsList = allSections || TERMS_SECTIONS
  const currentIndex = sectionsList.findIndex((s) => s.id === section.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex >= 0 && currentIndex < sectionsList.length - 1
  const prevSection = hasPrev ? sectionsList[currentIndex - 1] : null
  const nextSection = hasNext ? sectionsList[currentIndex + 1] : null

  return (
    <div className="h-full w-full">
      {/* Main Section Card (Matches height of Terms Overview on desktop) */}
      <div className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EBE6DC]/80 w-full">
        <article id={section.id} className="w-full">
          {/* Section Header with Number Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center rounded-lg bg-gold/15 text-gold border border-gold/30 px-2.5 py-0.5 text-xs font-bold font-sans">
              Section {section.number} of {sectionsList.length}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="m-0 font-sans text-xl sm:text-2xl lg:text-[25px] font-bold text-[#111311] tracking-tight leading-snug">
            {section.number}. {section.title}
          </h2>

          {/* Subtle Horizontal Divider */}
          <div className="mt-3 mb-4 h-px bg-[#EBE6DC]" aria-hidden />

          {/* Section Description Card (Highlights key principle and fills space naturally) */}
          {section.description && (
            <div className="mb-3.5 rounded-2xl border border-gold/20 bg-[#FAF8F5] p-3 sm:p-3.5 flex items-start gap-3">
              <span className="flex size-7.5 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/25 mt-0.5">
                <Icon name="shield-check" size={15} />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gold font-sans mb-0.5">
                  Section Overview
                </div>
                <p className="m-0 font-sans text-xs sm:text-sm text-[#333630] leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          )}

          {/* Main Content */}
          {section.content && (
            <p className="m-0 mt-2.5 font-sans text-sm sm:text-base text-[#4D5048] leading-relaxed">
              {section.content}
            </p>
          )}

          {/* Bullet Points */}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3.5 space-y-2 pl-0 list-none">
              {section.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-[#4D5048] leading-relaxed"
                >
                  <span className="size-2 rounded-full bg-gold shrink-0 mt-2.5" />
                  <div>
                    {bullet.term && (
                      <span className="font-semibold text-[#111311] mr-1.5">
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
            <div className="mt-3.5">
              <Link
                href={section.actionLink.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-gold-hover transition-colors no-underline"
              >
                <span>{section.actionLink.label}</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          )}
        </article>

        {/* Integrated Reading Navigation Footer (3-Column Grid for Perfect Dead-Centering of Section X of Y) */}
        <nav
          aria-label="Section pagination"
          className="mt-6 sm:mt-8 pt-5 border-t border-[#EBE6DC] grid grid-cols-3 items-center gap-2 sm:gap-4"
        >
          {/* Left Column: Previous Button */}
          <div className="flex justify-start">
            <button
              type="button"
              disabled={!hasPrev}
              onClick={() => prevSection && onNavigate(prevSection.id)}
              aria-label={hasPrev ? `Go to Section ${prevSection?.number}` : 'No previous section'}
              className={cn(
                'inline-flex items-center justify-center rounded-xl px-4 sm:px-5 h-11 min-w-[100px] sm:min-w-[130px] text-xs sm:text-sm font-semibold transition-all font-sans shrink-0 whitespace-nowrap text-center outline-none focus:outline-none',
                hasPrev
                  ? 'border border-[#D5CDBD] bg-white text-[#111311] hover:border-gold hover:bg-[#FAF8F5] hover:text-black cursor-pointer active:scale-95 shadow-none'
                  : 'border border-[#EBE6DC] bg-[#FAF8F5] text-[#A8AAA2] opacity-60 cursor-not-allowed',
              )}
            >
              <span>Previous</span>
            </button>
          </div>

          {/* Center Column: Section Indicator (100% Mathematically Dead-Center) */}
          <div className="text-center font-sans text-xs sm:text-sm font-medium text-[#666860] px-1 whitespace-nowrap">
            Section <span className="text-[#111311] font-bold">{section.number}</span> of{' '}
            <span className="font-semibold">{sectionsList.length}</span>
          </div>

          {/* Right Column: Next Button */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!hasNext}
              onClick={() => nextSection && onNavigate(nextSection.id)}
              aria-label={hasNext ? `Go to Section ${nextSection?.number}` : 'No next section'}
              className={cn(
                'inline-flex items-center justify-center rounded-xl px-4 sm:px-5 h-11 min-w-[100px] sm:min-w-[130px] text-xs sm:text-sm font-semibold transition-all font-sans shrink-0 whitespace-nowrap text-center border-0 border-none outline-none focus:outline-none ring-0 focus:ring-0 shadow-none',
                hasNext
                  ? 'bg-gold text-black hover:bg-gold-hover hover:-translate-y-0.5 cursor-pointer active:scale-95'
                  : 'bg-[#FAF8F5] text-[#A8AAA2] opacity-60 cursor-not-allowed',
              )}
            >
              <span>Next</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

