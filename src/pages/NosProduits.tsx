import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import ScrollToTop from "@/components/ScrollToTop";

const NosProduits = () => {
  const { addToCart } = useApp();
  const navigate = useNavigate();
  
  // États pour les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const handleCommander = (product: any) => {
    navigate(`/commande/${product.id}`);
  };

  const handleVoir = (productId: number) => {
    navigate(`/produit/${productId}`);
  };

  // Logique de filtrage et tri
  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return Number(a.price) - Number(b.price);
      if (sortOrder === 'desc') return Number(b.price) - Number(a.price);
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOrder]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortOrder('');
    setCurrentPage(1);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#f7f3ee] via-[#d4b29a]/20 to-[#f7f3ee]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#3b2c27] mb-6">
                Nos Produits
              </h1>
              <p className="text-xl text-[#3b2c27]/80 max-w-3xl mx-auto font-light">
                Découvrez notre collection complète de chocolats artisanaux, créés avec passion et savoir-faire
              </p>
            </motion.div>

            {/* Barre de filtres améliorée */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {/* Recherche */}
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-[#b37651] rounded-lg px-4 py-2 w-full sm:w-64 text-[#3b2c27] focus:outline-none focus:ring-2 focus:ring-[#b37651] placeholder:text-[#3b2c27]/60 bg-white"
              />

               {/* Catégorie */}
               <div className="relative inline-block">
                 <select
                   value={selectedCategory}
                   onChange={(e) => setSelectedCategory(e.target.value)}
                   className="appearance-none bg-[#fffaf6] border border-[#b37651] text-[#3b2c27] rounded-xl px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b37651] hover:bg-[#f7ede5] transition duration-200 cursor-pointer min-w-[160px]"
                 >
                   <option value="">Toutes les catégories</option>
                   <option value="tablettes">Tablettes</option>
                   <option value="coffrets">Coffrets</option>
                   <option value="coupes">Coupes</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#b37651] pointer-events-none" size={16} />
               </div>

               {/* Tri par prix */}
               <div className="relative inline-block">
                 <select
                   value={sortOrder}
                   onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc' | '')}
                   className="appearance-none bg-[#fffaf6] border border-[#b37651] text-[#3b2c27] rounded-xl px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b37651] hover:bg-[#f7ede5] transition duration-200 cursor-pointer min-w-[140px]"
                 >
                   <option value="">Trier par prix</option>
                   <option value="asc">Prix croissant</option>
                   <option value="desc">Prix décroissant</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#b37651] pointer-events-none" size={16} />
               </div>
            </div>

            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#3b2c27]/60 font-serif">
                  Aucun produit trouvé avec ces critères
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {currentProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center"
                  >
                  <Card 
                    className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-[300px] h-[420px] flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 border-none cursor-pointer"
                    onClick={() => handleVoir(product.id)}
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-48 object-cover rounded-t-2xl"
                      />
                      
                      {/* Bouton panier */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="absolute top-3 right-3 bg-white/90 text-[#b37651] p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                      >
                        🛒
                      </button>

                      {/* Badge catégorie */}
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-[#b37651] to-[#d4b29a] text-white font-semibold shadow-lg">
                        {product.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-serif font-semibold text-[#3b2c27] text-xl mb-2">
                          {product.name}
                        </h3>
                        <p className="text-lg font-bold text-[#b37651] mb-3">
                          {product.price} MAD
                        </p>
                        <p className="text-[#3b2c27]/70 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Boutons Commander et Voir */}
                      <div className="flex justify-between gap-3 mt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCommander(product);
                          }}
                          className="flex-1 bg-gradient-to-br from-[#b37651] to-[#d4b29a] text-white py-2 rounded-lg hover:scale-105 transition-transform font-medium"
                        >
                          Commander
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVoir(product.id);
                          }}
                          className="flex-1 border border-[#b37651] text-[#b37651] py-2 rounded-lg hover:bg-[#b37651]/10 transition-colors font-medium"
                        >
                          Voir
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="border-[#b37651] text-[#b37651] hover:bg-[#b37651] hover:text-white disabled:opacity-50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "bg-[#b37651] text-white hover:bg-[#b37651]/90"
                            : "border-[#b37651] text-[#b37651] hover:bg-[#b37651] hover:text-white"
                        }
                      >
                        {page}
                      </Button>
                    ))}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="border-[#b37651] text-[#b37651] hover:bg-[#b37651] hover:text-white disabled:opacity-50"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {/* Informations de pagination */}
                <div className="text-center mt-4 text-[#3b2c27]/60 text-sm">
                  Affichage de {startIndex + 1} à {Math.min(endIndex, filteredAndSortedProducts.length)} sur {filteredAndSortedProducts.length} produits
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <ScrollToTop />
    </motion.div>
  );
};

export default NosProduits;