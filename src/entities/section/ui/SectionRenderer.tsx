import type {SectionConfig} from "../model/types"
import { ServicesSection } from "./ServicesSection"
import { PricesSection } from "./PricesSection"
import { ContactsSection } from "./ContactsSection"

export function SectionRenderer({ section }: { section: SectionConfig }) {
    switch (section.type) {
        case "services":
            return <ServicesSection {...section} />
        case "prices":
            return <PricesSection {...section} />
        case "contacts":
            return <ContactsSection {...section} />
        default:
            return null
    }
}
