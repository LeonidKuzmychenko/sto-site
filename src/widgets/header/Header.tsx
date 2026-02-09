// src/components/layout/Header.tsx
import { Nav } from '../../features/nav/Nav.tsx'

export default function Header() {
    return (
        <header style={{ height: 'var(--header-height)' }}>
            <Nav />
        </header>
    )
}
