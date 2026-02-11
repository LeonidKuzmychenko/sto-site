import { EquipmentCard } from '@/features/ui/EquipmentCard'
import { Seo } from '@/shared/seo/Seo'
import { EQUIPMENT } from '@/shared/data/equipment'
import { useTranslation } from 'react-i18next'

export function EquipmentPage() {
    const { t } = useTranslation('galleries/equipment')

    return (
        <>
            <Seo
                title={t('equipmentPage.meta.title')}
                description={t('equipmentPage.meta.description')}
            />

            <section className="py-16 pt-24">
                <div className="mx-auto max-w-6xl px-4">

                    {/* PAGE HEADER */}
                    <header className="mb-10">
                        <h1 className="text-2xl font-semibold text-gray-900">
                            {t('equipmentPage.title')}
                        </h1>
                    </header>

                    {/* GRID */}
                    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
                        {EQUIPMENT.map(item => (
                            <li key={item.id} className="h-full">
                                <EquipmentCard
                                    title={t(item.titleKey)}
                                    description={t(item.descriptionKey)}
                                    image={item.image}
                                />
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
        </>
    )
}
