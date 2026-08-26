import Link from 'next/link'
import { Icon } from '@/ui'
import { btnCorporate } from '@/utils/ui/button'
import { cn } from '@/utils/cn'
import { textGold, hoverTextGold } from '@/utils/ui/colors'

const FEATURES = [
  { icon: 'briefcase', label: 'Corporate Accounts' },
  { icon: 'bag', label: 'Monthly Billing' },
  { icon: 'users', label: 'Priority Support' },
  { icon: 'chart', label: 'Detailed Reporting' },
] as const

export default function CorporateSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_48%_40%,#171a1a_0%,#0d1010_58%,#080a0a_100%)] text-white">
      <div className="page-width relative grid h-[400px] min-h-[400px] grid-cols-[42%_40%_18%] items-stretch max-[1050px]:grid-cols-[40%_42%_18%] max-[700px]:block max-[700px]:h-auto max-[700px]:min-h-0">
        <div className="relative z-[3] flex flex-col items-start justify-center pr-10 max-[700px]:py-8 max-[700px]:pr-0">
          <div className="eyebrow">CORPORATE SOLUTIONS</div>

          <h2 className="mb-3.5 text-[28px] font-semibold leading-[1.1] tracking-[-0.015em] max-[700px]:text-[26px]">
            Mobility Solutions for Your Business
          </h2>

          <p className="mb-7 text-base leading-[1.55] text-[#c5c6c2]">
            Streamline your corporate travel with our tailored solutions.
            <br />
            Monthly billing, dedicated support and priority service for your
            <br />
            business needs.
          </p>

          <Link href="/corporate" className={btnCorporate}>
            Learn More
          </Link>
        </div>

        <div className="relative isolate h-[300px] overflow-hidden max-[700px]:h-[230px]">
          {/* Soft edge blur fill */}
          <div
            aria-hidden
            className="absolute inset-[-10px] z-0 scale-[1.08] bg-[url('/images/corporate/corporate-transfer.png')] bg-cover bg-center opacity-90 blur-[18px] [mask-image:linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.15)_16%,rgba(0,0,0,0)_28%,rgba(0,0,0,0)_72%,rgba(0,0,0,0.15)_84%,rgba(0,0,0,1)_100%)] [-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.15)_16%,rgba(0,0,0,0)_28%,rgba(0,0,0,0)_72%,rgba(0,0,0,0.15)_84%,rgba(0,0,0,1)_100%)]"
          />
          <img
            src="/images/corporate/corporate-transfer.png"
            alt="MOVAGO corporate chauffeur service"
            className="relative z-[1] size-full object-cover object-center"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(6,8,8,0.75)_0%,rgba(6,8,8,0.18)_10%,rgba(6,8,8,0)_20%,rgba(6,8,8,0)_80%,rgba(6,8,8,0.16)_90%,rgba(6,8,8,0.65)_100%),linear-gradient(180deg,rgba(6,8,8,0.15)_0%,rgba(6,8,8,0)_20%,rgba(6,8,8,0)_80%,rgba(6,8,8,0.18)_100%)]"
          />
        </div>

        <div className="relative z-[6] flex w-[248px] min-h-[210px] flex-col justify-center gap-1 justify-self-end self-center rounded-2xl border border-solid border-white/20 bg-[rgba(7,9,9,0.9)] px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[7px] translate-x-[clamp(-110px,-5vw,-82px)] max-[1050px]:w-[220px] max-[1050px]:min-h-[190px] max-[1050px]:rounded-[15px] max-[1050px]:px-5 max-[1050px]:py-5 max-[1050px]:-translate-x-10 max-[700px]:mx-auto max-[700px]:mb-6 max-[700px]:mt-[-35px] max-[700px]:grid max-[700px]:w-[calc(100%-28px)] max-[700px]:min-h-0 max-[700px]:translate-x-0 max-[700px]:grid-cols-2 max-[700px]:gap-x-3 max-[700px]:gap-y-1 max-[700px]:px-5 max-[700px]:py-4 max-[430px]:grid-cols-1">
          {FEATURES.map(({ icon, label }) => (
            <Link
              key={label}
              href="/corporate"
              className={cn(
                'flex min-h-11 cursor-pointer items-center gap-3 text-base font-medium text-white transition-[color,transform] duration-200 hover:translate-x-0.5',
                hoverTextGold,
              )}
            >
              <span className={cn('inline-flex shrink-0', textGold)}>
                <Icon name={icon} size={17} />
              </span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
