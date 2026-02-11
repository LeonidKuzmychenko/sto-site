import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// UA
import uaContacts from './locales/ua/contacts.json'
import uaFooter from './locales/ua/widgets/footer.json'
import uaHeader from './locales/ua/widgets/header.json'
import uaHome from './locales/ua/home.json'
import uaPaymentDelivery from './locales/ua/payment-delivery.json'
import uaEquipment from './locales/ua/galleries/equipment.json'
import uaBeforeAfter from './locales/ua/galleries/before-after.json'
import uaNotFound from './locales/ua/404.json'

import uaDiagnostics from './locales/ua/services/diagnostics.json'
import uaGenerators from './locales/ua/services/generators.json'
import uaMaintenance from './locales/ua/services/maintenance.json'
import uaMechanicalWorks from './locales/ua/services/mechanical-works.json'
import uaPartsSelection from './locales/ua/services/parts-selection.json'
import uaStarters from './locales/ua/services/starters.json'
import uaWiringRepair from './locales/ua/services/wiring-repair.json'

// RU
import ruContacts from './locales/ru/contacts.json'
import ruFooter from './locales/ru/widgets/footer.json'
import ruHeader from './locales/ru/widgets/header.json'
import ruHome from './locales/ru/home.json'
import ruPaymentDelivery from './locales/ru/payment-delivery.json'
import ruEquipment from './locales/ru/galleries/equipment.json'
import ruBeforeAfter from './locales/ru/galleries/before-after.json'
import ruNotFound from './locales/ru/404.json'

import ruDiagnostics from './locales/ru/services/diagnostics.json'
import ruGenerators from './locales/ru/services/generators.json'
import ruMaintenance from './locales/ru/services/maintenance.json'
import ruMechanicalWorks from './locales/ru/services/mechanical-works.json'
import ruPartsSelection from './locales/ru/services/parts-selection.json'
import ruStarters from './locales/ru/services/starters.json'
import ruWiringRepair from './locales/ru/services/wiring-repair.json'

i18n
    .use(initReactI18next)
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

                diagnostics: uaDiagnostics,
                generators: uaGenerators,
                maintenance: uaMaintenance,
                mechanicalWorks: uaMechanicalWorks,
                partsSelection: uaPartsSelection,
                starters: uaStarters,
                wiringRepair: uaWiringRepair,
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

                diagnostics: ruDiagnostics,
                generators: ruGenerators,
                maintenance: ruMaintenance,
                mechanicalWorks: ruMechanicalWorks,
                partsSelection: ruPartsSelection,
                starters: ruStarters,
                wiringRepair: ruWiringRepair,
            },
        },
        lng: 'ua',
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
