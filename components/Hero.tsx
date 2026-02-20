'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle parallax on scroll
            gsap.to('.hero-bg-layer', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const scrollToContent = () => {
        document.getElementById('trust-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={heroRef}
            aria-label="Hero section"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background layers */}
            <div
                className="hero-bg-layer"
                style={{
                    position: 'absolute',
                    inset: '-10%',
                    background: `
            radial-gradient(ellipse 80% 80% at 70% 40%, rgba(168,187,163,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 20% 80%, rgba(246,244,241,0.9) 0%, transparent 50%),
            linear-gradient(155deg, #F6F4F1 0%, #EDE9E3 40%, #C8D9C3 80%, #A8BBA3 100%)
          `,
                    zIndex: 0,
                }}
            />

            {/* Decorative circles */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '480px',
                height: '480px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168,187,163,0.25) 0%, transparent 70%)',
                zIndex: 1,
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '-5%',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,217,195,0.2) 0%, transparent 70%)',
                zIndex: 1,
                pointerEvents: 'none',
            }} />

            {/* Abstract botanical shapes - SVG decoration */}
            <svg
                aria-hidden="true"
                style={{ position: 'absolute', right: '0', top: '0', width: '55%', height: '100%', zIndex: 1, opacity: 0.6 }}
                viewBox="0 0 600 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <ellipse cx="420" cy="200" rx="220" ry="300" fill="rgba(168,187,163,0.15)" transform="rotate(-20 420 200)" />
                <ellipse cx="500" cy="420" rx="180" ry="240" fill="rgba(122,155,116,0.10)" transform="rotate(15 500 420)" />
                <circle cx="300" cy="500" r="140" fill="rgba(168,187,163,0.08)" />
                <path d="M480 10 Q560 200 500 380 Q440 560 380 650" stroke="rgba(122,155,116,0.20)" strokeWidth="1.5" fill="none" />
                <path d="M540 80 Q600 250 570 440 Q540 600 480 680" stroke="rgba(168,187,163,0.15)" strokeWidth="1" fill="none" />
            </svg>

            {/* Content */}
            <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: '7rem', paddingBottom: '6rem' }}>
                <div style={{ maxWidth: '680px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <span className="badge" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
                            ✦ Licensed &amp; Evidence-Based
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-display"
                        style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Compassionate,{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--sage-dark)' }}>Evidence-Based</em>{' '}
                        Psychotherapy for Meaningful Change
                    </motion.h1>

                    <motion.p
                        className="text-body-lg"
                        style={{ marginBottom: '2.25rem', maxWidth: '540px' }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        You don't have to navigate life's complexities alone. In a safe, non-judgmental space, we'll work together to help you find clarity, healing, and lasting well-being.
                    </motion.p>

                    <motion.div
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    >
                        <Link href="/contact" className="btn-primary">
                            <Calendar size={17} />
                            Schedule Consultation
                        </Link>
                        <Link href="/about" className="btn-secondary">
                            Learn More
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 2.5rem', alignItems: 'center' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                    >
                        {[
                            { num: '15+', label: 'Years Experience' },
                            { num: '800+', label: 'Lives Transformed' },
                            { num: 'HIPAA', label: 'Compliant & Secure' },
                        ].map(({ num, label }) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.6rem',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    lineHeight: 1,
                                }}>{num}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToContent}
                aria-label="Scroll to content"
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'var(--text-secondary)',
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>Explore</span>
                <ChevronDown size={20} />
            </motion.button>
        </section>
    );
}
