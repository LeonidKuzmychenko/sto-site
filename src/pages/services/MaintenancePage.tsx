import { Seo } from '@/shared/seo/Seo'
import { Wrench, Clock, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function MaintenancePage() {
    const { t } = useTranslation('services/maintenance')

    const whenIndexes = [0, 1, 2]

    return (
        <>
            <Seo
                title={t('maintenancePage.seo.title')}
                description={t('maintenancePage.seo.description')}
                canonical={t('maintenancePage.seo.canonical')}
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        {t('maintenancePage.h1')}
                    </h1>

                    {/* Intro */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            {t('maintenancePage.intro.p1')}
                        </p>
                        <p className="text-gray-700">
                            {t('maintenancePage.intro.p2')}
                        </p>
                    </section>

                    {/* Includes */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('maintenancePage.includes.title')}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            {[
                                { key: 'oilChange', Icon: Wrench },
                                { key: 'filters', Icon: Settings },
                                { key: 'electrical', Icon: Settings },
                                { key: 'scheduledChecks', Icon: Clock }
                            ].map(({ key, Icon }) => (
                                <div
                                    key={key}
                                    className="rounded border border-gray-200 p-6"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-blue-600" />
                                        <h3 className="font-medium text-gray-900">
                                            {t(
                                                `maintenancePage.includes.${key}.title`
                                            )}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t(
                                            `maintenancePage.includes.${key}.description`
                                        )}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* When */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('maintenancePage.when.title')}
                        </h2>

                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            {whenIndexes.map((i) => (
                                <li key={i}>
                                    {t(`maintenancePage.when.items.${i}`)}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('maintenancePage.cta.title')}
                        </h2>
                        <p className="mb-6 text-gray-700">
                            {t('maintenancePage.cta.description')}
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            {t('maintenancePage.cta.button')}
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
