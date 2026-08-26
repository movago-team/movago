import Icon from '@/components/ui/icon'

export default function AboutLeadershipSection() {
  return (
    <section className="about-leadership bg-[#f7f4ed] py-14 lg:py-20">
      <div className="page-width">
        {/* Centered Section Header */}
        <div className="about-section-heading text-center mb-11">
          <span className="eyebrow about-eyebrow block text-[13px] font-bold tracking-[0.1em] text-[#a37c44] mb-2">
            OUR LEADERSHIP
          </span>
          <h2 className="about-heading-title about-heading-dark text-[26px] sm:text-[clamp(28px,2.6vw,36px)] font-bold text-[#121414] mt-2 leading-[1.2]">
            Driven by Experience, Focused on You
          </h2>
          <div className="about-title-accent about-title-accent-center w-11 h-[3px] bg-gold rounded-sm mx-auto mt-3.5 mb-9.5" aria-hidden="true" />
        </div>

        {/* 3-Column Layout: Photo | Philosophy & Signature | Dark Quote Card */}
        <div className="about-leadership-grid grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_0.95fr] gap-8 items-center">
          {/* Left: Leadership Photo */}
          <div className="about-lead-media rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] h-[260px] lg:h-[270px] max-w-[480px] lg:max-w-none w-full">
            <img
              src="/images/about/leadership-team.jpg"
              alt="MOVAGO Executive Leadership Team"
              className="about-lead-img w-full h-full object-cover object-[top_center]"
            />
          </div>

          {/* Center: Philosophy & Signature */}
          <div className="about-lead-copy">
            <div className="space-y-4 text-[15px] leading-[1.65] text-[#434645]">
              <p className="m-0">
                Our leadership team brings together expertise in hospitality, transportation, technology, and customer experience.
              </p>
              <p className="m-0">
                Together, we drive MOVAGO forward with innovation, passion, and a relentless focus on delivering exceptional journeys for every client.
              </p>
            </div>

            <div className="about-lead-signature-wrap mt-5.5 flex flex-col gap-1">
              <span className="about-lead-signature font-serif italic text-[22px] font-medium text-[#a37c44] leading-tight">
                The MOVAGO Leadership Team
              </span>
              <span className="about-lead-role text-xs font-semibold text-[#767973] tracking-wider uppercase">
                The MOVAGO Leadership Team
              </span>
            </div>
          </div>

          {/* Right: Dark Quote Card */}
          <div className="about-lead-quote-card bg-[#101313] border border-white/10 rounded-xl p-6 sm:p-7 shadow-[0_14px_34px_rgba(0,0,0,0.25)] flex flex-col gap-4">
            <div className="about-lead-quote-icon text-gold inline-flex">
              <Icon name="quote" size={24} />
            </div>
            <blockquote className="about-lead-quote-text text-base leading-[1.6] text-white font-medium m-0 not-italic">
              &ldquo;At MOVAGO, we don&apos;t just move people from one place to another — we elevate every journey.&rdquo;
            </blockquote>
            <div className="about-quote-accent w-9 h-[3px] bg-gold rounded-sm" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
