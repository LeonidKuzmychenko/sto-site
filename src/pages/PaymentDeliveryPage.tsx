import { Seo } from '@/shared/seo/Seo'
import { InfoCard } from '@/shared/ui'
import {
    CreditCard,
    Banknote,
    Truck,
    Package,
    MapPin,
    Clock,
    Scale,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function PaymentDeliveryPage() {
    const { t } = useTranslation('paymentDelivery')

    return (
        <>
            <Seo
                title={t('paymentDeliveryPage.seo.title')}
                description={t('paymentDeliveryPage.seo.description')}
            />

            <section className="mx-auto max-w-6xl px-4 py-16 pt-24">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    {t('paymentDeliveryPage.title')}
                </h1>

                <div className="mb-8">
                    <InfoCard
                        title={t('paymentDeliveryPage.payment.title')}
                        icon={<Banknote className="h-5 w-5 text-blue-600" />}
                    >
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                                <Banknote className="h-5 w-5 text-blue-600" />
                                {t('paymentDeliveryPage.payment.cash')}
                            </li>
                            <li className="flex items-center gap-3">
                                <CreditCard className="h-5 w-5 text-blue-600" />
                                {t('paymentDeliveryPage.payment.card')}
                            </li>
                        </ul>
                    </InfoCard>
                </div>

                <InfoCard
                    title={t('paymentDeliveryPage.delivery.title')}
                    icon={<Truck className="h-5 w-5 text-blue-600" />}
                >
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Truck className="h-5 w-5 text-blue-600" />
                            {t('paymentDeliveryPage.delivery.pickup')}
                        </li>
                        <li className="flex items-center gap-3">
                            <Package className="h-5 w-5 text-blue-600" />
                            {t('paymentDeliveryPage.delivery.novaPoshta')}
                        </li>
                    </ul>

                    <div className="mt-4 space-y-2 rounded-md bg-gray-50 p-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            {t('paymentDeliveryPage.delivery.address')}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            {t('paymentDeliveryPage.delivery.schedule')}
                        </div>
                        <div className="flex items-center gap-2">
                            <Scale className="h-4 w-4 text-gray-500" />
                            {t('paymentDeliveryPage.delivery.weightLimit')}
                        </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                        {t('paymentDeliveryPage.delivery.disclaimer')}
                    </p>
                </InfoCard>
            </section>
        </>
    )
}
