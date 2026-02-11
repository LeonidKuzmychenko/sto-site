import { Seo } from '@/shared/seo/Seo'
import { Gauge, Laptop, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function DiagnosticsPage() {
    const { t } = useTranslation('diagnostics')

    const whenNeededItems = [0, 1, 2, 3]

    return (
        <>
            <Seo
                title={t('diagnosticsPage.seo.title')}
                description={t('diagnosticsPage.seo.description')}
                canonical={t('diagnosticsPage.seo.canonical')}
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        {t('diagnosticsPage.h1')}
                    </h1>

                    {/* Intro */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            {t('diagnosticsPage.intro.paragraph1')}
                        </p>
                        <p className="text-gray-700">
                            {t('diagnosticsPage.intro.paragraph2')}
                        </p>
                    </section>

                    {/* Types */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('diagnosticsPage.types.title')}
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Laptop className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        {t('diagnosticsPage.types.computer.title')}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {t('diagnosticsPage.types.computer.description')}
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Gauge className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        {t('diagnosticsPage.types.electrical.title')}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {t('diagnosticsPage.types.electrical.description')}
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Gauge className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        {t('diagnosticsPage.types.suspension.title')}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {t('diagnosticsPage.types.suspension.description')}
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        {t('diagnosticsPage.types.prepurchase.title')}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {t('diagnosticsPage.types.prepurchase.description')}
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* When needed */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            {t('diagnosticsPage.whenNeeded.title')}
                        </h2>

                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            {whenNeededItems.map((index) => (
                                <li key={index}>
                                    {t(`diagnosticsPage.whenNeeded.items.${index}`)}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            {t('diagnosticsPage.cta.title')}
                        </h2>
                        <p className="mb-6 text-gray-700">
                            {t('diagnosticsPage.cta.description')}
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            {t('diagnosticsPage.cta.button')}
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
