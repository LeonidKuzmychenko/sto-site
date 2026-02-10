import { Outlet } from 'react-router-dom'

export function ServicesPage() {
    return (
        <section className="py-16 pt-20">
            <div className="mx-auto max-w-6xl px-4">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    Послуги
                </h1>

                <Outlet />
            </div>
        </section>
    )
}
