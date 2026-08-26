import Link from 'next/link'
import Icon from '@/components/ui/icon'
import { BOOK_NOW_HREF } from '@/constants/navigation'

/**
 * Placeholder statistics matching the approved reference design.
 * Update these values when official verified corporate data is provided.
 */
const STATS = [
  {
    icon: 'award',
    value: '5+',
    label: 'Years of Excellence',
  },
  {
    icon: 'car',
    value: '500,000+',
    label: 'Journeys Completed',
  },
  {
    icon: 'users',
    value: '50,000+',
    label: 'Happy Customers',
  },
  {
    icon: 'shield',
    value: '98%',
    label: 'Customer Satisfaction',
  },
]

export default function AboutStorySection() {
  return (
    <section className="about-story bg-[#f7f4ed] py-14 lg:py-20">
      <div className="page-width">
        <div className="about-story-grid grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">
          {/* Left: Story Copy */}
          <div className="about-story-content">
            <span className="eyebrow about-eyebrow block text-[13px] font-bold tracking-[0.1em] text-[#a37c44] mb-2">
              OUR STORY
            </span>
            <h2 className="about-story-title text-[26px] sm:text-[clamp(28px,2.6vw,36px)] font-bold text-[#121414] leading-[1.2] m-0">
              The MOVAGO Story
            </h2>
            <div className="about-title-accent w-11 h-[3px] bg-gold rounded-sm my-3.5 mb-5.5" aria-hidden="true" />

            <div className="about-story-paragraphs space-y-4 text-[15px] leading-[1.65] text-[#434645]">
              <p className="m-0">
                MOVAGO was founded with a passion for hospitality and a deep understanding of what modern travelers and business professionals truly need.
              </p>
              <p className="m-0">
                We saw a gap in the market — a need for a premium transfer service that blends cutting-edge technology, outstanding service, and luxurious comfort.
              </p>
              <p className="m-0">
                Today, MOVAGO proudly serves thousands of passengers, corporations, and travel partners with a commitment to continuous improvement and unwavering standards.
              </p>
            </div>

            <div className="about-story-cta mt-6">
              <Link
                href={BOOK_NOW_HREF}
                className="gold-btn about-btn inline-flex items-center gap-2 px-6 py-3 text-[14.5px] font-semibold no-underline rounded-md hover:-translate-y-0.5 transition-transform"
              >
                Learn More
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Visual + Statistics Panel */}
          <div className="about-story-media relative">
            <div className="about-story-img-wrap relative rounded-[14px] overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.12)] flex flex-col lg:flex-row min-h-auto lg:min-h-[380px] h-full">
              <img
                src="/images/about/story-bangkok.jpg"
                alt="MOVAGO Executive Transportation across Bangkok"
                className="about-story-img w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] object-cover"
              />
              <div className="about-story-stats-card static lg:absolute lg:top-0 lg:bottom-0 lg:right-0 w-full lg:w-[230px] bg-[#0e1111]/95 backdrop-blur-[10px] border-t lg:border-t-0 lg:border-l border-white/12 p-5.5 lg:p-5 lg:py-6 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col lg:justify-around gap-4 sm:gap-5 lg:gap-0">
                {STATS.map((stat) => (
                  <div className="about-stat-row flex items-center gap-3.5" key={stat.label}>
                    <span className="about-stat-icon text-gold inline-flex items-center justify-center flex-shrink-0 w-8.5 h-8.5 sm:w-9 sm:h-9 lg:w-[38px] lg:h-[38px]">
                      <Icon name={stat.icon} size={29} />
                    </span>
                    <div className="about-stat-info">
                      <span className="about-stat-val block text-[21px] font-bold text-gold-2 leading-none">
                        {stat.value}
                      </span>
                      <span className="about-stat-lbl block text-[12.5px] text-[#9da099] leading-snug mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
