'use client'

import { FormEvent, useMemo, useState } from 'react'
import { Button, DateInput, Icon, Select } from '@/ui'
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
import {
  bookingForm,
  bookingRow4,
  bookingSubmit,
  searchBtn,
} from './classNames'

export type ServiceEndMode = 'duration' | 'endTime'

export interface HourlyServiceFormProps {
  onSearch: (summary: string) => void
}

type FieldErrors = {
  from?: string
  duration?: string
  endTime?: string
}

const SERVICE_END_MODE_OPTIONS = [
  { value: 'duration', label: 'Duration' },
  { value: 'endTime', label: 'End Time' },
]

export default function HourlyServiceForm({
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
  const [errors, setErrors] = useState<FieldErrors>({})

  const clearErrors = () => setErrors({})

  const optionalToOptions = useMemo(
    () => [{ value: '', label: 'Destination / Area (Optional)' }, ...LOCATION_OPTIONS],
    [],
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: FieldErrors = {}

    if (!from) {
      next.from = 'Please select a pickup location.'
      setErrors(next)
      return
    }

    let computedEndAt = endTime
    let endSummary = ''

    if (serviceEndMode === 'duration') {
      const durationHours = parseInt(duration, 10) || 4
      if (exceedsMaxOperatingTime(startTime, durationHours)) {
        next.duration =
          'Service cannot exceed 11:00 PM. Choose an earlier start or shorter duration.'
        setErrors(next)
        return
      }
      computedEndAt = calculateEndTime(startTime, durationHours)
      endSummary = `${duration} Hours (Est. until ${formatTimeLabel(computedEndAt)})`
    } else {
      if (!isTimeAfter(startTime, endTime)) {
        next.endTime = 'End time must be later than start time.'
        setErrors(next)
        return
      }
      computedEndAt = endTime
      endSummary = `Until ${formatTimeLabel(computedEndAt)}`
    }

    clearErrors()
    const toLabel = to ? ` to ${to.toUpperCase()}` : ' (Flexible Itinerary)'
    onSearch(
      `Found available vehicles for Hourly Chauffeur (${endSummary}) starting at ${from.toUpperCase()}${toLabel} on ${date}.`,
    )
  }

  return (
    <form className={bookingForm} onSubmit={handleSubmit} noValidate>
      <div className={bookingRow4}>
        <Select
          label="Pickup Location (From)"
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
          label="Drop-off Area (Optional)"
          icon={<Icon name="pin" />}
          value={to}
          onChange={(e) => setTo(e.target.value)}
          options={optionalToOptions}
        />

        <Select
          label="Service Area"
          value={serviceArea}
          onChange={(e) => setServiceArea(e.target.value)}
          options={SERVICE_AREA_OPTIONS}
        />

        <DateInput
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={bookingRow4}>
        <Select
          label="Start Time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value)
            clearErrors()
          }}
          options={TIME_OPTIONS}
        />

        <Select
          label="Service End"
          icon={<Icon name="clock" />}
          value={serviceEndMode}
          onChange={(e) => {
            setServiceEndMode(e.target.value as ServiceEndMode)
            clearErrors()
          }}
          options={SERVICE_END_MODE_OPTIONS}
        />

        {serviceEndMode === 'duration' ? (
          <Select
            label="Duration"
            icon={<Icon name="clock" />}
            value={duration}
            error={errors.duration}
            onChange={(e) => {
              setDuration(e.target.value)
              clearErrors()
            }}
            options={DURATION_OPTIONS}
          />
        ) : (
          <Select
            label="End Time"
            icon={<Icon name="clock" />}
            value={endTime}
            error={errors.endTime}
            onChange={(e) => {
              setEndTime(e.target.value)
              clearErrors()
            }}
            options={TIME_OPTIONS}
          />
        )}

        <div className={bookingSubmit}>
          <Button type="submit" variant="primary" className={searchBtn}>
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}
