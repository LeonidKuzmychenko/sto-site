import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

export function Nav() {
    const { i18n } = useTranslation()
    const location = useLocation()

    const isServicesActive = location.pathname.startsWith('/services')
    const isGalleryActive = location.pathname.startsWith('/gallery')

    const navItem =
        'relative flex h-full items-center gap-1 px-1 transition-colors hover:text-blue-600'

    const activeUnderline =
        'after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600 after:content-[""]'

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-sm font-medium">

                {/* ЛЕВАЯ ЧАСТЬ — МЕНЮ */}
                <div className="flex h-full items-center gap-8">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeUnderline : ''}`
                        }
                    >
                        Головна
                    </NavLink>

                    {/* УСЛУГИ */}
                    <div className="relative group flex h-full items-center">
                        <NavLink
                            to="/services"
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

                        <div className="absolute left-0 top-full hidden min-w-48 rounded-md border bg-white shadow-md group-hover:block">
                            <NavLink
                                to="/services/starters"
                                className={({ isActive }) =>
                                    `block px-4 py-2 hover:bg-gray-100 ${
                                        isActive ? 'bg-gray-100 font-semibold' : ''
                                    }`
                                }
                            >
                                Ремонт стартерів
                            </NavLink>

                            <NavLink
                                to="/services/generators"
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
                    <div className="relative group flex h-full items-center">
                        <NavLink
                            to="/gallery"
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

                        <div className="absolute left-0 top-full hidden min-w-48 rounded-md border bg-white shadow-md group-hover:block">
                            <NavLink
                                to="/gallery/equipment"
                                className={({ isActive }) =>
                                    `block px-4 py-2 hover:bg-gray-100 ${
                                        isActive ? 'bg-gray-100 font-semibold' : ''
                                    }`
                                }
                            >
                                Наше обладнання
                            </NavLink>

                            <NavLink
                                to="/gallery/before-after"
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
                        to="/payment-delivery"
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeUnderline : ''}`
                        }
                    >
                        Оплата / Доставка
                    </NavLink>

                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeUnderline : ''}`
                        }
                    >
                        Контакти
                    </NavLink>
                </div>

                {/* ПРАВАЯ ЧАСТЬ — ЯЗЫК */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => i18n.changeLanguage('ua')}
                        className={i18n.language === 'ua' ? 'font-bold' : 'opacity-60'}
                    >
                        UA
                    </button>

                    <span className="opacity-30">|</span>

                    <button
                        onClick={() => i18n.changeLanguage('ru')}
                        className={i18n.language === 'ru' ? 'font-bold' : 'opacity-60'}
                    >
                        RU
                    </button>
                </div>
            </div>
        </nav>
    )
}
