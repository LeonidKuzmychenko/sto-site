import {EquipmentCard} from '@/features/ui/EquipmentCard'

type EquipmentItem = {
    id: number
    title: string
    image: string
}

const EQUIPMENT: EquipmentItem[] = [
    {id: 1, title: 'Автомобильный подъёмник (2-стоечный / 4-стоечный)', image: '/sto-site/1.webp'},
    {id: 2, title: 'Диагностический сканер OBD-II', image: '/sto-site/2.jpeg'},
    {id: 3, title: 'Стенд для проверки стартеров и генераторов', image: '/sto-site/3.webp'},
    {id: 4, title: 'Компрессор с пневмолинией', image: '/sto-site/4.jpg'},
    {id: 5, title: 'Шиномонтажный станок', image: '/sto-site/5.jpg'},
    {id: 6, title: 'Балансировочный станок', image: '/sto-site/6.jpg'},
    {id: 7, title: 'Гидравлический пресс', image: '/sto-site/7.jpg'},
]

export function EquipmentPage() {
    return (
        <section className="py-16 pt-24">
            <div className="mx-auto max-w-6xl px-4">
                <div>
                    <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                        Наше оборудование
                    </h1>
                    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
                        {EQUIPMENT.map(item => (
                            <li key={item.id} className="h-full">
                                <EquipmentCard
                                    title={item.title}
                                    image={item.image}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>


    )
}
