import {
  ServiceCTA,
  ServiceFeature,
  ServiceHero,
  ServiceHighlight,
  ServiceInclusion,
  ServiceOccasion,
  ServicePackage,
  ServiceRoute,
} from '@/types/services'

// ============================================================================
// 1. AIRPORT TRANSFER DATA
// ============================================================================

export const AIRPORT_HERO_DATA: ServiceHero = {
  eyebrow: 'AIRPORT TRANSFER',
  title: 'Premium Airport\nTransfer You Can Trust',
  description:
    'Enjoy a smooth, comfortable, and reliable airport transfer experience with professional chauffeurs and premium vehicles.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'Airport Transfer' },
  ],
  bgImage: '/images/services/airport-hero.png',
  features: [
    {
      id: 'flight-monitoring',
      icon: 'plane',
      title: 'Flight Monitoring',
      desc: 'We track your flight',
    },
    {
      id: 'meet-greet',
      icon: 'users',
      title: 'Meet & Greet',
      desc: 'Personalized service',
    },
    {
      id: 'support',
      icon: 'clock',
      title: '24/7 Support',
      desc: 'Always here for you',
    },
    {
      id: 'fixed-price',
      icon: 'shield-check',
      title: 'Fixed Price',
      desc: 'No hidden charges',
    },
  ],
}

export const AIRPORT_STEPS: ServiceHighlight[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    icon: 'calendar',
    title: 'Book Your Transfer',
    desc: 'Select your pickup, destination, date, time, and preferred vehicle.',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    icon: 'plane',
    title: 'We Monitor Your Flight',
    desc: 'We track your flight in real-time and adjust your pickup accordingly.',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    icon: 'car',
    title: 'Enjoy Your Ride',
    desc: 'Your chauffeur will be waiting for you at the airport. Relax and enjoy the ride.',
  },
]

export const AIRPORT_BENEFITS: ServiceFeature[] = [
  {
    id: 'chauffeurs',
    icon: 'user-check',
    title: 'Professional Chauffeurs',
    desc: 'Experienced, courteous, and well-trained.',
  },
  {
    id: 'vehicles',
    icon: 'car',
    title: 'Premium Vehicles',
    desc: 'Luxury, comfortable, and meticulously maintained.',
  },
  {
    id: 'flight-tracking',
    icon: 'plane',
    title: 'Flight Monitoring',
    desc: 'We track delays to ensure a smooth pickup.',
  },
  {
    id: 'fixed-price',
    icon: 'receipt',
    title: 'Fixed & Transparent Price',
    desc: 'You know the price before you book.',
  },
  {
    id: 'support-247',
    icon: 'headphones',
    title: '24/7 Customer Support',
    desc: "We're here anytime you need us.",
  },
  {
    id: 'safety',
    icon: 'shield',
    title: 'Safety First',
    desc: 'Your safety is our top priority.',
  },
]

export const AIRPORT_ROUTES: ServiceRoute[] = [
  {
    id: 'bkk-bangkok-city',
    from: 'BKK',
    fromSub: 'Suvarnabhumi Airport',
    to: 'Bangkok City',
    priceFrom: '1,199',
    currency: 'THB',
    airportCode: 'BKK',
  },
  {
    id: 'dmk-bangkok-city',
    from: 'DMK',
    fromSub: 'Don Mueang Airport',
    to: 'Bangkok City',
    priceFrom: '1,099',
    currency: 'THB',
    airportCode: 'DMK',
  },
  {
    id: 'bkk-pattaya',
    from: 'BKK',
    fromSub: 'Suvarnabhumi Airport',
    to: 'Pattaya',
    priceFrom: '2,599',
    currency: 'THB',
    airportCode: 'BKK',
  },
  {
    id: 'dmk-hua-hin',
    from: 'DMK',
    fromSub: 'Don Mueang Airport',
    to: 'Hua Hin',
    priceFrom: '2,799',
    currency: 'THB',
    airportCode: 'DMK',
  },
  {
    id: 'bkk-khao-yai',
    from: 'BKK',
    fromSub: 'Suvarnabhumi Airport',
    to: 'Khao Yai',
    priceFrom: '3,499',
    currency: 'THB',
    airportCode: 'BKK',
  },
  {
    id: 'dmk-ayutthaya',
    from: 'DMK',
    fromSub: 'Don Mueang Airport',
    to: 'Ayutthaya',
    priceFrom: '1,999',
    currency: 'THB',
    airportCode: 'DMK',
  },
]

