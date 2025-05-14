import { Card, CardContent } from "@/components/ui/card";
import { Coins, Wand2, CalendarDays, Ghost, Users, ScrollText } from 'lucide-react';

const features = [
  {
    id: "economy",
    title: "Economia Avanzata",
    description: "Sistema economico completo con lavori, mercato dei giocatori, aste e negozi personalizzati.",
    icon: Coins
  },
  {
    id: "enchants",
    title: "Incantesimi Esclusivi",
    description: "Più di 50 incantesimi personalizzati per armi e armature che aggiungono nuove abilità e poteri.",
    icon: Wand2
  },
  {
    id: "events",
    title: "Eventi Settimanali",
    description: "Partecipa a eventi speciali ogni settimana con premi esclusivi e sfide uniche per tutti i giocatori.",
    icon: CalendarDays
  },
  {
    id: "mobs",
    title: "Mostri Speciali",
    description: "Affronta creature uniche e boss personalizzati che non troverai in nessun altro server.",
    icon: Ghost
  },
  {
    id: "guild",
    title: "Sistema Clan",
    description: "Crea o unisciti a un clan, conquista territori, partecipa a guerre e guadagna vantaggi esclusivi.",
    icon: Users
  },
  {
    id: "quests",
    title: "Missioni Dinamiche",
    description: "Completa centinaia di missioni con una trama avvincente e ricompense progressive.",
    icon: ScrollText
  }
];     </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-background p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
        

export default function Features() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">Caratteristiche</span>
            <span className="text-primary"> Uniche</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Scopri cosa rende MetaCraft diverso dagli altri server Minecraft.
            Il nostro team ha sviluppato funzionalità esclusive per migliorare la tua esperienza di gioco.
         >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
