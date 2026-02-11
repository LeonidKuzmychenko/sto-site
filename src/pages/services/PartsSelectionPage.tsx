import { Seo } from '@/shared/seo/Seo'
import { Package, Search, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function PartsSelectionPage() {
    const { t } = useTranslation('services/parts-selection')

    return (
        <>
            <Seo
                title={t('partsSelectionPage.seo.title')}
                description={t('partsSelectionPage.seo.description')}
                canonical={t('partsSelectionPage.seo.canonical')}
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        {t('partsSelectionPage.h1')}
                    </h1>

                    {/* Intro */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            {t('partsSelectionPage.intro.p1')}
                        </p>
                        <p className="text-gray-700">
                            {t('partsSelectionPage.intro.p2')}
                        </p>
                    </section>

                    {/* Includes */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('partsSelectionPage.includes.title')}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            {[
                                { key: 'vinSearch', Icon: Search },
                                { key: 'originalAndAnalog', Icon: Package },
                                { key: 'fastDelivery', Icon: Clock }
                            ].map(({ key, Icon }) => (
                                <div
                                    key={key}
                                    className="rounded border border-gray-200 p-6"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-blue-600" />
                                        <h3 className="font-medium text-gray-900">
                                            {t(
                                                `partsSelectionPage.includes.${key}.title`
                                            )}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t(
                                            `partsSelectionPage.includes.${key}.description`
                                        )}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('partsSelectionPage.cta.title')}
                        </h2>
                        <p className="mb-6 text-gray-700">
                            {t('partsSelectionPage.cta.description')}
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            {t('partsSelectionPage.cta.button')}
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
