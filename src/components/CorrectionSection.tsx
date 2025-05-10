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
          }`} style={{ transitionDelay: '0.5s' }}>
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
              }`} style={{ transitionDelay: '1s' }}>
                <p>
                  Нейрокоррекция — это целенаправленный процесс, использующий научные открытия в области эпигенетики, нейропластичности и нейрохимии для выявления и деактивации подсознательных программ, вызывающих стресс, страх или дисгармонию в вашей жизни.
                </p>
                <p>
                  В процессе коррекции мы находим нейронные связи, ассоциированные со стрессом и негативным опытом, нейтрализуем их влияние и создаем новые, здоровые модели поведения. Это позволяет разорвать повторяющиеся поведенческие шаблоны (измены, болезни, неудачи), обрести эмоциональную свободу и уверенно принимать решения.
                </p>
                <p className="font-medium">
                  Одна нейрокоррекция длится 3–5 часов и проходит в комфортной обстановке через структурированный диалог. Без специальной подготовки Вы освободитесь от негативных подсознательных программ и избавитесь от стресса, копившегося всю жизнь.
                </p>
              </div>

              {/* Кнопка - анимация слева направо */}
              <div className={`mt-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '1s' }}>
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
              }`} style={{ transitionDelay: '1s' }}>
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