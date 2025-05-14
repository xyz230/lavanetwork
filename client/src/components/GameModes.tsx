import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const gameModes = [
  {
    id: "survival",
    title: "Survival",
    image: "https://pixabay.com/get/gc914adb2f9e842c88a98d4b8d9cc831715758cca594ff86268732eac4186297faf8f5f3bb45ece78ad057b5b343e799c32cad2190e569214881c596b7c6da5fe_1280.jpg",
    description: "Sopravvivi in un mondo aperto, raccogli risorse, costruisci la tua base e affronta mostri durante la notte.",
    players: "1200+",
    status: "online",
  },
  {
    id: "skyblock",
    title: "SkyBlock",
    image: "https://pixabay.com/get/gf8fb588d37f5cd12c9cf791b65abc2f79028be2bff8dc10bc61b5efd13652867675af7823b6ec2f7a912228b6d5a33d0ab9419348290b5dbbfd8bbe6565b4dee_1280.jpg",
    description: "Inizia la tua avventura su un'isola volante, espandila e completa sfide per sbloccare nuove aree e ricompense.",
    players: "950+",
    status: "online",
  },
  {
    id: "pvp",
    title: "PvP Arena",
    image: "https://pixabay.com/get/g33fd06a581a6106239febb86b1cfb0eb80b605fb668f2ed4d6311c482dfaeed99d4c46a1f35d36ee316506fcd32fd228684274dd999941fd4dc71d44b629ba22_1280.jpg",
    description: "Combatti contro altri giocatori in diverse arene tematiche, scala la classifica e diventa il miglior guerriero.",
    players: "800+",
    status: "online",
  }
];

export default function GameModes() {
  return (
    <section id="servers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Le Nostre</span>
            <span className="text-primary"> Modalità</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Esplora le diverse modalità di gioco disponibili sul server MetaCraft,
            ognuna con un'esperienza di gioco unica e coinvolgente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameModes.map((mode) => (
            <Card key={mode.id} className="server-card bg-card overflow-hidden shadow-xl">
              <img 
                src={mode.image} 
                alt={`${mode.title} Mode`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                  <Badge variant="default" className="bg-green-500">
                    {mode.status === "online" ? "Online" : "Manutenzione"}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  {mode.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{mode.players} Giocatori</span>
                  <a href={`#${mode.id}`} className="text-primary font-medium hover:underline">
                    Scopri di più
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            className="bg-primary hover:bg-primary/90 px-8 py-6"
          >
            <a href="#servers">TUTTE LE MODALITÀ</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
