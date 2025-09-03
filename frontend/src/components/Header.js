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
          {/* Logo - NOUVELLE PALETTE JAUNE/NOIR */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="Nexus Partners - Retour à l'accueil"
          >
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center 
              font-bold text-xl transform 
              group-hover:scale-105 group-focus:scale-105 
              transition-transform duration-200
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-black' 
                : 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black'
              }
            `}>
              N
            </div>
            <span className={`
              text-2xl font-bold transition-colors duration-300
              ${theme === 'dark' 
                ? 'text-white group-hover:text-yellow-300' 
                : 'text-black group-hover:text-yellow-600'
              }
            `}>
              Nexus Partners
            </span>
          </Link>

          {/* Desktop Navigation - TEXTES NOIR/BLANC */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  nav-link relative px-4 py-2 text-sm font-medium 
                  transition-all duration-300 rounded-lg
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${location.pathname === item.href
                    ? 'text-yellow-500 font-semibold'
                    : theme === 'dark'
                      ? 'text-white hover:text-yellow-300'
                      : 'text-black hover:text-yellow-600'
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
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                ${theme === 'dark'
                  ? 'hover:bg-gray-800 text-white'
                  : 'hover:bg-gray-100 text-black'
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
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    ${location.pathname === item.href
                      ? 'text-yellow-500 bg-yellow-100 font-semibold'
                      : theme === 'dark'
                        ? 'text-white hover:text-yellow-300 hover:bg-gray-800'
                        : 'text-black hover:text-yellow-600 hover:bg-gray-50'
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