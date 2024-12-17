export default function sitemap() {

    const url = 'https://france-evenements-services.vercel.app/';

    return [
        {
            url: url,
            changefreq: 'yearly',
            priority: 1,
            lastmod: new Date()
        },
        {
            url: `${url}accompagner`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}actualite`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}entreprise`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}installation`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}produit`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}realisation`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}stand`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}solution`,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
        },
        {
            url: `${url}contact`,
            changefreq: 'yearly',
            priority: 0.5,
            lastmod: new Date()
        },
        {
            url: `${url}legal`,
            changefreq: 'yearly',
            priority: 0.1,
            lastmod: new Date()
        },
    ]
}