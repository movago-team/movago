import Link from 'next/link'
import Icon from '@/ui/icon'
import { BOOK_NOW_HREF } from '@/constants/navigation'
import { buttonClass } from '@/utils/ui/button'
import { cn } from '@/utils/cn'
import { bgGold, textGold, textGoldBright } from '@/utils/ui/colors'

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
    <section className="bg-[#f7f4ed] py-14 lg:py-20">
      <div className="page-width">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div>
            <div className="eyebrow">OUR STORY</div>
            <h2 className="m-0 text-[26px] font-bold leading-[1.2] text-[#121414] sm:text-[clamp(28px,2.6vw,36px)]">
              The MOVAGO Story
            </h2>
            <div className={cn('my-3.5 mb-5.5 h-[3px] w-11 rounded-sm', bgGold)} aria-hidden="true" />

            <div className="space-y-4 text-[15px] leading-[1.65] text-[#434645]">
              <p className="m-0">
                MOVAGO was founded with a passion for hospitality and a deep understanding of what modern
                travelers and business professionals truly need.
              </p>
              <p className="m-0">
                We saw a gap in the market — a need for a premium transfer service that blends cutting-edge
                technology, outstanding service, and luxurious comfort.
              </p>
              <p className="m-0">
                Today, MOVAGO proudly serves thousands of passengers, corporations, and travel partners with a
                commitment to continuous improvement and unwavering standards.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={BOOK_NOW_HREF}
                className={cn(
                  buttonClass({ variant: 'primary', size: 'lg' }),
                  'font-semibold hover:-translate-y-0.5',
                )}
              >
                Learn More
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] shadow-[0_14px_40px_rgba(0,0,0,0.12)] lg:min-h-[380px] lg:flex-row">
              <img
                src="/images/about/story-bangkok.jpg"
                alt="MOVAGO Executive Transportation across Bangkok"
                className="size-full min-h-[260px] object-cover sm:min-h-[320px] lg:min-h-[380px]"
              />
              <div className="static grid w-full grid-cols-1 gap-4 border-t border-white/12 bg-[#0e1111]/95 p-5.5 backdrop-blur-[10px] sm:grid-cols-2 sm:gap-5 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:w-[230px] lg:flex-col lg:justify-around lg:gap-0 lg:border-t-0 lg:border-l lg:p-5 lg:py-6">
                {STATS.map((stat) => (
                  <div className="flex items-center gap-3.5" key={stat.label}>
                    <span
                      className={cn(
                        'inline-flex size-8.5 shrink-0 items-center justify-center sm:size-9 lg:size-[38px]',
                        textGold,
                      )}
                    >
                      <Icon name={stat.icon} size={29} />
                    </span>
                    <div>
                      <span className={cn('block text-[21px] font-bold leading-none', textGoldBright)}>
                        {stat.value}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-[#9da099]">
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
