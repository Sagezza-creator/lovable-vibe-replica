import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!sectionRef.current || !contentRef.current) return;
    
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const sectionTop = sectionRect.top + scrollY;
    const sectionHeight = sectionRect.height;
    
    // Прогресс скролла от 0 до 1
    const progress = Math.min(Math.max((scrollY - sectionTop + windowHeight) / (windowHeight * 0.8), 0), 1);
    setScrollProgress(progress);
    
    // Эффект наплывания
    const translateY = (1 - progress) * 100;
    const opacity = progress * 1.5;
    contentRef.current.style.transform = `translateY(${Math.min(translateY, 100)}%)`;
    contentRef.current.style.opacity = `${Math.min(opacity, 1)}`;
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative z-10 bg-white"
      style={{ 
        marginTop: '-100vh',
        paddingTop: '100vh',
        paddingBottom: '5rem'
      }}
    >
      <div 
        ref={contentRef}
        className="container mx-auto px-4"
        style={{
          transform: 'translateY(100%)',
          opacity: 0,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          willChange: 'transform, opacity'
        }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`lg:w-2/5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img 
                    src="https://svobodarazuma.ru/Images/Avatar-photo.png" 
                    alt="Александр Никифоров"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-50 flex items-center justify-center">
                  <p className="font-bold text-brand-600 text-lg sm:text-xl">2+</p>
                  <p className="text-xs text-brand-800">года опыта</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-50 flex items-center justify-center">
                  <p className="font-bold text-accent-600 text-lg sm:text-xl">1000+</p>
                  <p className="text-xs text-accent-800">часов коррекций</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:w-3/5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Обо мне
            </h2>
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Александр Никифоров
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Я специалист в области психологической помощи с опытом более 2 лет. За это время я провел более 1000 часов нейрокоррекций, которые помогли людями обрести свободу от подсознательных блоков и начать жить полной жизнью.
              </p>
              <p>
              Я работаю с подсознанием, опираясь на новейшие научные достижения в эпигенетике, нейропластичности и нейрохимии. Мой подход устраняет негативные подсознательные программы, освобождает от накопленного стресса и открывает путь к гармонии без поверхностного снятия симптомов.
              </p>
              <p>
                Я верю, что каждый человек заслуживает жить без внутренних барьеров и ограничений. Моя миссия — помочь вам высвободить свой истинный потенциал и построить счастливую жизнь без ограничений, которые накладывает подсознание.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Психология
              </div>
              <div className="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Работа с подсознанием
              </div>
              <div className="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Устранение блоков
              </div>
              <div className="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Поведенческие паттерны
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;