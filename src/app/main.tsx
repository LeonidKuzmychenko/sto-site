import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../shared/styles/index.css'

import '../shared/providers/i18n.ts'; // КРИТИЧНО: импорт до рендера

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
