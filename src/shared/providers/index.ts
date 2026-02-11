import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import uaContacts from './locales/ua/contacts.json'
import uaFooter from './locales/ua/widgets/footer.json'
import uaHeader from './locales/ua/widgets/header.json'
import uaHome from './locales/ua/home.json'
import uaPaymentDelivery from './locales/ua/payment-delivery.json'
import uaEquipment from './locales/ua/galleries/equipment.json'
import uaBeforeAfter from './locales/ua/galleries/before-after.json'
import uaNotFound from './locales/ua/404.json'

import ruContacts from './locales/ru/contacts.json'
import ruFooter from './locales/ru/widgets/footer.json'
import ruHeader from './locales/ru/widgets/header.json'
import ruHome from './locales/ru/home.json'
import ruPaymentDelivery from './locales/ua/payment-delivery.json'
import ruEquipment from './locales/ru/galleries/equipment.json'
import ruBeforeAfter from './locales/ru/galleries/before-after.json'
import ruNotFound from './locales/ru/404.json'

i18n.use(initReactI18next)
    .init({
        resources: {
            ua: {
                contacts: uaContacts,
                footer: uaFooter,
                header: uaHeader,
                home: uaHome,
                paymentDelivery: uaPaymentDelivery,
                equipment: uaEquipment,
                beforeAfter: uaBeforeAfter,
                notFound: uaNotFound,
            },
            ru: {
                contacts: ruContacts,
                footer: ruFooter,
                header: ruHeader,
                home: ruHome,
                paymentDelivery: ruPaymentDelivery,
                equipment: ruEquipment,
                beforeAfter: ruBeforeAfter,
                notFound: ruNotFound,
            },
        },
        lng: 'ua',
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false,
        },
    })


export default i18n
