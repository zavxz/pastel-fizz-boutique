import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';
import heroImage from '@/assets/hero-jewelry.jpg';
import collectionImage from '@/assets/jewelry-collection.jpg';

const Home = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-powder-pink text-powder-pink">
                  Ręcznie wykonane z miłością
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Unikalna Biżuteria
                  <span className="text-primary"> z Modeliny</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Odkryj kolekcję wyjątkowej biżuterii wykonanej ręcznie z najwyższej jakości modeliny. 
                  Każde dzieło to połączenie sztuki i elegancji.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-powder-pink hover:bg-powder-pink-dark text-primary-foreground">
                  <Link to="/produkty">
                    Zobacz Kolekcję
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/o-nas">
                    Nasza Historia
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Zadowolonych Klientów</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Ręcznie Wykonane</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5⭐</div>
                  <div className="text-sm text-muted-foreground">Średnia Ocena</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Elegancka biżuteria z modeliny"
                  className="w-full h-auto rounded-2xl shadow-hover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-powder-pink-light rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-powder-pink rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Bestsellery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Polecane Produkty
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Najpiękniejsze i najczęściej wybierane przez nasze klientki dzieła. 
              Każdy element wykonany z największą precyzją i uwagą do szczegółów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/produkty">
                Zobacz Wszystkie Produkty
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="border-powder-pink text-powder-pink">
                  O Nas
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Pasja do Tworzenia
                </h2>
                <p className="text-muted-foreground">
                  Nasza przygoda z biżuterią z modeliny rozpoczęła się kilka lat temu z prostej miłości 
                  do tworzenia pięknych rzeczy. Każdy projekt powstaje w naszym atelier, gdzie łączymy 
                  tradycyjne techniki z nowoczesnymi trendami.
                </p>
                <p className="text-muted-foreground">
                  Używamy wyłącznie najwyższej jakości materiałów, dbając o każdy detal. Nasze produkty 
                  są nie tylko piękne, ale także trwałe i bezpieczne dla skóry.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Wykonane z pasją</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Najwyższa jakość</span>
                </div>
              </div>

              <Button asChild variant="outline">
                <Link to="/o-nas">
                  Poznaj Naszą Historię
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={collectionImage}
                alt="Nasza kolekcja biżuterii"
                className="w-full h-auto rounded-2xl shadow-hover"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-powder-pink-light rounded-full opacity-50 blur-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-powder-pink rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Gotowa na Coś Wyjątkowego?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Dołącz do grona zadowolonych klientek i odkryj magię ręcznie wykonanej biżuterii. 
              Każdy element to unikalne dzieło sztuki stworzone specjalnie dla Ciebie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/produkty">
                  <ShoppingBag className="mr-2 w-4 h-4" />
                  Rozpocznij Zakupy
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/kontakt">
                  Skontaktuj się z Nami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;