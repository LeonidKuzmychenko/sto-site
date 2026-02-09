import { BaseSection } from "./BaseSection.tsx"

type Props = {
    id: string
    bgClass: string
}

export function ContactsSection({ id, bgClass }: Props) {
    return (
        <BaseSection id={id} bgClass={bgClass} title="Контакты">
            <div className="text-center space-y-2">
                <p>📍 Одесса</p>
                <p>📞 +380-000-00-00</p>
            </div>
        </BaseSection>
    )
}
