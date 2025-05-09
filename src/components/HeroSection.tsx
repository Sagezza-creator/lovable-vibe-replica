
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
  aboutSectionRef: MutableRefObject<HTMLDivElement | null>;
}

const HeroSection = ({ sectionRef, aboutSectionRef }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (heroRef.current && sectionRef.current && aboutSectionRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        // Calculate scale effect (original functionality)
        const scaleProgress = Math.min(scrollPosition / (heroHeight * 2.5), 1);
        const newScale = 1 + scaleProgress * 0.30;
        setScale(newScale);
        
        // Calculate scroll progress for parallax effect
        // This creates a value between 0 and 1 as we scroll through the hero section
        const progress = Math.min(Math.max(scrollPosition / (heroHeight - viewportHeight * 0.5), 0), 1);
        setScrollProgress(progress);
      }
    };

    // Initial calculation
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef, aboutSectionRef]);

  // Calculate transform and opacity based on scroll progress
  const opacity = 1 - scrollProgress * 0.5; // From 1 to 0.5
  const translateY = scrollProgress * -20; // From 0 to -20px

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center pt-16 transition-all duration-300 ease-out" 
      ref={heroRef}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* White background as base */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Background overlay for darkening effect */}
      <div 
        className="absolute inset-0 bg-gray-900 z-1 transition-opacity duration-300 ease-out" 
        style={{ opacity: scrollProgress * 0.2 }}
      ></div>
      
      {/* Background image with scale effect */}
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

      {/* Main content */}
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
