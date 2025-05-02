
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={pageRef}
      className={`min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center p-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`max-w-4xl w-full ${isVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`}>
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent animate-pulse-soft">
            Добро пожаловать
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Современный адаптивный дизайн с плавными анимациями и градиентами
          </p>
          <div className="flex gap-4 justify-center stagger-animation">
            <Button
              asChild
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300"
            >
              <Link to="/home">
                Начать
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 hover-lift transition-all duration-300"
            >
              <Link to="/about">
                Узнать больше
              </Link>
            </Button>
          </div>
        </div>
        
        <div className={`mt-12 flex justify-center ${isVisible ? 'animate-gentle-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <div className="animate-bounce p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center bg-violet-500 text-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
