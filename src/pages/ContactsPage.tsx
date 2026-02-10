import { Seo } from '../shared/seo/Seo'
import { MapPin, Phone, Clock} from 'lucide-react'

export function ContactsPage() {
    return (
        <main className="py-16 pt-24">
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

                <section className="grid gap-8 lg:grid-cols-[max-content_1fr]">
                    {/* ЛЕВАЯ КОЛОНКА */}
                    <div className="space-y-6">
                        {/* АДРЕСА */}
                        <div className="rounded-lg border border-gray-200 p-6">
                            <div className="mb-2 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-blue-600" />
                                <h2 className="font-semibold text-gray-900">
                                    Адреса
                                </h2>
                            </div>
                            <p className="text-gray-700">
                                Одеська обл., Овідіопольський р-н
                            </p>
                            <p className="text-gray-700">
                                с. Прилиманське, вул. Центральна (Жовтнева), 170
                            </p>
                            <p className="text-sm text-gray-600">
                                Орієнтир: білі ворота біля паркингу
                            </p>
                        </div>

                        {/* ТЕЛЕФОН */}
                        <div className="rounded-lg border border-gray-200 p-6">
                            <div className="mb-2 flex items-center gap-2">
                                <Phone className="h-5 w-5 text-blue-600" />
                                <h2 className="font-semibold text-gray-900">
                                    Телефон
                                </h2>
                            </div>
                            <a
                                href="tel:+380XXXXXXXXX"
                                className="text-lg font-medium text-blue-600 hover:underline"
                            >
                                +380 XX XXX XX XX
                            </a>
                        </div>

                        {/* ГРАФІК */}
                        <div className="rounded-lg border border-gray-200 p-6">
                            <div className="mb-2 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-blue-600" />
                                <h2 className="font-semibold text-gray-900">
                                    Графік роботи
                                </h2>
                            </div>
                            <p className="text-gray-700">
                                Пн–Пт: 09:00–18:00
                            </p>
                            <p className="text-sm text-gray-600">
                                Сб–Нд: вихідні
                            </p>
                        </div>

                        {/* МЕСЕНДЖЕРИ */}
                        <div className="rounded-lg border border-gray-200 p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <h2 className="font-semibold text-gray-900">
                                    Месенджери
                                </h2>
                            </div>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/telegram.svg"
                                            alt="Telegram"
                                            className="h-6 w-6"
                                            loading="lazy"
                                        />
                                        Telegram
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/viber.svg"
                                            alt="Viber"
                                            className="h-6 w-6"
                                            loading="lazy"
                                        />
                                        Viber
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* СОЦІАЛЬНІ МЕРЕЖІ */}
                        <div className="rounded-lg border border-gray-200 p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <h2 className="font-semibold text-gray-900">
                                    Соціальні мережі
                                </h2>
                            </div>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/instagram.svg"
                                            alt="Instagram"
                                            className="h-6 w-6"
                                            loading="lazy"
                                        />
                                        Instagram
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/tiktok.svg"
                                            alt="TikTok"
                                            className="h-6 w-6"
                                            loading="lazy"
                                        />
                                        TikTok
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/sto-site/social/youtube.svg"
                                            alt="YouTube"
                                            className="h-6 w-6"
                                            loading="lazy"
                                        />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА — КАРТА */}
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <iframe
                            title="Ми на мапі"
                            src="https://www.google.com/maps?q=Odessa&output=embed"
                            className="h-full min-h-[360px] w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}
