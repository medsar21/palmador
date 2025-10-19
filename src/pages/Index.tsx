import Navigation from "@/components/Navigation";
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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
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
      <Footer />
    </div>
  );
};

export default Index;
