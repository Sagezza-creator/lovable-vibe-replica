import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        
        // Вычисляем новый scale (например, от 1 до 1.1 в зависимости от прокрутки)
        const newScale = 1 + Math.min(scrollPosition / (heroHeight * 2), 0.1);
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16" ref={heroRef}>
      {/* Белый фон как подложка */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Фоновое изображение с трансформацией scale */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <img
          src="https://svobodarazuma.ru/Images/main-banner.png"
          alt="Фоновое изображение"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        />
      </div>

      {/* Остальной код остается без изменений */}
      <div className="container mx-auto px-4 relative z-10">
        {/* ... */}
      </div>
    </div>
  );
};

export default HeroSection;