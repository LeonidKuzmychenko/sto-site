export function ContactsPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-16">
            <h1 className="mb-8 text-3xl font-bold">Контакты</h1>

            <div className="space-y-4 text-gray-700">
                <p>
                    <strong>Адрес:</strong> г. Одесса
                </p>

                <p>
                    <strong>Телефон:</strong>{' '}
                    <a href="tel:+380XXXXXXXXX" className="text-blue-600">
                        +380 XX XXX XX XX
                    </a>
                </p>

                <p>
                    <strong>График работы:</strong> Пн–Сб, 9:00–18:00
                </p>
            </div>
        </main>
    )
}
