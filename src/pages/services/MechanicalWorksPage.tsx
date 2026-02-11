import { Seo } from '@/shared/seo/Seo'
import { Wrench, Settings, Clock } from 'lucide-react'

export function MechanicalWorksPage() {
    return (
        <>
            <Seo
                title="Слюсарні роботи в Одесі"
                description="Слюсарні роботи для автомобілів в Одесі: ремонт підвіски, заміна гальмівних елементів, вузловий ремонт."
                canonical="https://example.com/services/mechanical"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* H1 */}
                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Слюсарні роботи
                    </h1>

                    {/* Вступ */}
                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо широкий спектр слюсарних робіт для легкових
                            та комерційних автомобілів.
                        </p>
                        <p className="text-gray-700">
                            Працюємо з ходовою частиною, гальмівною системою
                            та механічними вузлами автомобіля.
                        </p>
                    </section>

                    {/* Основні послуги */}
                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Основні види робіт
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Ремонт підвіски
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Заміна амортизаторів, шарових опор, сайлентблоків.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Settings className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Гальмівна система
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Заміна колодок, дисків, перевірка супортів.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна ременів та роликів
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Роботи по привідних ременях та навісному обладнанню.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Вузловий ремонт
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Демонтаж та відновлення окремих механічних вузлів.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Коли звертатися */}
                    <section className="mb-16 max-w-3xl">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Коли потрібні слюсарні роботи
                        </h2>

                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Сторонні шуми в підвісці</li>
                            <li>Збільшений гальмівний шлях</li>
                            <li>Вібрація під час руху</li>
                            <li>Нерівномірний знос шин</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібен ремонт?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Зв’яжіться з нами для консультації та запису.
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
