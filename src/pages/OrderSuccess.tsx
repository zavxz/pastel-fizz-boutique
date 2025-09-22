import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Mail, Package, Home } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const orderNumber = Math.floor(Math.random() * 100000);

  useEffect(() => {
    // Wyczyść koszyk po pomyślnym zamówieniu
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="space-y-8">
          {/* Sukces ikona */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Główna wiadomość */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Dziękujemy za zamówienie!
            </h1>
            <p className="text-lg text-muted-foreground">
              Twoje zamówienie zostało pomyślnie złożone i przekazane do realizacji.
            </p>
          </div>

          {/* Szczegóły zamówienia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Package className="w-5 h-5 mr-2" />
                Szczegóły zamówienia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span>Numer zamówienia:</span>
                <Badge variant="secondary">#{orderNumber}</Badge>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span>Status:</span>
                <Badge className="bg-green-100 text-green-800">
                  Przyjęte do realizacji
                </Badge>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span>Przewidywany czas realizacji:</span>
                <span className="font-medium">2-3 dni robocze</span>
              </div>
            </CardContent>
          </Card>

          {/* Co dalej */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div className="text-left">
                    <h4 className="font-medium">Potwierdzenie email</h4>
                    <p className="text-sm text-muted-foreground">
                      Wysłaliśmy na Twój adres email potwierdzenie zamówienia z wszystkimi szczegółami.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-primary mt-1" />
                  <div className="text-left">
                    <h4 className="font-medium">Przygotowanie zamówienia</h4>
                    <p className="text-sm text-muted-foreground">
                      Twoje zamówienie zostanie przygotowane i zapakowane z największą starannością.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div className="text-left">
                    <h4 className="font-medium">Wysyłka</h4>
                    <p className="text-sm text-muted-foreground">
                      Otrzymasz powiadomienie z numerem śledzenia, gdy zamówienie zostanie wysłane.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Akcje */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/')} variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Wróć do strony głównej
            </Button>
            <Button onClick={() => navigate('/produkty')}>
              Kontynuuj zakupy
            </Button>
          </div>

          {/* Kontakt */}
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Masz pytania?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Skontaktuj się z nami w przypadku jakichkolwiek pytań dotyczących Twojego zamówienia.
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/kontakt')}>
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;