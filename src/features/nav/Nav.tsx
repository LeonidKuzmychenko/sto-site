import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ChevronDown, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSwitch } from './LanguageSwitch'

type NavProps = {
    mobileOpen: boolean
    onClose: () => void
}

export function Nav({ mobileOpen, onClose }: NavProps) {
    const { t } = useTranslation('widgets/header')
    const location = useLocation()

    const isServicesActive = location.pathname.startsWith(ROUTES.services)
    const isGalleryActive = location.pathname.startsWith(ROUTES.gallery)

    const [servicesOpen, setServicesOpen] = useState(false)
    const [galleryOpen, setGalleryOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])

    const navItem =
        'relative flex h-full items-center gap-1 px-1 text-sm font-medium transition-colors hover:text-blue-600'

    const activeUnderline =
        'after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600 after:content-[""]'

    /* ================= DESKTOP ================= */

    const DesktopNav = (
        <nav className="hidden md:flex items-center gap-8 h-full flex-1">
            <NavLink
                to={ROUTES.home}
                end
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                {t('nav.home')}
            </NavLink>

            {/* SERVICES */}
            <div className="relative group h-full flex items-center">
                <NavLink
                    to={ROUTES.services}
                    className={`${navItem} ${
                        isServicesActive ? activeUnderline : ''
                    }`}
                >
                    {t('nav.services')}
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                            isServicesActive ? 'rotate-180' : 'group-hover:rotate-180'
                        }`}
                    />
                </NavLink>

                <div className="absolute left-0 top-full hidden group-hover:block min-w-56 rounded-md border bg-white shadow-sm">

                    <NavLink
                        to={ROUTES.servicesStarters}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesStarters')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesGenerators}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesGenerators')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesMaintenance}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesMaintenance')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesMechanical}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesMechanical')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesDiagnostics}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesDiagnostics')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesPartsSelection}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesPartsSelection')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesWiring}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.servicesWiring')}
                    </NavLink>

                </div>
            </div>

            {/* GALLERY */}
            <div className="relative group h-full flex items-center">
                <NavLink
                    to={ROUTES.gallery}
                    className={`${navItem} ${
                        isGalleryActive ? activeUnderline : ''
                    }`}
                >
                    {t('nav.gallery')}
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                            isGalleryActive ? 'rotate-180' : 'group-hover:rotate-180'
                        }`}
                    />
                </NavLink>

                <div className="absolute left-0 top-full hidden group-hover:block min-w-52 rounded-md border bg-white shadow-sm">
                    <NavLink
                        to={ROUTES.galleryEquipment}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.galleryEquipment')}
                    </NavLink>

                    <NavLink
                        to={ROUTES.galleryBeforeAfter}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        {t('nav.galleryBeforeAfter')}
                    </NavLink>
                </div>
            </div>

            <NavLink
                to={ROUTES.paymentDelivery}
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                {t('nav.paymentDelivery')}
            </NavLink>

            <NavLink
                to={ROUTES.contacts}
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                {t('nav.contacts')}
            </NavLink>
        </nav>
    )

    /* ================= MOBILE ================= */

    const MobileOverlay =
        mobileOpen &&
        createPortal(
            <div className="fixed inset-0 z-[100] bg-white">

                <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200">
                    <LanguageSwitch />
                    <button onClick={onClose} aria-label={t('nav.closeMenu')}>
                        <X />
                    </button>
                </div>

                <nav className="flex flex-col gap-6 px-6 py-8 text-base font-medium border-t border-slate-100">

                    <NavLink to={ROUTES.home} onClick={onClose}>
                        {t('nav.home')}
                    </NavLink>

                    {/* SERVICES */}
                    <div>
                        <button
                            onClick={() => setServicesOpen(v => !v)}
                            className="flex w-full items-center justify-between"
                        >
                            <span>{t('nav.services')}</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                    servicesOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {servicesOpen && (
                            <div className="mt-4 ml-4 flex flex-col gap-4 text-sm text-gray-700">

                                <NavLink to={ROUTES.servicesStarters} onClick={onClose}>
                                    {t('nav.servicesStarters')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesGenerators} onClick={onClose}>
                                    {t('nav.servicesGenerators')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesMaintenance} onClick={onClose}>
                                    {t('nav.servicesMaintenance')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesMechanical} onClick={onClose}>
                                    {t('nav.servicesMechanical')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesDiagnostics} onClick={onClose}>
                                    {t('nav.servicesDiagnostics')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesPartsSelection} onClick={onClose}>
                                    {t('nav.servicesPartsSelection')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesWiring} onClick={onClose}>
                                    {t('nav.servicesWiring')}
                                </NavLink>

                            </div>
                        )}
                    </div>

                    {/* GALLERY */}
                    <div>
                        <button
                            onClick={() => setGalleryOpen(v => !v)}
                            className="flex w-full items-center justify-between"
                        >
                            <span>{t('nav.gallery')}</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                    galleryOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {galleryOpen && (
                            <div className="mt-4 ml-4 flex flex-col gap-4 text-sm text-gray-700">
                                <NavLink to={ROUTES.galleryEquipment} onClick={onClose}>
                                    {t('nav.galleryEquipment')}
                                </NavLink>
                                <NavLink to={ROUTES.galleryBeforeAfter} onClick={onClose}>
                                    {t('nav.galleryBeforeAfter')}
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to={ROUTES.paymentDelivery} onClick={onClose}>
                        {t('nav.paymentDelivery')}
                    </NavLink>

                    <NavLink to={ROUTES.contacts} onClick={onClose}>
                        {t('nav.contacts')}
                    </NavLink>

                </nav>
            </div>,
            document.body
        )

    return (
        <>
            {DesktopNav}
            {MobileOverlay}
        </>
    )
}
