import {BeforeAfterCard} from '@/features/ui/BeforeAfterCard'
import {Seo} from "@/shared/seo/Seo.tsx";

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
        <>
            <Seo
                title=""
                description=""
            />
            <section className="py-16 pt-24 mx-auto max-w-6xl px-4">
                <h1 className="mb-8 text-2xl font-semibold text-gray-900">
                    До / Після
                </h1>
                <ul
                    className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
                    {CASES.map(item => (
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
