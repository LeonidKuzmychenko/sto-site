import { Seo } from '@/shared/seo/Seo'
import { Wrench, Clock, Settings } from 'lucide-react'

export function MaintenancePage() {
    return (
        <>
            <Seo
                title="Технічне обслуговування авто в Одесі"
                description="Планове технічне обслуговування автомобілів в Одесі: заміна мастила, фільтрів, перевірка електросистеми."
                canonical="https://example.com/services/maintenance"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Технічне обслуговування
                    </h1>

                    {/* Вступ */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо планове технічне обслуговування автомобілів
                            відповідно до регламенту виробника.
                        </p>
                        <p className="text-gray-700">
                            Своєчасне ТО дозволяє уникнути дорогого ремонту та
                            продовжує ресурс автомобіля.
                        </p>
                    </section>

                    {/* Що входить у ТО */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Що входить у технічне обслуговування
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна мастила
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Підбір та заміна моторного мастила відповідно до допусків.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Settings className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна фільтрів
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Масляний, повітряний, паливний та салонний фільтри.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Settings className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Перевірка електросистеми
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Діагностика генератора, стартера та акумулятора.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Регламентні перевірки
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Огляд гальмівної системи, ременів та вузлів.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Коли потрібно ТО */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Коли потрібно проходити ТО
                        </h2>

                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Кожні 8–10 тис. км пробігу</li>
                            <li>Перед тривалими поїздками</li>
                            <li>Після купівлі автомобіля з пробігом</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Записатись на технічне обслуговування
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Залиште заявку або зв’яжіться з нами для консультації.
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
