import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAvailable, setShowAvailable] = useState(true);
  const [showUnavailable, setShowUnavailable] = useState(true);
  
  const selectedCategory = searchParams.get('kategoria');

  const categories = [
    { value: 'wszystkie', label: 'Wszystkie Produkty' },
    { value: 'kolczyki', label: 'Kolczyki' },
    { value: 'naszyjniki', label: 'Naszyjniki' },
    { value: 'bransoletki', label: 'Bransoletki' },
    { value: 'inne', label: 'Zestawy' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...sampleProducts];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'wszystkie') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by availability
    if (!showAvailable || !showUnavailable) {
      filtered = filtered.filter(product => {
        if (showAvailable && product.inStock) return true;
        if (showUnavailable && !product.inStock) return true;
        return false;
      });
    }

    // Sort products
    switch (sortBy) {
      case 'availability':
        filtered.sort((a, b) => {
          if (a.inStock && !b.inStock) return -1;
          if (!a.inStock && b.inStock) return 1;
          return 0;
        });
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, showAvailable, showUnavailable]);

  const handleCategoryChange = (category: string) => {
    if (category === 'wszystkie') {
      setSearchParams({});
    } else {
      setSearchParams({ kategoria: category });
    }
  };

  const currentCategoryLabel = categories.find(cat => cat.value === (selectedCategory || 'wszystkie'))?.label;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-powder-pink text-powder-pink">
              Sklep
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {currentCategoryLabel}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Odkryj naszą pełną kolekcję wyjątkowej biżuterii z modeliny. 
              Każdy element wykonany ręcznie z największą starannością.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Kategorie
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value || (!selectedCategory && category.value === 'wszystkie') ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Additional Filters */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Dostępność</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-border" 
                    checked={showAvailable}
                    onChange={(e) => setShowAvailable(e.target.checked)}
                  />
                  <span className="text-sm">Dostępne</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-border" 
                    checked={showUnavailable}
                    onChange={(e) => setShowUnavailable(e.target.checked)}
                  />
                  <span className="text-sm">Niedostępne</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="text-sm text-muted-foreground">
                Znaleziono {filteredProducts.length} produktów
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sortuj według" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nazwa A-Z</SelectItem>
                    <SelectItem value="availability">Dostępność</SelectItem>
                    <SelectItem value="price-asc">Cena: Najniższa</SelectItem>
                    <SelectItem value="price-desc">Cena: Najwyższa</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Brak produktów w tej kategorii.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;