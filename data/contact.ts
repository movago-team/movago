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

export const HERO_PILLARS: SupportHeroPillar[] = [
  {
    id: 'support-247',
    title: '24/7 Support',
    desc: 'Always here for you',
    icon: 'stopwatch',
  },
  {
    id: 'quick-response',
    title: 'Quick Response',
    desc: 'Within minutes',
    icon: 'clock',
  },
  {
    id: 'expert-team',
    title: 'Expert Team',
    desc: 'Trained professionals',
    icon: 'users',
  },
  {
    id: 'premium-care',
    title: 'Premium Care',
    desc: 'Service beyond expectation',
    icon: 'user',
  },
]

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'call',
    title: 'Call Us 24/7',
    value: '+66 2 026 4699',
    sub: 'Available 24 hours',
    href: 'tel:+6620264699',
    icon: 'phone',
    iconBg: 'bg-[#FBF6EE]',
    iconColor: 'text-[#C5A073]',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    value: '+66 2 026 4699',
    sub: 'Chat with us on WhatsApp',
    href: 'https://wa.me/6620264699',
    icon: 'whatsapp',
    iconBg: 'bg-[#EAF8EE]',
    iconColor: 'text-[#25D366]',
  },
  {
    id: 'line',
    title: 'LINE Official',
    value: '@movago',
    sub: 'Message us on LINE',
    href: 'https://line.me',
    icon: 'line',
    iconBg: 'bg-[#06C755]',
    iconColor: 'text-white',
  },
  {
    id: 'email',
    title: 'Email Us',
    value: 'support@movago.co.th',
    sub: "We'll reply as soon as possible",
    href: 'mailto:support@movago.co.th',
    icon: 'mail',
    iconBg: 'bg-[#FDF6ED]',
    iconColor: 'text-[#C5A073]',
  },
  {
    id: 'chat',
    title: 'Live Chat',
    value: 'Start a conversation',
    sub: 'Available on website & app',
    href: '#',
    icon: 'chat',
    iconBg: 'bg-[#FBF6EE]',
    iconColor: 'text-[#C5A073]',
  },
  {
    id: 'corporate',
    title: 'Corporate Support',
    value: 'corporate@movago.co.th',
    sub: 'For corporate accounts',
    href: 'mailto:corporate@movago.co.th',
    icon: 'building',
    iconBg: 'bg-[#FBF6EE]',
    iconColor: 'text-[#C5A073]',
  },
]

export const QUICK_BOOKING_SOLUTIONS: QuickBookingSolution[] = [
  {
    id: 'manage',
    title: 'Manage Booking',
    desc: 'View, modify, or cancel your existing booking.',
    linkText: 'Go to My Trips',
    href: '/book',
    icon: 'calendar',
  },
  {
    id: 'flight',
    title: 'Flight Update / Delay',
    desc: 'Let us know about your flight changes.',
    linkText: 'Update Flight',
    href: '/book',
    icon: 'plane',
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Refund',
    desc: 'Learn about our cancellation and refund policy.',
    linkText: 'View Policy',
    href: '/about',
    icon: 'refresh',
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    desc: 'Report or inquire about lost items.',
    linkText: 'Report Item',
    href: 'mailto:support@movago.co.th?subject=Lost%20and%20Found%20Inquiry',
    icon: 'bag',
  },
]

export const SUPPORT_FAQS_COL1: SupportFaqItem[] = [
  {
    id: 'faq-cancel',
    question: 'How do I change or cancel my booking?',
    answer:
      'You can modify or cancel your booking through our online Manage Booking portal up to 24 hours prior to scheduled pickup for a full refund, or reach our 24/7 concierge anytime.',
  },
  {
    id: 'faq-delay',
    question: 'What happens if my flight is delayed?',
    answer:
      'All airport transfers include automated real-time flight tracking. Your chauffeur monitors your flight status and adjusts pickup time automatically, with 60 minutes of complimentary waiting time from the moment your aircraft touches down.',
  },
  {
    id: 'faq-driver',
    question: 'How do I contact my driver?',
    answer:
      'Chauffeur details including name, phone number, and vehicle license plate will be sent to you via SMS and WhatsApp 2 hours before your scheduled pickup time.',
  },
]

export const SUPPORT_FAQS_COL2: SupportFaqItem[] = [
  {
    id: 'faq-included',
    question: 'What is included in the service?',
    answer:
      'All transfers include a private luxury vehicle, professional chauffeur, airport meet-and-greet, flight tracking, all expressway tolls, fuel, bottled water, and passenger insurance.',
  },
  {
    id: 'faq-child-seat',
    question: 'Do you provide child seats?',
    answer:
      'Yes, certified infant and child safety booster seats are available upon request during booking at no additional charge.',
  },
  {
    id: 'faq-payment',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, JCB, American Express), bank transfers, and corporate billing accounts for registered corporate clients.',
  },
]

export const TRUST_BADGES: TrustBadge[] = [
  { id: 'support', label: '24/7 Customer Support', icon: 'headset' },
  { id: 'response', label: 'Fast Response Time', icon: 'stopwatch' },
  { id: 'team', label: 'Professional & Friendly Team', icon: 'users' },
]

export const OTHER_WAYS_CARDS = [
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    desc: 'Find answers to common questions instantly.',
    linkText: 'View FAQs',
    href: '#faq-quick-answers',
    icon: 'headset',
  },
  {
    id: 'manage',
    title: 'Manage Your Booking',
    desc: 'Modify, cancel or update your booking details.',
    linkText: 'Manage Booking',
    href: '/book',
    icon: 'calendar',
  },
  {
    id: 'issue',
    title: 'Report an Issue',
    desc: 'Let us know if you face any issues during your trip.',
    linkText: 'Report Now',
    href: 'mailto:support@movago.co.th?subject=Trip%20Issue%20Report',
    icon: 'shield',
  },
  {
    id: 'corporate',
    title: 'Corporate Inquiries',
    desc: 'Looking for business partnerships or solutions?',
    linkText: 'Contact Corporate',
    href: '/corporate',
    icon: 'handshake',
  },
]

export const QUICK_ANSWERS_FAQS: SupportFaqItem[] = [
  {
    id: 'qa-make-booking',
    question: 'How do I make a booking?',
    answer:
      'You can easily reserve your vehicle online via our Book page, or connect with our 24/7 concierge specialist via WhatsApp or direct line.',
  },
  {
    id: 'qa-cancel-booking',
    question: 'Can I cancel or change my booking?',
    answer:
      'Yes, modifications and cancellations are free of charge when requested up to 24 hours prior to your scheduled pickup time.',
  },
  {
    id: 'qa-flight-delay',
    question: 'What if my flight is delayed?',
    answer:
      'We automatically monitor flight statuses in real-time. Your chauffeur adjusts pickup time accordingly and provides up to 60 minutes complimentary wait time.',
  },
  {
    id: 'qa-meet-chauffeur',
    question: 'How do I meet my chauffeur at the airport?',
    answer:
      'Your chauffeur will greet you directly at the airport arrival terminal with a personalized digital or physical name board.',
  },
  {
    id: 'qa-price-included',
    question: 'What is included in the price?',
    answer:
      'All bookings include private luxury vehicle, professional chauffeur, toll fees, fuel, airport meet & greet, passenger insurance, and bottled water.',
  },
]
