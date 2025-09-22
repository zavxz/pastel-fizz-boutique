import { Mail, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
const Contact = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Kontakt
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Skontaktuj się
              <span className="text-primary"> z Nami</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Masz pytania o nasze produkty? Chcesz zamówić coś specjalnego? 
              Jesteśmy tutaj, aby Ci pomóc. Skontaktuj się z nami już dziś!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informacje Kontaktowe
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-powder-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-powder-pink-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">kontakt@liluu.pl</p>
                    <p className="text-sm text-muted-foreground">
                      Odpowiadamy w ciągu 24 godzin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Śledź Nas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Bądź na bieżąco z naszymi najnowszymi kolekcjami i otrzymuj inspiracje!
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="icon">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>@liluu</p>
                  <p>facebook.com/liluu</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Wyślij Wiadomość</CardTitle>
                <p className="text-muted-foreground">
                  Wypełnij formularz, a skontaktujemy się z Tobą tak szybko, jak to możliwe.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                  };
                  
                  // Here you would integrate with your email service
                  // For now, we'll just log and show an alert
                  console.log('Form submitted with data:', data);
                  alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce na adres kontakt@liluu.pl');
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Imię *</Label>
                      <Input id="firstName" name="firstName" placeholder="Twoje imię" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nazwisko *</Label>
                      <Input id="lastName" name="lastName" placeholder="Twoje nazwisko" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="twoj@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+48 123 456 789" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Temat *</Label>
                    <Input id="subject" name="subject" placeholder="Czego dotyczy Twoja wiadomość?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea id="message" name="message" placeholder="Opisz szczegółowo swoją prośbę lub pytanie..." className="min-h-32" required />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded border-border" required />
                    <Label htmlFor="privacy" className="text-sm">
                      Zgadzam się na przetwarzanie moich danych osobowych zgodnie z{' '}
                      <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                        Polityką Prywatności
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-powder-pink hover:bg-powder-pink-dark text-primary-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Wyślij Wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              Najczęściej Zadawane Pytania
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Jak długo trwa realizacja zamówienia?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Standardowe produkty z naszej oferty wysyłamy w ciągu 2-3 dni roboczych. 
                  Produkty wykonywane na zamówienie mogą wymagać 7-14 dni roboczych.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Czy oferujecie produkty na zamówienie?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tak! Chętnie wykonamy dla Ciebie unikatową biżuterię według Twoich preferencji. 
                  Skontaktuj się z nami, aby omówić szczegóły.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Jakie są koszty dostawy?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Oferujemy darmową dostawę dla zamówień powyżej 150 zł. 
                  Dla mniejszych zamówień koszt dostawy wynosi 15 zł.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Czy mogę zwrócić produkt?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tak, masz 30 dni na zwrot produktu bez podania przyczyny. 
                  Produkt musi być w stanie nienaruszonym, w oryginalnym opakowaniu.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>;
};
export default Contact;