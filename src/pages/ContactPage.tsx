import { motion } from 'framer-motion';

export function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="page-container block-spacing"
            style={{ paddingTop: '150px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <h2 className="section-title text-center" style={{ fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.1em' }}>CONTACT</h2>

            <div style={{ textAlign: 'center', lineHeight: 2, fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.8 }}>
                <p>For bookings and inquiries:</p>
                <p style={{ marginTop: '1rem', fontWeight: 500 }}><a href="mailto:hello@mariadelmar.com" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>hello@mariadelmar.com</a></p>

                <div style={{ marginTop: '4rem', fontSize: '1rem', fontStyle: 'normal', fontFamily: 'var(--font-sans)', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <a href="#" style={{ opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Instagram</a>
                    <a href="#" style={{ opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Models.com</a>
                </div>
            </div>
        </motion.div>
    );
}
