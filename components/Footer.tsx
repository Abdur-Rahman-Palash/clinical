'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Heart, Instagram, Linkedin, Facebook, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const quickLinks = [
    { href: '/about', label: 'About Dr. Mitchell' },
    { href: '/focus-areas', label: 'Focus Areas' },
    { href: '/blog', label: 'Resources & Blog' },
    { href: '/insurance', label: 'Insurance & Fees' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact & Booking' },
];

const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Disclaimer' },
];

export default function Footer() {
    return (
        <footer
            aria-label="Site footer"
            style={{
                background: 'linear-gradient(160deg, #1F2937 0%, #2D3748 60%, #1a2332 100%)',
                color: 'white',
                paddingTop: '4.5rem',
                paddingBottom: '0',
            }}
        >
            <div className="container-wide">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '3rem',
                        paddingBottom: '3.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} style={{ gridColumn: 'span 1' }}>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.4rem',
                                fontWeight: 600,
                                color: 'white',
                                marginBottom: '0.3rem',
                            }}>
                                Dr. Sarah Mitchell
                            </h3>
                            <p style={{
                                fontSize: '0.8rem',
                                color: 'var(--sage-light)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                fontWeight: 500,
                            }}>
                                PsyD · Licensed Psychotherapist
                            </p>
                        </div>
                        <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                            Providing compassionate, evidence-based psychotherapy to help you navigate life's challenges with resilience and clarity.
                        </p>
                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[
                                { Icon: Instagram, label: 'Instagram', href: '#' },
                                { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                                { Icon: Facebook, label: 'Facebook', href: '#' },
                            ].map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.6)',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = 'var(--sage)';
                                        el.style.color = 'var(--sage)';
                                        el.style.background = 'rgba(168,187,163,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget;
                                        el.style.borderColor = 'rgba(255,255,255,0.2)';
                                        el.style.color = 'rgba(255,255,255,0.6)';
                                        el.style.background = 'transparent';
                                    }}
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--sage-light)', marginBottom: '1.25rem' }}>
                            Quick Links
                        </h4>
                        <nav aria-label="Footer navigation">
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {quickLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            style={{
                                                color: 'rgba(255,255,255,0.65)',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                transition: 'color 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--sage-light)'; }}
                                            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--sage-light)', marginBottom: '1.25rem' }}>
                            Contact & Office
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <MapPin size={16} style={{ color: 'var(--sage)', marginTop: '3px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    245 Wellness Ave, Suite 310<br />New York, NY 10001
                                </span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Phone size={16} style={{ color: 'var(--sage)', flexShrink: 0 }} />
                                <a href="tel:+15552345678" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', textDecoration: 'none' }}>
                                    (555) 234-5678
                                </a>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Mail size={16} style={{ color: 'var(--sage)', flexShrink: 0 }} />
                                <a href="mailto:hello@drsarahmitchell.com" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', textDecoration: 'none' }}>
                                    hello@drsarahmitchell.com
                                </a>
                            </li>
                        </ul>
                        <div style={{
                            marginTop: '1.5rem',
                            background: 'rgba(168,187,163,0.12)',
                            border: '1px solid rgba(168,187,163,0.2)',
                            borderRadius: '0.75rem',
                            padding: '1rem',
                        }}>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                                <strong style={{ color: 'var(--sage-light)' }}>Office Hours:</strong><br />
                                Mon–Fri: 9:00 AM – 6:00 PM<br />
                                Saturday: 10:00 AM – 2:00 PM
                            </p>
                        </div>
                    </motion.div>

                    {/* Book CTA */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--sage-light)', marginBottom: '1.25rem' }}>
                            Ready to Begin?
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                            Taking the first step is often the hardest. We're here when you're ready.
                        </p>
                        <Link
                            href="/contact"
                            className="btn-sage"
                            style={{ marginBottom: '0.875rem', display: 'inline-flex' }}
                        >
                            Schedule a Consultation
                        </Link>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>
                            Telehealth & in-person available
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom bar */}
                <div style={{
                    padding: '1.5rem 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}>
                    <div style={{ flex: '1 1 auto' }}>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: '600px' }}>
                            <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Healthcare Disclaimer:</strong> The content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) or 911 immediately.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem 1.5rem', fontSize: '0.8rem' }}>
                        {legalLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', whiteSpace: 'nowrap' }}
                                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                            >
                                {label}
                            </Link>
                        ))}
                        <span style={{ color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            © 2026 Dr. Sarah Mitchell, PsyD · Made with <Heart size={12} fill="currentColor" style={{ color: 'var(--sage)' }} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
