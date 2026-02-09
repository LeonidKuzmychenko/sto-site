import { Nav } from './Nav'
import { Sections } from './Sections.tsx'
import Footer from "./Footer.tsx";

function App() {
    return (
        <div className="flex min-h-screen flex-col">
            {/*<header style={{ height: 'var(--header-height)' }}>*/}
            <header>
                <Nav />
            </header>

            <main className="flex-1">
                <Sections />
            </main>

            <Footer />
        </div>
    )
}

export default App
