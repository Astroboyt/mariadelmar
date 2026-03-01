import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const VIDEOS = [
    "https://iili.io/qqnwSz7.png", // placeholder for video
    "https://iili.io/qqnjQoX.png"
];

export function MotionBanner() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    return (
        <section ref={containerRef} className="section bg-dark text-light motion-section">
            <div className="marquee-container">
                <motion.div className="marquee-track" style={{ x: x1 }}>
                    <h2>MOTION</h2>
                    <h2>MOTION</h2>
                    <h2>MOTION</h2>
                    <h2>MOTION</h2>
                    <h2>MOTION</h2>
                </motion.div>
            </div>

            <div className="motion-carousel">
                {VIDEOS.map((src, index) => (
                    <motion.div
                        key={index}
                        className="motion-item"
                        style={{ x: index % 2 === 0 ? x2 : x1 }}
                    >
                        {/* In a real app these would be <video autoPlay loop muted> */}
                        <img src={src} alt={`Motion sequence ${index + 1}`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
