'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IntercityTransferForm } from '@/components/booking'
import { searchMessage } from '@/components/booking/classNames'
import Icon from '@/ui/icon'

export default function IntercityBookingWidget() {
  const [message, setMessage] = useState<string>('')

  const handleSearch = (summary: string) => {
    setMessage('Searching available premium vehicles for your trip…')
    window.setTimeout(() => {
      setMessage(summary)
    }, 600)
  }

  const freeCancellationBadge = (
    <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#666860] font-sans">
      <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
        <Icon name="check" size={10} />
      </span>
      <span>Free cancellation up to 24 hours before pickup*</span>
    </div>
  )

  return (
    <div className="page-width relative z-20 -mt-12 sm:-mt-16 lg:-mt-20">
      <div className="rounded-2xl sm:rounded-3xl border border-[#D5CDBD] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
        {/* Mobile cancellation note */}
        <div className="sm:hidden mb-2.5 pb-2.5 border-b border-[#E5DFD5]">
          {freeCancellationBadge}
        </div>

        {/* Reused Shared Intercity Booking Form with 3 Tabs (One Way, Round-Trip, Multi-City) */}
        <IntercityTransferForm
          variant="light"
          tripTypePresentation="tabs"
          headerRightContent={freeCancellationBadge}
          onSearch={handleSearch}
        />

        {/* Search Feedback Message */}
        {message && <div className={searchMessage}>{message}</div>}

        {/* Footer Guarantee & Link */}
        <div className="mt-5 pt-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-[#555850] font-sans">
          <div className="flex items-center gap-2">
            <span className="flex size-4 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Icon name="check" size={10} />
            </span>
            <span>Long distance comfort • Scenic routes • Professional service</span>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 font-medium text-[#555850] hover:text-gold transition-colors no-underline font-sans"
          >
            <span>Modify or manage your booking anytime</span>
            <Icon name="chevron-right" size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
