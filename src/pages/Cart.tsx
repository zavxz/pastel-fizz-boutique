import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      toast({
        title: "Usunięto z koszyka",
        description: "Produkt został usunięty z koszyka.",
      });
      return;
    }
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Usunięto z koszyka",
      description: `${productName} został usunięty z koszyka.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Koszyk wyczyszczony",
      description: "Wszystkie produkty zostały usunięte z koszyka.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Twój koszyk jest pusty</h1>
              <p className="text-muted-foreground">
                Wygląda na to, że nie dodałaś jeszcze żadnych produktów do koszyka.
              </p>
            </div>
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link to="/produkty">
                  Rozpocznij Zakupy
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Wróć na Stronę Główną
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/produkty">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kontynuuj Zakupy
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Koszyk Zakupowy</h1>
                <p className="text-sm text-muted-foreground">
                  {totalItems} {totalItems === 1 ? 'produkt' : 'produkty'} w koszyku
                </p>
              </div>
            </div>
            
            <Button variant="outline" onClick={handleClearCart} className="text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Wyczyść Koszyk
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden bg-gradient-card flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <Link 
                            to={`/produkt/${item.id}`}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-12 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-semibold text-foreground">
                            {(item.price * item.quantity).toFixed(2)} zł
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.price.toFixed(2)} zł za sztukę
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Podsumowanie Zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Wartość produktów:</span>
                    <span>{totalPrice.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dostawa:</span>
                    <span>{totalPrice >= 150 ? 'Gratis' : '15.00 zł'}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Razem:</span>
                    <span className="text-primary">
                      {(totalPrice + (totalPrice >= 150 ? 0 : 15)).toFixed(2)} zł
                    </span>
                  </div>
                </div>

                {totalPrice < 150 && (
                  <div className="p-3 bg-powder-pink-light rounded-lg">
                    <p className="text-sm text-powder-pink-dark">
                      Dodaj produkty za {(150 - totalPrice).toFixed(2)} zł więcej, 
                      aby otrzymać darmową dostawę!
                    </p>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full bg-powder-pink hover:bg-powder-pink-dark text-primary-foreground"
                  onClick={() => navigate('/realizacja-zamowienia')}
                >
                  Przejdź do Płatności
                </Button>

                <div className="text-center text-xs text-muted-foreground space-y-1">
                  <div>🔒 Bezpieczne płatności</div>
                  <div>📦 Darmowa dostawa od 150 zł</div>
                  <div>↩️ 30 dni na zwrot</div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-center">Dlaczego warto u nas kupować?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Każdy produkt wykonany ręcznie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Najwyższa jakość materiałów</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Szybka i bezpieczna dostawa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>500+ zadowolonych klientek</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;