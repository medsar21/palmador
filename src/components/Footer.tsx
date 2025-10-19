import React from "react";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">PALMADOR</h3>
            <p className="text-white/80 mb-4">
              Chocolatier artisan de luxe
            </p>
            <p className="text-sm text-white/60">
              🍫 Chocolatier 🌴 Dattier<br />
              Créations exceptionnelles pour vos événements
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#accueil" className="hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="#produits" className="hover:text-accent transition-colors">Nos Produits</a></li>
              <li><a href="#evenements" className="hover:text-accent transition-colors">Événements</a></li>
              <li><a href="#apropos" className="hover:text-accent transition-colors">À Propos</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+212530562079" className="hover:text-accent transition-colors">
                  +212 530 56 20 79
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+212660436040" className="hover:text-accent transition-colors">
                  +212 660 43 60 40
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <a 
                  href="https://instagram.com/palmador_chocolatier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @palmador_chocolatier
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Palmador Chocolatier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
