import { Separator } from "@/components/ui/separator";
import { Mail, Youtube, Twitter, Instagram, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <span className="text-primary font-bold text-2xl">LavaNetwork</span>
            <p className="text-muted-foreground mt-4">
              Il miglior server Minecraft italiano con modalità uniche, eventi speciali e una community incredibile.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://discord.gg/lavanetwork" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/lavanetwork" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/lavanetwork" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/lavanetwork" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@lavanetwork" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Server</h3>
            <ul className="space-y-2">
              <li><Link href="/server#survival" className="text-muted-foreground hover:text-primary transition-colors">Survival</Link></li>
              <li><Link href="/server#skyblock" className="text-muted-foreground hover:text-primary transition-colors">SkyBlock</Link></li>
              <li><Link href="/server#pvp" className="text-muted-foreground hover:text-primary transition-colors">PvP</Link></li>
              <li><Link href="/server#creative" className="text-muted-foreground hover:text-primary transition-colors">Creative</Link></li>
              <li><Link href="/server#minigames" className="text-muted-foreground hover:text-primary transition-colors">Minigames</Link></li>
              <li><Link href="/server#events" className="text-muted-foreground hover:text-primary transition-colors">Eventi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Store</h3>
            <ul className="space-y-2">
              <li><Link href="/store#ranks" className="text-muted-foreground hover:text-primary transition-colors">Gradi</Link></li>
              <li><Link href="/store#kits" className="text-muted-foreground hover:text-primary transition-colors">Kit</Link></li>
              <li><Link href="/store#cosmetics" className="text-muted-foreground hover:text-primary transition-colors">Cosmetici</Link></li>
              <li><Link href="/store#crates" className="text-muted-foreground hover:text-primary transition-colors">Casse</Link></li>
              <li><Link href="/store#coins" className="text-muted-foreground hover:text-primary transition-colors">Monete</Link></li>
              <li><Link href="/store#pets" className="text-muted-foreground hover:text-primary transition-colors">Pets</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Supporto</h3>
            <ul className="space-y-2">
              <li><Link href="/server#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/server#rules" className="text-muted-foreground hover:text-primary transition-colors">Regole</Link></li>
              <li><Link href="/server#staff" className="text-muted-foreground hover:text-primary transition-colors">Staff</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contatti</Link></li>
              <li><Link href="/contact#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact#terms" className="text-muted-foreground hover:text-primary transition-colors">Termini di Servizio</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-muted-foreground/20" />
        
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} MetaCraft. Tutti i diritti riservati. Non affiliato con Mojang AB.
            </p>
            <div className="flex space-x-6">
              <Link href="/contact#privacy" className="text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/contact#terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">Termini di Servizio</Link>
              <Link href="/contact#cookies" className="text-muted-foreground text-sm hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
