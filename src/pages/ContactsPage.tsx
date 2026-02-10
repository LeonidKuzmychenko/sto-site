import { Seo } from '../shared/seo/Seo'

export function ContactsPage() {
    return (
        <div className="py-16 pt-20">
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
                    <div>
                        <p><strong className="text-gray-900">Адреса:</strong></p>
                        <p>м. Одеса, вул. ________, буд. __</p>
                        <p>(орієнтир: ________)</p>
                    </div>


                    <div>
                        <p><strong className="text-gray-900">Телефон:</strong></p>
                        <a href="tel:+380XXXXXXXXX" className="text-blue-600 hover:underline">
                            +380 XX XXX XX XX
                        </a>
                    </div>

                    <div>
                        <p><strong className="text-gray-900">Графік роботи:</strong></p>
                        <p>Понеділок–П'ятниця, 9:00–18:00</p>
                        <p>Субота-Неділя, вихідні</p>
                    </div>

                    <div>
                        <p><strong className="text-gray-900">Месенджери:</strong></p>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/sto-site/social/telegram.svg" alt=""/>Telegram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/sto-site/social/viber.svg" alt=""/>Viber
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* СОЦСЕТИ */}
                    <div>
                        <p><strong className="text-gray-900">Cоцмережи:</strong></p>

                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/sto-site/social/instagram.svg" alt=""/>Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/sto-site/social/tiktok.svg" alt=""/>TikTok
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/sto-site/social/youtube.svg" alt=""/>YouTube
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
        </div>
    )
}
