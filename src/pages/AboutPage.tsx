import { motion } from 'framer-motion';

export function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="page-container block-spacing"
            style={{ paddingTop: '150px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <h2 className="section-title text-center" style={{ fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.1em' }}>ABOUT ME</h2>
            <div style={{ maxWidth: '600px', textAlign: 'center', lineHeight: 1.8, opacity: 0.8 }}>
                <p>
                    I am Maria Del Mar, a fashion model and creative director currently based between New York and London.
                    My work is driven by a passion for editorial storytelling, minimalist aesthetics, and the intersection
                    of high-end fashion with contemporary art.
                </p>
                <br />
                <p>
                    [Placeholder for detailed bio and career highlights]
                </p>
            </div>
        </motion.div>
    );
}
