import { useEffect, useState } from "react"
import { sectionsConfig } from "./sections.config"

export function useActiveSection() {
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: `-${getHeaderHeight()}px 0px -60% 0px`,
                threshold: 0,
            }
        )

        sectionsConfig.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return activeId
}

function getHeaderHeight() {
    const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
    return parseInt(value) || 64
}
