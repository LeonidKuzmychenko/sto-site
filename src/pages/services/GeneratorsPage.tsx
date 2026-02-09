import {Seo} from "@/shared/seo/Seo.tsx";

export function GeneratorsPage() {
    return (
        <>
            <Seo
                title="Ремонт генераторів в Одесі"
                description="Ремонт автомобільних генераторів в Одесі: діодний міст, підшипники, регулятор напруги."
                canonical="https://example.com/services/generators"
            />

            <article className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    Ремонт генераторів
                </h2>

                <p className="text-gray-700">
                    Ремонт та відновлення автомобільних генераторів із перевіркою
                    навантаження та напруги. Підходить для більшості марок авто.
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
        </>

    )
}
