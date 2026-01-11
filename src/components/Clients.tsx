import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Clients.css';

// Clientes baseados na imagem fornecida
const clients = [
    { name: 'Banese', logo: 'https://images.seeklogo.com/logo-png/19/1/banese-logo-png_seeklogo-190064.png' },
    { name: 'Bompreço', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Logotipo_do_BIG_Bompre%C3%A7o.svg' },
    { name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_VIVO.svg' },
    { name: 'Magazine Luiza', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Magalu_-_novo_logo.png' },
    { name: 'RioMar', logo: 'https://mamiferosaquaticos.org.br/system/7LvBKdYaKWvf49WM80Vk6Eqm8Lc4OOTKUMLejaqGyOsh5zcpcaxlx-Dem951Mj-vHWl_h-xYS4RIssVH__HHOg/files/FMA/r%20RioMar-Shopping-Vers%C3%A3o-Horizontal-01.png' },
    { name: 'Chesf', logo: 'https://www.diversaconsultoria.com.br/assets/img/clientes/chesf.png' },
];

// Mais clientes para o carrossel
const allClients = [
    'Banese', 'Bompreço', 'Cosil', 'TodoDia', 'Pisolar', 'AC Engenharia',
    'Celi', 'Donatário', 'RioMar', 'Jotanunes', 'Maxi Atacado', 'União',
    'Bremen', 'Magazine Luiza', 'São Lucas', 'Hiper Bompreço', 'Vivo', 'Chesf'
];

export function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="clients section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Alguns <span className="highlight">Clientes</span>
                    </h2>
                    <p>
                        Empresas que confiam na Neo Comunicação Visual
                    </p>
                </motion.div>

                {/* Grid de logos */}
                <motion.div
                    className="clients__grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            className="clients__item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={client.logo} alt={client.name} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lista de nomes de clientes */}
                <motion.div
                    className="clients__list"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="clients__marquee">
                        <div className="clients__marquee-content">
                            {allClients.map((client, index) => (
                                <span key={index} className="clients__name">
                                    {client}
                                </span>
                            ))}
                            {/* Duplica para efeito de loop */}
                            {allClients.map((client, index) => (
                                <span key={`dup-${index}`} className="clients__name">
                                    {client}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contador */}
                <motion.div
                    className="clients__stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="clients__stat">
                        <span className="clients__stat-number">500+</span>
                        <span className="clients__stat-label">Clientes atendidos</span>
                    </div>
                    <div className="clients__stat-divider" />
                    <div className="clients__stat">
                        <span className="clients__stat-number">15+</span>
                        <span className="clients__stat-label">Anos de mercado</span>
                    </div>
                    <div className="clients__stat-divider" />
                    <div className="clients__stat">
                        <span className="clients__stat-number">1000+</span>
                        <span className="clients__stat-label">Projetos realizados</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
