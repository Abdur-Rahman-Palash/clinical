'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Tag } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const categories = ['All', 'Anxiety', 'Depression', 'Trauma', 'Relationships', 'Mindfulness', 'Self-Care'];

const featuredPost = {
    title: 'Understanding Anxiety: What Your Nervous System Is Trying to Tell You',
    excerpt: 'Anxiety isn\'t the enemy — it\'s a signal. In this in-depth guide, we explore the neuroscience of anxiety, why it shows up, and evidence-based strategies for working with it rather than against it.',
    category: 'Anxiety',
    readTime: '9 min read',
    date: 'February 12, 2026',
    slug: 'understanding-anxiety',
    gradient: 'linear-gradient(135deg, #A8BBA3 0%, #7A9B74 100%)',
};

const posts = [
    { title: 'The Gift of Therapy: Why Asking for Help Is Strength', excerpt: 'Cultural myths around self-reliance keep many people from seeking the support they deserve. Here\'s how to reframe asking for help.', category: 'Self-Care', readTime: '5 min', date: 'Feb 5, 2026', slug: 'gift-of-therapy', emoji: '🌱' },
    { title: 'Attachment Styles & How They Shape Your Relationships', excerpt: 'Our earliest bonds leave blueprints for how we connect throughout life. Understanding your attachment style is the first step to healthier relationships.', category: 'Relationships', readTime: '7 min', date: 'Jan 28, 2026', slug: 'attachment-styles', emoji: '🤝' },
    { title: 'A Mindfulness Practice for Difficult Emotions', excerpt: 'When emotions feel overwhelming, this simple mindfulness exercise can help you create space between sensation and reaction.', category: 'Mindfulness', readTime: '4 min', date: 'Jan 20, 2026', slug: 'mindfulness-emotions', emoji: '🧘' },
    { title: 'Depression vs. Sadness: Knowing the Difference', excerpt: 'Everyone feels sad sometimes, but clinical depression is something different. Learn the key distinctions and when it might be time to seek support.', category: 'Depression', readTime: '6 min', date: 'Jan 14, 2026', slug: 'depression-sadness', emoji: '☀️' },
    { title: 'The Body Keeps the Score: An Introduction to Somatic Therapy', excerpt: 'Trauma lives in the body as much as the mind. Discover how body-based approaches complement traditional talk therapy for deeper healing.', category: 'Trauma', readTime: '8 min', date: 'Jan 6, 2026', slug: 'somatic-therapy', emoji: '🦋' },
    { title: 'Setting Boundaries Without Guilt: A Practical Guide', excerpt: 'Boundaries aren\'t walls — they\'re invitations to healthier connection. This guide walks you through how to set them with clarity and compassion.', category: 'Relationships', readTime: '6 min', date: 'Dec 20, 2025', slug: 'setting-boundaries', emoji: '🌿' },
];

export default function BlogPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = posts.filter((p) => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div style={{ paddingTop: '6rem' }}>
            {/* Header */}
            <section style={{ padding: '4.5rem 0 3rem', background: 'linear-gradient(160deg, var(--beige) 0%, white 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ textAlign: 'center' }}
                    >
                        <span className="badge">Mental Health Resources</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Insights &amp; Resources
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '520px', margin: '0 auto 2rem' }}>
                            Evidence-based articles to support your mental health journey — whether you're in therapy or just exploring.
                        </p>
                        {/* Search */}
                        <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="search"
                                className="form-input"
                                placeholder="Search articles…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                aria-label="Search articles"
                                style={{ paddingLeft: '3rem' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured */}
            <section style={{ padding: '3rem 0 0', background: 'white' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            background: featuredPost.gradient,
                            borderRadius: 'var(--radius-xl)',
                            padding: '3rem',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            marginBottom: '3rem',
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)',
                        }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                                <span style={{ background: 'rgba(255,255,255,0.25)', padding: '0.25rem 0.875rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                                    ⭐ Featured
                                </span>
                                <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                                    {featuredPost.category}
                                </span>
                                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <Clock size={13} /> {featuredPost.readTime}
                                </span>
                            </div>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, color: 'white', marginBottom: '1rem', maxWidth: '600px' }}>
                                {featuredPost.title}
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2rem' }}>
                                {featuredPost.excerpt}
                            </p>
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.75rem',
                                    background: 'white',
                                    color: 'var(--navy)',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                            >
                                Read Article <ArrowRight size={15} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Category filter */}
                    <div
                        role="group"
                        aria-label="Filter by category"
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                aria-pressed={activeCategory === cat}
                                style={{
                                    padding: '0.4rem 1.1rem',
                                    borderRadius: '50px',
                                    border: `1.5px solid ${activeCategory === cat ? 'var(--sage-dark)' : 'var(--border)'}`,
                                    background: activeCategory === cat ? 'var(--sage-dark)' : 'white',
                                    color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Article Grid */}
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                            <p style={{ fontSize: '1.1rem' }}>No articles match your search.</p>
                        </div>
                    ) : (
                        <motion.div
                            key={activeCategory + search}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                gap: '1.5rem',
                                paddingBottom: '5rem',
                            }}
                        >
                            {filtered.map(({ title, excerpt, category, readTime, date, slug, emoji }) => (
                                <motion.article key={slug} variants={staggerItem}>
                                    <Link
                                        href={`/blog/${slug}`}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        <div
                                            className="card"
                                            style={{ height: '100%', cursor: 'pointer' }}
                                        >
                                            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }} role="img" aria-hidden="true">{emoji}</span>
                                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                                                <span className="tag">{category}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                    <Clock size={12} /> {readTime}
                                                </span>
                                            </div>
                                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                                                {title}
                                            </h3>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                                                {excerpt.slice(0, 120)}…
                                            </p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{date}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--sage-dark)', fontSize: '0.85rem', fontWeight: 500 }}>
                                                    Read <ArrowRight size={13} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
