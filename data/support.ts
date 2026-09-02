import type {
  FAQCategory,
  FAQItem,
  HeroFeature,
  PolicySection,
  PrivacyInfoCard,
} from '@/types/support'

/* ==========================================================================
   Hero Feature Cards
   ========================================================================== */

export const FAQ_HERO_FEATURES: HeroFeature[] = [
  {
    id: 'quick-answers',
    title: 'Quick Answers',
    desc: 'Find instant answers to common questions',
    icon: 'help-circle',
  },
  {
    id: '24-7-support',
    title: '24/7 Support',
    desc: 'Our team is available around the clock',
    icon: 'headset',
  },
  {
    id: 'safe-reliable',
    title: 'Safe & Reliable',
    desc: 'Your safety and comfort are our top priority',
    icon: 'shield-check',
  },
  {
    id: 'premium-experience',
    title: 'Premium Experience',
    desc: 'Luxury service with attention to every detail',
    icon: 'star',
  },
]

export const TERMS_HERO_FEATURES: HeroFeature[] = [
  {
    id: 'clear-transparent',
    title: 'Clear & Transparent',
    desc: 'Simple terms, easy to understand',
    icon: 'shield-check',
  },
  {
    id: 'fair-responsible',
    title: 'Fair & Responsible',
    desc: 'Protecting your rights and ours',
    icon: 'lock',
  },
  {
    id: 'safe-reliable',
    title: 'Safe & Reliable',
    desc: 'Committed to service excellence',
    icon: 'shield',
  },
  {
    id: 'trust-matters',
    title: 'Your Trust Matters',
    desc: "We're here for every journey",
    icon: 'file-check',
  },
]

export const PRIVACY_HERO_FEATURES: HeroFeature[] = [
  {
    id: 'protect-data',
    title: 'We Protect',
    desc: 'Your Data',
    icon: 'shield-check',
  },
  {
    id: 'use-responsibly',
    title: 'We Use Data',
    desc: 'Responsibly',
    icon: 'lock',
  },
  {
    id: 'in-control',
    title: "You're in",
    desc: 'Control',
    icon: 'user',
  },
  {
    id: 'global-standards',
    title: 'We Follow Global',
    desc: 'Standards',
    icon: 'file-check',
  },
]

/* ==========================================================================
   FAQ Data
   ========================================================================== */

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'all',
    title: 'All Questions',
    description: 'View all FAQs',
    icon: 'grid',
  },
  {
    id: 'booking',
    title: 'Booking',
    description: 'Reservations & changes',
    icon: 'calendar',
  },
  {
    id: 'airport',
    title: 'Airport Transfer',
    description: 'Pick-up & drop-off',
    icon: 'plane',
  },
  {
    id: 'payment',
    title: 'Payment',
    description: 'Payments & invoices',
    icon: 'credit-card',
  },
  {
    id: 'service',
    title: 'Vehicle & Service',
    description: 'Our vehicles & service',
    icon: 'car',
  },
  {
    id: 'account',
    title: 'Account',
    description: 'Your account & profile',
    icon: 'user',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a MOVAGO airport transfer?',
    answer:
      'You can book online through our website or mobile app in just a few steps. Choose your service type, select your route, date and time, pick your preferred vehicle, and confirm your booking. You will receive a confirmation email immediately.',
    category: 'booking',
  },
  {
    id: 'faq-2',
    question: 'Can I change or cancel my booking?',
    answer:
      'You may modify or cancel your booking up to 24 hours prior to your scheduled pickup time with zero cancellation fee. For cancellations made within 24 hours, applicable fees may apply based on our cancellation policy.',
    category: 'booking',
  },
  {
    id: 'faq-3',
    question: 'What happens if my flight is delayed?',
    answer:
      'When you provide your flight number during booking, our dispatch team tracks your flight in real-time. Your chauffeur will automatically adjust the pickup time according to your actual flight landing, with up to 60 minutes of complimentary waiting time from touch-down.',
    category: 'airport',
  },
  {
    id: 'faq-4',
    question: 'How will I meet my chauffeur at the airport?',
    answer:
      'Your chauffeur will wait inside the arrival hall at the designated meeting point holding an official MOVAGO sign bearing your name. You will also receive the chauffeur’s contact details, photograph, and vehicle plate number prior to landing.',
    category: 'airport',
  },
  {
    id: 'faq-5',
    question: 'What is included in the price?',
    answer:
      'Every MOVAGO booking is 100% transparent and all-inclusive. The quoted price covers the vehicle, professional English-speaking chauffeur, fuel, expressway tolls, airport parking fees, meet & greet service, and complimentary chilled bottled water and onboard Wi-Fi.',
    category: 'payment',
  },
  {
    id: 'faq-6',
    question: 'Do you provide child seats?',
    answer:
      'Yes, we provide certified international safety standard infant and booster seats free of charge upon request. Simply select the child seat option when configuring your booking details.',
    category: 'service',
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major international credit and debit cards (Visa, Mastercard, JCB, American Express) via secure encrypted gateway, as well as corporate billing accounts and Thai PromptPay QR codes.',
    category: 'payment',
  },
  {
    id: 'faq-8',
    question: 'How do I contact my chauffeur?',
    answer:
      'Approximately 2 hours before your scheduled pickup, you will receive an SMS and email notification with your chauffeur’s direct contact number and WhatsApp link, enabling instant communication.',
    category: 'service',
  },
  {
    id: 'faq-9',
    question: 'Do you offer services to other cities outside Bangkok?',
    answer:
      'Yes! MOVAGO provides intercity executive chauffeur services connecting Bangkok and Suvarnabhumi / Don Mueang airports with Pattaya, Hua Hin, Rayong, Ayutthaya, Khao Yai, Kanchanaburi, and other provinces.',
    category: 'service',
  },
  {
    id: 'faq-10',
    question: 'Is MOVAGO available 24/7?',
    answer:
      'Yes, MOVAGO chauffeur transfers and our executive customer support center operate 24 hours a day, 7 days a week, 365 days a year without exception.',
    category: 'service',
  },
  {
    id: 'faq-11',
    question: 'How do I create and manage my MOVAGO account?',
    answer:
      'You can register an account anytime using your email address or mobile phone number. With an account, you can easily access past invoices, re-order frequent routes, manage company travelers, and view your loyalty tier benefits.',
    category: 'account',
  },
  {
    id: 'faq-12',
    question: 'Can I request an executive corporate billing invoice?',
    answer:
      'Yes. During checkout or through our Corporate portal, you can input your registered company tax ID and billing address to receive an official Thai Tax Invoice / Receipt (e-Tax Invoice) immediately upon journey completion.',
    category: 'payment',
  },
]

