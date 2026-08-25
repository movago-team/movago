'use client'

import { FormEvent, useState } from 'react'
import { Button, DateInput, Icon, Select } from '@/components/ui'
import {
  LOCATION_OPTIONS,
  LUGGAGE_OPTIONS,
  PASSENGER_OPTIONS,
  TIME_OPTIONS,
  TripType,
  VEHICLE_OPTIONS,
  isTimeAfter,
} from './constants'

export interface IntercityTransferFormProps {
  vehicle: string
  onVehicleChange: (vehicle: string) => void
  onSearch: (summary: string) => void
}

const TRIP_TYPE_OPTIONS = [
  { value: 'one-way', label: 'One-way Trip' },
  { value: 'round-trip', label: 'Round-trip' },
]

export default function IntercityTransferForm({
  vehicle,
  onVehicleChange,
  onSearch,
}: IntercityTransferFormProps) {
  const [tripType, setTripType] = useState<TripType>('one-way')
  const [from, setFrom] = useState<string>('hotel')
  const [to, setTo] = useState<string>('pattaya')
  const [date, setDate] = useState<string>('2025-05-25')
  const [startTime, setStartTime] = useState<string>('09:00')
  const [endTime, setEndTime] = useState<string>('12:30')

  // Round-trip fields
  const [returnDate, setReturnDate] = useState<string>('2025-05-27')
  const [returnStartTime, setReturnStartTime] = useState<string>('14:00')
  const [returnEndTime, setReturnEndTime] = useState<string>('17:30')

  const [passengers, setPassengers] = useState<string>('2')
  const [luggage, setLuggage] = useState<string>('2')
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!from || !to) {
      setError('Please select both origin and destination.')
      return
    }

    if (from === to) {
      setError('Origin and destination cannot be the same for intercity transfer.')
      return
    }

    if (!isTimeAfter(startTime, endTime)) {
      setError('Departure End Time must be after Start Time.')
      return
    }

    if (tripType === 'round-trip') {
      if (!isTimeAfter(returnStartTime, returnEndTime)) {
        setError('Return End Time must be after Return Start Time.')
        return
      }
    }

    const tripSummary =
      tripType === 'round-trip'
        ? `Round-trip (${from.toUpperCase()} ⇄ ${to.toUpperCase()}) with return on ${returnDate}`
        : `One-way transfer from ${from.toUpperCase()} to ${to.toUpperCase()} on ${date}`

    onSearch(`Found available vehicles for Intercity: ${tripSummary}.`)
  }

  return (
    <form className="booking-service-form" onSubmit={handleSubmit}>
      <div className="booking-form-grid">
        {/* Row 1 — Journey */}
        <div className="booking-row booking-row-journey-intercity">
          <Select
            label="Trip Type"
            icon={<Icon name="car" />}
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
            options={TRIP_TYPE_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Origin (From)"
            icon={<Icon name="pin" />}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            options={LOCATION_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Destination (To)"
            icon={<Icon name="pin" />}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            options={LOCATION_OPTIONS}
            containerClassName="booking-col"
          />

          <DateInput
            label="Departure Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            containerClassName="booking-col"
          />
        </div>

        {/* Row 2 — Schedule */}
        <div className="booking-row booking-row-schedule-intercity">
          <Select
            label="Departure Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            options={TIME_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Est. Arrival Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            options={TIME_OPTIONS}
            containerClassName="booking-col"
          />
        </div>

        {/* Round-trip return section */}
        {tripType === 'round-trip' && (
          <div className="booking-roundtrip-panel">
            <div className="booking-roundtrip-title">
              <Icon name="car" />
              <span>Return Journey Schedule</span>
            </div>
            <div className="booking-row-return-intercity">
              <DateInput
                label="Return Date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                containerClassName="booking-col"
              />
              <Select
                label="Return Start Time"
                value={returnStartTime}
                onChange={(e) => setReturnStartTime(e.target.value)}
                options={TIME_OPTIONS}
                containerClassName="booking-col"
              />
              <Select
                label="Return Est. End Time"
                value={returnEndTime}
                onChange={(e) => setReturnEndTime(e.target.value)}
                options={TIME_OPTIONS}
                containerClassName="booking-col"
              />
            </div>
          </div>
        )}

        {/* Row 3 — Travel Details */}
        <div className="booking-row booking-row-travel-intercity">
          <Select
            label="Passengers"
            icon={<Icon name="users" />}
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            options={PASSENGER_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Luggage"
            icon={<Icon name="bag" />}
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
            options={LUGGAGE_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Vehicle"
            value={vehicle}
            onChange={(e) => onVehicleChange(e.target.value)}
            options={VEHICLE_OPTIONS}
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
