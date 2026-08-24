'use client'

import { useState } from 'react'

type Lang = 'EN' | 'TH'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>('EN')

  return (
    <button
      type="button"
      className="lang-btn"
      onClick={() => setLang(lang === 'EN' ? 'TH' : 'EN')}
      aria-label="Change language"
    >
      <span>{lang}</span>
      <span className="nav-chevron" aria-hidden="true" />
    </button>
  )
}
