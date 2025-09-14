// Updated page for the Clay Beauty jewelry store

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Witaj w <span className="text-primary">Clay Beauty</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Odkryj magię ręcznie wykonanej biżuterii z modeliny
        </p>
        <Button asChild size="lg" className="bg-powder-pink hover:bg-powder-pink-dark text-primary-foreground">
          <Link to="/">
            Wejdź do Sklepu
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
