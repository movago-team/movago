'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover } from '@/utils/ui/colors'

export default function IntercityBookingWidget() {
  const router = useRouter()
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('one-way')
  const [fromLocation, setFromLocation] = useState('Bangkok (BKK)')
  const [toLocation, setToLocation] = useState('Pattaya')
  const [date, setDate] = useState('2026-09-10')
  const [time, setTime] = useState('09:00')
  const [passengers, setPassengers] = useState('1')

  const handleSwap = () => {
    const temp = fromLocation
    setFromLocation(toLocation)
    setToLocation(temp)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams({
      service: 'intercity',
      tripType,
      from: fromLocation,
      to: toLocation,
      date,
      time,
      passengers,
    }).toString()
    router.push(`/book?${query}`)
  }

  return (
    <div className="page-width relative z-20 -mt-14 sm:-mt-20">
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
        {/* Top Header with Tabs & Top Right Cancellation Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-4">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setTripType('one-way')}
              className={cn(
                'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
                tripType === 'one-way'
                  ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                  : 'text-[#8A8E85] hover:text-[#111311]',
              )}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => setTripType('round-trip')}
              className={cn(
                'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
                tripType === 'round-trip'
                  ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                  : 'text-[#8A8E85] hover:text-[#111311]',
              )}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('multi-city')}
              className={cn(
                'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
                tripType === 'multi-city'
                  ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                  : 'text-[#8A8E85] hover:text-[#111311]',
              )}
            >
              Multi-City
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#666860]">
            <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Icon name="check" size={10} />
            </span>
            <span>Free cancellation up to 24 hours before pickup*</span>
          </div>
        </div>

        {/* Booking Form Grid */}
        <form onSubmit={handleSearch} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end">
          {/* From */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              From
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#8A8E85]">
                <Icon name="pin" size={18} />
              </span>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                placeholder="Pickup location"
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-10 pr-10 text-sm font-medium text-[#111311] placeholder:text-[#8A8E85] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
              <button
                type="button"
                onClick={handleSwap}
                title="Swap locations"
                className="absolute right-2.5 flex size-7 items-center justify-center rounded-lg text-[#8A8E85] hover:bg-[#E5DFD5]/50 hover:text-black transition-colors rotate-45"
              >
                <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>

          {/* To */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              To
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#8A8E85]">
                <Icon name="pin" size={18} />
              </span>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                placeholder="Destination"
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-10 pr-3.5 text-sm font-medium text-[#111311] placeholder:text-[#8A8E85] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Date */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Date
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#8A8E85]">
                <Icon name="calendar" size={18} />
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-10 pr-3 text-sm font-medium text-[#111311] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Time */}
          <div className="lg:col-span-1 sm:col-span-1">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Time
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#8A8E85]">
                <Icon name="clock" size={16} />
              </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-8 pr-2 text-xs sm:text-sm font-medium text-[#111311] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="lg:col-span-1 sm:col-span-1">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Guests
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-2 text-[#8A8E85]">
                <Icon name="users" size={15} />
              </span>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-7 pr-1 text-xs sm:text-sm font-medium text-[#111311] focus:border-gold focus:bg-white focus:outline-none transition-all cursor-pointer"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className={cn(
                'flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-semibold text-black transition-all hover:-translate-y-0.5 shadow-none',
                bgGold,
                bgGoldHover,
              )}
            >
              <span>Search Vehicles</span>
            </button>
          </div>
        </form>

        {/* Footer Guarantee & Link */}
        <div className="mt-5 pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#555850]">
          <div className="flex items-center gap-2">
            <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Icon name="check" size={10} />
            </span>
            <span>Long distance comfort • Scenic routes • Professional service</span>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 font-medium text-[#555850] hover:text-gold transition-colors no-underline"
          >
            <span>Modify or manage your booking anytime</span>
            <Icon name="chevron-right" size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
