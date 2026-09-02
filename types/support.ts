export type FAQItem = {
  id: string
  question: string
  answer: string
  category: 'booking' | 'airport' | 'payment' | 'service' | 'account'
}

export type FAQCategory = {
  id: 'all' | 'booking' | 'airport' | 'payment' | 'service' | 'account'
  title: string
  description: string
  icon: string
  count?: number
}

export type PolicySubSection = {
  title?: string
  content: string
}

export type PolicySection = {
  id: string
  number: number
  title: string
  description?: string
  content?: string
  bullets?: {
    term?: string
    text: string
  }[]
  actionLink?: {
    label: string
    href: string
  }
}

export type PrivacyInfoCard = {
  id: string
  title: string
  description: string
  icon: string
}

export type HeroFeature = {
  id: string
  title: string
  desc: string
  icon: string
}
