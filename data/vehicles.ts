import {
  CtaBenefit,
  HeroHighlight,
  Vehicle,
  VehicleAmenity,
  VehicleCategoryOption,
} from '@/types/vehicle'

export const VEHICLE_CATEGORIES: VehicleCategoryOption[] = [
  { id: 'all', label: 'All Vehicles', icon: 'car' },
  { id: 'mpv', label: 'MPV / Van', icon: 'van' },
  { id: 'suv', label: 'SUV', icon: 'suv' },
  { id: 'executive', label: 'Executive Class', icon: 'shield' },
]

export const vehicles: Vehicle[] = [
  {
    id: 'zeekr-009',
    name: 'ZEEKR 009',
    subtitle: 'The Ultimate Luxury MPV',
    badge: 'EXECUTIVE LOUNGE',
    category: 'mpv',
    categoryLabel: 'MPV / Van',
    image: '/images/vehicles/zeekr-009.png',
    seats: 6,
    luggage: 4,
    features: [
      { label: '6 Seats', icon: 'users' },
      { label: '4 Large Luggage', icon: 'bag' },
      { label: 'VIP Class', icon: 'shield-check' },
      { label: 'Panoramic Roof', icon: 'sunroof' },
      { label: 'Premium Lounge Interior', icon: 'armchair' },
      { label: 'Ideal for Families & Business Groups', icon: 'users' },
    ],
    description:
      'Spacious and elegant electric MPV with lounge seating, perfect for families or executive travelers.',
    priceFrom: '2,490',
    currency: 'THB',
    bookHref: '/book?vehicle=zeekr-009',
    // Backward compatibility
    type: 'The Ultimate Luxury MPV',
    tier: 'Executive Lounge',
    copy: 'Spacious and elegant electric MPV with lounge seating, perfect for families or executive travelers.',
    price: '2,490',
  },
  {
    id: 'zeekr-7x',
    name: 'ZEEKR 7X',
    subtitle: 'Premium Electric SUV',
    badge: 'EXECUTIVE SUV',
    category: 'suv',
    categoryLabel: 'SUV',
    image: '/images/vehicles/zeekr-7x.png',
    seats: 4,
    luggage: 3,
    features: [
      { label: '4 Seats', icon: 'users' },
      { label: '3 Large Luggage', icon: 'bag' },
      { label: 'Executive Class', icon: 'shield-check' },
      { label: 'Panoramic Roof', icon: 'sunroof' },
      { label: 'Quiet & Smooth Ride', icon: 'sparkles' },
      { label: 'Ideal for Business & Couples', icon: 'user' },
    ],
    description:
      'Stylish and comfortable electric SUV offering a smooth, quiet and comfortable ride.',
    priceFrom: '1,990',
    currency: 'THB',
    bookHref: '/book?vehicle=zeekr-7x',
    // Backward compatibility
    type: 'Premium Electric SUV',
    tier: 'Executive SUV',
    copy: 'Stylish and comfortable electric SUV offering a smooth, quiet and comfortable ride.',
    price: '1,990',
  },
  {
    id: 'toyota-bz4x',
    name: 'TOYOTA BZ4X',
    subtitle: 'Premium Electric SUV',
    badge: 'PREMIUM SUV',
    category: 'suv',
    categoryLabel: 'SUV',
    image: '/images/vehicles/toyota-bz4x.png',
    seats: 4,
    luggage: 3,
    features: [
      { label: '4 Seats', icon: 'users' },
      { label: '3 Large Luggage', icon: 'bag' },
      { label: 'Premium Class', icon: 'shield-check' },
      { label: 'Spacious Cabin', icon: 'armchair' },
      { label: 'Long Range Performance', icon: 'sparkles' },
      { label: 'Ideal for Business & Daily Travel', icon: 'briefcase' },
    ],
    description:
      'Reliable and efficient all-electric SUV with advanced safety features and a comfortable interior.',
    priceFrom: '1,690',
    currency: 'THB',
    bookHref: '/book?vehicle=toyota-bz4x',
    // Backward compatibility
    type: 'Premium Electric SUV',
    tier: 'Premium SUV',
    copy: 'Reliable and efficient all-electric SUV with advanced safety features and a comfortable interior.',
    price: '1,690',
  },
]

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { id: '1', label: 'Premium Vehicles', icon: 'car' },
  { id: '2', label: 'Professional Chauffeurs', icon: 'user' },
  { id: '3', label: 'Well-Maintained & Clean', icon: 'shield-check' },
  { id: '4', label: 'Safety First', icon: 'shield' },
]

export const VEHICLE_AMENITIES: VehicleAmenity[] = [
  {
    id: '1',
    title: 'Complimentary Water & Wi-Fi',
    line1: 'Complimentary',
    line2: 'Water & Wi-Fi',
    icon: 'wifi',
  },
  {
    id: '2',
    title: 'Phone Charger Available',
    line1: 'Phone Charger',
    line2: 'Available',
    icon: 'charger',
  },
  {
    id: '3',
    title: 'Child Seat Available',
    line1: 'Child Seat',
    line2: 'Available',
    icon: 'child-seat',
  },
  {
    id: '4',
    title: 'Flight Tracking Included',
    line1: 'Flight Tracking',
    line2: 'Included',
    icon: 'plane-up',
  },
  {
    id: '5',
    title: '60 Mins Free Waiting Time',
    line1: '60 Mins Free',
    line2: 'Waiting Time',
    icon: 'stopwatch',
  },
  {
    id: '6',
    title: 'All Tolls & Parking Included',
    line1: 'All Tolls & Parking',
    line2: 'Included',
    icon: 'toll-card',
  },
]

export const CTA_BENEFITS: CtaBenefit[] = [
  { id: '1', text: 'Professional Chauffeurs' },
  { id: '2', text: 'Clean & Sanitized Vehicles' },
  { id: '3', text: 'On-Time Guarantee' },
  { id: '4', text: '24/7 Customer Support' },
]
