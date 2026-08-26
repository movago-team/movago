import Link from 'next/link'
import Icon from '@/ui/icon'
import {
  FOOTER_BRAND,
  FOOTER_CONTACT,
  FOOTER_INFO_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SUPPORT_LINKS,
} from '@/constants/footer'
import { cn } from '@/utils/cn'
import { hoverTextGold, textGold } from '@/utils/ui/colors'

const linkClass = cn(
  'text-base leading-normal text-[#c4c5c1] no-underline transition-colors duration-200',
  hoverTextGold,
)

const headingClass =
  'mb-3.5 mt-0 text-base font-bold uppercase leading-tight tracking-[0.08em] text-white'

function FooterLinkItem({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')

  if (isExternal) {
    return (
      <a href={href} className={linkClass}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={linkClass}>
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#040606] py-10 text-white max-[700px]:py-9">
      <div
        className={cn(
          'page-width grid grid-cols-[1.55fr_0.85fr_0.9fr_0.85fr_1.15fr] items-start gap-[clamp(28px,3.8vw,60px)]',
          'max-[1050px]:grid-cols-[1.4fr_1fr_1fr_1fr]',
          'max-[700px]:grid-cols-2 max-[700px]:gap-x-5 max-[700px]:gap-y-7',
          'max-[430px]:grid-cols-1 max-[430px]:gap-6',
        )}
      >
        <div className="min-w-0 max-[700px]:col-span-full max-[430px]:col-auto">
          <Link
            href="/"
            className={cn(
              'mb-[18px] mt-[-16px] inline-flex items-center gap-0 text-white no-underline transition-opacity duration-200 hover:opacity-[0.92]',
              'max-[1050px]:mb-4 max-[1050px]:mt-[-14px]',
              'max-[700px]:mb-[15px] max-[700px]:mt-0',
              'max-[430px]:mb-3.5',
            )}
            aria-label="MOVAGO Home"
          >
            <img
              src="/images/brand/logo.png"
              alt="MOVAGO"
              className={cn(
                'mr-[-8px] block h-[90px] w-auto max-w-[110px] shrink-0 object-contain',
                'max-[1050px]:mr-[-6px] max-[1050px]:h-20 max-[1050px]:max-w-[100px]',
                'max-[700px]:mr-[-5px] max-[700px]:h-[74px] max-[700px]:max-w-[90px]',
                'max-[430px]:mr-[-4px] max-[430px]:h-[66px] max-[430px]:max-w-20',
              )}
            />
            <div className="flex flex-col justify-center gap-[3px]">
              <div
                className={cn(
                  'text-[30px] font-bold leading-[1.1] tracking-[0.10em] text-white',
                  'max-[1050px]:text-[28px]',
                  'max-[700px]:text-[26px]',
                  'max-[430px]:text-2xl',
                )}
              >
                {FOOTER_BRAND.name}
              </div>
              <div
                className={cn(
                  'text-[10px] font-semibold uppercase leading-[1.15] tracking-[0.14em]',
                  textGold,
                  'max-[1050px]:text-[9.5px]',
                  'max-[700px]:text-[9px]',
                  'max-[430px]:text-[8.5px]',
                )}
              >
                {FOOTER_BRAND.tagline}
              </div>
            </div>
          </Link>

          <p className="mb-[18px] mt-0 max-w-[290px] text-base leading-[1.65] text-[#b8b9b5]">
            Premium airport transfer and chauffeur
            <br />
            service in Thailand. Experience the
            <br />
            journey beyond expectation.
          </p>

          <div className="mt-[18px] flex items-center gap-3">
            {FOOTER_SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={cn(
                  'inline-flex size-[38px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#f0f0ed] no-underline',
                  'transition-all duration-200 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
                  'hover:-translate-y-0.5 hover:border-gold hover:bg-gold/15 hover:text-gold hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]',
                  'focus-visible:-translate-y-0.5 focus-visible:border-gold focus-visible:bg-gold/15 focus-visible:text-gold focus-visible:outline-none',
                )}
              >
                <Icon name={item.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h4 className={headingClass}>SERVICES</h4>
          {FOOTER_SERVICE_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h4 className={headingClass}>INFORMATION</h4>
          {FOOTER_INFO_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h4 className={headingClass}>SUPPORT</h4>
          {FOOTER_SUPPORT_LINKS.map((item) => (
            <FooterLinkItem key={item.label} href={item.href} label={item.label} />
          ))}
        </div>

        <div
          className={cn(
            'flex flex-col items-start gap-3',
            'max-[1050px]:col-[2/-1] max-[1050px]:mt-[15px]',
            'max-[700px]:col-span-full max-[700px]:mt-0',
            'max-[430px]:col-auto',
          )}
        >
          <h4 className={headingClass}>24/7 BOOKING &amp; SUPPORT</h4>

          <a
            href={FOOTER_CONTACT.phoneHref}
            className={cn(
              'inline-flex items-center gap-[11px] whitespace-nowrap text-base leading-snug text-[#f0f0ed] no-underline transition-colors duration-200',
              hoverTextGold,
            )}
          >
            <span className={cn('shrink-0', textGold)}>
              <Icon name="phone" size={16} />
            </span>
            <span>{FOOTER_CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={FOOTER_CONTACT.emailHref}
            className={cn(
              'inline-flex items-center gap-[11px] whitespace-nowrap text-base leading-snug text-[#f0f0ed] no-underline transition-colors duration-200',
              hoverTextGold,
            )}
          >
            <span className={cn('shrink-0', textGold)}>
              <Icon name="mail" size={16} />
            </span>
            <span>{FOOTER_CONTACT.email}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
