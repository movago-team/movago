import Link from 'next/link'
import Icon from '@/components/ui/icon'

const PILLARS = [
  {
    icon: 'shield',
    title: 'Our Mission',
    desc: 'To provide world-class mobility solutions that exceed expectations and create memorable experiences.',
  },
  {
    icon: 'eye',
    title: 'Our Vision',
    desc: "To be Southeast Asia's most trusted premium mobility brand, setting the standard for safety, service, and sustainability.",
  },
  {
    icon: 'diamond',
    title: 'Our Promise',
    desc: 'We are committed to punctuality, discretion, and excellence in every detail of your journey.',
  },
  {
    icon: 'leaf',
    title: 'Our Values',
    desc: 'Safety First, Customer Focused, Integrity, Innovation, and Sustainability.',
  },
]

export default function AboutHero() {
  return (
    <section className="about-hero relative overflow-hidden flex flex-col justify-between text-white pt-5 pb-7 md:pt-8 md:pb-10 bg-[#060808]">
      <div className="about-hero-bg absolute inset-0 z-0">
        <img
          src="/images/heroes/hero-temp.png"
          alt="MOVAGO Executive Airport Chauffeur Service"
          className="about-hero-img w-full h-full object-cover object-[right_40%]"
        />
        <div className="about-hero-overlay absolute inset-0 pointer-events-none" />
      </div>

      <div className="page-width about-hero-container relative z-[1] flex flex-col justify-between gap-9">
        {/* Breadcrumb */}
        <nav className="about-breadcrumb inline-flex items-center gap-2 text-[13px] font-medium text-[#9da099] mb-5" aria-label="Breadcrumb">
          <Link href="/" className="text-[#9da099] hover:text-gold transition-colors no-underline">
            Home
          </Link>
          <span className="about-breadcrumb-sep text-[#666862] text-[11px]">&gt;</span>
          <span className="about-breadcrumb-current text-gold font-semibold">About Us</span>
        </nav>

        {/* Text Content */}
        <div className="about-hero-content max-w-[520px]">
          <h1 className="about-hero-title text-[30px] sm:text-[clamp(34px,3.8vw,50px)] font-bold text-white leading-[1.1] mb-3.5 tracking-tight">
            About MOVAGO
          </h1>
          <p className="about-hero-tagline text-[17px] sm:text-[clamp(18px,1.8vw,24px)] font-semibold text-gold leading-tight mb-4">
            Redefining Premium Mobility
            <br />
            with Purpose and Passion
          </p>
          <div className="about-hero-description space-y-3 text-[14.5px] leading-[1.6] text-[#c4c6bf]">
            <p className="m-0">
              MOVAGO was born from a simple belief — every journey deserves to be safe, comfortable, and exceptional.
            </p>
            <p className="m-0">
              We combine luxury vehicles, professional chauffeurs, and advanced technology to deliver premium airport transfer and executive chauffeur services across Thailand and beyond.
            </p>
          </div>
        </div>

        {/* Bottom Hero Panel: Mission / Vision / Promise / Values */}
        <div className="about-hero-panel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7 md:mt-4 bg-[#0d1010]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.35)] overflow-hidden">
          {PILLARS.map((item) => (
            <div
              className="about-panel-col p-5 lg:py-[22px] lg:px-5 flex flex-col gap-2.5 border-b md:border-b-0 border-white/[0.08] last:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(even)]:border-r-0 lg:border-r lg:last:border-r-0 md:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              key={item.title}
            >
              <div className="about-panel-header flex items-center gap-3">
                <span className="about-panel-icon w-9 h-9 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] inline-flex items-center justify-center flex-shrink-0 text-gold">
                  <Icon name={item.icon} size={29} />
                </span>
                <h2 className="about-panel-title text-base font-semibold text-white m-0">{item.title}</h2>
              </div>
              <p className="about-panel-desc text-[13px] leading-[1.5] text-[#a4a7a0] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
