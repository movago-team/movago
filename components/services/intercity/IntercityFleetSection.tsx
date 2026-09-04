import ServiceFleetSection from '@/components/services/shared/ServiceFleetSection'

export default function IntercityFleetSection() {
  return (
    <ServiceFleetSection
      title="OUR FLEET"
      description="Premium vehicles for every journey, crafted for first-class comfort, safety, and seamless intercity travel."
      buttonLabel="Book This Vehicle"
      buttonHrefBase="/book?service=intercity&vehicle="
    />
  )
}
