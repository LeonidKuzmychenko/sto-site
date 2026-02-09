import { useTranslation } from "react-i18next"
import { selectNavItems } from "../../entities/section/model/selectors"

export function Nav() {
    const { t } = useTranslation()
    const items = selectNavItems()

    return (
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
            {items.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="
                        relative
                        transition-colors
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[1px] after:w-0
                        after:bg-slate-900
                        after:transition-all
                        hover:after:w-full
                    "
                >
                    {t(item.labelKey)}
                </a>
            ))}
        </nav>
    )
}
