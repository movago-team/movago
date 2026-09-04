'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, DateInput, Icon, Input, Select } from '@/ui'
import {
  DURATION_OPTIONS,
  LOCATION_OPTIONS,
  SERVICE_AREA_OPTIONS,
  TIME_OPTIONS,
} from '@/components/booking/constants'
import { cn } from '@/utils/cn'
import styles from '@/components/services/airport/AirportBookingWidget.module.css'

type FieldErrors = {
  from?: string
  date?: string
  startTime?: string
  duration?: string
}

export default function HourlyBookingWidget() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'hourly' | 'full-day' | 'custom'>('hourly')
  const [from, setFrom] = useState<string>('hotel')
  const [to, setTo] = useState<string>('')
  const [serviceArea, setServiceArea] = useState<string>('bkk-metro')
  const [date, setDate] = useState<string>('2026-09-10')
  const [startTime, setStartTime] = useState<string>('09:00')
  const [duration, setDuration] = useState<string>('4')
  const [errors, setErrors] = useState<FieldErrors>({})

  const durationHours = parseInt(activeTab === 'full-day' ? '10' : duration, 10) || 4

  const optionalToOptions = useMemo(
    () => [{ value: '', label: 'Destination / Area (Optional)' }, ...LOCATION_OPTIONS],
    [],
  )

  // Auto-calculated read-only Service End derived from Start Time + Duration
  const { formattedEndTime, rawEndTime } = useMemo(() => {
    if (!startTime || !durationHours) return { formattedEndTime: '—', rawEndTime: '' }
    const [hStr, mStr] = startTime.split(':')
    const h = parseInt(hStr, 10)
    const m = parseInt(mStr || '00', 10)
    if (isNaN(h) || isNaN(m)) return { formattedEndTime: '—', rawEndTime: '' }

    const totalMinutes = h * 60 + m + durationHours * 60
    const totalHours = Math.floor(totalMinutes / 60)
    const endH = totalHours % 24
    const endM = totalMinutes % 60
    const isNextDay = totalHours >= 24

    const period = endH >= 12 ? 'PM' : 'AM'
    const displayH = endH % 12 === 0 ? 12 : endH % 12
    const formattedH = displayH.toString().padStart(2, '0')
    const formattedM = endM.toString().padStart(2, '0')
    const rawFormattedH = endH.toString().padStart(2, '0')
    const baseTime = `${formattedH}:${formattedM} ${period}`

    return {
      formattedEndTime: isNextDay ? `${baseTime} (+1d)` : baseTime,
      rawEndTime: `${rawFormattedH}:${formattedM}`,
    }
  }, [startTime, durationHours])

  const clearErrors = () => setErrors({})

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: FieldErrors = {}

    if (!from) {
      next.from = 'Please select a pickup location.'
      setErrors(next)
      return
    }

    if (!date) {
      next.date = 'Please select a service date.'
      setErrors(next)
      return
    }

    clearErrors()

    const query = new URLSearchParams({
      service: 'hourly',
      tab: activeTab,
      from,
      to,
      serviceArea,
      date,
      startTime,
      endTime: rawEndTime,
      duration: activeTab === 'full-day' ? '10' : duration,
    }).toString()

    router.push(`/book?${query}`)
  }

  return (
    <div className="page-width relative z-20 -mt-20 sm:-mt-24 lg:-mt-28">
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD]/70 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.09)]">
        {/* Service Package Tabs - Balanced & Evenly Distributed */}
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-8 border-b border-[#E2E8F0] mb-5">
          <button
            type="button"
            onClick={() => {
              setActiveTab('hourly')
              setDuration('4')
              clearErrors()
            }}
            className={cn(
              'relative pb-3 pt-1 text-sm transition-all border-0 bg-transparent cursor-pointer outline-none',
              activeTab === 'hourly'
                ? 'font-semibold text-[#101828]'
                : 'font-medium text-[#667085] hover:text-[#101828]',
            )}
          >
            <span>Hourly Service</span>
            {activeTab === 'hourly' && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('full-day')
              setDuration('10')
              clearErrors()
            }}
            className={cn(
              'relative pb-3 pt-1 text-sm transition-all border-0 bg-transparent cursor-pointer outline-none',
              activeTab === 'full-day'
                ? 'font-semibold text-[#101828]'
                : 'font-medium text-[#667085] hover:text-[#101828]',
            )}
          >
            <span>Full Day (10 Hours)</span>
            {activeTab === 'full-day' && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('custom')
              clearErrors()
            }}
            className={cn(
              'relative pb-3 pt-1 text-sm transition-all border-0 bg-transparent cursor-pointer outline-none',
              activeTab === 'custom'
                ? 'font-semibold text-[#101828]'
                : 'font-medium text-[#667085] hover:text-[#101828]',
            )}
          >
            <span>Custom Package</span>
            {activeTab === 'custom' && (
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#C5A073] rounded-full z-10" />
            )}
          </button>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSearch} noValidate className={cn(styles.airportLightForm, 'flex flex-col gap-4')}>
          {/* Row 1: Pickup Location (From), Drop-off Area (Optional), Service Area */}
          <div className="grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-3 min-[1024px]:grid-cols-3">
            {/* Pickup Location (From) */}
            <div className="min-w-0">
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
            </div>

            {/* Drop-off Area (Optional) */}
            <div className="min-w-0">
              <Select
                label="Drop-off Area (Optional)"
                icon={<Icon name="pin" />}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                options={optionalToOptions}
              />
            </div>

            {/* Service Area */}
            <div className="min-w-0">
              <Select
                label="Service Area"
                value={serviceArea}
                onChange={(e) => setServiceArea(e.target.value)}
                options={SERVICE_AREA_OPTIONS}
              />
            </div>
          </div>

          {/* Row 2: Date, Start Time, Service End (Auto-calculated), Duration, Search */}
          <div className="grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-2 min-[1024px]:grid-cols-5">
            {/* Date */}
            <div className="min-w-0">
              <DateInput
                label="Date"
                value={date}
                error={errors.date}
                onChange={(e) => {
                  setDate(e.target.value)
                  clearErrors()
                }}
              />
            </div>

            {/* Start Time */}
            <div className="min-w-0">
              <Select
                label="Start Time"
                icon={<Icon name="clock" />}
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value)
                  clearErrors()
                }}
                options={TIME_OPTIONS}
              />
            </div>

            {/* Service End (Auto-Calculated Read-Only) */}
            <div className="min-w-0">
              <Input
                label="Service End"
                icon={<Icon name="clock" />}
                value={formattedEndTime}
                readOnly
                tabIndex={-1}
                className="bg-[#FAF8F5] text-[#475467] font-medium cursor-default focus:border-[#D5CDBD] focus:shadow-none focus:bg-[#FAF8F5]"
              />
            </div>

            {/* Duration */}
            <div className="min-w-0">
              <Select
                label="Duration"
                icon={<Icon name="clock" />}
                value={activeTab === 'full-day' ? '10' : duration}
                disabled={activeTab === 'full-day'}
                onChange={(e) => {
                  setDuration(e.target.value)
                  clearErrors()
                }}
                options={DURATION_OPTIONS}
              />
            </div>

            {/* Primary Search CTA Button */}
            <div className="booking-submit flex w-full items-end min-[601px]:max-[1023px]:col-span-2 min-w-0">
              <Button
                type="submit"
                variant="primary"
                className="!h-[34px] !min-h-[34px] !max-h-[34px] w-full !px-4 !py-0 !text-[13.5px] !leading-[34px] !font-semibold max-[600px]:!h-11 max-[600px]:!min-h-11 max-[600px]:!max-h-11 max-[600px]:!text-[14.5px] max-[600px]:!leading-11"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Custom Package Schedule / Notice */}
          {activeTab === 'custom' && (
            <div className="mt-1 rounded-xl border border-dashed border-[#C5A073]/50 bg-[#FAF8F5] p-3.5 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#C5A073]">
                  <Icon name="phone" size={16} />
                  <span>Looking for a customized multi-day schedule or special concierge package?</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#C5A073] hover:text-[#B08D60] transition-colors"
                >
                  <span>Contact VIP Team</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
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
            <span>Free cancellation up to 24 hours before service*</span>
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
