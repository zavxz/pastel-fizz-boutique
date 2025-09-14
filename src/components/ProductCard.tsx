import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 ease-elegant">
      <Link to={`/produkt/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 hover:bg-background"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingBag className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 hover:bg-background"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {product.featured && (
              <Badge variant="default" className="bg-powder-pink text-powder-pink-foreground">
                Polecane
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive">
                Niedostępne
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">
                {product.price.toFixed(2)} zł
              </span>
              
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;