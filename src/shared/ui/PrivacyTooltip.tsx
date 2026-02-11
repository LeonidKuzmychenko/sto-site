import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function PrivacyTooltip() {
    const { t } = useTranslation()
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
        {t('privacy.label')}
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
                    <p className="mb-2">{t('privacy.paragraph1')}</p>
                    <p className="mb-2">{t('privacy.paragraph2')}</p>
                    <p className="mb-2">{t('privacy.paragraph3')}</p>
                    <p>{t('privacy.paragraph4')}</p>
                </div>
            )}
        </div>
    )
}
