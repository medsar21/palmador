// src/pages/NosProduits.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CartItem = { id: string; qty: number };

export default function NosProduits() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  const toggleFav = (id: string) => {
    const next = new Set(favorites);
    next.has(id) ? next.delete(id) : next.add(id);
    setFavorites(next);
  };

  const addToCart = (id: string) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === id);
      if (ex) return prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id, qty: 1 }];
    });
  };

  // Filtrage et tri
  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  const selectedProduct = products.find(p => p.id === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee]">
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-6 md:py-10">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-brand">
              Nos Produits
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-brandDark/80 max-w-3xl mx-auto font-light">
              Découvrez notre collection complète de chocolats artisanaux, créés avec passion et savoir-faire
            </p>
          </motion.div>

          {/* Barre de filtres mobile-first */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8">
            {/* Recherche */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand/60 h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-brand/30 rounded-xl text-brandDark focus:outline-none focus:ring-2 focus:ring-brand/40 placeholder:text-brandDark/60 bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Catégorie */}
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:min-w-[160px] appearance-none bg-white/80 backdrop-blur-sm border border-brand/30 text-brandDark rounded-xl px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/40 hover:bg-white transition duration-200 cursor-pointer"
              >
                <option value="">Toutes les catégories</option>
                <option value="tablette">Tablettes</option>
                <option value="coffret">Coffrets</option>
                <option value="coupe">Coupes</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand/60 pointer-events-none h-4 w-4" />
            </div>

            {/* Tri par prix */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc' | '')}
                className="w-full sm:min-w-[140px] appearance-none bg-white/80 backdrop-blur-sm border border-brand/30 text-brandDark rounded-xl px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/40 hover:bg-white transition duration-200 cursor-pointer"
              >
                <option value="">Trier par prix</option>
                <option value="asc">Prix croissant</option>
                <option value="desc">Prix décroissant</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand/60 pointer-events-none h-4 w-4" />
            </div>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-brandDark/60 font-serif">
                Aucun produit trouvé avec ces critères
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSortOrder('');
                }}
                className="mt-4 bg-gradient-to-r from-brand to-brandLight text-white px-6 py-2 rounded-xl hover:scale-105 transition-transform"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredAndSortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-brandLight/30 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-brand/10 via-brandLight/30 to-brandDark/10 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Boutons d'action */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button
                        aria-label="Ajouter aux favoris"
                        onClick={() => toggleFav(product.id)}
                        className={`rounded-full p-2 transition-all hover:shadow-[0_0_12px_rgba(179,118,81,0.5)] ${
                          favorites.has(product.id) ? 'bg-brand text-white' : 'bg-white/90 text-brand border border-brand/30'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        aria-label="Ajouter au panier"
                        onClick={() => addToCart(product.id)}
                        className="rounded-full p-2 bg-brand text-white border border-brand/30 transition-all hover:shadow-[0_0_12px_rgba(179,118,81,0.5)]"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Badge catégorie */}
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-brand to-brandLight text-white font-semibold shadow-lg">
                      {product.category}
                    </Badge>
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-brandDark mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm sm:text-base font-bold text-brand">
                          {product.price} MAD
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-brandDark/70 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelected(product.id)}
                        className="text-xs sm:text-sm underline decoration-brand/40 underline-offset-4 hover:decoration-brand transition text-brand"
                      >
                        Voir détails
                      </button>
                      <Button
                        onClick={() => navigate(`/commande/${product.id}`)}
                        className="w-full bg-gradient-to-r from-brand to-brandLight text-white py-2 rounded-xl hover:scale-105 transition-transform font-medium text-sm"
                      >
                        Commander
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Modal détails */}
          <AnimatePresence>
            {selectedProduct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-3"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  onClick={e => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-xl"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-xl mb-4">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl mb-2 text-brandDark">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm sm:text-base text-brandDark/70 mb-4">
                    {selectedProduct.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <select className="w-full rounded-xl border border-brand/30 p-2 focus:outline-none focus:ring-2 focus:ring-brand/40 text-sm">
                      <option>Format: S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                    <select className="w-full rounded-xl border border-brand/30 p-2 focus:outline-none focus:ring-2 focus:ring-brand/40 text-sm">
                      <option>Saveur: Noir</option>
                      <option>Lait</option>
                      <option>Blanc</option>
                    </select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl border border-brand/30 px-4 py-2 hover:shadow-[0_0_12px_rgba(179,118,81,0.4)] transition"
                    >
                      Personnaliser
                    </Button>
                    <Button
                      className="flex-1 rounded-xl bg-brand text-white px-4 py-2 hover:shadow-[0_0_18px_rgba(179,118,81,0.6)] transition"
                      onClick={() => navigate(`/commande/${selectedProduct.id}`)}
                    >
                      Commander
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}