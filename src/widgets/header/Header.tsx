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
                    {/* COMPANY */}
                    <div className="font-semibold text-lg whitespace-nowrap">
                        STO
                    </div>

                    <div className="w-16 hidden md:block" />

                    {/* LANGUAGE (desktop) */}
                    <div className="hidden md:block">
                        <LanguageSwitch />
                    </div>

                    <div className="w-16 hidden md:block" />

                    {/* DESKTOP NAV */}
                    <Nav mobileOpen={mobileOpen} onClose={close} />

                    <div className="w-6 hidden md:block" />

                    {/* PHONE (desktop) */}
                    <a
                        href="tel:+380XXXXXXXXX"
                        className="hidden md:block font-medium text-sm whitespace-nowrap"
                    >
                        +380 XX XXX XX XX
                    </a>

                    {/* ===== MOBILE TOOLBAR RIGHT SIDE ===== */}
                    <div className="ml-auto flex items-center gap-4 md:hidden">
                        {/* PHONE (mobile) */}
                        <a
                            href="tel:+380XXXXXXXXX"
                            className="text-sm font-medium whitespace-nowrap"
                        >
                            +380 XX XXX XX XX
                        </a>

                        {/* LANGUAGE (mobile) */}
                        <LanguageSwitch />

                        {/* BURGER */}
                        <button
                            onClick={open}
                            aria-label="Open menu"
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
