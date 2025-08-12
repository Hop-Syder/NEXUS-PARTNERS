import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Recrutement & Talents', href: '/services' },
    { name: 'Développement Web', href: '/services' },
    { name: 'Installation Électrique', href: '/services' },
    { name: 'Intelligence Artificielle', href: '/services' },
  ];

  const quickLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Conditions générales', href: '#' },
    { name: 'Cookies', href: '#' },
  ];

  return (
    <footer className="bg-nexus-black text-white relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full neon-button z-10 hover-lift"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="pt-16 pb-8 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nexus-blue to-nexus-gold rounded-lg flex items-center justify-center font-bold text-white text-xl">
                N
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Nexus Partners</h3>
                <p className="text-nexus-gold text-sm">Excellence & Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour transformer vos défis en opportunités. 
              Connecter les talents, propulser les idées.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
                { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
                { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-nexus-gold hover:bg-nexus-blue transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-nexus-gold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-nexus-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-nexus-gold transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-nexus-gold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-nexus-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-nexus-gold transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-nexus-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-nexus-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>123 Avenue des Champs-Élysées</p>
                  <p>75008 Paris, France</p>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nexus-gold flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-nexus-gold transition-colors text-sm">
                  +33 1 23 45 67 89
                </a>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nexus-gold flex-shrink-0" />
                <a href="mailto:contact@nexuspartners.fr" className="text-gray-300 hover:text-nexus-gold transition-colors text-sm">
                  contact@nexuspartners.fr
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link to="/contact">
                <Button className="neon-button w-full">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-nexus-gold mb-4">
              Restez Informé de Nos Actualités
            </h4>
            <p className="text-gray-300 mb-6">
              Recevez nos dernières actualités, conseils et offres exclusives
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-nexus-gold focus:outline-none"
              />
              <Button className="neon-button px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Nexus Partners. Tous droits réservés.</span>
              <span>•</span>
              <span className="flex items-center">
                Fait avec <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> à Paris
              </span>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-nexus-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Certifié ISO 9001",
              "RGPD Conforme", 
              "Garantie 2 ans",
              "Support 24/7"
            ].map((badge, index) => (
              <div key={index} className="text-xs text-gray-500 flex items-center">
                <div className="w-2 h-2 bg-nexus-gold rounded-full mr-2"></div>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nexus-blue via-nexus-gold to-nexus-blue"></div>
    </footer>
  );
};

export default Footer;