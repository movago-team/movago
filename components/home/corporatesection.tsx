import Link from "next/link";
import Icon from "../ui/icon";

export default function CorporateSection() {
  return (
    <section className="corporate-section">
      <div className="corporate-inner page-width">

        {/* LEFT */}
        <div className="corporate-content">
          <div className="corporate-eyebrow">
            CORPORATE SOLUTIONS
          </div>

          <h2>
            Mobility Solutions for Your Business
          </h2>

          <p>
            Streamline your corporate travel with our tailored solutions.
            <br />
            Monthly billing, dedicated support and priority service for your
            <br />
            business needs.
          </p>

          <Link
            href="/corporate"
            className="corporate-button"
          >
            Learn More
          </Link>
        </div>

        {/* IMAGE */}
        <div className="corporate-image">
          <img
            src="/movago/corporate/corporate-transfer.png"
            alt="MOVAGO corporate chauffeur service"
          />
        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="corporate-features">

          <Link href="/corporate" className="corporate-feature">
            <Icon name="briefcase" />
            <span>Corporate Accounts</span>
          </Link>

          <Link href="/corporate" className="corporate-feature">
            <Icon name="bag" />
            <span>Monthly Billing</span>
          </Link>

          <Link href="/corporate" className="corporate-feature">
            <Icon name="users" />
            <span>Priority Support</span>
          </Link>

          <Link href="/corporate" className="corporate-feature">
            <Icon name="chart" />
            <span>Detailed Reporting</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
