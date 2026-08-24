import Link from "next/link";
import Icon from "../ui/icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-inner">

        {/* BRAND */}
        <div className="footer-brand">

          <Link
            href="/"
            className="footer-logo"
            aria-label="MOVAGO Home"
          >
            <div className="footer-logo-main">
              MOVAGO
            </div>

            <div className="footer-logo-sub">
              EXECUTIVE AIRPORT TRANSFER
            </div>
          </Link>

          <p>
            Premium airport transfer and chauffeur
            <br />
            service in Thailand. Experience the
            <br />
            journey beyond expectation.
          </p>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Line"
            >
              ●
            </a>
          </div>

        </div>

        {/* SERVICES */}
        <div className="footer-menu">
          <h4>SERVICES</h4>

          <Link href="/services">
            Airport Transfer
          </Link>

          <Link href="/services">
            Hourly Service
          </Link>

          <Link href="/services">
            Intercity Transfer
          </Link>

          <Link href="/corporate">
            Corporate Solutions
          </Link>
        </div>

        {/* INFORMATION */}
        <div className="footer-menu">
          <h4>INFORMATION</h4>

          <Link href="/about">
            About Us
          </Link>

          <Link href="/vehicles">
            Our Vehicles
          </Link>

          <Link href="/destinations">
            Destinations
          </Link>

          <Link href="/about">
            FAQs
          </Link>

          <Link href="/about">
            Terms &amp; Conditions
          </Link>
        </div>

        {/* SUPPORT */}
        <div className="footer-menu">
          <h4>SUPPORT</h4>

          <a href="mailto:hello@movago.co.th">
            Contact Us
          </a>

          <Link href="/about">
            Customer Support
          </Link>

          <Link href="/about">
            Privacy Policy
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact-column">

          <h4>
            24/7 BOOKING &amp; SUPPORT
          </h4>

          <a
            href="tel:+6620264699"
            className="footer-contact-link"
          >
            <Icon name="phone" />

            <span>
              +66 2 026 4699
            </span>
          </a>

          <a
            href="mailto:hello@movago.co.th"
            className="footer-contact-link"
          >
            <Icon name="mail" />

            <span>
              hello@movago.co.th
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
}
