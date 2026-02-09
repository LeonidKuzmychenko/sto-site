import { NavLink } from 'react-router-dom'
import {Seo} from "@/shared/seo/Seo.tsx";

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
                <section className="flex min-h-screen items-center border-b">
                    <div className="mx-auto max-w-6xl px-4">
                        <h1 className="mb-6 text-3xl font-semibold text-gray-900">
                            Ремонт стартерів та генераторів в Одесі
                        </h1>

                        <p className="mb-8 max-w-xl text-gray-700">
                            Професійний ремонт автомобільних стартерів і генераторів
                            з діагностикою та перевіркою на стенді.
                        </p>

                        <NavLink
                            to="/services"
                            className="inline-flex items-center rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
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

                        <div className="grid gap-4 sm:grid-cols-2">
                            <NavLink
                                to="/services/starters"
                                className="rounded border border-gray-200 p-4 hover:border-blue-600 transition-colors"
                            >
                                Ремонт стартерів
                            </NavLink>

                            <NavLink
                                to="/services/generators"
                                className="rounded border border-gray-200 p-4 hover:border-blue-600 transition-colors"
                            >
                                Ремонт генераторів
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

                        <div className="flex gap-4">
                            <NavLink
                                to="/gallery/equipment"
                                className="rounded border border-gray-200 px-4 py-2 hover:border-blue-600 transition-colors"
                            >
                                Наше обладнання
                            </NavLink>

                            <NavLink
                                to="/gallery/before-after"
                                className="rounded border border-gray-200 px-4 py-2 hover:border-blue-600 transition-colors"
                            >
                                До / Після
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

                        <p className="mb-4 text-gray-700">
                            Готівковий та безготівковий розрахунок. Самовивіз або
                            доставка за домовленістю.
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

                        <p className="mb-4 text-gray-700">
                            Телефонуйте або приїжджайте до нас у робочий час.
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
