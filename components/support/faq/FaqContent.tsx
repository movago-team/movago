'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { FAQ_CATEGORIES, FAQ_ITEMS } from '@/data/support'
import FaqCategorySection from './FaqCategorySection'
import FaqContactSection from './FaqContactSection'
import FaqListSection from './FaqListSection'

export default function FaqContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const searchParams = useSearchParams()
  const searchQuery = (searchParams.get('q') || '').toLowerCase().trim()

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        item.question.toLowerCase().includes(searchQuery) ||
        item.answer.toLowerCase().includes(searchQuery)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="bg-[#F8F5EF]">
      <FaqCategorySection
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => setSelectedCategory(id)}
      />

      <FaqListSection
        items={filteredItems}
        selectedCategory={selectedCategory}
      />

      <FaqContactSection />
    </div>
  )
}
