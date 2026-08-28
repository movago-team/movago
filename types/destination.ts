export type DestinationCategory = 'all' | 'city' | 'beach' | 'nature'

export interface DestinationCategoryOption {
  id: DestinationCategory
  label: string
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
  priceZeekr7X: string
  priceZeekr009: string
  hasAsterisk?: boolean
}
