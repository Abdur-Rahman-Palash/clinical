import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Dr. Sarah Mitchell',
    description: 'Privacy policy and data practices for the psychotherapy practice of Dr. Sarah Mitchell, PsyD.',
};

export default function Privacy() {
    return (
        <div style={{ paddingTop: '6rem' }}>
            <section style={{ padding: '4rem 0 6rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                        Privacy Policy
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2.5rem' }}>Last updated: February 2026</p>

                    <div className="prose">
                        <h2>1. Introduction</h2>
                        <p>Dr. Sarah Mitchell, PsyD ("Practice," "we," "us") is committed to protecting your privacy and maintaining the confidentiality of your personal health information. This Privacy Policy explains how we collect, use, and safeguard information when you use our website or contact our practice.</p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Contact information</strong>: Name, email address, phone number, and mailing address provided via the contact form.</li>
                            <li><strong>Inquiry information</strong>: Information you voluntarily share when reaching out about services.</li>
                            <li><strong>Technical data</strong>: Website usage data, IP addresses, and browser information collected through analytics tools.</li>
                        </ul>
                        <p>We do NOT collect protected health information (PHI) through this website. Clinical information is collected and stored through HIPAA-compliant electronic health record systems, not this website.</p>

                        <h2>3. How We Use Your Information</h2>
                        <p>Information collected through this website is used solely to:</p>
                        <ul>
                            <li>Respond to your inquiries and schedule consultations</li>
                            <li>Send appointment reminders and practice updates (with your consent)</li>
                            <li>Improve our website and services</li>
                        </ul>

                        <h2>4. HIPAA Compliance</h2>
                        <p>As a healthcare provider, we are bound by the Health Insurance Portability and Accountability Act (HIPAA). All clinical information shared in therapy sessions is protected by HIPAA regulations and our Notice of Privacy Practices, which you will receive at your first appointment.</p>

                        <h2>5. Data Sharing</h2>
                        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be shared only:</p>
                        <ul>
                            <li>With your explicit written consent</li>
                            <li>As required by law (e.g., mandatory reporting obligations)</li>
                            <li>With service providers who assist in practice operations (e.g., scheduling software) under strict data processing agreements</li>
                        </ul>

                        <h2>6. Website Security</h2>
                        <p>Our website uses industry-standard SSL/TLS encryption. Contact forms are secured and data is transmitted safely. However, no internet transmission is 100% secure, and we encourage you to avoid sharing sensitive clinical details via web forms.</p>

                        <h2>7. Cookies</h2>
                        <p>This website may use cookies to enhance your browsing experience and gather anonymous analytics. You may adjust your browser settings to decline cookies; some features of the site may not function fully as a result.</p>

                        <h2>8. Your Rights</h2>
                        <p>You have the right to access, correct, or request deletion of personal information we hold about you. For HIPAA-related rights regarding clinical records, please refer to our Notice of Privacy Practices or contact us directly.</p>

                        <h2>9. Contact</h2>
                        <p>Questions about this Privacy Policy may be directed to:</p>
                        <p>Dr. Sarah Mitchell, PsyD<br />245 Wellness Avenue, Suite 310<br />New York, NY 10001<br />hello@drsarahmitchell.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
