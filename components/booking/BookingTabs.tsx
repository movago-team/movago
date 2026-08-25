'use client'

import { Icon } from '@/components/ui'
import { ServiceTabType } from './constants'

export interface BookingTabsProps {
  activeTab: ServiceTabType
  onTabChange: (tab: ServiceTabType) => void
}

export default function BookingTabs({
  activeTab,
  onTabChange,
}: BookingTabsProps) {
  return (
    <div className="booking-tabs" role="tablist">
      <button
        type="button"
        className={activeTab === 'airport' ? 'active' : ''}
        onClick={() => onTabChange('airport')}
        role="tab"
        aria-selected={activeTab === 'airport'}
      >
        <Icon name="plane" />
        <span>Airport Transfer</span>
      </button>

      <button
        type="button"
        className={activeTab === 'hourly' ? 'active' : ''}
        onClick={() => onTabChange('hourly')}
        role="tab"
        aria-selected={activeTab === 'hourly'}
      >
        <Icon name="clock" />
        <span>Hourly Service</span>
      </button>

      <button
        type="button"
        className={activeTab === 'intercity' ? 'active' : ''}
        onClick={() => onTabChange('intercity')}
        role="tab"
        aria-selected={activeTab === 'intercity'}
      >
        <Icon name="car" />
        <span>Intercity Transfer</span>
      </button>
    </div>
  )
}
