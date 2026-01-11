import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    Building2,
    Car,
    Printer,
    SignpostBig,
    Lightbulb,
    PanelTop,
    Layers,
    Type,
    ArrowRight
} from 'lucide-react';
import './Services.css';

const services = [
    {
        id: 'fachadas',
        icon: Building2,
        title: 'Fachadas em ACM',
        description: 'Fachadas modernas em Aluminium Composite Material com estrutura galvanizada.',
        features: ['Alta durabilidade', 'Resistência às intempéries', 'Design personalizado'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/289ce792979973.6336ee4401542.png',
    },
    {
        id: 'letras',
        icon: Type,
        title: 'Letras Caixa',
        description: 'Letras 3D em aço inox, galvanizado, PVC ou acrílico com iluminação LED.',
        features: ['Aço inox escovado/polido', 'Iluminação LED integrada', 'Acabamento premium'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/b20ae792979973.61a67a48284b4.jpg',
    },
    {
        id: 'frotas',
        icon: Car,
        title: 'Envelopamento de Frotas',
        description: 'Transforme seus veículos em mídia móvel com envelopamento total ou parcial.',
        features: ['Proteção da pintura', 'Vinil de alta qualidade', 'Instalação profissional'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/cd3e2a92979071.63e0ea9ed888c.jpg',
    },
    {
        id: 'impressao',
        icon: Printer,
        title: 'Impressão Digital',
        description: 'Impressões de alta resolução em diversos substratos: lonas, adesivos, papéis e mais.',
        features: ['Tintas eco-solvente', 'Grande formato', 'Diversos materiais'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3579c392978439.61aa26ad37723.jpg',
    },
    {
        id: 'sinalizacao',
        icon: SignpostBig,
        title: 'Sinalização',
        description: 'Sinalização de segurança, orientação e comunicação visual corporativa.',
        features: ['Normas do Corpo de Bombeiros', 'Sinalização viária', 'Quadros de gestão'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6ca96f92978581.60e315e9d774a.jpg',
    },
    {
        id: 'luminosos',
        icon: Lightbulb,
        title: 'Luminosos e LED Neon',
        description: 'Caixas de luz, LED neon e painéis luminosos para destaque noturno.',
        features: ['LED de alta eficiência', 'Baixo consumo', 'Impacto visual'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/8ac905176045595.685560d912da9.jpg',
    },
    {
        id: 'brises',
        icon: PanelTop,
        title: 'Brises',
        description: 'Brises arquitetônicos em alumínio para proteção solar e estética predial.',
        features: ['Design moderno', 'Conforto térmico', 'Personalização'],
        image: 'https://portalmad.com.br/wp-content/uploads/2024/04/brise-soleil.webp',
    },
    {
        id: 'especiais',
        icon: Layers,
        title: 'Projetos Especiais',
        description: 'Stands, totens, displays e soluções criativas sob medida para sua marca.',
        features: ['Consulta personalizada', 'Projetos exclusivos', 'Execução completa'],
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/3d4762126421205.616041f8cfa31.jpg',
    },
];

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <section id="servicos" className="services section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Nossos <span className="highlight">Serviços</span>
                    </h2>
                    <p>
                        Soluções completas em comunicação visual para transformar sua marca
                    </p>
                </motion.div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`services__card glass-card ${hoveredService === service.id ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="services__card-image">
                                <img src={service.image} alt={service.title} />
                                <div className="services__card-overlay" />
                            </div>

                            <div className="services__card-content">
                                <div className="services__card-icon">
                                    <service.icon size={24} />
                                </div>

                                <h3 className="services__card-title">{service.title}</h3>
                                <p className="services__card-description">{service.description}</p>

                                <ul className="services__card-features">
                                    {service.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <motion.a
                                    href="https://wa.me/5579933037409"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="services__card-link"
                                    whileHover={{ x: 5 }}
                                >
                                    Solicitar orçamento <ArrowRight size={16} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
