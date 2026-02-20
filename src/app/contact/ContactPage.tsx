'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Video, CheckCircle, Send } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

type FormData = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {
    const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = (): boolean => {
        const e: FormErrors = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email address';
        if (!form.message.trim() || form.message.length < 20) e.message = 'Please share a little more (at least 20 characters)';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

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
                        <span className="badge">Get In Touch</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Begin Your Journey
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '520px', margin: '0 auto' }}>
                            Reaching out is the first step. Fill out the form below and Dr. Mitchell typically responds within one business day.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '3rem 0 6rem', background: 'white' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '3.5rem',
                        alignItems: 'start',
                    }}>
                        {/* Info sidebar */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Contact details */}
                            <motion.div variants={staggerItem} className="card-beige" style={{ marginBottom: '1.5rem' }}>
                                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1.25rem' }}>
                                    Contact Information
                                </h2>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        { icon: Phone, label: 'Phone', value: '(555) 234-5678', href: 'tel:+15552345678' },
                                        { icon: Mail, label: 'Email', value: 'hello@drsarahmitchell.com', href: 'mailto:hello@drsarahmitchell.com' },
                                        { icon: MapPin, label: 'Address', value: '245 Wellness Ave, Suite 310\nNew York, NY 10001', href: undefined },
                                    ].map(({ icon: Icon, label, value, href }) => (
                                        <li key={label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                width: '38px',
                                                height: '38px',
                                                borderRadius: '10px',
                                                background: 'var(--sage-light)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}>
                                                <Icon size={17} style={{ color: 'var(--sage-dark)' }} strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</p>
                                                {href ? (
                                                    <a href={href} style={{ color: 'var(--navy)', textDecoration: 'none', fontSize: '0.9rem' }}>{value}</a>
                                                ) : (
                                                    <p style={{ color: 'var(--navy)', fontSize: '0.9rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{value}</p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Office hours */}
                            <motion.div variants={staggerItem} className="card-beige" style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                                    <Clock size={18} style={{ color: 'var(--sage-dark)' }} />
                                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--navy)' }}>Office Hours</h3>
                                </div>
                                {[
                                    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                                    { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
                                    { days: 'Sunday', hours: 'Closed' },
                                ].map(({ days, hours }) => (
                                    <div key={days} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--beige-dark)' }}>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{days}</span>
                                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--navy)' }}>{hours}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Telehealth note */}
                            <motion.div variants={staggerItem}>
                                <div style={{
                                    background: 'linear-gradient(135deg, rgba(122,155,116,0.1) 0%, rgba(168,187,163,0.15) 100%)',
                                    border: '1.5px solid var(--sage-light)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start',
                                }}>
                                    <Video size={22} style={{ color: 'var(--sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>Telehealth Available</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                            Secure, HIPAA-compliant video sessions are available for residents of New York, New Jersey, and Connecticut.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Map embed placeholder */}
                            <motion.div variants={staggerItem} style={{ marginTop: '1.5rem' }}>
                                <div style={{
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(145deg, var(--sage-light) 0%, var(--sage) 100%)',
                                    height: '220px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    border: '1px solid var(--sage)',
                                }}>
                                    <MapPin size={32} style={{ color: 'white' }} />
                                    <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>245 Wellness Ave, Suite 310</p>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>New York, NY 10001</p>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginTop: '0.5rem',
                                            padding: '0.5rem 1.25rem',
                                            background: 'rgba(255,255,255,0.2)',
                                            border: '1px solid rgba(255,255,255,0.4)',
                                            borderRadius: '50px',
                                            color: 'white',
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {submitted ? (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '4rem 2rem',
                                    background: 'var(--beige)',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '2px solid var(--sage-light)',
                                }}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <CheckCircle size={56} style={{ color: 'var(--sage-dark)', marginBottom: '1.5rem' }} />
                                    </motion.div>
                                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1rem' }}>
                                        Message Received
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '380px', margin: '0 auto' }}>
                                        Thank you for reaching out, {form.name.split(' ')[0]}. Dr. Mitchell will review your message and respond within one business day.
                                    </p>
                                </div>
                            ) : (
                                <div style={{
                                    background: 'var(--beige)',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid var(--beige-dark)',
                                    padding: '2.5rem',
                                }}>
                                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                                        Send a Message
                                    </h2>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                        All fields marked * are required. Your information is kept strictly confidential.
                                    </p>

                                    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div>
                                                <label htmlFor="contact-name" className="form-label">Full Name *</label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Jane Smith"
                                                    value={form.name}
                                                    onChange={handleChange('name')}
                                                    aria-required="true"
                                                    aria-invalid={!!errors.name}
                                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                                    autoComplete="name"
                                                />
                                                {errors.name && <p id="name-error" role="alert" style={{ color: '#C0392B', fontSize: '0.8rem', marginTop: '0.375rem' }}>{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="contact-email" className="form-label">Email Address *</label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    className="form-input"
                                                    placeholder="you@email.com"
                                                    value={form.email}
                                                    onChange={handleChange('email')}
                                                    aria-required="true"
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                                    autoComplete="email"
                                                />
                                                {errors.email && <p id="email-error" role="alert" style={{ color: '#C0392B', fontSize: '0.8rem', marginTop: '0.375rem' }}>{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div>
                                                <label htmlFor="contact-phone" className="form-label">Phone (optional)</label>
                                                <input
                                                    id="contact-phone"
                                                    type="tel"
                                                    className="form-input"
                                                    placeholder="(555) 000-0000"
                                                    value={form.phone}
                                                    onChange={handleChange('phone')}
                                                    autoComplete="tel"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-service" className="form-label">I'm interested in</label>
                                                <select
                                                    id="contact-service"
                                                    className="form-input"
                                                    value={form.service}
                                                    onChange={handleChange('service')}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <option value="">Select a service</option>
                                                    <option>Individual Therapy (In-Person)</option>
                                                    <option>Telehealth Sessions</option>
                                                    <option>Free 15-Min Consultation</option>
                                                    <option>Other / Not Sure Yet</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '1.75rem' }}>
                                            <label htmlFor="contact-message" className="form-label">What brings you here? *</label>
                                            <textarea
                                                id="contact-message"
                                                className="form-input"
                                                placeholder="Share a little about what you're going through or what you're hoping to work on. There's no right or wrong answer."
                                                value={form.message}
                                                onChange={handleChange('message')}
                                                rows={5}
                                                aria-required="true"
                                                aria-invalid={!!errors.message}
                                                aria-describedby={errors.message ? 'message-error' : undefined}
                                                style={{ resize: 'vertical', minHeight: '120px' }}
                                            />
                                            {errors.message && <p id="message-error" role="alert" style={{ color: '#C0392B', fontSize: '0.8rem', marginTop: '0.375rem' }}>{errors.message}</p>}
                                        </div>

                                        {/* Privacy note */}
                                        <div style={{
                                            background: 'rgba(168,187,163,0.15)',
                                            border: '1px solid var(--sage-light)',
                                            borderRadius: '0.75rem',
                                            padding: '1rem',
                                            display: 'flex',
                                            gap: '0.75rem',
                                            marginBottom: '1.5rem',
                                        }}>
                                            <Shield size={17} style={{ color: 'var(--sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                                                <strong style={{ color: 'var(--navy)' }}>Your privacy is protected.</strong> This form uses secure encryption. Your information is never shared with third parties and is handled in full compliance with HIPAA regulations.
                                            </p>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-primary"
                                            style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                                            aria-busy={loading}
                                        >
                                            {loading ? (
                                                <>Sending…</>
                                            ) : (
                                                <>
                                                    <Send size={16} />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
