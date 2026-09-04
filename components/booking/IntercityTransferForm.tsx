'use client'

import React, { FormEvent, useState } from 'react'
import { Button, DateInput, Icon, Select } from '@/ui'
import { cn } from '@/utils/cn'
import {
  LOCATION_OPTIONS,
  TIME_OPTIONS,
  TRIP_TYPE_OPTIONS,
  TripType,
  isTimeAfter,
} from './constants'
import {
  bookingForm,
  bookingRow3,
  bookingRow4,
  bookingSubmit,
  roundtripPanel,
  roundtripTitle,
  searchBtn,
} from './classNames'

import styles from '@/components/services/airport/AirportBookingWidget.module.css'

export interface IntercityTransferFormProps {
  onSearch: (summary: string) => void
  variant?: 'dark' | 'light'
  tripTypePresentation?: 'tabs' | 'select'
  headerRightContent?: React.ReactNode
  className?: string
}

type FieldErrors = {
  from?: string
  to?: string
  endTime?: string
  returnEndTime?: string
}

export default function IntercityTransferForm({
  onSearch,
  variant = 'dark',
  tripTypePresentation,
  headerRightContent,
  className,
}: IntercityTransferFormProps) {
  const isLight = variant === 'light'
  const showTabs = tripTypePresentation ? tripTypePresentation === 'tabs' : isLight

  const [tripType, setTripType] = useState<TripType>('one-way')
  const [from, setFrom] = useState<string>('hotel')
  const [to, setTo] = useState<string>('pattaya')
  const [date, setDate] = useState<string>('2025-05-25')
  const [startTime, setStartTime] = useState<string>('09:00')
  const [endTime, setEndTime] = useState<string>('12:30')

  const [returnDate, setReturnDate] = useState<string>('2025-05-27')
  const [returnStartTime, setReturnStartTime] = useState<string>('14:00')
  const [returnEndTime, setReturnEndTime] = useState<string>('17:30')

  const [errors, setErrors] = useState<FieldErrors>({})

  const clearErrors = () => setErrors({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: FieldErrors = {}

    if (!from || !to) {
      if (!from) next.from = 'Please select an origin.'
      if (!to) next.to = 'Please select a destination.'
      setErrors(next)
      return
    }

    if (from === to) {
      next.from = 'Origin and destination cannot be the same.'
      next.to = 'Origin and destination cannot be the same.'
      setErrors(next)
      return
    }

    if (!isTimeAfter(startTime, endTime)) {
      next.endTime = 'Arrival time must be after departure time.'
      setErrors(next)
      return
    }

    if (tripType === 'round-trip' && !isTimeAfter(returnStartTime, returnEndTime)) {
      next.returnEndTime = 'Return end time must be after return start time.'
      setErrors(next)
      return
    }

    clearErrors()
    let tripSummary = ''
    if (tripType === 'round-trip') {
      tripSummary = `Round-trip (${from.toUpperCase()} ⇄ ${to.toUpperCase()}) with return on ${returnDate}`
    } else if (tripType === 'multi-city') {
      tripSummary = `Multi-City journey starting from ${from.toUpperCase()} to ${to.toUpperCase()} on ${date}`
    } else {
      tripSummary = `One-way transfer from ${from.toUpperCase()} to ${to.toUpperCase()} on ${date}`
    }

    onSearch(`Found available vehicles for Intercity: ${tripSummary}.`)
  }

  const scheduleRowClass = tripType === 'round-trip' ? bookingRow3 : bookingRow4

  return (
    <form
      className={cn(bookingForm, isLight && styles.airportLightForm, className)}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* 1. Trip Type Tabs Presentation (When in Tab Mode) */}
      {showTabs && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DFD5] pb-0 -mt-2 sm:-mt-1 mb-2">
          {/* Trip Type Tabs */}
          <div className="flex items-center gap-6 sm:gap-8">
            {TRIP_TYPE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setTripType(opt.value)
                  clearErrors()
                }}
                className={cn(
                  'relative pb-3 pt-1 text-sm sm:text-[14.5px] transition-all border-0 bg-transparent cursor-pointer outline-none font-sans',
                  tripType === opt.value
                    ? isLight
                      ? 'font-semibold text-[#101828]'
                      : 'font-semibold text-white'
                    : isLight
                      ? 'font-medium text-[#667085] hover:text-[#101828]'
                      : 'font-medium text-[#A6AAA0] hover:text-white',
                )}
              >
                <span>{opt.label}</span>
                {tripType === opt.value && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
                )}
              </button>
            ))}
          </div>

          {/* Optional Right-Aligned Header Note (e.g. Free Cancellation) */}
          {headerRightContent && (
            <div className="hidden sm:flex items-center pb-2.5">{headerRightContent}</div>
          )}
        </div>
      )}

      {/* 2. Route Inputs Row */}
      {showTabs ? (
        /* Tab Mode: Clean 2-Column Origin & Destination (No redundant dropdown) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Select
            label="Origin (From)"
            icon={<Icon name="pin" />}
            value={from}
            error={errors.from}
            onChange={(e) => {
              setFrom(e.target.value)
              clearErrors()
            }}
            options={LOCATION_OPTIONS}
          />

          <Select
            label="Destination (To)"
            icon={<Icon name="pin" />}
            value={to}
            error={errors.to}
            onChange={(e) => {
              setTo(e.target.value)
              clearErrors()
            }}
            options={LOCATION_OPTIONS}
          />
        </div>
      ) : (
        /* Select Dropdown Mode (Home booking tab fallback) */
        <div className={bookingRow3}>
          <Select
            label="Trip Type"
            icon={<Icon name="car" />}
            value={tripType}
            onChange={(e) => {
              setTripType(e.target.value as TripType)
              clearErrors()
            }}
            options={TRIP_TYPE_OPTIONS}
          />

          <Select
            label="Origin (From)"
            icon={<Icon name="pin" />}
            value={from}
            error={errors.from}
            onChange={(e) => {
              setFrom(e.target.value)
              clearErrors()
            }}
            options={LOCATION_OPTIONS}
          />

          <Select
            label="Destination (To)"
            icon={<Icon name="pin" />}
            value={to}
            error={errors.to}
            onChange={(e) => {
              setTo(e.target.value)
              clearErrors()
            }}
            options={LOCATION_OPTIONS}
          />
        </div>
      )}

      {/* 3. Schedule Row */}
      <div className={scheduleRowClass}>
        <DateInput
          label={tripType === 'multi-city' ? 'First Journey Date' : 'Departure Date'}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Select
          label="Departure Time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value)
            clearErrors()
          }}
          options={TIME_OPTIONS}
        />

        <Select
          label="Est. Arrival Time"
          value={endTime}
          error={errors.endTime}
          onChange={(e) => {
            setEndTime(e.target.value)
            clearErrors()
          }}
          options={TIME_OPTIONS}
        />

        {tripType !== 'round-trip' && (
          <div className={bookingSubmit}>
            <Button type="submit" variant="primary" className={searchBtn}>
              Search Vehicles
            </Button>
          </div>
        )}
      </div>

      {/* 4. Multi-City Info Hint */}
      {tripType === 'multi-city' && (
        <div className="rounded-xl border border-dashed border-[#C5A073]/40 bg-[#FAF8F5] p-3 sm:p-3.5 flex items-center gap-2.5 text-xs text-[#555850]">
          <span className="text-[#C5A073] shrink-0">
            <Icon name="car" size={16} />
          </span>
          <span>
            <strong>Multi-City Journey:</strong> Set your initial route here. You can customize additional intermediate stops and layovers during checkout.
          </span>
        </div>
      )}

      {/* 5. Return Journey Schedule Panel (When Round-Trip is selected) */}
      {tripType === 'round-trip' && (
        <div
          className={
            isLight
              ? 'rounded-xl border border-dashed border-[#C5A073]/50 bg-[#FAF8F5] p-3.5 sm:p-4'
              : roundtripPanel
          }
        >
          <div
            className={
              isLight
                ? 'mb-2.5 flex items-center gap-[7px] text-[13px] font-semibold text-[#C5A073]'
                : roundtripTitle
            }
          >
            <Icon name="car" size={16} />
            <span>Return Journey Schedule</span>
          </div>
          <div className={bookingRow4}>
            <DateInput
              label="Return Date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
            <Select
              label="Return Start Time"
              value={returnStartTime}
              onChange={(e) => {
                setReturnStartTime(e.target.value)
                clearErrors()
              }}
              options={TIME_OPTIONS}
            />
            <Select
              label="Return Est. End Time"
              value={returnEndTime}
              error={errors.returnEndTime}
              onChange={(e) => {
                setReturnEndTime(e.target.value)
                clearErrors()
              }}
              options={TIME_OPTIONS}
            />
            <div className={bookingSubmit}>
              <Button type="submit" variant="primary" className={searchBtn}>
                Search Vehicles
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
