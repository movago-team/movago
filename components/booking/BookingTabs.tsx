'use client'

import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { ServiceTabType } from './constants'
import {
  bookingTab,
  bookingTabActive,
  bookingTabIndicator,
  bookingTabs,
} from './classNames'

export interface BookingTabsProps {
  activeTab: ServiceTabType
  onTabChange: (tab: ServiceTabType) => void
}

const TABS: { id: ServiceTabType; label: string; icon: 'plane' | 'clock' | 'car' }[] = [
  { id: 'airport', label: 'Airport Transfer', icon: 'plane' },
  { id: 'hourly', label: 'Hourly Service', icon: 'clock' },
  { id: 'intercity', label: 'Intercity Transfer', icon: 'car' },
]

export default function BookingTabs({
  activeTab,
  onTabChange,
}: BookingTabsProps) {
  return (
    <div className={bookingTabs} role="tablist">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            className={cn(bookingTab, isActive && bookingTabActive)}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={isActive}
          >
            <Icon name={tab.icon} size={22} />
            <span>{tab.label}</span>
            {isActive ? <span aria-hidden className={bookingTabIndicator} /> : null}
          </button>
        )
      })}
    </div>
  )
}
