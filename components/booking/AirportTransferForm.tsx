'use client'

import { FormEvent, useState } from 'react'
import { Button, DateInput, Icon, Input, Select } from '@/ui'
import {
  AirportDirection,
  LOCATION_OPTIONS,
  TIME_OPTIONS,
  isTimeAfter,
} from './constants'
import {
  bookingForm,
  bookingRow4,
  bookingSubmit,
  searchBtn,
} from './classNames'

export interface AirportTransferFormProps {
  onSearch: (summary: string) => void
}

type FieldErrors = {
  from?: string
  to?: string
  endTime?: string
}

const DIRECTION_OPTIONS = [
  { value: 'airport-to-dest', label: 'Airport → Destination' },
  { value: 'dest-to-airport', label: 'Destination → Airport' },
]

export default function AirportTransferForm({
  onSearch,
}: AirportTransferFormProps) {
  const [direction, setDirection] = useState<AirportDirection>('airport-to-dest')
  const [from, setFrom] = useState<string>('bkk')
  const [to, setTo] = useState<string>('sukhumvit')
  const [date, setDate] = useState<string>('2025-05-25')
  const [startTime, setStartTime] = useState<string>('10:00')
  const [endTime, setEndTime] = useState<string>('11:30')
  const [flightNumber, setFlightNumber] = useState<string>('')
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
      next.endTime = 'End time must be after start time.'
      setErrors(next)
      return
    }

    clearErrors()
    const directionLabel = direction === 'airport-to-dest' ? 'Airport Arrival' : 'Airport Departure'
    const flightInfo = flightNumber.trim() ? ` (Flight: ${flightNumber.trim().toUpperCase()})` : ''
    onSearch(
      `Found available vehicles for ${directionLabel} from ${from.toUpperCase()} to ${to.toUpperCase()}${flightInfo} on ${date}.`,
    )
  }

  return (
    <form className={bookingForm} onSubmit={handleSubmit} noValidate>
      <div className={bookingRow4}>
        <Select
          label="Direction"
          icon={<Icon name="plane" />}
          value={direction}
          onChange={(e) => handleDirectionChange(e.target.value)}
          options={DIRECTION_OPTIONS}
        />

        <Select
          label={direction === 'airport-to-dest' ? 'Airport (From)' : 'Pickup Point (From)'}
          icon={direction === 'airport-to-dest' ? <Icon name="plane" /> : <Icon name="pin" />}
          key={`from-${direction}`}
          value={from}
          error={errors.from}
          onChange={(e) => {
            setFrom(e.target.value)
            clearErrors()
          }}
          options={LOCATION_OPTIONS}
        />

        <Select
          label={direction === 'airport-to-dest' ? 'Destination (To)' : 'Airport (To)'}
          icon={direction === 'airport-to-dest' ? <Icon name="pin" /> : <Icon name="plane" />}
          key={`to-${direction}`}
          value={to}
          error={errors.to}
          onChange={(e) => {
            setTo(e.target.value)
            clearErrors()
          }}
          options={LOCATION_OPTIONS}
        />

        <DateInput
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={bookingRow4}>
        <Select
          label="Pickup Time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value)
            clearErrors()
          }}
          options={TIME_OPTIONS}
        />

        <Select
          label="Est. End Time"
          value={endTime}
          error={errors.endTime}
          onChange={(e) => {
            setEndTime(e.target.value)
            clearErrors()
          }}
          options={TIME_OPTIONS}
        />

        <Input
          label="Flight Number"
          icon={<Icon name="airplane" />}
          placeholder="e.g. TG678 or QR830"
          value={flightNumber}
          helperText="Optional"
          onChange={(e) => setFlightNumber(e.target.value)}
        />

        <div className={bookingSubmit}>
          <Button type="submit" variant="primary" className={searchBtn}>
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}
