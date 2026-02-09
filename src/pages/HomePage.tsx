import Header from "../widgets/header/Header"
import Sections from "../widgets/sections/Sections"
import Footer from "../widgets/footer/Footer"

export function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <Sections/>
            </main>
            <Footer/>
        </>
    )
}
