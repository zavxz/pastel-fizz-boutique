import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import { sampleProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const product = sampleProducts.find(p => p.id === id);
  const relatedProducts = sampleProducts
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Produkt nie został znaleziony</h1>
          <Button asChild>
            <Link to="/sklep">Wróć do sklepu</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
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

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Usunięto z listy życzeń",
        description: `${product.name} został usunięty z listy życzeń.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Dodano do listy życzeń",
        description: `${product.name} został dodany do listy życzeń.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link to="/produkty">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do produktów
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-card">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    Niedostępne
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Thumbnail images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-powder-pink text-powder-pink">
                  {product.category}
                </Badge>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleWishlistToggle}
                    className={isInWishlist(product.id) ? 'text-red-500' : ''}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-foreground">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price.toFixed(2)} zł
                </span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(24 opinii)</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-powder-pink hover:bg-powder-pink-dark text-primary-foreground"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {product.inStock ? 'Dodaj do Koszyka' : 'Niedostępne'}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className={`w-full ${isInWishlist(product.id) ? 'border-red-500 text-red-500' : ''}`}
                onClick={handleWishlistToggle}
              >
                <Heart className={`w-4 h-4 mr-2 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                {isInWishlist(product.id) ? 'Usuń z Listy Życzeń' : 'Dodaj do Listy Życzeń'}
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Gwarancja Jakości</div>
                      <div className="text-xs text-muted-foreground">12 miesięcy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Darmowa Dostawa</div>
                      <div className="text-xs text-muted-foreground">Od 150 zł</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Zwrot</div>
                      <div className="text-xs text-muted-foreground">30 dni</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">Szczegóły Produktu</h3>
                <Separator />
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Materiał:</span>
                    <span>Modelina polimerowa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Wykończenie:</span>
                    <span>Matowe z elementami błyszczącymi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rozmiar:</span>
                    <span>Uniwersalny</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pochodzenie:</span>
                    <span>Ręcznie wykonane w Polsce</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Podobne Produkty
              </h2>
              <p className="text-muted-foreground">
                Odkryj inne piękne dzieła z tej samej kategorii
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;