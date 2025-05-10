import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок по центру */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-2">
              Нейрокоррекция
            </h2>
            <p className="text-lg text-gray-700">
              Трансформация подсознательных программ
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Текст в левой половине */}
            <div className="md:w-1/2">
              <Card 
                className={`border border-yellow-100 shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardContent className="p-6">
                  <div className="space-y-4 text-gray-700">
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
                </CardContent>
              </Card>

              {/* Кнопка */}
              <div className={`mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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

            {/* Изображение в правой половине */}
            <div className="md:w-1/2">
              <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: '0.2s' }}>
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