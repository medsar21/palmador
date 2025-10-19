// src/components/Navbar.tsx
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Nos Produits' },
  { to: '/apropos', label: 'À propos' },
  { to: '/catalogue', label: 'Catalogue', external: true },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount, favoritesCount } = useApp();

  const LinkCmp = ({ to, label, external }: any) => {
    if (external) {
      return (
        <a
          href="https://drive.google.com/file/d/1p3f0E1imdBeOcS-DdcKqDrcNCQjilqkf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="relative px-2 py-1 text-sm font-medium transition-all duration-300 hover:text-brand group"
        >
          <span className="hover:underline underline-offset-8 decoration-brand/50">{label}</span>
        </a>
      );
    }
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-2 py-1 text-sm font-medium transition-all duration-300 group ${
            isActive ? 'text-brand' : 'hover:text-brand'
          }`
        }
        onClick={() => setOpen(false)}
      >
        <span className="after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full">
          {label}
        </span>
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-brandLight/30">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <img src="/PALMA.svg" alt="Palmador" className="h-8 w-8"/>
          <span className="font-serif text-lg text-brandDark">Palmador</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {links.map(l => (
            <LinkCmp key={l.label} {...l} />
          ))}
          <div className="ml-2 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-brand/10 transition-all duration-300 hover:scale-110"
            >
              <Heart className="h-5 w-5 text-brand" />
              {favoritesCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white animate-pulse">
                  {favoritesCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-brand/10 transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="h-5 w-5 text-brand" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-brand text-white animate-pulse">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-brandDark/80">
            <a href="tel:+212530562079" className="flex items-center space-x-2 hover:text-brand transition-colors">
              <Phone className="h-4 w-4" />
              <span>+212 530 56 20 79</span>
            </a>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-brand/10 transition-all duration-300 text-brand"
            onClick={() => setOpen(v => !v)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-brandLight/30 bg-white/90 backdrop-blur"
          >
            <div className="px-3 py-2 flex flex-col">
              {links.map(l => <LinkCmp key={l.label} {...l} />)}
              <div className="mt-2 flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-brand/10 transition-all duration-300"
                >
                  <Heart className="h-6 w-6 text-brand" />
                  {favoritesCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white animate-pulse">
                      {favoritesCount}
                    </Badge>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-brand/10 transition-all duration-300"
                >
                  <ShoppingCart className="h-6 w-6 text-brand" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-brand text-white animate-pulse">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </div>
              <div className="mt-4 pt-4 border-t border-brandLight/30 space-y-3">
                <a href="tel:+212530562079" className="flex items-center space-x-2 text-sm text-brandDark/80 hover:text-brand transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+212 530 56 20 79</span>
                </a>
                <a href="tel:+212660436040" className="flex items-center space-x-2 text-sm text-brandDark/80 hover:text-brand transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+212 660 43 60 40</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
