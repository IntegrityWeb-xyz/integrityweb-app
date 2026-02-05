import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/', '/api/'], // Disallow private areas
        },
        sitemap: 'https://integrityweb.xyz/sitemap.xml',
    }
}
