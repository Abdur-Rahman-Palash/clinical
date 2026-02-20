'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
    {
        q: 'How long are therapy sessions?',
        a: `Standard individual therapy sessions are 50 minutes. Extended 80-minute sessions are available upon request and are particularly helpful during intensive phases of trauma work or when you feel you need more time to process. We'll discuss what format works best for you during our initial consultation.`,
    },
    {
        q: 'Do you accept insurance?',
        a: 'Yes, Dr. Mitchell is in-network with several major insurance plans including Aetna, Cigna, and United Healthcare. For out-of-network plans, a superbill can be provided so you can seek reimbursement directly from your insurer. Please see the Insurance & Fees page or contact us to verify your specific coverage before booking.',
    },
    {
        q: 'Is everything I share in therapy confidential?',
        a: 'Absolutely. Confidentiality is the cornerstone of effective therapy. Everything shared in our sessions is protected by law and professional ethics. There are only a few narrow exceptions required by law: if there is imminent risk of harm to yourself or others, evidence of abuse of a minor or vulnerable adult, or a court order. These will always be discussed with you in advance.',
    },
    {
        q: 'What is your cancellation policy?',
        a: 'We ask for at least 24 hours\' notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours\' notice will be charged the full session fee, as that time has been reserved specifically for you. We understand that emergencies happen and handle those situations with compassion on a case-by-case basis.',
    },
    {
        q: 'Do you offer telehealth sessions?',
        a: 'Yes! Telehealth sessions are available via a secure, HIPAA-compliant video platform for residents of New York, New Jersey, and Connecticut. Many clients find telehealth just as effective as in-person sessions, and it offers significant flexibility. You\'ll receive a secure link before each session.',
    },
    {
        q: 'How do I know if therapy is right for me?',
        a: 'If you\'re experiencing persistent distress, feeling stuck in patterns that aren\'t serving you, or simply want to understand yourself better and grow — therapy can help. You don\'t need to be in crisis to benefit from therapy. A free 15-minute phone consultation is a great way to explore whether it feels like a good fit.',
    },
    {
        q: 'How long will I need to be in therapy?',
        a: 'This varies greatly depending on your goals, the complexity of what you\'re working through, and how quickly you\'d like to progress. Some people find significant relief in 8–12 focused sessions; others benefit from longer-term work. We\'ll regularly review your progress together and adjust our plan accordingly.',
    },
    {
        q: 'What can I expect in the first session?',
        a: 'The first session is a relaxed conversation to help us get to know each other. We\'ll talk about what brings you to therapy, your history, what you\'re hoping for, and answer any questions you might have. It\'s also an opportunity for you to assess whether you feel comfortable with Dr. Mitchell\'s style. There\'s no pressure — this is simply a conversation.',
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div style={{ paddingTop: '6rem' }}>
            <section style={{ padding: '4.5rem 0 3rem', background: 'linear-gradient(160deg, var(--beige) 0%, white 100%)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ textAlign: 'center' }}
                    >
                        <span className="badge">Common Questions</span>
                        <div className="divider divider-center" />
                        <h1 className="text-display" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>
                            Frequently Asked Questions
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: '520px', margin: '0 auto' }}>
                            Have questions? We have answers. If you don't find what you're looking for, please reach out directly.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '4rem 0 6rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <div role="list">
                        {faqs.map(({ q, a }, i) => (
                            <motion.div
                                key={i}
                                role="listitem"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                                style={{
                                    borderBottom: i < faqs.length - 1 ? '1px solid var(--beige-dark)' : 'none',
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    aria-expanded={openIndex === i}
                                    aria-controls={`faq-answer-${i}`}
                                    id={`faq-question-${i}`}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '1.5rem',
                                        padding: '1.5rem 0',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '1.075rem',
                                        fontWeight: 600,
                                        color: openIndex === i ? 'var(--sage-dark)' : 'var(--navy)',
                                        lineHeight: 1.4,
                                        transition: 'color 0.2s ease',
                                    }}>
                                        {q}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        style={{
                                            color: openIndex === i ? 'var(--sage-dark)' : 'var(--text-muted)',
                                            flexShrink: 0,
                                            width: '28px',
                                            height: '28px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: openIndex === i ? 'rgba(168,187,163,0.2)' : 'var(--beige)',
                                            borderRadius: '50%',
                                            transition: 'background 0.2s ease',
                                        }}
                                    >
                                        <ChevronDown size={16} />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            id={`faq-answer-${i}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ paddingBottom: '1.75rem' }}>
                                                <p style={{
                                                    color: 'var(--text-secondary)',
                                                    lineHeight: 1.85,
                                                    fontSize: '0.95rem',
                                                    borderLeft: '3px solid var(--sage-light)',
                                                    paddingLeft: '1.25rem',
                                                }}>
                                                    {a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            marginTop: '3.5rem',
                            background: 'var(--beige)',
                            borderRadius: 'var(--radius-xl)',
                            padding: '2.5rem',
                            textAlign: 'center',
                            border: '1px solid var(--beige-dark)',
                        }}
                    >
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.875rem' }}>
                            Still Have Questions?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '400px', margin: '0 auto 1.75rem' }}>
                            Don't hesitate to reach out. We're happy to answer any questions before you commit to anything.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Contact Dr. Mitchell
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