export const AIRPORT_CTA_DATA: ServiceCTA = {
  title: 'Ready to Start Your Journey?',
  description: 'Book your premium airport transfer with MOVAGO and travel with confidence.',
  buttonText: 'Book Your Transfer Now',
  buttonHref: '/book?service=airport',
  image: '/images/vehicles/vehicle-cta-chauffeur.jpg',
  checkmarks: [
    'Free cancellation up to 24 hours*',
    'Flight monitoring included',
    'No hidden charges',
    '24/7 customer support',
  ],
}

// ============================================================================
// 2. HOURLY CHAUFFEUR SERVICE DATA
// ============================================================================

export const HOURLY_HERO_DATA: ServiceHero = {
  eyebrow: 'HOURLY SERVICE',
  title: 'Your Time. Your Plan.\nYour Chauffeur.',
  description:
    'Enjoy the freedom of movement with a professional chauffeur by the hour. Perfect for business, meetings, events, shopping, and city tours.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'Hourly Service' },
  ],
  bgImage: '/images/services/hourly-hero.png',
  features: [
    {
      id: 'pro-chauffeur',
      icon: 'users',
      title: 'Professional Chauffeur',
      desc: 'Experienced & discreet',
    },
    {
      id: 'prem-vehicles',
      icon: 'car',
      title: 'Premium Vehicles',
      desc: 'Luxury & well-maintained',
    },
    {
      id: 'flex-hours',
      icon: 'clock',
      title: 'Flexible Hours',
      desc: 'Minimum 2 hours',
    },
    {
      id: 'trans-pricing',
      icon: 'shield-check',
      title: 'Transparent Pricing',
      desc: 'No hidden fees',
    },
  ],
}

export const HOURLY_BENEFITS: ServiceFeature[] = [
  {
    id: 'flexibility',
    icon: 'calendar',
    title: 'Maximum Flexibility',
    desc: 'Go wherever you need, whenever you need. Extend your time anytime.',
  },
  {
    id: 'chauffeur',
    icon: 'user-check',
    title: 'Professional Chauffeur',
    desc: 'Experienced, courteous and dedicated to your comfort and privacy.',
  },
  {
    id: 'vehicles',
    icon: 'car',
    title: 'Premium Vehicles',
    desc: 'Travel in luxury with our high-end electric vehicles meticulously maintained.',
  },
  {
    id: 'pricing',
    icon: 'receipt',
    title: 'Transparent Pricing',
    desc: 'Clear hourly rates with no hidden charges. What you see is what you pay.',
  },
  {
    id: 'support',
    icon: 'headphones',
    title: '24/7 Support',
    desc: "We're here to assist you before, during, and after your journey.",
  },
  {
    id: 'safety',
    icon: 'shield',
    title: 'Safety First',
    desc: 'Your safety is our top priority. Insured and high safety standards.',
  },
]

