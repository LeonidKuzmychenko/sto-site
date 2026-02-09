import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '../pages/Layout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ContactsPage } from '../pages/ContactsPage'

// services
import { ServicesPage } from '../pages/services/ServicesPage'
import { StartersPage } from '../pages/services/StartersPage'
import { GeneratorsPage } from '../pages/services/GeneratorsPage'

// gallery
import { GalleryPage } from '../pages/gallery/GalleryPage'
import { EquipmentPage } from '../pages/gallery/EquipmentPage'
import { BeforeAfterPage } from '../pages/gallery/BeforeAfterPage'
import {PaymentDeliveryPage} from "@/pages/PaymentDeliveryPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            // Главная
            {
                index: true,
                element: <HomePage />,
            },

            // Услуги
            {
                path: 'services',
                element: <ServicesPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="starters" replace />,
                    },
                    {
                        path: 'starters',
                        element: <StartersPage />,
                    },
                    {
                        path: 'generators',
                        element: <GeneratorsPage />,
                    },
                ],
            },

            // Галерея
            {
                path: 'gallery',
                element: <GalleryPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="equipment" replace />,
                    },
                    {
                        path: 'equipment',
                        element: <EquipmentPage />,
                    },
                    {
                        path: 'before-after',
                        element: <BeforeAfterPage />,
                    },
                ],
            },

            // Оплата / доставка
            {
                path: 'payment-delivery',
                element: <PaymentDeliveryPage />,
            },

            // Контакты
            {
                path: 'contacts',
                element: <ContactsPage />,
            },

            // 404
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
