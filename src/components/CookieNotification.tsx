import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto md:left-auto md:right-4 md:max-w-sm">
      <Card className="p-4 bg-background border shadow-lg">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-powder-pink-light rounded-full flex items-center justify-center flex-shrink-0">
            <Cookie className="w-4 h-4 text-powder-pink-dark" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-foreground mb-2">
              Używamy plików cookie
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenie użytkowania. 
              Kontynuując, zgadzasz się na ich użycie.
            </p>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                onClick={acceptCookies}
                className="bg-powder-pink hover:bg-powder-pink-dark text-xs"
              >
                Akceptuję
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={declineCookies}
                className="text-xs"
              >
                Odrzucam
              </Button>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={declineCookies}
            className="w-6 h-6 p-0 flex-shrink-0"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieNotification;