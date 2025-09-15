import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Liluu
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tworzymy unikalne dzieła sztuki z modeliny. Każdy element wykonany jest ręcznie 
              z największą starannością i miłością do rzemiosła.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Szybkie Linki</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Strona Główna
              </Link>
              <Link to="/produkty" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Wszystkie Produkty
              </Link>
              <Link to="/o-nas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                O Nas
              </Link>
              <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Kategorie</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/produkty?kategoria=kolczyki" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kolczyki
              </Link>
              <Link to="/produkty?kategoria=naszyjniki" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Naszyjniki
              </Link>
              <Link to="/produkty?kategoria=bransoletki" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Bransoletki
              </Link>
              <Link to="/produkty?kategoria=inne" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Zestawy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>kontakt@liluu.pl</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kraków, Polska</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Liluu. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/regulamin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Regulamin
            </Link>
            <Link to="/polityka-prywatnosci" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;