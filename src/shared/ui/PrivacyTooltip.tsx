import { useState } from 'react'

const PRIVACY_CONTENT = (
  <>
    <p className="mb-2">
      Сайт використовує технічні cookies, необхідні для коректної роботи та
      відображення сторінок.
    </p>
    <p className="mb-2">
      Сайт не здійснює збір персональних даних користувачів та не використовує
      аналітичні або рекламні інструменти.
    </p>
    <p className="mb-2">Жодна інформація не передається третім особам.</p>
    <p>
      Продовжуючи користування сайтом, ви погоджуєтесь з цією політикою
      конфіденційності.
    </p>
  </>
)

export function PrivacyTooltip() {
  const [open, setOpen] = useState(false)

  return (
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
          {PRIVACY_CONTENT}
        </div>
      )}
    </div>
  )
}
