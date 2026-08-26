import { vehicles } from '@/data/vehicles'

export type ServiceTabType = 'airport' | 'hourly' | 'intercity'
export type AirportDirection = 'airport-to-dest' | 'dest-to-airport'
export type TripType = 'one-way' | 'round-trip'

export interface LocationOption {
  value: string
  label: string
  isAirport?: boolean
}

// Single shared location source of truth
export const LOCATION_OPTIONS: LocationOption[] = [
  { value: 'bkk', label: 'Suvarnabhumi Airport (BKK)', isAirport: true },
  { value: 'dmk', label: 'Don Mueang Airport (DMK)', isAirport: true },
  { value: 'hotel', label: 'Bangkok Hotel' },
  { value: 'sukhumvit', label: 'Sukhumvit, Bangkok' },
  { value: 'silom', label: 'Silom / Sathorn, Bangkok' },
  { value: 'riverside', label: 'Riverside / Chao Phraya' },
  { value: 'siam', label: 'Siam / Pratunam, Bangkok' },
  { value: 'pattaya', label: 'Pattaya' },
  { value: 'huahin', label: 'Hua Hin' },
  { value: 'ayutthaya', label: 'Ayutthaya' },
  { value: 'rayong', label: 'Rayong' },
]

export const AIRPORT_OPTIONS = LOCATION_OPTIONS.filter((loc) => loc.isAirport)
export const NON_AIRPORT_OPTIONS = LOCATION_OPTIONS.filter((loc) => !loc.isAirport)

// Shared Time options from 6:00 AM to 11:00 PM (30-min intervals, ending at 11:00 PM)
export const TIME_OPTIONS = [
  { value: '06:00', label: '06:00 AM' },
  { value: '06:30', label: '06:30 AM' },
  { value: '07:00', label: '07:00 AM' },
  { value: '07:30', label: '07:30 AM' },
  { value: '08:00', label: '08:00 AM' },
  { value: '08:30', label: '08:30 AM' },
  { value: '09:00', label: '09:00 AM' },
  { value: '09:30', label: '09:30 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '13:30', label: '01:30 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '14:30', label: '02:30 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '15:30', label: '03:30 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '16:30', label: '04:30 PM' },
  { value: '17:00', label: '05:00 PM' },
  { value: '17:30', label: '05:30 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '18:30', label: '06:30 PM' },
  { value: '19:00', label: '07:00 PM' },
  { value: '19:30', label: '07:30 PM' },
  { value: '20:00', label: '08:00 PM' },
  { value: '20:30', label: '08:30 PM' },
  { value: '21:00', label: '09:00 PM' },
  { value: '21:30', label: '09:30 PM' },
  { value: '22:00', label: '10:00 PM' },
  { value: '22:30', label: '10:30 PM' },
  { value: '23:00', label: '11:00 PM' },
]

// Reusing existing vehicles data source (real production vehicles only)
export const VEHICLE_OPTIONS = [
  { value: '', label: 'Select Vehicle' },
  ...vehicles.filter((v) => !v.isMock).map((v) => ({ value: v.name, label: v.name })),
]

export const PASSENGER_OPTIONS = [
  { value: '1', label: '1 Passenger' },
  { value: '2', label: '2 Passengers' },
  { value: '3', label: '3 Passengers' },
  { value: '4', label: '4 Passengers' },
  { value: '5', label: '5 Passengers' },
  { value: '6', label: '6 Passengers' },
]

export const LUGGAGE_OPTIONS = [
  { value: '1', label: '1 Bag' },
  { value: '2', label: '2 Bags' },
  { value: '3', label: '3 Bags' },
  { value: '4', label: '4 Bags' },
  { value: '5', label: '5+ Bags' },
]

export const DURATION_OPTIONS = [
  { value: '2', label: '2 Hours' },
  { value: '3', label: '3 Hours' },
  { value: '4', label: '4 Hours (Half Day)' },
  { value: '6', label: '6 Hours' },
  { value: '8', label: '8 Hours (Full Day)' },
  { value: '10', label: '10 Hours' },
  { value: '12', label: '12 Hours' },
]

export const SERVICE_AREA_OPTIONS = [
  { value: 'bkk-metro', label: 'Bangkok City & Downtown' },
  { value: 'bkk-perimeter', label: 'Greater Bangkok & Perimeter' },
  { value: 'pattaya-chonburi', label: 'Pattaya / Chonburi Area' },
  { value: 'custom', label: 'Custom / Flexible Itinerary' },
]

export const MAX_OPERATING_MINUTES = 23 * 60 // 11:00 PM = 1380 minutes

// Helper calculation: End Time = Start Time + Duration
export function calculateEndTime(startTime: string, durationHours: number): string {
  const [hStr, mStr] = startTime.split(':')
  const h = parseInt(hStr || '10', 10)
  const m = parseInt(mStr || '00', 10)
  const totalMinutes = h * 60 + m + durationHours * 60
  const endH = Math.floor(totalMinutes / 60) % 24
  const endM = totalMinutes % 60
  const formattedH = endH.toString().padStart(2, '0')
  const formattedM = endM.toString().padStart(2, '0')
  return `${formattedH}:${formattedM}`
}

export function formatTimeLabel(timeStr: string): string {
  const [hStr, mStr] = timeStr.split(':')
  const h = parseInt(hStr || '10', 10)
  const m = parseInt(mStr || '00', 10)
  const period = h >= 12 ? 'PM' : 'AM'
  const displayH = h % 12 === 0 ? 12 : h % 12
  const formattedDisplayH = displayH.toString().padStart(2, '0')
  const formattedDisplayM = m.toString().padStart(2, '0')
  return `${formattedDisplayH}:${formattedDisplayM} ${period}`
}

export function isTimeAfter(startTime: string, endTime: string): boolean {
  const [sh, sm] = startTime.split(':').map((v) => parseInt(v, 10))
  const [eh, em] = endTime.split(':').map((v) => parseInt(v, 10))
  return eh * 60 + em > sh * 60 + sm
}

export function exceedsMaxOperatingTime(startTime: string, durationHours: number): boolean {
  const [hStr, mStr] = startTime.split(':')
  const h = parseInt(hStr || '10', 10)
  const m = parseInt(mStr || '00', 10)
  const totalMinutes = h * 60 + m + durationHours * 60
  return totalMinutes > MAX_OPERATING_MINUTES
}
