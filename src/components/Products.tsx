import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Collection Classique",
    description: "Assortiment de chocolats fins aux saveurs traditionnelles",
    price: "À partir de 250 Dhs",
    image: product1,
  },
  {
    id: 2,
    name: "Coffrets Événements",
    description: "Créations personnalisées pour mariages et occasions spéciales",
    price: "Sur mesure",
    image: product2,
  },
  {
    id: 3,
    name: "Truffes Premium",
    description: "Truffes artisanales avec garniture d'or comestible",
    price: "À partir de 350 Dhs",
    image: product3,
  },
];

const Products = () => {
  return (
    <section id="produits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Nos Créations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque chocolat est une œuvre d'art, confectionné avec passion et les meilleurs ingrédients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-chocolate mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-copper text-white font-semibold px-8 shadow-elegant hover:scale-105 transition-transform"
          >
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Products);
