import { useEffect, useRef, useState } from 'react';
import { Loader2, ShoppingCart, Package, Crown, Sparkles, Star, Gift, Flame, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface CraftingStoreEmbedProps {
  storeUrl: string;
  height?: string;
}

// Dati fittizi delle categorie di prodotti per mostrare l'interfaccia
const categories = [
  { id: 'ranks', name: 'Gradi VIP', icon: <Crown className="w-5 h-5 mr-2 text-primary" /> },
  { id: 'kits', name: 'Kit', icon: <Package className="w-5 h-5 mr-2 text-primary" /> },
  { id: 'cosmetics', name: 'Cosmetici', icon: <Sparkles className="w-5 h-5 mr-2 text-primary" /> },
  { id: 'featured', name: 'In Evidenza', icon: <Star className="w-5 h-5 mr-2 text-primary" /> },
  { id: 'sales', name: 'Offerte', icon: <Flame className="w-5 h-5 mr-2 text-primary" /> }
];

// Prodotti fittizi per visualizzare l'interfaccia
const products = [
  {
    id: 1,
    title: 'VIP',
    category: 'ranks',
    description: 'Accedi a vantaggi esclusivi, comandi speciali e abilità uniche.',
    price: '9.99€',
    featured: false,
    sale: false,
    image: 'https://i.imgur.com/vHXTOwX.png' // Diamond
  },
  {
    id: 2,
    title: 'VIP+',
    category: 'ranks',
    description: 'Tutti i vantaggi del VIP più accesso prioritario e kit settimanali.',
    price: '19.99€',
    featured: true,
    sale: false,
    image: 'https://i.imgur.com/VWQzQRD.png' // Diamond +
  },
  {
    id: 3,
    title: 'MVP',
    category: 'ranks',
    description: 'Vantaggi premium e trattamento esclusivo. Sblocca tutte le funzionalità.',
    price: '29.99€',
    featured: true,
    sale: false,
    image: 'https://i.imgur.com/oLUlk5D.png' // Emerald
  },
  {
    id: 4,
    title: 'Kit Iniziale',
    category: 'kits',
    description: 'Ottieni un set di strumenti iniziali per un vantaggio immediato.',
    price: '4.99€',
    featured: false,
    sale: true,
    oldPrice: '7.99€',
    image: 'https://i.imgur.com/YXO6z7k.png' // Wooden Tools
  },
  {
    id: 5,
    title: 'Kit Survivor',
    category: 'kits',
    description: 'Un set completo di equipaggiamento per affrontare qualsiasi sfida.',
    price: '12.99€',
    featured: false,
    sale: false,
    image: 'https://i.imgur.com/qCFhPUJ.png' // Iron Tools
  },
  {
    id: 6,
    title: 'Particelle Fiamme',
    category: 'cosmetics',
    description: 'Cammina lasciando una scia di particelle infuocate.',
    price: '6.99€',
    featured: false,
    sale: false,
    image: 'https://i.imgur.com/LCPCusS.png' // Fire
  },
  {
    id: 7,
    title: 'Cappello Drago',
    category: 'cosmetics',
    description: 'Un costume esclusivo a forma di testa di drago.',
    price: '8.99€',
    featured: true,
    sale: true,
    oldPrice: '14.99€',
    image: 'https://i.imgur.com/eunA6TA.png' // Dragon
  },
  {
    id: 8,
    title: 'Pacchetto Diamante',
    category: 'featured',
    description: 'VIP+ permanente più 3 kit a scelta e 5 cosmetici esclusivi.',
    price: '39.99€',
    featured: true,
    sale: false,
    image: 'https://i.imgur.com/Y5hKkMM.png' // Diamond Block
  }
];

export default function CraftingStoreEmbed({ 
  storeUrl, 
  height = '800px' 
}: CraftingStoreEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');
  const [showNativeStore, setShowNativeStore] = useState(false);

  // Filtrare i prodotti in base alla tab selezionata
  const filteredProducts = activeTab === 'featured' 
    ? products.filter(p => p.featured) 
    : (activeTab === 'sales' 
      ? products.filter(p => p.sale)
      : products.filter(p => p.category === activeTab));

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || showNativeStore) return;

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);
    
    // Imposta un timeout nel caso in cui il frame non si carichi
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000);
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
      }
      clearTimeout(timeout);
    };
  }, [isLoading, showNativeStore]);

  if (showNativeStore) {
    return (
      <div className="w-full">
        <iframe
          ref={iframeRef}
          src={storeUrl}
          className="w-full border-0 rounded-lg"
          style={{ height }}
          title="Crafting Store"
          allowFullScreen
        />
      </div>
    );
  }

  // Implementazione personalizzata dello store
  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-[300px]">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <p className="text-muted-foreground">Caricamento dello store in corso...</p>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tabs per categorie */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="flex items-center justify-center"
                >
                  {category.icon} {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Contenuto delle tabs */}
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <motion.div
                      key={product.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: product.id * 0.1 }}
                    >
                      <Card className="overflow-hidden border border-primary/20 bg-card hover:border-primary/50 transition-colors">
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          {product.featured && (
                            <Badge className="absolute top-2 right-2 bg-primary/90">
                              In Evidenza
                            </Badge>
                          )}
                          {product.sale && (
                            <Badge className="absolute top-2 left-2 bg-green-500/90">
                              Offerta
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                            <div className="flex items-center">
                              {product.sale && (
                                <span className="line-through text-muted-foreground mr-2">
                                  {product.oldPrice}
                                </span>
                              )}
                              <span className="text-xl font-bold text-primary">
                                {product.price}
                              </span>
                            </div>
                          </div>
                          <CardDescription className="text-muted-foreground">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-0">
                          <Button className="w-full bg-primary hover:bg-primary/90 hover:translate-y-[-2px] transition-all">
                            <ShoppingCart className="h-4 w-4 mr-2" /> Acquista
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Offerte speciali con countdown */}
          <div className="mt-10 p-6 bg-gradient-to-r from-primary/20 to-card border border-primary/20 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Flame className="h-6 w-6 mr-2 text-primary" /> Offerte Lampo
                </h3>
                <p className="text-muted-foreground">
                  Approfitta subito di questi sconti esclusivi, disponibili per un tempo limitato!
                </p>
              </div>
              <div className="flex items-center mt-4 md:mt-0 bg-background/20 px-4 py-2 rounded-lg border border-primary/30">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span className="font-mono font-bold">23:45:12</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.filter(p => p.sale).map(product => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex bg-card p-4 rounded-lg border border-primary/30 hover:border-primary/70 transition-colors"
                >
                  <div className="w-20 h-20 mr-4 overflow-hidden rounded-lg">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{product.title}</h4>
                    <p className="text-sm text-muted-foreground">{product.description.substring(0, 60)}...</p>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="line-through text-muted-foreground text-sm">{product.oldPrice}</span>
                        {" "}
                        <span className="text-primary font-bold">{product.price}</span>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ShoppingCart className="h-3 w-3 mr-1" /> Acquista
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vantaggi VIP */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 mb-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Crown className="h-6 w-6 mr-2 text-primary" /> Vantaggi VIP
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-primary/20 bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">VIP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary">9.99€</span>
                    <span className="text-muted-foreground"> /mese</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>2 kit esclusivi al giorno</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>5 home aggiuntive</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Accesso ai mondi creativi</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Chat colorata</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:translate-y-[-2px] transition-all">
                    Acquista VIP
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-2 border-primary bg-card relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full text-white text-sm font-bold">
                  Più Popolare
                </div>
                <CardHeader>
                  <CardTitle className="text-center">VIP+</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary">19.99€</span>
                    <span className="text-muted-foreground"> /mese</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Tutti i vantaggi VIP</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>4 kit esclusivi al giorno</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>10 home aggiuntive</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Cosmetici esclusivi</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Accesso a eventi speciali</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:translate-y-[-2px] transition-all">
                    Acquista VIP+
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-primary/20 bg-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">MVP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary">29.99€</span>
                    <span className="text-muted-foreground"> /mese</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Tutti i vantaggi VIP+</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Kit illimitati</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>20 home aggiuntive</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Particelle personalizzate</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Volo creativo in Survival</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:translate-y-[-2px] transition-all">
                    Acquista MVP
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>

          {/* Link per accedere allo store originale */}
          <div className="text-center mt-8 pt-8 border-t border-primary/20">
            <p className="text-muted-foreground mb-4">
              Preferisci utilizzare l'interfaccia originale di Crafting Store? Clicca sul pulsante qui sotto.
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => setShowNativeStore(true)}
            >
              <Gift className="h-4 w-4 mr-2" /> Apri Store Originale
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
