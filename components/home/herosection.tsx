import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

const FEATURES = [
  { icon: 'plane', label: 'Flight Tracking' },
  { icon: 'users', label: 'Meet & Greet' },
  { icon: 'clock', label: '60 Min Waiting' },
  { icon: 'bag', label: 'All-Inclusive' },
] as const

export default function HeroSection() {
  return (
    <section className={cn('relative w-full overflow-visible pt-[74px] text-white min-h-[clamp(480px,36vw,560px)] max-[600px]:min-h-[clamp(440px,110vw,480px)] max-[600px]:pt-[68px]', bgPageDark)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 bottom-[-70px] z-0 bg-[url('/images/heroes/hero-temp.png')] bg-cover bg-no-repeat bg-[position:calc(50%+75px)_40%] [filter:brightness(1.04)_contrast(1.02)] max-[900px]:bg-[position:calc(50%+42px)_38%] max-[900px]:opacity-[0.92] max-[600px]:bottom-[-40px] max-[600px]:bg-[position:calc(50%+20px)_35%]",
          bgPageDark,
        )}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 bottom-[-80px] z-[1] bg-[linear-gradient(90deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.88)_18%,rgba(5,7,7,0.52)_28%,rgba(5,7,7,0.10)_38%,transparent_50%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.82)_0%,rgba(5,7,7,0.45)_45%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 bottom-[-80px] z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_22%,transparent_70%,rgba(5,7,7,0.5)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.88)_0%,rgba(5,7,7,0.72)_28%,rgba(5,7,7,0.28)_52%,rgba(5,7,7,0.08)_70%,rgba(5,7,7,0.55)_100%)]"
      />

      <div className="page-width-full relative z-[2] pt-[clamp(28px,3.5vw,44px)] pb-[clamp(16px,2vw,28px)] max-[900px]:pt-12 max-[600px]:pt-6 max-[600px]:pb-5">
        <div className={cn('mb-5 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em]', textGold)}>
          JOURNEY BEYOND EXPECTATION
        </div>

        <h1 className="m-0 max-w-[520px] text-[clamp(34px,3.4vw,56px)] font-semibold leading-[1.3] tracking-[-0.02em] max-[900px]:max-w-[620px] max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
          Premium
          <br />
          Airport Transfer
          <br />
          and Executive
          <br />
          Chauffeur Service
        </h1>

        <p className="my-[22px] max-w-[440px] text-base leading-normal text-[#ededeb]">
          Experience the ultimate in comfort, safety
          <br className="max-[600px]:hidden" /> and punctuality with MOVAGO&apos;s premium
          <br className="max-[600px]:hidden" /> transfer service.
        </p>

        <div className="flex flex-wrap items-center gap-[clamp(18px,2vw,30px)] text-base text-[#f2f2ef] max-[900px]:grid max-[900px]:grid-cols-[repeat(2,max-content)] max-[900px]:gap-x-6 max-[900px]:gap-y-3.5 max-[600px]:grid-cols-2 max-[600px]:gap-x-3.5 max-[600px]:gap-y-2.5">
          {FEATURES.map(({ icon, label }) => (
            <span key={label} className="inline-flex items-center gap-[7px] whitespace-nowrap">
              <span className={textGold}>
                <Icon name={icon} size={15} />
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
