import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoImage from "@/assets/logo-palma.svg";

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Timer de sécurité pour éviter que le loader reste bloqué
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 2000); // Maximum 2 secondes

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          clearTimeout(safetyTimer);
          setTimeout(onComplete, 300); // Réduction du délai
          return 100;
        }
        return prev + 3; // Augmentation de la vitesse
      });
    }, 30); // Réduction de l'intervalle

    return () => {
      clearInterval(progressTimer);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-gradient-chocolate flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={logoImage} 
            alt="Palmador" 
            className="h-24 md:h-32 mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 2 }}
          className="w-64 h-1 bg-white/30 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white/70 mt-4 text-sm"
        >
          Chargement...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
