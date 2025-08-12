import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'py-6'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg p-1"
            aria-label="Nexus Partners - Retour à l'accueil"
          >
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center 
              font-bold text-white text-xl transform 
              group-hover:scale-105 group-focus:scale-105 
              transition-transform duration-200
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-500 to-yellow-400' 
                : 'bg-gradient-to-r from-nexus-blue to-nexus-gold'
              }
            `}>
              N
            </div>
            <span className={`
              text-2xl font-bold transition-colors duration-300
              ${theme === 'dark' 
                ? 'text-blue-400 group-hover:text-yellow-400' 
                : 'text-nexus-blue group-hover:text-nexus-gold'
              }
            `}>
              Nexus Partners
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  nav-link relative px-4 py-2 text-sm font-medium 
                  transition-all duration-300 rounded-lg
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary
                  ${location.pathname === item.href
                    ? theme === 'dark' 
                      ? 'text-yellow-400' 
                      : 'text-nexus-gold'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-nexus-blue'
                  }
                `}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
            
            <Button 
              className="neon-button ml-4"
              aria-label="Demander un devis gratuit"
            >
              Demander un devis
            </Button>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                p-2 rounded-lg transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary
                ${theme === 'dark'
                  ? 'hover:bg-gray-800 text-gray-300'
                  : 'hover:bg-gray-100 text-gray-700'
                }
              `}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 py-4 glass-effect rounded-lg"
            role="navigation"
            aria-label="Navigation mobile"
          >
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 text-sm font-medium transition-colors duration-300 rounded-lg mx-2
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary
                    ${location.pathname === item.href
                      ? theme === 'dark'
                        ? 'text-yellow-400 bg-blue-500/10'
                        : 'text-nexus-gold bg-nexus-blue/10'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-nexus-blue hover:bg-gray-50'
                    }
                  `}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Button 
                  className="w-full neon-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Demander un devis gratuit"
                >
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;