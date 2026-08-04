import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestPage from './test3/page'
import './style.css'

const rootElement =
  document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'ไม่พบ Element ที่มี id="root"',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <TestPage />
  </StrictMode>,
)