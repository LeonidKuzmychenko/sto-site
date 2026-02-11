import { Seo } from '@/shared/seo/Seo'
import { Zap, Wrench, AlertTriangle } from 'lucide-react'

export function WiringRepairPage() {
    return (
        <>
            <Seo
                title="Ремонт електропроводки авто в Одесі"
                description="Професійний ремонт електропроводки автомобіля в Одесі: усунення короткого замикання, відновлення проводки."
                canonical="https://example.com/services/wiring"
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    <h1 className="mb-10 text-2xl font-semibold text-gray-900">
                        Ремонт електропроводки
                    </h1>

                    <section className="mb-16 max-w-3xl space-y-4">
                        <p className="text-gray-700">
                            Виконуємо ремонт та відновлення автомобільної електропроводки.
                        </p>
                        <p className="text-gray-700">
                            Усунення короткого замикання та відновлення
                            працездатності електросистеми.
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="mb-6 text-xl font-semibold text-gray-900">
                            Основні роботи
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Усунення короткого замикання
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Пошук та ліквідація пошкоджених ділянок проводки.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Zap className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Відновлення ланцюгів живлення
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Ремонт та заміна проводів і з'єднань.
                                </p>
                            </div>

                            <div className="rounded border border-gray-200 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Wrench className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-medium text-gray-900">
                                        Заміна реле та запобіжників
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Встановлення нових елементів захисту.
                                </p>
                            </div>

                        </div>
                    </section>

                    <section className="mb-16 max-w-2xl">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900">
                            Потрібна допомога?
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Звертайтесь для діагностики та ремонту.
                        </p>

                        <a
                            href="/contacts"
                            className="inline-flex items-center justify-center rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                        >
                            Зв’язатися
                        </a>
                    </section>

                </div>
            </section>
        </>
    )
}
