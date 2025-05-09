import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`lg:w-2/5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <video
                poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l13.5-7.94a1.5 1.5 0 000-2.538l-13.5-7.94z" />
                  </svg>
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
                Я специалист в области психологической помощи с опытом более 2 лет. За это время я провел более 1000 часов нейрокоррекций, которые помогли людям обрести свободу от подсознательных блоков и начать жить полной жизнью.
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