'use client'

import { useState } from 'react'
import {
  AirportTransferForm,
  BookingTabs,
  HourlyServiceForm,
  IntercityTransferForm,
  ServiceTabType,
} from '@/components/booking'

export interface BookingSectionProps {
  vehicle: string
  onVehicleChange: (vehicle: string) => void
}

export default function BookingSection({
  vehicle,
  onVehicleChange,
}: BookingSectionProps) {
  const [activeTab, setActiveTab] = useState<ServiceTabType>('airport')
  const [message, setMessage] = useState<string>('')

  const handleSearch = (summary: string) => {
    setMessage('Searching available premium vehicles for your trip…')
    window.setTimeout(() => {
      setMessage(summary)
    }, 600)
  }

  return (
    <section className="booking-wrap" id="booking">
      <div className="booking-card">
        {/* Tabs */}
        <BookingTabs
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab)
            setMessage('')
          }}
        />

        {/* Dynamic Service Form */}
        <div className="booking-form-container">
          {activeTab === 'airport' && (
            <AirportTransferForm
              vehicle={vehicle}
              onVehicleChange={onVehicleChange}
              onSearch={handleSearch}
            />
          )}

          {activeTab === 'hourly' && (
            <HourlyServiceForm
              vehicle={vehicle}
              onVehicleChange={onVehicleChange}
              onSearch={handleSearch}
            />
          )}

          {activeTab === 'intercity' && (
            <IntercityTransferForm
              vehicle={vehicle}
              onVehicleChange={onVehicleChange}
              onSearch={handleSearch}
            />
          )}
        </div>

        {/* Search Result */}
        {message && <div className="search-message">{message}</div>}
      </div>
    </section>
  )
}
