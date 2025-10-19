import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApp, Product } from "@/contexts/AppContext";
import { useNavigate } from "react-router-dom";

// Import product images
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import image6 from "@/assets/6.png";
import image7 from "@/assets/7.png";
import image8 from "@/assets/8.png";
import image9 from "@/assets/9.png";
import image10 from "@/assets/10.png";
import image11 from "@/assets/11.png";
import image12 from "@/assets/12.png";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Coffret Prestige",
    image: image1,
    category: "coffrets",
    price: "450 MAD",
    description: "Collection exclusive de chocolats fins artisanaux",
  },
  {
    id: 2,
    name: "Coupe Audace Gold",
    image: image2,
    category: "coupes",
    price: "320 MAD",
    description: "Création premium avec finition dorée",
  },
  {
    id: 3,
    name: "Coffret Medium",
    image: image3,
    category: "coffrets",
    price: "280 MAD",
    description: "Assortiment raffiné pour toutes occasions",
  },
  {
    id: 4,
    name: "Coupe Empreinte",
    image: image4,
    category: "coupes",
    price: "380 MAD",
    description: "Design unique en cuivre artisanal",
  },
  {
    id: 5,
    name: "Coffret Small",
    image: image5,
    category: "coffrets",
    price: "150 MAD",
    description: "Parfait pour une attention délicate",
  },
  {
    id: 6,
    name: "Barre Caramel",
    image: image6,
    category: "bars",
    price: "45 MAD",
    description: "Barre de chocolat au caramel onctueux",
  },
  {
    id: 7,
    name: "Barre Citron",
    image: image7,
    category: "bars",
    price: "45 MAD",
    description: "Barre de chocolat au citron frais",
  },
  {
    id: 8,
    name: "Barre Pistache",
    image: image8,
    category: "bars",
    price: "50 MAD",
    description: "Barre de chocolat à la pistache croquante",
  },
];

const FeaturedProducts = () => {
  const { favorites, addToCart, toggleFavorite } = useApp();
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/produit/${productId}`);
  };

  return (
    <section id="produits" className="py-20 bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#3b2c27] mb-6">
            Nos Créations Vedettes
          </h2>
          <p className="text-xl text-[#3b2c27]/80 max-w-3xl mx-auto font-light">
            Découvrez notre sélection de chocolats d'exception, créés avec passion et savoir-faire artisanal
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm rounded-2xl">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b2c27]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className={`h-10 w-10 rounded-full transition-all duration-300 ${
                        favorites.includes(product.id) 
                          ? "bg-red-500 hover:bg-red-600 text-white" 
                          : "bg-white/90 hover:bg-white text-gray-600"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                    </Button>
                    
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-600 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white font-semibold shadow-lg">
                    {product.category}
                  </Badge>
                  
                  {/* Product Info Overlay */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-white/90 mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#b37651]">{product.price}</span>
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product.id);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Voir
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif font-semibold text-[#3b2c27] text-xl">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-[#b37651]">{product.price}</span>
                  </div>
                  <p className="text-[#3b2c27]/70 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#b37651] to-[#d4b29a] hover:from-[#d4b29a] hover:to-[#b37651] text-white font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() => handleProductClick(product.id)}
                  >
                    Commander
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
