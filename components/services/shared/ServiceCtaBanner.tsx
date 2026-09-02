import Link from 'next/link'
import Image from 'next/image'
import { ServiceCTA } from '@/types/services'
import Icon from '@/ui/icon'
import { cn } from '@/utils/cn'
import { bgGold, bgGoldHover } from '@/utils/ui/colors'

export interface ServiceCtaBannerProps {
  data: ServiceCTA
}

export default function ServiceCtaBanner({ data }: ServiceCtaBannerProps) {
  return (
    <section className="bg-[#F8F5EF] pb-20 sm:pb-24 lg:pb-28">
      <div className="page-width">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0f10] shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image */}
            <div className="relative h-64 sm:h-72 lg:h-full min-h-[260px] lg:min-h-[290px] w-full lg:col-span-4 overflow-hidden">
              <Image
                src={data.image || '/images/vehicles/vehicle-cta-chauffeur.jpg'}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-[35%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#0c0f10]" />
            </div>

            {/* Center Content */}
            <div className="p-6 sm:p-8 lg:py-10 lg:pl-10 lg:pr-4 lg:col-span-5 flex flex-col justify-center">
              <h2 className="m-0 font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-white leading-snug">
                {data.title}
              </h2>
              <p className="m-0 mt-3 text-xs sm:text-sm text-[#C4C7BE] leading-relaxed max-w-md font-sans">
                {data.description}
              </p>
              <div className="mt-5 sm:mt-6">
                <Link
                  href={data.buttonHref}
                  className={cn(
                    'inline-flex h-11 sm:h-12 items-center justify-center gap-2.5 rounded-xl px-6 text-xs sm:text-sm font-semibold text-black transition-all hover:-translate-y-0.5 no-underline shadow-none font-sans',
                    bgGold,
                    bgGoldHover,
                  )}
                >
                  <span>{data.buttonText}</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </div>

            {/* Right Checklist - Larger text & circular gold framed check icons */}
            <div className="p-6 sm:p-8 lg:py-10 lg:pr-10 lg:pl-4 lg:col-span-3 border-t lg:border-t-0 border-white/10 flex flex-col justify-center">
              <ul className="m-0 p-0 list-none space-y-4">
                {data.checkmarks.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-[15px] font-medium text-white font-sans">
                    <span className="shrink-0 text-[#C5A073]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
