const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
}


export function Nav() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <div className="text-lg font-semibold tracking-tight">
                    STO
                </div>

                <ul className="flex gap-8 text-sm font-medium">
                    <li>
                        <button
                            onClick={() => scrollTo('services')}
                            className="transition-colors hover:text-blue-600"
                        >
                            Услуги
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollTo('prices')}
                            className="transition-colors hover:text-blue-600"
                        >
                            Цены
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollTo('contacts')}
                            className="transition-colors hover:text-blue-600"
                        >
                            Контакты
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
