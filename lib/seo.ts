import { Metadata } from 'next';

const SITE_NAME = 'Dr. Sarah Mitchell, PsyD | Licensed Psychotherapist';
const SITE_URL = 'https://drsarahmitchell.com';
const SITE_DESCRIPTION =
    'Compassionate, evidence-based psychotherapy for anxiety, depression, trauma, and life transitions. Serving clients in-person and via telehealth.';

export function generateMetadata(
    title: string,
    description?: string,
    path?: string
): Metadata {
    const fullTitle = `${title} | Dr. Sarah Mitchell, PsyD`;
    const desc = description ?? SITE_DESCRIPTION;
    const url = `${SITE_URL}${path ?? ''}`;

    return {
        title: fullTitle,
        description: desc,
        metadataBase: new URL(SITE_URL),
        openGraph: {
            title: fullTitle,
            description: desc,
            url,
            siteName: SITE_NAME,
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: desc,
        },
        alternates: { canonical: url },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
        },
    };
}

export const therapistSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Sarah Mitchell, PsyD',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: '+1-555-234-5678',
    email: 'hello@drsarahmitchell.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '245 Wellness Avenue, Suite 310',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10001',
        addressCountry: 'US',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060',
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-14:00'],
    priceRange: '$$',
    medicalSpecialty: 'Psychiatry',
    availableService: [
        'Individual Therapy',
        'Anxiety Treatment',
        'Depression Counseling',
        'Trauma Therapy',
        'Telehealth Sessions',
    ],
};
