import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className={`
        relative w-12 h-12 rounded-full border-2 
        bg-background/80 backdrop-blur-sm
        border-primary/20 hover:border-primary/40
        transition-all duration-300 hover:scale-110
        focus:ring-2 focus:ring-primary/20 focus:outline-none
        ${className}
      `}
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Soleil pour mode clair */}
        <Sun 
          className={`
            absolute w-5 h-5 text-nexus-gold
            transition-all duration-300 transform
            ${theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-50 opacity-0'
            }
          `} 
        />
        
        {/* Lune pour mode sombre */}
        <Moon 
          className={`
            absolute w-5 h-5 text-nexus-blue
            transition-all duration-300 transform
            ${theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-50 opacity-0'
            }
          `} 
        />
        
        {/* Indicateur lumineux */}
        <div 
          className={`
            absolute inset-0 rounded-full 
            transition-all duration-300
            ${theme === 'dark' 
              ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-lg shadow-blue-500/25' 
              : 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20 shadow-lg shadow-yellow-400/25'
            }
          `} 
        />
      </div>
      
      {/* Animation de pulsation */}
      <div 
        className={`
          absolute inset-0 rounded-full 
          transition-all duration-1000
          ${theme === 'dark'
            ? 'animate-pulse bg-blue-500/10' 
            : 'animate-pulse bg-yellow-400/10'
          }
        `} 
      />
    </Button>
  );
};

export default ThemeToggle;