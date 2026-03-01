import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Create parallax effect mapped to scroll position
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Move image down slower than scroll to create parallax
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={containerRef} className="hero-section">
            <motion.div
                className="hero-image-container"
                style={{ y }}
            >
                <img
                    src="https://iili.io/qqnEHgI.png"
                    alt="Maria Del Mar Editorial"
                    className="hero-image"
                />
            </motion.div>
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Maria<br />del Mar
                </motion.h1>
            </div>
        </section>
    );
}
