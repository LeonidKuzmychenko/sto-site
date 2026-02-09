import type {SectionConfig} from "./types"

export const sectionsConfig: SectionConfig[] = [
    {
        id: "services",
        type: "services",
        bgClass: "bg-slate-100",
        nav: {
            labelKey: "nav.services",
            order: 1,
        },
    },
    {
        id: "prices",
        type: "prices",
        bgClass: "bg-slate-200",
        nav: {
            labelKey: "nav.prices",
            order: 2,
        },
    },
    {
        id: "contacts",
        type: "contacts",
        bgClass: "bg-slate-300",
        nav: {
            labelKey: "nav.contacts",
            order: 3,
        },
    },
]
