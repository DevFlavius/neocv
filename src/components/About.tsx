import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Wrench, Target, ArrowRight } from 'lucide-react';
import './About.css';

const features = [
    {
        icon: Award,
        title: 'Excelência',
        description: 'Qualidade superior em cada projeto, desde um simples banner até campanhas nacionais.',
    },
    {
        icon: Wrench,
        title: 'Fabricação Própria',
        description: 'Parque gráfico completo com tecnologia de ponta para impressão e acabamento.',
    },
    {
        icon: Users,
        title: 'Equipe Especializada',
        description: 'Profissionais altamente capacitados e atendimento personalizado.',
    },
    {
        icon: Target,
        title: 'Soluções Sob Medida',
        description: 'Desenvolvemos projetos especiais para superar os mais complexos desafios.',
    },
];

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="sobre" className="about section" ref={ref}>
            {/* Watermark */}
            <motion.img
                src="/logo-outline.svg"
                alt=""
                className="about__watermark"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.05 } : {}}
                transition={{ duration: 1 }}
            />

            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Sobre a <span className="highlight">Neo</span>
                    </h2>
                    <p>
                        Há mais de 15 anos transformando ideias em soluções visuais impactantes
                    </p>
                </motion.div>

                <div className="about__grid">
                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3>Concretizando ideias e solucionando desafios</h3>
                        <p>
                            Atuamos no ramo de comunicação visual desde <strong>2008</strong> e somos uma
                            empresa inovadora. Inovação que começa pelos colaboradores: profissionais
                            altamente capacitados aliados a recursos tecnológicos e atendimento personalizado.
                        </p>
                        <p>
                            Estamos prontos para superar os mais complexos desafios, seja no desenvolvimento
                            e na instalação de projetos especiais, material promocional, ponto de venda ou
                            na adesivagem de frotas.
                        </p>
                        <p>
                            Temos como diferencial a <strong>versatilidade nos processos produtivos</strong>,
                            a diversidade de mídias e a qualidade dos nossos serviços, o que nos permite
                            entregar rapidamente soluções sob medida.
                        </p>

                        <motion.a
                            href="#servicos"
                            className="about__cta"
                            whileHover={{ x: 5 }}
                        >
                            Conheça nossos serviços <ArrowRight size={18} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="about__features"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="about__feature glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="about__feature-icon">
                                    <feature.icon size={28} />
                                </div>
                                <div className="about__feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
