import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-card fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-primary font-bold text-2xl">LavaNetwork</Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link font-medium ${location === '/' ? 'text-primary' : 'text-white hover:text-primary'}`}>
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`nav-link font-medium ${location === '/server' ? 'text-primary' : 'text-white hover:text-primary'} flex items-center`}>
                Server
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/server#survival" className="w-full">Survival</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/server#skyblock" className="w-full">SkyBlock</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/server#creative" className="w-full">Creative</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/store" className={`nav-link font-medium ${location === '/store' ? 'text-primary' : 'text-white hover:text-primary'}`}>
              Store
            </Link>
            <Link href="/features" className={`nav-link font-medium ${location === '/features' ? 'text-primary' : 'text-white hover:text-primary'}`}>
              Features
            </Link>

            <Link href="/contact" className={`nav-link font-medium ${location === '/contact' ? 'text-primary' : 'text-white hover:text-primary'}`}>
              Contatti
            </Link>
          </div>
          
          {/* Join Server Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="/#join">GIOCA ORA</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-card px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`nav-link block px-3 py-2 rounded-md font-medium ${location === '/' ? 'text-primary' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/server" className={`nav-link block px-3 py-2 rounded-md font-medium ${location === '/server' ? 'text-primary' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Server
            </Link>
            <Link href="/store" className={`nav-link block px-3 py-2 rounded-md font-medium ${location === '/store' ? 'text-primary' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Store
            </Link>
            <Link href="/features" className={`nav-link block px-3 py-2 rounded-md font-medium ${location === '/features' ? 'text-primary' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>

            <Link href="/contact" className={`nav-link block px-3 py-2 rounded-md font-medium ${location === '/contact' ? 'text-primary' : ''}`} onClick={() => setMobileMenuOpen(false)}>
              Contatti
            </Link>
            <Button 
              variant="default" 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/#join" className="w-full text-center">GIOCA ORA</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
