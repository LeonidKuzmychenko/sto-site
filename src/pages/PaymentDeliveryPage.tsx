import { Seo } from '../shared/seo/Seo'

export function PaymentDeliveryPage() {
    return (
        <main className="py-16">
            <Seo
                title="Оплата та доставка"
                description="Умови оплати та доставки при ремонті стартерів і генераторів. Готівковий та безготівковий розрахунок, самовивіз."
            />

            <div className="mx-auto max-w-6xl px-4 space-y-12">
                {/* ОПЛАТА */}
                <section>
                    <h1 className="mb-4 text-2xl font-semibold text-gray-900">
                        Оплата
                    </h1>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Готівковий розрахунок</li>
                        <li>Безготівковий розрахунок (переказ на карту)</li>
                        <li>Оплата після виконання робіт</li>
                    </ul>
                </section>

                {/* ДОСТАВКА */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        Доставка
                    </h2>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Самовивіз із майстерні</li>
                        <li>Доставка курʼєрською службою за домовленістю</li>
                        <li>Відправка поштовими службами (за погодженням)</li>
                    </ul>

                    <p className="mt-4 text-sm text-gray-600">
                        Умови та вартість доставки уточнюються індивідуально,
                        залежно від типу та габаритів агрегату.
                    </p>
                </section>
            </div>
        </main>
    )
}
