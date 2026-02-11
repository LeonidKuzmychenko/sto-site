import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '@/shared/constants'
import { Seo } from '../shared/seo/Seo'

export function NotFoundPage() {
    const { t } = useTranslation('notFound')

    return (
        <main className="mx-auto max-w-4xl px-4 py-24 text-center">
            <Seo
                title={t('notFoundPage.meta.title')}
                description={t('notFoundPage.meta.description')}
            />

            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                404
            </h1>

            <p className="mb-8 text-gray-600">
                {t('notFoundPage.title')}
            </p>

            <Link
                to={ROUTES.home}
                className="text-sm font-medium text-blue-600 hover:underline"
            >
                {t('notFoundPage.backHome')}
            </Link>
        </main>
    )
}
