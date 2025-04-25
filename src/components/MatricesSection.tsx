
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-lavender-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-lavender-100 flex items-center justify-center flex-shrink-0">
              <Layers size={40} className="text-lavender-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-2">
                Матрицы зачатия
              </h2>
              <p className="text-lg text-gray-700">
                Фундамент вашего подсознательного опыта
              </p>
            </div>
          </div>

          <Card 
            className={`border border-lavender-100 shadow-md transition-all duration-500 mb-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Матрицы зачатия — это клеточная память опыта, полученного во время зачатия, внутриутробного развития и рождения, которая хранится в каждой клетке вашего тела. Эта память формирует основу ваших подсознательных поведенческих паттернов, психологических проблем и жизненных вызовов.
                </p>
                <p>
                  Нарушения в матрицах зачатия могут проявляться как страхи, проблемы в отношениях, сложности с личными границами и даже физические заболевания. Работа с этими матрицами позволяет устранить до 80% базовых подсознательных программ, создающих препятствия в вашей жизни.
                </p>
                <div className="bg-lavender-50 p-4 rounded-lg border border-lavender-100">
                  <p className="font-medium">
                    Проработав 10 основных матриц зачатия, вы создаете прочный фундамент для последующего решения более поздних программ и блоков, сформированных в детстве и взрослой жизни.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
    </section>
  );
};

export default MatricesSection;
