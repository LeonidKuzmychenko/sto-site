const CASES = [
    'Ремонт генератора Bosch',
    'Ремонт стартера Valeo',
    'Восстановление генератора Denso',
    'Ремонт стартера Bosch',
]

export function BeforeAfterPage() {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                До / После
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CASES.map((title) => (
                    <div
                        key={title}
                        className="rounded border border-gray-200 p-4"
                    >
                        <div className="mb-2 text-sm font-medium text-gray-900">
                            {title}
                        </div>

                        <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex-1 rounded border border-dashed border-gray-300 p-4 text-center">
                                До
                            </span>
                            <span className="flex-1 rounded border border-dashed border-gray-300 p-4 text-center">
                                После
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
