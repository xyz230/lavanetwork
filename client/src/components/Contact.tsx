import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from '@/lib/queryClient';
import { Mail, MessagesSquare, Users, Youtube, Twitter, Instagram } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }),
  email: z.string().email({ message: "Email non valida" }),
  subject: z.string().min(1, { message: "Seleziona un oggetto" }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Messaggio inviato",
        description: "Grazie per averci contattato. Ti risponderemo al più presto.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Si è verificato un errore durante l'invio del messaggio. Riprova più tardi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Hai Domande?</span>
              <span className="text-primary"> Contattaci</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Se hai domande sul server, problemi tecnici o vuoi semplicemente entrare in contatto con noi,
              compila il modulo e ti risponderemo il prima possibile.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">support@lavanetwork.it</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-lg">Discord</h3>
                  <p className="text-muted-foreground">discord.gg/metacraft</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessagesSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold text-lg">Supporto in Game</h3>
                  <p className="text-muted-foreground">Usa il comando /help nel server</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#discord" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-all">
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a href="#twitter" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-all">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#instagram" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-all">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#youtube" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-all">
                <Youtube className="h-5 w-5 text-primary" />
              </a>
              <a href="#tiktok" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-all">
                <Users className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <Card className="bg-card p-8 shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Il tuo nome" 
                            className="bg-background border-muted-foreground/30 focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="La tua email" 
                            type="email"
                            className="bg-background border-muted-foreground/30 focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Oggetto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-muted-foreground/30 focus:border-primary">
                              <SelectValue placeholder="Seleziona un oggetto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="support">Supporto Tecnico</SelectItem>
                            <SelectItem value="bug">Segnalazione Bug</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Altro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Messaggio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Il tuo messaggio" 
                            className="bg-background border-muted-foreground/30 focus:border-primary" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 font-bold text-lg py-6" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "INVIO IN CORSO..." : "INVIA MESSAGGIO"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
