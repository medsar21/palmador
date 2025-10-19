import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import product images for carousel
import produit1 from "@/assets/produit 1.png";
import produit2 from "@/assets/produit 2.png";
import produit3 from "@/assets/produit 3.png";
import produit4 from "@/assets/produit 4.png";
import produit5 from "@/assets/produit 5.png";
import produit6 from "@/assets/produit 6.png";

const heroImages = [
  produit1,
  produit2,
  produit3,
  produit4,
  produit5,
  produit6,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt={`Palmador Chocolatier - Produit ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Ken Burns effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
            <img
              src={heroImages[currentImageIndex]}
              alt={`Palmador Chocolatier - Produit ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#3b2c27]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl transition-colors duration-1000"
            style={{
              color: currentImageIndex === 0 ? '#f7f3ee' : '#3b2c27',
              textShadow: currentImageIndex === 0 
                ? '4px 4px 8px rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3), 12px 12px 24px rgba(0,0,0,0.2)'
                : '4px 4px 8px rgba(0,0,0,0.3), 8px 8px 16px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.1)',
              filter: currentImageIndex === 0 
                ? 'drop-shadow(0 0 20px rgba(247, 243, 238, 0.3))'
                : 'drop-shadow(0 0 20px rgba(179, 118, 81, 0.3))'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Palmador Chocolatier
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 font-light font-serif italic drop-shadow-xl transition-colors duration-1000"
            style={{
              color: currentImageIndex === 0 ? '#f7f3ee' : '#b37651',
              textShadow: currentImageIndex === 0 
                ? '2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)'
                : '2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)',
              filter: currentImageIndex === 0 
                ? 'drop-shadow(0 0 10px rgba(247, 243, 238, 0.4))'
                : 'drop-shadow(0 0 10px rgba(179, 118, 81, 0.4))'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            L'Art du Chocolat Raffiné
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light drop-shadow-lg transition-colors duration-1000"
            style={{
              color: currentImageIndex === 0 ? '#f7f3ee' : '#3b2c27',
              textShadow: currentImageIndex === 0 
                ? '1px 1px 2px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.2)'
                : '1px 1px 2px rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Créations artisanales pour vos moments exceptionnels
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#b37651] to-[#d4b29a] hover:from-[#d4b29a] hover:to-[#b37651] text-white font-semibold px-8 py-4 text-lg shadow-elegant transition-all duration-500 hover:shadow-2xl hover:glow"
                onClick={() => navigate('/produits')}
              >
                Découvrir nos créations
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#b37651] text-[#b37651] hover:bg-[#b37651] hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-500 hover:shadow-elegant backdrop-blur-sm"
                onClick={() => navigate('/contact')}
              >
                Contactez-nous
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#produits"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-[#f7f3ee] drop-shadow-lg" />
        </motion.div>
      </motion.a>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#b37651] scale-125' 
                : 'bg-[#f7f3ee]/50 hover:bg-[#f7f3ee]/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
