import { HeroFeature } from './support'

export type { HeroFeature }

export type ServiceHero = {
  eyebrow: string
  title: string
  description: string
  features: HeroFeature[]
  breadcrumb: {
    label: string
    href?: string
  }[]
  bgImage?: string
}

export type ServiceFeature = {
  id: string
  icon: string
  title: string
  desc: string
}

export type ServiceHighlight = {
  id: string
  stepNumber: number
  icon: string
  title: string
  desc: string
}

export type ServiceRoute = {
  id: string
  from: string
  fromSub?: string
  to: string
  toSub?: string
  duration?: string
  distance?: string
  priceFrom: string
  currency: string
  image?: string
  airportCode?: 'BKK' | 'DMK'
}

export type ServicePackage = {
  id: string
  badge?: string
  hours: string
  title: string
  subtitle: string
  pricePerHour: string
  currency: string
  features?: string[]
  href?: string
  isPopular?: boolean
  isCustom?: boolean
}

export type ServiceOccasion = {
  id: string
  title: string
  description: string
  image: string
}

export type ServiceInclusion = {
  id: string
  icon: string
  title: string
}

export type ServiceCTA = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  checkmarks: string[]
  image?: string
}
