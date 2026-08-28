'use client'

import { FormEvent, useState } from 'react'
import { Button, Icon, Select } from '@/ui'
import { DESTINATION_ORIGINS, DESTINATION_TARGETS } from '@/data/destinations'
import { cn } from '@/utils/cn'
import { bgPageDark, textGold } from '@/utils/ui/colors'

interface DestinationHeroProps {
  onSearch?: (target: string, origin?: string) => void
}

export default function DestinationHero({ onSearch }: DestinationHeroProps) {
  const [origin, setOrigin] = useState<string>('bkk')
  const [destination, setDestination] = useState<string>('all')
  const [isSwapping, setIsSwapping] = useState<boolean>(false)

  const handleSwap = () => {
    setIsSwapping(true)
    setTimeout(() => setIsSwapping(false), 300)

    // Swap values if applicable
    const prevOrigin = origin
    const prevDest = destination
    if (prevDest !== 'all') {
      setOrigin(prevDest)
      setDestination(prevOrigin)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(destination, origin)
    }

    // Scroll to destinations section
    const el = document.getElementById('popular-destinations')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={cn(
        'relative z-20 flex flex-col justify-between overflow-visible text-white',
        'min-h-[clamp(580px,44vw,700px)] max-[600px]:min-h-[520px]',
        'pt-[74px] pb-6 sm:pb-8 max-[600px]:pt-[68px]',
        bgPageDark,
      )}
    >
      {/* Background Image & Overlays - identical position, scale and height to Home hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          aria-hidden
          className="size-full bg-[url('/images/heroes/hero-temp.png')] bg-cover bg-no-repeat bg-[position:calc(50%+75px)_40%] [filter:brightness(1.04)_contrast(1.02)] max-[900px]:bg-[position:calc(50%+42px)_38%] max-[900px]:opacity-[0.92] max-[600px]:bg-[position:calc(50%+20px)_35%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.95)_0%,rgba(5,7,7,0.88)_18%,rgba(5,7,7,0.52)_28%,rgba(5,7,7,0.10)_38%,transparent_50%)] max-[600px]:bg-[linear-gradient(90deg,rgba(5,7,7,0.82)_0%,rgba(5,7,7,0.45)_45%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_22%,transparent_70%,rgba(5,7,7,0.5)_100%)] max-[600px]:bg-[linear-gradient(180deg,rgba(5,7,7,0.88)_0%,rgba(5,7,7,0.72)_28%,rgba(5,7,7,0.28)_52%,rgba(5,7,7,0.08)_70%,rgba(5,7,7,0.55)_100%)]"
        />
      </div>

      {/* Top Text - In page-width-full to align Wherever with the MOVAGO logo */}
      <div className="page-width-full relative z-[1] flex flex-col pt-[clamp(28px,3.5vw,44px)] max-[900px]:pt-12 max-[600px]:pt-6">
        <div className="max-w-[620px]">
          {/* Eyebrow */}
          <div className={cn('mb-3 text-[clamp(11px,0.72vw,13px)] font-bold tracking-[0.08em]', textGold)}>
            DESTINATIONS
          </div>

          {/* Main Heading */}
          <h1 className="m-0 text-[clamp(34px,3.4vw,56px)] font-semibold leading-[1.3] tracking-[-0.02em] text-white max-[900px]:max-w-[620px] max-[900px]:text-[clamp(36px,6vw,48px)] max-[600px]:text-[clamp(28px,7vw,36px)]">
            Wherever You Go,
            <br />
            We&apos;ll Take You There
          </h1>

          {/* Supporting Description */}
          <p className="my-[20px] max-w-[480px] text-base leading-normal text-[#ededeb]">
            Experience seamless, luxurious long-distance and intercity transfers across Thailand&apos;s most
            coveted destinations with dedicated professional chauffeurs and world-class comfort.
          </p>
        </div>
      </div>

      {/* Destination Search Panel - Black luxury box overlapping the bottom edge of hero with spacious inner padding & margin */}
      <div className="page-width relative z-30 mt-auto pt-6 -mb-14 sm:-mb-16 lg:-mb-18">
        <div className="w-full rounded-2xl border border-white/25 bg-[#090c0d]/95 p-7 shadow-[0_24px_55px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl sm:p-8 sm:px-9 lg:p-9 lg:px-10">
          <div className="mb-5 sm:mb-6 flex items-center gap-2.5">
            <span className={cn('flex shrink-0 items-center justify-center', textGold)}>
              <Icon name="pin" size={20} />
            </span>
            <h2 className="m-0 text-lg font-semibold text-white sm:text-xl">
              Find Your Destination
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 items-end gap-4 sm:gap-5 md:grid-cols-[1fr_auto_1fr_auto]">
              {/* From Dropdown */}
              <div className="min-w-0">
                <Select
                  label="From"
                  icon={<Icon name="pin" />}
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  options={DESTINATION_ORIGINS}
                />
              </div>

              {/* Swap Icon - Standalone icon without circular frame */}
              <div className="flex items-center justify-center max-md:py-1 max-md:my-0 md:pb-2.5">
                <button
                  type="button"
                  onClick={handleSwap}
                  aria-label="Swap pickup and destination"
                  className={cn(
                    'flex size-8 items-center justify-center border-0 bg-transparent p-0 text-gold transition-all duration-300 hover:scale-115 hover:text-white active:scale-95 cursor-pointer max-md:rotate-90',
                    isSwapping && 'rotate-180 max-md:rotate-[270deg]',
                  )}
                >
                  <Icon name="swap" size={20} />
                </button>
              </div>

              {/* To Dropdown */}
              <div className="min-w-0">
                <Select
                  label="To"
                  icon={<Icon name="pin" />}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  options={DESTINATION_TARGETS}
                />
              </div>

              {/* Search Button */}
              <div className="min-w-[135px] pt-1 md:pt-0">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="!h-[36px] !min-h-[36px] !max-h-[36px] w-full rounded-[6px] !px-6 !py-0 !text-[14px] !leading-[36px] font-semibold shadow-[0_2px_14px_rgba(197,160,115,0.35)] max-[600px]:!h-11 max-[600px]:!min-h-11 max-[600px]:!max-h-11 max-[600px]:!leading-11"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
