import {createBrowserRouter, Navigate} from 'react-router-dom'

import {Layout} from '../pages/Layout'
import {HomePage} from '../pages/HomePage'
import {NotFoundPage} from '../pages/NotFoundPage'
import {ContactsPage} from '../pages/ContactsPage'
import {PaymentDeliveryPage} from '../pages/PaymentDeliveryPage'

// services
import {StartersPage} from '../pages/services/StartersPage'
import {GeneratorsPage} from '../pages/services/GeneratorsPage'

// gallery
import {EquipmentPage} from '../pages/gallery/EquipmentPage'
import {BeforeAfterPage} from '../pages/gallery/BeforeAfterPage'

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout/>,
            errorElement: <NotFoundPage/>,
            children: [
                {index: true, element: <HomePage/>},

                //Услуги
                {
                    path: 'services',
                    element: <Navigate to="starters" replace/>,
                },
                {
                    path: 'services/starters',
                    element: <StartersPage/>,
                },
                {
                    path: 'services/generators',
                    element: <GeneratorsPage/>,
                },
                //Галерея
                {
                    path: 'gallery',
                    element: <Navigate to="equipment" replace/>,
                },
                {
                    path: 'gallery/equipment',
                    element: <EquipmentPage/>,
                },
                {
                    path: 'gallery/before-after',
                    element: <BeforeAfterPage/>,
                },
                //Оплата и доставка
                {
                    path: 'payment-delivery',
                    element: <PaymentDeliveryPage/>
                },
                //Контакты
                {
                    path: 'contacts',
                    element: <ContactsPage/>
                },
                //404
                {
                    path: '*',
                    element: <NotFoundPage/>
                }
            ],
        },
    ],
    {
        basename: '/sto-site/',
    }
)
