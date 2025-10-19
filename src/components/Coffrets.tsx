import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coffretSmall from "@/assets/coffret-small.jpg";
import coffretMedium from "@/assets/coffret-medium.jpg";
import coffretLarge from "@/assets/coffret-large.jpg";

const coffrets = [
  {
    id: 1,
    name: "Volupté - 450 Grs",
    price: "700.00 Dhs",
    description: "plateau en cuir bicolore (petit)",
    image: coffretSmall,
  },
  {
    id: 2,
    name: "Volupté - 1kg",
    price: "1500.00 Dhs",
    description: "plateau en cuir bicolore (moyen)",
    image: coffretMedium,
  },
  {
    id: 3,
    name: "Volupté - 2kg",
    price: "2600.00 Dhs",
    description: "plateau en cuir bicolore (grand)",
    image: coffretLarge,
  },
];

const Coffrets = () => {
  return (
    <section id="coffrets" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-copper mb-4">
            Nos Coffrets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coffrets.map((coffret, index) => (
            <Card
              key={coffret.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/10">
                <img
                  src={coffret.image}
                  alt={coffret.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                  {coffret.name}
                </h3>
                <p className="text-lg font-bold text-copper mb-2">
                  {coffret.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {coffret.description}
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    Détail
                  </Button>
                  <Button
                    size="sm"
                    className="bg-chocolate text-white hover:bg-chocolate/90"
                  >
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-copper text-copper hover:bg-copper hover:text-white font-semibold px-8 transition-colors"
          >
            Découvrir nos coffrets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coffrets;
