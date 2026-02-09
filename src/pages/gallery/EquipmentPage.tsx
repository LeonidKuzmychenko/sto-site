const EQUIPMENT = [
    'Стенд проверки стартеров',
    'Стенд проверки генераторов',
    'Токарный станок',
    'Пресс гидравлический',
    'Диагностическое оборудование',
]

export function EquipmentPage() {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                Наше оборудование
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {EQUIPMENT.map((name) => (
                    <div
                        key={name}
                        className="rounded border border-gray-200 p-4 text-sm text-gray-800"
                    >
                        {name}
                    </div>
                ))}
            </div>
        </div>
    )
}
