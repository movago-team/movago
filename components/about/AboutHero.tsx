import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

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
    <section className="relative flex flex-col justify-between overflow-hidden bg-[#060808] pt-[74px] pb-7 text-white md:pb-10 max-[600px]:pt-[68px]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/heroes/hero-temp.png"
          alt="MOVAGO Executive Airport Chauffeur Service"
          className="size-full object-cover object-[right_40%]"
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0',
            'bg-[linear-gradient(90deg,rgba(6,8,8,0.98)_0%,rgba(6,8,8,0.94)_36%,rgba(6,8,8,0.72)_56%,rgba(6,8,8,0.35)_76%,rgba(6,8,8,0.65)_100%),linear-gradient(180deg,rgba(0,0,0,0.45)_0%,transparent_25%,transparent_70%,rgba(6,8,8,0.95)_100%)]',
            'max-md:bg-[linear-gradient(180deg,rgba(6,8,8,0.95)_0%,rgba(6,8,8,0.88)_45%,rgba(6,8,8,0.96)_100%)]',
          )}
        />
      </div>

      <div className="page-width-full relative z-[1] flex flex-col justify-between gap-9">
        <div className="max-w-[520px]">
          <h1 className="mb-3.5 text-[30px] font-bold leading-[1.1] tracking-tight text-white sm:text-[clamp(34px,3.8vw,50px)]">
            About MOVAGO
          </h1>
          <p
            className={cn(
              'mb-4 text-[17px] font-semibold leading-tight sm:text-[clamp(18px,1.8vw,24px)]',
              textGold,
            )}
          >
            Redefining Premium Mobility
            <br />
            with Purpose and Passion
          </p>
          <div className="space-y-3 text-[14.5px] leading-[1.6] text-[#c4c6bf]">
            <p className="m-0">
              MOVAGO was born from a simple belief — every journey deserves to be safe, comfortable, and
              exceptional.
            </p>
            <p className="m-0">
              We combine luxury vehicles, professional chauffeurs, and advanced technology to deliver premium
              airport transfer and executive chauffeur services across Thailand and beyond.
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-[#0d1010]/90 shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-md md:mt-4 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item) => (
            <div
              className="flex flex-col gap-2.5 border-b border-white/[0.08] p-5 last:border-b-0 md:border-b-0 md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(even)]:border-r-0 md:[&:nth-child(odd)]:border-r lg:border-r lg:px-5 lg:py-[22px] lg:last:border-r-0 lg:[&:nth-child(-n+2)]:border-b-0"
              key={item.title}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'inline-flex size-9 shrink-0 items-center justify-center sm:size-10 lg:size-[42px]',
                    textGold,
                  )}
                >
                  <Icon name={item.icon} size={29} />
                </span>
                <h2 className="m-0 text-base font-semibold text-white">{item.title}</h2>
              </div>
              <p className="m-0 text-[13px] leading-[1.5] text-[#a4a7a0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
