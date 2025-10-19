import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-[#3b2c27] via-[#b37651]/10 to-[#d4b29a]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#3b2c27] mb-8">
              Notre Histoire
            </h2>
            <div className="space-y-6 text-[#3b2c27]/80 leading-relaxed">
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Chaque création est le fruit d'une recherche minutieuse d'ingrédients de qualité, issus des meilleures plantations de cacao du monde. Palmador Chocolatier allie des techniques traditionnelles à une touche de modernité pour proposer des saveurs uniques et des textures inoubliables.
              </motion.p>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Sublimer le chocolat dans toute sa richesse, en respectant son essence naturelle. Derrière chaque tablette, chaque praline et chaque ganache, se cache une passion inébranlable pour l'excellence et le désir d'offrir des moments de pure gourmandise.
              </motion.p>
              <motion.p 
                className="text-lg font-medium text-[#b37651]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Ma mission est simple : transformer chaque dégustation en un moment d'évasion, en partageant ma passion pour le chocolat authentique et raffiné.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start space-x-6 group hover:translate-x-2 transition-all duration-500 p-6 rounded-2xl hover:bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#b37651] to-[#d4b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#3b2c27] text-xl mb-2">Qualité Premium</h3>
                <p className="text-[#3b2c27]/70 leading-relaxed">
                  Ingrédients sélectionnés avec soin pour une qualité exceptionnelle
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-6 group hover:translate-x-2 transition-all duration-500 p-6 rounded-2xl hover:bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#b37651] to-[#d4b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#3b2c27] text-xl mb-2">Créations Sur Mesure</h3>
                <p className="text-[#3b2c27]/70 leading-relaxed">
                  Personnalisation complète selon vos désirs et votre événement
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-6 group hover:translate-x-2 transition-all duration-500 p-6 rounded-2xl hover:bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#b37651] to-[#d4b29a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#3b2c27] text-xl mb-2">Artisanat Authentique</h3>
                <p className="text-[#3b2c27]/70 leading-relaxed">
                  Techniques traditionnelles transmises de génération en génération
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
