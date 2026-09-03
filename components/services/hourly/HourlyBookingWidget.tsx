'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover } from '@/utils/ui/colors'

export default function HourlyBookingWidget() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'hourly' | 'full-day' | 'custom'>('hourly')
  const [pickup, setPickup] = useState('Bangkok Downtown')
  const [date, setDate] = useState('2026-09-10')
  const [startTime, setStartTime] = useState('09:00')
  const [duration, setDuration] = useState('4')
  const [passengers, setPassengers] = useState('1')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams({
      service: 'hourly',
      tab: activeTab,
      pickup,
      date,
      startTime,
      duration: activeTab === 'full-day' ? '10' : duration,
      passengers,
    }).toString()
    router.push(`/book?${query}`)
  }

  return (
    <div className="page-width relative z-20 -mt-14 sm:-mt-20">
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD] bg-white p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-[#E5DFD5] pb-4">
          <button
            type="button"
            onClick={() => {
              setActiveTab('hourly')
              setDuration('4')
            }}
            className={cn(
              'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
              activeTab === 'hourly'
                ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'text-[#8A8E85] hover:text-[#111311]',
            )}
          >
            Hourly Service
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('full-day')
              setDuration('10')
            }}
            className={cn(
              'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
              activeTab === 'full-day'
                ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'text-[#8A8E85] hover:text-[#111311]',
            )}
          >
            Full Day (10 Hours)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('custom')}
            className={cn(
              'pb-2 text-sm sm:text-base font-semibold transition-colors relative',
              activeTab === 'custom'
                ? 'text-[#111311] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold'
                : 'text-[#8A8E85] hover:text-[#111311]',
            )}
          >
            Custom Package
          </button>
        </div>

        {/* Booking Form Grid */}
        <form onSubmit={handleSearch} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end">
          {/* Pickup Location */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Pickup Location
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#8A8E85]">
                <Icon name="pin" size={18} />
              </span>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup location"
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-10 pr-3.5 text-sm font-medium text-[#111311] placeholder:text-[#8A8E85] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Service Date */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Service Date
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

          {/* Start Time */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Start Time
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#8A8E85]">
                <Icon name="clock" size={16} />
              </span>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-8 pr-2 text-xs sm:text-sm font-medium text-[#111311] focus:border-gold focus:bg-white focus:outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Duration */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold text-[#555850] mb-1.5">
              Duration
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#8A8E85]">
                <Icon name="clock" size={16} />
              </span>
              <select
                value={activeTab === 'full-day' ? '10' : duration}
                disabled={activeTab === 'full-day'}
                onChange={(e) => setDuration(e.target.value)}
                className="h-12 w-full rounded-xl border border-[#D5CDBD] bg-[#FAF8F5] pl-8 pr-2 text-xs sm:text-sm font-medium text-[#111311] focus:border-gold focus:bg-white focus:outline-none transition-all cursor-pointer disabled:opacity-75"
              >
                <option value="2">2 Hours (Min)</option>
                <option value="3">3 Hours</option>
                <option value="4">4 Hours</option>
                <option value="5">5 Hours (Half Day)</option>
                <option value="6">6 Hours</option>
                <option value="8">8 Hours</option>
                <option value="10">10 Hours (Full Day)</option>
                <option value="12">12 Hours</option>
              </select>
            </div>
          </div>

          {/* Passengers */}
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1 sm:col-span-2">
            <button
              type="submit"
              className={cn(
                'flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold text-black transition-all hover:-translate-y-0.5 shadow-none whitespace-nowrap px-3',
                bgGold,
                bgGoldHover,
              )}
            >
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* Footer Guarantee & Link */}
        <div className="mt-5 pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#555850]">
          <div className="flex items-center gap-2">
            <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Icon name="check" size={10} />
            </span>
            <span>Free cancellation up to 24 hours before service</span>
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
