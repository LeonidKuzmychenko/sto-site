import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const setCookie = (name: string, value: string, days = 365) => {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

const getCookie = (name: string) => {
    const match = document.cookie.match(
        new RegExp('(^| )' + name + '=([^;]+)')
    )
    return match ? match[2] : null
}

export function LanguageSwitch({ vertical = false }: { vertical?: boolean }) {
    const { i18n } = useTranslation()

    // 🔹 читаем язык из cookie при старте
    useEffect(() => {
        const savedLang = getCookie('lang')
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang)
        }
    }, [i18n])

    const changeLang = (lang: 'ua' | 'ru') => {
        i18n.changeLanguage(lang)
        setCookie('lang', lang)
    }

    const base = 'text-sm transition-opacity'
    const active = 'font-semibold'
    const inactive = 'opacity-60'

    return (
        <div
            className={`flex ${
                vertical ? 'flex-col gap-4' : 'items-center gap-2'
            }`}
        >
            <button
                onClick={() => changeLang('ua')}
                className={`${base} ${
                    i18n.language === 'ua' ? active : inactive
                }`}
            >
                UA
            </button>

            {!vertical && <span className="opacity-30">|</span>}

            <button
                onClick={() => changeLang('ru')}
                className={`${base} ${
                    i18n.language === 'ru' ? active : inactive
                }`}
            >
                RU
            </button>
        </div>
    )
}
