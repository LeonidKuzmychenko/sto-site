import { Outlet } from 'react-router-dom'
import Footer from '@/widgets/footer/Footer.tsx'
import Header from "@/widgets/header/Header.tsx";

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
