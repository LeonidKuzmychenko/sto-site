import { Seo } from '@/shared/seo/Seo'
import { Package, Search, Clock } from 'lucide-react'

export function PartsSelectionPage() {
    return (
        <>
            <Seo
                title="Підбір запчастин в Одесі"
                description="Професійний підбір автозапчастин в Одесі: оригінал та аналоги, гарантія якості."
                canonical="https://example.com/services/parts-selection"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Підбір запчастин
                    </h1>

                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Допомагаємо підібрати запчастини відповідно до VIN-коду
                            та технічних параметрів автомобіля.
                        </p>
                        <p className="text-gray-700">
                            Працюємо з оригінальними деталями та перевіреними аналогами.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Що входить у послугу
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Search className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Пошук за VIN
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Точний підбір деталі відповідно до комплектації авто.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Package className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Оригінал та аналоги
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Пропонуємо декілька варіантів з різною вартістю.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Швидке постачання
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Замовлення та доставка у найкоротші терміни.
                                </p>
                            </div>

                        </div>
                    </section>

                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібна запчастина?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Зв’яжіться з нами для консультації.
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            Зв’язатися
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
