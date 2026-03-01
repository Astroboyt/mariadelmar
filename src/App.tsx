import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation, Page } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { PhotosPage } from './pages/PhotosPage';
import { AboutPage } from './pages/AboutPage';
import { DesignPage } from './pages/DesignPage';
import { ContactPage } from './pages/ContactPage';

import { ProjectPage } from './pages/ProjectPage';

function App() {
    const [currentPage, setCurrentPage] = useState<string>('home');

    return (
        <div className="app-container">
            <Navigation currentPage={currentPage} setPage={setCurrentPage} />

            <AnimatePresence mode="wait">
                {currentPage === 'home' && <Hero key="home" />}
                {currentPage === 'photos' && <PhotosPage key="photos" />}
                {currentPage === 'about' && <AboutPage key="about" />}
                {currentPage === 'design' && <DesignPage key="design" setPage={setCurrentPage} />}
                {currentPage === 'contact' && <ContactPage key="contact" />}
                {currentPage.startsWith('project:') && <ProjectPage key="project" projectId={currentPage.split(':')[1]} setPage={setCurrentPage} />}
            </AnimatePresence>
        </div>
    );
}

export default App;
