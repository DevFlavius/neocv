import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Watermark } from './Watermark';
import './Hero.css';

export function Hero() {
    return (
        <section id="inicio" className="hero">
            {/* Background Elements */}
            <div className="hero__bg-gradient" />
            <div className="hero__bg-glow" />

            {/* Watermark Pattern - múltiplos logos em 90 graus */}
            <Watermark variant="pattern" opacity={0.02} />

            <div className="container hero__container">
                <motion.div
                    className="hero__badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <Sparkles size={16} />
                    <span>Desde 2008 transformando ideias em realidade</span>
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Sua marca com
                    <br />
                    <span className="hero__title-highlight">presença visual</span>
                    <br />
                    impactante
                </motion.h1>

                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    Comunicação visual de alta performance para empresas que querem se destacar.
                    <br />
                    Fachadas, letras caixa, sinalização, frotas e muito mais.
                </motion.p>

                <motion.div
                    className="hero__buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                >
                    <motion.a
                        href="https://wa.me/5579933037409"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary hero__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Solicitar Orçamento
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Portfólio
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="hero__stat">
                        <span className="hero__stat-number">15+</span>
                        <span className="hero__stat-label">Anos de experiência</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">1000+</span>
                        <span className="hero__stat-label">Projetos realizados</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-number">500+</span>
                        <span className="hero__stat-label">Clientes atendidos</span>
                    </div>
                </motion.div>

                <motion.a
                    href="#sobre"
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ArrowDown size={24} />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    );
}
