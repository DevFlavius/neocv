import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Logo e Descrição */}
                    <div className="footer__brand">
                        <a href="#inicio" className="footer__logo">
                            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Neo Comunicação Visual" />
                        </a>
                        <p>
                            Transformando ideias em soluções visuais impactantes desde 2008.
                            Comunicação visual de alta performance para empresas que querem se destacar.
                        </p>
                        <div className="footer__social">
                            <a
                                href="https://www.instagram.com/neo_comunicacao"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/neocomunicacaovisual"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/neocomunicacaovisual"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div className="footer__links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#sobre">Sobre Nós</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>

                    {/* Serviços */}
                    <div className="footer__links">
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href="#servicos">Fachadas em ACM</a></li>
                            <li><a href="#servicos">Letras Caixa</a></li>
                            <li><a href="#servicos">Envelopamento de Frotas</a></li>
                            <li><a href="#servicos">Impressão Digital</a></li>
                            <li><a href="#servicos">LED Neon</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="footer__contact">
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <MapPin size={16} />
                                <span>Aracaju, Sergipe</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+5579933037409">(79) 3303-7409</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:contato@neocv.com.br">contato@neocv.com.br</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {currentYear} Neo Comunicação Visual. Todos os direitos reservados.
                    </p>
                    <p className="footer__made-with">
                        Feito com <Heart size={14} className="footer__heart" /> em Aracaju
                    </p>
                </div>
            </div>
        </footer>
    );
}
