import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '../pages/Layout'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/services/ServicesPage'
import { StartersPage } from '../pages/services/StartersPage'
import { GeneratorsPage } from '../pages/services/GeneratorsPage'
import { PricesPage } from '../pages/PricesPage'
import { ContactsPage } from '../pages/ContactsPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <NotFoundPage />,
            children: [
                // Главная
                { index: true, element: <HomePage /> },

                // Услуги
                {
                    path: 'services',
                    element: <ServicesPage />,
                    children: [
                        // 🔴 ВАЖНО: редирект вместо лишней страницы
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

                // Остальные страницы
                { path: 'prices', element: <PricesPage /> },
                { path: 'contacts', element: <ContactsPage /> },
            ],
        },
    ],
    {
        basename: '/sto-site',
    }
)
