import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#3b2c27] via-[#b37651] to-[#d4b29a] text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6"
        >
          Merci pour votre commande !
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed"
        >
          Votre commande Palmador Chocolatier a bien été enregistrée.
          <br />
          Nous vous contacterons bientôt pour confirmer les détails de livraison.
        </motion.p>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="h-5 w-5 text-white/80" />
            <span className="text-lg font-medium text-white/90">
              Temps de préparation estimé
            </span>
          </div>
          <p className="text-white/80">
            Nos artisans chocolatiers préparent votre commande avec soin.
            <br />
            Délai de préparation : 2-3 jours ouvrés
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/produits")}
              className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              Voir nos autres produits
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-white/70 text-sm"
        >
          <p>
            Questions ? Contactez-nous au{" "}
            <a href="tel:+212530562079" className="text-white hover:text-white/80 transition-colors">
              +212 530 56 20 79
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Confirmation;
