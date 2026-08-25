import React, { forwardRef, useId } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  error?: string
  helperText?: string
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      icon,
      error,
      helperText,
      id: customId,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = customId || (label ? generatedId : undefined)

    const inputControl = (
      <div className={`movago-input-wrap ${icon ? 'has-icon' : ''}`}>
        {icon && <span className="movago-input-icon">{icon}</span>}
        <input
          ref={ref}
          id={inputId}
          className={`movago-input ${error ? 'movago-input-error' : ''} ${className}`}
          {...props}
        />
      </div>
    )

    if (!label && !error && !helperText) {
      return inputControl
    }

    return (
      <div className={`movago-field ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className="movago-label">
            {label}
          </label>
        )}
        {inputControl}
        {error && <span className="movago-field-error">{error}</span>}
        {!error && helperText && <span className="movago-field-helper">{helperText}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
