import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textChampagne, textGold } from '@/utils/ui/colors'

const DIFFERENCES = [
  {
    icon: 'car',
    title: 'Luxury Vehicles',
    desc: 'Premium EV vehicles offering the highest comfort and style.',
  },
  {
    icon: 'user',
    title: 'Professional Chauffeurs',
    desc: 'Experienced, trained, and courteous chauffeurs with a commitment to service.',
  },
  {
    icon: 'shield',
    title: 'Safety First',
    desc: 'Fully insured, well-maintained vehicles and strict safety standards.',
  },
  {
    icon: 'clock',
    title: 'On-Time Guarantee',
    desc: 'Real-time tracking and traffic monitoring for punctual arrivals.',
  },
  {
    icon: 'headset',
    title: '24/7 Support',
    desc: 'Dedicated support team available anytime, anywhere.',
  },
  {
    icon: 'leaf',
    title: 'Sustainable Mobility',
    desc: 'Committed to a greener future with 100% electric and eco-friendly options.',
  },
]

export default function AboutDifferenceSection() {
  return (
    <section className="bg-[#080a0a] py-14 lg:py-20">
      <div className="page-width">
        <div className="mb-11 text-center">
          <div className={cn('eyebrow', textChampagne)}>WHY CHOOSE MOVAGO</div>
          <h2 className="mt-2 text-[26px] font-bold leading-[1.2] text-white sm:text-[clamp(28px,2.6vw,36px)]">
            Experience the MOVAGO Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 md:grid-cols-3 xl:grid-cols-6">
          {DIFFERENCES.map((item) => (
            <div
              className="flex flex-col items-center rounded-[10px] border border-white/[0.09] bg-[#111414] px-3.5 pt-6 pb-5 text-center transition-all duration-250 hover:-translate-y-[3px] hover:border-[rgba(229,180,93,0.5)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
              key={item.title}
            >
              <div className={cn('mb-3.5 flex size-12 items-center justify-center', textGold)}>
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className={cn('mb-2.5 m-0 text-[15px] font-semibold leading-[1.3]', textGold)}>
                {item.title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.5] text-[#a4a7a0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
