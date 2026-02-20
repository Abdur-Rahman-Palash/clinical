'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Info, Shield, ArrowRight, DollarSign, Clock, AlertCircle } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const insurers = [
    'Aetna', 'Cigna', 'United Healthcare', 'Oxford Health Plans',
    'Empire BlueCross BlueShield', 'Oscar Health', 'Optum',
];

const selfPayRates = [
    { service: 'Free 15-Min Phone Consultation', fee: '$0', desc: 'Introductory call to see if we\'re a good fit' },
    { service: 'Intake / Initial Session (60 min)', fee: '$250', desc: 'Comprehensive assessment and treatment planning' },
    { service: 'Individual Therapy (50 min)', fee: '$200', desc: 'Standard weekly or bi-weekly session' },
    { service: 'Extended Session (80 min)', fee: '$295', desc: 'For intensive phases or trauma processing work' },
];

export default function InsurancePage() {
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
                        <span className="badge">Transparent Pricing</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Insurance &amp; Fees
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '520px', margin: '0 auto' }}>
                            Quality mental health care should be accessible. We work with several major insurers and offer transparent self-pay rates.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '4rem 0 6rem', background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
                        {/* Insurance */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={staggerItem}>
                                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                                    Accepted Insurance Plans
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                    Dr. Mitchell is in-network with the following providers. Coverage varies by plan — please verify your specific benefits before booking.
                                </p>
                                <div style={{
                                    background: 'var(--beige)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--beige-dark)',
                                    padding: '1.75rem',
                                    marginBottom: '1.5rem',
                                }}>
                                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                        {insurers.map((ins) => (
                                            <li key={ins} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                                                <CheckCircle size={16} style={{ color: 'var(--sage-dark)', flexShrink: 0 }} />
                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{ins}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{
                                    background: 'rgba(91,122,138,0.08)',
                                    border: '1px solid rgba(91,122,138,0.2)',
                                    borderRadius: 'var(--radius)',
                                    padding: '1.25rem',
                                    display: 'flex',
                                    gap: '0.75rem',
                                }}>
                                    <Info size={17} style={{ color: '#5B7A8A', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                        <strong style={{ color: '#5B7A8A' }}>Out-of-Network Benefits:</strong> If your plan isn't listed, we can provide a monthly superbill so you can seek reimbursement directly from your insurer. Many plans reimburse 50–80% of out-of-network costs.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Self-Pay Rates */}
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                                Self-Pay Rates
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                For those paying out-of-pocket. A limited number of sliding-scale slots are available — please inquire.
                            </p>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                {selfPayRates.map(({ service, fee, desc }) => (
                                    <motion.div
                                        key={service}
                                        variants={staggerItem}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            padding: '1.25rem 1.5rem',
                                            background: 'var(--beige)',
                                            borderRadius: 'var(--radius)',
                                            border: '1px solid var(--beige-dark)',
                                            gap: '1rem',
                                            transition: 'all 0.25s ease',
                                        }}
                                        whileHover={{ scale: 1.01, boxShadow: 'var(--shadow-sm)' }}
                                    >
                                        <div>
                                            <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{service}</p>
                                            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{desc}</p>
                                        </div>
                                        <span style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '1.3rem',
                                            fontWeight: 700,
                                            color: fee === '$0' ? 'var(--sage-dark)' : 'var(--navy)',
                                            flexShrink: 0,
                                        }}>
                                            {fee}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Sliding scale */}
                            <div style={{
                                marginTop: '1.5rem',
                                background: 'linear-gradient(135deg, rgba(122,155,116,0.12) 0%, rgba(168,187,163,0.15) 100%)',
                                border: '1.5px solid var(--sage-light)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '1.5rem',
                                display: 'flex',
                                gap: '0.75rem',
                            }}>
                                <DollarSign size={18} style={{ color: 'var(--sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <p style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: '0.375rem' }}>Sliding Scale Available</p>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                        Financial barriers shouldn't stand between you and mental health support. A limited number of reduced-fee spots are reserved. Please reach out to discuss availability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cancellation Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            marginTop: '4rem',
                            background: 'var(--beige)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--beige-dark)',
                            padding: '2.5rem',
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(168,187,163,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <Clock size={22} style={{ color: 'var(--sage-dark)' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                                    Cancellation Policy
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                                    We kindly ask for <strong style={{ color: 'var(--navy)' }}>at least 24 hours' notice</strong> for cancellations or rescheduling. This allows us to offer your time slot to other clients who may be waiting for an appointment.
                                </p>
                                <div style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    padding: '1rem',
                                    background: 'rgba(192,57,43,0.07)',
                                    border: '1px solid rgba(192,57,43,0.15)',
                                    borderRadius: '0.75rem',
                                    alignItems: 'flex-start',
                                }}>
                                    <AlertCircle size={16} style={{ color: '#C0392B', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                        Sessions cancelled with less than 24 hours' notice will be charged the full session fee. Genuine emergencies are handled individually with compassion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Verification CTA */}
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/contact" className="btn-primary">
                            Verify My Insurance Coverage
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
