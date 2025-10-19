import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fatima Z.",
    text: "Les chocolats Palmador ont sublimé notre mariage ! Tous nos invités ont été impressionnés par la qualité et le goût exceptionnel.",
    rating: 5,
    event: "Mariage",
  },
  {
    id: 2,
    name: "Mohammed A.",
    text: "Service impeccable et chocolats divins. La personnalisation était parfaite pour notre événement d'entreprise.",
    rating: 5,
    event: "Événement d'entreprise",
  },
  {
    id: 3,
    name: "Salma K.",
    text: "Une qualité artisanale remarquable ! Les tablettes sont un vrai délice, je recommande vivement Palmador.",
    rating: 5,
    event: "Cadeau personnel",
  },
  {
    id: 4,
    name: "Youssef M.",
    text: "Chocolats raffinés et élégants. Parfait pour offrir lors d'occasions spéciales. Un vrai savoir-faire marocain !",
    rating: 5,
    event: "Cadeau",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont savouré nos créations
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="h-full border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4 text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-primary/10 pt-4">
                        <p className="font-semibold text-chocolate">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
