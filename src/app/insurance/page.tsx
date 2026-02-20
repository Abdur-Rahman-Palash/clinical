import { Metadata } from 'next';
import InsurancePage from './InsurancePage';

export const metadata: Metadata = {
    title: 'Insurance & Fees | Dr. Sarah Mitchell',
    description:
        'Transparent information about accepted insurance plans, self-pay rates, sliding scale availability, and cancellation policy for therapy with Dr. Sarah Mitchell.',
};

export default function Insurance() {
    return <InsurancePage />;
}
