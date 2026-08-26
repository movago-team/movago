import Icon from '@/components/ui/icon'

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
    <section className="about-difference bg-[#080a0a] py-14 lg:py-20">
      <div className="page-width">
        {/* Centered Section Header */}
        <div className="about-section-heading text-center mb-11">
          <span className="eyebrow about-eyebrow block text-[13px] font-bold tracking-[0.1em] text-[#a37c44] mb-2">
            WHY CHOOSE MOVAGO
          </span>
          <h2 className="about-heading-title text-[26px] sm:text-[clamp(28px,2.6vw,36px)] font-bold text-white mt-2 leading-[1.2]">
            Experience the MOVAGO Difference
          </h2>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="about-difference-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-3.5">
          {DIFFERENCES.map((item) => (
            <div
              className="about-diff-card bg-[#111414] border border-white/[0.09] rounded-[10px] p-[24px_14px_20px] flex flex-col items-center text-center transition-all duration-250 hover:-translate-y-[3px] hover:border-[rgba(229,180,93,0.5)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
              key={item.title}
            >
              <div className="about-diff-icon w-12 h-12 flex items-center justify-center text-gold mb-3.5">
                <Icon name={item.icon} size={32} />
              </div>
              <h3 className="about-diff-title text-[15px] font-semibold text-gold mb-2.5 leading-[1.3] m-0">
                {item.title}
              </h3>
              <p className="about-diff-desc text-[12.5px] leading-[1.5] text-[#a4a7a0] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
