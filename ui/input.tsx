import React, { forwardRef, useId } from 'react'
import {
  fieldClass,
  fieldErrorClass,
  fieldHelperClass,
  inputClass,
  inputIconClass,
  inputWrapClass,
  labelClass,
} from '@/utils/ui/input'

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
    ref,
  ) => {
    const generatedId = useId()
    const inputId = customId || (label ? generatedId : undefined)
    const hasError = Boolean(error)

    const inputControl = (
      <div className={inputWrapClass({ hasIcon: Boolean(icon) })}>
        {icon && <span className={inputIconClass()}>{icon}</span>}
        <input
          ref={ref}
          id={inputId}
          className={inputClass({ error: hasError, className })}
          aria-invalid={hasError || undefined}
          aria-describedby={
            hasError
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          {...props}
        />
      </div>
    )

    if (!label && !error && !helperText) {
      return inputControl
    }

    return (
      <div className={fieldClass({ className: containerClassName })}>
        {label && (
          <label htmlFor={inputId} className={labelClass()}>
            {label}
          </label>
        )}
        {inputControl}
        {error && (
          <span id={inputId ? `${inputId}-error` : undefined} className={fieldErrorClass()}>
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={inputId ? `${inputId}-helper` : undefined} className={fieldHelperClass()}>
            {helperText}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
