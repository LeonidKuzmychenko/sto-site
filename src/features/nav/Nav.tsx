import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ChevronDown, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { LanguageSwitch } from './LanguageSwitch'

type NavProps = {
    mobileOpen: boolean
    onClose: () => void
}

export function Nav({ mobileOpen, onClose }: NavProps) {
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

    /* =======================
       DESKTOP NAV
    ======================= */
    const DesktopNav = (
        <nav className="hidden md:flex items-center gap-8 h-full flex-1">
            <NavLink
                to={ROUTES.home}
                end
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                Головна
            </NavLink>

            {/* ПОСЛУГИ */}
            <div className="relative group h-full flex items-center">
                <NavLink
                    to={ROUTES.services}
                    className={`${navItem} ${isServicesActive ? activeUnderline : ''}`}
                >
                    Послуги
                    <ChevronDown
                        size={16}
                        className={`
                            transition-transform duration-200
                            ${isServicesActive ? 'rotate-180' : 'group-hover:rotate-180'}
                        `}
                    />
                </NavLink>

                <div className="
                    absolute left-0 top-full
                    hidden group-hover:block
                    min-w-52
                    rounded-md border
                    bg-white
                    shadow-sm
                ">
                    <NavLink
                        to={ROUTES.servicesStarters}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        Ремонт стартерів
                    </NavLink>

                    <NavLink
                        to={ROUTES.servicesGenerators}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        Ремонт генераторів
                    </NavLink>
                </div>
            </div>

            {/* ГАЛЕРЕЯ */}
            <div className="relative group h-full flex items-center">
                <NavLink
                    to={ROUTES.gallery}
                    className={`${navItem} ${isGalleryActive ? activeUnderline : ''}`}
                >
                    Галерея
                    <ChevronDown
                        size={16}
                        className={`
                            transition-transform duration-200
                            ${isGalleryActive ? 'rotate-180' : 'group-hover:rotate-180'}
                        `}
                    />
                </NavLink>

                <div className="
                    absolute left-0 top-full
                    hidden group-hover:block
                    min-w-52
                    rounded-md border
                    bg-white
                    shadow-sm
                ">
                    <NavLink
                        to={ROUTES.galleryEquipment}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        Наше обладнання
                    </NavLink>

                    <NavLink
                        to={ROUTES.galleryBeforeAfter}
                        className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 ${
                                isActive ? 'bg-gray-100 font-semibold' : ''
                            }`
                        }
                    >
                        До / Після
                    </NavLink>
                </div>
            </div>

            <NavLink
                to={ROUTES.paymentDelivery}
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                Оплата / Доставка
            </NavLink>

            <NavLink
                to={ROUTES.contacts}
                className={({ isActive }) =>
                    `${navItem} ${isActive ? activeUnderline : ''}`
                }
            >
                Контакти
            </NavLink>
        </nav>
    )

    /* =======================
       MOBILE OVERLAY (PORTAL)
    ======================= */
    const MobileOverlay =
        mobileOpen &&
        createPortal(
            <div className="fixed inset-0 z-[100] bg-white">
                {/* TOP BAR */}
                <div className="
                    flex h-16 items-center justify-between px-6
                    border-b border-slate-200
                ">
                    <LanguageSwitch />
                    <button onClick={onClose} aria-label="Close menu">
                        <X />
                    </button>
                </div>

                {/* MENU */}
                <nav className="
                    flex flex-col gap-6
                    px-6 py-8
                    text-base font-medium
                    border-t border-slate-100
                ">
                    <NavLink to={ROUTES.home} onClick={onClose}>
                        Головна
                    </NavLink>

                    {/* ПОСЛУГИ */}
                    <div>
                        <button
                            onClick={() => setServicesOpen(v => !v)}
                            className="flex w-full items-center justify-between"
                        >
                            <span>Послуги</span>
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
                                    Ремонт стартерів
                                </NavLink>
                                <NavLink to={ROUTES.servicesGenerators} onClick={onClose}>
                                    Ремонт генераторів
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* ГАЛЕРЕЯ */}
                    <div>
                        <button
                            onClick={() => setGalleryOpen(v => !v)}
                            className="flex w-full items-center justify-between"
                        >
                            <span>Галерея</span>
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
                                    Наше обладнання
                                </NavLink>
                                <NavLink to={ROUTES.galleryBeforeAfter} onClick={onClose}>
                                    До / Після
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to={ROUTES.paymentDelivery} onClick={onClose}>
                        Оплата / Доставка
                    </NavLink>

                    <NavLink to={ROUTES.contacts} onClick={onClose}>
                        Контакти
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
