import { Icon } from '@/components/ui'

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-grid page-width">
        {/* LEFT */}
        <div className="section-intro">
          <div className="eyebrow">WHY CHOOSE MOVAGO</div>

          <h2>More Than Just a Ride</h2>

          <p>We deliver a premium experience in every journey</p>
        </div>

        {/* RIGHT */}
        <div className="feature-grid">
          {/* Premium Experience */}
          <article>
            <span className="feature-icon">
              <Icon name="car" />
            </span>

            <div>
              <h3>Premium Experience</h3>

              <p>
                Luxury vehicles, professional chauffeurs and superior service.
              </p>
            </div>
          </article>

          {/* Safety First */}
          <article>
            <span className="feature-icon">
              <Icon name="shield" />
            </span>

            <div>
              <h3>Safety First</h3>

              <p>
                Fully insured, certified drivers and rigorous safety standards.
              </p>
            </div>
          </article>

          {/* On-Time Guarantee */}
          <article>
            <span className="feature-icon">
              <Icon name="clock" />
            </span>

            <div>
              <h3>On-Time Guarantee</h3>

              <p>
                Flight tracking and real-time traffic monitoring.
              </p>
            </div>
          </article>

          {/* All-Inclusive Pricing */}
          <article>
            <span className="feature-icon">
              <Icon name="bag" />
            </span>

            <div>
              <h3>All-Inclusive Pricing</h3>

              <p>
                No hidden fees. All tolls, parking and waiting time included.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
