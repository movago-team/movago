import { cn } from '@/utils/cn'

/**
 * Shared form-control class tokens — map to `styles/form-controls.css`.
 * Use these (or the builders below) instead of hardcoding class strings in UI.
 */

export const fieldClassName = 'movago-field'
export const labelClassName = 'movago-label'
export const inputWrapClassName = 'movago-input-wrap'
export const inputIconClassName = 'movago-input-icon'
export const inputControlClassName = 'movago-input'
export const inputErrorClassName = 'movago-input-error'
export const fieldErrorClassName = 'movago-field-error'
export const fieldHelperClassName = 'movago-field-helper'

export type FieldClassOptions = {
  className?: string
}

export type InputWrapClassOptions = {
  hasIcon?: boolean
  className?: string
}

export type InputClassOptions = {
  error?: boolean
  className?: string
}

/** Outer field shell (label + control + error/helper). */
export function fieldClass({ className = '' }: FieldClassOptions = {}): string {
  return cn(fieldClassName, className)
}

/** Label above the control. */
export function labelClass({ className = '' }: FieldClassOptions = {}): string {
  return cn(labelClassName, className)
}

/** Wrapper around the native input (handles icon padding). */
export function inputWrapClass({
  hasIcon = false,
  className = '',
}: InputWrapClassOptions = {}): string {
  return cn(inputWrapClassName, hasIcon && 'has-icon', className)
}

/** Icon slot inside the input wrap. */
export function inputIconClass({ className = '' }: FieldClassOptions = {}): string {
  return cn(inputIconClassName, className)
}

/** Native `<input>` control class string. */
export function inputClass({
  error = false,
  className = '',
}: InputClassOptions = {}): string {
  return cn(inputControlClassName, error && inputErrorClassName, className)
}

/** Inline field error message. */
export function fieldErrorClass({ className = '' }: FieldClassOptions = {}): string {
  return cn(fieldErrorClassName, className)
}

/** Inline helper text (shown when there is no error). */
export function fieldHelperClass({ className = '' }: FieldClassOptions = {}): string {
  return cn(fieldHelperClassName, className)
}

/** Shared error modifier for select / date triggers that reuse input error chrome. */
export function controlErrorClass(error?: boolean): string {
  return error ? inputErrorClassName : ''
}
