import { motion } from 'framer-motion';
import { useState } from 'react';
import { Lightbox } from '../Lightbox';

const BOOK_IMAGES = [
    "https://iili.io/qqnwSz7.png",
    "https://iili.io/qqnjQoX.png",
    "https://iili.io/qqnOY9R.png",
    "https://iili.io/qqnwSz7.png",
    "https://iili.io/qqnjQoX.png",
    "https://iili.io/qqnOY9R.png"
];

export function MainGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <>
            <section id="book" className="section block-spacing">
                <h2 className="section-title">BOOK</h2>
                <div className="masonry-grid">
                    {BOOK_IMAGES.map((src, index) => (
                        <motion.div
                            key={index}
                            className="masonry-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <motion.img
                                src={src}
                                alt={`Portfolio ${index + 1}`}
                                whileHover={{ scale: 1.05, filter: 'brightness(1.1) saturate(0.8)' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <Lightbox
                images={BOOK_IMAGES}
                selectedIndex={selectedIndex}
                onClose={() => setSelectedIndex(null)}
            />
        </>
    );
}
