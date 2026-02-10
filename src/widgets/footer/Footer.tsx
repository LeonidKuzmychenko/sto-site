import React, { useState } from 'react'

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    const [open, setOpen] = useState(false)

    return (
        <footer className="mt-auto border-t border-neutral-800 bg-neutral-900 text-neutral-400">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="text-sm">
                        © {year} СТО «Заказ». Все права защищены.
                    </div>

                    <div className="relative flex items-center gap-4 text-sm">
                        <div
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            onFocus={() => setOpen(true)}
                            onBlur={() => setOpen(false)}
                        >
                            <span className="cursor-default underline underline-offset-4 transition-colors hover:text-white">
                                Политика конфиденциальности
                            </span>

                            {open && (
                                <div
                                    className="
                                                fixed left-1/2 bottom-20 z-50
                                                w-80 max-w-[calc(100vw-2rem)]
                                                -translate-x-1/2
                                                rounded border border-neutral-700
                                                bg-neutral-800 p-4 text-xs leading-relaxed
                                                text-neutral-300 shadow-xl
                                                max-h-[60vh] overflow-y-auto
                                            "
                                >
                                    <p className="mb-2">
                                        Сайт використовує технічні cookies, необхідні
                                        для коректної роботи та відображення сторінок.
                                    </p>
                                    <p className="mb-2">
                                        Сайт не здійснює збір персональних даних
                                        користувачів та не використовує аналітичні
                                        або рекламні інструменти.
                                    </p>
                                    <p className="mb-2">
                                        Жодна інформація не передається третім особам.
                                    </p>
                                    <p>
                                        Продовжуючи користування сайтом, ви погоджуєтесь
                                        з цією політикою конфіденційності.
                                    </p>
                                </div>
                            )}


                        </div>

                        <a
                            href="https://www.linkedin.com/in/leonid-kuzmychenko/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-white"
                        >
                            Created by Leonid Kuzmychenko
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
