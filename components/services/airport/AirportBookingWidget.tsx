'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold } from '@/utils/ui/colors'

const POPULAR_AIRPORTS = [
  'Suvarnabhumi Airport (BKK)',
  'Don Mueang Airport (DMK)',
  'Phuket International Airport (HKT)',
  'Chiang Mai International Airport (CNX)',
  'Bangkok City Center',
]

const POPULAR_DESTINATIONS = [
  'Bangkok City Center (Sukhumvit / Silom)',
  'Pattaya City Center',
  'Hua Hin Beach',
  'Ayutthaya Historical Park',
  'Suvarnabhumi Airport (BKK)',
  'Don Mueang Airport (DMK)',
]

const POPULAR_TIMES = [
  '06:00',
  '08:00',
  '10:00',
  '12:00',
  '14:00',
  '16:00',
  '18:00',
  '20:00',
  '22:00',
]

const PASSENGER_OPTIONS = [
  '1 Passenger',
  '2 Passengers',
  '3 Passengers',
  '4 Passengers',
  '5 Passengers',
  '6+ Passengers',
]

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function AirportBookingWidget() {
  const router = useRouter()
  const widgetRef = useRef<HTMLDivElement>(null)

  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way')
  const [fromLocation, setFromLocation] = useState('')
  const [toLocation, setToLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState('1 Passenger')

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState<'from' | 'to' | 'date' | 'time' | 'passengers' | null>(null)

  // Calendar view state
  const initialDate = date ? new Date(date) : new Date()
  const [viewYear, setViewYear] = useState(initialDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth())

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSwap = (e: React.MouseEvent) => {
    e.stopPropagation()
    const temp = fromLocation
    setFromLocation(toLocation)
    setToLocation(temp)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams({
      service: 'airport',
      tripType,
      from: fromLocation || 'Suvarnabhumi Airport (BKK)',
      to: toLocation || 'Bangkok City Center',
      date: date || new Date().toISOString().split('T')[0],
      time: time || '12:00',
      passengers: passengers.replace(/\D/g, '') || '1',
    }).toString()
    router.push(`/book?${query}`)
  }

  // Format date display
  const formatDisplayDate = (dStr: string) => {
    if (!dStr) return 'Select date'
    const parts = dStr.split('-')
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10)
      const m = parseInt(parts[1], 10) - 1
      const d = parseInt(parts[2], 10)
      const dt = new Date(y, m, d)
      if (!isNaN(dt.getTime())) {
        return `${MONTH_NAMES[m].slice(0, 3)} ${d}, ${y}`
      }
    }
    return dStr
  }

  // Calendar navigation
  const prevMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const nextMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  const handleSelectDate = (dateStr: string) => {
    setDate(dateStr)
    setOpenDropdown(null)
  }

  const selectQuickDate = (offsetDays: number) => {
    const d = new Date()
    d.setDate(d.getDate() + offsetDays)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    setDate(`${y}-${m}-${day}`)
    setOpenDropdown(null)
  }

  // Calendar cells generation
  const todayStr = new Date().toISOString().split('T')[0]
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate()

  const calendarCells: { day: number; isCurrentMonth: boolean; dateStr: string }[] = []

  // Prev month padding
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i
    const m = viewMonth === 0 ? 12 : viewMonth
    const y = viewMonth === 0 ? viewYear - 1 : viewYear
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    calendarCells.push({ day, isCurrentMonth: false, dateStr })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    calendarCells.push({ day: d, isCurrentMonth: true, dateStr })
  }

  // Next month padding to fill grid (35 or 42)
  const totalCells = Math.ceil(calendarCells.length / 7) * 7
  const remaining = totalCells - calendarCells.length
  for (let d = 1; d <= remaining; d++) {
    const m = viewMonth === 11 ? 1 : viewMonth + 2
    const y = viewMonth === 11 ? viewYear + 1 : viewYear
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    calendarCells.push({ day: d, isCurrentMonth: false, dateStr })
  }

  return (
    <div className="page-width relative z-20 -mt-14 sm:-mt-20" ref={widgetRef}>
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD]/70 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.09)]">
        {/* Tabs - One Way / Round Trip with Gold Indicator */}
        <div className="flex items-center gap-8 border-b border-[#E2E8F0] mb-5">
          <button
            type="button"
            onClick={() => setTripType('one-way')}
            className={cn(
              'relative pb-3 pt-1 text-sm transition-all border-0 bg-transparent cursor-pointer outline-none',
              tripType === 'one-way'
                ? 'font-semibold text-[#101828]'
                : 'font-medium text-[#667085] hover:text-[#101828]',
            )}
          >
            <span>One Way</span>
            {tripType === 'one-way' && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setTripType('round-trip')}
            className={cn(
              'relative pb-3 pt-1 text-sm transition-all border-0 bg-transparent cursor-pointer outline-none',
              tripType === 'round-trip'
                ? 'font-semibold text-[#101828]'
                : 'font-medium text-[#667085] hover:text-[#101828]',
            )}
          >
            <span>Round Trip</span>
            {tripType === 'round-trip' && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
            )}
          </button>
        </div>

        {/* Booking Form Row - Balanced UX Layout */}
        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row lg:items-end gap-3 xl:gap-3.5">
          {/* From Field */}
          <div className="relative flex-[1.75] min-w-0">
            <label className="block text-xs font-semibold text-[#344054] mb-1.5">
              From
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === 'from' ? null : 'from')}
              className="relative flex h-12 items-center rounded-xl border border-solid border-[#D5CDBD] bg-white px-3.5 gap-2.5 hover:border-gold focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25 transition-all cursor-pointer shadow-none"
            >
              <span className="text-[#64748B] shrink-0">
                <Icon name="pin" size={18} />
              </span>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => {
                  setFromLocation(e.target.value)
                  if (openDropdown !== 'from') setOpenDropdown('from')
                }}
                onFocus={() => setOpenDropdown('from')}
                placeholder="Airport or location"
                className="w-full bg-transparent border-0 outline-none text-sm text-[#0F172A] placeholder:text-[#94A3B8] font-normal truncate"
              />
            </div>

            {/* From Dropdown Menu */}
            {openDropdown === 'from' && (
              <div className="absolute top-[calc(100%+6px)] left-0 w-full z-50 rounded-xl border border-[#D5CDBD] bg-white p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] [text-shadow:none]">
                <div className="px-2.5 pt-1.5 pb-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#64748B] [text-shadow:none]">
                  Popular Airports
                </div>
                <div className="h-px bg-[#F1ECE4] my-1" />
                <div className="flex flex-col gap-0.5 max-h-56 overflow-y-auto">
                  {POPULAR_AIRPORTS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setFromLocation(item)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        'flex items-center justify-between w-full px-2.5 py-2 rounded-lg text-xs sm:text-sm transition-colors border-0 outline-none cursor-pointer text-left [text-shadow:none]',
                        fromLocation === item
                          ? 'bg-[#F8F5EF] text-[#C5A073] font-medium'
                          : 'bg-white text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C5A073]',
                      )}
                    >
                      <span className="truncate pr-1 [text-shadow:none]">{item}</span>
                      {fromLocation === item && (
                        <span className="text-[#C5A073] shrink-0">
                          <Icon name="check" size={13} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Swap Button */}
          <div className="hidden lg:flex items-center pb-1 shrink-0">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap locations"
              className="size-10 rounded-full border border-solid border-[#D5CDBD] bg-white text-[#475467] hover:text-[#C5A073] hover:border-gold flex items-center justify-center transition-all cursor-pointer shadow-none"
            >
              <Icon name="swap" size={17} />
            </button>
          </div>

          {/* To Field */}
          <div className="relative flex-[1.75] min-w-0">
            <label className="block text-xs font-semibold text-[#344054] mb-1.5">
              To
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === 'to' ? null : 'to')}
              className="relative flex h-12 items-center rounded-xl border border-solid border-[#D5CDBD] bg-white px-3.5 gap-2.5 hover:border-gold focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25 transition-all cursor-pointer shadow-none"
            >
              <span className="text-[#64748B] shrink-0">
                <Icon name="pin" size={18} />
              </span>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => {
                  setToLocation(e.target.value)
                  if (openDropdown !== 'to') setOpenDropdown('to')
                }}
                onFocus={() => setOpenDropdown('to')}
                placeholder="City, hotel or address"
                className="w-full bg-transparent border-0 outline-none text-sm text-[#0F172A] placeholder:text-[#94A3B8] font-normal truncate"
              />
            </div>

            {/* To Dropdown Menu */}
            {openDropdown === 'to' && (
              <div className="absolute top-[calc(100%+6px)] left-0 w-full z-50 rounded-xl border border-[#D5CDBD] bg-white p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] [text-shadow:none]">
                <div className="px-2.5 pt-1.5 pb-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#64748B] [text-shadow:none]">
                  Popular Destinations
                </div>
                <div className="h-px bg-[#F1ECE4] my-1" />
                <div className="flex flex-col gap-0.5 max-h-56 overflow-y-auto">
                  {POPULAR_DESTINATIONS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setToLocation(item)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        'flex items-center justify-between w-full px-2.5 py-2 rounded-lg text-xs sm:text-sm transition-colors border-0 outline-none cursor-pointer text-left [text-shadow:none]',
                        toLocation === item
                          ? 'bg-[#F8F5EF] text-[#C5A073] font-medium'
                          : 'bg-white text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C5A073]',
                      )}
                    >
                      <span className="truncate pr-1 [text-shadow:none]">{item}</span>
                      {toLocation === item && (
                        <span className="text-[#C5A073] shrink-0">
                          <Icon name="check" size={13} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Date Field - Expanded Width */}
          <div className="relative flex-[1.65] min-w-0">
            <label className="block text-xs font-semibold text-[#344054] mb-1.5">
              Date
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
              className="relative flex h-12 items-center rounded-xl border border-solid border-[#D5CDBD] bg-white px-3.5 gap-2.5 hover:border-gold focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25 transition-all cursor-pointer shadow-none"
            >
              <span className="text-[#64748B] shrink-0">
                <Icon name="calendar" size={18} />
              </span>
              <span className={cn('text-sm truncate select-none', date ? 'text-[#0F172A] font-medium' : 'text-[#94A3B8]')}>
                {formatDisplayDate(date)}
              </span>
            </div>

            {/* Date Calendar Dropdown */}
            {openDropdown === 'date' && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-[calc(100%+6px)] left-0 w-full z-50 rounded-xl border border-[#D5CDBD] bg-white p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] [text-shadow:none]"
              >
                {/* Header Month / Year */}
                <div className="flex items-center justify-between mb-2 px-0.5 [text-shadow:none]">
                  <button
                    type="button"
                    onClick={prevMonth}
                    aria-label="Previous month"
                    className="size-6 rounded-md text-[#64748B] hover:text-[#C5A073] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors border-0 bg-transparent cursor-pointer font-bold text-sm [text-shadow:none]"
                  >
                    ‹
                  </button>
                  <div className="font-semibold text-xs sm:text-sm text-[#1E293B] [text-shadow:none]">
                    {MONTH_NAMES[viewMonth].slice(0, 3)} {viewYear}
                  </div>
                  <button
                    type="button"
                    onClick={nextMonth}
                    aria-label="Next month"
                    className="size-6 rounded-md text-[#64748B] hover:text-[#C5A073] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors border-0 bg-transparent cursor-pointer font-bold text-sm [text-shadow:none]"
                  >
                    ›
                  </button>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-semibold text-[#64748B] uppercase mb-1 [text-shadow:none]">
                  {DAYS_OF_WEEK.map((dw) => (
                    <div key={dw} className="[text-shadow:none]">{dw}</div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-0.5 text-center text-xs [text-shadow:none]">
                  {calendarCells.map((cell) => {
                    const isSelected = date === cell.dateStr
                    const isToday = cell.dateStr === todayStr
                    return (
                      <button
                        key={cell.dateStr}
                        type="button"
                        onClick={() => handleSelectDate(cell.dateStr)}
                        className={cn(
                          'h-7 w-full flex items-center justify-center rounded-md text-[11px] sm:text-xs font-medium transition-all border-0 outline-none cursor-pointer [text-shadow:none]',
                          isSelected
                            ? 'bg-[#C5A073] text-black font-semibold shadow-sm'
                            : cell.isCurrentMonth
                              ? isToday
                                ? 'border border-[#C5A073] text-[#C5A073] font-semibold bg-white hover:bg-[#F8F5EF]'
                                : 'bg-white text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C5A073]'
                              : 'bg-white text-[#CBD5E1] hover:bg-gray-50',
                        )}
                      >
                        {cell.day}
                      </button>
                    )
                  })}
                </div>

                {/* Quick select pills */}
                <div className="mt-2.5 pt-2 border-t border-[#F1ECE4] flex items-center justify-between text-[11px] [text-shadow:none]">
                  <button
                    type="button"
                    onClick={() => selectQuickDate(0)}
                    className="px-2.5 py-0.5 rounded-md bg-[#F8F5EF] text-[#C5A073] font-medium border-0 cursor-pointer hover:bg-[#F1ECE4] transition-colors [text-shadow:none]"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => selectQuickDate(1)}
                    className="px-2.5 py-0.5 rounded-md bg-[#F8F5EF] text-[#C5A073] font-medium border-0 cursor-pointer hover:bg-[#F1ECE4] transition-colors [text-shadow:none]"
                  >
                    Tomorrow
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Time Field */}
          <div className="relative flex-[1.2] min-w-0">
            <label className="block text-xs font-semibold text-[#344054] mb-1.5">
              Time
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === 'time' ? null : 'time')}
              className="relative flex h-12 items-center justify-between rounded-xl border border-solid border-[#D5CDBD] bg-white px-3.5 gap-2 hover:border-gold focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25 transition-all cursor-pointer shadow-none"
            >
              <div className="flex items-center gap-2.5 w-full min-w-0">
                <span className="text-[#64748B] shrink-0">
                  <Icon name="clock" size={18} />
                </span>
                <span className={cn('text-sm truncate select-none [text-shadow:none]', time ? 'text-[#0F172A] font-medium' : 'text-[#94A3B8]')}>
                  {time || 'Select time'}
                </span>
              </div>
              <span className={cn('text-[#64748B] shrink-0 transition-transform duration-200', openDropdown === 'time' && 'rotate-180')}>
                <Icon name="chevron-down" size={14} />
              </span>
            </div>

            {/* Time Dropdown Menu */}
            {openDropdown === 'time' && (
              <div className="absolute top-[calc(100%+6px)] left-0 w-full z-50 max-h-56 overflow-y-auto rounded-xl border border-[#D5CDBD] bg-white p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] [text-shadow:none]">
                <div className="px-2.5 pt-1.5 pb-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#64748B] [text-shadow:none]">
                  Pickup Time
                </div>
                <div className="h-px bg-[#F1ECE4] my-1" />
                <div className="flex flex-col gap-0.5">
                  {POPULAR_TIMES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setTime(item)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        'flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg text-xs sm:text-sm transition-colors border-0 outline-none cursor-pointer text-left [text-shadow:none]',
                        time === item
                          ? 'bg-[#F8F5EF] text-[#C5A073] font-medium'
                          : 'bg-white text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C5A073]',
                      )}
                    >
                      <span className="[text-shadow:none]">{item}</span>
                      {time === item && (
                        <span className="text-[#C5A073] shrink-0">
                          <Icon name="check" size={13} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Passengers Field */}
          <div className="relative flex-[1.15] min-w-0">
            <label className="block text-xs font-semibold text-[#344054] mb-1.5">
              Passengers
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === 'passengers' ? null : 'passengers')}
              className="relative flex h-12 items-center justify-between rounded-xl border border-solid border-[#D5CDBD] bg-white px-3.5 gap-2 hover:border-gold focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25 transition-all cursor-pointer shadow-none"
            >
              <div className="flex items-center gap-2.5 w-full min-w-0">
                <span className="text-[#64748B] shrink-0">
                  <Icon name="user" size={18} />
                </span>
                <span className="text-sm text-[#0F172A] font-medium truncate select-none [text-shadow:none]">
                  {passengers}
                </span>
              </div>
              <span className={cn('text-[#64748B] shrink-0 transition-transform duration-200', openDropdown === 'passengers' && 'rotate-180')}>
                <Icon name="chevron-down" size={14} />
              </span>
            </div>

            {/* Passengers Dropdown Menu */}
            {openDropdown === 'passengers' && (
              <div className="absolute top-[calc(100%+6px)] left-0 w-full z-50 rounded-xl border border-[#D5CDBD] bg-white p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] [text-shadow:none]">
                <div className="px-2.5 pt-1.5 pb-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#64748B] [text-shadow:none]">
                  Guests
                </div>
                <div className="h-px bg-[#F1ECE4] my-1" />
                <div className="flex flex-col gap-0.5">
                  {PASSENGER_OPTIONS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setPassengers(item)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        'flex items-center justify-between w-full px-2.5 py-2 rounded-lg text-xs sm:text-sm transition-colors border-0 outline-none cursor-pointer text-left [text-shadow:none]',
                        passengers === item
                          ? 'bg-[#F8F5EF] text-[#C5A073] font-medium'
                          : 'bg-white text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C5A073]',
                      )}
                    >
                      <span className="truncate pr-1 [text-shadow:none]">{item}</span>
                      {passengers === item && (
                        <span className="text-[#C5A073] shrink-0">
                          <Icon name="check" size={13} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Vehicles CTA Button - Single line & perfectly proportioned */}
          <div className="w-full lg:w-auto shrink-0">
            <button
              type="submit"
              className={cn(
                'flex h-12 w-full lg:w-auto lg:px-6 items-center justify-center rounded-xl text-sm font-semibold text-black transition-all hover:brightness-95 active:scale-[0.99] border-0 cursor-pointer shadow-sm whitespace-nowrap',
                bgGold,
              )}
            >
              Search Vehicles
            </button>
          </div>
        </form>

        {/* Footer Guarantee & Link */}
        <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A073] shrink-0">
              <Icon name="shield" size={17} />
            </span>
            <span>Free cancellation up to 24 hours before pickup time*</span>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 font-medium text-[#64748B] hover:text-[#C5A073] transition-colors no-underline"
          >
            <span>Modify or manage your booking anytime</span>
            <Icon name="chevron-right" size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
