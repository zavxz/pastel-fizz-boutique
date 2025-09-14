export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: 'kolczyki' | 'naszyjniki' | 'bransoletki' | 'inne';
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  totalItems: number;
}