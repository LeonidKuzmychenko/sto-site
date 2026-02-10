import { Menu } from 'lucide-react'
import { LanguageSwitch } from '@/features/nav/LanguageSwitch'
import { Nav } from '@/features/nav/Nav'
import { useMobileMenu } from '@/shared/hooks/useMobileMenu'

export default function Header() {
  const { mobileOpen, open, close } = useMobileMenu()

    return (
        <>
            <header
                className="
                    fixed top-0 left-0 right-0 z-40
                    h-16 bg-white/80 backdrop-blur
                    border-b border-slate-200
                "
            >
                <div
                    className="
                        mx-auto max-w-6xl h-full px-6
                        flex items-center
                    "
                >
                    <div className="font-semibold text-lg whitespace-nowrap">
                        STO
                    </div>

                    <div className="w-16" />

                    <LanguageSwitch />

                    <div className="w-16" />

                    {/* DESKTOP NAV */}
                    <Nav mobileOpen={mobileOpen} onClose={close} />

                    <div className="w-6" />

                    <a
                        href="tel:+380XXXXXXXXX"
                        className="hidden md:block font-medium text-sm whitespace-nowrap"
                    >
                        +380 XX XXX XX XX
                    </a>

                    {/* BURGER */}
                    <button
                      onClick={open}
                      className="md:hidden ml-auto"
                      aria-label="Open menu"
                    >
                        <Menu />
                    </button>
                </div>
            </header>
        </>
    )
}
