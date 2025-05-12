
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CorrectionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Заголовок по центру с анимацией снизу вверх */}
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Нейрокоррекция
            </h2>
            <p className="text-lg text-gray-700">
              Трансформация подсознательных программ
            </p>
          </div>

          {/* Распределение контента по всей ширине */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Текст - анимация слева направо */}
            <div className="flex-1 flex flex-col justify-center">
              <div className={`space-y-6 text-gray-700 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.6s' }}>
                <p>
                  Нейрокоррекция — это эффективный метод освобождения от ограничивающих подсознательных программ, которые управляют вашими реакциями, эмоциями и поведением без вашего ведома.
                </p>
                <p>
                  В процессе коррекции мы находим первоисточники ваших проблем, деактивируем деструктивные связи в мозге и формируем новые, позитивные нейронные связи. Это позволяет разорвать повторяющиеся поведенческие шаблоны и обрести эмоциональную свободу.
                </p>
                <p className="font-medium bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                  Одна нейрокоррекция длится 3–5 часов и проходит в комфортной обстановке через структурированный диалог. Без гипноза или погружения в болезненные воспоминания Вы освободитесь от негативных подсознательных программ.
                </p>
              </div>

              {/* Кнопка - выровнена по правому краю текстового блока */}
              <div className={`mt-8 flex justify-end transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '0.8s' }}>
                <Button asChild variant="outline" className="group border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                  <Link to="/correction">
                    Узнать больше о коррекции
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Изображение - анимация справа налево */}
            <div className="md:w-[400px] flex items-center justify-end">
              <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-700 ease-out w-full ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '0.4s' }}>
                <img 
                  src="https://svobodarazuma.ru/Images/correction.jpg" 
                  alt="Нейрокоррекция" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorrectionSection;

