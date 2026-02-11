import { NavLink } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Seo } from '@/shared/seo/Seo'
import { SectionLink } from '@/shared/ui'
import { ROUTES } from '@/shared/constants'
import { BASE_URL } from '@/shared/data/const'
import { useTranslation } from 'react-i18next'

export function HomePage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t('homePage.seo.title')}
                description={t('homePage.seo.description')}
                canonical="https://example.com/"
            />

            <div>

                {/* HERO */}
                <section className="relative flex min-h-screen items-start justify-center overflow-hidden border-b text-center pt-64">
                    <img
                        src={`${BASE_URL}/background.avif`}
                        alt=""
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        aria-hidden
                    />
                    <div className="absolute inset-0 bg-white/40 z-[1]" />

                    <div className="relative z-10 mx-auto max-w-3xl px-4">
                        <h1 className="mb-6 text-4xl font-semibold text-gray-900">
                            {t('homePage.hero.title')}
                        </h1>

                        <p className="mb-10 text-lg text-gray-800">
                            {t('homePage.hero.subtitle')}
                        </p>

                        <NavLink
                            to={ROUTES.services}
                            className="group inline-flex items-center justify-center gap-2 rounded bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            {t('homePage.hero.cta')}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </NavLink>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">

                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('homePage.services.title')}
                        </h2>

                        <p className="mb-8 max-w-2xl text-gray-700">
                            {t('homePage.services.description')}
                        </p>

                        <div className="flex flex-col gap-6">

                            <SectionLink
                                to={ROUTES.servicesStarters}
                                label={t('homePage.services.startersLabel')}
                                description={t('homePage.services.startersDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesGenerators}
                                label={t('homePage.services.generatorsLabel')}
                                description={t('homePage.services.generatorsDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesDiagnostics}
                                label={t('homePage.services.diagnosticsLabel')}
                                description={t('homePage.services.diagnosticsDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesWiring}
                                label={t('homePage.services.wiringLabel')}
                                description={t('homePage.services.wiringDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesMaintenance}
                                label={t('homePage.services.maintenanceLabel')}
                                description={t('homePage.services.maintenanceDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesMechanical}
                                label={t('homePage.services.mechanicalLabel')}
                                description={t('homePage.services.mechanicalDesc')}
                            />

                            <SectionLink
                                to={ROUTES.servicesPartsSelection}
                                label={t('homePage.services.partsSelectionLabel')}
                                description={t('homePage.services.partsSelectionDesc')}
                            />

                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('homePage.gallery.title')}
                        </h2>

                        <p className="mb-8 max-w-2xl text-gray-700">
                            {t('homePage.gallery.description')}
                        </p>

                        <div className="flex flex-col gap-4">
                            <SectionLink
                                to={ROUTES.galleryEquipment}
                                label={t('homePage.gallery.equipmentLabel')}
                                description={t('homePage.gallery.equipmentDesc')}
                            />
                            <SectionLink
                                to={ROUTES.galleryBeforeAfter}
                                label={t('homePage.gallery.beforeAfterLabel')}
                                description={t('homePage.gallery.beforeAfterDesc')}
                            />
                        </div>
                    </div>
                </section>

                {/* PAYMENT */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('homePage.payment.title')}
                        </h2>

                        <p className="mb-3 max-w-2xl text-gray-700">
                            {t('homePage.payment.description')}
                        </p>

                        <NavLink
                            to={ROUTES.paymentDelivery}
                            className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                        >
                            {t('homePage.payment.cta')}
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </NavLink>
                    </div>
                </section>

                {/* CONTACTS */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('homePage.contacts.title')}
                        </h2>

                        <p className="mb-3 max-w-2xl text-gray-700">
                            {t('homePage.contacts.description')}
                        </p>

                        <NavLink
                            to={ROUTES.contacts}
                            className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                        >
                            {t('homePage.contacts.cta')}
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </NavLink>
                    </div>
                </section>

            </div>
        </>
    )
}
