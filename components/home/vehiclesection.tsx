'use client'

import Link from 'next/link'
import { Button, Icon } from '@/components/ui'
import { vehicles } from '@/data/vehicles'

export interface VehicleSectionProps {
  onSelect: (vehicle: string) => void
}

export default function VehicleSection({ onSelect }: VehicleSectionProps) {
  const displayVehicles = vehicles.slice(0, 3)

  return (
    <section className="vehicles-section" id="vehicles">
      <div className="page-width">
        <div className="vehicles-heading">
          <div>
            <div className="eyebrow">OUR VEHICLES</div>
            <h2>Travel in Luxury and Comfort</h2>
            <p>Choose the perfect vehicle for your journey</p>
          </div>

          <Link href="/vehicles" className="vehicles-view-all">
            View All Vehicles
          </Link>
        </div>

        <div className="vehicle-grid">
          {displayVehicles.map((item) => {
            const categoryLabel =
              item.category || item.tier.toUpperCase()

            return (
              <article className="vehicle-card" key={item.id}>
                {/* Top Area: Category, Name, Type */}
                <div className="vehicle-header">
                  <div className="vehicle-category">{categoryLabel}</div>
                  <h3 className="vehicle-name">{item.name}</h3>
                  <div className="vehicle-type">{item.type}</div>
                </div>

                {/* Vehicle Image Area */}
                <div className="vehicle-image-wrap">
                  <img src={item.image} alt={item.name} className="vehicle-img" />
                </div>

                {/* Specifications */}
                <div className="vehicle-specs">
                  <span className="spec-item">
                    <Icon name="users" size={14} />
                    <span>{item.seats}</span>
                  </span>
                  <span className="spec-sep">•</span>
                  <span className="spec-item">
                    <Icon name="briefcase" size={14} />
                    <span>{item.luggage}</span>
                  </span>
                  <span className="spec-sep">•</span>
                  <span className="spec-item">
                    <Icon name="shield" size={14} />
                    <span>{item.tier}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="vehicle-description">{item.copy}</p>

                {/* Bottom Area: Price and Select CTA */}
                <div className="vehicle-bottom">
                  <div className="vehicle-price">
                    <small>From</small>
                    <strong>
                      {item.price} <span>THB</span>
                    </strong>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    className="vehicle-select"
                    onClick={() => onSelect(item.name)}
                  >
                    Select
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
