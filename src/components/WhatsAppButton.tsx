import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/212660436040"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-4 right-4 z-50 bg-gradient-to-br from-[#b37651] via-[#d4b29a] to-[#b37651] p-4 rounded-full shadow-lg shadow-[#b37651]/40 hover:shadow-xl hover:shadow-[#b37651]/60 transition-all duration-500 group"
      title="Discuter sur WhatsApp"
    >
      <BsWhatsapp
        size={34}
        style={{
          color: "#f7f3ee",
          filter: "drop-shadow(0 0 6px rgba(179,118,81,0.8))",
        }}
        className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(179,118,81,1)]"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#3b2c27] text-[#f7f3ee] text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Discuter sur WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#3b2c27]"></div>
      </div>
      
      {/* Subtle pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b37651] via-[#d4b29a] to-[#b37651] opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.a>
  );
};

export default React.memo(WhatsAppButton);
