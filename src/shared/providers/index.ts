import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ru from "./locales/ru.json"
import en from "./locales/en.json"
import ua from "./locales/ua.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ua: { translation: ua },
            en: { translation: en },
            ru: { translation: ru },
        },
        lng: "ua",
        fallbackLng: "ua",
        interpolation: {
            escapeValue: false,
        },
    })


export default i18n
