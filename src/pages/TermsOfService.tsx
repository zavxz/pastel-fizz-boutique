import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Regulamin
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Regulamin Sklepu
              <span className="text-primary"> Liluu</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Zapoznaj się z naszymi warunkami korzystania ze sklepu internetowego
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>§ 1 Postanowienia Ogólne</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego Liluu, 
                prowadzonego pod adresem www.liluu.pl
              </p>
              <p className="text-muted-foreground">
                2. Właścicielem sklepu jest firma Liluu, ul. Kwiatowa 123, 00-001 Warszawa
              </p>
              <p className="text-muted-foreground">
                3. Sklep oferuje ręcznie wykonaną biżuterię z modeliny
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 2 Definicje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. <strong>Sklep</strong> - sklep internetowy Liluu działający pod adresem www.liluu.pl
              </p>
              <p className="text-muted-foreground">
                2. <strong>Klient</strong> - osoba fizyczna lub prawna dokonująca zakupu w Sklepie
              </p>
              <p className="text-muted-foreground">
                3. <strong>Produkt</strong> - biżuteria z modeliny oferowana w Sklepie
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 3 Zamówienia i Płatności</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Zamówienia można składać 24 godziny na dobę przez stronę internetową
              </p>
              <p className="text-muted-foreground">
                2. Ceny produktów podane są w złotych polskich i zawierają podatek VAT
              </p>
              <p className="text-muted-foreground">
                3. Płatność można dokonać poprzez przelew bankowy lub płatności online
              </p>
              <p className="text-muted-foreground">
                4. Koszty dostawy są dodatkowe, chyba że zamówienie przekracza 150 zł
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 4 Dostawa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Standardowe produkty wysyłamy w ciągu 2-3 dni roboczych
              </p>
              <p className="text-muted-foreground">
                2. Produkty na zamówienie wymagają 7-14 dni roboczych
              </p>
              <p className="text-muted-foreground">
                3. Dostawa odbywa się przez firmę kurierską lub Pocztę Polską
              </p>
              <p className="text-muted-foreground">
                4. Darmowa dostawa dotyczy zamówień powyżej 150 zł
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 5 Prawo do Odstąpienia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Klient ma prawo odstąpić od umowy w terminie 30 dni bez podania przyczyny
              </p>
              <p className="text-muted-foreground">
                2. Zwracany produkt musi być w stanie nienaruszonym, w oryginalnym opakowaniu
              </p>
              <p className="text-muted-foreground">
                3. Koszty zwrotu ponosi Klient, chyba że produkt był wadliwy
              </p>
              <p className="text-muted-foreground">
                4. Zwrot pieniędzy następuje w ciągu 14 dni od otrzymania zwracanego produktu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 6 Reklamacje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Reklamacje można składać na adres kontakt@liluu.pl lub pisemnie
              </p>
              <p className="text-muted-foreground">
                2. Reklamacja powinna zawierać opis wady i żądanie Klienta
              </p>
              <p className="text-muted-foreground">
                3. Odpowiedź na reklamację następuje w ciągu 14 dni
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>§ 7 Postanowienia Końcowe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                1. Regulamin wchodzi w życie z dniem publikacji
              </p>
              <p className="text-muted-foreground">
                2. W sprawach nieuregulowanych Regulaminem stosuje się przepisy prawa polskiego
              </p>
              <p className="text-muted-foreground">
                3. Ewentualne spory rozstrzygane są przez sąd właściwy dla siedziby sklepu
              </p>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Regulamin obowiązuje od dnia 1 stycznia 2024 roku
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;