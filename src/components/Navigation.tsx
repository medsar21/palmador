import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { CartDropdown, FavoritesDropdown } from "@/components/CartDropdown";
import logoImage from "@/assets/logo-palma.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [favoritesDropdownOpen, setFavoritesDropdownOpen] = useState(false);
  const location = useLocation();
  const { cartCount, favoritesCount } = useApp();

  // Mock products for favorites dropdown
  const mockProducts = [
    { id: 1, name: "Coffret Luxe", price: "450 MAD", image: "/src/assets/coffret-large.jpg", category: "coffrets", description: "Coffret de chocolats fins" },
    { id: 2, name: "Coupe Audace Gold", price: "320 MAD", image: "/src/assets/coupe-audace-gold.jpg", category: "coupes", description: "Coupe dorée avec chocolats audacieux" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Pour la page d'accueil seulement
      if (location.pathname === "/") {
        setIsScrolled(currentScrollY > 50);
        
        // Logique de disparition/apparition seulement sur la page d'accueil
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scroll vers le bas - cacher la navbar
          setIsVisible(false);
        } else {
          // Scroll vers le haut - montrer la navbar
          setIsVisible(true);
        }
      } else {
        // Pour les autres pages, garder le comportement normal - navbar toujours visible
        setIsScrolled(currentScrollY > 50);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Produits", href: "/produits" },
    { name: "À Propos", href: "/apropos" },
    { name: "Catalogue", href: "/Catalogue 2025- Palmador Chocolatier final.pdf", external: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      location.pathname === "/" 
        ? (isScrolled 
            ? "bg-[#b37651] bg-opacity-95 shadow-lg backdrop-blur-sm" 
            : "bg-transparent")
        : "bg-gradient-to-r from-[#3b2c27]/95 via-[#b37651]/90 to-[#3b2c27]/95 backdrop-blur-md shadow-elegant border-b border-brand-200/30"
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-all duration-300 hover:scale-105 hover:brightness-110">
            <img src={logoImage} alt="Palmador" className="h-16 filter brightness-0 invert" loading="eager" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
              <a
                key={link.name}
                href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === "/"
                      ? "text-[#f7f3ee] hover:text-[#b37651]"
                      : "text-white hover:text-[#b37651]"
                  }`}
              >
                {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b37651] to-[#d4b29a] transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.href 
                      ? (location.pathname === "/" ? "text-[#b37651]" : "text-white")
                      : (location.pathname === "/" 
                          ? "text-[#f7f3ee] hover:text-[#b37651]"
                          : "text-white hover:text-[#b37651]")
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#b37651] to-[#d4b29a] transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            ))}
          </div>

          {/* Contact Info & Cart/Favorites & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart and Favorites */}
            <div className="hidden md:flex items-center space-x-2 relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-white/10 transition-all duration-300 hover:scale-110"
                onClick={() => {
                  setFavoritesDropdownOpen(!favoritesDropdownOpen);
                  setCartDropdownOpen(false);
                }}
              >
                <Heart className={`h-5 w-5 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`} />
                {favoritesCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white animate-pulse">
                    {favoritesCount}
                  </Badge>
                )}
              </Button>
              <FavoritesDropdown 
                isOpen={favoritesDropdownOpen} 
                onClose={() => setFavoritesDropdownOpen(false)}
                products={mockProducts}
              />
              
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-white/10 transition-all duration-300 hover:scale-110"
                onClick={() => {
                  setCartDropdownOpen(!cartDropdownOpen);
                  setFavoritesDropdownOpen(false);
                }}
              >
                <ShoppingCart className={`h-5 w-5 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white animate-pulse">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <CartDropdown 
                isOpen={cartDropdownOpen} 
                onClose={() => setCartDropdownOpen(false)}
              />
            </div>

            <div className={`hidden lg:flex items-center space-x-4 text-sm ${location.pathname === "/" ? "text-[#f7f3ee]/80" : "text-white/80"}`}>
              <a href="tel:+212530562079" className="flex items-center space-x-2 hover:text-[#b37651] transition-colors">
                <Phone className="h-4 w-4" />
                <span>+212 530 56 20 79</span>
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden hover:bg-white/10 transition-all duration-300 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#b37651]/30 bg-gradient-to-b from-[#3b2c27]/90 to-[#b37651]/80 backdrop-blur-sm">
            {/* Mobile Cart and Favorites */}
            <div className="flex items-center justify-center space-x-4 mb-4 px-4">
              <Button
                variant="ghost"
                size="icon"
                className={`relative hover:bg-white/10 transition-all duration-300 hover:scale-110 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`}
                onClick={() => {
                  setFavoritesDropdownOpen(!favoritesDropdownOpen);
                  setCartDropdownOpen(false);
                }}
              >
                <Heart className="h-6 w-6" />
                {favoritesCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white animate-pulse">
                    {favoritesCount}
                  </Badge>
                )}
              </Button>
              <FavoritesDropdown
                isOpen={favoritesDropdownOpen}
                onClose={() => setFavoritesDropdownOpen(false)}
                products={mockProducts}
              />

              <Button
                variant="ghost"
                size="icon"
                className={`relative hover:bg-white/10 transition-all duration-300 hover:scale-110 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`}
                onClick={() => {
                  setCartDropdownOpen(!cartDropdownOpen);
                  setFavoritesDropdownOpen(false);
                }}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white animate-pulse">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <CartDropdown
                isOpen={cartDropdownOpen}
                onClose={() => setCartDropdownOpen(false)}
              />
            </div>
            {navLinks.map((link) => (
              link.external ? (
              <a
                key={link.name}
                href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-3 text-sm font-medium hover:text-[#b37651] hover:bg-white/10 px-4 rounded transition-all duration-300 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-3 text-sm font-medium hover:text-[#b37651] hover:bg-white/10 px-4 rounded transition-all duration-300 ${location.pathname === "/" ? "text-[#f7f3ee]" : "text-white"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="mt-4 pt-4 border-t border-[#b37651]/30 px-4 space-y-3">
              <a href="tel:+212530562079" className={`flex items-center space-x-2 text-sm ${location.pathname === "/" ? "text-[#f7f3ee]/80" : "text-white/80"}`}>
                <Phone className="h-4 w-4" />
                <span>+212 530 56 20 79</span>
              </a>
              <a href="tel:+212660436040" className={`flex items-center space-x-2 text-sm ${location.pathname === "/" ? "text-[#f7f3ee]/80" : "text-white/80"}`}>
                <Phone className="h-4 w-4" />
                <span>+212 660 43 60 40</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navigation);
