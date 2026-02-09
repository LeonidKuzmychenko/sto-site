import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { selectNavItems } from "../../entities/section/model/selectors"
import { useActiveSection } from "../../entities/section/model/useActiveSection"

const LANGS = [
    { code: "ua", label: "UA" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" }
] as const

export function Nav() {
    const { t, i18n } = useTranslation()
    const items = selectNavItems()
    const activeId = useActiveSection()

    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // закрытие по клику вне
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    const currentLang =
        LANGS.find((l) => l.code === i18n.language) ?? LANGS[0]

    return (
        <nav className="flex items-center gap-10 text-sm font-medium">
            {/* links */}
            <div className="flex gap-8 text-slate-700">
                {items.map((item) => {
                    const isActive = item.id === activeId

                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`
                                relative transition-colors
                                ${isActive
                                ? "text-slate-900"
                                : "hover:text-slate-900"}
                                after:absolute after:left-0 after:-bottom-1
                                after:h-[1px] after:bg-slate-900
                                after:transition-all
                                ${isActive
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"}
                            `}
                        >
                            {t(item.labelKey)}
                        </a>
                    )
                })}
            </div>

            {/* language dropdown */}
            <div ref={ref} className="relative">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="
                        text-xs uppercase tracking-wide
                        text-slate-500 hover:text-slate-900
                        transition-colors
                        flex items-center gap-1
                    "
                >
                    {currentLang.label}
                    <span className="text-[10px]">▾</span>
                </button>

                {open && (
                    <div
                        className="
                            absolute right-0 mt-2
                            min-w-[48px]
                            rounded-md border border-slate-200
                            bg-white shadow-sm
                            overflow-hidden
                        "
                    >
                        {LANGS.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    i18n.changeLanguage(lang.code)
                                    setOpen(false)
                                }}
                                className={`
                                    w-full px-3 py-1.5 text-left text-xs
                                    transition-colors
                                    ${lang.code === i18n.language
                                    ? "bg-slate-100 text-slate-900"
                                    : "hover:bg-slate-50"}
                                `}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
