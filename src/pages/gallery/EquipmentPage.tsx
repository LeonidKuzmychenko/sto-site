type EquipmentItem = {
    id: number
    title: string
    image: string
}

const EQUIPMENT: EquipmentItem[] = [
    {
        id: 1,
        title: 'Автомобильный подъёмник (2-стоечный / 4-стоечный)',
        image: '/sto-site/1.webp',
    },
    {
        id: 2,
        title: 'Диагностический сканер OBD-II',
        image: '/sto-site/2.jpeg',
    },
    {
        id: 3,
        title: 'Стенд для проверки стартеров и генераторов',
        image: '/sto-site/3.webp',
    },
    {
        id: 4,
        title: 'Компрессор с пневмолинией',
        image: '/sto-site/4.jpg',
    },
    {
        id: 5,
        title: 'Шиномонтажный станок',
        image: '/sto-site/5.jpg',
    },
    {
        id: 6,
        title: 'Балансировочный станок',
        image: '/sto-site/6.jpg',
    },
    {
        id: 7,
        title: 'Гидравлический пресс',
        image: '/sto-site/7.jpg',
    },
]


export function EquipmentPage() {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                Наше оборудование
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {EQUIPMENT.map((item) => (
                    <div
                        key={item.id}
                        className="
                            flex flex-col
                            overflow-hidden
                            rounded border border-gray-200
                            bg-white
                        "
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="
                                w-full flex-1
                                object-cover
                            "
                        />

                        <div
                            className="
                                flex items-center justify-center
                                px-4 py-3
                                text-center text-sm font-medium text-gray-800
                            "
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
