import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { products, Product } from "@/data/products";
import { useApp } from "@/contexts/AppContext";
import ScrollToTop from "@/components/ScrollToTop";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, addToCart, toggleFavorite } = useApp();
  const [showOptions, setShowOptions] = useState(false);
  
  const product = products.find((p) => p.id === Number(id)) as Product;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-serif font-bold text-[#3b2c27] mb-4">
            Produit non trouvé
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#b37651] to-[#d4b29a] hover:from-[#d4b29a] hover:to-[#b37651] text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
        </motion.div>
      </div>
    );
  }

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee]">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-[#3b2c27] hover:text-[#b37651] hover:bg-white/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </motion.div>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Action Buttons Overlay */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button
                  size="icon"
                  variant="secondary"
                  className={`h-12 w-12 rounded-full transition-all duration-300 ${
                    isFavorite
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-white/90 hover:bg-white text-gray-600"
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
                </Button>

                <Button
                  size="icon"
                  variant="secondary"
                  className="h-12 w-12 rounded-full bg-white/90 hover:bg-white text-gray-600 transition-all duration-300"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg space-y-6"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#3b2c27] mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white text-sm font-semibold rounded-full">
                  {product.category}
                </span>
                <span className="text-3xl font-bold text-[#b37651]">
                  {product.price} MAD
                </span>
              </div>
            </div>

            <p className="text-lg text-[#3b2c27]/80 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-[#b37651] to-[#d4b29a] hover:from-[#d4b29a] hover:to-[#b37651] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-elegant"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  Personnaliser
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-[#3b2c27] text-[#3b2c27] hover:bg-[#3b2c27] hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    navigate(`/commande/${product.id}`);
                  }}
                >
                  Commander
                </Button>
              </div>

              {/* Options de personnalisation */}
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 rounded-lg p-4 mt-4 shadow-md text-[#3b2c27] space-y-3"
                >
                  <h3 className="font-semibold text-[#b37651] text-lg">Personnalisation</h3>
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Taille :</label>
                      <select className="w-full border border-[#d4b29a]/30 rounded-md p-2 focus:border-[#b37651] focus:ring-[#b37651]/20">
                        <option>Petite</option>
                        <option>Moyenne</option>
                        <option>Grande</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Parfum :</label>
                      <select className="w-full border border-[#d4b29a]/30 rounded-md p-2 focus:border-[#b37651] focus:ring-[#b37651]/20">
                        <option>Lait</option>
                        <option>Noir</option>
                        <option>Praliné</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Forme :</label>
                      <select className="w-full border border-[#d4b29a]/30 rounded-md p-2 focus:border-[#b37651] focus:ring-[#b37651]/20">
                        <option>Carrée</option>
                        <option>Cœur</option>
                        <option>Ovale</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Bouton Ajouter au Panier */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-br from-[#b37651] to-[#d4b29a] text-white py-3 rounded-lg mt-6 hover:scale-105 transition-transform font-medium text-lg"
              >
                Ajouter au Panier 🛒
              </button>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  className={`flex-1 transition-all duration-300 ${
                    isFavorite
                      ? "text-red-500 hover:text-red-600"
                      : "text-[#3b2c27] hover:text-red-500"
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Retiré des favoris" : "Ajouter aux favoris"}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
