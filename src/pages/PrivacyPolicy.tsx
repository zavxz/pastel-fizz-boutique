import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Prywatność
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Polityka
              <span className="text-primary"> Prywatności</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Dowiedz się jak chronimy Twoje dane osobowe
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Administrator Danych</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Administratorem Twoich danych osobowych jest firma Liluu z siedzibą przy 
                ul. Kwiatowej 123, 00-001 Warszawa, e-mail: kontakt@liluu.pl
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Jakie Dane Zbieramy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Zbieramy następujące dane osobowe:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Adres dostawy i fakturowania</li>
                <li>Dane dotyczące płatności</li>
                <li>Historia zamówień</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cel Przetwarzania Danych</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Twoje dane osobowe przetwarzamy w celu:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Realizacji zamówień i dostaw</li>
                <li>Obsługi płatności</li>
                <li>Komunikacji z Klientami</li>
                <li>Obsługi reklamacji i zwrotów</li>
                <li>Prowadzenia księgowości</li>
                <li>Marketingu (za zgodą)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Podstawa Prawna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Dane przetwarzamy na podstawie:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Wykonania umowy sprzedaży (art. 6 ust. 1 lit. b RODO)</li>
                <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
                <li>Prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)</li>
                <li>Zgody (art. 6 ust. 1 lit. a RODO)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Okres Przechowywania</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Dane przechowujemy przez czas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Realizacji umowy i dochodzenia roszczeń</li>
                <li>Wymagany przepisami prawa (np. księgowość - 5 lat)</li>
                <li>Do czasu cofnięcia zgody na marketing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Twoje Prawa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Masz prawo do:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Dostępu do swoich danych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody</li>
                <li>Wniesienia skargi do PUODO</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nasza strona używa plików cookies w celu:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Prawidłowego funkcjonowania sklepu</li>
                <li>Zapamiętywania preferencji</li>
                <li>Analizy ruchu na stronie</li>
                <li>Personalizacji reklam (za zgodą)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Bezpieczeństwo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Stosujemy odpowiednie środki techniczne i organizacyjne aby chronić Twoje dane przed:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nieuprawnionym dostępem</li>
                <li>Utratą lub zniszczeniem</li>
                <li>Nieuprawnionym przetwarzaniem</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Kontakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>E-mail: kontakt@liluu.pl</li>
                <li>Telefon: +48 123 456 789</li>
                <li>Adres: ul. Kwiatowa 123, 00-001 Warszawa</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Polityka Prywatności obowiązuje od dnia 1 stycznia 2024 roku
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;