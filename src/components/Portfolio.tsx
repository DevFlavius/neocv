import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

// Projetos do Behance com categorias - IMAGENS REAIS
const projects = [
    {
        id: 1,
        title: 'Stands e Projetos Especiais',
        category: 'Projetos Especiais',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/3d4762126421205.616041f8cfa31.jpg',
        description: 'Desenvolvimento de stands para feiras e eventos',
        behanceUrl: 'https://www.behance.net/gallery/126421205/STANDS-E-PROJETOS-ESPECIAIS',
    },
    {
        id: 2,
        title: 'Envelopamento de Frota',
        category: 'Frotas',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/cd3e2a92979071.63e0ea9ed888c.jpg',
        description: 'Adesivação completa de veículos comerciais',
        behanceUrl: 'https://www.behance.net/gallery/92979071/ENVELOPAMENTO-DE-FROTAS',
    },
    {
        id: 3,
        title: 'Sinalização Corporativa',
        category: 'Sinalização',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6ca96f92978581.60e315e9d774a.jpg',
        description: 'Sistema de sinalização interna e orientação visual',
        behanceUrl: 'https://www.behance.net/gallery/92978581/SINALIZACOES',
    },
    {
        id: 4,
        title: 'Fachadas em ACM',
        category: 'Fachadas',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/289ce792979973.6336ee4401542.png',
        description: 'Revestimento de fachadas com alumínio composto',
        behanceUrl: 'https://www.behance.net/gallery/92979973/FACHADAS',
    },
    {
        id: 5,
        title: 'Materiais Promocionais',
        category: 'Projetos Especiais',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/96b5f692983315.630d25995e1b5.jpg',
        description: 'Displays, banners e materiais para ponto de venda',
        behanceUrl: 'https://www.behance.net/gallery/92983315/MATERIAIS-PROMOCIONAIS',
    },
    {
        id: 6,
        title: 'Impressão Digital',
        category: 'Impressão',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3579c392978439.61aa26ad37723.jpg',
        description: 'Impressões de alta resolução em diversos materiais',
        behanceUrl: 'https://www.behance.net/gallery/92988871/LONAS-PLACAS-BACKDROPS-BANNERS',
    },
];

const categories = ['Todos', 'Fachadas', 'Frotas', 'Sinalização', 'Impressão', 'Projetos Especiais'];

export function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredProjects = activeCategory === 'Todos'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const openLightbox = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setCurrentIndex(filteredProjects.findIndex(p => p.id === project.id));
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const nextProject = () => {
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        setCurrentIndex(nextIndex);
        setSelectedProject(filteredProjects[nextIndex]);
    };

    const prevProject = () => {
        const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setCurrentIndex(prevIndex);
        setSelectedProject(filteredProjects[prevIndex]);
    };

    return (
        <section id="portfolio" className="portfolio section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Nosso <span className="highlight">Portfólio</span>
                    </h2>
                    <p>
                        Conheça alguns dos projetos que realizamos com excelência
                    </p>
                </motion.div>

                {/* Filtros */}
                <motion.div
                    className="portfolio__filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`portfolio__filter ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Grid de Projetos */}
                <motion.div
                    className="portfolio__grid"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="portfolio__item"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onClick={() => openLightbox(project)}
                            >
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio__item-overlay">
                                    <span className="portfolio__item-category">{project.category}</span>
                                    <h4 className="portfolio__item-title">{project.title}</h4>
                                    <p className="portfolio__item-description">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Botão Behance */}
                <motion.div
                    className="portfolio__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="https://www.behance.net/neocomunicacaovisual"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <ExternalLink size={18} />
                        Ver mais no Behance
                    </a>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="portfolio__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="portfolio__lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="portfolio__lightbox-close" onClick={closeLightbox}>
                                <X size={24} />
                            </button>

                            <button className="portfolio__lightbox-nav portfolio__lightbox-prev" onClick={prevProject}>
                                <ChevronLeft size={32} />
                            </button>

                            <button className="portfolio__lightbox-nav portfolio__lightbox-next" onClick={nextProject}>
                                <ChevronRight size={32} />
                            </button>

                            <img src={selectedProject.image} alt={selectedProject.title} />

                            <div className="portfolio__lightbox-info">
                                <span className="portfolio__item-category">{selectedProject.category}</span>
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>
                                <a
                                    href={selectedProject.behanceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <ExternalLink size={16} />
                                    Ver no Behance
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
