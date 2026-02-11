import { NavLink } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

import { PrivacyTooltip } from '@/shared/ui'
import { SocialLink } from '@/shared/ui'
import { MESSENGERS, SOCIAL_NETWORKS } from '@/shared/data/social'

export default function Footer() {
    const year = new Date().getFullYear()

    const menuLink =
        'text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm'

    return (
        <footer
            className="mt-auto border-t border-neutral-800 bg-neutral-900 text-neutral-300"
            role="contentinfo"
        >
            <div className="mx-auto max-w-6xl px-4 py-14">

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-10 md:px-8">

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                        {/* КОНТАКТИ */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                Контакти
                            </h3>

                            <a
                                href="tel:+380XXXXXXXXX"
                                className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                            >
                                <Phone className="h-4 w-4 text-neutral-400" />
                                <span className="text-sm font-medium tracking-wide">
                  +380 XX XXX XX XX
                </span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-neutral-400 leading-6">
                                <MapPin className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                                <p>
                                    Одеська обл., Овідіопольський р-н, с. Прилиманське,
                                    вул. Центральна (Жовтнева), 170
                                </p>
                            </div>

                            {/* Месенджери */}
                            <div className="footer-links list-none space-y-2 text-sm">
                                {MESSENGERS.map((item) => (
                                    <SocialLink key={item.label} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* МЕНЮ */}
                        <div className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                Меню
                            </h3>

                            <nav className="grid gap-3 text-sm">
                                <NavLink to="/" className={menuLink}>Головна</NavLink>
                                <NavLink to="/services/starters" className={menuLink}>Ремонт стартерів</NavLink>
                                <NavLink to="/services/generators" className={menuLink}>Ремонт генераторів</NavLink>
                                <NavLink to="/gallery/equipment" className={menuLink}>Обладнання</NavLink>
                                <NavLink to="/gallery/before-after" className={menuLink}>До / Після</NavLink>
                                <NavLink to="/payment-delivery" className={menuLink}>Оплата і доставка</NavLink>
                                <NavLink to="/contacts" className={menuLink}>Контакти</NavLink>
                            </nav>
                        </div>

                        {/* СОЦМЕРЕЖІ */}
                        <div className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                Соцмережі
                            </h3>

                            <div className="footer-links list-none space-y-2 text-sm">
                                {SOCIAL_NETWORKS.map((item) => (
                                    <SocialLink key={item.label} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* ІНФО */}
                        <div className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                Інформація
                            </h3>

                            <div className="text-sm text-neutral-400 leading-6">
                                <p>СТО «Заказ»</p>
                                <p>Ремонт стартерів та генераторів</p>
                            </div>

                            <PrivacyTooltip />
                        </div>
                    </div>

                    <div className="mt-12 border-t border-neutral-800 pt-6">
                        <div className="flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
                            <div>© {year} СТО «Заказ». Всі права захищені.</div>

                            <a
                                href="https://www.linkedin.com/in/leonid-kuzmychenko/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                            >
                                Created by Leonid Kuzmychenko
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
