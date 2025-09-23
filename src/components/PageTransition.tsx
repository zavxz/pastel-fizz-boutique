import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      // Start exit animation
      const exitTimeout = setTimeout(() => {
        setDisplayLocation(location);
        
        // Start enter animation
        const enterTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);

        return () => clearTimeout(enterTimeout);
      }, 200);

      return () => clearTimeout(exitTimeout);
    }
  }, [location, displayLocation]);

  return (
    <div 
      className={`
        transition-all duration-300 ease-out
        ${isTransitioning 
          ? 'opacity-0 transform translate-y-4 scale-95' 
          : 'opacity-100 transform translate-y-0 scale-100'
        }
      `}
    >
      {children}
    </div>
  );
};

export default PageTransition;