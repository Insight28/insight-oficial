
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tight neon-text-red animate-pulse-neon-red">
            INSIGHT GROUP
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem href="#" label="Home" active />
            
            <NavItem href="#services" label="Serviços" hasSubmenu>
              <div className="submenu">
                <a href="#ai-service" className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Atendimento com I.A.
                </a>
                <a href="#ai-website" className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Criação de site com I.A.
                </a>
              </div>
            </NavItem>
            
            <NavItem href="#testimonials" label="Depoimentos" hasSubmenu>
              <div className="submenu">
                <a href="#recent" className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Mais recentes
                </a>
                <a href="#top-rated" className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Mais avaliados
                </a>
                <a href="#favorites" className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Favoritos
                </a>
              </div>
            </NavItem>
            
            <NavItem href="#community" label="Comunidade" hasSubmenu>
              <div className="submenu">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  LinkedIn
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                   className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  YouTube
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  GitHub
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="block px-4 py-2 hover:bg-secondary/50 rounded transition">
                  Instagram
                </a>
              </div>
            </NavItem>
            
            <NavItem href="#contact" label="Contato" />
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 py-3" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-2">
            <a href="#" className="px-4 py-2 rounded bg-secondary">Home</a>
            <a href="#services" className="px-4 py-2 rounded hover:bg-secondary/50">Serviços</a>
            <a href="#testimonials" className="px-4 py-2 rounded hover:bg-secondary/50">Depoimentos</a>
            <a href="#community" className="px-4 py-2 rounded hover:bg-secondary/50">Comunidade</a>
            <a href="#contact" className="px-4 py-2 rounded hover:bg-secondary/50">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
}

const NavItem = ({ href, label, active = false, hasSubmenu = false, children }: NavItemProps) => {
  return (
    <div className={cn("relative group", hasSubmenu && "cursor-pointer")}>
      <a 
        href={href} 
        className={cn("nav-link", active && "active")}
      >
        {label}
      </a>
      {hasSubmenu && children}
    </div>
  );
};

export default Header;
