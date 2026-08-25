'use client'

import React, { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react'

export interface DateInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string
  icon?: React.ReactNode
  error?: string
  helperText?: string
  containerClassName?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      label,
      icon,
      error,
      helperText,
      id: customId,
      className = '',
      containerClassName = '',
      value: controlledValue,
      defaultValue,
      onChange,
      disabled,
      name,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = customId || (label ? generatedId : undefined)
    const hiddenInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => hiddenInputRef.current as HTMLInputElement)

    const initialDateStr =
      controlledValue !== undefined
        ? String(controlledValue)
        : defaultValue !== undefined
          ? String(defaultValue)
          : ''

    const [selectedDate, setSelectedDate] = useState<string>(initialDateStr)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // Calendar view state (year & month)
    const parsedInitialDate = selectedDate ? new Date(selectedDate) : new Date()
    const validInitialDate = !isNaN(parsedInitialDate.getTime()) ? parsedInitialDate : new Date()
    const [viewYear, setViewYear] = useState<number>(validInitialDate.getFullYear())
    const [viewMonth, setViewMonth] = useState<number>(validInitialDate.getMonth())

    // Sync controlled value
    useEffect(() => {
      if (controlledValue !== undefined) {
        setSelectedDate(String(controlledValue))
        const pDate = new Date(String(controlledValue))
        if (!isNaN(pDate.getTime())) {
          setViewYear(pDate.getFullYear())
          setViewMonth(pDate.getMonth())
        }
      }
    }, [controlledValue])

    // Close on click outside or escape key
    useEffect(() => {
      if (!isOpen) return
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false)
        }
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen])

    // Format display string
    const formatDisplay = (dateStr: string) => {
      if (!dateStr) return 'Select date'
      const parts = dateStr.split('-')
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10)
        const m = parseInt(parts[1], 10) - 1
        const d = parseInt(parts[2], 10)
        const dt = new Date(y, m, d)
        if (!isNaN(dt.getTime())) {
          return `${MONTH_NAMES[m].slice(0, 3)} ${d}, ${y}`
        }
      }
      return dateStr
    }

    const prevMonth = () => {
      if (viewMonth === 0) {
        setViewMonth(11)
        setViewYear((y) => y - 1)
      } else {
        setViewMonth((m) => m - 1)
      }
    }

    const nextMonth = () => {
      if (viewMonth === 11) {
        setViewMonth(0)
        setViewYear((y) => y + 1)
      } else {
        setViewMonth((m) => m + 1)
      }
    }

    // Build days grid for viewMonth & viewYear
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate()

    const calendarCells: { day: number; isCurrentMonth: boolean; dateStr: string }[] = []

    // Prev month padding
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i
      const m = viewMonth === 0 ? 12 : viewMonth
      const y = viewMonth === 0 ? viewYear - 1 : viewYear
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      calendarCells.push({ day, isCurrentMonth: false, dateStr })
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      calendarCells.push({ day: d, isCurrentMonth: true, dateStr })
    }

    // Next month padding to fill grid (always 35 or 42 cells)
    const totalCells = Math.ceil(calendarCells.length / 7) * 7
    const remaining = totalCells - calendarCells.length
    for (let d = 1; d <= remaining; d++) {
      const m = viewMonth === 11 ? 1 : viewMonth + 2
      const y = viewMonth === 11 ? viewYear + 1 : viewYear
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      calendarCells.push({ day: d, isCurrentMonth: false, dateStr })
    }

    const handleSelectDay = (dateStr: string) => {
      if (disabled) return
      setSelectedDate(dateStr)
      setIsOpen(false)

      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = dateStr
        const syntheticEvent = {
          target: hiddenInputRef.current,
          currentTarget: hiddenInputRef.current,
          preventDefault: () => {},
          stopPropagation: () => {},
        } as unknown as React.ChangeEvent<HTMLInputElement>
        onChange?.(syntheticEvent)
      }
    }

    const todayStr = new Date().toISOString().split('T')[0]

    const dateControl = (
      <div className="movago-custom-date" ref={containerRef}>
        {/* Hidden input for form sync */}
        <input
          ref={hiddenInputRef}
          id={inputId}
          type="date"
          name={name}
          value={selectedDate}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
          onChange={(e) => {
            setSelectedDate(e.target.value)
            onChange?.(e)
          }}
          {...props}
        />

        {/* Custom trigger */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          className={`movago-date-trigger ${isOpen ? 'is-open' : ''} ${error ? 'movago-input-error' : ''} ${className}`}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span className="movago-date-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          <span className="movago-date-value truncate">{formatDisplay(selectedDate)}</span>
          <span className={`movago-date-arrow ${isOpen ? 'is-open' : ''}`}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {/* Custom Calendar Popup */}
        {isOpen && (
          <div className="movago-calendar-popup" role="dialog" aria-label="Calendar">
            {/* Header */}
            <div className="movago-calendar-header">
              <button type="button" onClick={prevMonth} className="movago-calendar-nav" aria-label="Previous month">
                ‹
              </button>
              <div className="movago-calendar-title">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </div>
              <button type="button" onClick={nextMonth} className="movago-calendar-nav" aria-label="Next month">
                ›
              </button>
            </div>

            {/* Weekdays */}
            <div className="movago-calendar-weekdays">
              {DAYS_OF_WEEK.map((dw) => (
                <div key={dw} className="movago-calendar-weekday">
                  {dw}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="movago-calendar-grid">
              {calendarCells.map((cell, idx) => {
                const isSelected = cell.dateStr === selectedDate
                const isToday = cell.dateStr === todayStr
                return (
                  <button
                    key={`${cell.dateStr}-${idx}`}
                    type="button"
                    onClick={() => handleSelectDay(cell.dateStr)}
                    className={`movago-calendar-day ${isSelected ? 'is-selected' : ''} ${!cell.isCurrentMonth ? 'is-other-month' : ''} ${isToday ? 'is-today' : ''}`}
                  >
                    {cell.day}
                  </button>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="movago-calendar-footer">
              <button
                type="button"
                className="movago-calendar-today-btn"
                onClick={() => handleSelectDay(todayStr)}
              >
                Today
              </button>
            </div>
          </div>
        )}
      </div>
    )

    if (!label && !error && !helperText) {
      return dateControl
    }

    return (
      <div className={`movago-field ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className="movago-label">
            {label}
          </label>
        )}
        {dateControl}
        {error && <span className="movago-field-error">{error}</span>}
        {!error && helperText && <span className="movago-field-helper">{helperText}</span>}
      </div>
    )
  }
)

DateInput.displayName = 'DateInput'
export default DateInput
