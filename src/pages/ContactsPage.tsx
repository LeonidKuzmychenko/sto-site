import { Seo } from '../shared/seo/Seo'

export function ContactsPage() {
    return (
        <div className="py-16 pt-24">
            <Seo
                title="Контакти"
                description="Контактна інформація майстерні з ремонту стартерів і генераторів в Одесі. Телефон, адреса, графік роботи."
            />

            <div className="mx-auto max-w-6xl px-4 space-y-8">
                {/* ЗАГОЛОВОК */}
                <section>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Контакти
                    </h1>
                </section>

                {/* КОНТЕНТ */}
                <section className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                    {/* ЛЕВАЯ КОЛОНКА — КОНТАКТЫ */}
                    <div className="shrink-0 space-y-6 text-gray-700 lg:max-w-sm">
                        <div>
                            <p className="font-medium text-gray-900">Адреса</p>
                            <p>м. Одеса, вул. ________, буд. __</p>
                            <p className="text-sm text-gray-600">
                                (орієнтир: ________)
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Телефон</p>
                            <a
                                href="tel:+380XXXXXXXXX"
                                className="text-blue-600 hover:underline"
                            >
                                +380 XX XXX XX XX
                            </a>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                                Графік роботи
                            </p>
                            <p>Понеділок–Пʼятниця, 9:00–18:00</p>
                            <p className="text-sm text-gray-600">
                                Субота–Неділя — вихідні
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                                Месенджери
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/telegram.svg"
                                            alt="Telegram"
                                            className="h-8 w-8"
                                            loading="lazy"
                                        />
                                        Telegram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/viber.svg"
                                            alt="Viber"
                                            className="h-8 w-8"
                                            loading="lazy"
                                        />
                                        Viber
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">
                                Соцмережи
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/instagram.svg"
                                            alt="Instagram"
                                            className="h-8 w-8"
                                            loading="lazy"
                                        />
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/tiktok.svg"
                                            alt="TikTok"
                                            className="h-8 w-8"
                                            loading="lazy"
                                        />
                                        TikTok
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/youtube.svg"
                                            alt="YouTube"
                                            className="h-8 w-8"
                                            loading="lazy"
                                        />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА — КАРТА */}
                    <div className="flex-1 overflow-hidden rounded border border-gray-200">
                        <iframe
                            title="Ми на мапі"
                            src="https://www.google.com/maps?q=Odessa&output=embed"
                            className="h-full min-h-[320px] w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
