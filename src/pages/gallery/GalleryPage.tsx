import { Outlet } from 'react-router-dom'

export function GalleryPage() {
    return (
        <section className="py-16 pt-24">
            <div className="mx-auto max-w-6xl px-4">
                <Outlet />
            </div>
        </section>
    )
}
