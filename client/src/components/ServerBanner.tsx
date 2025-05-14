import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ClipboardCopy, Check, Users, Server, Signal } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion, useAnimation } from "framer-motion";
import { Reveal, PulseElement } from "@/components/AnimatedComponents";

export default function ServerBanner() {
  const [copied, setCopied] = useState(false);
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const { toast } = useToast();
  const serverIP = "play.lavanetwork.it";

  // Simula il caricamento dei dati del server
  useEffect(() => {
    // In una reale implementazione, questa sarebbe una chiamata API 
    // al tuo server per ottenere il numero attuale di giocatori
    const timer = setTimeout(() => {
      setPlayerCount(120);
      setIsLoading(false);
      
      // Avvia l'animazione
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [controls]);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP).then(
      () => {
        setCopied(true);
        toast({
          title: "IP copiato!",
          description: `${serverIP} è stato copiato negli appunti.`,
        });
        setTimeout(() => setCopied(false), 2000);
      },
      () => {
        toast({
          variant: "destructive",
          title: "Errore",
          description: "Impossibile copiare l'IP. Riprova manualmente.",
        });
      }
    );
  };

  return (
    <motion.section 
      className="bg-gradient-to-r from-primary to-primary/90 py-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Particelle di sfondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -20],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal animation="fadeIn" threshold={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Entra nel Server Ora!
              </h2>
              <div className="flex items-center text-white opacity-90">
                <Signal className="mr-2 h-4 w-4" />
                <span>Solo Survival - Versione 1.20.x - Premium e Non-Premium</span>
                {playerCount !== null && (
                  <motion.div 
                    className="ml-4 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Users className="mr-1 h-4 w-4" />
                    <motion.span
                      animate={controls}
                    >
                      {playerCount} online
                    </motion.span>
                  </motion.div>
                )}
              </div>
            </div>
            <PulseElement scale={1.03} duration={5}>
              <motion.div 
                className="flex items-center bg-background/90 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg border border-white/10 hover:scale-[1.02] transition-transform"
              >
                <span className="text-white text-lg font-mono mr-3">{serverIP}</span>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white hover:bg-gray-100 text-primary font-medium transition-all hover:scale-105"
                  onClick={copyIP}
                >
                  <motion.div
                    animate={copied ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <ClipboardCopy className="h-4 w-4 mr-1" />}
                  </motion.div>
                  {copied ? "Copiato" : "Copia IP"}
                </Button>
              </motion.div>
            </PulseElement>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
