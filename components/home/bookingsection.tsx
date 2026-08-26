'use client'

import { useState } from 'react'
import {
  AirportTransferForm,
  BookingTabs,
  HourlyServiceForm,
  IntercityTransferForm,
  ServiceTabType,
} from '@/components/booking'
import { bookingCard, bookingWrap, searchMessage } from '@/components/booking/classNames'

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState<ServiceTabType>('airport')
  const [message, setMessage] = useState<string>('')

  const handleSearch = (summary: string) => {
    setMessage('Searching available premium vehicles for your trip…')
    window.setTimeout(() => {
      setMessage(summary)
    }, 600)
  }

  return (
    <section className={bookingWrap} id="booking">
      <div className={bookingCard}>
        <BookingTabs
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab)
            setMessage('')
          }}
        />

        {activeTab === 'airport' && (
          <AirportTransferForm onSearch={handleSearch} />
        )}

        {activeTab === 'hourly' && (
          <HourlyServiceForm onSearch={handleSearch} />
        )}

        {activeTab === 'intercity' && (
          <IntercityTransferForm onSearch={handleSearch} />
        )}

        {message && <div className={searchMessage}>{message}</div>}
      </div>
    </section>
  )
}
