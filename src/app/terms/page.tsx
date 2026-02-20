import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Disclaimer | Dr. Sarah Mitchell',
    description: 'Terms of use and professional disclaimer for the website and services of Dr. Sarah Mitchell, PsyD.',
};

export default function Terms() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <section style={{ padding: '4rem 0 6rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                        Terms of Use &amp; Disclaimer
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2.5rem' }}>Last updated: February 2026</p>

                    <div
                        style={{
                            background: 'rgba(192,57,43,0.07)',
                            border: '1.5px solid rgba(192,57,43,0.2)',
                            borderRadius: 'var(--radius)',
                            padding: '1.25rem 1.5rem',
                            marginBottom: '2.5rem',
                        }}
                    >
                        <p style={{ fontSize: '0.9rem', color: '#8B2219', lineHeight: 1.75, fontWeight: 500 }}>
                            ⚠️ <strong>Emergency Notice:</strong> If you are in immediate danger or experiencing a mental health crisis, please call <strong>911</strong> or the <strong>988 Suicide & Crisis Lifeline (call or text 988)</strong>. This website is not a crisis resource.
                        </p>
                    </div>

                    <div className="prose">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please refrain from using this site.</p>

                        <h2>2. Not a Substitute for Professional Care</h2>
                        <p>The content on this website — including articles, blog posts, and descriptions of therapeutic approaches — is provided for <strong>general informational purposes only</strong>. It does not constitute medical or psychological advice, diagnosis, or treatment. Reading content on this website does not establish a therapist-client relationship.</p>
                        <p>Always seek the advice of a qualified mental health professional with any questions you may have regarding a mental health condition or treatment.</p>

                        <h2>3. No Therapist-Client Relationship</h2>
                        <p>Completing the contact form, sending an email, or otherwise communicating through this website does not create a therapist-client relationship. A therapeutic relationship is only established upon mutual agreement documented through formal intake procedures and a signed client agreement.</p>

                        <h2>4. Accuracy of Information</h2>
                        <p>While we make every effort to ensure the accuracy and currency of content on this website, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information presented.</p>

                        <h2>5. Intellectual Property</h2>
                        <p>All content on this website, including text, images, and design, is the intellectual property of Dr. Sarah Mitchell, PsyD unless otherwise noted. Reproduction or redistribution without written permission is prohibited.</p>

                        <h2>6. External Links</h2>
                        <p>This website may contain links to external websites. We have no control over the content and practices of those sites and accept no responsibility for them.</p>

                        <h2>7. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, Dr. Sarah Mitchell, PsyD shall not be liable for any indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or its content.</p>

                        <h2>8. Changes to These Terms</h2>
                        <p>These Terms may be updated periodically. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

                        <h2>9. Governing Law</h2>
                        <p>These Terms are governed by the laws of the State of New York, without regard to conflict of law provisions.</p>

                        <h2>10. Contact</h2>
                        <p>For questions about these Terms, please contact us at hello@drsarahmitchell.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
