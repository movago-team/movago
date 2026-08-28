import Icon from '@/ui/icon'

const BENEFITS = [
  {
    icon: 'plane',
    title: 'Flight Tracking',
    desc: 'Real-time flight monitoring',
  },
  {
    icon: 'tag',
    title: 'No Hidden Fees',
    desc: 'All tolls and parking included',
  },
  {
    icon: 'user',
    title: 'Professional Chauffeurs',
    desc: 'Experienced and courteous',
  },
  {
    icon: 'headset',
    title: '24/7 Support',
    desc: "We're here anytime you need",
  },
  {
    icon: 'calendar',
    title: 'Flexible & Private',
    desc: 'Tailored to your schedule',
  },
]

export default function JourneyBenefitsSection() {
  return (
    <section className="bg-[#f8f5ef] pt-0 pb-5 sm:pb-6">
      <div className="page-width">
        {/* White Container Card */}
        <div className="rounded-2xl border border-black/[0.08] bg-white px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:px-8 sm:py-9 lg:px-8 lg:py-10">
          {/* Header */}
          <div className="text-center">
            <h2 className="m-0 text-2xl font-bold tracking-tight text-ink sm:text-[28px] lg:text-[30px]">
              Every Journey, Perfectly Managed
            </h2>
            {/* Gold Underline */}
            <div className="mx-auto mt-2.5 mb-7 h-[2.5px] w-12 rounded-full bg-gold sm:mb-8 lg:mb-9" />
          </div>

          {/* 5 Benefits 5-Column Grid with Top-Aligned Thin Dividers */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {BENEFITS.map((item, idx) => (
              <div
                key={item.title}
                className="relative flex items-start gap-3.5 sm:gap-4 lg:px-4 xl:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Large Gold Outline Icon aligned with title */}
                <div className="flex size-11 shrink-0 items-start justify-center pt-0.5 text-gold sm:size-12">
                  <Icon name={item.icon} size={42} />
                </div>
                {/* Title & Description in Inter Font */}
                <div className="min-w-0">
                  <h3 className="m-0 text-sm font-bold text-ink sm:text-[15.5px]">
                    {item.title}
                  </h3>
                  <p className="m-0 mt-1 text-xs leading-relaxed text-[#666] sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>

                {/* Thin vertical divider bar top-aligned with the heading */}
                {idx < BENEFITS.length - 1 && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-[0.5px] top-1 hidden h-11 w-[1px] bg-black/[0.12] lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
