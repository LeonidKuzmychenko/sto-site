import { Link } from 'react-router-dom'
import { Seo } from '../shared/seo/Seo'

export function NotFoundPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-24 text-center">
            <Seo
                title="Сторінку не знайдено — 404"
                description="Запитувану сторінку не знайдено. Поверніться на головну сторінку сайту."
            />

            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                404
            </h1>

            <p className="mb-8 text-gray-600">
                Сторінку не знайдено
            </p>

            <Link
                to="/"
                className="text-sm font-medium text-blue-600 hover:underline"
            >
                Повернутися на головну
            </Link>
        </main>
    )
}
