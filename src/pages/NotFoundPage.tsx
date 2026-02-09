import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-24 text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-8 text-gray-600">
                Страница не найдена
            </p>

            <Link
                to="/"
                className="text-blue-600 hover:underline"
            >
                Вернуться на главную
            </Link>
        </main>
    )
}
