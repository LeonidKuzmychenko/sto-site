import { NavLink } from 'react-router-dom'

export function Nav() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-4 text-sm font-medium">

                <NavLink to="/" end>
                    Главная
                </NavLink>

                {/* УСЛУГИ С DROPDOWN */}
                <div className="relative group">
                    <NavLink to="/services">
                        Услуги
                    </NavLink>

                    <div className="absolute left-0 top-full hidden min-w-48 rounded-md border bg-white shadow-md group-hover:block">
                        <NavLink
                            to="/services/starters"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Стартеры
                        </NavLink>

                        <NavLink
                            to="/services/generators"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Генераторы
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/prices">
                    Цены
                </NavLink>

                <NavLink to="/contacts">
                    Контакты
                </NavLink>
            </div>
        </nav>
    )
}
