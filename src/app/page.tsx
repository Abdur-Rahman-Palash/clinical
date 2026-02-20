import { Metadata } from 'next';
import Hero from '@/components/Hero';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Dr. Sarah Mitchell, PsyD | Licensed Psychotherapist in New York',
  description:
    'Compassionate, evidence-based psychotherapy for anxiety, depression, trauma, and life transitions. Serving clients in-person in NYC and via telehealth. Book a free consultation today.',
  openGraph: {
    title: 'Dr. Sarah Mitchell, PsyD | Licensed Psychotherapist',
    description: 'Compassionate, evidence-based psychotherapy for meaningful change.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
}
