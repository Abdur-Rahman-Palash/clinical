'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, BookOpen, Heart, Star, GraduationCap, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem, fadeLeft, fadeRight } from '@/lib/animations';
import { AnimatedSection } from '@/components/AnimatedWrapper';

const credentials = [
    { icon: GraduationCap, text: 'Doctor of Psychology (PsyD), Pepperdine University' },
    { icon: Award, text: 'Licensed Psychologist, New York State (#18765)' },
    { icon: BookOpen, text: 'Advanced Training in CBT, EMDR & Mindfulness-Based Therapy' },
    { icon: Star, text: 'Member, American Psychological Association (APA)' },
    { icon: Heart, text: 'Trauma-Informed Care Certification, NICABM' },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            {/* Hero */}
            <section
                aria-label="About header"
                style={{
                    padding: '5rem 0 4rem',
                    background: 'linear-gradient(160deg, var(--beige) 0%, white 100%)',
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ textAlign: 'center' }}
                    >
                        <span className="badge">Meet Your Therapist</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem', maxWidth: '700px', margin: '0 auto 1rem' }}>
                            Dr. Sarah Mitchell, PsyD
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
                            Licensed Psychologist · 15+ Years of Clinical Practice · NYC & Telehealth
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main content */}
            <section style={{ padding: '5rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '4rem',
                        alignItems: 'start',
                    }}>
                        {/* Photo + credentials */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {/* Artistic photo placeholder */}
                            <div style={{
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                marginBottom: '2rem',
                                background: 'linear-gradient(145deg, var(--sage-light) 0%, var(--sage) 50%, var(--sage-dark) 100%)',
                                aspectRatio: '4/5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                boxShadow: 'var(--shadow-xl)',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(145deg, rgba(246,244,241,0.3) 0%, transparent 50%, rgba(31,41,55,0.15) 100%)',
                                }} />
                                <div style={{ textAlign: 'center', zIndex: 1 }}>
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1rem',
                                        border: '3px solid rgba(255,255,255,0.5)',
                                    }}>
                                        <span style={{ fontSize: '4rem', lineHeight: 1 }}>👩‍⚕️</span>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                                        Dr. Sarah Mitchell
                                    </p>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '0.25rem' }}>PsyD · Licensed Psychologist</p>
                                </div>
                            </div>

                            {/* Credentials */}
                            <div style={{
                                background: 'var(--beige)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--beige-dark)',
                                padding: '1.75rem',
                            }}>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                                    Credentials &amp; Training
                                </h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                    {credentials.map(({ icon: Icon, text }) => (
                                        <li key={text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                            <Icon size={17} style={{ color: 'var(--sage-dark)', marginTop: '2px', flexShrink: 0 }} strokeWidth={1.75} />
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Narrative */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                                My Story & Philosophy
                            </h2>
                            <div className="prose">
                                <p>
                                    I became a psychotherapist because I believe that every person carries within them the capacity for healing, growth, and genuine flourishing. My role is not to prescribe or fix — it's to walk alongside you as you discover your own path forward.
                                </p>
                                <p>
                                    With over 15 years of clinical experience, I've had the privilege of supporting individuals through anxiety, depression, trauma, relationship difficulties, and the profound challenges of life transitions. Each person's journey is unique, and I deeply honor that diversity in my work.
                                </p>
                                <p>
                                    My approach is warm, direct, and deeply collaborative. I draw on Cognitive Behavioral Therapy (CBT), psychodynamic principles, mindfulness practices, and trauma-informed care — always choosing the tools that best serve your particular goals and circumstances.
                                </p>
                                <h3>What You Can Expect</h3>
                                <p>
                                    From our very first conversation, you'll experience a space that feels safe, respectful, and free of judgment. Therapy is hard work, and I take that seriously — I'll challenge you gently, celebrate your growth authentically, and support you through the difficult moments with steady, compassionate presence.
                                </p>
                                <p>
                                    Outside the therapy room, I engage in continuing education, clinical consultation, and professional writing to ensure my practice reflects the best available evidence and evolving understanding of human psychology.
                                </p>
                            </div>

                            <Link href="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                                Schedule a Consultation
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: '5rem 0', background: 'var(--beige)' }}>
                <div className="container">
                    <AnimatedSection style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="text-headline" style={{ color: 'var(--navy)' }}>Core Values in Practice</h2>
                        <div className="divider divider-center" />
                    </AnimatedSection>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
                    >
                        {[
                            { title: 'Compassionate Presence', desc: 'Showing up fully — with warmth, attentiveness, and genuine care — for every client I work with.' },
                            { title: 'Cultural Humility', desc: 'Recognizing and respecting diverse backgrounds, identities, and worldviews in every therapeutic relationship.' },
                            { title: 'Clinical Integrity', desc: `Grounding my practice in evidence-based methods while honoring each person's unique humanity.` },
                            { title: 'Collaborative Partnership', desc: `Therapy works best when we're genuine partners — your expertise about your life is as vital as mine.` },
                        ].map(({ title, desc }) => (
                            <motion.div key={title} variants={staggerItem} className="card">
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                                    {title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
