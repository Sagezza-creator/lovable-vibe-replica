
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16" 
         style={{
           backgroundImage: "url('/lovable-uploads/9dbfcb2e-0d0d-4aa9-a164-7d6ce2f4b41a.png')",
           backgroundPosition: "right",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat"
         }}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading leading-tight">
            Свобода разума: Решите свои проблемы навсегда
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Уберите подсознательные блоки и живите счастливо с помощью инновационных методов подсознательной перепрограммации
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group bg-accent hover:bg-accent/90">
              <Link to="/contact">
                Связаться со мной
                <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/approach">Узнать больше о методе</Link>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 md:gap-12 stagger-animation">
            <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">500+</p>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
            <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">2+</p>
              <p className="text-gray-600">года опыта</p>
            </div>
            <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">95%</p>
              <p className="text-gray-600">успешных результатов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
