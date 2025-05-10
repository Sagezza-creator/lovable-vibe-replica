import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

const MatricesSection = () => {
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
          }`} style={{ transitionDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Матрицы зачатия
            </h2>
            <p className="text-lg text-gray-700">
              Фундамент вашего подсознательного опыта
            </p>
          </div>

          {/* Распределение контента - изображение слева, текст справа */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Изображение слева - анимация слева направо */}
            <div className="md:w-[400px] flex items-center">
              <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-700 ease-out w-full ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.2s' }}>
                <img 
                  src="https://www.svobodarazuma.ru/Images/MatrixHome.jpg" 
                  alt="Матрицы зачатия" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Текст справа - анимация справа налево */}
            <div className="flex-1 flex flex-col justify-center">
              <div className={`space-y-6 text-gray-700 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '0.3s' }}>
                <p>
                  Матрицы зачатия — это клеточная память опыта, полученного во время зачатия, внутриутробного развития и рождения, которая хранится в каждой клетке вашего тела. Эта память формирует основу ваших подсознательных поведенческих паттернов, психологических проблем и жизненных вызовов.
                </p>
                <p>
                  Нарушения в матрицах зачатия могут проявляться как страхи, проблемы в отношениях, сложности с личными границами и даже физические заболевания. Работа с этими матрицами позволяет устранить до 80% базовых подсознательных программ, создающих препятствия в вашей жизни.
                </p>
                <p className="font-medium bg-lavender-50 p-4 rounded-lg border border-lavender-100">
                  Проработав 10 основных матриц зачатия, вы создаете прочный фундамент для последующего решения более поздних программ и блоков, сформированных в детстве и взрослой жизни.
                </p>
              </div>

              {/* Кнопка - анимация справа налево */}
              <div className={`mt-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ transitionDelay: '0.5s' }}>
                <Button asChild variant="outline" className="group border-lavender-300 text-lavender-700 hover:bg-lavender-50">
                  <Link to="/conception-matrices">
                    Узнать больше о матрицах зачатия
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatricesSection;