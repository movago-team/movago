'use client'

import { useEffect, useRef, useState } from 'react'
import { SUPPORT_CHANNELS } from '@/data/contact'
import { ContactFormState } from '@/types/contact'
import { Icon } from '@/ui'
import { cn } from '@/utils/cn'
import { textGold } from '@/utils/ui/colors'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Airport Transfer Booking',
  'Corporate Account Service',
  'Flight Delay / Reschedule',
  'Lost & Found',
  'Feedback & Compliments',
  'Other Inquiries',
]

export default function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({})
  const [isSubjectOpen, setIsSubjectOpen] = useState(false)
  const subjectDropdownRef = useRef<HTMLDivElement>(null)

  // Close subject dropdown on click outside or Escape key
  useEffect(() => {
    if (!isSubjectOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (subjectDropdownRef.current && !subjectDropdownRef.current.contains(e.target as Node)) {
        setIsSubjectOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSubjectOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSubjectOpen])

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormState, string>> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitted(false)
    setErrors({})
  }

  return (
    <section className="bg-[#F8F5EF] pt-0 pb-3 sm:pb-4 lg:pb-5">
      <div className="page-width relative z-30 -mt-16 sm:-mt-20 lg:-mt-24">
        {/* Outer Rounded Container Card with Background matching Page Background (#F8F5EF) & Taller Height */}
        <div className="rounded-[32px] border-2 border-[#C5BBA7] bg-[#F8F5EF] p-7 sm:p-9 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-11 items-start">
            {/* Left Column: 6 Contact Channel Cards (7 cols on desktop) */}
            <div className="lg:col-span-7">
              <div className={cn('text-xs font-bold uppercase tracking-[0.10em]', textGold)}>
                NEED IMMEDIATE ASSISTANCE?
              </div>
              <h2 className="m-0 mt-2.5 font-sans text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-[#111311]">
                Contact Us Anytime
              </h2>

              {/* 2x3 Channel Cards Grid with Taller Height and High-Clarity Icons */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5.5">
                {SUPPORT_CHANNELS.map((item) => {
                  const isExternal = item.href.startsWith('http')
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="group flex min-h-[136px] sm:min-h-[144px] items-center gap-5 rounded-2xl border-2 border-[#9C917C] bg-[#F8F5EF] p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_8px_24px_rgba(197,160,115,0.2)] no-underline text-inherit"
                    >
                      {/* Large Standalone High-Clarity Icons */}
                      <span className="flex size-12 sm:size-14 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        {item.id === 'line' ? (
                          <span className="flex size-11 sm:size-12 items-center justify-center rounded-2xl bg-[#06C755] text-white font-black text-sm sm:text-base shadow-[0_4px_14px_rgba(6,199,85,0.3)]">
                            LINE
                          </span>
                        ) : item.id === 'whatsapp' ? (
                          <svg className="size-11 sm:size-12" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#25D366" />
                            <path d="M25.5 21.2c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.1c.2.3 2.8 4.3 6.9 6 .9.4 1.7.7 2.3.9 1 .3 1.8.3 2.5.2.8-.1 2.4-1 2.7-1.9.4-.9.4-1.7.3-1.9-.1-.2-.4-.3-.8-.5z" fill="#fff" />
                          </svg>
                        ) : item.id === 'call' ? (
                          <svg
                            className="size-9 sm:size-10 text-[#C5A073]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        ) : item.id === 'email' ? (
                          <svg
                            className="size-9 sm:size-10 text-[#C5A073]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="m3 7 9 6 9-6" />
                          </svg>
                        ) : item.id === 'chat' ? (
                          <svg
                            className="size-9 sm:size-10 text-[#C5A073]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        ) : (
                          <svg
                            className="size-9 sm:size-10 text-[#C5A073]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="4" y="2" width="16" height="20" rx="2" />
                            <path d="M9 22v-4h6v4" />
                            <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" strokeWidth="2.5" />
                          </svg>
                        )}
                      </span>

                      {/* Right: Title, Value, Sub matching Image 2 with clear hierarchy */}
                      <div className="min-w-0 flex-1">
                        <div className="font-sans text-sm sm:text-[15px] font-bold text-[#111311] leading-snug">
                          {item.title}
                        </div>
                        <div className="font-sans text-[14.5px] font-semibold text-[#222420] mt-1 break-words group-hover:text-champagne transition-colors">
                          {item.value}
                        </div>
                        <div className="text-xs text-[#8C8F86] mt-0.5 leading-relaxed">
                          {item.sub}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Luxury Form Card (#FAF7F2), Refined Accents, and 100% Unified Inputs */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border-2 border-[#9C917C] bg-[#FAF8F5] p-7 sm:p-8 lg:p-9 text-[#111311] shadow-[0_12px_32px_rgba(0,0,0,0.06)] z-20">
                {/* Subtle Luxury Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                <div className="mb-6">
                  <h3 className="m-0 font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#111311]">
                    Send Us a Message
                  </h3>
                  <p className="m-0 mt-1.5 text-xs text-[#767870] leading-relaxed">
                    Fill in the form and our team will get back to you.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-xl border border-gold/40 bg-gold/10 p-6 text-center">
                    <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-gold text-[#111311] mb-3">
                      <Icon name="check" size={24} />
                    </span>
                    <h4 className="m-0 font-sans text-lg font-bold text-[#111311]">
                      Message Received
                    </h4>
                    <p className="m-0 mt-2 text-xs text-[#666860] leading-relaxed">
                      Thank you for contacting MOVAGO Executive Support. Our concierge specialist will review your request and reply shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-[#111311] transition-all hover:bg-gold-hover cursor-pointer border-0"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4.5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#222420] mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className={cn(
                          'h-12 w-full rounded-xl border-0 border-none bg-white px-4 text-sm text-[#111311] placeholder:text-[#9A9C94] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/60',
                          errors.fullName && 'ring-2 ring-red-400',
                        )}
                      />
                      {errors.fullName && (
                        <span className="mt-1 block text-[11px] text-red-500">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#222420] mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className={cn(
                          'h-12 w-full rounded-xl border-0 border-none bg-white px-4 text-sm text-[#111311] placeholder:text-[#9A9C94] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/60',
                          errors.email && 'ring-2 ring-red-400',
                        )}
                      />
                      {errors.email && (
                        <span className="mt-1 block text-[11px] text-red-500">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#222420] mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="h-12 w-full rounded-xl border-0 border-none bg-white px-4 text-sm text-[#111311] placeholder:text-[#9A9C94] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/60"
                      />
                    </div>

                    {/* Subject Select - 100% Matched MOVAGO Theme Dropdown */}
                    <div ref={subjectDropdownRef} className="relative">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold text-[#222420] mb-1.5"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>

                      {/* Dropdown Trigger Button (Identical h-12, bg-white, borderless, shadow to other inputs) */}
                      <button
                        id="subject"
                        type="button"
                        onClick={() => setIsSubjectOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isSubjectOpen}
                        className={cn(
                          'flex h-12 w-full items-center justify-between rounded-xl border-0 border-none bg-white px-4 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/60',
                          !formData.subject ? 'text-[#9A9C94]' : 'text-[#111311] font-medium',
                          errors.subject && 'ring-2 ring-red-400',
                        )}
                      >
                        <span className="truncate">{formData.subject || 'Select a subject'}</span>
                        <span
                          className={cn(
                            'text-gold transition-transform duration-200 ml-2 shrink-0',
                            isSubjectOpen && 'rotate-180',
                          )}
                        >
                          <Icon name="chevron-down" size={16} />
                        </span>
                      </button>

                      {/* MOVAGO Luxury White & Soft Gold Popover Dropdown Menu */}
                      {isSubjectOpen && (
                        <div
                          role="listbox"
                          className="absolute top-[calc(100%+6px)] left-0 right-0 z-[100] overflow-hidden rounded-xl border-2 border-[#C5A073] bg-white py-2 shadow-[0_20px_50px_rgba(0,0,0,0.22)] ring-1 ring-black/5 max-h-64 overflow-y-auto"
                        >
                          {SUBJECT_OPTIONS.map((opt) => {
                            const isSelected = formData.subject === opt
                            return (
                              <div
                                key={opt}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setFormData({ ...formData, subject: opt })
                                  setIsSubjectOpen(false)
                                  if (errors.subject) {
                                    setErrors((prev) => ({ ...prev, subject: undefined }))
                                  }
                                }}
                                className={cn(
                                  'flex items-center justify-between px-4 py-2.5 text-sm transition-colors cursor-pointer',
                                  isSelected
                                    ? 'bg-[#FAF5ED] font-semibold text-[#B38F62]'
                                    : 'text-[#2D312E] hover:bg-[#FAF6F0] hover:text-[#B38F62]',
                                )}
                              >
                                <span className="truncate">{opt}</span>
                                {isSelected && (
                                  <span className="text-[#C5A073] ml-2 shrink-0">
                                    <Icon name="check" size={16} />
                                  </span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}

                      {errors.subject && (
                        <span className="mt-1 block text-[11px] text-red-500">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[#222420] mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message here..."
                        className={cn(
                          'w-full rounded-xl border-0 border-none bg-white p-4 text-sm text-[#111311] placeholder:text-[#9A9C94] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/60 resize-none',
                          errors.message && 'ring-2 ring-red-400',
                        )}
                      />
                      {errors.message && (
                        <span className="mt-1 block text-[11px] text-red-500">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button - Solid Gold Box */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{ backgroundColor: '#C5A073' }}
                        className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl !bg-[#C5A073] hover:!bg-[#B38F62] text-sm font-bold text-[#111311] shadow-[0_8px_24px_rgba(197,160,115,0.4)] hover:shadow-[0_10px_28px_rgba(197,160,115,0.5)] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer border-0"
                      >
                        <span>{isSubmitting ? 'Sending Message…' : 'Send Message'}</span>
                        <Icon name="send" size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
