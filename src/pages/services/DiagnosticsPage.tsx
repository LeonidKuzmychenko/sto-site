import { Seo } from '@/shared/seo/Seo'
import { Gauge, Laptop, Clock } from 'lucide-react'

export function DiagnosticsPage() {
    return (
        <>
            <Seo
                title="Діагностика авто в Одесі"
                description="Комп'ютерна та технічна діагностика автомобіля в Одесі: перевірка електросистеми, стартера, генератора."
                canonical="https://example.com/services/diagnostics"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Діагностика
                    </h1>

                    {/* Вступ */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо комплексну діагностику автомобіля для
                            точного визначення несправностей.
                        </p>
                        <p className="text-gray-700">
                            Правильна діагностика дозволяє уникнути зайвих витрат
                            та прискорює ремонт.
                        </p>
                    </section>

                    {/* Види діагностики */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Види діагностики
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Laptop className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Комп'ютерна діагностика
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Зчитування помилок, аналіз електронних систем автомобіля.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Gauge className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Перевірка електросистеми
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Оцінка роботи генератора, стартера та акумулятора.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Gauge className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Діагностика ходової
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Перевірка стану підвіски та механічних вузлів.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Передпродажна перевірка
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Комплексна оцінка технічного стану автомобіля.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Коли потрібна діагностика */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Коли варто зробити діагностику
                        </h2>

                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Загорівся індикатор Check Engine</li>
                            <li>Автомобіль працює нестабільно</li>
                            <li>Перед купівлею авто з пробігом</li>
                            <li>Після ДТП або сильних навантажень</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібна діагностика?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Запишіться на перевірку або отримайте консультацію.
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
