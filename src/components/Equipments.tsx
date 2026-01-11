import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Printer,
    Cog,
    Zap,
    Layers,
    Scissors,
    CircleDot,
    Sun,
    Box,
    Ruler
} from 'lucide-react';
import './Equipments.css';

const equipments = [
    {
        icon: Printer,
        name: 'Impressoras de alta resolução',
        description: 'Equipamentos de última geração para impressão em grande formato',
    },
    {
        icon: Cog,
        name: 'Router CNC',
        description: 'Corte e usinagem de precisão em diversos materiais',
    },
    {
        icon: Zap,
        name: 'Máquina de corte a laser',
        description: 'Cortes precisos e acabamento impecável',
    },
    {
        icon: Layers,
        name: 'Dobra e acabamento em acrílico',
        description: 'Moldagem e finalização profissional',
    },
    {
        icon: Scissors,
        name: 'Solda banner e lonas',
        description: 'União perfeita de materiais flexíveis',
    },
    {
        icon: CircleDot,
        name: 'Ilhoseira pneumática',
        description: 'Acabamento profissional para banners',
    },
    {
        icon: Sun,
        name: 'Impressora plana UV',
        description: 'Impressão direta em superfícies rígidas',
    },
    {
        icon: Box,
        name: 'Vacuum Forming',
        description: 'Moldagem de acrílico e plásticos',
    },
    {
        icon: Ruler,
        name: 'Guilhotina e dobra de chapas',
        description: 'Corte e modelagem de materiais metálicos',
    },
    {
        icon: Zap,
        name: 'CNC Plasma',
        description: 'Corte de chapas metálicas com precisão',
    },
];

export function Equipments() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="equipments section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Nosso <span className="highlight">Parque Gráfico</span>
                    </h2>
                    <p>
                        Equipamentos modernos para entregar qualidade e precisão em cada projeto
                    </p>
                </motion.div>

                <div className="equipments__grid">
                    {equipments.map((equipment, index) => (
                        <motion.div
                            key={equipment.name}
                            className="equipments__card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="equipments__icon">
                                <equipment.icon size={28} />
                            </div>
                            <div className="equipments__content">
                                <h4>{equipment.name}</h4>
                                <p>{equipment.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Imagem de fundo */}
                <motion.div
                    className="equipments__image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img
                        src="https://avisobr.com/blog/wp-content/uploads/2023/07/Modelo_-60.jpg"
                        alt="Impressora UV - Parque gráfico Neo Comunicação Visual"
                    />
                    <div className="equipments__image-overlay">
                        <span>Estrutura completa para atender sua empresa</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
