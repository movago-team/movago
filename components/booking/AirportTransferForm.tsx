'use client'

import { FormEvent, useState } from 'react'
import { Button, DateInput, Icon, Input, Select } from '@/components/ui'
import {
  AirportDirection,
  LOCATION_OPTIONS,
  TIME_OPTIONS,
  isTimeAfter,
} from './constants'

export interface AirportTransferFormProps {
  vehicle: string
  onVehicleChange: (vehicle: string) => void
  onSearch: (summary: string) => void
}

const DIRECTION_OPTIONS = [
  { value: 'airport-to-dest', label: 'Airport → Destination' },
  { value: 'dest-to-airport', label: 'Destination → Airport' },
]

export default function AirportTransferForm({
  vehicle,
  onVehicleChange,
  onSearch,
}: AirportTransferFormProps) {
  const [direction, setDirection] = useState<AirportDirection>('airport-to-dest')
  const [from, setFrom] = useState<string>('bkk')
  const [to, setTo] = useState<string>('sukhumvit')
  const [date, setDate] = useState<string>('2025-05-25')
  const [startTime, setStartTime] = useState<string>('10:00')
  const [endTime, setEndTime] = useState<string>('11:30')
  const [flightNumber, setFlightNumber] = useState<string>('')
  const [passengers, setPassengers] = useState<string>('2')
  const [luggage, setLuggage] = useState<string>('2')
  const [error, setError] = useState<string>('')

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
    setError('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!from || !to) {
      setError('Please select both pickup and drop-off locations.')
      return
    }

    if (from === to) {
      setError('Pickup and drop-off locations cannot be the same.')
      return
    }

    if (!isTimeAfter(startTime, endTime)) {
      setError('End Time must be after Start Time (expected trip completion).')
      return
    }

    const directionLabel = direction === 'airport-to-dest' ? 'Airport Arrival' : 'Airport Departure'
    const flightInfo = flightNumber.trim() ? ` (Flight: ${flightNumber.trim().toUpperCase()})` : ''
    onSearch(
      `Found available vehicles for ${directionLabel} from ${from.toUpperCase()} to ${to.toUpperCase()}${flightInfo} on ${date}.`
    )
  }

  return (
    <form className="booking-service-form" onSubmit={handleSubmit}>
      <div className="booking-form-grid">
        {/* Row 1 — Journey */}
        <div className="booking-row booking-row-journey-airport">
          <Select
            label="Direction"
            icon={<Icon name="plane" />}
            value={direction}
            onChange={(e) => handleDirectionChange(e.target.value)}
            options={DIRECTION_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label={direction === 'airport-to-dest' ? 'Airport (From)' : 'Pickup Point (From)'}
            icon={direction === 'airport-to-dest' ? <Icon name="plane" /> : <Icon name="pin" />}
            key={`from-${direction}`}
            value={from}
            onChange={(e) => {
              setFrom(e.target.value)
              setError('')
            }}
            options={LOCATION_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label={direction === 'airport-to-dest' ? 'Destination (To)' : 'Airport (To)'}
            icon={direction === 'airport-to-dest' ? <Icon name="pin" /> : <Icon name="plane" />}
            key={`to-${direction}`}
            value={to}
            onChange={(e) => {
              setTo(e.target.value)
              setError('')
            }}
            options={LOCATION_OPTIONS}
            containerClassName="booking-col"
          />

          <DateInput
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            containerClassName="booking-col"
          />
        </div>

        {/* Row 2 — Time & Flight */}
        <div className="booking-row booking-row-time-airport">
          <Select
            label="Pickup Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            options={TIME_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Est. End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            options={TIME_OPTIONS}
            containerClassName="booking-col"
          />

          <Input
            label="Flight Number"
            icon={<Icon name="airplane" />}
            placeholder="e.g. TG678 or QR830"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            containerClassName="booking-col"
          />

          <div className="booking-submit-wrap">
            <Button type="submit" variant="primary" className="search-btn w-full">
              Search
            </Button>
          </div>
        </div>
      </div>

      {error && <div className="booking-validation-error">{error}</div>}
    </form>
  )
}
