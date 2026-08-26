'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import { routes } from '@/data/routes'
import { cn } from '@/utils/cn'
import { btnPrimarySm } from '@/utils/ui/button'
import { textGold } from '@/utils/ui/colors'

// 5 repeated sets for seamless infinite looping
const SETS_COUNT = 5
const INITIAL_SET_INDEX = 2 // middle set

export default function RouteSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const infiniteRoutes = useMemo(() => {
    const list = []
    for (let s = 0; s < SETS_COUNT; s++) {
      for (let i = 0; i < routes.length; i++) {
        list.push({ ...routes[i], uniqueKey: `set-${s}-route-${i}` })
      }
    }
    return list
  }, [])

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return

    const getMetrics = () => {
      const card = el.querySelector('[data-route-card]') as HTMLElement | null
      if (!card) return null
      const step = card.offsetWidth + 12
      const setWidth = routes.length * step
      return { step, setWidth }
    }

    const initPosition = () => {
      const metrics = getMetrics()
      if (!metrics) return
      el.scrollLeft = INITIAL_SET_INDEX * metrics.setWidth
    }

    const raf = requestAnimationFrame(initPosition)

    const onScroll = () => {
      const metrics = getMetrics()
      if (!metrics) return
      const { setWidth } = metrics

      if (el.scrollLeft >= (INITIAL_SET_INDEX + 1) * setWidth) {
        el.scrollLeft -= setWidth
      } else if (el.scrollLeft <= (INITIAL_SET_INDEX - 1) * setWidth) {
        el.scrollLeft += setWidth
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', initPosition)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', initPosition)
    }
  }, [])

  const scrollRoutes = (direction: 'left' | 'right') => {
    const el = sliderRef.current
    if (!el) return

    const card = el.querySelector('[data-route-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 12 : 260

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-canvas py-[34px] max-[600px]:py-7">
      <div className="page-width">
        <div className="mb-4 flex items-start justify-between gap-[18px] max-[600px]:flex-col">
          <div>
            <div className="eyebrow">POPULAR ROUTES</div>
            <h2 className="m-0 text-[clamp(24px,2.2vw,30px)] font-semibold leading-tight text-ink">
              Most Popular Routes
            </h2>
          </div>

          <Link
            href="/destinations"
            className={cn(btnPrimarySm, 'min-w-[116px] !h-[38px] px-4 max-[600px]:hidden')}
          >
            View All Routes
          </Link>
        </div>

        <div className="relative px-[46px] max-[1200px]:px-[42px] max-[900px]:px-[38px] max-[600px]:px-0">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-[4] flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0f10] text-gold shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-[background-color,color,transform] duration-150 hover:scale-105 hover:bg-[#1a1a1a] hover:text-gold-hover active:scale-95 max-[600px]:hidden"
            onClick={() => scrollRoutes('left')}
            aria-label="Previous routes"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.5 1.5L2 6L6.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="grid auto-cols-[calc((100%-48px)/5)] grid-flow-col gap-3 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[1200px]:auto-cols-[calc((100%-24px)/3)] max-[900px]:auto-cols-[calc((100%-12px)/2)] max-[600px]:auto-cols-[84%] max-[600px]:snap-x max-[600px]:snap-mandatory"
          >
            {infiniteRoutes.map((route) => (
              <button
                type="button"
                data-route-card
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border-0 bg-white p-0 text-left shadow-[0_1px_8px_rgba(0,0,0,0.05)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)] max-[600px]:snap-start"
                key={route.uniqueKey}
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  })
                }}
              >
                <div className="h-[122px] shrink-0 overflow-hidden bg-soft max-[600px]:h-[138px]">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="block size-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col bg-white px-3.5 pb-3 pt-3.5 max-[600px]:px-3.5 max-[600px]:pb-[13px] max-[600px]:pt-3">
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-col">
                      <span className="mb-0.5 text-[10.5px] font-bold uppercase leading-tight tracking-[0.08em] text-muted">
                        FROM
                      </span>
                      <span className="break-words text-[14.5px] font-bold leading-snug text-ink max-[600px]:text-sm">
                        {route.from}
                      </span>
                    </div>

                    <div className={cn('my-0.5 flex items-center', textGold)} aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="block size-[11px] shrink-0 max-[600px]:size-2.5">
                        <path d="M8 2.5V13.5M4 9.5L8 13.5L12 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span className={cn('mb-0.5 text-[10.5px] font-bold uppercase leading-tight tracking-[0.08em]', textGold)}>
                        TO
                      </span>
                      <span className="break-words text-[14.5px] font-bold leading-snug text-ink max-[600px]:text-sm">
                        {route.to}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-3 border-t border-black/[0.06] pt-2.5 max-[600px]:mt-2.5 max-[600px]:pt-2">
                    <span className="whitespace-nowrap text-sm font-normal text-muted">Price</span>
                    <span className="inline-flex items-baseline gap-1 whitespace-nowrap text-base font-bold leading-none text-ink">
                      {route.price}{' '}
                      <span className="text-sm font-medium">THB</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-0 top-1/2 z-[4] flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0f10] text-gold shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-[background-color,color,transform] duration-150 hover:scale-105 hover:bg-[#1a1a1a] hover:text-gold-hover active:scale-95 max-[600px]:hidden"
            onClick={() => scrollRoutes('right')}
            aria-label="Next routes"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
