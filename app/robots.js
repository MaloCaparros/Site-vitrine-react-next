export default function robots() {

    const url = 'https://france-evenements-services.vercel.app/';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: url + 'sitemap.xml',
    }
}