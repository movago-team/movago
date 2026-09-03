import ServiceFleetSection from '@/components/services/shared/ServiceFleetSection'

export default function AirportFleetSection() {
  return (
    <ServiceFleetSection
      title="OUR FLEET"
      description="Premium vehicles for every journey, crafted for first-class comfort, safety, and seamless airport transfers."
      buttonLabel="View Details"
      buttonHrefBase="/book?service=airport&vehicle="
    />
  )
}