export const HOURLY_OCCASIONS: ServiceOccasion[] = [
  {
    id: 'business-meetings',
    title: 'Business Meetings',
    description: 'Travel between meetings with efficiency and style.',
    image: '/images/services/occasions/business.jpg',
  },
  {
    id: 'events-conferences',
    title: 'Events & Conferences',
    description: 'Reliable transportation for events and conferences.',
    image: '/images/services/occasions/events.jpg',
  },
  {
    id: 'shopping-trips',
    title: 'Shopping Trips',
    description: 'Shop comfortably and travel with ease.',
    image: '/images/services/occasions/shopping.jpg',
  },
  {
    id: 'private-tours',
    title: 'Private Tours',
    description: 'Explore the city at your own pace.',
    image: '/images/services/occasions/tours.jpg',
  },
  {
    id: 'airport-layovers',
    title: 'Airport Layovers',
    description: 'Make the most of your layover time.',
    image: '/images/services/occasions/layover.jpg',
  },
  {
    id: 'special-occasions',
    title: 'Special Occasions',
    description: 'Weddings, parties, and other special moments.',
    image: '/images/services/occasions/special.jpg',
  },
]

export const HOURLY_PACKAGES: ServicePackage[] = [
  {
    id: 'min-2-hours',
    badge: 'HOURLY SERVICE',
    hours: 'Minimum 2 Hours',
    title: 'Minimum 2 Hours',
    subtitle: 'Perfect for short trips, meetings, and appointments.',
    pricePerHour: '1,690',
    currency: 'THB / hour',
    features: ['Minimum 2 hours booking'],
    href: '/book?service=hourly&hours=2',
  },
  {
    id: 'half-day',
    badge: 'HALF DAY PACKAGE',
    hours: '5 Hours',
    title: '5 Hours',
    subtitle: 'Ideal for multiple stops or half-day business schedule.',
    pricePerHour: '1,590',
    currency: 'THB / hour',
    features: ['Save more with 5-hour package'],
    href: '/book?service=hourly&hours=5',
  },
  {
    id: 'full-day',
    badge: 'BEST VALUE',
    hours: '10 Hours',
    title: '10 Hours',
    subtitle: 'Best value for full-day usage with maximum flexibility.',
    pricePerHour: '1,390',
    currency: 'THB / hour',
    features: ['Save more with 10-hour package'],
    href: '/book?service=hourly&hours=10',
    isPopular: true,
  },
  {
    id: 'custom-package',
    hours: 'Custom',
    title: 'Need a custom plan?',
    subtitle: 'Contact our team for a personalized quotation that fits your schedule.',
    pricePerHour: '',
    currency: '',
    href: '/contact',
    isCustom: true,
  },
]

export const HOURLY_CTA_DATA: ServiceCTA = {
  title: 'Ready to Make the Most of Your Time?',
  description:
    'Book your hourly service with MOVAGO and enjoy the freedom to go wherever you need, in style.',
  buttonText: 'Book Your Hourly Service Now',
  buttonHref: '/book?service=hourly',
  image: '/images/services/service-cta.jpg',
  checkmarks: [
    'Free cancellation up to 24 hours*',
    'No hidden charges',
    'Professional chauffeur',
    '24/7 customer support',
  ],
}

// ============================================================================
// 3. INTERCITY TRANSFER DATA
// ============================================================================

export const INTERCITY_HERO_DATA: ServiceHero = {
  eyebrow: 'INTERCITY TRANSFER',
  title: 'Premium Intercity Transfer Across Thailand',
  description:
    'Travel in comfort, arrive in style. Enjoy a private and reliable journey to your favorite destinations with MOVAGO.',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'Intercity Transfer' },
  ],
  bgImage: '/images/services/intercity-hero.png',
  features: [
    {
      id: 'door-to-door',
      icon: 'pin',
      title: 'Door-to-Door',
      desc: 'Convenient & hassle-free',
    },
    {
      id: 'pro-chauffeur',
      icon: 'users',
      title: 'Professional Chauffeur',
      desc: 'Experienced & courteous',
    },
    {
      id: 'prem-vehicles',
      icon: 'car',
      title: 'Premium Vehicles',
      desc: 'Luxury & well-maintained',
    },
    {
      id: 'fixed-price',
      icon: 'shield-check',
      title: 'Fixed Price',
      desc: 'No hidden charges',
    },
  ],
}

