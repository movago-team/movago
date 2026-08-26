'use client'

import { FormEvent, useMemo, useState } from 'react'
import { Button, DateInput, Icon, Select } from '@/components/ui'
import {
  DURATION_OPTIONS,
  LOCATION_OPTIONS,
  SERVICE_AREA_OPTIONS,
  TIME_OPTIONS,
  calculateEndTime,
  exceedsMaxOperatingTime,
  formatTimeLabel,
  isTimeAfter,
} from './constants'

export type ServiceEndMode = 'duration' | 'endTime'

export interface HourlyServiceFormProps {
  vehicle: string
  onVehicleChange: (vehicle: string) => void
  onSearch: (summary: string) => void
}

const SERVICE_END_MODE_OPTIONS = [
  { value: 'duration', label: 'Duration' },
  { value: 'endTime', label: 'End Time' },
]

export default function HourlyServiceForm({
  vehicle,
  onVehicleChange,
  onSearch,
}: HourlyServiceFormProps) {
  const [from, setFrom] = useState<string>('hotel')
  const [to, setTo] = useState<string>('')
  const [date, setDate] = useState<string>('2025-05-25')
  const [startTime, setStartTime] = useState<string>('10:00')
  const [serviceEndMode, setServiceEndMode] = useState<ServiceEndMode>('duration')
  const [duration, setDuration] = useState<string>('4')
  const [endTime, setEndTime] = useState<string>('14:00')
  const [serviceArea, setServiceArea] = useState<string>('bkk-metro')
  const [passengers, setPassengers] = useState<string>('2')
  const [error, setError] = useState<string>('')

  const optionalToOptions = useMemo(
    () => [{ value: '', label: 'Destination / Area (Optional)' }, ...LOCATION_OPTIONS],
    []
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!from) {
      setError('Please select a pickup location.')
      return
    }

    let computedEndAt = endTime
    let endSummary = ''

    if (serviceEndMode === 'duration') {
      const durationHours = parseInt(duration, 10) || 4
      if (exceedsMaxOperatingTime(startTime, durationHours)) {
        setError('Service cannot exceed 11:00 PM operating hours. Please choose an earlier Start Time or a shorter Duration.')
        return
      }
      computedEndAt = calculateEndTime(startTime, durationHours)
      endSummary = `${duration} Hours (Est. until ${formatTimeLabel(computedEndAt)})`
    } else {
      if (!isTimeAfter(startTime, endTime)) {
        setError('End Time must be later than Start Time.')
        return
      }
      computedEndAt = endTime
      endSummary = `Until ${formatTimeLabel(computedEndAt)}`
    }

    const toLabel = to ? ` to ${to.toUpperCase()}` : ' (Flexible Itinerary)'
    onSearch(
      `Found available vehicles for Hourly Chauffeur (${endSummary}) starting at ${from.toUpperCase()}${toLabel} on ${date}.`
    )
  }

  return (
    <form className="booking-service-form" onSubmit={handleSubmit}>
      <div className="booking-form-grid">
        {/* Row 1 — Pickup & Area */}
        <div className="booking-row booking-row-journey-hourly">
          <Select
            label="Pickup Location (From)"
            icon={<Icon name="pin" />}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            options={LOCATION_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Drop-off Area (Optional)"
            icon={<Icon name="pin" />}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            options={optionalToOptions}
            containerClassName="booking-col"
          />

          <Select
            label="Service Area"
            value={serviceArea}
            onChange={(e) => setServiceArea(e.target.value)}
            options={SERVICE_AREA_OPTIONS}
            containerClassName="booking-col"
          />

          <DateInput
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            containerClassName="booking-col"
          />
        </div>

        {/* Row 2 — Service Time & Search */}
        <div className="booking-row booking-row-time-hourly">
          <Select
            label="Start Time"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value)
              setError('')
            }}
            options={TIME_OPTIONS}
            containerClassName="booking-col"
          />

          <Select
            label="Service End"
            icon={<Icon name="clock" />}
            value={serviceEndMode}
            onChange={(e) => {
              setServiceEndMode(e.target.value as ServiceEndMode)
              setError('')
            }}
            options={SERVICE_END_MODE_OPTIONS}
            containerClassName="booking-col"
          />

          {serviceEndMode === 'duration' ? (
            <Select
              label="Duration"
              icon={<Icon name="clock" />}
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value)
                setError('')
              }}
              options={DURATION_OPTIONS}
              containerClassName="booking-col"
            />
          ) : (
            <Select
              label="End Time"
              icon={<Icon name="clock" />}
              value={endTime}
              onChange={(e) => {
                setEndTime(e.target.value)
                setError('')
              }}
              options={TIME_OPTIONS}
              containerClassName="booking-col"
            />
          )}

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
