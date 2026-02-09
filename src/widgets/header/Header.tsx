// src/components/layout/Header.tsx
import { Nav } from "../../features/nav/Nav"

export default function Header() {
    return (
        <header
            className="
                fixed top-0 left-0 right-0 z-50
                h-[var(--header-height)]
                bg-white/80 backdrop-blur
                border-b border-slate-200
            "
        >
            <div className="mx-auto max-w-6xl h-full px-6 flex items-center justify-between">
                <div className="font-semibold text-lg tracking-tight">
                    STO
                </div>
                <Nav />
            </div>
        </header>
    )
}
