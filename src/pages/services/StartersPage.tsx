import {Seo} from "@/shared/seo/Seo.tsx";

export function StartersPage() {
    return (
        <>
            <Seo
                title="Ремонт стартерів в Одесі"
                description="Ремонт автомобільних стартерів в Одесі: діагностика, заміна щіток, втулок, перевірка на стенді."
                canonical="https://example.com/services/starters"
            />
            <section className="py-16 pt-24 mx-auto max-w-6xl px-4">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900 ">
                    Ремонт стартерів
                </h1>
                <article className="space-y-6">

                    <p className="text-gray-700">
                        Професійний ремонт автомобільних стартерів для легкових і
                        комерційних авто. Діагностика, заміна зношених компонентів,
                        відновлення працездатності.
                    </p>

                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Діагностика стартера</li>
                        <li>Заміна втулок і щіток</li>
                        <li>Ремонт обмотки</li>
                        <li>Перевірка на стенді</li>
                    </ul>

                    <div className="rounded border border-gray-200 bg-gray-50 p-4 text-sm">
                        Примічання
                    </div>
                </article>
            </section>
        </>


    )
}
