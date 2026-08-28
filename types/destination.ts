export type DestinationCategory = 'all' | 'city' | 'beach' | 'nature'

export interface DestinationCategoryOption {
  id: DestinationCategory
  label: string
  icon?: string
}

export interface DestinationItem {
  id: string
  name: string
  subtitle: string
  category: DestinationCategory
  categoryLabel: string
  image: string
  duration: string
  startingPoint: string
  startingPrice: string
  originDetail?: string
  durationDetail?: string
  vehiclesDetail?: string
  isPopular?: boolean
  priceZeekr7X?: string
  priceZeekr009?: string
  hasAsterisk?: boolean
}
