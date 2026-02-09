import { Outlet } from 'react-router-dom'

export function ServicesPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="mb-6 text-3xl font-bold">
                Наши услуги
            </h1>

            <p className="mb-8 text-gray-700">
                Ремонт и восстановление стартеров и генераторов.
                Выберите услугу в меню сверху.
            </p>

            <Outlet />
        </main>
    )
}
