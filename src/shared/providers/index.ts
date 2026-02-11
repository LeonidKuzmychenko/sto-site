import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import {BASE_URL} from "@/shared/data/const.ts";

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'ua',
        fallbackLng: 'ua',

        defaultNS: 'home',

        backend: {
            loadPath: `${BASE_URL}/locales/{{lng}}/{{ns}}.json`,
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: true,
        },
    })

export default i18n