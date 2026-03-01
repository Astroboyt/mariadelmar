import { motion } from 'framer-motion';
import { CreativeProjects } from '../components/sections/CreativeProjects';

export function DesignPage({ setPage }: { setPage: (page: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="page-container"
            style={{ paddingTop: '100px', minHeight: '100vh' }}
        >
            <section id="design" className="section block-spacing">
                <h2 className="section-title text-center" style={{ fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.1em' }}>CREATIVE DIRECTION</h2>
                <CreativeProjects setPage={setPage} />
            </section>
        </motion.div>
    );
}
