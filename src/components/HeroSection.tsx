
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
        const scrollProgress = Math.min(scrollPosition / (heroHeight * 2.5), 1);
        const newScale = 1 + scrollProgress * 0.30;
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center pt-16 z-20" ref={heroRef}>
      {/* Белый фон */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Фоновое изображение */}
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

      {/* Контент */}
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

      {/* Волна-разделитель */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none rotate-180">
        <svg
          className="w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
              70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,
              512.34,53.67,583,72.05c69.27,18,138.3,24.88,
              209.4,13.08,36.15-6,69.85-17.84,104.45-29.34,
              C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,
              47.69,72.05,99.41,111.27,165,111,
              224.58,91.58c31.15-10.15,60.09-26.07,
              89.67-39.8,40.92-19,84.73-46,
              130.83-49.67,36.26-2.85,70.9,9.42,
              98.6,31.56,31.77,25.39,62.32,62,
              103.63,73,40.44,10.79,81.35-6.69,
              119.13-24.28s75.16-39,116.92-43.05,
              c59.73-5.85,113.28,22.88,
              168.9,38.84,30.2,8.66,59,6.17,
              87.09-7.5,22.43-10.89,48-26.93,
              60.65-49.24V0Z"
            opacity=".5"
            className="fill-white"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,
              475.83,42.57c43-7.64,84.23-20.12,
              127.61-26.46,59-8.63,112.48,12.24,
              165.56,35.4C827.93,77.22,886,95.24,
              951.2,90c86.53-7,172.46-45.71,
              248.8-84.81V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
