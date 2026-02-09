import type {ReactNode} from "react"

type BaseSectionProps = {
    id: string
    bgClass: string
    title: string
    children: ReactNode
}

export function BaseSection({
                                id,
                                bgClass,
                                title,
                                children,
                            }: BaseSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen scroll-mt-16 flex items-center justify-center ${bgClass}`}
        >
            <div className="max-w-5xl w-full px-6">
                <h1 className="text-4xl font-semibold mb-8 text-center">
                    {title}
                </h1>
                {children}
            </div>
        </section>
    )
}
