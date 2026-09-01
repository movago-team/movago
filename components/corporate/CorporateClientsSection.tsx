'use client'

import { CORPORATE_CLIENTS } from '@/data/corporate'
import { textGold } from '@/utils/ui/colors'
import { cn } from '@/utils/cn'

export default function CorporateClientsSection() {
  return (
    <section className="bg-[#f8f5ef] pt-12 pb-4 sm:pt-14 sm:pb-5">
      <div className="page-width">
        {/* Eyebrow */}
        <div className="text-center mb-8 sm:mb-9">
          <div
            className={cn(
              'font-sans text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase',
              textGold,
            )}
          >
            TRUSTED BY LEADING COMPANIES
          </div>
        </div>

        {/* Corporate Client Logos — Equal spacing between all logos */}
        <div className="flex flex-wrap items-center justify-center gap-y-7 gap-x-6 sm:gap-x-8 lg:justify-between lg:gap-x-5 xl:gap-x-7">
          {/* 1. SCG */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 100 28" className="h-8 sm:h-9 lg:h-10 w-auto fill-current">
              {/* Hexagon icon */}
              <polygon
                points="11,2 20,7.5 20,18.5 11,24 2,18.5 2,7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="11" cy="13" r="3.5" />
              <line x1="11" y1="2" x2="11" y2="9.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11" y1="16.5" x2="11" y2="24" stroke="currentColor" strokeWidth="1.5" />
              <line x1="2" y1="7.5" x2="8" y2="11" stroke="currentColor" strokeWidth="1.5" />
              <line x1="14" y1="15" x2="20" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="2" y1="18.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" />
              <line x1="14" y1="11" x2="20" y2="7.5" stroke="currentColor" strokeWidth="1.5" />
              {/* Text SCG */}
              <text
                x="28"
                y="19"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="16.5"
                letterSpacing="1"
              >
                SCG
              </text>
            </svg>
          </div>

          {/* 2. Bangkok Bank */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 135 28" className="h-8 sm:h-9 lg:h-10 w-auto fill-current">
              {/* Lotus petal emblem */}
              <path
                d="M12 2 C6 8 3 14 3 18 C3 23 7 26 12 26 C17 26 21 23 21 18 C21 14 18 8 12 2 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              <path d="M12 9 C9 13.5 8 16 8 18 C8 20.5 9.5 22 12 22 C14.5 22 16 20.5 16 18 C16 16 15 13.5 12 9 Z" />
              {/* Text */}
              <text
                x="28"
                y="18.5"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="12.5"
                letterSpacing="0.4"
              >
                Bangkok Bank
              </text>
            </svg>
          </div>

          {/* 3. SANSIRI */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 130 28" className="h-7 sm:h-8 lg:h-8.5 w-auto" fill="currentColor">
              {/* Horizontal stacked barcode lines emblem */}
              <rect x="2" y="4.5" width="13" height="2.2" rx="0.5" />
              <rect x="0" y="8" width="17" height="2.2" rx="0.5" />
              <rect x="0" y="11.5" width="17" height="2.2" rx="0.5" />
              <rect x="0" y="15" width="17" height="2.2" rx="0.5" />
              <rect x="0" y="18.5" width="17" height="2.2" rx="0.5" />
              <rect x="2" y="22" width="13" height="2.2" rx="0.5" />
              {/* Text SANSIRI */}
              <text
                x="26"
                y="19"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="14"
                letterSpacing="2.8"
                fill="currentColor"
              >
                SANSIRI
              </text>
            </svg>
          </div>

          {/* 4. ptt */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 75 28" className="h-8 sm:h-9 lg:h-10 w-auto" fill="currentColor">
              {/* PTT teardrop / flame circle */}
              <path d="M12 2 C8 7.5 4 12.5 4 17.5 A8 8 0 0 0 20 17.5 C20 12.5 16 7.5 12 2 Z M12 13.5 A4 4 0 1 1 12 21.5 A4 4 0 0 1 12 13.5 Z" />
              {/* Italic ptt */}
              <text
                x="24"
                y="20.5"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontStyle="italic"
                fontSize="17.5"
                letterSpacing="-0.5"
                fill="currentColor"
              >
                ptt
              </text>
            </svg>
          </div>

          {/* 5. ThaiBev */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 85 28" className="h-8 sm:h-9 lg:h-10 w-auto" fill="currentColor">
              {/* ThaiBev text */}
              <text
                x="2"
                y="14"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="14.5"
                letterSpacing="-0.2"
                fill="currentColor"
              >
                ThaiBev
              </text>
              {/* Under-swoosh curves */}
              <path d="M14 17 C28 17 50 18 64 24 C44 24.5 24 22 14 17 Z" />
              <path d="M30 19.5 C48 20.5 66 23.5 76 25 C60 26.5 40 24.5 30 19.5 Z" opacity="0.65" />
            </svg>
          </div>

          {/* 6. AIA */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 45 32" className="h-9 sm:h-10 lg:h-11 w-auto" fill="currentColor">
              {/* Arch Dome */}
              <path
                d="M4 17 A14 14 0 0 1 32 17"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              {/* Mountain Peaks */}
              <path d="M6 17 L12 9 L17 14 L22 8 L29 17 Z" />
              {/* AIA Text */}
              <text
                x="18"
                y="27"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="9"
                letterSpacing="0.8"
                fill="currentColor"
              >
                AIA
              </text>
            </svg>
          </div>

          {/* 7. SAMSUNG */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 115 28" className="h-6 sm:h-7 lg:h-8 w-auto" fill="currentColor">
              <text
                x="0"
                y="20"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontSize="17.5"
                letterSpacing="2.2"
                fill="currentColor"
              >
                SAMSUNG
              </text>
            </svg>
          </div>

          {/* 8. DHL */}
          <div className="flex h-12 sm:h-14 items-center justify-center text-[#555953] transition-colors duration-200 hover:text-[#111311]">
            <svg viewBox="0 0 85 24" className="h-7 sm:h-8 lg:h-8.5 w-auto fill-current">
              {/* Speed stripes and slanted DHL */}
              <line x1="0" y1="18.5" x2="10" y2="18.5" stroke="currentColor" strokeWidth="2.5" />
              <line x1="72" y1="18.5" x2="82" y2="18.5" stroke="currentColor" strokeWidth="2.5" />
              <text
                x="13"
                y="19"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontStyle="italic"
                fontSize="19"
                letterSpacing="1"
              >
                DHL
              </text>
            </svg>
          </div>
        </div>

        {/* Subtext */}
        <div className="mt-4.5 text-center">
          <span className="font-sans text-xs sm:text-[13px] text-[#8e918b] italic">
            and many more
          </span>
        </div>
      </div>
    </section>
  )
}
