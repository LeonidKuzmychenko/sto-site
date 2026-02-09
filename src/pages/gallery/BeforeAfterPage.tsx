type BeforeAfterItem = {
    id: number
    title: string
    before: string
    after: string
}

const CASES: BeforeAfterItem[] = [
    {
        id: 1,
        title: 'Ремонт генератора Bosch',
        before: '/sto-site/before.jpg',
        after: '/sto-site/after.jpg',
    },
    {
        id: 2,
        title: 'Ремонт стартера Valeo',
        before: '/sto-site/before.jpg',
        after: '/sto-site/after.jpg',
    },
    {
        id: 3,
        title: 'Восстановление генератора Denso',
        before: '/sto-site/before.jpg',
        after: '/sto-site/after.jpg',
    },
    {
        id: 4,
        title: 'Ремонт стартера Bosch',
        before: '/sto-site/before.jpg',
        after: '/sto-site/after.jpg',
    },
]

export function BeforeAfterPage() {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                До / После
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {CASES.map((item) => (
                    <div
                        key={item.id}
                        className="
                            rounded border border-gray-200
                            bg-white p-4
                        "
                    >
                        <div className="mb-4 text-sm font-medium text-gray-900">
                            {item.title}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center text-xs text-gray-600">
                                <img
                                    src={item.before}
                                    alt={`До — ${item.title}`}
                                    loading="lazy"
                                    className="
                                        mb-2 h-40 w-full
                                        rounded object-cover
                                    "
                                />
                                До
                            </div>

                            <div className="text-center text-xs text-gray-600">
                                <img
                                    src={item.after}
                                    alt={`После — ${item.title}`}
                                    loading="lazy"
                                    className="
                                        mb-2 h-40 w-full
                                        rounded object-cover
                                    "
                                />
                                После
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
