export type SectionType = "services" | "prices" | "contacts"

export type BaseSectionConfig = {
    id: string
    type: SectionType
    bgClass: string
}

export type ServicesSectionConfig = BaseSectionConfig & {
    type: "services"
}

export type PricesSectionConfig = BaseSectionConfig & {
    type: "prices"
}

export type ContactsSectionConfig = BaseSectionConfig & {
    type: "contacts"
}

export type SectionConfig =
    | ServicesSectionConfig
    | PricesSectionConfig
    | ContactsSectionConfig
