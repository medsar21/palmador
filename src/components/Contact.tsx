import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-chocolate text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contactez-Nous
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour réaliser vos projets chocolatés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                <Phone className="h-6 w-6 text-chocolate" />
              </div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <a href="tel:+212530562079" className="text-white/80 hover:text-accent transition-colors block">
                +212 530 56 20 79
              </a>
              <a href="tel:+212660436040" className="text-white/80 hover:text-accent transition-colors block">
                +212 660 43 60 40
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4 transition-transform duration-300 group-hover:rotate-12">
                <MapPin className="h-6 w-6 text-chocolate" />
              </div>
              <h3 className="font-semibold mb-2">INFO</h3>
              <p className="text-white/80 text-sm">
                Av. Moulay abderrahmane
                <br />
                Kenitra
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4 transition-transform duration-300 group-hover:rotate-12">
                <Clock className="h-6 w-6 text-chocolate" />
              </div>
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-white/80 text-sm">
                Lun - Sam: 9h - 20h
                <br />
                Sur rendez-vous
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4 transition-transform duration-300 group-hover:rotate-12">
                <Instagram className="h-6 w-6 text-chocolate" />
              </div>
              <h3 className="font-semibold mb-2">Suivez-nous</h3>
              <a 
                href="https://instagram.com/palmador_chocolatier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                @palmador_chocolatier
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-elegant h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d-6.5802!3d34.2610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE1JzM5LjYiTiA2wrAzNCc0OC43Ilc!5e0!3m2!1sen!2sma!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palmador Chocolatier Location"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-4">Visitez-Nous</h3>
            <p className="text-white/80 mb-6">
              Nous sommes situés à Kenitra et sommes ravis de vous accueillir pour découvrir nos créations chocolatées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-chocolate font-semibold px-8 shadow-elegant"
              >
                Demander un devis
              </Button>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/+212660436040', '_blank')}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 shadow-elegant"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
