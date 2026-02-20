'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, FlaskConical, Award, Heart, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

const trustCards = [
    {
        icon: Shield,
        title: 'Strictly Confidential',
        desc: 'Your privacy is paramount. All sessions are protected by professional ethics and HIPAA regulations.',
        color: '#7A9B74',
    },
    {
        icon: FlaskConical,
        title: 'Evidence-Based Care',
        desc: 'Treatment built on the latest clinical research — effective, proven approaches tailored to you.',
        color: '#5B7A8A',
    },
    {
        icon: Award,
        title: 'Licensed Professional',
        desc: 'Board-licensed Doctor of Psychology (PsyD) with 15+ years of clinical practice and ongoing training.',
        color: '#8A7A5B',
    },
    {
        icon: Heart,
        title: 'Client-Centered Care',
        desc: 'Your goals, your pace. Every session is tailored to your unique needs, strengths, and circumstances.',
        color: '#7A5B8A',
    },
];

const focusAreas = [
    { name: 'Anxiety & Worry', href: '/focus-areas', emoji: '🌿' },
    { name: 'Depression', href: '/focus-areas', emoji: '☀️' },
    { name: 'Trauma & PTSD', href: '/focus-areas', emoji: '🦋' },
    { name: 'Relationship Challenges', href: '/focus-areas', emoji: '🤝' },
    { name: 'Stress & Burnout', href: '/focus-areas', emoji: '🌱' },
    { name: 'Life Transitions', href: '/focus-areas', emoji: '🌊' },
];

const testimonials = [
    {
        quote: "Working with Dr. Mitchell has genuinely changed my life. I feel more grounded and capable than I thought possible.",
        author: "M.T.",
        role: "Client for 2 years",
    },
    {
        quote: "The warmth, professionalism, and insight I experienced in every session was unlike anything I'd encountered before.",
        author: "J.R.",
        role: "Former client",
    },
    {
        quote: "I was skeptical about therapy, but Dr. Mitchell created such a safe space that I opened up in ways I never had.",
        author: "A.K.",
        role: "Client for 8 months",
    },
];

