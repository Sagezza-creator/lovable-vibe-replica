
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      ref={pageRef}
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`text-center max-w-md px-6 ${visible ? 'animate-gentle-scale-in' : 'opacity-0'}`}>
        <h1 className="text-9xl font-bold text-brand-500 mb-4 animate-float">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Страница не найдена</h2>
        <p className="text-xl text-gray-600 mb-8">
          Упс! Кажется, вы попали на несуществующую страницу.
        </p>
        <Button asChild className="bg-brand-500 hover:bg-brand-600 hover:scale-105 transition-all">
          <Link to="/" className="inline-flex items-center">
            Вернуться на главную
          </Link>
        </Button>
      </div>
      
      <div className={`mt-16 text-center text-gray-400 ${visible ? 'animate-gentle-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
        <p>Если вы считаете, что это ошибка, пожалуйста, свяжитесь с нами.</p>
      </div>
    </div>
  );
};

export default NotFound;