/* ==========================================================================
   Terms & Conditions Sections (18 Sections)
   ========================================================================== */

export const TERMS_SECTIONS: PolicySection[] = [
  {
    id: 'introduction',
    number: 1,
    title: 'Introduction',
    content:
      'These Terms & Conditions ("Terms") govern your access to and use of the services provided by MOVAGO, a service operated by Luv Mobility Group Co., Ltd. ("we", "our", "us"). By using our services and making a booking, you agree to be bound by these Terms.',
  },
  {
    id: 'definitions',
    number: 2,
    title: 'Definitions',
    description: 'In these Terms, unless the context requires otherwise:',
    bullets: [
      {
        term: '"MOVAGO"',
        text: 'means the airport transfer and chauffeur service provided by Luv Mobility Group Co., Ltd.',
      },
      {
        term: '"Customer"',
        text: 'means any person who books or uses our services.',
      },
      {
        term: '"Booking"',
        text: 'means the reservation of a service through our platform.',
      },
      {
        term: '"Chauffeur"',
        text: 'means a professional driver assigned by MOVAGO.',
      },
      {
        term: '"Vehicle"',
        text: 'means any vehicle provided as part of our service.',
      },
      {
        term: '"Services"',
        text: 'means all airport transfers, intercity transfers, hourly chauffeur services, and related transportation solutions.',
      },
    ],
  },
  {
    id: 'services',
    number: 3,
    title: 'Services',
    content:
      'MOVAGO provides premium airport transfers, intercity transfers, hourly chauffeur services, and related transportation services as described on our website and mobile application. Service availability may vary depending on location, vehicle availability, time, and other factors.',
  },
  {
    id: 'booking-confirmation',
    number: 4,
    title: 'Booking & Confirmation',
    content:
      'All bookings are subject to availability. A booking is confirmed only when you receive a booking confirmation from MOVAGO via email, SMS, or the application. We reserve the right to decline or cancel any booking if we are unable to provide the requested service.',
  },
  {
    id: 'payment-pricing',
    number: 5,
    title: 'Payment & Pricing',
    content:
      'Prices are displayed in Thai Baht (THB) and include applicable taxes unless stated otherwise. Full payment or the required deposit must be completed at the time of booking. Payment methods and accepted currencies are shown during the booking process. MOVAGO reserves the right to change prices without prior notice.',
  },
  {
    id: 'changes-cancellations',
    number: 6,
    title: 'Changes & Cancellations',
    content:
      'You may modify or cancel your booking subject to our cancellation policy and applicable fees. Cancellation fees may vary depending on the timing of the cancellation, vehicle type, and service type.',
    actionLink: {
      label: 'View our Cancellation Policy',
      href: '/support/faqs',
    },
  },
  {
    id: 'airport-pickup',
    number: 7,
    title: 'Airport Pickup & Flight Monitoring',
    content:
      'When you provide your flight number, MOVAGO may monitor your flight status to assist with your pickup. However, MOVAGO is not responsible for delays, cancellations, or changes to flight schedules made by the airline.',
    actionLink: {
      label: 'View Flight Monitoring Policy',
      href: '/support/faqs',
    },
  },
  {
    id: 'chauffeur-vehicle',
    number: 8,
    title: 'Chauffeur & Vehicle',
    content:
      'All chauffeurs are licensed and vetted professionals. While we strive to provide the exact vehicle model booked, MOVAGO reserves the right to substitute an equivalent or superior category vehicle in the event of unforeseen mechanical or logistical issues.',
  },
  {
    id: 'passenger-responsibilities',
    number: 9,
    title: 'Passenger Responsibilities',
    content:
      'Passengers must wear seatbelts at all times during transit, treat the chauffeur and vehicle with respect, and comply with all applicable traffic and safety laws. Any damage to the vehicle interior caused by passengers will be charged to the booking account.',
  },
  {
    id: 'prohibited-activities',
    number: 10,
    title: 'Prohibited Activities',
    content:
      'Smoking (including e-cigarettes and vaping), consumption of illegal substances, carriage of hazardous or unlawful items, and disruptive behavior are strictly prohibited in all MOVAGO vehicles. Chauffeurs reserve the right to terminate service immediately without refund in case of non-compliance.',
  },
  {
    id: 'liability-limitations',
    number: 11,
    title: 'Liability Limitations',
    content:
      'To the fullest extent permitted by Thai law, MOVAGO shall not be liable for indirect, incidental, or consequential damages resulting from missed flights or appointments due to unexpected traffic conditions, road closures, or adverse weather, provided reasonable standard care was exercised.',
  },
  {
    id: 'force-majeure',
    number: 12,
    title: 'Force Majeure',
    content:
      'Neither party shall be held liable for failure or delay in performance caused by circumstances beyond reasonable control, including natural disasters, severe weather, governmental orders, civil unrest, or catastrophic transit disruptions.',
  },
  {
    id: 'indemnity',
    number: 13,
    title: 'Indemnity',
    content:
      'You agree to indemnify and hold harmless MOVAGO, its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your violation of these Terms or your willful misconduct.',
  },
  {
    id: 'privacy',
    number: 14,
    title: 'Privacy',
    content:
      'Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and safeguard your personal information.',
    actionLink: {
      label: 'Read our Privacy Policy',
      href: '/support/privacy',
    },
  },
  {
    id: 'intellectual-property',
    number: 15,
    title: 'Intellectual Property',
    content:
      'All content, trademarks, logos, and visual elements displayed on the MOVAGO website and applications are the exclusive intellectual property of Luv Mobility Group Co., Ltd. and protected under applicable copyright laws.',
  },
  {
    id: 'amendments',
    number: 16,
    title: 'Amendments',
    content:
      'MOVAGO reserves the right to modify or update these Terms at any time. Continued use of our platform following the posting of updated Terms constitutes your binding acceptance of the revisions.',
  },
  {
    id: 'governing-law',
    number: 17,
    title: 'Governing Law',
    content:
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Kingdom of Thailand. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts of Bangkok, Thailand.',
  },
  {
    id: 'contact-us',
    number: 18,
    title: 'Contact Us',
    content:
      'If you have any questions or clarifications regarding these Terms & Conditions, please contact our support team at legal@movago.co.th or reach out through our 24/7 contact channels.',
  },
]

