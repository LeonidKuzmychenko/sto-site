import { Outlet } from 'react-router-dom'
import Footer from '@/widgets/footer/Footer'
import Header from "@/widgets/header/Header.tsx";

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 pt-16">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
