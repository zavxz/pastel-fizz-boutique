import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    if (!product.inStock) {
      toast({
        title: "Produkt niedostępny",
        description: "Ten produkt jest obecnie niedostępny.",
        variant: "destructive"
      });
      return;
    }

    addToCart(product);
    toast({
      title: "Dodano do koszyka",
      description: `${product.name} został dodany do koszyka.`,
    });
  };

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Usunięto z listy życzeń",
      description: `${productName} został usunięty z listy życzeń.`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto" />
              <h1 className="text-3xl font-bold text-foreground">
                Twoja Lista Życzeń jest Pusta
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Dodaj produkty do listy życzeń, aby je łatwo odnaleźć później i móc kupić w odpowiednim momencie.
              </p>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-youthful text-white hover:opacity-90">
              <Link to="/produkty">
                Odkryj Naszą Kolekcję
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Lista Życzeń
            </h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'produkt' : items.length < 5 ? 'produkty' : 'produktów'} w Twojej liście życzeń
            </p>
          </div>
          
          {items.length > 0 && (
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                onClick={clearWishlist}
                className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Wyczyść Listę
              </Button>
            </div>
          )}
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <Card key={product.id} className="group hover:shadow-hover transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link to={`/produkt/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white text-destructive"
                    onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Niedostępne
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <Link to={`/produkt/${product.id}`}>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground capitalize">
                      {product.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price.toFixed(2)} zł
                    </span>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-gradient-youthful text-white hover:opacity-90"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Dodaj do Koszyka' : 'Niedostępne'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;