'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'
import { vehicles } from '@/data/vehicles'

export interface VehicleSectionProps {
  onSelect: (vehicle: string) => void
}

export default function VehicleSection({ onSelect }: VehicleSectionProps) {
  return (
    <section className="vehicles-section">
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
          {vehicles.map((item) => (
            <article className="vehicle-card" key={item.id}>
              <div className="vehicle-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="vehicle-copy">
                <div className="vehicle-copy-top">
                  <h3>{item.name}</h3>
                  <div className="vehicle-type">{item.type}</div>

                  <div className="vehicle-meta">
                    <span>• {item.seats}</span>
                    <span>• {item.luggage}</span>
                    <span>• {item.tier}</span>
                  </div>

                  <p className="vehicle-description">{item.copy}</p>
                </div>

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
