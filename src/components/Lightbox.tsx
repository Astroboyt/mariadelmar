import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LightboxProps {
    images: string[];
    selectedIndex: number | null;
    onClose: () => void;
}

export function Lightbox({ images, selectedIndex, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (selectedIndex !== null) {
            setCurrentIndex(selectedIndex);
        }
    }, [selectedIndex]);

    if (images.length === 0) return null;

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };



    return (
        <AnimatePresence>
            {selectedIndex !== null && (
                <motion.div
                    className="lightbox-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    onClick={onClose}
                >
                    <button className="lightbox-close" onClick={onClose}>
                        CLOSE
                    </button>

                    <div className="lightbox-carousel">
                        {/* Invisible Left Click Zone */}
                        <div
                            className="lightbox-nav-zone left"
                            onClick={handlePrev}
                        >
                            <span className="nav-label">PREV</span>
                        </div>

                        {/* Current Main Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="lightbox-main-content"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                onClick={(e) => e.stopPropagation()}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_e, { offset, velocity }) => {
                                    if (offset.x < -40 || velocity.x < -400) {
                                        handleNext();
                                    } else if (offset.x > 40 || velocity.x > 400) {
                                        handlePrev();
                                    }
                                }}
                            >
                                <img src={images[currentIndex]} alt="Editorial view" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Invisible Right Click Zone */}
                        <div
                            className="lightbox-nav-zone right"
                            onClick={handleNext}
                        >
                            <span className="nav-label">NEXT</span>
                        </div>
                    </div>

                    <div className="lightbox-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
