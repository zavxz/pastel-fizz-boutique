import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, Smartphone, Building2, Loader2 } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Symulacja płatności
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    navigate('/zamowienie-potwierdzone');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/realizacja-zamowienia')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót
          </Button>
          <Badge variant="outline">Krok 2 z 2</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Wybierz metodę płatności</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Metody płatności */}
            <div className="space-y-4 mb-6">
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Karta płatnicza</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  paymentMethod === 'blik' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setPaymentMethod('blik')}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5" />
                  <span className="font-medium">BLIK</span>
                </div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  paymentMethod === 'transfer' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setPaymentMethod('transfer')}
              >
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">Przelew bankowy</span>
                </div>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Numer karty *</Label>
                    <Input 
                      id="cardNumber" 
                      placeholder="1234 5678 9012 3456" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Data ważności *</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/RR" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input 
                        id="cvv" 
                        placeholder="123" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardName">Imię i nazwisko *</Label>
                    <Input 
                      id="cardName" 
                      placeholder="Jan Kowalski" 
                      required 
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'blik' && (
                <div>
                  <Label htmlFor="blikCode">Kod BLIK *</Label>
                  <Input 
                    id="blikCode" 
                    placeholder="123456" 
                    maxLength={6}
                    required 
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Wygeneruj kod BLIK w swojej aplikacji bankowej
                  </p>
                </div>
              )}

              {paymentMethod === 'transfer' && (
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Dane do przelewu:</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Odbiorca:</strong> Liluu Sp. z o.o.</p>
                    <p><strong>Numer konta:</strong> 12 3456 7890 1234 5678 9012 3456</p>
                    <p><strong>Tytuł:</strong> Zamówienie #{Math.floor(Math.random() * 10000)}</p>
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Przetwarzanie płatności...
                  </>
                ) : (
                  'Zapłać i złóż zamówienie'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Płatność jest zabezpieczona SSL. Twoje dane są chronione.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;