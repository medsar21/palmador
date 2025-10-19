import React, { useState, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import PageTransition from "@/components/PageTransition";
import { AppProvider } from "@/contexts/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTop from "@/components/ScrollTop";

// Lazy load all pages for better performance
const Accueil = React.lazy(() => import("@/pages/Accueil"));
const NosProduits = React.lazy(() => import("@/pages/NosProduits"));
const APropos = React.lazy(() => import("@/pages/APropos"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const ProductDetails = React.lazy(() => import("@/pages/ProductDetails"));
const Commande = React.lazy(() => import("@/pages/Commande"));
const Confirmation = React.lazy(() => import("@/pages/Confirmation"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}>
              <Navbar />
              <AnimatePresence mode="wait">
                <PageTransition key="pages">
                    <Suspense fallback={
                      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3b2c27] via-[#b37651] to-[#d4b29a]">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                          <p className="text-white text-lg font-serif">Palmador se charge...</p>
                        </div>
                      </div>
                    }>
                      <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/produits" element={<NosProduits />} />
                        <Route path="/apropos" element={<APropos />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/produit/:id" element={<ProductDetails />} />
                        <Route path="/commande/:id" element={<Commande />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                    <WhatsAppButton />
                </PageTransition>
              </AnimatePresence>
              <ScrollTop />
              <Footer />
            </div>
            
            {isLoading && (
              <Loading key="loading" onComplete={handleLoadingComplete} />
            )}
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
