import { Metadata } from 'next';
import FAQPage from './FAQPage';

export const metadata: Metadata = {
    title: 'FAQ | Dr. Sarah Mitchell',
    description:
        'Answers to common questions about therapy sessions, insurance, confidentiality, cancellation policy, and telehealth with Dr. Sarah Mitchell, PsyD.',
};

export default function FAQ() {
    return <FAQPage />;
}
