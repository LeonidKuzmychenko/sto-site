import { Seo } from '@/shared/seo/Seo'
import { InfoCard, SocialLink } from '@/shared/ui'
import { MESSENGERS, SOCIAL_NETWORKS } from '@/shared/data/social'
import { MapPin, Phone, Clock } from 'lucide-react'

export function ContactsPage() {
  return (
    <>
      <Seo
        title="Контакти"
        description="Контактна інформація майстерні з ремонту стартерів і генераторів в Одесі. Телефон, адреса, графік роботи."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 pt-24">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">Контакти</h1>

        <div className="grid gap-8 lg:grid-cols-[max-content_1fr]">
          <div className="space-y-6">
            <InfoCard title="Адреса" icon={<MapPin className="h-5 w-5 text-blue-600" />}>
              <p className="text-gray-700">Одеська обл., Овідіопольський р-н</p>
              <p className="text-gray-700">
                с. Прилиманське, вул. Центральна (Жовтнева), 170
              </p>
              <p className="text-sm text-gray-600">
                Орієнтир: білі ворота біля паркингу
              </p>
            </InfoCard>

            <InfoCard title="Телефон" icon={<Phone className="h-5 w-5 text-blue-600" />}>
              <a
                href="tel:+380XXXXXXXXX"
                className="text-lg font-medium text-blue-600 transition-colors hover:underline"
              >
                +380 XX XXX XX XX
              </a>
            </InfoCard>

            <InfoCard title="Графік роботи" icon={<Clock className="h-5 w-5 text-blue-600" />}>
              <p className="text-gray-700">Пн–Пт: 09:00–18:00</p>
              <p className="text-sm text-gray-600">Сб–Нд: вихідні</p>
            </InfoCard>

            <InfoCard title="Месенджери">
              <ul className="space-y-3">
                {MESSENGERS.map((item) => (
                  <SocialLink key={item.label} {...item} />
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Соціальні мережі">
              <ul className="space-y-3">
                {SOCIAL_NETWORKS.map((item) => (
                  <SocialLink key={item.label} {...item} />
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            <iframe
              title="Ми на мапі"
              src="https://www.google.com/maps?q=Odessa&output=embed"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
