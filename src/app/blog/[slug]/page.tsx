import { Metadata } from 'next';
import BlogPostPage from './BlogPostPage';

export const metadata: Metadata = {
    title: 'Blog Post | Dr. Sarah Mitchell',
    description: 'Mental health insights and evidence-based therapeutic approaches from Dr. Sarah Mitchell.',
};

export default function BlogPost() {
    return <BlogPostPage />;
}
