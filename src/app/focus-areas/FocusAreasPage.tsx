'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
    {
        emoji: '🌿',
        title: 'Anxiety & Worry',
        short: 'Regain calm and confidence in your everyday life.',
        detail: 'Anxiety can manifest as constant worry, panic attacks, social anxiety, or a persistent sense of dread. Using CBT, mindfulness, and somatic techniques, we identify triggers, challenge unhelpful thought patterns, and build practical tools to manage anxiety so it no longer controls your life.',
    },
    {
        emoji: '☀️',
        title: 'Depression',
        short: 'Rediscover meaning, energy, and connection.',
        detail: 'Depression often feels like a heavy fog that dims everything. Whether you\'re experiencing persistent sadness, loss of interest, fatigue, or hopelessness, therapy provides a structured, compassionate space to understand what\'s driving your depression and build pathways back toward vitality.',
    },
    {
        emoji: '🦋',
        title: 'Trauma & PTSD',
        short: 'Process the past and reclaim your sense of safety.',
        detail: 'Trauma leaves lasting imprints on the mind and body. Using trauma-informed care, EMDR principles, and evidence-based processing techniques, we create a safe space to gently work through traumatic memories and their impact — moving toward healing at a pace that feels right for you.',
    },
    {
        emoji: '🤝',
        title: 'Relationship Challenges',
        short: 'Build healthier, more fulfilling connections.',
        detail: 'Whether it\'s communication breakdowns, trust issues, boundaries, or patterns that keep repeating in all your relationships, therapy helps you understand your relational style and develop skills for forming and maintaining the authentic, healthy connections you deserve.',
    },
    {
        emoji: '🌱',
        title: 'Stress & Burnout',
        short: 'Restore balance and sustainable well-being.',
        detail: 'Chronic stress and burnout can erode your health, relationships, and sense of self. We explore the internal and external drivers of your overwhelm, rebuild your capacity for rest and recovery, and develop a sustainable approach to life that honors your limits and values.',
    },
    {
        emoji: '🌊',
        title: 'Life Transitions',
        short: 'Navigate change with clarity and resilience.',
        detail: 'Career shifts, relationship changes, parenthood, relocation, loss, or the challenges of aging — major transitions can unsettle our sense of identity and direction. Therapy provides grounding, perspective, and tools to navigate change as a path toward growth rather than loss.',
    },
];

const approaches = [
    {
        title: 'Cognitive Behavioral Therapy (CBT)',
        gradient: 'linear-gradient(135deg, #7A9B74, #A8BBA3)',
        desc: 'CBT is one of the most well-researched therapeutic approaches in the world. We identify and examine unhelpful thought patterns and beliefs, then work to replace them with more balanced, realistic perspectives — leading to lasting behavioral change.',
        uses: ['Anxiety', 'Depression', 'OCD', 'Phobias', 'Panic Disorder'],
    },
    {
        title: 'Psychodynamic Therapy',
        gradient: 'linear-gradient(135deg, #5B7A8A, #8BAFC0)',
        desc: 'Rooted in understanding how your past shapes your present, psychodynamic therapy explores unconscious patterns, early experiences, and relational dynamics. This deeper self-understanding often leads to profound and lasting healing.',
        uses: ['Relationship Patterns', 'Identity', 'Grief', 'Self-Esteem', 'Depression'],
    },
    {
        title: 'Mindfulness-Based Therapy',
        gradient: 'linear-gradient(135deg, #8A7A5B, #C0A87B)',
        desc: 'Drawing from mindfulness traditions and evidence-based practices like MBSR and MBCT, this approach helps you cultivate present-moment awareness, reduce reactivity, and develop a compassionate relationship with your inner life.',
        uses: ['Stress', 'Anxiety', 'Depression', 'Chronic Pain', 'Burnout'],
    },
    {
        title: 'Trauma-Informed Care',
        gradient: 'linear-gradient(135deg, #7A5B8A, #A87AB5)',
        desc: 'All of my work is guided by trauma-informed principles — recognizing the pervasive impact of trauma, prioritizing safety and trust, and honoring your autonomy at every step. Specific trauma processing is done with EMDR-informed techniques.',
        uses: ['PTSD', 'Complex Trauma', 'Childhood Wounds', 'Abuse Survivors', 'Grief'],
    },
];

export default function FocusAreasPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.approach-card', {
                opacity: 0,
                y: 44,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.approaches-section',
                    start: 'top 75%',
                },
            });
        });
        return () => ctx.revert();
    }, []);

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
                        <span className="badge">Specializations</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Focus Areas &amp; Therapy Approaches
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
                            Each challenge is unique. I offer evidence-based care tailored to where you are right now — and where you want to go.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Focus Areas Accordion */}
            <section aria-labelledby="focus-heading" style={{ padding: '5rem 0', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 id="focus-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '2.5rem', textAlign: 'center' }}>
                        Areas of Specialization
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }} role="list">
                        {focusAreas.map(({ emoji, title, short, detail }, i) => (
                            <div
                                key={title}
                                role="listitem"
                                style={{
                                    border: `1.5px solid ${openIndex === i ? 'var(--sage-light)' : 'var(--border)'}`,
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.25s ease',
                                    boxShadow: openIndex === i ? 'var(--shadow-md)' : 'none',
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    aria-expanded={openIndex === i}
                                    aria-controls={`focus-panel-${i}`}
                                    id={`focus-trigger-${i}`}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1.5rem 1.75rem',
                                        background: openIndex === i ? 'var(--beige)' : 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'background 0.25s ease',
                                    }}
                                >
                                    <span style={{ fontSize: '1.75rem', flexShrink: 0 }} role="img" aria-hidden="true">{emoji}</span>
                                    <div style={{ flex: 1 }}>
                                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--navy)', display: 'block' }}>
                                            {title}
                                        </span>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.15rem', display: 'block' }}>
                                            {short}
                                        </span>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ color: 'var(--sage-dark)', flexShrink: 0 }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            id={`focus-panel-${i}`}
                                            role="region"
                                            aria-labelledby={`focus-trigger-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{
                                                padding: '0 1.75rem 1.75rem',
                                                background: 'var(--beige)',
                                                borderTop: '1px solid var(--beige-dark)',
                                            }}>
                                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.95rem', paddingTop: '1.25rem' }}>
                                                    {detail}
                                                </p>
                                                <Link href="/contact" className="btn-primary" style={{ marginTop: '1.25rem', display: 'inline-flex', padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
                                                    Discuss This Area
                                                    <ArrowRight size={15} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Therapy Approaches */}
            <section
                className="approaches-section"
                aria-labelledby="approaches-heading"
                style={{ padding: '5.5rem 0', background: 'var(--beige)' }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="badge">How We Work</span>
                        <div className="divider divider-center" />
                        <h2 id="approaches-heading" className="text-headline" style={{ color: 'var(--navy)' }}>
                            Evidence-Based Therapeutic Approaches
                        </h2>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {approaches.map(({ title, gradient, desc, uses }, i) => (
                            <div
                                key={title}
                                className="approach-card"
                                style={{
                                    background: 'white',
                                    borderRadius: 'var(--radius-xl)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: '1px solid var(--border)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <div style={{ height: '6px', background: gradient }} aria-hidden="true" />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.875rem' }}>
                                        {title}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                        {desc}
                                    </p>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                                            Helpful For
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                                            {uses.map((u) => <span key={u} className="tag">{u}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 0', background: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-headline" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-body-lg" style={{ marginBottom: '2rem' }}>
                            That's completely okay. Schedule a free 15-minute call and we'll talk through what you're experiencing and whether we're a good fit.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Book a Free Consultation
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
