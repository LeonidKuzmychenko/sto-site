import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Nav } from '../../features/nav/Nav'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="
            fixed top-0 left-0 right-0 z-40
            h-16 bg-white/80 backdrop-blur
            border-b border-slate-200
        ">
            <div className="mx-auto max-w-6xl h-full px-6 flex items-center justify-between">
                <div className="font-semibold text-lg">STO</div>

                <Nav
                    mobileOpen={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                />

                <button
                    onClick={() => setMobileOpen(true)}
                    className="md:hidden"
                >
                    <Menu />
                </button>
            </div>
        </header>
    )
}
