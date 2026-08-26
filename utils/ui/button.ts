import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover, ringGold, textOnGold } from '@/utils/ui/colors'

export type ButtonVariant = 'primary' | 'outline' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 border-0 rounded-md text-base font-medium cursor-pointer whitespace-nowrap no-underline transition-[background-color,transform,box-shadow,border-color,color] duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    bgGold,
    textOnGold,
    bgGoldHover,
    'active:translate-y-px focus-visible:outline-none focus-visible:ring-[3px]',
    ringGold,
  ),
  outline: cn(
    'bg-transparent border border-gold/55 text-white',
    'hover:border-gold hover:bg-gold/10 hover:text-gold',
    'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold/20',
  ),
  secondary: cn(
    'bg-btn-secondary text-white border border-white/18',
    'hover:bg-btn-secondary-hover hover:border-gold/50',
  ),
  ghost: cn('bg-transparent text-white', 'hover:text-gold hover:bg-white/[0.06]'),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3.5 text-base rounded',
  md: 'h-[42px] px-5 text-base',
  lg: 'h-12 px-[26px] text-base',
}

export type ButtonClassOptions = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
}

/** Build shared button / CTA class strings from central tokens. */
export function buttonClass({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}: ButtonClassOptions = {}): string {
  return cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)
}

/** Presets for common CTAs (Links + Buttons). */
export const btnPrimary = buttonClass({ variant: 'primary' })
export const btnOutline = buttonClass({ variant: 'outline' })
export const btnSecondary = buttonClass({ variant: 'secondary' })
export const btnGhost = buttonClass({ variant: 'ghost' })
export const btnPrimarySm = buttonClass({ variant: 'primary', size: 'sm' })
export const btnPrimaryLg = buttonClass({ variant: 'primary', size: 'lg' })

/** Nav “Book Now” — same primary tokens, nav-specific width. */
export const btnNavBook = buttonClass({
  variant: 'primary',
  className: 'min-w-[110px] h-[42px] px-[18px]',
})

/** Home corporate section CTA — primary, section-sized. */
export const btnCorporate = buttonClass({
  variant: 'primary',
  size: 'md',
  className: 'min-w-[120px] h-[42px] px-[18px]',
})
