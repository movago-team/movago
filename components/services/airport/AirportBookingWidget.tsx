'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, DateInput, Icon, Input, Select } from '@/ui'
import {
  AirportDirection,
  LOCATION_OPTIONS,
  TIME_OPTIONS,
  TripType,
  isTimeAfter,
} from '@/components/booking/constants'
import { cn } from '@/utils/cn'
import styles from './AirportBookingWidget.module.css'

type FieldErrors = {
  from?: string
  to?: string
  endTime?: string
  returnDate?: string
  returnEndTime?: string
}

const DIRECTION_OPTIONS = [
  { value: 'airport-to-dest', label: 'Airport → Destination' },
  { value: 'dest-to-airport', label: 'Destination → Airport' },
]

export default function AirportBookingWidget() {
  const router = useRouter()

  const [tripType, setTripType] = useState<TripType>('one-way')
  const [direction, setDirection] = useState<AirportDirection>('airport-to-dest')
  const [from, setFrom] = useState<string>('bkk')
  const [to, setTo] = useState<string>('sukhumvit')
  const [date, setDate] = useState<string>('2026-09-10')
  const [startTime, setStartTime] = useState<string>('10:00')
  const [endTime, setEndTime] = useState<string>('11:30')
  const [flightNumber, setFlightNumber] = useState<string>('')

  // Return journey state (for round trip)
  const [returnDate, setReturnDate] = useState<string>('2026-09-12')
  const [returnStartTime, setReturnStartTime] = useState<string>('14:00')
  const [returnEndTime, setReturnEndTime] = useState<string>('15:30')

  const [errors, setErrors] = useState<FieldErrors>({})

  const clearErrors = () => setErrors({})

  const handleDirectionChange = (newDir: string) => {
    const dir = newDir as AirportDirection
    setDirection(dir)
    if (dir === 'airport-to-dest') {
      setFrom('bkk')
      setTo('sukhumvit')
    } else {
      setFrom('sukhumvit')
      setTo('bkk')
    }
    clearErrors()
  }

  const handleSwap = () => {
    const tempFrom = from
    const tempTo = to
    setFrom(tempTo)
    setTo(tempFrom)
    setDirection((prev) => (prev === 'airport-to-dest' ? 'dest-to-airport' : 'airport-to-dest'))
    clearErrors()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: FieldErrors = {}

    if (!from || !to) {
      if (!from) next.from = 'Please select a pickup location.'
      if (!to) next.to = 'Please select a drop-off location.'
      setErrors(next)
      return
    }

    if (from === to) {
      next.from = 'Pickup and drop-off cannot be the same.'
      next.to = 'Pickup and drop-off cannot be the same.'
      setErrors(next)
      return
    }

    if (!isTimeAfter(startTime, endTime)) {
      next.endTime = 'End time must be after pickup time.'
      setErrors(next)
      return
    }

    if (tripType === 'round-trip') {
      if (!returnDate) {
        next.returnDate = 'Please select a return date.'
        setErrors(next)
        return
      }
      if (returnDate < date) {
        next.returnDate = 'Return date cannot be earlier than departure date.'
        setErrors(next)
        return
      }
      if (!isTimeAfter(returnStartTime, returnEndTime)) {
        next.returnEndTime = 'Return end time must be after return pickup time.'
        setErrors(next)
        return
      }
    }

    clearErrors()

    const query = new URLSearchParams({
      service: 'airport',
      tripType,
      direction,
      from,
      to,
      date,
      time: startTime,
      endTime,
      ...(flightNumber.trim() ? { flightNumber: flightNumber.trim().toUpperCase() } : {}),
      ...(tripType === 'round-trip'
        ? {
            returnDate,
            returnTime: returnStartTime,
            returnEndTime,
          }
        : {}),
    }).toString()

    router.push(`/book?${query}`)
  }

  const isAirportArrival = direction === 'airport-to-dest'

  return (
    <div className="page-width relative z-20 -mt-14 sm:-mt-20">
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD]/70 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.09)]">
        {/* Trip Type Tabs (One Way / Round Trip) */}
        <div className="flex items-center gap-8 border-b border-[#E2E8F0] mb-5">
          <button
            type="button"
            onClick={() => {
              setTripType('one-way')
              clearErrors()
            }}
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
            onClick={() => {
              setTripType('round-trip')
              clearErrors()
            }}
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

        {/* Booking Form */}
        <form onSubmit={handleSubmit} noValidate className={cn(styles.airportLightForm, 'flex flex-col gap-4')}>
          {/* Row 1: Direction, From, Swap, To — equal-sized inputs */}
          <div className="grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-2 min-[1024px]:grid-cols-[1fr_1fr_34px_1fr]">
            {/* Direction */}
            <div className="min-w-0">
              <Select
                label="Direction"
                icon={<Icon name="plane" />}
                value={direction}
                onChange={(e) => handleDirectionChange(e.target.value)}
                options={DIRECTION_OPTIONS}
              />
            </div>

            {/* Airport (From) / Pickup Point (From) */}
            <div className="min-w-0">
              <Select
                label={isAirportArrival ? 'Airport (From)' : 'Pickup Point (From)'}
                icon={isAirportArrival ? <Icon name="plane" /> : <Icon name="pin" />}
                key={`from-${direction}`}
                value={from}
                error={errors.from}
                onChange={(e) => {
                  setFrom(e.target.value)
                  clearErrors()
                }}
                options={LOCATION_OPTIONS}
              />
            </div>

            {/* Swap Button for Desktop */}
            <div className="hidden min-[1024px]:flex items-center justify-center pb-0">
              <button
                type="button"
                onClick={handleSwap}
                title="Swap pickup and destination"
                aria-label="Swap pickup and destination"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-[#D5CDBD] bg-white text-[#475467] hover:border-[#C5A073] hover:text-[#C5A073] hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-none active:scale-95 shrink-0"
              >
                <Icon name="swap" size={15} />
              </button>
            </div>

            {/* Destination (To) / Airport (To) */}
            <div className="min-w-0">
              <Select
                label={isAirportArrival ? 'Destination (To)' : 'Airport (To)'}
                icon={isAirportArrival ? <Icon name="pin" /> : <Icon name="plane" />}
                key={`to-${direction}`}
                value={to}
                error={errors.to}
                onChange={(e) => {
                  setTo(e.target.value)
                  clearErrors()
                }}
                options={LOCATION_OPTIONS}
              />
            </div>
          </div>

          {/* Quick Swap Trigger for Mobile */}
          <div className="flex justify-end min-[1024px]:hidden -mt-1 -mb-1">
            <button
              type="button"
              onClick={handleSwap}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A073] hover:text-[#B08D60] py-1 px-2.5 rounded-md bg-white hover:bg-[#FAF8F5] border border-dashed border-[#C5A073]/40 transition-colors"
            >
              <Icon name="swap" size={13} />
              <span>Swap From ↔ To</span>
            </button>
          </div>

          {/* Row 2: Date, Pickup Time, Est. End Time, Flight Number, Search Button — all in one row with equal-sized inputs */}
          <div className="grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-2 min-[1024px]:grid-cols-5">
            {/* Departure Date */}
            <div className="min-w-0">
              <DateInput
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Pickup Time */}
            <div className="min-w-0">
              <Select
                label="Pickup Time"
                icon={<Icon name="clock" />}
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value)
                  clearErrors()
                }}
                options={TIME_OPTIONS}
              />
            </div>

            {/* Estimated End Time */}
            <div className="min-w-0">
              <Select
                label="Est. End Time"
                icon={<Icon name="clock" />}
                value={endTime}
                error={errors.endTime}
                onChange={(e) => {
                  setEndTime(e.target.value)
                  clearErrors()
                }}
                options={TIME_OPTIONS}
              />
            </div>

            {/* Flight Number (Optional) */}
            <div className="min-w-0">
              <Input
                label="Flight Number (Optional)"
                icon={<Icon name="airplane" />}
                placeholder="e.g. TG678 or QR830"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>

            {/* Primary Search CTA Button */}
            <div className="booking-submit flex w-full items-end min-[601px]:max-[1023px]:col-span-2 min-w-0">
              <Button
                type="submit"
                variant="primary"
                className="!h-[34px] !min-h-[34px] !max-h-[34px] w-full !px-4 !py-0 !text-[13.5px] !leading-[34px] !font-semibold max-[600px]:!h-11 max-[600px]:!min-h-11 max-[600px]:!max-h-11 max-[600px]:!text-[14.5px] max-[600px]:!leading-11"
              >
                Search Vehicles
              </Button>
            </div>
          </div>

          {/* Return Journey Schedule (Only shown when Round Trip is selected) */}
          {tripType === 'round-trip' && (
            <div className="mt-1 rounded-xl border border-dashed border-[#C5A073]/50 bg-[#FAF8F5] p-3.5 sm:p-4">
              <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-[#C5A073]">
                <Icon name="car" size={16} />
                <span>Return Journey Schedule</span>
              </div>
              <div className="grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-3">
                <DateInput
                  label="Return Date"
                  value={returnDate}
                  error={errors.returnDate}
                  onChange={(e) => {
                    setReturnDate(e.target.value)
                    clearErrors()
                  }}
                />
                <Select
                  label="Return Pickup Time"
                  icon={<Icon name="clock" />}
                  value={returnStartTime}
                  onChange={(e) => {
                    setReturnStartTime(e.target.value)
                    clearErrors()
                  }}
                  options={TIME_OPTIONS}
                />
                <Select
                  label="Return Est. End Time"
                  icon={<Icon name="clock" />}
                  value={returnEndTime}
                  error={errors.returnEndTime}
                  onChange={(e) => {
                    setReturnEndTime(e.target.value)
                    clearErrors()
                  }}
                  options={TIME_OPTIONS}
                />
              </div>
            </div>
          )}
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
