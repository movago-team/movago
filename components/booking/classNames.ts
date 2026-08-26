/** Shared Tailwind class strings for booking search UI */
import { cn } from '@/utils/cn'
import { bgGold, textGold } from '@/utils/ui/colors'
import { fieldClassName } from '@/utils/ui/input'

export const bookingWrap =
  'page-width relative z-[5] mt-3.5 max-[600px]:mx-0 max-[600px]:mt-0 max-[600px]:max-w-none'

export const bookingCard =
  'rounded-[11px] border border-white/[0.18] bg-[linear-gradient(100deg,#0b0d0d_0%,#111313_62%,#29251f_100%)] px-6 pt-4 pb-6 text-white shadow-[0_18px_30px_rgba(0,0,0,0.26)] max-[600px]:rounded-none max-[600px]:border-x-0 max-[600px]:border-y max-[600px]:border-white/12 max-[600px]:bg-[linear-gradient(180deg,#090b0b_0%,#121414_100%)] max-[600px]:px-[var(--page-gutter)] max-[600px]:pt-4 max-[600px]:pb-5 max-[600px]:shadow-none'

export const bookingTabs =
  'grid min-h-[35px] grid-cols-3 border-b border-white/[0.13] max-[600px]:min-h-0'

export const bookingTab = cn(
  'relative flex h-[35px] items-center justify-start gap-[7px] border-0 bg-transparent px-2 text-left text-[13.5px] font-medium text-[#f6f6f3] [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:shrink-0 max-[900px]:h-9 max-[900px]:min-h-9 max-[900px]:text-[13px] max-[600px]:h-auto max-[600px]:min-h-11 max-[600px]:justify-center max-[600px]:gap-1.5 max-[600px]:whitespace-normal max-[600px]:px-[3px] max-[600px]:py-1.5 max-[600px]:text-[clamp(12px,3.2vw,13px)] max-[600px]:leading-tight',
  '[&_svg]:text-gold',
)

export const bookingTabActive = 'text-white'

export const bookingTabIndicator = cn(
  'pointer-events-none absolute bottom-[-1px] left-0 z-[1] h-[2px] w-[55%] max-[600px]:w-full',
  bgGold,
)

/** Form shell — tighten gap on shared `.movago-field` controls from utils/styles. */
export const bookingForm = cn(
  'flex flex-col gap-5 pt-5',
  `[&_.${fieldClassName}]:gap-[5px]`,
)

export const bookingRow4 =
  'grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-2 min-[901px]:grid-cols-4'

export const bookingRow3 =
  'grid grid-cols-1 items-end gap-3 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 [&>:last-child:not(.booking-submit)]:min-[601px]:max-[900px]:col-span-2'

export const bookingSubmit =
  'booking-submit flex w-full items-end min-[601px]:max-[900px]:col-span-2'

export const searchBtn =
  '!h-[34px] !min-h-[34px] !max-h-[34px] w-full !px-4 !py-0 !text-[13.5px] !leading-[34px] !font-semibold max-[600px]:!h-11 max-[600px]:!min-h-11 max-[600px]:!max-h-11 max-[600px]:!text-[14.5px] max-[600px]:!leading-11'

export const searchMessage = cn(
  'mt-3 rounded-md border border-gold/30 bg-gold/12 px-3.5 py-2.5 text-base leading-snug',
  textGold,
)

export const roundtripPanel =
  'rounded-lg border border-dashed border-gold/35 bg-black/20 px-3.5 py-3'

export const roundtripTitle = cn(
  'mb-2.5 flex items-center gap-[7px] text-[13px] font-semibold [&_svg]:h-[15px] [&_svg]:w-[15px]',
  textGold,
  '[&_svg]:text-gold',
)
