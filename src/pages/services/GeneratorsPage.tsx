import { Seo } from '@/shared/seo/Seo'
import { Wrench, Gauge } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function GeneratorsPage() {
    const { t } = useTranslation('services/generators')

    const symptomIndexes = [0, 1, 2]
    const stepIndexes = [0, 1, 2, 3]

    return (
        <>
            <Seo
                title={t('generatorsPage.seo.title')}
                description={t('generatorsPage.seo.description')}
                canonical={t('generatorsPage.seo.canonical')}
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        {t('generatorsPage.h1')}
                    </h1>

                    {/* Intro */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            {t('generatorsPage.intro.p1')}
                        </p>
                        <p className="text-gray-700">
                            {t('generatorsPage.intro.p2')}
                        </p>
                    </section>

                    {/* Symptoms */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('generatorsPage.symptoms.title')}
                        </h2>

                        <ul className="space-y-3 text-gray-700">
                            {symptomIndexes.map((i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Gauge className="mt-1 h-5 w-5 text-blue-600" />
                                    <span>
                                        {t(`generatorsPage.symptoms.items.${i}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Repair Includes */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('generatorsPage.repairIncludes.title')}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            {[
                                'diagnostics',
                                'bearings',
                                'diodeBridge',
                                'voltageRegulator'
                            ].map((key) => (
                                <div
                                    key={key}
                                    className="rounded border border-gray-200 p-6"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <Wrench className="h-5 w-5 text-blue-600" />
                                        <h3 className="font-medium text-gray-900">
                                            {t(
                                                `generatorsPage.repairIncludes.${key}.title`
                                            )}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {t(
                                            `generatorsPage.repairIncludes.${key}.description`
                                        )}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* Steps */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('generatorsPage.steps.title')}
                        </h2>

                        <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                            {stepIndexes.map((i) => (
                                <li key={i}>
                                    {t(`generatorsPage.steps.items.${i}`)}
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('generatorsPage.cta.title')}
                        </h2>
                        <p className="mb-6 text-gray-700">
                            {t('generatorsPage.cta.description')}
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            {t('generatorsPage.cta.button')}
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
