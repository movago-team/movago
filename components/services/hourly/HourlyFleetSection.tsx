import ServiceFleetSection from '@/components/services/shared/ServiceFleetSection'

export default function HourlyFleetSection() {
  return (
    <ServiceFleetSection
      eyebrow="OUR FLEET"
      title="Premium Vehicles for Your Hourly Service"
      priceSuffix="/ hour"
      buttonLabel="Book Now"
      buttonHrefBase="/book?service=hourly&vehicle="
    />
  )
}
