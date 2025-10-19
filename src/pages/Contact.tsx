import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit - in real app, this would send to backend
    alert("Message envoyé avec succès ! Nous vous contacterons bientôt.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Contactez-nous
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos commandes
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-brand-200 shadow-elegant">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">
                      Envoyez-nous un message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-brand-700 font-medium">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-brand-300 focus:border-brand-500 focus:ring-brand-500"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-brand-700 font-medium">
                          Téléphone *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-brand-300 focus:border-brand-500 focus:ring-brand-500"
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-brand-700 font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="mt-2 border-brand-300 focus:border-brand-500 focus:ring-brand-500"
                          placeholder="Décrivez votre demande ou votre commande..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-elegant"
                      >
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-8"
              >
                <Card className="bg-white/90 backdrop-blur-sm border-brand-200 shadow-elegant">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">
                      Informations de contact
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-brand-500 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-brand-800">Téléphone</p>
                          <p className="text-brand-600">+212 530 56 20 79</p>
                          <p className="text-brand-600">+212 660 43 60 40</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-brand-500 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-brand-800">Email</p>
                          <p className="text-brand-600">contact@palmador.ma</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-brand-500 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-brand-800">Adresse</p>
                          <p className="text-brand-600">Casablanca, Maroc</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-white/90 backdrop-blur-sm border-brand-200 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-brand-800 mb-6">
                      Suivez-nous
                    </h3>
                    
                    <div className="flex space-x-4">
                      <Button 
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open("https://instagram.com/palmador", "_blank")}
                      >
                        <Instagram className="h-5 w-5 mr-2" />
                        Instagram
                      </Button>
                      
                      <Button 
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open("https://wa.me/212530562079", "_blank")}
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Contact;
