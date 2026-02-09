import { BaseSection } from "./BaseSection.tsx"

type Props = {
    id: string
    bgClass: string
}

export function ServicesSection({ id, bgClass }: Props) {
    return (
        <BaseSection id={id} bgClass={bgClass} title="Услуги">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow">
                    Диагностика
                </div>
                <div className="p-6 bg-white rounded-xl shadow">
                    Ремонт двигателя
                </div>
                <div className="p-6 bg-white rounded-xl shadow">
                    ТО
                </div>
            </div>
        </BaseSection>
    )
}
