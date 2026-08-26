import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { textChampagne } from '@/utils/ui/colors'

const FEATURES = [
  {
    icon: 'car',
    title: 'Premium Experience',
    description: 'Luxury vehicles, professional chauffeurs and superior service.',
  },
  {
    icon: 'shield',
    title: 'Safety First',
    description: 'Fully insured, certified drivers and rigorous safety standards.',
  },
  {
    icon: 'clock',
    title: 'On-Time Guarantee',
    description: 'Flight tracking and real-time traffic monitoring.',
  },
  {
    icon: 'bag',
    title: 'All-Inclusive Pricing',
    description: 'No hidden fees. All tolls, parking and waiting time included.',
  },
] as const

export default function WhySection() {
  return (
    <section className="bg-canvas py-14 max-[600px]:py-10">
      <div className="page-width-full grid grid-cols-1 items-center gap-8 min-[901px]:grid-cols-[0.78fr_1.35fr] min-[901px]:gap-[52px]">
        <div>
          <div className="eyebrow">WHY CHOOSE MOVAGO</div>
          <h2 className="mb-2 text-[clamp(28px,2vw,34px)] font-medium leading-tight">
            More Than Just a Ride
          </h2>
          <p className="m-0 text-base leading-normal text-[#44443f]">
            We deliver a premium experience in every journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-11 gap-y-5 min-[601px]:grid-cols-2">
          {FEATURES.map(({ icon, title, description }) => (
            <article key={title} className="flex items-start gap-3.5">
              <span
                className={cn(
                  'grid size-[52px] shrink-0 place-items-center rounded-full bg-soft',
                  textChampagne,
                )}
              >
                <Icon name={icon} size={32} />
              </span>
              <div>
                <h3 className="mb-1 mt-px text-base font-semibold">{title}</h3>
                <p className="m-0 max-w-[350px] text-base leading-normal text-[#555550]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
