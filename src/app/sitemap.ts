import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://drsarahmitchell.com';
    const lastModified = new Date();

    const routes = [
        { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
        { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/focus-areas', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/contact', priority: 0.95, changeFrequency: 'monthly' as const },
        { url: '/insurance', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
        { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    ];

    return routes.map(({ url, priority, changeFrequency }) => ({
        url: `${baseUrl}${url}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
