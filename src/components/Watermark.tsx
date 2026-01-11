import { motion } from 'framer-motion';
import './Watermark.css';

interface WatermarkProps {
    variant?: 'left' | 'right' | 'scattered' | 'pattern';
    opacity?: number;
}

const logoOutline = `${import.meta.env.BASE_URL}logo-outline.svg`;

export function Watermark({ variant = 'pattern', opacity = 0.03 }: WatermarkProps) {
    // Versão com pattern - múltiplos logos em 90 graus com tamanhos variados
    if (variant === 'pattern') {
        return (
            <div className="watermark-pattern" style={{ opacity: opacity * 2 }}>
                {/* Logos em diferentes posições, tamanhos e rotações de 90 graus */}
                <motion.img
                    src={logoOutline}
                    alt=""
                    className="watermark-pattern__logo watermark-pattern__logo--1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.img
                    src={logoOutline}
                    alt=""
                    className="watermark-pattern__logo watermark-pattern__logo--2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.img
                    src={logoOutline}
                    alt=""
                    className="watermark-pattern__logo watermark-pattern__logo--3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.img
                    src={logoOutline}
                    alt=""
                    className="watermark-pattern__logo watermark-pattern__logo--4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.img
                    src={logoOutline}
                    alt=""
                    className="watermark-pattern__logo watermark-pattern__logo--5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
            </div>
        );
    }

    // Versão scattered - logos espalhados aleatoriamente
    if (variant === 'scattered') {
        return (
            <div className="watermark-scattered" style={{ opacity }}>
                <img src={logoOutline} alt="" className="watermark-scattered__logo watermark-scattered__logo--1" />
                <img src={logoOutline} alt="" className="watermark-scattered__logo watermark-scattered__logo--2" />
                <img src={logoOutline} alt="" className="watermark-scattered__logo watermark-scattered__logo--3" />
            </div>
        );
    }

    // Versões simples left/right
    return (
        <motion.img
            src={logoOutline}
            alt=""
            className={`watermark watermark--${variant}`}
            style={{ opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 1 }}
        />
    );
}
