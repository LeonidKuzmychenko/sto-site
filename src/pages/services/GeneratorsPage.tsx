import {Seo} from '@/shared/seo/Seo'

export function GeneratorsPage() {
    return (
        <>
            <Seo
                title="Ремонт генераторів в Одесі"
                description="Ремонт автомобільних генераторів в Одесі: діодний міст, підшипники, регулятор напруги."
                canonical="https://example.com/services/generators"
            />
            <section className="py-16 pt-24 mx-auto max-w-6xl px-4">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    Ремонт генераторів
                </h1>
                <article className="space-y-6">
                    <p className="text-gray-700">
                        Ремонт та відновлення автомобільних генераторів із перевіркою
                        навантаження та напруги.
                    </p>

                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Діагностика генератора</li>
                        <li>Заміна підшипників</li>
                        <li>Ремонт діодного моста</li>
                        <li>Перевірка регулятора напруги</li>
                    </ul>

                    <div className="rounded border border-gray-200 bg-gray-50 p-4 text-sm">
                        Примічання
                    </div>
                </article>
            </section>
        </>
    )
}
