import {NavLink} from 'react-router-dom'
import {Seo} from '@/shared/seo/Seo.tsx'

export function HomePage() {
    return (
        <>
            <Seo
                title="Ремонт стартерів та генераторів в Одесі"
                description="Професійний ремонт автомобільних стартерів і генераторів в Одесі. Діагностика, перевірка на стенді, гарантія."
                canonical="https://example.com/"
            />

            <div>
                {/* HERO */}
                <section
                    className="
                        relative flex min-h-screen
                        items-start justify-center
                        border-b bg-cover bg-center text-center
                        pt-64
                    "
                    style={{backgroundImage: 'url(/sto-site/background.png)'}}
                >
                    <div className="absolute inset-0 bg-white/60"/>

                    <div className="relative mx-auto max-w-3xl px-4">
                        <h1 className="mb-6 text-4xl font-semibold text-gray-900">
                            Ремонт стартерів та генераторів в Одесі
                        </h1>

                        <p className="mb-10 text-lg text-gray-800">
                            Професійний ремонт автомобільних стартерів і генераторів
                            з діагностикою та перевіркою на стенді.
                        </p>

                        <NavLink
                            to="/services"
                            className="
                                inline-flex items-center justify-center
                                rounded bg-blue-600 px-8 py-3
                                text-base font-medium text-white
                                transition-colors hover:bg-blue-700
                            "
                        >
                            Переглянути послуги
                        </NavLink>
                    </div>
                </section>


                {/* УСЛУГИ */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Наші послуги
                        </h2>

                        <p className="mb-8 max-w-2xl text-gray-700">
                            Ми працюємо з вузькою спеціалізацією — стартерами та генераторами.
                            Це дозволяє глибоко розуміти типові несправності й не експериментувати
                            з автомобілем клієнта.
                        </p>

                        <div className="flex flex-col gap-6">
                            <NavLink
                                to="/services/starters"
                                className="rounded border border-gray-200 p-4 transition-colors hover:border-blue-600"
                            >
                                <p className="mb-2 text-sm text-gray-600">
                                    Ремонт стартерів з урахуванням реального зносу,
                                    навантажень і стану вузлів.
                                </p>
                                <span className="font-medium text-gray-900">
                                    Ремонт стартерів
                                </span>
                            </NavLink>

                            <NavLink
                                to="/services/generators"
                                className="rounded border border-gray-200 p-4 transition-colors hover:border-blue-600"
                            >
                                <p className="mb-2 text-sm text-gray-600">
                                    Генератори перевіряємо під навантаженням,
                                    а не «на слух» чи візуально.
                                </p>
                                <span className="font-medium text-gray-900">
                                    Ремонт генераторів
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* ГАЛЕРЕЯ */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Галерея
                        </h2>

                        <p className="mb-8 max-w-2xl text-gray-700">
                            Ми не економимо на обладнанні й не приховуємо робочий процес.
                            Використовуємо стенди та інструменти, якими можемо відкрито пишатися.
                        </p>

                        <div className="flex flex-col gap-4">
                            <NavLink
                                to="/gallery/equipment"
                                className="rounded border border-gray-200 px-4 py-3 transition-colors hover:border-blue-600"
                            >
                                <p className="mb-1 text-sm text-gray-600">
                                    Обладнання, на якому ми реально працюємо щодня.
                                </p>
                                <span className="font-medium text-gray-900">
                                    Наше обладнання
                                </span>
                            </NavLink>

                            <NavLink
                                to="/gallery/before-after"
                                className="rounded border border-gray-200 px-4 py-3 transition-colors hover:border-blue-600"
                            >
                                <p className="mb-1 text-sm text-gray-600">
                                    Результати роботи без ретуші та маркетингових фото.
                                </p>
                                <span className="font-medium text-gray-900">
                                    До / Після
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* ОПЛАТА / ДОСТАВКА */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Оплата та доставка
                        </h2>

                        <p className="mb-3 max-w-2xl text-gray-700">
                            Умови обговорюємо заздалегідь.
                            Без дрібного шрифту, несподіваних доплат і «потім пояснимо».
                        </p>

                        <NavLink
                            to="/payment-delivery"
                            className="text-sm font-medium text-blue-600 hover:underline"
                        >
                            Детальніше
                        </NavLink>
                    </div>
                </section>

                {/* КОНТАКТИ */}
                <section className="border-t py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Контакти
                        </h2>

                        <p className="mb-3 max-w-2xl text-gray-700">
                            Завжди можна приїхати особисто, поставити питання
                            та побачити процес роботи наживо.
                        </p>

                        <NavLink
                            to="/contacts"
                            className="text-sm font-medium text-blue-600 hover:underline"
                        >
                            Перейти до контактів
                        </NavLink>
                    </div>
                </section>
            </div>
        </>
    )
}
