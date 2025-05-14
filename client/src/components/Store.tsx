import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Package, Coins, HandPlatter } from 'lucide-react';

const storeItems = [
  {
    id: "vip",
    title: "Grado VIP",
    price: "€9.99",
    features: [
      "Comandi esclusivi",
      "Slot server prioritari",
      "Tag colorato in chat",
      "Kit VIP ogni 24 ore"
    ]
  },
  {
    id: "kit",
    title: "Kit Premium",
    price: "€5.99",
    features: [
      "Armatura diamante",
      "Strumenti incantati",
      "Cibo e risorse",
      "3 chiavi leggendarie"
    ]
  },
  {
    id: "coins",
    title: "10,000 Monete",
    price: "€7.99",
    features: [
      "10,000 monete nel gioco",
      "Consegna istantanea",
      "Utilizzabili in tutti i server",
      "Bonus 500 monete"
    ]
  },
  {
    id: "pet",
    title: "Pet Drago",
    price: "€12.99",
    features: [
      "Pet drago esclusivo",
      "Abilità di volo",
      "Protezione in combattimento",
      "Personalizzazione colori"
    ]
  }
];

const categories = [
  { id: "ranks", title: "Gradi", icon: Crown },
  { id: "kits", title: "Kit", icon: Package },
  { id: "cosmetics", title: "Cosmetici", icon: HandPlatter }
];

export default function Store() {
  return (
    <section id="store" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Crafting</span>
            <span className="text-primary"> Store</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Supporta il server e ottieni vantaggi esclusivi nel gioco.
            Tutti gli acquisti contribuiscono a migliorare il server e a creare nuovi contenuti.
          </p>
        </div>
        
        {/* Featured Items */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 px-4">Prodotti in Evidenza</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeItems.map((item) => (
              <Card key={item.id} className="bg-card overflow-hidden shadow-xl transition-all hover:shadow-primary/20">
                <div className="h-3 bg-primary"></div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <div className="text-primary text-2xl font-bold mb-4">{item.price}</div>
                  <ul className="text-muted-foreground mb-6 space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 font-bold"
                  >
                    <a href={`#buy-${item.id}`} className="w-full">ACQUISTA</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`} 
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-all group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <category.icon className="text-primary text-xl" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 px-8 py-6 font-bold"
          >
            <a href="#store">VISITA LO STORE COMPLETO</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
