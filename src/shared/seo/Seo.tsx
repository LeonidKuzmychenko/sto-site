import { Helmet } from 'react-helmet-async'

type SeoProps = {
    title: string
    description: string
    canonical?: string
}

export function Seo({ title, description, canonical }: SeoProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    )
}
