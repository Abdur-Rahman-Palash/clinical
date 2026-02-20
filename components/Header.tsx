'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/focus-areas', label: 'Focus Areas' },
    { href: '/blog', label: 'Resources' },
    { href: '/insurance', label: 'Fees' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 60);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // GSAP header background transition
    useEffect(() => {
        if (!headerRef.current) return;
        gsap.to(headerRef.current, {
            backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
            boxShadow: scrolled ? '0 2px 20px rgba(31,41,55,0.08)' : 'none',
            duration: 0.4,
            ease: 'power2.out',
        });
    }, [scrolled]);

    // Close mobile menu on nav
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 transition-colors"
            role="banner"
        >
            <div className="container-wide">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.125rem 0' }}>
                    {/* Logo */}
                    <Link href="/" aria-label="Dr. Sarah Mitchell - Home" style={{ textDecoration: 'none' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                            <span style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.35rem',
                                fontWeight: 600,
                                color: 'var(--navy)',
                                letterSpacing: '-0.01em',
                            }}>
                                Dr. Sarah Mitchell
                            </span>
                            <span style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.75rem',
                                color: 'var(--sage-dark)',
                                fontWeight: 500,
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                marginTop: '2px',
                            }}>
                                PsyD · Licensed Psychotherapist
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={pathname === link.href ? 'page' : undefined}
                                style={{
                                    padding: '0.5rem 0.875rem',
                                    fontSize: '0.9rem',
                                    fontWeight: pathname === link.href ? 600 : 400,
                                    color: pathname === link.href ? 'var(--sage-dark)' : 'var(--navy)',
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    if (pathname !== link.href) {
                                        (e.target as HTMLElement).style.color = 'var(--sage-dark)';
                                        (e.target as HTMLElement).style.backgroundColor = 'rgba(168,187,163,0.1)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (pathname !== link.href) {
                                        (e.target as HTMLElement).style.color = 'var(--navy)';
                                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary"
                            style={{ marginLeft: '0.75rem', padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
                            aria-label="Book a consultation"
                        >
                            <Phone size={15} />
                            Book a Consultation
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="show-mobile"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            color: 'var(--navy)',
                            display: 'none',
                        }}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="navigation"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'rgba(255,255,255,0.98)',
                            backdropFilter: 'blur(12px)',
                            borderBottom: '1px solid var(--border)',
                            padding: '1.25rem 1.5rem 1.75rem',
                            boxShadow: '0 8px 30px rgba(31,41,55,0.1)',
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    style={{
                                        display: 'block',
                                        padding: '0.75rem 0',
                                        borderBottom: '1px solid var(--beige-dark)',
                                        textDecoration: 'none',
                                        color: pathname === link.href ? 'var(--sage-dark)' : 'var(--navy)',
                                        fontWeight: pathname === link.href ? 600 : 400,
                                        fontSize: '1.0625rem',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ marginTop: '1.25rem' }}
                        >
                            <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                <Phone size={16} />
                                Book a Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
