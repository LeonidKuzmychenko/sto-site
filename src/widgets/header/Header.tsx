import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitch } from '@/features/nav/LanguageSwitch'
import { Nav } from '@/features/nav/Nav'
import { useMobileMenu } from '@/shared/hooks/useMobileMenu'
import { BASE_URL } from '@/shared/data/const'

export default function Header() {
    const { mobileOpen, open, close } = useMobileMenu()
    const { t } = useTranslation('widgets/header')

    const phone = t('header.phone')

    return (
        <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto max-w-6xl h-full px-6 flex items-center">

                {/* COMPANY */}
                <div className="flex items-center">
                    <img
                        src={`${BASE_URL}/favicon.svg`}
                        alt={t('header.logoAlt')}
                        className="h-8 w-auto"
                    />
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
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="hidden md:block font-medium text-sm whitespace-nowrap"
                >
                    {phone}
                </a>

                {/* ===== MOBILE RIGHT SIDE ===== */}
                <div className="ml-auto flex items-center gap-4 md:hidden">

                    {/* PHONE (mobile) */}
                    <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-sm font-medium whitespace-nowrap"
                    >
                        {phone}
                    </a>

                    {/* LANGUAGE */}
                    <LanguageSwitch />

                    {/* BURGER */}
                    <button
                        onClick={open}
                        aria-label={t('header.openMenu')}
                    >
                        <Menu />
                    </button>
                </div>
            </div>
        </header>
    )
}
