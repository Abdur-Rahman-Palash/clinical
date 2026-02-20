import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { therapistSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: 'Dr. Sarah Mitchell, PsyD | Licensed Psychotherapist',
    template: '%s | Dr. Sarah Mitchell, PsyD',
  },
  description:
    'Compassionate, evidence-based psychotherapy for anxiety, depression, trauma, and life transitions. Serving clients in-person and via telehealth.',
  metadataBase: new URL('https://drsarahmitchell.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Sarah Mitchell, PsyD',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(therapistSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
