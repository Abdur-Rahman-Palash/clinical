import { Metadata } from 'next';
import BlogPage from './BlogPage';

export const metadata: Metadata = {
    title: 'Resources & Blog | Dr. Sarah Mitchell',
    description:
        'Mental health articles, insights, and resources from Dr. Sarah Mitchell, PsyD. Evidence-based guidance on anxiety, depression, relationships, and well-being.',
};

export default function Blog() {
    return <BlogPage />;
}