/* ==========================================================================
   Privacy Policy Sections (13 Sections) & Information Cards
   ========================================================================== */

export const PRIVACY_INFO_CARDS: PrivacyInfoCard[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    description:
      'Name, contact number, email address, ID information, and other information you provide to us.',
    icon: 'user',
  },
  {
    id: 'booking',
    title: 'Booking Information',
    description:
      'Pickup and drop-off locations, date and time, flight details, number of passengers, luggage, and special requests.',
    icon: 'calendar',
  },
  {
    id: 'payment',
    title: 'Payment Information',
    description:
      'Payment details and transaction records. (We do not store your full credit/debit card information.)',
    icon: 'credit-card',
  },
  {
    id: 'device',
    title: 'Device & Usage Information',
    description:
      'IP address, device type, operating system, browser type, pages visited, and usage behavior.',
    icon: 'car',
  },
  {
    id: 'location',
    title: 'Location Information',
    description:
      'Approximate location data to provide and improve our services, such as real-time trip tracking.',
    icon: 'pin',
  },
  {
    id: 'support',
    title: 'Customer Support Information',
    description:
      'Information you provide when you contact our support team through phone, email, chat, or other channels.',
    icon: 'headset',
  },
]

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    id: 'introduction',
    number: 1,
    title: 'Introduction',
    content:
      'This Privacy Policy explains how Luv Mobility Group Co., Ltd. ("we", "our", "us") and its service "MOVAGO" collect, use, disclose, and protect your personal information when you use our website, mobile application, and services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.',
  },
  {
    id: 'information-we-collect',
    number: 2,
    title: 'Information We Collect',
    description:
      'We may collect the following types of personal information when you use our Services:',
    content:
      'We collect only the information necessary to provide, coordinate, and continuously enhance your luxury travel experience.',
  },
  {
    id: 'how-we-use-your-information',
    number: 3,
    title: 'How We Use Your Information',
    description: 'We use your information for the following purposes:',
    bullets: [
      { text: 'To provide, operate, and improve our Services' },
      { text: 'To process bookings, payments, and transactions' },
      { text: 'To communicate with you regarding your bookings and services' },
      { text: 'To monitor flights and coordinate airport transfers' },
      { text: 'To personalize your experience and recommend relevant offers' },
      { text: 'To ensure safety, prevent fraud, and comply with legal obligations' },
      { text: 'To analyze usage and improve our website, app, and services' },
    ],
    content: 'We do not sell your personal information to any third parties.',
  },
  {
    id: 'how-we-share-your-information',
    number: 4,
    title: 'How We Share Your Information',
    content:
      'We only share your information with trusted partners who assist in operating our services, such as payment processors, cloud hosting infrastructure, and assigned chauffeurs for trip execution. All third parties are strictly bound by contractual confidentiality agreements.',
  },
  {
    id: 'data-security',
    number: 5,
    title: 'Data Security',
    content:
      'We implement bank-grade encryption (TLS/SSL), enterprise firewalls, and strict role-based access controls to safeguard your data. While no transmission method over the Internet is 100% secure, we continuously audit our infrastructure against international cybersecurity standards.',
  },
  {
    id: 'your-choices-rights',
    number: 6,
    title: 'Your Choices & Rights',
    content:
      'Under Thailand’s Personal Data Protection Act (PDPA) and international regulations, you have the right to access, rectify, or request deletion of your personal data. You may also opt out of marketing communications at any time via your account settings.',
  },
  {
    id: 'data-retention',
    number: 7,
    title: 'Data Retention',
    content:
      'We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, satisfy legal and accounting requirements, or resolve potential disputes.',
  },
  {
    id: 'cookies-tracking',
    number: 8,
    title: 'Cookies & Tracking Technologies',
    content:
      'We use essential cookies to maintain secure sessions and analytical cookies to understand site performance. You can manage or disable cookies via your browser preferences without affecting core booking functionality.',
  },
  {
    id: 'third-party-links',
    number: 9,
    title: 'Third-Party Links & Services',
    content:
      'Our platform may contain links to external sites (such as airport authority portals or mapping tools). We are not responsible for the privacy practices of external platforms and encourage you to review their specific policies.',
  },
  {
    id: 'children-privacy',
    number: 10,
    title: 'Children’s Privacy',
    content:
      'Our Services are not directed to individuals under the age of 18 without parental consent. We do not knowingly collect personal information from minors.',
  },
  {
    id: 'international-transfers',
    number: 11,
    title: 'International Data Transfers',
    content:
      'If your data is processed outside Thailand by accredited global infrastructure providers (such as Amazon Web Services), we ensure equivalent data protection mechanisms and legal safeguards are maintained.',
  },
  {
    id: 'changes-policy',
    number: 12,
    title: 'Changes to This Policy',
    content:
      'We may update our Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page with an updated revision date.',
  },
  {
    id: 'contact-us',
    number: 13,
    title: 'Contact Us',
    content:
      'If you have questions, feedback, or requests regarding this Privacy Policy or our data handling practices, please contact our Data Protection Officer at privacy@movago.co.th.',
  },
]
