import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PROJECTS = [
    { id: 1, title: 'VOGUE EDITORIAL', image: 'https://iili.io/qqnrXTb.png' },
    { id: 2, title: 'FW24 CAMPAIGN', image: 'https://iili.io/qqn4tiQ.png' },
    { id: 3, title: 'MET GALA 2025', image: 'https://iili.io/qqnOY9R.png' }
];

function ProjectCard({ project, onClick }: { project: typeof PROJECTS[0], onClick: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="project-card"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            whileHover={{ scale: 1.02 }}
        >
            <img src={project.image} alt={project.title} />
            <motion.div
                className="project-title-overlay"
                style={{ transform: "translateZ(50px)" }}
            >
                <h3>{project.title}</h3>
            </motion.div>
        </motion.div>
    );
}

export function CreativeProjects({ setPage }: { setPage: (page: string) => void }) {
    return (
        <div className="projects-grid">
            {PROJECTS.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setPage(`project:${project.id}`)}
                />
            ))}
        </div>
    );
}
