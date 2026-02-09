import { BaseSection } from "./BaseSection.tsx"

type Props = {
    id: string
    bgClass: string
}

export function PricesSection({ id, bgClass }: Props) {
    return (
        <BaseSection id={id} bgClass={bgClass} title="Цены">
            <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                    <span>Диагностика</span>
                    <span>1 000 ₽</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span>Замена масла</span>
                    <span>1 500 ₽</span>
                </div>
            </div>
        </BaseSection>
    )
}
