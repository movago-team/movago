/**
 * MOVAGO brand tokens — single source of truth for app/runtime colors.
 * Keep hex values in sync with `tailwind.config.js` (PostCSS loads CJS only).
 */
export const colors = {
  bg: '#000000',
  bgDark: '#070909',
  surface: '#141414',
  surfaceAlt: '#1A1A1A',
  gold: '#C5A073',
  goldHover: '#B08D60',
  goldSoft: '#F1CC83',
  /** Brighter gold for stats / emphasis (legacy --gold-2) */
  goldBright: '#E3AD4E',
  /** Warm accent used on light-section eyebrows / signatures */
  champagne: '#A37C44',
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  onGold: '#000000',
  lightSection: '#F3F3F3',
  btnSecondary: '#1F2222',
  btnSecondaryHover: '#282B2B',
} as const

export type BrandColor = keyof typeof colors
