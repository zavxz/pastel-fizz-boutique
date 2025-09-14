import { Heart, Star, Award, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import collectionImage from '@/assets/jewelry-collection.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Nasza Historia
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Pasja do Tworzenia
              <span className="text-primary"> Pięknych Rzeczy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Od kilku lat tworzymy wyjątkową biżuterię z modeliny, łącząc tradycyjne rzemiosło 
              z nowoczesnymi trendami. Każde dzieło to połączenie pasji, precyzji i miłości do sztuki.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Jak Wszystko się Zaczęło
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nasza przygoda z biżuterią z modeliny rozpoczęła się w 2019 roku. Początkowo było to 
                  hobby, sposób na kreatywne spędzanie wolnego czasu. Jednak szybko odkryłyśmy, że 
                  nasze dzieła cieszą się ogromnym zainteresowaniem przyjaciółek i znajomych.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To, co zaczęło się jako pasja, przekształciło się w misję tworzenia unikalnej biżuterii, 
                  która pozwala każdej kobiecie wyrazić swoją indywidualność. Wierzymy, że każdy element 
                  powinien opowiadać historię i być tak wyjątkowy jak osoba, która go nosi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dziś, po latach doskonalenia technik i eksperymentowania z formami, jesteśmy dumne 
                  z tego, co udało nam się stworzyć. Nasza mała manufaktura to miejsce, gdzie każdego 
                  dnia rodza się nowe, piękne dzieła.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={collectionImage}
                alt="Nasza kolekcja biżuterii"
                className="w-full h-auto rounded-2xl shadow-hover"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-powder-pink-light rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-powder-pink rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Nasze Wartości
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Co Nas Wyróżnia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Każdy element naszej filozofii biznesowej jest oparty na fundamentalnych wartościach, 
              które kierują nami od pierwszego dnia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-soft bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Pasja</h3>
                <p className="text-sm text-muted-foreground">
                  Każdy element tworzymy z miłością i zaangażowaniem, 
                  wkładając serce w każdy detal.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Jakość</h3>
                <p className="text-sm text-muted-foreground">
                  Używamy wyłącznie najwyższej jakości materiałów i 
                  dbamy o precyzję wykonania.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Unikatowość</h3>
                <p className="text-sm text-muted-foreground">
                  Każdy produkt jest wyjątkowy - nie znajdziesz 
                  dwóch identycznych elementów.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Społeczność</h3>
                <p className="text-sm text-muted-foreground">
                  Budujemy wspólnotę kobiet, które kochają 
                  wyrażać siebie przez piękną biżuterię.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Proces Tworzenia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Od Pomysłu do Dzieła Sztuki
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Każdy element przechodzi przez starannie opracowany proces, 
              który gwarantuje najwyższą jakość i unikalność.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-powder-pink-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-powder-pink-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Projekt i Inspiracja</h3>
              <p className="text-muted-foreground">
                Każdy element zaczyna się od pomysłu. Inspirujemy się naturą, 
                modą i opiniami naszych klientek.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-powder-pink-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-powder-pink-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ręczne Wykonanie</h3>
              <p className="text-muted-foreground">
                Używając tradycyjnych technik i wysokiej jakości modeliny, 
                rzeźbimy każdy element z największą precyzją.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-powder-pink-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-powder-pink-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Kontrola Jakości</h3>
              <p className="text-muted-foreground">
                Każdy gotowy element przechodzi przez dokładną kontrolę jakości 
                przed trafieniem do Ciebie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Nasze Osiągnięcia
            </h2>
            <p className="text-primary-foreground/80">
              Liczby, które cieszą nas najbardziej
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Zadowolonych Klientek</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-primary-foreground/80">Wykonanych Dzieł</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">4</div>
              <div className="text-primary-foreground/80">Lata Doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-primary-foreground/80">Ręczne Wykonanie</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;