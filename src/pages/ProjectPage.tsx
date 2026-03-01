import { motion } from 'framer-motion';

export function ProjectPage({ projectId, setPage }: { projectId: string; setPage: (page: string) => void }) {
    console.log("Loading project", projectId);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="page-container block-spacing"
            style={{ paddingTop: '150px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <button
                onClick={() => setPage('design')}
                style={{ alignSelf: 'flex-start', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}
            >
                ← Back to Projects
            </button>
            <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>CREATIVE PROJECT {projectId}</h2>

            <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
                alt="Project Banner"
                style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover', marginBottom: '3rem' }}
            />

            <div style={{ maxWidth: '800px', lineHeight: 2, fontFamily: 'var(--font-sans)', fontSize: '1.1rem', opacity: 0.8 }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <p>
                    [Placeholder for actual project description, credits, and additional gallery images.]
                </p>
            </div>
        </motion.div>
    );
}
