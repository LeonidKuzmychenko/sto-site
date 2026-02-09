import { Seo } from '../shared/seo/Seo'

export function ContactsPage() {
    return (
        <main className="py-16">
            <Seo
                title="Контакти"
                description="Контактна інформація майстерні з ремонту стартерів і генераторів в Одесі. Телефон, адреса, графік роботи."
            />

            <div className="mx-auto max-w-6xl px-4 space-y-12">
                {/* ЗАГОЛОВОК */}
                <section>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Контакти
                    </h1>
                </section>

                {/* КОНТАКТНА ІНФОРМАЦІЯ */}
                <section className="space-y-4 text-gray-700">
                    <p>
                        <strong className="text-gray-900">Адреса:</strong>{' '}
                        м. Одеса
                    </p>

                    <p>
                        <strong className="text-gray-900">Телефон:</strong>{' '}
                        <a
                            href="tel:+380XXXXXXXXX"
                            className="text-blue-600 hover:underline"
                        >
                            +380 XX XXX XX XX
                        </a>
                    </p>

                    <p>
                        <strong className="text-gray-900">
                            Графік роботи:
                        </strong>{' '}
                        Пн–Сб, 9:00–18:00
                    </p>

                    {/* СОЦСЕТИ */}
                    <div>
                        <strong className="text-gray-900">
                            Ми в соцмережах:
                        </strong>

                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* КАРТА */}
                <section className="overflow-hidden rounded border border-gray-200">
                    <iframe
                        title="Ми на мапі"
                        src="https://www.google.com/maps?q=Odessa&output=embed"
                        className="h-80 w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            </div>
        </main>
    )
}
