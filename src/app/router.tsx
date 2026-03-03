import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '../pages/parent/Layout.tsx'
import { BASE_URL } from '@/shared/data/const.ts'

// Core pages
const HomePage = lazy(() =>
    import('../pages/HomePage').then((m) => ({ default: m.HomePage }))
)

const NotFoundPage = lazy(() =>
    import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
)

const ContactsPage = lazy(() =>
    import('../pages/ContactsPage').then((m) => ({ default: m.ContactsPage }))
)

const PaymentDeliveryPage = lazy(() =>
    import('../pages/PaymentDeliveryPage').then((m) => ({ default: m.PaymentDeliveryPage }))
)

// Services
const StartersPage = lazy(() =>
    import('../pages/services/StartersPage').then((m) => ({ default: m.StartersPage }))
)

const GeneratorsPage = lazy(() =>
    import('../pages/services/GeneratorsPage').then((m) => ({ default: m.GeneratorsPage }))
)

const MaintenancePage = lazy(() =>
    import('../pages/services/MaintenancePage').then((m) => ({ default: m.MaintenancePage }))
)

const MechanicalWorksPage = lazy(() =>
    import('../pages/services/MechanicalWorksPage').then((m) => ({ default: m.MechanicalWorksPage }))
)

const DiagnosticsPage = lazy(() =>
    import('../pages/services/DiagnosticsPage').then((m) => ({ default: m.DiagnosticsPage }))
)

const PartsSelectionPage = lazy(() =>
    import('../pages/services/PartsSelectionPage').then((m) => ({ default: m.PartsSelectionPage }))
)

const WiringRepairPage = lazy(() =>
    import('../pages/services/WiringRepairPage').then((m) => ({ default: m.WiringRepairPage }))
)

// Gallery
const EquipmentPage = lazy(() =>
    import('../pages/gallery/EquipmentPage').then((m) => ({ default: m.EquipmentPage }))
)

const BeforeAfterPage = lazy(() =>
    import('../pages/gallery/BeforeAfterPage').then((m) => ({ default: m.BeforeAfterPage }))
)

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
            children: [
                // Главная
                {
                    index: true,
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <HomePage />
                        </Suspense>
                    ),
                },

                // ===== УСЛУГИ =====
                {
                    path: 'services',
                    element: <Navigate to="starters" replace />,
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
                {
                    path: 'services/maintenance',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <MaintenancePage />
                        </Suspense>
                    ),
                },
                {
                    path: 'services/mechanical',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <MechanicalWorksPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'services/diagnostics',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <DiagnosticsPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'services/parts-selection',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <PartsSelectionPage />
                        </Suspense>
                    ),
                },
                {
                    path: 'services/wiring',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <WiringRepairPage />
                        </Suspense>
                    ),
                },

                // ===== ГАЛЕРЕЯ =====
                {
                    path: 'gallery',
                    element: <Navigate to="equipment" replace />,
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

                // Оплата
                {
                    path: 'payment-delivery',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <PaymentDeliveryPage />
                        </Suspense>
                    ),
                },

                // Контакты
                {
                    path: 'contacts',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <ContactsPage />
                        </Suspense>
                    ),
                },

                // 404
                {
                    path: '*',
                    element: (
                        <Suspense fallback={<PageFallback />}>
                            <NotFoundPage />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
    {
        basename: `${BASE_URL}/`,
    }
)
