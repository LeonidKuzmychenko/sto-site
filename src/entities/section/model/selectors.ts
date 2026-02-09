import { sectionsConfig } from "./sections.config"

export const selectNavItems = () =>
    sectionsConfig
        .filter((section) => section.nav)
        .sort((a, b) => a.nav!.order - b.nav!.order)
        .map((section) => ({
            id: section.id,
            labelKey: section.nav!.labelKey,
        }))
