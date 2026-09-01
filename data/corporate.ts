import {
  CorporateClient,
  CorporateFeatureCard,
  CorporateHeroBenefit,
  CorporateSolution,
  CorporateStatistic,
} from '@/types/corporate'

export const CORPORATE_HERO_BENEFITS: CorporateHeroBenefit[] = [
  {
    id: 'fleet',
    icon: 'van',
    line1: 'Premium Fleet',
    line2: 'and Chauffeurs',
  },
  {
    id: 'punctuality',
    icon: 'stopwatch',
    line1: 'Punctuality',
    line2: 'You Can Trust',
  },
  {
    id: 'account',
    icon: 'user',
    line1: 'Dedicated Account',
    line2: 'Management',
  },
  {
    id: 'billing',
    icon: 'file-text',
    line1: 'Centralized Billing',
    line2: 'and Reporting',
  },
  {
    id: 'support',
    icon: 'headset',
    line1: '24/7 Corporate',
    line2: 'Support',
  },
]

export const CORPORATE_WHY_CARDS: CorporateFeatureCard[] = [
  {
    id: 'reliable',
    icon: 'shield-check',
    title: 'Professional and Reliable',
    description:
      'Certified chauffeurs, well-maintained vehicles, and strict service standards ensure every ride is safe, comfortable, and reliable.',
  },
  {
    id: 'ontime',
    icon: 'clock',
    title: 'On-Time, Every Time',
    description:
      'Real-time flight tracking and traffic monitoring guarantee punctual pickups and drop-offs for your business.',
  },
  {
    id: 'tailored',
    icon: 'user',
    title: 'Tailored Solutions for Your Business',
    description:
      'Flexible transportation plans designed to fit your organization’s unique needs and policies.',
  },
  {
    id: 'billing',
    icon: 'file-text',
    title: 'Transparent Billing and Reporting',
    description:
      'Centralized invoicing, detailed reporting, and cost control tools for efficient expense management.',
  },
  {
    id: 'support',
    icon: 'headset',
    title: 'Dedicated Support 24/7',
    description:
      'Your dedicated account manager and 24/7 support team are always ready to assist, anytime you need us.',
  },
]

export const CORPORATE_SOLUTIONS_LIST: CorporateSolution[] = [
  { id: 'airport', title: 'Executive Airport Transfers' },
  { id: 'vip', title: 'Client and VIP Transportation' },
  { id: 'roadshows', title: 'Roadshows and Events' },
  { id: 'employee', title: 'Employee Transportation' },
  { id: 'hotel', title: 'Hotel and Meeting Transfers' },
  { id: 'partnerships', title: 'Long-Term Corporate Partnerships' },
]

export const CORPORATE_STATISTICS: CorporateStatistic[] = [
  { id: 'clients', value: '500+', label: 'Corporate Clients' },
  { id: 'rides', value: '50,000+', label: 'Corporate Rides Completed' },
  { id: 'satisfaction', value: '98%', label: 'Client Satisfaction Rate' },
  { id: 'support', value: '24/7', label: 'Support for Your Business' },
]

export const CORPORATE_CLIENTS: CorporateClient[] = [
  { id: 'scg', name: 'SCG' },
  { id: 'bbl', name: 'Bangkok Bank' },
  { id: 'sansiri', name: 'SANSIRI' },
  { id: 'ptt', name: 'ptt' },
  { id: 'thaibev', name: 'ThaiBev' },
  { id: 'aia', name: 'AIA' },
  { id: 'samsung', name: 'SAMSUNG' },
  { id: 'dhl', name: 'DHL' },
]

export const CORPORATE_CONTACT_INFO = {
  phone: '+66 2 026 4699',
  phoneHref: 'tel:+6620264699',
  email: 'corporate@movago.co.th',
  emailHref: 'mailto:corporate@movago.co.th?subject=Corporate%20Mobility%20Inquiry',
  website: 'www.movago.co.th/corporate',
  websiteHref: '/corporate',
}
