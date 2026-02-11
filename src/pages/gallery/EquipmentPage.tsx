import { EquipmentCard } from '@/features/ui/EquipmentCard'
import { Seo } from '@/shared/seo/Seo'
import { EQUIPMENT } from '@/shared/data/equipment'

export function EquipmentPage() {
  return (
    <>
      <Seo
        title="Наше обладнання"
        description="Обладнання майстерні: стенди для стартерів і генераторів, діагностичне обладнання, інструменти."
      />
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
    </>
  )
}
