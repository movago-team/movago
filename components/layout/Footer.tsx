import Link from 'next/link'
import Icon from '@/components/ui/icon'
import {
  FOOTER_BRAND,
  FOOTER_CONTACT,
  FOOTER_INFO_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SUPPORT_LINKS,
} from '@/constants/footer'

function FooterLinkItem({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')

  if (isExternal) {
    return <a href={href}>{label}</a>
  }

  return <Link href={href}>{label}</Link>
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="MOVAGO Home">
            <div className="footer-logo-main">{FOOTER_BRAND.name}</div>
            <div className="footer-logo-sub">{FOOTER_BRAND.tagline}</div>
          </Link>

          <p>
            Premium airport transfer and chauffeur
            <br />
            service in Thailand. Experience the
            <br />
            journey beyond expectation.
          </p>

          <div className="footer-social">
            {FOOTER_SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {item.symbol}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-menu">
          <h4>SERVICES</h4>
          {FOOTER_SERVICE_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="footer-menu">
          <h4>INFORMATION</h4>
          {FOOTER_INFO_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="footer-menu">
          <h4>SUPPORT</h4>
          {FOOTER_SUPPORT_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="footer-contact-column">
          <h4>24/7 BOOKING &amp; SUPPORT</h4>

          <a href={FOOTER_CONTACT.phoneHref} className="footer-contact-link">
            <Icon name="phone" />
            <span>{FOOTER_CONTACT.phoneDisplay}</span>
          </a>

          <a href={FOOTER_CONTACT.emailHref} className="footer-contact-link">
            <Icon name="mail" />
            <span>{FOOTER_CONTACT.email}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
