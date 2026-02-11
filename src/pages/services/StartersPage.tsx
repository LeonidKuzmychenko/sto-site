import { Seo } from '@/shared/seo/Seo'
import { Wrench, Zap, Clock } from 'lucide-react'

export function StartersPage() {
    return (
        <>
            <Seo
                title="Ремонт стартерів в Одесі"
                description="Професійний ремонт автомобільних стартерів в Одесі: діагностика, заміна щіток, втулок, перевірка на стенді."
                canonical="https://example.com/services/starters"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Ремонт стартерів
                    </h1>

                    {/* Вступ */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо професійний ремонт автомобільних стартерів
                            для легкових та комерційних авто.
                        </p>
                        <p className="text-gray-700">
                            Повна діагностика, заміна зношених деталей та
                            перевірка на стенді перед видачею.
                        </p>
                    </section>

                    {/* Ознаки несправності */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Ознаки несправного стартера
                        </h2>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <Zap className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Стартер не реагує при повороті ключа</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Zap className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Повільне або утруднене прокручування двигуна</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Zap className="mt-1 h-5 w-5 text-blue-600" />
                                <span>Сторонній звук під час запуску</span>
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
                                    Перевірка стартера на стенді, оцінка стану обмотки
                                    та контактної групи.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна щіток та втулок
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Встановлення нових комплектуючих для
                                    відновлення стабільної роботи.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Ремонт обмотки
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Відновлення або заміна пошкоджених елементів
                                    електричної частини.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Контрольне тестування
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Перевірка роботи після ремонту перед встановленням.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Етапи роботи */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Як проходить ремонт
                        </h2>

                        <ol className="space-y-3 list-decimal pl-5 text-gray-700">
                            <li>Первинна діагностика</li>
                            <li>Узгодження вартості робіт</li>
                            <li>Виконання ремонту</li>
                            <li>Перевірка на стенді</li>
                        </ol>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібен ремонт стартера?
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
