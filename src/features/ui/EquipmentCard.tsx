type EquipmentCardProps = {
    title: string
    image: string
}

export function EquipmentCard({ title, image }: EquipmentCardProps) {
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
            {/* IMAGE */}
            <div className="flex flex-1 items-center justify-center bg-gray-50 p-4 overflow-hidden">
                <img
                    src={image}
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

            {/* TITLE */}
            <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-900">
                    {title}
                </p>
            </div>
        </div>
    )
}
