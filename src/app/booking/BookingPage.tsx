'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, CreditCard, Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    appointmentType: string;
    preferredDate: string;
    preferredTime: string;
    insurance: string;
    concerns: string;
}

export default function BookingPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        appointmentType: 'consultation',
        preferredDate: '',
        preferredTime: '',
        insurance: '',
        concerns: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const appointmentTypes = [
        {
            id: 'consultation',
            title: 'Free 15-Minute Consultation',
            duration: '15 minutes',
            price: 'Free',
            description: 'Initial call to see if we\'re a good fit',
        },
        {
            id: 'individual',
            title: 'Individual Therapy Session',
            duration: '50 minutes',
            price: '$180',
            description: 'Standard one-on-one therapy session',
        },
        {
            id: 'extended',
            title: 'Extended Session',
            duration: '80 minutes',
            price: '$250',
            description: 'Longer session for deep work or first appointment',
        },
    ];

    const timeSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    if (isSubmitted) {
        return (
            <div style={{ paddingTop: '6rem', paddingBottom: '6rem', minHeight: '70vh' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            textAlign: 'center',
                            padding: '3rem',
                            background: 'var(--beige)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--beige-dark)',
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--sage)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem',
                        }}>
                            <Check size={40} color="white" />
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
                            Appointment Request Received!
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Thank you for reaching out. I'll review your request and send you a confirmation email within 24 hours with available appointment times.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            <Link href="/" className="btn-primary">
                                Return to Homepage
                            </Link>
                            <Link href="/contact" style={{ color: 'var(--sage-dark)', textDecoration: 'underline' }}>
                                Need to contact us directly?
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span className="badge">Book Your Session</span>
                    <div className="divider divider-center" />
                    <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                        Schedule Your Appointment
                    </h1>
                    <p className="text-body-lg">
                        Take the first step toward better mental health. Choose your appointment type and preferred time below.
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit}>
                    {/* Appointment Type Selection */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                            Select Appointment Type
                        </h2>
                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                            {appointmentTypes.map((type) => (
                                <motion.div
                                    key={type.id}
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        padding: '1.5rem',
                                        border: formData.appointmentType === type.id ? '2px solid var(--sage)' : '1px solid var(--border)',
                                        borderRadius: 'var(--radius-lg)',
                                        background: formData.appointmentType === type.id ? 'var(--beige)' : 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onClick={() => setFormData(prev => ({ ...prev, appointmentType: type.id }))}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <div>
                                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.25rem' }}>
                                                {type.title}
                                            </h3>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                                {type.description}
                                            </p>
                                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <Clock size={14} /> {type.duration}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <CreditCard size={14} /> {type.price}
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            border: '2px solid var(--sage)',
                                            background: formData.appointmentType === type.id ? 'var(--sage)' : 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            {formData.appointmentType === type.id && (
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Personal Information */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                            Your Information
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <label className="form-label">
                                    <User size={16} style={{ marginRight: '0.5rem' }} />
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <User size={16} style={{ marginRight: '0.5rem' }} />
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <Mail size={16} style={{ marginRight: '0.5rem' }} />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <Phone size={16} style={{ marginRight: '0.5rem' }} />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Scheduling Preferences */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                            Scheduling Preferences
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <label className="form-label">
                                    <Calendar size={16} style={{ marginRight: '0.5rem' }} />
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    <Clock size={16} style={{ marginRight: '0.5rem' }} />
                                    Preferred Time
                                </label>
                                <select
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {timeSlots.map(slot => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Insurance Information */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                            Insurance Information
                        </h2>
                        <div>
                            <label className="form-label">Insurance Provider (Optional)</label>
                            <input
                                type="text"
                                name="insurance"
                                value={formData.insurance}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="e.g., Blue Cross Blue Shield, Aetna, Cigna"
                            />
                        </div>
                        <div style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'var(--beige)',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--beige-dark)',
                        }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                I accept most major insurance plans. Please check with your provider about coverage for mental health services. I can also provide documentation for out-of-network reimbursement.
                            </p>
                        </div>
                    </section>

                    {/* Current Concerns */}
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                            What brings you to therapy?
                        </h2>
                        <div>
                            <label className="form-label">Brief description of your concerns (Optional)</label>
                            <textarea
                                name="concerns"
                                value={formData.concerns}
                                onChange={handleInputChange}
                                className="form-input"
                                rows={4}
                                placeholder="Please share a brief description of what you'd like to work on in therapy..."
                            />
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div style={{ textAlign: 'center' }}>
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className="btn-primary"
                            style={{
                                fontSize: '1rem',
                                padding: '1rem 3rem',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                        </motion.button>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                            You'll receive a confirmation email within 24 hours.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
