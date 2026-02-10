import { memo } from 'react'

type BeforeAfterCardProps = {
  title: string
  before: string
  after: string
}

export const BeforeAfterCard = memo(function BeforeAfterCard({
                                    title,
                                    before,
                                    after,
                                }: BeforeAfterCardProps) {
    return (
        <div
            className="
                group
                flex h-full flex-col
                overflow-hidden rounded-lg
                border border-gray-200
                transition
                hover:border-blue-600/40
            "
        >
            {/* IMAGES */}
            <div className="grid flex-1 grid-cols-2 gap-4 bg-gray-50 p-4">
                <div className="flex items-center justify-center overflow-hidden">
                    <img
                        src={before}
                        alt={title}
                        loading="lazy"
                        className="
                            max-h-full max-w-full
                            object-contain
                            transition-transform duration-200
                            group-hover:scale-[1.04]
                        "
                    />
                </div>

                <div className="flex items-center justify-center overflow-hidden">
                    <img
                        src={after}
                        alt={title}
                        loading="lazy"
                        className="
                            max-h-full max-w-full
                            object-contain
                            transition-transform duration-200
                            group-hover:scale-[1.04]
                        "
                    />
                </div>
            </div>

            {/* TITLE */}
            <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-900">
                    {title}
                </p>
            </div>
        </div>
    )
})
