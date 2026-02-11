import { memo } from 'react'

type EquipmentCardProps = {
    title: string
    description: string
    image: string
}

export const EquipmentCard = memo(function EquipmentCard({
                                                             title,
                                                             description,
                                                             image,
                                                         }: EquipmentCardProps) {
    return (
        <div
            className="
        group
        flex h-full flex-col
        overflow-hidden rounded-lg
        border border-gray-200
        bg-white
        transition-colors
        hover:border-blue-600/40
      "
        >
            {/* TITLE */}
            <div className="px-5 pt-5 text-center">
                <h3 className="text-base font-semibold text-gray-900">
                    {title}
                </h3>
            </div>

            {/* IMAGE */}
            <div className="relative mt-4 h-48 overflow-hidden bg-gray-50">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="
            h-full w-full
            object-contain
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
                />
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-1 items-center justify-center px-5 pb-5 pt-4">
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {description}
                </p>
            </div>
        </div>
    )
})
