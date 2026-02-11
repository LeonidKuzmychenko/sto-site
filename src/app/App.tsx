import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './router'

import { Suspense } from 'react'

export function App() {
    return (
        <HelmetProvider>
            <Suspense fallback={null}>
                <RouterProvider router={router} />
            </Suspense>
        </HelmetProvider>
    )
}

