export interface SupportChannel {
  id: string
  title: string
  value: string
  sub: string
  href: string
  icon: string
  iconBg: string
  iconColor: string
}

export interface SupportHeroPillar {
  id: string
  title: string
  desc: string
  icon: string
}

export interface QuickBookingSolution {
  id: string
  title: string
  desc: string
  linkText: string
  href: string
  icon: string
}

export interface SupportFaqItem {
  id: string
  question: string
  answer: string
}

export interface TrustBadge {
  id: string
  label: string
  icon: string
}

export interface ContactFormState {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}
