import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ChocolateBars from "@/components/ChocolateBars";
import Products from "@/components/Products";
import Coffrets from "@/components/Coffrets";
import Coupes from "@/components/Coupes";
import Events from "@/components/Events";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Accueil = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <Hero />
        <FeaturedProducts />
        <ChocolateBars />
        <Products />
        <Coffrets />
        <Coupes />
        <Events />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
    </motion.div>
  );
};

export default Accueil;
