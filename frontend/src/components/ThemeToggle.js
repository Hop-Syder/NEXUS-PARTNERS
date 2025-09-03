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
        transition-all duration-200 hover:scale-105
        focus:ring-2 focus:ring-primary/20 focus:outline-none
        ${theme === 'dark' 
          ? 'border-gray-600 hover:border-yellow-400 bg-gray-800 hover:bg-gray-700' 
          : 'border-gray-300 hover:border-yellow-500 bg-white hover:bg-gray-50'
        }
        ${className}
      `}
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Soleil pour mode clair */}
        <Sun 
          className={`
            absolute w-5 h-5 text-yellow-500
            transition-all duration-200 transform
            ${theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-45 scale-75 opacity-0'
            }
          `} 
        />
        
        {/* Lune pour mode sombre */}
        <Moon 
          className={`
            absolute w-5 h-5 text-yellow-400
            transition-all duration-200 transform
            ${theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-45 scale-75 opacity-0'
            }
          `} 
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;