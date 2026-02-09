export type SectionType = "services" | "prices" | "contacts"

export type NavMeta = {
    labelKey: string
    order: number
}

export type BaseSectionConfig = {
    id: string
    type: SectionType
    bgClass: string
    nav?: NavMeta
}

export type SectionConfig = BaseSectionConfig
