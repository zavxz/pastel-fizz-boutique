import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, Truck, Package } from 'lucide-react';

const Checkout = () => {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  
  const deliveryPrice = deliveryMethod === 'express' ? 25 : (totalPrice >= 150 ? 0 : 15);
  const finalTotal = totalPrice + deliveryPrice;

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj można zapisać dane do localStorage lub context
    navigate('/platnosc');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Twój koszyk jest pusty</h2>
          <Button onClick={() => navigate('/produkty')}>
            Wróć do zakupów
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/koszyk')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do koszyka
          </Button>
          <Badge variant="outline">Krok 1 z 2</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formularz danych */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Dane do dostawy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContinueToPayment} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Imię *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nazwisko *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Adres *</Label>
                    <Input id="address" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postalCode">Kod pocztowy *</Label>
                      <Input id="postalCode" required />
                    </div>
                    <div>
                      <Label htmlFor="city">Miasto *</Label>
                      <Input id="city" required />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Metoda dostawy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Metoda dostawy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    deliveryMethod === 'standard' ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => setDeliveryMethod('standard')}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Dostawa standardowa</h4>
                      <p className="text-sm text-muted-foreground">3-5 dni roboczych</p>
                    </div>
                    <span className="font-semibold">
                      {totalPrice >= 150 ? 'Gratis' : '15 zł'}
                    </span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    deliveryMethod === 'express' ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => setDeliveryMethod('express')}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Dostawa ekspresowa</h4>
                      <p className="text-sm text-muted-foreground">1-2 dni robocze</p>
                    </div>
                    <span className="font-semibold">25 zł</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Podsumowanie zamówienia */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Podsumowanie zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Ilość: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold">
                        {(item.price * item.quantity).toFixed(2)} zł
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Produkty:</span>
                    <span>{totalPrice.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dostawa:</span>
                    <span>{deliveryPrice === 0 ? 'Gratis' : `${deliveryPrice} zł`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Łącznie:</span>
                    <span>{finalTotal.toFixed(2)} zł</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={handleContinueToPayment}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Przejdź do płatności
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;