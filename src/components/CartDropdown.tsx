import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { Product } from "@/contexts/AppContext";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDropdown = ({ isOpen, onClose }: CartDropdownProps) => {
  const { cart, removeFromCart, updateQuantity } = useApp();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />
          
          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-elegant border border-brand-200 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-brand-100">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-semibold text-brand-800 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Panier ({cart.length})
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 text-brand-600 hover:bg-brand-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="p-6 text-center text-brand-600">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-brand-300" />
                  <p>Votre panier est vide</p>
                </div>
              ) : (
                <div className="p-2">
                  {cart.map((item) => (
                    <Card key={item.id} className="mb-2 border-brand-100">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-brand-800 truncate">
                              {item.name}
                            </h4>
                            <p className="text-sm text-brand-600">{item.price}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-brand-600 hover:bg-brand-100"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-brand-600 hover:bg-brand-100"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:bg-red-50"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-4 border-t border-brand-100 bg-brand-50">
                <Button className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold">
                  Commander ({cart.reduce((total, item) => total + item.quantity, 0)})
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface FavoritesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const FavoritesDropdown = ({ isOpen, onClose, products }: FavoritesDropdownProps) => {
  const { favorites, toggleFavorite } = useApp();
  
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />
          
          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-elegant border border-brand-200 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-brand-100">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-semibold text-brand-800 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Favoris ({favoriteProducts.length})
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 text-brand-600 hover:bg-brand-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {favoriteProducts.length === 0 ? (
                <div className="p-6 text-center text-brand-600">
                  <Heart className="h-12 w-12 mx-auto mb-3 text-brand-300" />
                  <p>Aucun favori pour le moment</p>
                </div>
              ) : (
                <div className="p-2">
                  {favoriteProducts.map((product) => (
                    <Card key={product.id} className="mb-2 border-brand-100">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-brand-800 truncate">
                              {product.name}
                            </h4>
                            <p className="text-sm text-brand-600">{product.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:bg-red-50"
                            onClick={() => toggleFavorite(product.id)}
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { CartDropdown, FavoritesDropdown };