export const INTERCITY_ROUTES: ServiceRoute[] = [
  {
    id: 'bkk-pattaya',
    from: 'Bangkok (BKK)',
    to: 'Pattaya',
    duration: '~ 2.0 - 2.5 HRS',
    priceFrom: '2,590',
    currency: 'THB',
    image: '/images/destinations/pattaya.jpg',
  },
  {
    id: 'bkk-hua-hin',
    from: 'Bangkok (BKK)',
    to: 'Hua Hin',
    duration: '~ 2.5 - 3.0 HRS',
    priceFrom: '2,790',
    currency: 'THB',
    image: '/images/destinations/hua-hin.jpg',
  },
  {
    id: 'bkk-khao-yai',
    from: 'Bangkok (BKK)',
    to: 'Khao Yai',
    duration: '~ 3.0 - 3.5 HRS',
    priceFrom: '3,490',
    currency: 'THB',
    image: '/images/destinations/khao-yai.jpg',
  },
  {
    id: 'bkk-ayutthaya',
    from: 'Bangkok (BKK)',
    to: 'Ayutthaya',
    duration: '~ 1.5 - 2.0 HRS',
    priceFrom: '1,990',
    currency: 'THB',
    image: '/images/destinations/ayutthaya.jpg',
  },
  {
    id: 'bkk-rayong',
    from: 'Bangkok (BKK)',
    to: 'Rayong',
    duration: '~ 2.5 - 3.0 HRS',
    priceFrom: '2,790',
    currency: 'THB',
    image: '/images/destinations/pattaya.jpg', // fallback or rayong image
  },
  {
    id: 'bkk-phuket',
    from: 'Bangkok (BKK)',
    to: 'Phuket',
    duration: '~ 11.0 - 12.0 HRS',
    priceFrom: '9,990',
    currency: 'THB',
    image: '/images/destinations/phuket.jpg',
  },
]

export const INTERCITY_BENEFITS: ServiceFeature[] = [
  {
    id: 'long-journey-comfort',
    icon: 'car',
    title: 'Comfort for Long Journeys',
    desc: 'Spacious seating and smooth rides for maximum comfort.',
  },
  {
    id: 'pro-every-step',
    icon: 'user-check',
    title: 'Professional Every Step',
    desc: 'Skilled chauffeurs who know every route well.',
  },
  {
    id: 'rest-relax',
    icon: 'sparkles',
    title: 'Rest & Relax on the Way',
    desc: "Enjoy your time, we'll handle the driving.",
  },
  {
    id: 'safe-secure',
    icon: 'shield',
    title: 'Safe & Secure Always',
    desc: 'Your safety is our top priority on every journey.',
  },
  {
    id: 'rely-support',
    icon: 'headphones',
    title: '24/7 Support You Can Rely On',
    desc: "We're here to assist you anytime, anywhere you need.",
  },
]

export const INTERCITY_INCLUSIONS: ServiceInclusion[] = [
  { id: 'inc-1', icon: 'car', title: 'Private Vehicle' },
  { id: 'inc-2', icon: 'user-check', title: 'Professional Chauffeur' },
  { id: 'inc-3', icon: 'receipt', title: 'Fuel & Tolls' },
  { id: 'inc-4', icon: 'shield-check', title: 'Highway Fees' },
  { id: 'inc-5', icon: 'pin', title: 'Parking Fees' },
  { id: 'inc-6', icon: 'sparkles', title: 'Bottled Water' },
  { id: 'inc-7', icon: 'plane', title: 'Flight Monitoring*' },
]

export const INTERCITY_CTA_DATA: ServiceCTA = {
  title: 'Ready for Your Next Journey?',
  description:
    'Book your intercity transfer with MOVAGO and experience premium travel across Thailand.',
  buttonText: 'Book Your Intercity Transfer',
  buttonHref: '/book?service=intercity',
  image: '/images/services/service-cta.jpg',
  checkmarks: [
    'Fixed price, no hidden charges',
    'Free cancellation up to 24 hours*',
    'Professional chauffeur',
    '24/7 customer support',
  ],
}
