import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import ScrollToTop from "@/components/ScrollToTop";

const Commande = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    adresse: "",
  });

  const product = products.find((p) => p.id === Number(id));

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
            Retour à l'accueil
          </Button>
        </motion.div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Rediriger vers la page de confirmation
    navigate("/confirmation");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3b2c27] mb-4">
              Finaliser votre commande
            </h1>
            <p className="text-xl text-[#3b2c27]/80">
              Complétez vos informations pour recevoir votre commande
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-serif font-bold text-[#3b2c27] mb-6">
                Résumé de votre commande
              </h2>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="font-serif font-semibold text-[#3b2c27] text-lg">
                    {product.name}
                  </h3>
                  <p className="text-[#b37651] font-bold text-xl">
                    {product.price} MAD
                  </p>
                </div>
              </div>

              <div className="border-t border-[#d4b29a]/30 pt-4">
                <div className="flex justify-between items-center text-lg font-semibold text-[#3b2c27]">
                  <span>Total</span>
                  <span className="text-[#b37651]">{product.price} MAD</span>
                </div>
              </div>
            </motion.div>

            {/* Order Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/90 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
                <h2 className="text-2xl font-serif font-bold text-[#3b2c27] mb-4">
                  Informations de livraison
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="nom" className="text-[#3b2c27] font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="mt-2 border-[#d4b29a]/30 focus:border-[#b37651] focus:ring-[#b37651]/20"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone" className="text-[#3b2c27] font-medium">
                      Numéro de téléphone *
                    </Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="mt-2 border-[#d4b29a]/30 focus:border-[#b37651] focus:ring-[#b37651]/20"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="adresse" className="text-[#3b2c27] font-medium">
                      Adresse complète *
                    </Label>
                    <Textarea
                      id="adresse"
                      name="adresse"
                      required
                      value={formData.adresse}
                      onChange={handleInputChange}
                      className="mt-2 border-[#d4b29a]/30 focus:border-[#b37651] focus:ring-[#b37651]/20 min-h-[100px]"
                      placeholder="Votre adresse complète avec ville et code postal"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#b37651] to-[#d4b29a] hover:from-[#d4b29a] hover:to-[#b37651] text-white font-semibold py-4 text-lg transition-all duration-300 hover:shadow-elegant"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Confirmer la commande
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export default Commande;
