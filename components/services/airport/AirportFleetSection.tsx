import ServiceFleetSection from '@/components/services/shared/ServiceFleetSection'

export default function AirportFleetSection() {
  return (
    <ServiceFleetSection
      eyebrow="OUR FLEET"
      title="Premium Vehicles for Every Journey"
      buttonLabel="View Details"
      buttonHrefBase="/book?service=airport&vehicle="
    />
  )
}
