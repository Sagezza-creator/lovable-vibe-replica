
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wand } from 'lucide-react';

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-lavender-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <Wand size={40} className="text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-2">
                Коррекция
              </h2>
              <p className="text-lg text-gray-700">
                Трансформация подсознательных программ
              </p>
            </div>
          </div>

          <Card 
            className={`border border-yellow-100 shadow-md transition-all duration-500 mb-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Коррекция — это целенаправленный процесс, использующий знания эпигенетики для выявления и деактивации подсознательных программ, вызывающих стресс, страх или дисгармонию в вашей жизни.
                </p>
                <p>
                  В процессе коррекции мы находим нейронные связи, ассоциированные со стрессом и негативным опытом, нейтрализуем их влияние и создаем новые, здоровые модели поведения. Это позволяет разорвать повторяющиеся поведенческие шаблоны (измены, болезни, неудачи), обрести эмоциональную свободу и уверенно принимать решения.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <p className="font-medium">
                    Одна коррекция длится в среднем 3-5 часов и проходит в формате структурированного диалога, не требующего погружения в тяжелые эмоциональные состояния или повторного переживания травм.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
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
      </div>
    </section>
  );
};

export default CorrectionSection;
