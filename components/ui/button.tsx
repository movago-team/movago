import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'gold-btn movago-btn-primary',
      outline: 'outline-btn movago-btn-outline',
      secondary: 'movago-btn-secondary',
      ghost: 'movago-btn-ghost',
    }

    const sizeClasses = {
      sm: 'movago-btn-sm',
      md: 'movago-btn-md',
      lg: 'movago-btn-lg',
    }

    const classes = [
      'movago-btn',
      variantClasses[variant] || variantClasses.primary,
      sizeClasses[size] || sizeClasses.md,
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
