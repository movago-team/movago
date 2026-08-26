'use client'

import React, { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react'
import {
  controlErrorClass,
  fieldClass,
  fieldErrorClass,
  fieldHelperClass,
  labelClass,
} from '@/utils/ui/input'
import { cn } from '@/utils/cn'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string
  icon?: React.ReactNode
  error?: string
  helperText?: string
  options?: SelectOption[]
  containerClassName?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  children?: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      icon,
      error,
      helperText,
      options: rawOptions,
      id: customId,
      className = '',
      containerClassName = '',
      value: controlledValue,
      defaultValue,
      onChange,
      disabled,
      name,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const selectId = customId || (label ? generatedId : undefined)
    const hiddenSelectRef = useRef<HTMLSelectElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => hiddenSelectRef.current as HTMLSelectElement)

    // Extract options from props.options or props.children
    const options: SelectOption[] = React.useMemo(() => {
      if (rawOptions && rawOptions.length > 0) {
        return rawOptions
      }
      const extracted: SelectOption[] = []
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === 'option') {
          const childProps = child.props as { value?: string | number; children?: React.ReactNode; disabled?: boolean }
          const val = childProps.value !== undefined ? String(childProps.value) : ''
          const lbl = childProps.children ? String(childProps.children) : val
          extracted.push({
            value: val,
            label: lbl,
            disabled: childProps.disabled,
          })
        }
      })
      return extracted
    }, [rawOptions, children])

    const initialValue =
      controlledValue !== undefined
        ? String(controlledValue)
        : defaultValue !== undefined
          ? String(defaultValue)
          : (options[0]?.value ?? '')

    const [selectedValue, setSelectedValue] = useState<string>(initialValue)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // Sync controlled value changes
    useEffect(() => {
      if (controlledValue !== undefined) {
        setSelectedValue(String(controlledValue))
      }
    }, [controlledValue])

    // Close on click outside or escape key
    useEffect(() => {
      if (!isOpen) return
      const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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

    const currentOption = options.find((opt) => opt.value === selectedValue) || options[0]
    const displayLabel = currentOption ? currentOption.label : selectedValue

    const handleSelectOption = (opt: SelectOption) => {
      if (opt.disabled || disabled) return
      setSelectedValue(opt.value)
      setIsOpen(false)

      if (hiddenSelectRef.current) {
        hiddenSelectRef.current.value = opt.value
        const syntheticEvent = {
          target: hiddenSelectRef.current,
          currentTarget: hiddenSelectRef.current,
          preventDefault: () => {},
          stopPropagation: () => {},
        } as unknown as React.ChangeEvent<HTMLSelectElement>
        onChange?.(syntheticEvent)
      }
    }

    const selectControl = (
      <div className="movago-custom-select" ref={dropdownRef}>
        {/* Hidden native select for form sync & accessibility */}
        <select
          ref={hiddenSelectRef}
          id={selectId}
          name={name}
          value={selectedValue}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
          onChange={(e) => {
            setSelectedValue(e.target.value)
            onChange?.(e)
          }}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom trigger button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          className={cn(
            'movago-select-trigger',
            icon ? 'has-icon' : false,
            isOpen && 'is-open',
            controlErrorClass(Boolean(error)),
            className,
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {icon && <span className="movago-select-icon">{icon}</span>}
          <span className="movago-select-value truncate">{displayLabel}</span>
          <span className={`movago-select-arrow ${isOpen ? 'is-open' : ''}`}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {/* Custom Dropdown Menu */}
        {isOpen && (
          <div className="movago-dropdown-menu" role="listbox">
            {options.map((opt) => {
              const isSelected = opt.value === selectedValue
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`movago-dropdown-item ${isSelected ? 'is-selected' : ''} ${opt.disabled ? 'is-disabled' : ''}`}
                  onClick={() => handleSelectOption(opt)}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <span className="movago-dropdown-check">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )

    if (!label && !error && !helperText) {
      return selectControl
    }

    return (
      <div className={fieldClass({ className: containerClassName })}>
        {label && (
          <label htmlFor={selectId} className={labelClass()}>
            {label}
          </label>
        )}
        {selectControl}
        {error && <span className={fieldErrorClass()}>{error}</span>}
        {!error && helperText && <span className={fieldHelperClass()}>{helperText}</span>}
      </div>
    )
  }
)

Select.displayName = 'Select'
export default Select
