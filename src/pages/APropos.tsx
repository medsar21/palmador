import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Coffee } from "lucide-react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const APropos = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Chaque chocolat est créé avec amour et passion pour offrir une expérience gustative unique."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Nous nous efforçons d'atteindre la perfection dans chaque création artisanale."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tradition",
      description: "Nous préservons les techniques traditionnelles tout en innovant pour vous surprendre."
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Qualité",
      description: "Seuls les meilleurs ingrédients sont sélectionnés pour nos créations de luxe."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Fondation",
      description: "Création de Palmador avec la vision de démocratiser le chocolat de luxe au Maroc."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Ouverture de notre premier atelier artisanal et développement de notre gamme de produits."
    },
    {
      year: "2020",
      title: "Reconnaissance",
      description: "Obtention de certifications qualité et reconnaissance dans l'industrie chocolatière."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Lancement de nouvelles créations et expansion de notre présence digitale."
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-brand-50 to-brand-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-chocolate text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-serif font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              À Propos de Palmador
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              L'histoire d'une passion pour le chocolat et d'un engagement envers l'excellence artisanale
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-4xl font-serif font-bold text-brand-800 mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-brand-700 leading-relaxed">
                  <p>
                    Fondée en 2015, Palmador est née de la passion de ses créateurs pour l'art du chocolat. 
                    Notre mission est de démocratiser le chocolat de luxe au Maroc tout en préservant 
                    les techniques artisanales traditionnelles.
                  </p>
                  <p>
                    Chaque création Palmador est le fruit d'un savoir-faire transmis de génération en génération, 
                    combiné à une approche moderne et innovante. Nous sélectionnons rigoureusement nos ingrédients 
                    pour garantir une qualité exceptionnelle dans chaque bouchée.
                  </p>
                  <p>
                    Aujourd'hui, Palmador est reconnue comme une référence dans l'artisanat chocolatier marocain, 
                    avec une gamme de produits qui célèbre la richesse des saveurs et l'élégance du design.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <img 
                  src="/src/assets/hero-chocolate.jpg" 
                  alt="Atelier Palmador"
                  className="rounded-lg shadow-elegant w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="bg-brand-500 text-white mb-2">Depuis 2015</Badge>
                  <p className="text-lg font-semibold">Atelier Artisanal</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-brand-600 max-w-2xl mx-auto">
                Les principes qui guident notre passion pour l'art du chocolat
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Card className="text-center bg-white/90 backdrop-blur-sm border-brand-200 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="bg-brand-500 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-brand-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-brand-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">
                Notre Parcours
              </h2>
              <p className="text-xl text-brand-600 max-w-2xl mx-auto">
                Les étapes clés de notre évolution
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8 + index * 0.2 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="bg-white/90 backdrop-blur-sm border-brand-200 shadow-elegant">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge className="bg-brand-500 text-white mr-3">{item.year}</Badge>
                          <h3 className="text-xl font-serif font-bold text-brand-800">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-brand-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-brand-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default APropos;
