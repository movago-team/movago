'use client'

import Link from 'next/link'
import { Button, Icon } from '@/ui'
import { vehicles } from '@/data/vehicles'
import { cn } from '@/utils/cn'
import { btnPrimarySm } from '@/utils/ui/button'
import { textGold } from '@/utils/ui/colors'

export interface VehicleSectionProps {
  onSelect: (vehicle: string) => void
}

export default function VehicleSection({ onSelect }: VehicleSectionProps) {
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section
      id="vehicles"
      className="bg-[radial-gradient(circle_at_50%_30%,#171a1a_0%,#0d1010_56%,#090b0b_100%)] pt-[42px] pb-[52px] text-white max-[600px]:pt-[34px] max-[600px]:pb-10"
    >
      <div className="page-width">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">OUR VEHICLES</div>
            <h2 className="mb-1.5 text-[clamp(24px,2.2vw,34px)] font-semibold leading-tight">
              Travel in Luxury and Comfort
            </h2>
            <p className="m-0 text-base leading-normal text-[#c4c5c1]">
              Choose the perfect vehicle for your journey
            </p>
          </div>

          <Link
            href="/vehicles"
            className={cn(btnPrimarySm, 'min-w-[116px] !h-[38px] px-4 max-[600px]:hidden')}
          >
            View All Vehicles
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 min-[901px]:gap-6 max-[1150px]:min-[901px]:gap-4">
          {displayVehicles.map((item) => {
            const categoryLabel = item.category || item.tier.toUpperCase()

            return (
              <article
                key={item.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-solid border-gold/50 bg-[linear-gradient(180deg,#111414_0%,#0c0e0e_100%)] p-6 pb-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-gold/80 hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)] max-[1150px]:p-5"
              >
                <div className="mb-2 flex flex-col items-start">
                  <div
                    className={cn(
                      'mb-1 text-[11px] font-bold uppercase tracking-[0.12em]',
                      textGold,
                    )}
                  >
                    {categoryLabel}
                  </div>
                  <h3 className="mb-0.5 text-[22px] font-bold leading-tight tracking-[0.02em] text-white max-[1150px]:text-xl max-[600px]:text-[21px]">
                    {item.name}
                  </h3>
                  <div className="m-0 text-base leading-snug text-[#a4a6a0]">{item.type}</div>
                </div>

                <div className="relative my-1.5 mb-3 flex h-[228px] min-h-[228px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(229,180,93,0.11),transparent_70%)] px-1.5 py-1 max-[1150px]:h-[205px] max-[1150px]:min-h-[205px] max-[900px]:h-[215px] max-[900px]:min-h-[215px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="block h-full w-full max-h-full max-w-full object-contain object-center [filter:drop-shadow(0_14px_22px_rgba(0,0,0,0.6))] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>

                <div className="mb-2.5 flex flex-wrap items-center justify-start gap-2 border-y border-white/[0.08] py-2 text-base leading-snug text-[#ebece8]">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className={textGold}>
                      <Icon name="users" size={14} />
                    </span>
                    <span>{item.seats}</span>
                  </span>
                  <span className="select-none text-[11px] text-white/25" aria-hidden>
                    •
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className={textGold}>
                      <Icon name="briefcase" size={14} />
                    </span>
                    <span>{item.luggage}</span>
                  </span>
                  <span className="select-none text-[11px] text-white/25" aria-hidden>
                    •
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className={textGold}>
                      <Icon name="shield" size={14} />
                    </span>
                    <span>{item.tier}</span>
                  </span>
                </div>

                <p className="mb-2.5 min-h-[38px] text-base leading-normal text-[#b0b2ac] max-[900px]:min-h-0">
                  {item.copy}
                </p>

                <div className="mt-auto flex items-end justify-between gap-3.5 border-t border-white/[0.08] pt-2.5">
                  <div className="flex flex-col justify-end">
                    <small className="mb-0.5 block text-[11.5px] uppercase leading-tight tracking-[0.05em] text-[#92948e]">
                      From
                    </small>
                    <strong className="block text-xl font-bold leading-none text-white">
                      {item.price}{' '}
                      <span className={cn('ml-0.5 text-base font-medium', textGold)}>THB</span>
                    </strong>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    className="min-w-[88px] !h-[38px] max-[600px]:min-w-24 max-[600px]:!h-[42px]"
                    onClick={() => onSelect(item.name)}
                  >
                    Select
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
