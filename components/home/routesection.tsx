'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import { routes } from '@/data/routes'

// 5 repeated sets for seamless infinite looping
const SETS_COUNT = 5
const INITIAL_SET_INDEX = 2 // middle set

export default function RouteSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  // Memoize the repeated routes list
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
      const card = el.querySelector('.route-card') as HTMLElement | null
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

    // Set initial position after layout renders
    const raf = requestAnimationFrame(initPosition)

    const onScroll = () => {
      const metrics = getMetrics()
      if (!metrics) return
      const { setWidth } = metrics

      // If scrolled past the center sets, seamlessly wrap back to center
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

    const card = el.querySelector('.route-card') as HTMLElement | null
    const step = card ? card.offsetWidth + 12 : 260

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    })
  }

  return (
    <section className="routes-section">
      <div className="page-width">
        <div className="routes-header">
          <div>
            <div className="section-eyebrow">POPULAR ROUTES</div>
            <h2 className="routes-title">Most Popular Routes</h2>
          </div>

          <Link href="/destinations" className="routes-view-all">
            View All Routes
          </Link>
        </div>

        <div className="routes-carousel-wrap">
          <button
            type="button"
            className="route-arrow route-arrow-left"
            onClick={() => scrollRoutes('left')}
            aria-label="Previous routes"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.5 1.5L2 6L6.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="routes-track" ref={sliderRef}>
            {infiniteRoutes.map((route) => (
              <button
                type="button"
                className="route-card"
                key={route.uniqueKey}
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  })
                }}
              >
                <div className="route-image">
                  <img src={route.image} alt={`${route.from} to ${route.to}`} />
                </div>

                <div className="route-copy">
                  <div className="route-journey">
                    <div className="route-stop route-stop-from">
                      <div className="route-stop-header">
                        <span className="route-stop-badge">FROM</span>
                      </div>
                      <div className="route-stop-name">{route.from}</div>
                    </div>

                    <div className="route-direction-indicator" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2.5V13.5M4 9.5L8 13.5L12 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="route-stop route-stop-to">
                      <div className="route-stop-header">
                        <span className="route-stop-badge">TO</span>
                      </div>
                      <div className="route-stop-name">{route.to}</div>
                    </div>
                  </div>

                  <div className="route-bottom">
                    <div className="route-from">Price</div>
                    <div className="route-price">
                      {route.price} <span>THB</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="route-arrow route-arrow-right"
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
