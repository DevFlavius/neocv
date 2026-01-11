import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/5579933037409"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Fale conosco pelo WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="whatsapp-button__tooltip">
                Fale conosco!
            </span>
        </motion.a>
    );
}
