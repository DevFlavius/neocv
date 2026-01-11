import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import './Contact.css';

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redireciona para WhatsApp com a mensagem
        const message = `Olá! Meu nome é ${formData.name}.%0A%0A
*Serviço de interesse:* ${formData.service}%0A%0A
*Mensagem:* ${formData.message}%0A%0A
*Contato:* ${formData.phone} / ${formData.email}`;

        window.open(`https://wa.me/5579933037409?text=${message}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contato" className="contact section" ref={ref}>
            {/* Watermark */}
            <motion.img
                src="/logo.svg"
                alt=""
                className="contact__watermark"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.03 } : {}}
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
                        Fale <span className="highlight">Conosco</span>
                    </h2>
                    <p>
                        Entre em contato e transforme sua ideia em realidade visual
                    </p>
                </motion.div>

                <div className="contact__grid">
                    {/* Informações de Contato */}
                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3>Vamos conversar?</h3>
                        <p>
                            Estamos prontos para atender sua empresa. Entre em contato pelo
                            formulário ou diretamente pelos nossos canais.
                        </p>

                        <div className="contact__info-items">
                            <motion.div
                                className="contact__info-item"
                                whileHover={{ x: 5 }}
                            >
                                <div className="contact__info-icon">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <strong>Endereço</strong>
                                    <p>Aracaju, Sergipe</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact__info-item"
                                whileHover={{ x: 5 }}
                            >
                                <div className="contact__info-icon">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <strong>Telefone</strong>
                                    <a href="tel:+5579933037409">(79) 3303-7409</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact__info-item"
                                whileHover={{ x: 5 }}
                            >
                                <div className="contact__info-icon">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <strong>E-mail</strong>
                                    <a href="mailto:contato@neocv.com.br">contato@neocv.com.br</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact__info-item"
                                whileHover={{ x: 5 }}
                            >
                                <div className="contact__info-icon">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <strong>Horário</strong>
                                    <p>Seg - Sex: 8h às 18h</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="contact__social">
                            <a
                                href="https://wa.me/5579933037409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link whatsapp"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/neo_comunicacao"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/neocomunicacaovisual"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/neocomunicacaovisual"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Formulário */}
                    <motion.form
                        className="contact__form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label htmlFor="name">Nome completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor="phone">WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="service">Serviço de interesse</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione um serviço</option>
                                <option value="Fachadas em ACM">Fachadas em ACM</option>
                                <option value="Letras Caixa">Letras Caixa</option>
                                <option value="Envelopamento de Frotas">Envelopamento de Frotas</option>
                                <option value="Impressão Digital">Impressão Digital</option>
                                <option value="Sinalização">Sinalização</option>
                                <option value="Luminosos e LED Neon">Luminosos e LED Neon</option>
                                <option value="Brises">Brises</option>
                                <option value="Projetos Especiais">Projetos Especiais</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Descreva seu projeto ou necessidade..."
                                rows={4}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary contact__submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Send size={18} />
                            Enviar pelo WhatsApp
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
