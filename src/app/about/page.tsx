import { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
    title: 'About Dr. Sarah Mitchell | Licensed Psychotherapist',
    description:
        'Learn about Dr. Sarah Mitchell, PsyD — her credentials, philosophy of care, therapeutic approach, and passion for helping people create meaningful change.',
};

export default function About() {
    return <AboutPage />;
}
