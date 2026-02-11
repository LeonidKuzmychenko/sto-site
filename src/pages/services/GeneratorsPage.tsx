import { Seo } from '@/shared/seo/Seo'
import { Wrench, Gauge } from 'lucide-react'

export function GeneratorsPage() {
    return (
        <>
            <Seo
                title="Ремонт генераторів в Одесі"
                description="Професійний ремонт автомобільних генераторів в Одесі: діагностика, заміна підшипників, ремонт діодного моста, регулятора напруги."
                canonical="https://example.com/services/generators"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Ремонт генераторів
                    </h1>

                    {/* Вступ */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо професійний ремонт автомобільних генераторів
                            з перевіркою під навантаженням. Працюємо з легковими,
                            комерційними та імпортними авто.
                        </p>
                        <p className="text-gray-700">
                            Використовуємо перевірені комплектуючі та надаємо гарантію
                            на виконані роботи.
                        </p>
                    </section>

                    {/* Ознаки несправності */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Ознаки несправного генератора
                        </h2>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <Gauge className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Мигає або горить індикатор зарядки акумулятора</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Gauge className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Просідання напруги при навантаженні</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Gauge className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Сторонній шум або свист підшипників</span>
                            </li>
                        </ul>
                    </section>

                    {/* Що входить у ремонт */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Що входить у ремонт
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Діагностика
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Перевірка генератора на стенді, тестування під навантаженням.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна підшипників
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Демонтаж, встановлення нових підшипників,
                                    балансування.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Ремонт діодного моста
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Перевірка та заміна силових діодів.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Регулятор напруги
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Тестування та заміна реле-регулятора.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Етапи роботи */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Як проходить ремонт
                        </h2>

                        <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                            <li>Первинна перевірка та діагностика</li>
                            <li>Узгодження вартості</li>
                            <li>Виконання ремонту</li>
                            <li>Контрольне тестування</li>
                        </ol>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібен ремонт генератора?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Звертайтесь для діагностики та консультації.
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
