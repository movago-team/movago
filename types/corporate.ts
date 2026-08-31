export interface CorporateHeroBenefit {
  id: string
  icon: string
  line1: string
  line2: string
}

export interface CorporateWhyCard {
  id: string
  icon: string
  title: string
  description: string
}

export type CorporateFeatureCard = CorporateWhyCard

export interface CorporateSolution {
  id: string
  title: string
}

export interface CorporateStatistic {
  id: string
  value: string
  label: string
}

export interface CorporateClient {
  id: string
  name: string
  category?: string
}
