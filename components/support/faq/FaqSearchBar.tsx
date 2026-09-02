'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import Icon from '@/ui/icon'

export default function FaqSearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const query = searchParams.get('q') || ''

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  return (
    <div
      className="relative mt-6 flex h-[52px] w-full max-w-[620px] items-center rounded-xl bg-[#131518]/95 px-5 sm:px-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all hover:border-[#4B5056] focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/20"
      style={{ border: '1px solid #383B3E' }}
    >
      <input
        type="text"
        defaultValue={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for answers..."
        className="h-full w-full border-0 border-none bg-transparent pr-4 font-sans text-[15px] text-white placeholder:text-[#8E9296] shadow-none outline-none ring-0 focus:border-0 focus:border-none focus:outline-none focus:ring-0 focus-visible:outline-none"
        style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
      />
      <span className="pointer-events-none flex size-5 shrink-0 items-center justify-center text-white/80">
        <Icon name="search" size={20} />
      </span>
    </div>
  )
}
