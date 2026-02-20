import { Metadata } from 'next';
import FocusAreasPage from './FocusAreasPage';

export const metadata: Metadata = {
    title: 'Focus Areas & Therapy Approaches | Dr. Sarah Mitchell',
    description:
        'Specialized therapy for anxiety, depression, trauma, relationship challenges, stress, and life transitions. Learn about CBT, psychodynamic, mindfulness, and trauma-informed approaches.',
};

export default function FocusAreas() {
    return <FocusAreasPage />;
}
