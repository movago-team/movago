import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, textChampagne, textGold } from '@/utils/ui/colors'

export default function AboutLeadershipSection() {
  return (
    <section className="bg-[#f7f4ed] py-14 lg:py-20">
      <div className="page-width">
        <div className="mb-11 text-center">
          <div className={cn('eyebrow', textChampagne)}>OUR LEADERSHIP</div>
          <h2 className="mt-2 text-[26px] font-bold leading-[1.2] text-[#121414] sm:text-[clamp(28px,2.6vw,36px)]">
            Driven by Experience, Focused on You
          </h2>
          <div
            className={cn('mx-auto mt-3.5 mb-9.5 h-[3px] w-11 rounded-sm', bgGold)}
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.15fr_0.95fr]">
          <div className="h-[260px] w-full max-w-[480px] overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:h-[270px] lg:max-w-none">
            <img
              src="/images/about/leadership-team.jpg"
              alt="MOVAGO Executive Leadership Team"
              className="size-full object-cover object-[top_center]"
            />
          </div>

          <div>
            <div className="space-y-4 text-[15px] leading-[1.65] text-[#434645]">
              <p className="m-0">
                Our leadership team brings together expertise in hospitality, transportation, technology, and
                customer experience.
              </p>
              <p className="m-0">
                Together, we drive MOVAGO forward with innovation, passion, and a relentless focus on delivering
                exceptional journeys for every client.
              </p>
            </div>

            <div className="mt-5.5 flex flex-col gap-1">
              <span
                className={cn(
                  'font-serif text-[22px] font-medium italic leading-tight',
                  textChampagne,
                )}
              >
                The MOVAGO Leadership Team
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#767973]">
                The MOVAGO Leadership Team
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#101313] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.25)] sm:p-7">
            <div className={cn('inline-flex', textGold)}>
              <Icon name="quote" size={24} />
            </div>
            <blockquote className="m-0 text-base font-medium not-italic leading-[1.6] text-white">
              &ldquo;At MOVAGO, we don&apos;t just move people from one place to another — we elevate every
              journey.&rdquo;
            </blockquote>
            <div className={cn('h-[3px] w-9 rounded-sm', bgGold)} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
