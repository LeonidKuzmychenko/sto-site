import { NavLink } from 'react-router-dom'
import {ArrowRight, ChevronRight} from 'lucide-react'
import { Seo } from '@/shared/seo/Seo'
import { SectionLink } from '@/shared/ui'
import { ROUTES } from '@/shared/constants'
import {BASE_URL} from "@/shared/data/const.ts";

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
                        items-start justify-center overflow-hidden
                        border-b text-center pt-64
                    "
                >
                    {/* LCP image: in DOM for discoverability, fetchpriority for priority */}
                    <img
                        src={`${BASE_URL}/background.avif`}
                        alt=""
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        aria-hidden
                    />
                    <div className="absolute inset-0 bg-white/40 z-[1]" />

                    <div className="relative z-10 mx-auto max-w-3xl px-4">
                        <h1 className="mb-6 text-4xl font-semibold text-gray-900">
                            Ремонт стартерів та генераторів в Одесі
                        </h1>

                        <p className="mb-10 text-lg text-gray-800">
                            Професійний ремонт автомобільних стартерів і генераторів
                            з діагностикою та перевіркою на стенді.
                        </p>

                        <NavLink
                            to={ROUTES.services}
                            className="
                                group inline-flex items-center justify-center gap-2
                                rounded bg-blue-600 px-8 py-3
                                text-base font-medium text-white
                                transition-colors hover:bg-blue-700
                            "
                        >
                            Переглянути послуги
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                            <SectionLink
                                to={ROUTES.servicesStarters}
                                description="Ремонт стартерів з урахуванням реального зносу, навантажень і стану вузлів."
                                label="Ремонт стартерів"
                            />
                            <SectionLink
                                to={ROUTES.servicesGenerators}
                                description="Генератори перевіряємо під навантаженням, а не «на слух» чи візуально."
                                label="Ремонт генераторів"
                            />
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
                            <SectionLink
                                to={ROUTES.galleryEquipment}
                                description="Обладнання, на якому ми реально працюємо щодня."
                                label="Наше обладнання"
                            />
                            <SectionLink
                                to={ROUTES.galleryBeforeAfter}
                                description="Результати роботи без ретуші та маркетингових фото."
                                label="До / Після"
                            />
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
                            to={ROUTES.paymentDelivery}
                            className="
                                group inline-flex items-center gap-1
                                text-sm font-medium text-blue-600 hover:underline
                            "
                        >
                            Детальніше
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
                            to={ROUTES.contacts}
                            className="
                                group inline-flex items-center gap-1
                                text-sm font-medium text-blue-600 hover:underline
                            "
                        >
                            Перейти до контактів
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </NavLink>
                    </div>
                </section>
            </div>
        </>
    )
}
