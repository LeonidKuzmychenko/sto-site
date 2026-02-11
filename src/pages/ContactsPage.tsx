import { Seo } from '@/shared/seo/Seo'
import { InfoCard, SocialLink } from '@/shared/ui'
import { MESSENGERS, SOCIAL_NETWORKS } from '@/shared/data/social'
import { MapPin, Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function ContactsPage() {
    const { t } = useTranslation()

    const phone = t('contactsPage.phone.value')

    return (
        <>
            <Seo
                title={t('contactsPage.seo.title')}
                description={t('contactsPage.seo.description')}
            />

            <section className="mx-auto max-w-6xl px-4 py-16 pt-24">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    {t('contactsPage.title')}
                </h1>

                <div className="grid gap-8 lg:grid-cols-[max-content_1fr]">

                    <div className="space-y-6">

                        <InfoCard
                            title={t('contactsPage.address.title')}
                            icon={<MapPin className="h-5 w-5 text-blue-600" />}
                        >
                            <p className="text-gray-700">
                                {t('contactsPage.address.line1')}
                            </p>
                            <p className="text-gray-700">
                                {t('contactsPage.address.line2')}
                            </p>
                            <p className="text-sm text-gray-600">
                                {t('contactsPage.address.landmark')}
                            </p>
                        </InfoCard>

                        <InfoCard
                            title={t('contactsPage.phone.title')}
                            icon={<Phone className="h-5 w-5 text-blue-600" />}
                        >
                            <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="text-lg font-medium text-blue-600 transition-colors hover:underline"
                            >
                                {phone}
                            </a>
                        </InfoCard>

                        <InfoCard
                            title={t('contactsPage.schedule.title')}
                            icon={<Clock className="h-5 w-5 text-blue-600" />}
                        >
                            <p className="text-gray-700">
                                {t('contactsPage.schedule.weekdays')}
                            </p>
                            <p className="text-sm text-gray-600">
                                {t('contactsPage.schedule.weekend')}
                            </p>
                        </InfoCard>

                        <InfoCard title={t('contactsPage.messengers')}>
                            <ul className="space-y-3">
                                {MESSENGERS.map((item) => (
                                    <SocialLink key={item.label} {...item} />
                                ))}
                            </ul>
                        </InfoCard>

                        <InfoCard title={t('contactsPage.social')}>
                            <ul className="space-y-3">
                                {SOCIAL_NETWORKS.map((item) => (
                                    <SocialLink key={item.label} {...item} />
                                ))}
                            </ul>
                        </InfoCard>

                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <iframe
                            title={t('contactsPage.mapTitle')}
                            src="https://www.google.com/maps?q=Odessa&output=embed"
                            className="h-full min-h-[360px] w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
