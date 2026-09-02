import ServiceFleetSection from '@/components/services/shared/ServiceFleetSection'

export default function IntercityFleetSection() {
  return (
    <ServiceFleetSection
      eyebrow="OUR FLEET"
      title="Premium Vehicles for Every Journey"
      buttonLabel="Book This Vehicle"
      buttonHrefBase="/book?service=intercity&vehicle="
    />
  )
}
