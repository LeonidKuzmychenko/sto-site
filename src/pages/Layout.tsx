import { Outlet } from 'react-router-dom'
import { Nav } from '../features/nav/Nav'
import Footer from '@/widgets/footer/Footer'

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Nav />

            <main className="flex-1 pt-16">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
