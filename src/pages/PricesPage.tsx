export function PricesPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-16">
            <h1 className="mb-8 text-3xl font-bold">Цены</h1>

            <table className="w-full border-collapse text-left">
                <thead>
                <tr className="border-b">
                    <th className="py-2">Услуга</th>
                    <th className="py-2">Цена</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                <tr className="border-b">
                    <td className="py-2">Диагностика</td>
                    <td className="py-2">Бесплатно</td>
                </tr>
                <tr className="border-b">
                    <td className="py-2">Ремонт стартера</td>
                    <td className="py-2">от 800 грн</td>
                </tr>
                <tr>
                    <td className="py-2">Ремонт генератора</td>
                    <td className="py-2">от 900 грн</td>
                </tr>
                </tbody>
            </table>
        </main>
    )
}
