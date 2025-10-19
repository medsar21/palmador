import { Card, CardContent } from "@/components/ui/card";
import { Heart, Baby, Briefcase, Gift, Sparkles, Cake } from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "Mariages & Fiançailles",
    description: "Des créations uniques pour célébrer votre amour",
  },
  {
    icon: Cake,
    title: "Anniversaires",
    description: "Chocolats personnalisés pour des fêtes inoubliables",
  },
  {
    icon: Baby,
    title: "Naissances",
    description: "Douceur et élégance pour accueillir un nouveau-né",
  },
  {
    icon: Briefcase,
    title: "Événements d'Entreprise",
    description: "Cadeaux corporatifs raffinés et personnalisés",
  },
  {
    icon: Gift,
    title: "Saint-Valentin",
    description: "Déclarations gourmandes pour la fête des amoureux",
  },
  {
    icon: Sparkles,
    title: "Occasions Spéciales",
    description: "Créations sur mesure pour tous vos événements",
  },
];

const Events = () => {
  return (
    <section id="evenements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4">
            Pour Chaque Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sublimez vos événements avec nos créations chocolatées personnalisées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.title}
              className="group hover:shadow-elegant transition-all duration-300 border-none bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-copper mb-4 group-hover:scale-110 transition-transform">
                  <event.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
