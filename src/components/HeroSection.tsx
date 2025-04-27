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
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Фоновое изображение с оптимизированным оверлеем */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://svobodarazuma.ru/Images/main-banner.jpeg"
          alt="Фоновое изображение"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Заголовок с улучшенной типографикой */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-md">
            Свобода разума: Решите свои проблемы навсегда
          </h1>
          
          {/* Подзаголовок с улучшенной читаемостью */}
          <p className="text-lg md:text-xl text-gray-50 mb-8 font-medium">
            Устраните подсознательные барьеры и живите в гармонии с современными методами трансформации сознания
          </p>
          
          {/* Кнопки с оптимизированными цветами */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600 group text-white">
              <Link to="/contact">
                Связаться со мной
                <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-white border-white/70 hover:bg-white/20 hover:border-white"
            >
              <Link to="/approach">Узнать больше о методе</Link>
            </Button>
          </div>
          
          {/* Блок статистики с улучшенной видимостью */}
          <div className="mt-16 flex flex-col md:flex-row justify-start gap-6 md:gap-12 stagger-animation">
            <div className={`bg-white/90 p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">500+</p>
              <p className="text-gray-700">довольных клиентов</p>
            </div>
            <div className={`bg-white/90 p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
              <p className="text-brand-500 font-semibold text-3xl mb-1">2+</p>
              <p className="text-gray-700">года опыта</p>
            </div>
            <div className={`bg-white/90 p-6 rounded-lg shadow-md opacity-0 animate-fade-up`}>
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