import { NavLink } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { PrivacyTooltip } from '@/shared/ui'
import { MESSENGERS, SOCIAL_NETWORKS } from '@/shared/data/social'
import {ROUTES} from "@/shared/constants";

export default function Footer() {
    const { t } = useTranslation('footer')
    const year = new Date().getFullYear()

    const linkBase =
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
                        <section className="space-y-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                {t('footer.contacts.title')}
                            </h3>

                            <a
                                href="tel:+380XXXXXXXXX"
                                className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                            >
                                <Phone className="h-4 w-4 text-neutral-400" />
                                <span className="text-sm font-medium tracking-wide">
                                    {t('footer.contacts.phone')}
                                </span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-neutral-400 leading-6">
                                <MapPin className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                                <p>{t('footer.contacts.address')}</p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-wide text-neutral-500">
                                    {t('footer.contacts.messengers')}
                                </p>

                                <div className="flex gap-3">
                                    {MESSENGERS.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.label}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800/50 transition-colors hover:bg-neutral-700"
                                        >
                                            <img
                                                src={item.icon}
                                                alt=""
                                                className="h-5 w-5 object-contain"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-wide text-neutral-500">
                                    {t('footer.contacts.social')}
                                </p>

                                <div className="flex gap-3">
                                    {SOCIAL_NETWORKS.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.label}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800/50 transition-colors hover:bg-neutral-700"
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.label}
                                                className="h-5 w-5 object-contain"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* МЕНЮ */}
                        <section className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                {t('footer.menu.title')}
                            </h3>

                            <nav className="grid gap-3 text-sm">

                                <NavLink to={ROUTES.home} className={linkBase}>
                                    {t('footer.menu.home')}
                                </NavLink>

                                <NavLink to={ROUTES.galleryEquipment} className={linkBase}>
                                    {t('footer.menu.equipment')}
                                </NavLink>

                                <NavLink to={ROUTES.galleryBeforeAfter} className={linkBase}>
                                    {t('footer.menu.beforeAfter')}
                                </NavLink>

                                <NavLink to={ROUTES.paymentDelivery} className={linkBase}>
                                    {t('footer.menu.paymentDelivery')}
                                </NavLink>

                                <NavLink to={ROUTES.contacts} className={linkBase}>
                                    {t('footer.menu.contacts')}
                                </NavLink>

                            </nav>
                        </section>


                        {/* ПОСЛУГИ */}
                        <section className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                {t('footer.services.title')}
                            </h3>

                            <nav className="grid gap-3 text-sm">

                                <NavLink to={ROUTES.servicesStarters} className={linkBase}>
                                    {t('footer.services.starters')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesGenerators} className={linkBase}>
                                    {t('footer.services.generators')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesMaintenance} className={linkBase}>
                                    {t('footer.services.maintenance')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesMechanical} className={linkBase}>
                                    {t('footer.services.mechanical')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesDiagnostics} className={linkBase}>
                                    {t('footer.services.diagnostics')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesPartsSelection} className={linkBase}>
                                    {t('footer.services.partsSelection')}
                                </NavLink>

                                <NavLink to={ROUTES.servicesWiring} className={linkBase}>
                                    {t('footer.services.wiring')}
                                </NavLink>

                            </nav>
                        </section>


                        {/* ІНФОРМАЦІЯ */}
                        <section className="space-y-6 lg:border-l lg:border-neutral-800 lg:pl-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                {t('footer.info.title')}
                            </h3>

                            <div className="text-sm text-neutral-400 leading-6">
                                <p>{t('footer.info.company')}</p>
                                <p>{t('footer.info.description')}</p>
                            </div>

                            <PrivacyTooltip />
                        </section>
                    </div>

                    {/* НИЖНЯ ПОЛОСА */}
                    <div className="mt-12 border-t border-neutral-800 pt-6">
                        <div className="flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
                            <div>
                                © {year} {t('footer.bottom.copyright')}
                            </div>

                            <a
                                href="https://www.linkedin.com/in/leonid-kuzmychenko/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                            >
                                {t('footer.bottom.createdBy')}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
