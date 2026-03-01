import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Page = 'home' | 'photos' | 'about' | 'design' | 'contact';

interface NavigationProps {
    currentPage: Page;
    setPage: (page: Page) => void;
}

export function Navigation({ currentPage, setPage }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when page changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [currentPage]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = (page: Page) => {
        setPage(page);
    };

    return (
        <>
            <motion.nav
                className="navbar"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="logo" style={{ cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
                    Maria Del Mar
                </div>

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    <button
                        className={currentPage === 'home' ? 'active' : ''}
                        onClick={() => handleNavClick('home')}
                    >Home</button>
                    <button
                        className={currentPage === 'photos' ? 'active' : ''}
                        onClick={() => handleNavClick('photos')}
                    >Photos</button>
                    <button
                        className={currentPage === 'about' ? 'active' : ''}
                        onClick={() => handleNavClick('about')}
                    >About Me</button>
                    <button
                        className={currentPage === 'design' ? 'active' : ''}
                        onClick={() => handleNavClick('design')}
                    >Design</button>
                    <button
                        className={currentPage === 'contact' ? 'active' : ''}
                        onClick={() => handleNavClick('contact')}
                    >Contact</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-nav-overlay"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="mobile-nav-links">
                            <button
                                className={currentPage === 'home' ? 'active' : ''}
                                onClick={() => handleNavClick('home')}
                            >Home</button>
                            <button
                                className={currentPage === 'photos' ? 'active' : ''}
                                onClick={() => handleNavClick('photos')}
                            >Photos</button>
                            <button
                                className={currentPage === 'about' ? 'active' : ''}
                                onClick={() => handleNavClick('about')}
                            >About Me</button>
                            <button
                                className={currentPage === 'design' ? 'active' : ''}
                                onClick={() => handleNavClick('design')}
                            >Design</button>
                            <button
                                className={currentPage === 'contact' ? 'active' : ''}
                                onClick={() => handleNavClick('contact')}
                            >Contact</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
