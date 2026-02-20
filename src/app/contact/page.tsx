import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
    title: 'Contact & Book a Consultation | Dr. Sarah Mitchell',
    description:
        'Schedule a consultation with Dr. Sarah Mitchell, PsyD. Offering in-person sessions in New York and telehealth appointments. Get in touch today.',
};

export default function Contact() {
    return <ContactPage />;
}