export default function HomeContent() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger focus area cards - temporarily disabled
            // gsap.from('.focus-card', {
            //     opacity: 0,
            //     y: 40,
            //     duration: 0.6,
            //     stagger: 0.1,
            //     ease: 'power3.out',
            //     scrollTrigger: {
            //         trigger: '.focus-grid',
            //         start: 'top 80%',
            //     },
            // });

            // How therapy helps section
            gsap.from('.therapy-col', {
                opacity: 0,
                x: (i) => (i === 0 ? -40 : 40),
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.therapy-section',
                    start: 'top 80%',
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* ── Trust Cards ── */}
            <section
                id="trust-section"
                aria-labelledby="trust-heading"
                style={{
                    padding: '5.5rem 0',
                    background: 'var(--beige)',
                }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="badge">Why Choose Dr. Mitchell</span>
                        <div className="divider divider-center" />
                        <h2 id="trust-heading" className="text-headline" style={{ color: 'var(--navy)' }}>
                            A Foundation of Trust & Care
                        </h2>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {trustCards.map(({ icon: Icon, title, desc, color }) => (
                            <motion.div
                                key={title}
                                variants={staggerItem}
                                className="card"
                                style={{ cursor: 'default' }}
                            >
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    background: `${color}18`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                }}>
                                    <Icon size={24} style={{ color }} strokeWidth={1.5} />
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    color: 'var(--navy)',
                                    marginBottom: '0.625rem',
                                }}>
                                    {title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── How Therapy Helps ── */}
            <section
                className="therapy-section"
                aria-labelledby="therapy-heading"
                style={{ padding: '6rem 0', background: 'white' }}
            >
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                    }}>
                        <div className="therapy-col">
                            <span className="badge">The Path Forward</span>
                            <div className="divider" />
                            <h2 id="therapy-heading" className="text-headline" style={{ color: 'var(--navy)', marginBottom: '1.25rem' }}>
                                How Therapy Creates Real Change
                            </h2>
                            <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>
                                Therapy isn't about being told what to do — it's about discovering the resilience and wisdom already within you. Together, we'll explore patterns, heal wounds, and build new skills.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                {[
                                    'Understand recurring patterns and their roots',
                                    'Develop healthier coping strategies',
                                    'Improve relationships and communication',
                                    'Reclaim joy and sense of purpose',
                                ].map((item) => (
                                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <span style={{
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '50%',
                                            background: 'var(--sage-light)',
                                            color: 'var(--sage-dark)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}>✓</span>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/focus-areas" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                                Explore Therapy Approaches
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="therapy-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                {
                                    phase: '01',
                                    title: 'Assessment & Goals',
                                    desc: 'We begin with understanding your story, challenges, and what meaningful change looks like for you.',
                                },
                                {
                                    phase: '02',
                                    title: 'Active Therapeutic Work',
                                    desc: 'Using evidence-based modalities, we explore root causes and build practical, personalized strategies.',
                                },
                                {
                                    phase: '03',
                                    title: 'Growth & Integration',
                                    desc: 'You develop lasting skills for managing life\'s challenges with greater confidence and ease.',
                },
                            ].map(({ phase, title, desc }) => (
                                <div
                                    key={phase}
                                    style={{
                                        display: 'flex',
                                        gap: '1.25rem',
                                        padding: '1.5rem',
                                        background: 'var(--beige)',
                                        borderRadius: 'var(--radius)',
                                        border: '1px solid var(--beige-dark)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                                        (e.currentTarget as HTMLElement).style.background = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                        (e.currentTarget as HTMLElement).style.background = 'var(--beige)';
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '1.8rem',
                                        fontWeight: 700,
                                        color: 'var(--sage-light)',
                                        lineHeight: 1,
                                        flexShrink: 0,
                                        width: '36px',
                                    }}>{phase}</span>
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.4rem' }}>
                                            {title}
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Focus Areas ── */}
            <section
                aria-labelledby="focus-heading"
                style={{ padding: '6rem 0', background: 'var(--beige)' }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="badge">Specializations</span>
                        <div className="divider divider-center" />
                        <h2 id="focus-heading" className="text-headline" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Areas of Focus
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
                            Specialized support for some of life's most challenging experiences.
                        </p>
                    </div>

                    <div
                        className="focus-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '1.25rem',
                            marginBottom: '2.5rem',
                        }}
                    >
                        {focusAreas.map(({ name, href, emoji }) => (
                            <Link
                                key={name}
                                href={href}
                                className="focus-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '2rem 1.25rem',
                                    background: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border)',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = 'translateY(-6px)';
                                    el.style.boxShadow = 'var(--shadow-lg)';
                                    el.style.borderColor = 'var(--sage-light)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = 'translateY(0)';
                                    el.style.boxShadow = 'none';
                                    el.style.borderColor = 'var(--border)';
                                }}
                            >
                                <span style={{ fontSize: '2.25rem', lineHeight: 1 }} role="img" aria-hidden="true">{emoji}</span>
                                <span style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: 'var(--navy)',
                                    lineHeight: 1.3,
                                }}>
                                    {name}
                                </span>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--sage-dark)',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                }}>
                                    Learn more <ArrowRight size={12} />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Link href="/focus-areas" className="btn-secondary">
                            View All Focus Areas
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section
                aria-labelledby="testimonials-heading"
                style={{ padding: '6rem 0', background: 'white' }}
            >
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="badge">Client Experiences</span>
                        <div className="divider divider-center" />
                        <h2 id="testimonials-heading" className="text-headline" style={{ color: 'var(--navy)' }}>
                            Words from Those We've Served
                        </h2>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                            *Testimonials shared with consent. Names shortened for privacy.
                        </p>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
                    >
                        {testimonials.map(({ quote, author, role }, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                style={{
                                    padding: '2rem',
                                    background: 'var(--beige)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--beige-dark)',
                                    position: 'relative',
                                }}
                            >
                                <span style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '4rem',
                                    color: 'var(--sage-light)',
                                    lineHeight: 0.5,
                                    position: 'absolute',
                                    top: '1.5rem',
                                    left: '1.75rem',
                                    opacity: 0.6,
                                }}>"</span>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.8,
                                    fontStyle: 'italic',
                                    paddingTop: '1.75rem',
                                    marginBottom: '1.25rem',
                                }}>
                                    {quote}
                                </p>
                                <div style={{ borderTop: '1px solid var(--beige-dark)', paddingTop: '1rem' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.875rem' }}>{author}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>· {role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section
                aria-labelledby="cta-heading"
                style={{
                    padding: '6rem 0',
                    background: 'linear-gradient(135deg, var(--navy) 0%, #2D4A3E 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(168,187,163,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(122,155,116,0.1) 0%, transparent 50%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="badge" style={{ background: 'rgba(168,187,163,0.2)', color: 'var(--sage-light)', borderColor: 'rgba(168,187,163,0.3)' }}>
                            Begin Your Journey
                        </span>
                        <div className="divider divider-center" style={{ background: 'var(--sage)' }} />
                        <h2 id="cta-heading" className="text-headline" style={{ color: 'white', marginBottom: '1.25rem', maxWidth: '580px', margin: '0 auto 1.25rem' }}>
                            You Deserve to Feel Well. Let's Begin Together.
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                            Reaching out is a courageous step. Schedule a free 15-minute consultation to see if we're a good fit — no pressure, no commitment.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                            <Link href="/contact" className="btn-sage">
                                <Calendar size={17} />
                                Schedule Free Consultation
                            </Link>
                            <Link href="/faq" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem',
                                color: 'rgba(255,255,255,0.8)',
                                border: '2px solid rgba(255,255,255,0.25)',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '0.9375rem',
                                fontWeight: 500,
                                transition: 'all 0.25s ease',
                            }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }}
                            >
                                Read FAQs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

// Import Calendar here for HomeContent
import { Calendar } from 'lucide-react';
