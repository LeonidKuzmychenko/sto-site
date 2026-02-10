import { BeforeAfterCard } from '@/features/ui/BeforeAfterCard'
import { Seo } from '@/shared/seo/Seo'
import { BEFORE_AFTER_CASES } from '@/shared/data/beforeAfter'

export function BeforeAfterPage() {
    return (
        <>
            <Seo
                title="До / Після — результати ремонту"
                description="Результати роботи майстерні: до та після ремонту стартерів і генераторів."
            />
            <section className="py-16 pt-24 mx-auto max-w-6xl px-4">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    До / Після
                </h1>
                <ul
                    className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
                    {BEFORE_AFTER_CASES.map((item) => (
                        <li key={item.id} className="h-full">
                            <BeforeAfterCard
                                title={item.title}
                                before={item.before}
                                after={item.after}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
