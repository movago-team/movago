'use client'

import { FormEvent, useState } from 'react'
import { Button, DateInput, Icon, Select } from '@/ui'
import {
  LOCATION_OPTIONS,
  TIME_OPTIONS,
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

export interface IntercityTransferFormProps {
  onSearch: (summary: string) => void
}

type FieldErrors = {
  from?: string
  to?: string
  endTime?: string
  returnEndTime?: string
}

const TRIP_TYPE_OPTIONS = [
  { value: 'one-way', label: 'One-way Trip' },
  { value: 'round-trip', label: 'Round-trip' },
]

export default function IntercityTransferForm({
  onSearch,
}: IntercityTransferFormProps) {
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
    const tripSummary =
      tripType === 'round-trip'
        ? `Round-trip (${from.toUpperCase()} ⇄ ${to.toUpperCase()}) with return on ${returnDate}`
        : `One-way transfer from ${from.toUpperCase()} to ${to.toUpperCase()} on ${date}`

    onSearch(`Found available vehicles for Intercity: ${tripSummary}.`)
  }

  const scheduleRowClass = tripType === 'one-way' ? bookingRow4 : bookingRow3

  return (
    <form className={bookingForm} onSubmit={handleSubmit} noValidate>
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

      <div className={scheduleRowClass}>
        <DateInput
          label="Departure Date"
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

        {tripType === 'one-way' && (
          <div className={bookingSubmit}>
            <Button type="submit" variant="primary" className={searchBtn}>
              Search
            </Button>
          </div>
        )}
      </div>

      {tripType === 'round-trip' && (
        <div className={roundtripPanel}>
          <div className={roundtripTitle}>
            <Icon name="car" />
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
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
