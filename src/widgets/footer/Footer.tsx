import { PrivacyTooltip } from '@/shared/ui'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-neutral-800 bg-neutral-900 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm">
            © {year} СТО «Заказ». Все права защищены.
          </div>

          <div className="flex items-center gap-4 text-sm">
            <PrivacyTooltip />
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
