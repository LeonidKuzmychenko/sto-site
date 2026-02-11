import { useState, useCallback } from 'react'

export function useMobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const open = useCallback(() => setMobileOpen(true), [])
  const close = useCallback(() => setMobileOpen(false), [])
  const toggle = useCallback(() => setMobileOpen((v) => !v), [])

  return { mobileOpen, open, close, toggle }
}
