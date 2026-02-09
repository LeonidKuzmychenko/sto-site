import { useTranslation } from 'react-i18next'

export function LanguageSwitch({ vertical = false }: { vertical?: boolean }) {
    const { i18n } = useTranslation()

    const base = 'text-sm transition-opacity'
    const active = 'font-semibold'
    const inactive = 'opacity-60'

    return (
        <div className={`flex ${vertical ? 'flex-col gap-4' : 'items-center gap-2'}`}>
            <button
                onClick={() => i18n.changeLanguage('ua')}
                className={`${base} ${i18n.language === 'ua' ? active : inactive}`}
            >
                UA
            </button>

            {!vertical && <span className="opacity-30">|</span>}

            <button
                onClick={() => i18n.changeLanguage('ru')}
                className={`${base} ${i18n.language === 'ru' ? active : inactive}`}
            >
                RU
            </button>
        </div>
    )
}
