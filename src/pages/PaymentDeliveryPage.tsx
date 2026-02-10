import { Seo } from '../shared/seo/Seo'
import {
    CreditCard,
    Banknote,
    Truck,
    Package,
    MapPin,
    Clock,
    Scale,
} from 'lucide-react'

export function PaymentDeliveryPage() {
    return (
        <main className="py-16 pt-24">
            <Seo
                title="Оплата та доставка"
                description="Умови оплати та доставки при ремонті стартерів і генераторів. Готівковий та безготівковий розрахунок, Нова Пошта."
            />

            <div className="mx-auto max-w-6xl px-4 space-y-12">
                {/* ЗАГОЛОВОК */}
                <section>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Оплата та доставка
                    </h1>
                </section>

                {/* ОПЛАТА */}
                <section className="rounded-lg border border-gray-200 p-6">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        Оплата
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Banknote className="h-5 w-5 text-blue-600" />
                            Готівковий розрахунок
                        </li>
                        <li className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            Безготівковий переказ на карту
                        </li>
                    </ul>
                </section>

                {/* ДОСТАВКА */}
                <section className="rounded-lg border border-gray-200 p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Доставка
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Truck className="h-5 w-5 text-blue-600" />
                            Самовивіз із майстерні
                        </li>
                        <li className="flex items-center gap-3">
                            <Package className="h-5 w-5 text-blue-600" />
                            Відправка та отримання деталей через Нову Пошту
                        </li>
                    </ul>

                    {/* НОВА ПОШТА */}
                    <div className="rounded-md bg-gray-50 p-4 space-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            Одеський район, с. Прилиманське, вулиця Центральна (Жовтнева), 168
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            Пн–Нд: 09:00–18:00
                        </div>

                        <div className="flex items-center gap-2">
                            <Scale className="h-4 w-4 text-gray-500" />
                            Обмеження ваги відправлення — до 30 кг
                        </div>
                    </div>

                    <p className="text-sm text-gray-600">
                        Вартість, умови та терміни доставки залежать від тарифів та правил перевізника.
                    </p>
                </section>
            </div>
        </main>
    )
}
