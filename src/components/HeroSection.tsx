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
        
        // Увеличиваем делитель (heroHeight * 2.5) для более продолжительного эффекта
        // И увеличиваем максимальный scale до 1.15 (15% увеличение)
        const scrollProgress = Math.min(scrollPosition / (heroHeight * 2.5), 1);
        const newScale = 1 + scrollProgress * 0.30; // 0.15 = 15% увеличение
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16" ref={heroRef}>
      {/* Белый фон как подложка */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Фоновое изображение с более продолжительным скейлом */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <img
          src="https://svobodarazuma.ru/Images/main-banner.png"
          alt="Фоновое изображение"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out will-change-transform"
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        />
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-heading drop-shadow-lg">
              Свобода разума: Откройте путь к гармонии
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Избавьтесь от внутренних барьеров и живите свободно
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600 group shadow-lg">
              <Link to="/contact">
                Начните уже сейчас
                <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-gray-700 border-brand-700 hover:bg-gray-100 shadow-lg">
              <Link to="/approach">Как это работает?</Link>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-start gap-6 md:gap-12 stagger-animation">
            <div className={`bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">1000+</p>
              <p className="text-gray-700">часов коррекций</p>
            </div>
            <div className={`bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">2+</p>
              <p className="text-gray-700">года опыта</p>
            </div>
            <div className={`bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">95%</p>
              <p className="text-gray-700">успешных результатов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;