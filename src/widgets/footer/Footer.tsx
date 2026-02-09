import React from "react";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-neutral-900 text-neutral-300">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Левая часть */}
                    <div className="text-sm">
                        © {year} СТО «Заказ». Все права защищены.
                    </div>

                    {/* Правая часть */}
                    <nav className="flex gap-4 text-sm">
                        <a
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Политика конфиденциальности
                        </a>
                        <a
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Пользовательское соглашение
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
