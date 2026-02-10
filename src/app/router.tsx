import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '../pages/Layout'

const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))
const ContactsPage = lazy(() => import('../pages/ContactsPage').then((m) => ({ default: m.ContactsPage })))
const PaymentDeliveryPage = lazy(() => import('../pages/PaymentDeliveryPage').then((m) => ({ default: m.PaymentDeliveryPage })))
const StartersPage = lazy(() => import('../pages/services/StartersPage').then((m) => ({ default: m.StartersPage })))
const GeneratorsPage = lazy(() => import('../pages/services/GeneratorsPage').then((m) => ({ default: m.GeneratorsPage })))
const EquipmentPage = lazy(() => import('../pages/gallery/EquipmentPage').then((m) => ({ default: m.EquipmentPage })))
const BeforeAfterPage = lazy(() => import('../pages/gallery/BeforeAfterPage').then((m) => ({ default: m.BeforeAfterPage })))

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
    </div>
  )
}

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            // errorElement: (
            //   <Suspense fallback={<PageFallback />}>
            //     <NotFoundPage />
            //   </Suspense>
            // ),
            children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<PageFallback />}>
                      <HomePage />
                    </Suspense>
                  ),
                },

                // Услуги
                {
                    path: 'services',
                    element: <Navigate to="starters" replace/>,
                },
                {
                    path: 'services/starters',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <StartersPage />
                      </Suspense>
                    ),
                },
                {
                    path: 'services/generators',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <GeneratorsPage />
                      </Suspense>
                    ),
                },
                //Галерея
                {
                    path: 'gallery',
                    element: <Navigate to="equipment" replace/>,
                },
                {
                    path: 'gallery/equipment',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <EquipmentPage />
                      </Suspense>
                    ),
                },
                {
                    path: 'gallery/before-after',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <BeforeAfterPage />
                      </Suspense>
                    ),
                },
                //Оплата и доставка
                {
                    path: 'payment-delivery',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <PaymentDeliveryPage />
                      </Suspense>
                    ),
                },
                {
                    path: 'contacts',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <ContactsPage />
                      </Suspense>
                    ),
                },
                {
                    path: '*',
                    element: (
                      <Suspense fallback={<PageFallback />}>
                        <NotFoundPage />
                      </Suspense>
                    ),
                }
            ],
        },
    ],
    {
        basename: '/sto-site/',
    }
)
