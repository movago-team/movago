export type VehicleCategory = 'all' | 'mpv' | 'suv' | 'executive'

export interface VehicleCategoryOption {
  id: VehicleCategory
  label: string
  icon?: string
}

export interface VehicleFeature {
  label: string
  icon: string
}

export interface Vehicle {
  id: string
  name: string
  subtitle: string
  badge: string
  category: VehicleCategory
  categoryLabel: string
  brand?: string
  brandLogo?: string
  image: string
  imageScale?: number
  seats: number
  luggage: number
  features: VehicleFeature[]
  description: string
  priceFrom: string
  currency: string
  bookHref: string
  // Legacy / cross-compatibility fields
  type?: string
  tier?: string
  copy?: string
  price?: string
  isMock?: boolean
}

export interface VehicleAmenity {
  id: string
  title: string
  icon: string
  line1?: string
  line2?: string
}

export interface HeroHighlight {
  id: string
  label: string
  icon: string
}

export interface CtaBenefit {
  id: string
  text: string
}
